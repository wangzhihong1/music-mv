---
name: mv-script-from-story
description: >-
  Directs a confirmed MV story into a timed, shootable shot list and H3-ready script.
  Use when the user asks for MV 脚本, 分镜, shot list, storyboard, or after the MV story is confirmed and they agree to split it into a script. Do not use to invent a new story, write lyrics, or generate video files.
---

# MV 分镜编导

写分镜时你就是一个编导大导演。

你的工作是把**已确认故事**排到歌曲时间轴上，让每一镜有职责、有交接、有反差。不要重写故事，也不要先写炫技 prompt。故事若是空景或多人，分镜就保持空景或多人，不要强行加唯一男女主跟拍。

本技能只借公开技能里的**方法**（先全片总谱、镜头职责轮换、相邻镜反差、口型克制），不搬别人的 10–15 秒默认段、逐镜关键帧、Seedance/Kling 语法或整份 EDL 工具链。本仓库的 1–10 秒、H3 角色参考图直出视频、以及 `validate:songs` 优先。

动手前读 [craft.md](craft.md)。写 H3 六段提示词前再读 `music-mv/library/h3-prompt-writing.md`。

## 启动门槛

必须同时满足，缺一不可：

1. `06-mv-story.md` 已由用户明确确认，且 `mvWorkflow.storyStatus` 为 `confirmed`
2. 用户明确要拆 MV 脚本
3. 用户已提供或确认最终总时长 `MM:SS`；写入 `metadata.duration`，`mvWorkflow.durationConfirmed` 为 `true`

时长未确认时只问：`请提供或确认这首歌的最终总时长（MM:SS），我会据此安排完整的 MV 分镜时间线。` 不得估算，不得把暂定时长当最终值。

## 工作顺序

### 1. 先写全片导演总谱，再拆镜

不要平均切成 N 个镜头再填画面。先定：

```text
歌曲结构 → 情绪曲线 → 视觉章节（世界状态怎么变） → 每镜职责 → 镜间反差与交接 → 单镜动作/机位
```

把已确认的开场 / 发展 / 转折 / 高潮 / 结尾铺到 `00:00` 至结束。高潮镜必须落在歌曲最强释放处，而不是「画面更大更亮」。

视觉章节写世界状态，不写剧情摘要。例如：双人位置还在 → 距离被看清 → 她决定独自入镜。

运镜总谱与视觉章节一起定：全片用哪几种动法、哪里必须锁死、相邻镜如何换轴向。不要平均分配推拉。

### 2. 给每一镜派职责

相邻镜必须换职责，禁止连续多镜都是正面演唱或同一 Hero 姿态。在叙事、表演、细节、环境、象征之间轮换。歌手不必每镜出镜。

每一镜必须能回答：

- 从前一镜接住了什么
- 本镜推进了什么（改情绪、推进动作、或加压；三者至少占一件）
- 把观众推向下一镜的什么
- 导演希望观众看见/理解/感受到什么变化
- 摄影机如何具体完成它（景别、机位/角度、焦段倾向、景深/对焦、构图、主体调度、运镜及动机）
- 它如何踩住音乐（乐句/节拍、声画重点、剪点/转场和本镜在五段结构中的职责）

口型只给正脸或轻微三分之二、中近景、嘴不被挡、对准完整乐句的镜头。默认短、少、准。H3 本镜闭唇；对口型走后期，不在提示词里张嘴唱。

### 3. 按本机可生成性设计镜头

- 单镜 1–10 秒，优先 4–6 秒；一镜一个主动作、一种运镜、一种持住的情绪。运镜必须有动机，固定也算运镜。人脸只用小幅度慢推/慢拉/固定。
- 空景允许在同一条 H3 里最多硬切一次；有人脸、手、脚或可辨认背影的镜头禁止内切。切不切由编导判断：只在新空间信息值得单独一刀时切，已经有推拉移的空景不要再切
- 表情戏用中景或中近景；需要环境用中全景，不用大全景演脸
- 禁止正侧 90° 和无必要的背面转头；背影单独做背影镜
- 微表情写眉、眼、唇、呼吸；眼神持住，最多一次视线移动、最多一次自然眨眼
- 服装、地点、时间连续；换装只发生在歌曲结构切换处，并在分镜里交代
- 不为每镜预制关键帧；角色三视图是全片共享输入

### 4. 铺满时间线并落盘

按 `music-mv/templates/song/07-mv-script.md` 写入 `07-mv-script.md`，并同步 `song.json` 的 `shots[]`：

- `id`、`start`、`end`、`sectionId`、`storyBeat`（`opening` / `development` / `turningPoint` / `climax` / `ending`）
- `shot`、`action`、`visual`、`camera`、`location`、`transition`、`soundFocus`、`lyricCue`
- `visual` / `camera` 中必须可读出景别、机位角度、焦段倾向、景深/对焦、构图、主体调度、运镜方向/幅度/速度与运镜动机；`transition` / `soundFocus` 中必须可读出剪辑交接、环境声/动作声和音乐落点
- `subjects`、`genMode`（`characterVideo` 或 `composite`）、`prompt`、`output`（`generated/video/raw/shot_XX_h3_v01.mp4`）

时间线从 `00:00` 连续覆盖至确认时长，无空档、无重叠，累计等于总时长。五段故事功能都必须有对应分镜，不得为了短镜头删掉因果、动机、转折或结局。

`mvWorkflow.generationMethod` 设为 `characterReferenceVideo`；完成后 `scriptStatus` 为 `complete`。在 `music-mv/` 运行 `npm run validate:songs`，不通过不算完成。

## 停住

分镜是给用户审的导演本。提示词服务于已锁定的动作与机位。用户改故事时先回 `mv-story-from-song`，不要在分镜里偷偷改结局。

## 自检

- [ ] 三道门槛都成立
- [ ] 总谱先于单镜；高潮对齐歌曲爆点
- [ ] 相邻镜有反差和交接，不是同一演唱姿态换形容词
- [ ] 运镜有动机；相邻镜换了轴向或动静；该锁死的锁死
- [ ] 每镜都有导演意图、摄影执行和音乐叙事功能；焦段/景深、构图、光色、声音与剪辑可执行
- [ ] 每镜 1–10 秒，表情戏脸够大
- [ ] 微表情与故事情绪一致；无空脸、假笑、张嘴唱、突然大哭
- [ ] `shots` 与 Markdown 一致，校验通过
