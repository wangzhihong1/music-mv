# 音乐 MV 规范与数据

本目录存放歌曲档案、MV 生产文件、创作模板和本机分析脚本。规范见 `AGENTS.md`。创作原则见 `docs/creative-principles.md`。

## 目录

| 路径 | 用途 |
| --- | --- |
| `inspiration/` | 尚未正式立项的主题、句子、故事和声音想法 |
| `songs/` | 每首歌的唯一工作目录：企划、歌词、`song.json`、音频、角色资产、生成文件和成片 |
| `library/` | 可复用的风格、歌词素材、音乐提示词和 [H3 分镜提示词写法](library/h3-prompt-writing.md) |
| `templates/song/` | 新歌立项时复制使用的标准文档 |
| `docs/` | 创作原则 |
| `scripts/` | 建歌与 `song.json` 校验 |
| `tools/` | 本机音频分析等辅助脚本 |

每首歌使用稳定的 `songs/YYYYMMDD-slug/`。进度写在 `song.json` 的 `lifecycle`（`in-progress` 或 `completed`）和 `status` 中，不要按状态把文件夹拆开存放。

## 新建歌曲

在本目录运行：

```bash
npm run create-song -- --title "凌晨出口" --slug "dawn-exit" --brief "一首关于深夜独自开车的城市流行歌"
```

系统会在 `songs/` 下创建 `YYYYMMDD-slug/`，包含 `song.json` 与标准 Markdown 文档。

## 校验

```bash
npm run validate:songs
```
