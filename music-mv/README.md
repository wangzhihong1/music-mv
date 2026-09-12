# 音乐 MV 规范与数据

本目录存放歌曲档案、MV 生产文件、创作模板和本机分析脚本。规范见 `AGENTS.md`。创作原则见 `docs/creative-principles.md`。

## 目录

| 路径 | 用途 |
| --- | --- |
| `inspiration/` | 尚未正式立项的主题、句子、故事和声音想法 |
| `songs/in-progress/` | 正在制作的歌曲 |
| `songs/completed/` | 已定稿、已发布或暂时封存的歌曲 |
| `library/` | 可复用的风格、歌词素材、音乐提示词和 [H3 分镜提示词写法](library/h3-prompt-writing.md) |
| `templates/song/` | 新歌立项时复制使用的标准文档 |
| `mvs/` | 进入本机素材生产后的 MV 专属目录 |
| `docs/` | 创作原则 |
| `scripts/` | 建歌与 `song.json` 校验 |
| `tools/` | 本机音频分析等辅助脚本 |

## 新建歌曲

在本目录运行：

```bash
npm run create-song -- --title "凌晨出口" --slug "dawn-exit" --brief "一首关于深夜独自开车的城市流行歌"
```

系统会在 `songs/in-progress` 下创建 `YYYYMMDD-slug/`，包含 `song.json` 与标准 Markdown 文档。

## 校验

```bash
npm run validate:songs
```
