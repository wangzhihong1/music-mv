# MV 状态门槛清单

每次只推进用户当前授权的阶段。先检查入口条件，再执行阶段工作；状态字段只在对应交付物实际完成后更新。未达到门槛时停在当前状态，不预填“完成”或“确认”。

## 阶段转换

| 转换 | 进入条件 | 必须等待的用户动作 | 状态/数据写回 | 完成判定 |
| --- | --- | --- | --- | --- |
| 歌词完成 → MV 故事 | 歌词已生成并完成 | 询问是否需要 MV 故事；明确需要才继续 | 无需时停止 MV 流程 | 用户明确需要 |
| 故事草稿 → 故事确认 | 用户需要 MV 故事，故事正文与关键意象完成 | 提交审阅；仅在用户明确确认、定稿或满意后继续 | 草稿写入 `mvStory`、`06-mv-story.md` 并设 `storyStatus = draft`；确认后才设 `storyStatus = confirmed` | 故事正文已完整且获得明确确认 |
| 故事确认 → 脚本骨架 | 故事已确认 | 先询问是否需要脚本；明确需要后问：`请提供或确认这首歌的最终总时长（MM:SS），我会据此安排完整的 MV 分镜时间线。` | 用户确认时写 `metadata.duration`、`mvWorkflow.durationConfirmed = true` 和确认日期 | 故事确认、脚本授权、时长确认三项同时满足 |
| 脚本草稿 → 脚本完成 | 上一行三项门槛均满足 | 不得自行更改已确认故事或歌曲时长 | `shots`、`07-mv-script.md` 同步；完成后 `scriptSkeletonStatus = complete`，提示词状态保持 `not_started` 或 `draft` | 时间线从 `00:00` 连续覆盖至确认时长，校验通过 |
| 脚本完成 → 视觉基准确认 | `scriptSkeletonStatus = complete` | 视觉资产由用户实际审阅确认；不能把生成候选当确认 | 人物通过 `works[].songId` 关联并有已确认三视图；场景写入 `sceneReferences` 并由镜头引用 | 所有出镜人物和必需场景图均存在、映射正确且用户确认；之后才设 `visualReferencesStatus = confirmed` |
| 视觉基准确认 → 提示词完成 | `scriptSkeletonStatus = complete` 且 `visualReferencesStatus = confirmed` | 仅在最终视觉基准已确认后开始，不跳过或推定确认 | 更新 `song.json.shots`；运行渲染器生成 `08-mv-prompts.md`；完成后 `promptStatus = complete` | 每镜字段齐全、双语提示词/参考图映射正确，`npm run validate:songs` 通过 |
| 提示词完成 → 视频/后期 | 提示词状态完成且已通过校验 | 单镜验收通过后才可由用户/Agent 手动决定下一镜；超分另需用户明确选择 | 生产进度按实际结果更新 | 遵循 [`local-video.md`](local-video.md) 的单任务与验收要求 |

## 执行前核对

- [ ] 当前阶段的上一状态已达到完成条件；需要用户授权或确认的动作有明确原文依据。
- [ ] 本次修改只更新当前阶段字段和正式档案，不提前设置后续状态。
- [ ] 涉及歌曲内容时，同轮更新 `song.json`；阶段文档若是生成视图，运行生成命令，不手工维护副本。
- [ ] 只有阶段完成条件全部满足、对应校验通过后，才把状态推进到下一阶段。

旧歌曲可以读取 `mvWorkflow.scriptStatus`；新建或继续制作的歌曲只写 `scriptSkeletonStatus`、`visualReferencesStatus`、`promptStatus`。状态允许值与兼容逻辑由 `scripts/validate-songs.mjs` 校验。
