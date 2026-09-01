# Vue 工作台规范

本目录是纯前端 Vue 3 工作台，只负责展示和对照 `../music-mv/` 中的歌曲数据。不要在本目录存放歌曲 Markdown、音频、角色资产、生成视频或 ComfyUI 工作流。

## 技术边界

- 使用 Vue 3、Vite、Composition API、单文件组件。
- 按模块拆分：`src/components/`、`src/composables/`、`src/api/`、`src/constants/`、`src/lib/`、`src/utils/`。
- 组件使用 PascalCase 多词命名；页面文案使用中文，源码文件名使用英文。
- 不要引入数据库、后端框架或与歌曲生成无关的依赖。
- 本地开发时，`plugins/studio-library-plugin.js` 只从 `../music-mv/` 读取 `song.json` 和 Markdown，不得把数据复制进 `src/`。
- 建歌、校验 `song.json`、音频分析属于 `music-mv/`，不要写进本目录。

## 页面职责

- 展示创作中 / 已完成歌曲、灵感池和公共素材。
- 展示从企划到成片的流程状态。
- 对照歌词、提示词和 MV 分镜，支持复制。
- 不在页面里直接改写歌曲档案；档案仍由 Agent 按 `music-mv/AGENTS.md` 更新。

## 开发约定

- 新增界面先抽组件，再接到现有 composable，避免把逻辑堆回 `App.vue`。
- 样式沿用现有色板与间距，不另起一套视觉系统。
- 修改 UI 后，在浏览器中走一遍：切歌、切分类、总览、MV 对齐、复制。
- 在本目录运行 `npm run lint` 与 `npm run build`；不要把 `music-mv/` 的校验绑进前端构建。
