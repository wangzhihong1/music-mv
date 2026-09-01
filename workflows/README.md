# Music MV 公共一致性工作流

本目录只保存不绑定具体歌曲、角色姓名或 MV 路径的公共模板。正式素材应放入对应的 MV 目录；运行前把输入图复制到 ComfyUI 的 `input/`，或在节点中改成自己的文件名。

## 八个模板

1. `01_人物抽卡.json`
   - 纯提示词文生图抽卡，一次生成四张候选卡；四个 KSampler 每次运行自动随机 seed。
   - 正向提示词使用 `ROLE / AGE / APPEARANCE / FACE / EYES / NOSE / LIPS / HAIR / SKIN / BUILD / WARDROBE / EXPRESSION` 字段；先改这些字段，再运行抽卡。
   - 默认是成年 19 岁的年轻感角色；不要写成 child、teenager 或 minor。
   - 默认构图词放在提示词最前面并加权：腰部以上中景、人物占画面高度 50–60%、50mm 镜头后退三米，完整头部、腰部、双肘和前臂可见；只有明确需要全身时才改写为 `full-body`。
   - 输出固定为 16:9 横版 1344×768；不要在此阶段接入旧角色图或 IP-Adapter，四个分支适合 3060 12GB 顺序出图。
   - 四张卡中选定一张后，复制为角色母版，再进入 `02_人物锁定.json`。

2. `02_人物锁定.json`
   - 使用 `PLUS FACE (portraits)` IP-Adapter 进行角色身份锁定和多视角验证，默认读取 `character_master.png`；参考图先裁取 320×320 的脸部/发型核心区域，减少原图姿势和手势泄漏。
   - 四条独立分支分别生成正面、左三分之二、右三分之二和左侧面；每条分支均会随机 seed，便于重新筛选。
   - 输出固定为 16:9 横版 1344×768，默认保持腰部以上中景、同一发型、同一服装和中性棚拍光线，避免把视角变化误判为身份漂移。
   - 默认 IP-Adapter 权重为 `0.86`、作用区间为 `0–0.82`，加强脸型、眼距和下颌一致性；姿势复制过强时降低权重，身份漂移时小幅提高权重。
   - 本机还需安装 `CLIP-ViT-H-14-laion2B-s32B-b79K.safetensors` 到 ComfyUI 的 `models/clip_vision/`。

3. `03_姿态换装.json`
   - 保持身份的姿态、服装和动作控制。
   - 默认读取 `character_master.png`、`pose_control.png`。
   - `pose_control.png` 必须是已预处理的 OpenPose 骨架图，画幅和构图范围应与输出一致；默认横版 1344×768，竖版全身镜头应同时改为 768×1344。
   - 角色母版先裁取 320×320 脸部区域，减少原图姿势泄漏；本机默认使用完整 `OpenPoseXL2.safetensors`，rank-256 Control-LoRA 仅能加载但实测控制效果不足。

4. `04_场景基准.json`
   - 生成不含人物的地点基准图。
   - 默认 1344×768；先固定镜头、陈设、光线和色温，再进入人物合成。

5. `05_场景合成.json`
   - 将确认角色合成到场景基准图，制作剧情关键帧。
   - 默认读取 `scene_base.png`、`character_master.png`、`character_region_mask.png` 和 `scene_pose_control.png`；遮罩与 OpenPose 骨架必须在 1344×768 画幅中对齐人物位置、尺度和肢体范围。
   - 使用 `VAEEncodeForInpaint` 清除人物区域原有结构，完整 `OpenPoseXL2.safetensors` 控制姿态；角色母版先裁 320×320 脸部后进入 IP-Adapter，默认权重 `0.86`、作用区间 `0–0.82`，denoise `1.0`。
   - 生成后由 BiRefNet 精确提取人物，再通过 `ImageCompositeMasked` 回贴原始 `scene_base.png`，避免家具、地毯和窗框被局部重绘产生接缝；`RemoveBackground` 输出可直接作为人物遮罩，不要反相。
   - 正式画布已通过 1344×768、36 步完整链路测试：人物身份、发型、白色针织服装、双手和尺度连续，边缘无光晕，原场景家具结构完整且无重绘接缝。

