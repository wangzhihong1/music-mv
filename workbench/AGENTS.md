# Vue 工作台规范

本目录是纯前端 Vue 3 工作台，用于展示、对照 `../music-mv/` 中的歌曲数据，并允许在歌词页写回已有段落的歌词。不要在本目录存放歌曲 Markdown、音频、角色资产、生成视频或 ComfyUI 工作流。

## 技术边界

- 使用 Vue 3、Vite、Composition API、单文件组件。
- 按模块拆分：`src/components/`、`src/composables/`、`src/api/`、`src/constants/`、`src/lib/`、`src/utils/`。
- 组件使用 PascalCase 多词命名；页面文案使用中文，源码文件名使用英文。
- 不要引入数据库、后端框架或与歌曲生成无关的依赖。
- 本地开发时，`plugins/studio-library-plugin.js` 只从 `../music-mv/songs/` 读取 `song.json`、Markdown 和同一目录中的生成成品，通过 `/studio-media/` 提供预览，不得把数据或媒体复制进 `src/`。歌词保存接口只更新已有段落的 `lyrics`，不得增删段落或改写其他字段。
- 建歌、校验 `song.json`、音频分析属于 `music-mv/`，不要写进本目录。

## 页面职责

- 展示创作中 / 已完成歌曲（按 `song.json` 的 `lifecycle` 过滤）、灵感池和公共素材。
- 展示从企划到成片的流程状态；点击流程步骤会打开对应内容。主角图片步骤同时展示 `01_character_three_views` 中英文共享提示词；主角图片、分镜视频、修复超分和成片以磁盘上的实际文件为准。
- 在「本机成片」中预览主角图片、场景辅助图、分镜视频、超分中间件、成片和原曲。
- 对照歌词、风格提示词、男/女主角三视图共享提示词和 MV 分镜，支持复制。点击「主角图片」时展示可粘贴到 ComfyUI `01_character_three_views` 的中英文定妆词，并预览磁盘上的主角参考图。
- 歌词页可按段落修改 `sections[].lyrics`，经本地开发接口写回对应 `song.json`。不增删段落，不改写其他档案字段。企划、提示词、分镜和其余档案仍由 Agent 按 `music-mv/AGENTS.md` 更新。
- `song.json` 变更时静默重新拉取工作台数据，不要整页刷新；歌词编辑过程中暂停这次刷新，保存或取消后再恢复。

## 开发约定

- 新增界面先抽组件，再接到现有 composable，避免把逻辑堆回 `App.vue`。
- 样式沿用现有色板与间距，不另起一套视觉系统。
- 修改 UI 后，在浏览器中走一遍：切歌、切分类、总览、MV 对齐、本机成片、点击流程步骤、复制、编辑歌词、保存、取消。
- 在本目录运行 `npm run lint` 与 `npm run build`；不要把 `music-mv/` 的校验绑进前端构建。
