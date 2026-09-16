# 《只是想你了》制作记录

每次生成、试听或调整后追加一条记录，避免重复试错。

| 日期 | 版本 | 使用工具/模型 | 改动与提示词摘要 | 试听结论 | 下一步 |
| --- | --- | --- | --- | --- | --- |
| 20260913 | v01 | 歌曲档案 | 在 `songs/20260913-just-thinking-of-you` 立项；歌词按用户原文写入 `song.json` | 歌词已入工作台创作中 | 确认风格提示词；询问是否需要 MV 故事 |
| 20260913 | 副歌短片 | 用户音频 + 档案 | 用户提供第一段副歌 `E:\\下载\\只是想你了-第一段副歌.mp3`（28.368 秒 / 48 kHz / 320 kbps）。已复制为 `music/chorus1_first.mp3`；时间线取整 `00:28`。复用《比永远差一天》女主三视图。写入 9:16 五镜全程对口型脚本 | 时长与场景已按用户指定归档 | 先跑镜 01 H3 竖屏短测，合格后再 Wav2Lip |
| 20260914 | 镜 01 H3 竖屏短测 v01 | Agent / MiniMax H3 | 9:16 / 0.8MP / 6 秒 / seed 42 / 4-step SLA。输出 `generated/video/raw/shot_01_h3_v01.mp4`：672×1216、158 帧、24 fps、约 6.6 秒，耗时约 5 分。录音棚、黑耳机、电容麦和防喷罩都在；脸接近定妆，闭唇到微张。防喷罩后段挡嘴较多 | 待用户审脸、耳机、棚和嘴是否够露 | 通过后可 Wav2Lip；挡嘴则改机位/防喷罩出 v02 |
| 20260914 | 女主上衣更贴身 | 用户 / Agent | 用户要求上衣更性感。本片女主改为米白贴身罗纹短袖、领口略低露锁骨，仍不露脐。沿用原正面做 img2img 换装，不改《比永远差一天》定妆 | 三视图生成中 | 正面通过后再重跑镜 01 |
| 20260914 | 女主定妆 v03 | Agent | 贴身短袖、无标志，但高圆领、高腰短裤，几乎不露脐 | 用户否决：没有露脐，领口再开低 | 出 v04 |
| 20260914 | 女主定妆 v05 锁定 | 用户 / Agent | 用户确认 `femaleLead_front_v05.png`，不要侧面/背面。已复制为 `femaleLead_front.png`。H3 三槽同用正面 | 定妆锁定 | 跑镜 01 H3 v02 |
| 20260914 | 镜 01 H3 v02 | Agent / MiniMax H3 | 9:16 / 0.8MP / 6 秒 / seed 42 / 正面 v05。输出 `generated/video/raw/shot_01_h3_v02.mp4`：672×1216、158 帧、24 fps。贴身罗纹上衣、耳机、棚和麦都在；脸接近 v05。后段防喷罩仍挡嘴 | 用户确认服装和脸可用 | 继续镜 02–05 |
| 20260914 | 镜 02–05 H3 v01 | Agent / MiniMax H3 | 同一正面 v05、9:16 / 0.8MP / seed 42。`shot_02_h3_v01.mp4`、`shot_03_h3_v01.mp4`、`shot_04_h3_v01.mp4`、`shot_05_h3_v01.mp4`。服装和脸连续。镜 02 左侧多出一个耳罩；镜 04 右侧多一块防喷网 | 镜 04 要修 | 重跑镜 04 |
| 20260914 | 镜 04 H3 v02 | Agent / MiniMax H3 | 去掉右侧第二块防喷网。seed 57。`shot_04_h3_v02.mp4` 只有一块防喷罩，但罩在嘴正前方，完全挡嘴 | 用户否决：完全挡住了嘴 | 重跑 v03 |
| 20260915 | 五镜 Wav2Lip v01 | Agent / Wav2Lip GAN | 按脚本切片贴口型。`shot_XX_wav2lip_v01.mp4`。整脸硬贴 96×96，嘴周模糊颤抖 | 用户否决：嘴唇周边模糊、颤抖、不自然 | 改融合方式出 v02 |
| 20260915 | 五镜 Wav2Lip v02 | Agent / Wav2Lip | 只融合下半脸、边缘羽化、框平滑 15 帧。输出 `generated/video/intermediate/shot_XX_wav2lip_v02.mp4`。眼睛和脸颊保持 H3 清晰度，口型仍来自 Wav2Lip | 用户否决：嘴周仍软糊，方案不可用 | 停用 Wav2Lip，改 InfiniteTalk 视频对视频 |
| 20260915 | 口型改 InfiniteTalk | Agent / InfiniteTalk fp8 FusionX | 以锁定 H3 为驱动视频，不再贴 96×96 嘴。先测镜 04 `shot_04_h3_v03.mp4` + `shot04_audio.wav`。480P 桶、streaming、81 帧窗口、125 帧约 5 秒、8 步 | 用户中止：一镜约 2 小时，五镜约 10–11 小时，时间不可接受。进程已停，无成片 | 改 ComfyUI 口型方案，待用户确认后再装节点 |
| 20260915 | 安装 ComfyUI MuseTalk | Agent / ComfyUI-MuseTalk-KJ + MusicMV 节点 | 因本机 ComfyUI 是 Python 3.13，不能装 mmcv/mmpose。改用 Kijai 原生节点 + `musicmv_musetalk` 贴回下半脸。公共工作流 `06_lipsync.json`，排队 `MusicMV_tools/queue-musetalk.mjs`。不改 H3 的 `05` | 权重下载中 | 权重齐后重启 ComfyUI，镜 04 短测 |
| 20260915 | 镜 04 MuseTalk v01 | Agent / MuseTalk 1.0 + Whisper tiny | 权重从 ModelScope 下完（unet 3.16GB，SHA256 与官方一致）。OpenCV 5 无 Haar，改 YuNet 检脸。只替换下半脸。输出 `generated/video/intermediate/shot_04_musetalk_v01.mp4`。排队约 44 秒 | 用户否决：左侧发丝错位，画面闪烁；近景脸被压到 256 再贴回，防喷罩仍挡嘴 | 按 MuseTalk 官方条件重跑 H3 v04：中近景、头稳住、嘴完全露出；贴合改为紧脸框+平滑+只贴嘴区 |
| 20260915 | 镜 04 H3 v04 | Agent / MiniMax H3 | 为 MuseTalk 重构图：中近景不满幅、头静止、麦和防喷罩在右下且与嘴唇留空。seed 91 / 9:16 / 0.8MP / 5 秒。输出 `shot_04_h3_v04.mp4` | 双唇大部分露出，防喷罩在嘴右侧，构图是中近景 | 已用此底片跑 MuseTalk v02 |
| 20260915 | 镜 04 MuseTalk v02 | Agent / MuseTalk 1.0 | 底片改 v04；贴合改为 YuNet 五官紧框、15 帧平滑、椭圆只贴嘴区，bbox_shift=5。输出 `generated/video/intermediate/shot_04_musetalk_v02.mp4` | 待用户看发丝、闪烁和口型 | 用户要求先重跑镜 01：嘴不能挡、唇不能糊、画面不能闪 |
| 20260915 | 镜 01 H3 v03 | Agent / MiniMax H3 | 按镜 04 已验证构图：中近景、头静止、防喷罩在右下且与嘴唇留空。seed 103 / 9:16 / 0.8MP / 6 秒。输出 `shot_01_h3_v03.mp4` | 开头嘴露出，后半段侧头后防喷罩挡嘴，不能进 MuseTalk | 改为防喷罩低于下巴、脸保持正面，重跑 v04 |
| 20260915 | 镜 01 H3 v04 | Agent / MiniMax H3 | 防喷罩全程低于下巴只挡麦体；脸保持正面不侧向麦。seed 128 / 6 秒 / 9:16 / 0.8MP。输出 `shot_01_h3_v04.mp4` | 开头嘴露出，中段防喷罩压到右嘴角 | 改为罩在脸轮廓右侧，重跑 v05 |
| 20260915 | 镜 01 H3 v05 | Agent / MiniMax H3 | 麦和防喷罩放到画面最右侧、脸轮廓之外。seed 156 / 6 秒 / 9:16 / 0.8MP。输出 `shot_01_h3_v05.mp4` | 防喷罩更挡右嘴，头略侧向麦，否决 | 锁定 v04 进 MuseTalk |
| 20260915 | 镜 01 MuseTalk v01 | Agent / MuseTalk | 输入 `shot_01_h3_v04.mp4` + `shot01_audio.wav`。固定检脸框、只贴嘴区、保留 H3 唇部高频并做时域平滑。输出 `shot_01_musetalk_v01.mp4` | 唇部清晰度接近 H3，发丝不再整块错位；张嘴时口红会糊到防喷罩上 | 从 H3 还原防喷罩区域得到 v02 |
| 20260915 | 镜 01 MuseTalk v02 | Agent / MuseTalk | 在 v01 上把圆形防喷罩像素还原为 H3，避免口型画到网罩上。输出 `shot_01_musetalk_v02.mp4` | 用户否决：嘴没张开，有嘴的阴影到处飘。根因是把闭唇 H3 罩区盖回去，且贴合框冻结后没跟上脸 | 按官方条件重做素材：脸上不要防喷罩，双唇全程露出 |
| 20260915 | 镜 01 H3 v06 | Agent / MiniMax H3 | 本镜去掉挡嘴的防喷罩。耳机保留；麦只作最右侧背景，不挡脸。正脸、头锁定、双唇全程露出。seed 174 / 6 秒 / 9:16 / 0.8MP。输出 `shot_01_h3_v06.mp4` | 防喷罩仍在，但全程只在脸右侧，双唇完整可见 | 用此底片跑 MuseTalk v03 |
| 20260915 | 镜 01 MuseTalk v03 | Agent / MuseTalk | 底片改无遮挡的 `shot_01_h3_v06.mp4`。贴合改为跟脸平滑、按下半脸贴回，去掉冻结框和时域混合。bbox_shift=7。输出 `shot_01_musetalk_v03.mp4` | 用户否决：仍不张嘴，左脸颊有漂影。非正方形脸框拉伸后嘴贴歪，H3 闭唇纹理又把真嘴压回去 | 正方形脸框 + 下半脸直接贴 MuseTalk |
| 20260915 | 镜 01 MuseTalk v04 | Agent / MuseTalk | 同一底片 `shot_01_h3_v06.mp4`。YuNet 正方形脸框 1.4 倍、bbox_shift=5、下半脸直接贴回不混闭唇纹理。输出 `shot_01_musetalk_v04.mp4` | 否决：最大框经常落到胸口，嘴没进 256 | 只接受上半身真实人脸框 |
| 20260915 | 镜 01 MuseTalk v05 | Agent / MuseTalk | 有效脸框锁定中位数、expand 1.2、bbox_shift=8。模型 256 图已经张嘴 | 贴回用了整个下半脸大方块，糊成一整块脸 | 只贴嘴区椭圆 |
| 20260915 | 镜 01 MuseTalk v06 | Agent / MuseTalk | 同一锁定脸框，只把 256 里的嘴区椭圆贴回原脸。输出 `shot_01_musetalk_v06.mp4` | 用户曾改试 LatentSync 1.5，后中止 | 口型改回 MuseTalk |
| 20260915 | 中止 LatentSync 1.5 | 用户 / Agent | 安装未完成。已停进程并删除 `D:\LatentSync`（源码、3.10 环境、排队脚本）。口型方案改回 ComfyUI MuseTalk | 已清理 | 用侧机位 H3 v09 讨论下一步 |
| 20260915 | 镜 01 H3 v07 | Agent / MiniMax H3 | 用户要求侧一点同时看见嘴和麦。轻微三分之二、双眼仍可见，无防喷罩挡嘴，麦在右侧与嘴唇留空。seed 201 / 6 秒 / 9:16 / 0.8MP。输出 `shot_01_h3_v07.mp4` | 侧机位和麦都对，但防喷罩仍压在嘴上，前半段闭眼 | 重跑 v08：画面里不要防喷罩 |
| 20260915 | 镜 01 H3 v08 | Agent / MiniMax H3 | 保持侧机位看见麦；强调全程无圆形网/防喷罩，嘴唇与麦之间只有空气；眼皮从第一帧睁开。seed 218 / 6 秒 / 9:16 / 0.8MP。输出 `shot_01_h3_v08.mp4` | 否决：防喷罩更大更实，嘴被挡住 | 改回 v07 机位，把罩赶到嘴唇右侧 |
| 20260915 | 镜 01 H3 v09 | Agent / MiniMax H3 | 侧机位看见麦；防喷罩如出现只在嘴唇右侧贴着麦，不挡嘴。seed 196 / 6 秒 / 9:16 / 0.8MP。输出 `shot_01_h3_v09.mp4` | 通过：轻微三分之二、双眼睁开、麦可见、双唇全程露出，防喷罩在嘴右侧 | 用户要求嘴一点也不挡，重跑 v10 |
| 20260915 | 镜 01 H3 v10 | Agent / MiniMax H3 | 侧机位看见麦；防喷罩只允许在胸口高度、低于下巴；双唇人中下巴全程空出。seed 229 / 6 秒 / 9:16 / 0.8MP。输出 `shot_01_h3_v10.mp4` | 用户确认：双唇露出，可进 MuseTalk | 用此底片跑 MuseTalk v07 |
| 20260915 | 镜 01 MuseTalk v07 | Agent / MuseTalk | 底片 `shot_01_h3_v10.mp4` + `shot01_audio.wav`。正方形脸框、只贴嘴区椭圆，bbox_shift=8。输出 `shot_01_musetalk_v07.mp4` | 用户否决：嘴周糊、嘴没张开。256 图已张嘴，但椭圆固定在 46%/64%，侧脸真嘴在框右侧，贴到了脸颊上 | 按 YuNet 嘴角贴回 |
| 20260915 | 镜 01 MuseTalk v08 | Agent / MuseTalk | 同一底片。椭圆中心改 YuNet 嘴角，嘴心整块用生成图、边缘才羽化。输出 `shot_01_musetalk_v08.mp4` | 用户否决：嘴始终没张开，也始终模糊。1.0 + 小椭圆混闭唇盖掉了口型 | 改 MuseTalk 1.5 + 官方下半脸贴回 |
| 20260915 | 镜 01 MuseTalk 1.5 v09 | Agent / MuseTalk 1.5 | 已加载 `musetalkV15/unet.pth`。bbox_shift=0，下巴 extra_margin=10，按下半脸整块贴回。输出 `shot_01_musetalk_v09.mp4` | 静帧嘴比闭唇底片更开；下半脸发软，防喷罩被画进右脸。待用户看口型和糊 | 通过后再跑其余镜 |
| 20260816 | 录音棚试制 | H3 / Wav2Lip / 静帧慢推 | 同一录音棚女声参考图；H3 测试在 VAE 解码阶段退出；当前成片为原图 1080p 慢推 + `music/song.mp3` | 可用于人物连续性预览，不是叙事 MV | 待运行环境稳定后再替换动态镜头 |
| 20260916 | 存储结构 | 用户 / Agent | 歌曲档案与本机成片合并到 `songs/20260913-just-thinking-of-you/`。原先独立的 `mvs/20260816-just-thinking-of-you` 资产并入本目录；进度改由 `lifecycle` 表示 | 已完成 | 无需下一步 |

## 候选版本

| 文件名 | 优点 | 问题 | 处理决定 |
| --- | --- | --- | --- |
| `music/song.mp3` | 已有完整音频 | 整曲约 03:01，本片不用 | 保留；本片音轨改用副歌切片 |
| `music/chorus1_first.mp3` | 用户确认的第一段副歌 | 28.368 秒，时间线取 00:28 | 本片正式音轨 |
| `generated/video/final/studio-vocal-1080p.mp4` | 保留人物与录音棚连续性 | 录音棚演唱，不是歌词里的到家/没开灯房间 | 作为本机成片参考，不视为叙事 MV 定稿 |

## 最终版本

- 最终音频：未定
- 最终歌词版本：用户提供原文（`song.json` `sections`）
- 最终提示词版本：未写
- 封面版本：未定
