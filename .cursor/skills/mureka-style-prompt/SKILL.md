---
name: mureka-style-prompt
description: >-
  Writes a Mureka style-box prompt from the official seven elements: genre, emotion, rhythmic feel, vocal direction, core instruments, section structure, and production texture. Use when creating or revising a song style prompt, 风格提示词, Mureka prompt, 04-prompts.md, or song.json prompts. Do not use for lyrics, MV stories, shot lists, or H3 video prompts.
---

# Mureka 风格提示词

风格框只放一条可粘贴的制作说明。来源是 Mureka 官网《如何写 AI 音乐提示词？》的「AI 音乐 Prompt 的 7 个要素」。

先读当前歌曲的 `01-brief.md`、`02-style.md`、`03-lyrics.md` 和 `song.json`。乐器由这首歌的编曲设计决定，再写入提示词。不要把「乐器不限」写进风格框。

## 档案

- `04-prompts.md` 的代码块是粘贴稿。
- `song.json` 的 `prompts` 只留一条：`key` 为 `mureka`，`zh` 为粘贴稿，`en` 为同一条的完整英文对照，`label` 写明 `zh` 的字符数。
- 同一轮同步 `02-style.md` 里的乐器角色，使档案和风格框一致。
- 不写歌手名或作品名。不拆成风格、情绪、乐器多段。

## 七要素

按这个顺序写成一条，重要的放前面：

> 曲风 + 情绪 + 节奏感觉 + 人声方向 + 核心乐器 + 段落结构 + 制作质感

写声音之前，先在内部回答三个问题，不要把这三句原样贴进风格框：这首歌表达什么，听众感到怎样的情绪变化，用在什么场景。

优先级也是这个顺序。生成偏了，先删多余句子，再确认最重要的三到五个特征还在。不要一偏就加长。

1. 曲风和整体身份
2. 情绪与节奏
3. 人声方向
4. 核心乐器
5. 段落和动态
6. 制作质感，以及少量限制

否定指令最多三个，放在最后。只用来修已经听见的具体问题，不写禁止清单。官网例子是 `No spoken intro, avoid excessive vocal runs, no abrupt genre change.`

## 各要素怎么写

### 曲风：三层

只写 `pop` 或「情歌」不够。按三层写：

1. 类型身份：歌曲属于什么方向，例如 `indie pop`、`dream pop`、`alternative R&B`。
2. 可听的标志：能被听见的节奏、乐器、演唱或制作，例如 `reverb-rich guitars`、`warm Rhodes`、`restrained drums`。
3. 整体气质：这些元素怎么一起工作，例如 `hazy and intimate`、`laid-back and nocturnal`。

### 情绪：写成变化，不堆形容词

`sad`、`emotional`、`忧伤` 只是起点。要写成情绪曲线和段落任务：

- `restrained verse`：主歌保持克制
- `rising pre-chorus`：预副歌逐步加张力
- `open sustained notes in the chorus`：副歌用更开阔、延展的音
- `stripped bridge`：桥段降低密度
- `gradual dynamic lift`：整体能量逐步抬升

本仓库的歌如果副歌仍然低、不转亮，就写低着展开，不要为了套官网例句改成 hopeful 或 open。

### 节奏感觉

有 BPM 和拍号就写上。再写身体能感到的律动：慢、中速、留空、靠后于拍，还是往前赶。不要只写「有节奏」。

### 人声：从声音写到演唱方式

人声描述的常用维度：

- 音色与音域：`warm low register`、`clear bright tone`、`soft breathy texture`
- 距离感：`close and intimate vocal`、`spacious vocal with gentle reverb`
- 演唱方式：`conversational phrasing`、`restrained vocal runs`、`confident sustained notes`
- 歌词表达：`clear diction`、`emphasize the central phrase`、`keep the verse conversational`
- 和声安排：`close harmonies in the chorus`、`stacked backing vocals in the final section`

气声、长音裂开、窄颤写在演唱方式里，写成可听见的唱法。不写某个字占几拍。不堆一长串互相冲突的形容词。不写歌手名。发音特殊的词可以单独写 pronunciation，歌词正文保持干净。

### 乐器：写角色，不写名单

先回答三个问题，再写进提示词：

1. 哪个乐器承担主要动机？
2. 哪个乐器负责节奏、低频或空间？
3. 哪些乐器只在特定段落进入？

只写这首歌已经选定的几件。列出十几种乐器不会让编曲更丰富。