6. `06_H3视频.json`
   - H3 首帧图生视频。
   - 默认读取 `keyframe.png`，首轮 1024×576、124 帧（约 5.17 秒）、24fps、20 步。
   - 提示词明确引用 `<Picture 1>`，分别填写 `ACTION / CAMERA`，并保留无转场、无换人、无换装、无新增饰品和无道具复制约束。
   - 修订提示词已通过 1024×576、124 帧、24fps、约 5.17 秒、20 步正式画质测试；全程同一长发白衣人物、一个麦克风和一个防喷罩，无换人、转场、换装或道具复制，脸部、表情和头部动作连续。
   - 每次只运行一个任务；正式音乐仍使用原始母带，不使用视频节点附带音频。

7. `07_修复超分.json`
   - 对抽出的单帧进行遮罩内人脸/手部/服装修复，再用 `4x-UltraSharp.pth` 放大。
   - 默认读取 `frame_to_repair.png`、`character_master.png` 与 `repair_mask.png`；白色遮罩只圈问题部位，不圈整片头发或背景，并保留 16–32px 灰度羽化。
   - 角色母版先裁 320×320 脸部；默认 IP 权重 `0.78`、denoise `0.50`。轻度瑕疵可把 denoise 降到 `0.35–0.45`。
   - 应逐帧或按问题帧处理，人工复核身份、眼睛和接缝后再在剪辑软件中重组视频；不要整帧重绘。

8. `08_一致性检查.json`
   - 将角色母版和四张镜头帧中心裁成 384×384，按 `MASTER / SHOT 01 / SHOT 02 / SHOT 03 / SHOT 04` 加标签并输出一张 1952×384 五格对照板。
   - 默认读取 `character_master.png`、`shot_01.png` 至 `shot_04.png`。
   - 该模板是检查用批次输出，不自动替代人工审核。

## 依赖

- `RealVisXL_V5.0_fp16.safetensors`
- ComfyUI_IPAdapter_plus、`ip-adapter-plus-face_sdxl_vit-h.safetensors`
- `OpenPoseXL2.safetensors`（第 3、5 个模板）
- `birefnet.safetensors`，放入 `models/background_removal/`（仅第 5 个模板）
- MiniMax H3 模型与对应 VAE（仅第 6 个模板）
- `4x-UltraSharp.pth`（仅第 7 个模板）
- 本项目的 `MusicMVAspectRatio` 节点不是这些公共模板的必需依赖；尺寸在模板节点中直接设置，避免公共模板绑定歌曲。

## 测试

- 结构、节点和连线校验：`powershell -ExecutionPolicy Bypass -File tools\Test-ComfyWorkflows.ps1`
- 低成本冒烟测试：`powershell -ExecutionPolicy Bypass -File tools\Test-ComfyWorkflows.ps1 -Smoke`
- 按画布正式参数完整运行：`powershell -ExecutionPolicy Bypass -File tools\Test-ComfyWorkflows.ps1 -Name '05_场景合成.json' -Run`
- 冒烟测试从画布重新导出 API 请求，`01`、`02` 只运行第一条分支；静帧降到 512×288 和最多 8 步，H3 降到 512×288、22 帧（约 0.92 秒）、2 步。
- 测试输出写入 ComfyUI 的 `output/MusicMV/tests/`，不会修改工作流中的正式分辨率、步数和输出前缀。冒烟通过只代表链路可执行，正式使用前仍需按工作流逐项做画质和连续性测试。

## 固定原则

- 身份参考只从确认母版来，不把随机派生图重新当作身份母图。
- 场景先做基准图，人物再进入场景；视频首帧必须来自已确认关键帧。
- RTX 3060 12GB 先用 4–6 秒、约 1MP 静帧和单任务 H3 测试，通过后再扩展。
- 原始生成、修复/超分中间文件、最终成片分别保存。
