from __future__ import annotations

import argparse
import json
from pathlib import Path

import numpy as np
import torch
from scipy.io import wavfile
from scipy.ndimage import gaussian_filter1d
from scipy.signal import find_peaks
from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor, pipeline


LOCAL_WHISPER_MODEL = Path(r"D:\Models\Whisper\whisper-large-v3-turbo")
DEFAULT_WHISPER_MODEL = (
    str(LOCAL_WHISPER_MODEL)
    if LOCAL_WHISPER_MODEL.exists()
    else "openai/whisper-large-v3-turbo"
)


def load_mono(path: Path) -> tuple[int, np.ndarray]:
    sample_rate, audio = wavfile.read(path)
    if audio.ndim > 1:
        audio = audio.mean(axis=1)
    if np.issubdtype(audio.dtype, np.integer):
        audio = audio.astype(np.float32) / np.iinfo(audio.dtype).max
    else:
        audio = audio.astype(np.float32)
    return sample_rate, audio


def estimate_tempo(sample_rate: int, audio: np.ndarray) -> float:
    frame = 1024
    hop = 256
    if len(audio) < frame:
        return 0.0

    window = np.hanning(frame).astype(np.float32)
    spectra = []
    for start in range(0, len(audio) - frame, hop):
        spectra.append(np.abs(np.fft.rfft(audio[start : start + frame] * window)))
    magnitudes = np.asarray(spectra)
    flux = np.maximum(0.0, np.diff(magnitudes, axis=0)).sum(axis=1)
    flux = gaussian_filter1d(flux, sigma=2)
    flux -= flux.mean()

    fps = sample_rate / hop
    min_lag = int(fps * 60 / 180)
    max_lag = int(fps * 60 / 60)
    autocorr = np.correlate(flux, flux, mode="full")[len(flux) - 1 :]
    lag = min_lag + int(np.argmax(autocorr[min_lag : max_lag + 1]))
    return round(60 * fps / lag, 1)


def energy_sections(sample_rate: int, audio: np.ndarray) -> dict[str, object]:
    window_seconds = 0.5
    window = max(1, int(sample_rate * window_seconds))
    usable = len(audio) - (len(audio) % window)
    chunks = audio[:usable].reshape(-1, window)
    rms = np.sqrt(np.mean(chunks * chunks, axis=1) + 1e-12)
    db = 20 * np.log10(rms + 1e-9)
    smooth = gaussian_filter1d(db, sigma=2)
    prominence = max(1.2, float(np.std(smooth) * 0.45))
    peaks, _ = find_peaks(smooth, distance=12, prominence=prominence)
    valleys, _ = find_peaks(-smooth, distance=10, prominence=prominence * 0.7)

    points = sorted(
        {
            0.0,
            round(len(audio) / sample_rate, 1),
            *[round(float(i * window_seconds), 1) for i in peaks],
            *[round(float(i * window_seconds), 1) for i in valleys],
        }
    )
    return {
        "window_seconds": window_seconds,
        "mean_dbfs": round(float(db.mean()), 2),
        "peak_energy_times": [round(float(i * window_seconds), 1) for i in peaks],
        "transition_candidates": points,
    }


def transcribe(path: Path, model_id: str) -> dict[str, object]:
    sample_rate, audio = load_mono(path)
    dtype = torch.float16 if torch.cuda.is_available() else torch.float32
    device = "cuda:0" if torch.cuda.is_available() else "cpu"

    model = AutoModelForSpeechSeq2Seq.from_pretrained(
        model_id,
        torch_dtype=dtype,
        low_cpu_mem_usage=True,
        use_safetensors=True,
    )
    model.to(device)
    processor = AutoProcessor.from_pretrained(model_id)
    recognizer = pipeline(
        "automatic-speech-recognition",
        model=model,
        tokenizer=processor.tokenizer,
        feature_extractor=processor.feature_extractor,
        torch_dtype=dtype,
        device=device,
        chunk_length_s=30,
        batch_size=4,
    )
    return recognizer(
        {"array": audio, "sampling_rate": sample_rate},
        return_timestamps=True,
        generate_kwargs={"language": "zh", "task": "transcribe"},
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("audio", type=Path)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--model", default=DEFAULT_WHISPER_MODEL)
    args = parser.parse_args()

    sample_rate, audio = load_mono(args.audio)
    result = {
        "audio": {
            "sample_rate": sample_rate,
            "duration_seconds": round(len(audio) / sample_rate, 3),
            "estimated_bpm": estimate_tempo(sample_rate, audio),
            "energy": energy_sections(sample_rate, audio),
        },
        "transcription": transcribe(args.audio, args.model),
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(args.output)


if __name__ == "__main__":
    main()