### 段落结构：用疏密解释为什么需要这种声音

可以写成标签，也可以直接写进一条提示词。官网常用词：

```
[Verse 1] restrained and intimate
[Pre-Chorus] gradual lift and rising tension
[Chorus] open, memorable, and emotionally released
[Verse 2] add a new melodic detail
[Bridge] stripped back with a different texture
[Final Chorus] fuller harmony and wider arrangement
```

不把歌词原句、行数和气口写进风格框。结构是为了说明能量怎么走，不是要求每一秒都同样饱满。

### 制作质感：用空间和密度，不用空形容词

不用「高级、好听、专业」。官网可直接使用的说法：

- `sparse verse`：主歌保持稀疏
- `leave room for the vocal`：为人声留空间
- `instruments enter gradually`：乐器逐步进入
- `clear separation between parts`：声部分开
- `wider arrangement in the chorus`：副歌加宽
- `restrained low end`：低频收着

人声被伴奏盖住时，写 `leave room for the lead vocal`、`clear vocal center`，或 `accompaniment should support rather than mask the vocal`，同时减少不必要的乐器和低频堆叠。

## 官网案例

这些是官网原文，用来学句式和顺序。不要把里面的曲风、乐器或人声搬进当前歌曲。

七要素写在一条里：

> Dreamy alternative R&B, intimate and nocturnal, slow groove, clear lead vocal with close harmonies, electric piano and muted guitar, restrained verse that opens into a spacious chorus, warm low end and clean modern mix.

曲风从大类写到能听见的标志：

> West Coast G-Funk, laid-back and nocturnal, sliding synth bass, Moog whistle lead, talkbox atmosphere, warm Rhodes, muted wah guitar, behind-the-beat drums, raspy male vocal, smoky lowrider night-cruise mood.

情绪写变化：

> Begin intimate and uncertain, build tension through the pre-chorus, release into a hopeful chorus, then return to a quiet and resolved ending.

人声写到唱法：

> Clear female lead vocal with conversational phrasing, precise diction, restrained verses, stronger sustained notes in the chorus, and close harmonies added only in the final section.

乐器写角色：

> Fingerpicked acoustic guitar carries the verse, warm bass supports the groove, soft strings widen the pre-chorus, and muted drums keep the chorus moving without masking the vocal.

短一点也可以：

> Piano-led verse, subtle synth texture underneath, fuller drums and layered guitar in the chorus, leave space around the lead vocal.

段落控制疏密：

> Sparse verse, gradual pre-chorus lift, wide memorable chorus, stripped bridge, final chorus with added harmonies and percussion.

空间和密度：

> Keep the verse sparse and close, let the vocal lead, introduce percussion gradually, and open the stereo field in the chorus without making the arrangement crowded.

非英语歌词把语言和音乐分开：

> Spanish lyrics, clear pronunciation and natural syllable stress, modern Latin pop, warm acoustic guitar, mid-tempo groove, intimate verse and a bright singable chorus.

下面四条是官网「可以直接改写」的完整 Prompt。

Emo Rap：

> Emo rap with restrained midtempo half-time pull, intimate and emotionally exposed. Use a 2-bar intro: a detuned glassy synth phrase through chorus and reverse reverb, then enter the vocal. Build from a soft clipped kick, dry snare, sparse hats and rounded sub-bass that follows the vocal cadence. Let a blurred synth pad and distant formant-vocal texture answer the main three-note motif. Keep verses thin and conversational; lift the hook with doubled lead vocals, a higher answer and wider synth tails, not extra drums. Feature a young male voice moving between weary melodic rap and cracked singing, with clear words, small pitch scoops and restrained Auto-Tune. Use concrete breakup details and self-contradicting thoughts. Keep the mix close, hazy and low-end controlled. Avoid piano, strings, guitars, brass, trap hat barrages, sliding 808s, bright pop gloss and oversized vocal stacks.

Korean girl-group synth-pop：

> Dark Korean girl-group synth-pop with a slower pulse, deep minor-key tension and a dangerous sensual mood. Open with a 2-bar close-miked female pickup over a low, filtered analog bass. Keep verse one sparse: heavy muted kick, dry snare, minimal hats and a cold repeating synth-bass figure with wide gaps. Gradually deepen the low end and let a detuned synth motif emerge beneath intimate vocals. Build the pre-chorus through rising melodic tension, darker filters and held silences. Open the hook into broader sub-bass, restrained group harmonies and a hypnotic descending melody, never a bright release. Let verse two grow more intense; save the thickest bass and vocal layers for the final chorus. Feature mature female voices, smoky midrange, controlled breathiness, crisp Korean diction and confident lower-register phrasing. Avoid piano, bells, disco grooves, busy percussion and fast tempos.

