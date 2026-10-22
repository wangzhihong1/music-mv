# 歌曲创作阶段

仅在用户明确同意开始写歌后进入正式创作。创作讨论不创建歌曲目录、不填写正式企划、不写歌词或正式提示词。
读取已有歌曲时，用 `npm run inspect:song -- --slug <song-folder>` 按需查询；避免为修改一个段落或镜头加载整份 `song.json`。

## 启动与企划

- 用户既可以给歌名，也可以只描述想要的音乐；不得要求用户必须先提供歌名。
- 方向信息足够时，先问：`方向已经比较清楚了。现在要开始写歌吗？` 只有明确同意才开始。
- 保留用户原始描述，再提取主题、情绪、风格、语言、人声、场景、必要/避免元素和待确认信息；整理不得改变原意或重复追问已提供的信息。
- 正式创作前明确：写给谁、关于什么、听完希望产生什么感受、最想让人记住什么。按 [`../docs/creative-principles.md`](../docs/creative-principles.md) 收成一句核心创作句；方向未清楚前不写歌词或编曲。
- 歌曲目录用 `songs/YYYYMMDD-slug/`；暂时无歌名可用 `YYYYMMDD-untitled`，确认歌名后再改名。显示名放 `song.json.title`。新歌 `lifecycle` 为 `in-progress`，完成后改为 `completed`，不要移动目录。
- `song.json` 是结构化内容的唯一事实源。每次修改企划、歌词、歌曲参数、提示词或状态，同轮更新 JSON；人工维护的正式文档继续同步，生成视图只编辑 JSON 并运行对应渲染命令。JSON 必须有效；歌词写入 `sections`。

## 歌词与提示词

- 写歌词前读取 [`../library/lyric-lines.json`](../library/lyric-lines.json)。仅在贴合歌曲时借用或引用，不为用满而硬塞。
- 歌曲围绕核心创作句和 Hook 展开。情绪是灵魂、主题是方向、Hook 是记忆、表达是生命；无关的漂亮句子、炫技或情节应删改。
- 歌词与曲风方法见创作原则文档；借鉴方法，不复制他人作品的成句、旋律或标志性音色。用户自存佳句不受“不复制成句”限制。
- Mureka 风格提示词必须先读并遵循 [`.cursor/skills/mureka-style-prompt/SKILL.md`](../../.cursor/skills/mureka-style-prompt/SKILL.md)。只写一条可直接粘贴进风格框的专属提示词，不拆段；`prompts` 保留一条 `key: mureka`，`zh` 为粘贴稿、`en` 为完整英文对照，`label` 标明中文字符数，不写具体歌手或作品名。
- 人物定妆/负向提示词和三视图只写入 `characters/YYYYMMDD-slug/character.json` 的 `look`，用 `works[].songId` 关联歌曲；不要写入歌曲 MV 流程。分镜写入 `song.json.shots`，发行文案写入 `releaseCopy`。

## 歌词交付后的交接

歌词生成并完成后，主动问：`歌词已经完成。需要我继续创作一个与这首歌贴切的 MV 故事吗？` 用户不需要时停止 MV 流程，不自行继续；需要时转入 [`mv-story.md`](mv-story.md)。
