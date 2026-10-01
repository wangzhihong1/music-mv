import sys
from pathlib import Path
import av
from PIL import Image

source = Path(sys.argv[1])
target = Path(sys.argv[2])
seconds = float(sys.argv[3])
fps = 24
with av.open(str(source)) as inp:
    stream = inp.streams.video[0]
    frame = next(inp.decode(stream))
    image = frame.to_image().convert('RGB')
width, height = image.size
target.parent.mkdir(parents=True, exist_ok=True)
with av.open(str(target), 'w') as out:
    video = out.add_stream('libx264', rate=fps)
    video.width = width
    video.height = height
    video.pix_fmt = 'yuv420p'
    video.options = {'crf': '18', 'preset': 'medium'}
    total = round(seconds * fps)
    for _ in range(total):
        vf = av.VideoFrame.from_ndarray(__import__('numpy').array(image), format='rgb24')
        for packet in video.encode(vf):
            out.mux(packet)
    for packet in video.encode():
        out.mux(packet)
print(f'created {target} frames={total} size={width}x{height}')
