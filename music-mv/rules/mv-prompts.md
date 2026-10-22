# 最终分镜提示词阶段

状态流转遵循 [`mv-workflow-gates.md`](mv-workflow-gates.md)。只有脚本骨架与视觉基准均达到门槛后才可进入。先读并遵循 [`.cursor/skills/mv-prompts-from-references/SKILL.md`](../../.cursor/skills/mv-prompts-from-references/SKILL.md)，以及 [`../library/h3-prompt-writing.md`](../library/h3-prompt-writing.md)。

- 每镜填写 `subjects`、`sceneReferenceIds`、`genMode`、可直接执行的英文 `prompt`、完整中文对照 `promptZh` 和唯一 `output`。提示词中的 `<Picture N>` 必须明确对应实际人物/场景参考图。
- 人物提示词和三视图只保存在人物档案；不要复制到歌曲 MV 流程。场景基准图在 `sceneReferences` 登记，每镜引用对应 id。
- `song.json.shots[]` 是最终提示词唯一事实源；不要手工改 `08-mv-prompts.md`。更新 `song.json` 后运行 `npm run render:mv-prompts -- --slug <song-folder>` 生成该文档。全部提示词完成后设 `mvWorkflow.promptStatus` 为 `complete`，再运行 `npm run validate:songs`。
- 新建歌曲时 `create-song` 会生成带机器标记的提示词文档。旧版未标记的手写文档默认不覆盖；迁移前先用 `--preview` 审阅渲染结果，再显式使用 `--replace-existing`。
- `output` 指向每镜最终可剪辑的独立视频；剪辑/合成镜也必须导出对应视频。
- 本阶段只完成提示词及校验；生成视频、修复或超分另按 [`local-video.md`](local-video.md) 操作。
