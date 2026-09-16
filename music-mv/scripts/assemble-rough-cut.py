"""Assemble composite shots 10/29 and a timed rough cut with the master WAV."""

from __future__ import annotations

import json
from pathlib import Path

import av
import cv2
import numpy as np

SONG_ROOT = Path(__file__).resolve().parents[1] / "songs/20260823-one-day-short-of-forever"
SONG_JSON = SONG_ROOT / "song.json"
MV_ROOT = SONG_ROOT
RAW_DIR = MV_ROOT / "generated/video/raw"
FINAL_DIR = MV_ROOT / "generated/video/final"
MASTER_WAV = MV_ROOT / "music/one-day-short-of-forever_master_03m51s.wav"

FPS = 24
OUT_W = 1920
OUT_H = 1080
PILLAR = (22, 22, 24)


def parse_mmss(value: str) -> int:
    minutes, seconds = str(value).split(":")
    return int(minutes) * 60 + int(seconds)


def load_frames(path: Path) -> list[np.ndarray]:
    cap = cv2.VideoCapture(str(path))
    frames = []
    while True:
        ok, frame = cap.read()
        if not ok:
            break
        frames.append(frame)
    cap.release()
    if not frames:
        raise RuntimeError(f"No frames in {path}")
    return frames


def sample_index(length: int, index: int, count: int) -> int:
    if count <= 1 or length <= 1:
        return 0
    return min(length - 1, int(round(index * (length - 1) / (count - 1))))