Girl-group hip-hop：

> Sleek girl-group hip-hop fused with smooth R&B: confident, sultry and midtempo with a half-time bounce. Use a 2-bar intro: breathy female tag, filtered synth pulse and one clipped 808 hit, then enter verse one. Build from deep sub-bass, syncopated kicks, dry snaps, crisp hats and muted electronic accents. Add warm electric keys, glossy detuned synths and chopped vocal flickers. Feature contrasting female voices: one husky, nasal rapper with crisp consonants, playful swagger, Korean-English phrases and elastic rhythmic phrasing; others deliver airy R&B lines, soft falsetto touches and close layered doubles. Move from stripped rap verses into a smooth melodic pre-chorus, then a short addictive group hook with breathy responses and stronger bass. Keep the mix polished, intimate and fashion-forward. Avoid rock guitars, brass, aggressive EDM drops, shouted choruses and childish cute vocals.

UK garage × deep house：

> Korean girl-group UK garage and deep-house pop with relaxed, slower midtempo swing, cool confidence and subtle Y2K club character. Open with a 2-bar low female pickup and a warm filtered bass pulse, then settle into an unhurried two-step groove. Use soft syncopated kicks, a dry spacious snare, sparse shuffled hats, rounded bass notes and one muted synth stab. Keep rhythmic subdivisions minimal, leaving generous space between drum hits. Rotate female voices between smooth midrange talk-singing, lightly husky melodies, easy rhythmic rap and airy upper-register touches. Let members trade short, relaxed phrases with subtle tuning, close doubles and small vocal chops. Build the hook through a simple repeated melody, gentle bass movement and restrained group responses. Keep it clean, sensual and composed. Avoid fast tempos, double-time drums, busy hats, piano, bells, marimba and EDM drops.

## 生成后如何迭代 Prompt

一次只改一个主要变量。保存每一版提示词和对应音频，才能知道哪一句真的改变了结果。

1. 确定身份。只写曲风、情绪、节奏、人声和两到三个核心乐器，先确认大方向。
2. 调整结构。补上主歌、副歌、桥段的对比，听能量有没有发展。
3. 调整人声。改发音、距离、唱法、和声，或关键词怎么被强调。
4. 调整编配。哪些声部退后，哪些乐器在副歌进入，低频和空间怎么变。
5. 处理具体问题。只加少量否定指令，修试听里最明显的重复、拥挤或突兀变化。

核心曲风、情绪和结构都偏了，就重写这一条。只有发音、某一件乐器或某一个段落有问题，就改那一处，或交给 Remix、Extend、Studio，不把整条提示词重写一遍。

## 常见错误与改进方式

1. 只写曲风名称。`Pop song` 没有情绪、节奏、人声和结构。补上节奏感觉、核心乐器、人声和段落对比。
2. 形容词太多，音乐动作太少。`beautiful, amazing, emotional, professional` 听不出该怎么编。改成 `restrained verse, rising pre-chorus, clear diction, warm low end`。
3. 所有段落都要求饱满。每一段都满，副歌就没有可抬升的空间。写明 `sparse verse`、`fuller chorus`、`stripped bridge`。若这首歌的副歌也不能变满，就写它仍然低、仍然疏，只换哪一件乐器走到前面。
4. 一次改动太多。同时改曲风、歌词、人声、节奏和乐器，就分不清是哪一项起了作用。每次只动一个主要变量。
5. 把限制写成否定清单。过多禁止项会和想听到的声音抢注意力。先写希望得到的声音，再补少量针对性限制。

## 不要写进风格框

- 歌词正文、行数、气口和哪个字拉长。这些留在歌词框。
- 互相冲突的一长串声音形容词。
- 生成偏了就继续加长。先删掉不必要的句子，确认最重要的三到五个特征还在。

## 写完核对

- 七要素都在，而且曲风、情绪、人声在前。
- 每件乐器都有角色，不是名单。
- 主歌、副歌、桥段的疏密不一样。
- 否定指令不超过三个。
- `zh`、`en` 和 `04-prompts.md` 是同一条说明。
