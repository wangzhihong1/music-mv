# 人物与场景基准图阶段

状态流转遵循 [`mv-workflow-gates.md`](mv-workflow-gates.md)。仅在脚本骨架完成后进入。本阶段先关联人物，再制作并确认场景基准图；不是最终提示词阶段，也不以文字描述代替图片确认。

- 出镜人物必须已存在于 `characters/`，通过人物档案 `works[].songId` 关联当前歌曲，并有用户确认的 `look.threeView`。
- 每个需要锁定的地点制作场景基准图，放在歌曲目录 `assets/scenes/`。在 `song.json.sceneReferences[]` 登记 `id`、`name`、`path`、`status`、`description`；对应镜头用 `sceneReferenceIds[]` 引用。
- 未由用户确认的图不得标记为 `confirmed`。全部出镜人物和必需场景图均存在、映射正确并获得用户确认后，才将 `mvWorkflow.visualReferencesStatus` 设为 `confirmed`。
- 视觉基准确认后才进入 [`mv-prompts.md`](mv-prompts.md)。保持场景锁定与连续性，遵循 [`mv-directing.md`](mv-directing.md)。