def letterbox(frame: np.ndarray, width: int = OUT_W, height: int = OUT_H) -> np.ndarray:
    source_h, source_w = frame.shape[:2]
    scale = min(width / source_w, height / source_h)
    new_w = max(2, int(round(source_w * scale)) // 2 * 2)
    new_h = max(2, int(round(source_h * scale)) // 2 * 2)
    interpolation = cv2.INTER_AREA if scale < 1 else cv2.INTER_CUBIC
    resized = cv2.resize(frame, (new_w, new_h), interpolation=interpolation)
    canvas = np.zeros((height, width, 3), dtype=np.uint8)
    x = (width - new_w) // 2
    y = (height - new_h) // 2
    canvas[y : y + new_h, x : x + new_w] = resized
    return canvas


def photo_frame(frame: np.ndarray, width: int = OUT_W, height: int = OUT_H) -> np.ndarray:
    source_h, source_w = frame.shape[:2]
    crop_w = min(source_w, int(round(source_h * 4 / 3)))
    x0 = max(0, (source_w - crop_w) // 2)
    crop = frame[:, x0 : x0 + crop_w]
    target_h = height
    target_w = int(round(target_h * 4 / 3)) // 2 * 2
    interpolation = cv2.INTER_AREA if target_w < crop.shape[1] else cv2.INTER_CUBIC
    resized = cv2.resize(crop, (target_w, target_h), interpolation=interpolation)
    canvas = np.full((height, width, 3), PILLAR, dtype=np.uint8)
    x = (width - target_w) // 2
    canvas[:, x : x + target_w] = resized
    return canvas


def blend(a: np.ndarray, b: np.ndarray, alpha: float) -> np.ndarray:
    alpha = min(1.0, max(0.0, alpha))
    return cv2.addWeighted(a, 1.0 - alpha, b, alpha, 0)


def pose_window(frames: list[np.ndarray], start: float = 0.45, end: float = 0.88) -> list[np.ndarray]:
    begin = int(len(frames) * start)
    stop = max(begin + 8, int(len(frames) * end))
    return frames[begin:stop]


def timed_clip(frames: list[np.ndarray], count: int, framed: bool) -> list[np.ndarray]:
    out = []
    for index in range(count):
        source = frames[sample_index(len(frames), index, count)]
        out.append(photo_frame(source) if framed else letterbox(source))
    return out


def portrait_clip(frames: list[np.ndarray], count: int) -> list[np.ndarray]:
    return timed_clip(pose_window(frames), count, True)


def dissolve_montage(clips: list[list[np.ndarray]], total: int, hold: int, fade: int, white_tail: int = 0) -> list[np.ndarray]:
    if not clips:
        raise RuntimeError("No montage clips")
    body = total - white_tail
    pieces: list[tuple[int, int, list[np.ndarray]]] = []
    for index, frames in enumerate(clips):
        start = index * hold
        end = body if index == len(clips) - 1 else start + hold + fade
        pieces.append((start, end, frames))
    out: list[np.ndarray] = []
    for frame_index in range(body):
        active: list[np.ndarray] = []
        starts: list[int] = []
        for start, end, frames in pieces:
            if start <= frame_index < end:
                local = frame_index - start
                span = max(1, end - start)
                active.append(frames[sample_index(len(frames), local, span)])
                starts.append(start)
        if len(active) == 1:
            out.append(active[0])
        elif len(active) >= 2:
            alpha = (frame_index - starts[-1] + 1) / max(1, fade)
            out.append(blend(active[0], active[1], alpha))
        else:
            out.append(out[-1] if out else np.full((OUT_H, OUT_W, 3), PILLAR, dtype=np.uint8))
    if white_tail:
        white = np.full((OUT_H, OUT_W, 3), 245, dtype=np.uint8)
        last = out[-1]
        for local in range(white_tail):
            out.append(blend(last, white, (local + 1) / white_tail))
    if len(out) != total:
        raise RuntimeError(f"Montage length {len(out)} != {total}")
    return out


def write_video(path: Path, frames: list[np.ndarray], audio_path: Path | None = None) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    container = av.open(str(path), "w")
    stream = container.add_stream("libx264", rate=FPS)
    stream.width = OUT_W
    stream.height = OUT_H
    stream.pix_fmt = "yuv420p"
    stream.options = {"preset": "veryfast", "crf": "18"}
    audio_stream = None
    if audio_path:
        audio_stream = container.add_stream("aac", rate=44100)
    for frame in frames:
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        video_frame = av.VideoFrame.from_ndarray(rgb, format="rgb24")
        for packet in stream.encode(video_frame):
            container.mux(packet)
    for packet in stream.encode():
        container.mux(packet)
    if audio_stream:
        audio_in = av.open(str(audio_path))
        resampler = av.audio.resampler.AudioResampler(format="fltp", layout="stereo", rate=44100)
        for packet in audio_in.demux():
            if packet.dts is None:
                continue
            for audio_frame in packet.decode():
                resampled = resampler.resample(audio_frame)
                converted_frames = resampled if isinstance(resampled, list) else [resampled]
                for converted in converted_frames:
                    if converted is None:
                        continue
                    converted.pts = None
                    for out_packet in audio_stream.encode(converted):
                        container.mux(out_packet)
        for out_packet in audio_stream.encode():
            container.mux(out_packet)
        audio_in.close()
    container.close()


def write_video_from_iter(path: Path, frame_iter, audio_path: Path | None = None) -> int:
    path.parent.mkdir(parents=True, exist_ok=True)
    container = av.open(str(path), "w")
    stream = container.add_stream("libx264", rate=FPS)
    stream.width = OUT_W
    stream.height = OUT_H
    stream.pix_fmt = "yuv420p"
    stream.options = {"preset": "veryfast", "crf": "18"}
    audio_stream = None
    if audio_path:
        audio_stream = container.add_stream("aac", rate=44100)
    count = 0
    for frame in frame_iter:
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        video_frame = av.VideoFrame.from_ndarray(rgb, format="rgb24")
        for packet in stream.encode(video_frame):
            container.mux(packet)
        count += 1
        if count % 240 == 0:
            print(f"  encoded {count} frames", flush=True)
    for packet in stream.encode():
        container.mux(packet)
    if audio_stream:
        audio_in = av.open(str(audio_path))
        resampler = av.audio.resampler.AudioResampler(format="fltp", layout="stereo", rate=44100)
        for packet in audio_in.demux():
            if packet.dts is None:
                continue
            for audio_frame in packet.decode():
                resampled = resampler.resample(audio_frame)
                frames = resampled if isinstance(resampled, list) else [resampled]
                for converted in frames:
                    if converted is None:
                        continue
                    converted.pts = None
                    for out_packet in audio_stream.encode(converted):
                        container.mux(out_packet)
        for out_packet in audio_stream.encode():
            container.mux(out_packet)
        audio_in.close()
    container.close()
    return count


def iter_assembly(shots: list[dict], source_05, source_06, source_07, source_11):
    for shot in shots:
        start = parse_mmss(shot["start"])
        end = parse_mmss(shot["end"])
        count = (end - start) * FPS
        shot_id = shot["id"]
        print(f"{shot_id} {shot['start']}-{shot['end']} {count}f", flush=True)
        if shot_id == "shot10":
            frames = dissolve_montage(
                [portrait_clip(source_05, 96), portrait_clip(source_06, 96), portrait_clip(source_07, 96)],
                total=count,
                hold=40,
                fade=24,
            )
            yield from frames
            continue
        if shot_id == "shot29":
            frames = dissolve_montage(
                [
                    portrait_clip(source_05, 80),
                    portrait_clip(source_06, 80),
                    portrait_clip(source_07, 80),
                    portrait_clip(source_11, 96),
                ],
                total=count,
                hold=32,
                fade=16,
                white_tail=16,
            )
            yield from frames
            continue
        source = load_frames(RAW_DIR / Path(shot["output"]).name)
        for index in range(count):
            yield letterbox(source[sample_index(len(source), index, count)])
        del source


def main() -> None:
    song = json.loads(SONG_JSON.read_text(encoding="utf-8"))
    shots = song["shots"]
    source_05 = load_frames(RAW_DIR / "shot_05_h3_v01.mp4")
    source_06 = load_frames(RAW_DIR / "shot_06_h3_v01.mp4")
    source_07 = load_frames(RAW_DIR / "shot_07_h3_v01.mp4")
    source_11 = load_frames(RAW_DIR / "shot_11_h3_v02.mp4")

    shot10 = dissolve_montage(
        [portrait_clip(source_05, 96), portrait_clip(source_06, 96), portrait_clip(source_07, 96)],
        total=7 * FPS,
        hold=40,
        fade=24,
    )
    shot10_path = RAW_DIR / "shot_10_h3_v02.mp4"
    print(f"writing {shot10_path}", flush=True)
    write_video(shot10_path, shot10)

    shot29 = dissolve_montage(
        [
            portrait_clip(source_05, 80),
            portrait_clip(source_06, 80),
            portrait_clip(source_07, 80),
            portrait_clip(source_11, 96),
        ],
        total=8 * FPS,
        hold=32,
        fade=16,
        white_tail=16,
    )
    shot29_path = RAW_DIR / "shot_29_h3_v02.mp4"
    print(f"writing {shot29_path}", flush=True)
    write_video(shot29_path, shot29)

    final_path = FINAL_DIR / "rough-cut_v03.mp4"
    print(f"writing {final_path}", flush=True)
    encoded = write_video_from_iter(
        final_path,
        iter_assembly(shots, source_05, source_06, source_07, source_11),
        audio_path=MASTER_WAV,
    )
    expected = 231 * FPS
    print(f"rough cut frames={encoded} expected={expected} path={final_path}")
    if encoded != expected:
        raise SystemExit(f"Frame count mismatch: {encoded} != {expected}")


if __name__ == "__main__":
    main()
