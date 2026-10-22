# MusicMV 规则索引

本目录保存音乐规范、歌曲档案与本机成片数据。所有档案和源码文件名使用英文；`song.json` 显示名可用中文。歌曲目录位于 `songs/YYYYMMDD-slug/`，人物档案位于 `characters/YYYYMMDD-slug/`。ComfyUI 公共工作流、运行时、模型和临时文件不放进歌曲目录。

## 按阶段加载

先判断用户当前要求的阶段，只读当前阶段所需规则；不要因为入口文件被引用，就继续加载无关阶段文件。

| 当前任务 | 必读规则 |
| --- | --- |
| 讨论创作方向，尚未开始写歌 | 不读阶段细则；遵守下方创作授权门槛 |
| 开始写歌、改企划/歌词/歌曲参数/状态 | [`rules/song-creation.md`](rules/song-creation.md)；写歌词时另读 `library/lyric-lines.json`，写曲风提示词时另读 Mureka skill |
| 歌词完成后创作或修改 MV 故事 | [`rules/mv-workflow-gates.md`](rules/mv-workflow-gates.md)、[`rules/mv-story.md`](rules/mv-story.md)、[`rules/mv-directing.md`](rules/mv-directing.md) 和 MV 故事 skill |
| 将已确认故事拆成 MV 脚本骨架 | [`rules/mv-workflow-gates.md`](rules/mv-workflow-gates.md)、[`rules/mv-script.md`](rules/mv-script.md)、[`rules/mv-directing.md`](rules/mv-directing.md) 和 MV 脚本 skill |
| 人物/场景基准图建档、关联或确认 | [`rules/mv-workflow-gates.md`](rules/mv-workflow-gates.md)、[`rules/visual-references.md`](rules/visual-references.md) |
| 编写最终分镜生成提示词 | [`rules/mv-workflow-gates.md`](rules/mv-workflow-gates.md)、[`rules/mv-prompts.md`](rules/mv-prompts.md)、`library/h3-prompt-writing.md` 和 MV 提示词 skill |
| 生成/检查本机视频、对口型、修复或超分 | [`rules/local-video.md`](rules/local-video.md)；若需编写或修改 H3 提示词，再读提示词规则 |
| 只校验歌曲档案或处理工作台数据 | 仅读任务直接相关的结构/校验规则；不加载创作、导演或生成细则 |

技能路径：`.cursor/skills/mureka-style-prompt/SKILL.md`、`.cursor/skills/mv-story-from-song/SKILL.md`、`.cursor/skills/mv-script-from-story/SKILL.md`、`.cursor/skills/mv-prompts-from-references/SKILL.md`。按上表仅在对应阶段读取。

## 全局门槛

- 用户提供歌名或描述不等于授权开始写歌。信息足够时主动询问“方向已经比较清楚了。现在要开始写歌吗？”，明确同意前只讨论，不创建正式歌曲档案或产出正式歌词/提示词。
- 歌曲内容以各自目录的 `song.json` 为工作台数据源。修改企划、歌词、提示词、参数、状态、MV 故事/分镜时，同一轮同步更新结构化档案；人工维护的正式文档同步更新，标记为生成视图的文档只改 JSON 并运行对应生成命令。JSON 必须有效。
- MV 顺序固定为：故事 → 脚本骨架 → 人物/场景基准图 → 最终分镜提示词 → 分镜视频 → 修复超分 → 成片。各阶段的用户确认门槛见对应规则文件，不得跳阶段。
- 旧歌曲可继续读取 `scriptStatus`；新建或继续制作的歌曲只写 `scriptSkeletonStatus`、`visualReferencesStatus`、`promptStatus` 三个新状态字段。
- 本机视频每次只能执行一个镜头/任务；禁止并行、批量循环和自动接续。必须等进程退出并检查输出、画面、队列、显存和系统状态后，才可手动开始下一镜。
- 未经用户明确要求，不得启动视频超分、修复或放大。启动前先说明当前方式及取舍、询问用户选择；得到明确选择前不得提交。
- 一次性补丁、草稿 JSON、调试输出和日志在正式内容确认写入后立即删除，不留 `.tmp-*`、`.patch-*` 或 `*.log`。

## 项目位置

- `songs/`：每首歌的企划、歌词、`song.json`、分析和本地成片数据。
- `characters/`：共享人物档案；通过 `works[].songId` 关联歌曲。新流程不在歌曲目录复制人物定妆提示词或人物图。
- `library/`、`templates/`、`docs/`：公共参考、模板和创作原则。
- ComfyUI 工作流、模型、运行时及临时输入/输出由 ComfyUI 自身目录管理；独立视频运行时仍放在其既定 D 盘目录，不在本项目创建 `.tools/` 或 `.models/`。
- 读取大型歌曲档案时先用 `npm run inspect:song -- --slug <song-folder>` 看摘要；按需用 `--section`、`--shot` 或 `--field` 查询。编辑单个段落/镜头的少数字段时，用 `--only field1,field2` 限定输出；只有需要查看提示词时才对指定镜头加 `--prompts`。
