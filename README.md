# MusicMV

仓库根目录只保留两个项目：

| 目录 | 用途 | 规范 |
| --- | --- | --- |
| `music-mv/` | 音乐 MV 规范、歌曲档案、本机生成数据 | `music-mv/AGENTS.md` |
| `workbench/` | 纯前端 Vue 工作台 | `workbench/AGENTS.md` |

歌曲与 MV 以本地文件夹为真相源，不使用数据库。工作台只读取 `music-mv/` 中的 `song.json` 与文档。

## 启动工作台

```bash
cd workbench
npm install
npm run dev
```

## 歌曲与校验

```bash
cd music-mv
npm run create-song -- --title "歌名" --slug "english-slug" --brief "创作描述"
npm run validate:songs
```

详细目录、创作流程和 MV 生成规范见 `music-mv/README.md` 与 `music-mv/AGENTS.md`。
前端结构见 `workbench/README.md`。
