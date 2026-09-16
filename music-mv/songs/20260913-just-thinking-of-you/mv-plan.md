# 《只是想你了》录音棚演唱视频方案

## 用户目标

使用用户提供的成年女性录音棚参考图，制作她在同一录音棚演唱《只是想你了》的真人写实音乐视频。人物、服装、耳机、麦克风、谱纸和暖色录音棚灯光保持连续；不新增人物，不切换地点。

## 视觉与表演

- 画幅：16:9，H3 测试阶段 1024×576，最终建议超分至 1920×1080。
- 核心表演：克制的对口型演唱、轻微呼吸和眨眼、手指轻触耳机、视线在麦克风与歌词之间移动。
- 镜头语言：稳定的 35–50mm 近中景，极慢推近或轻微横移；不做夸张舞蹈，不改变录音棚布局。
- 色彩：暖琥珀灯光、深色吸音板、自然肤色和浅蓝针织上衣；保留原图的心形项链与黑色耳机。
- 视觉母题：银色电容麦克风、黑色防喷罩、白色歌词纸、耳机与胸前心形项链。

## 测试镜头

1. 主歌：人物靠近麦克风轻声演唱，眼神从谱纸抬向麦克风，镜头缓慢推近。
2. 副歌：人物保持演唱，右手轻压耳机，情绪稍微打开，灯光和背景不变。
3. 间奏：人物短暂停顿、低头看歌词，再回到麦克风，保持同一姿势与服装。

## 连续性提示词

`one continuous cinematic live-action shot beginning exactly from the reference frame, the same adult East Asian woman in the same recording booth, preserve her face, chin-length dark brown bob with airy bangs, light blue ribbed short-sleeve top, heart pendant necklace, black over-ear headphones, silver condenser microphone, round black pop filter, white lyric sheet, studio acoustic panels and warm amber practical light; she is quietly singing the song into the microphone with subtle natural lip movement, blinking and breathing, realistic restrained performance, no exaggerated gestures, no camera cuts, no new people, no duplicated objects, no text, no logo, keep the composition and lighting direction stable`

## 交付链路

原始 H3 MP4 保存在 `generated/video/raw/`；合格镜头经检查后复制到 `generated/video/intermediate/`，最终与 `music/song.mp3` 合成为 `generated/video/final/studio-vocal-1080p.mp4`。H3 节点附带音频不作为正式音轨。

## 本轮运行记录

H3 1024×576/90 帧和 1024×576/73 帧测试均在 `VAEDecodeTiled` 阶段触发 ComfyUI 进程退出，未产生可用 MP4；随后 576×320/39 帧、CPU-VAE 测试同样使服务退出。因此本轮完整交付采用原图的 1080p 慢推镜头与原始 MP3，保留人物和录音棚连续性，待运行环境稳定后再替换为 H3 动态镜头。
