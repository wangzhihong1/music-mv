# MiniMax H3 分镜提示词写法

本文件把官方 Ref2VA 格式和社区实测，压成可直接写进 `05_ref2va_4step_sla` 的规则。写或改任何 H3 分镜提示词前先读这一份。

依据：

- [MiniMax-AI/MiniMax-H3 `h3-prompt-writing`](https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills/h3-prompt-writing)
- [Hugging Face `VIDEO_PROMPT_WRITING_GUIDE_ref_en.md`](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/docs/VIDEO_PROMPT_WRITING_GUIDE_ref_en.md) 与 [discussion #71](https://huggingface.co/MiniMaxAI/MiniMax-H3/discussions/71)
- [Comfy-Org/MiniMax-H3 discussion #30](https://huggingface.co/Comfy-Org/MiniMax-H3/discussions/30)（广角糊脸）
- [Carasibana/ComfyUI-H3-FaceRefine](https://github.com/Carasibana/ComfyUI-H3-FaceRefine)（脸占比过小是模型特性）
- [chishiki37/minimax-h3-av-comfyui-recipe](https://github.com/chishiki37/minimax-h3-av-comfyui-recipe)（稳定脸/手的质量约束）

## 先判断：提示词还是模型

| 现象 | 更像什么 | 处理 |
| --- | --- | --- |
| 大全景、远景、头只占画面一小块，脸糊、五官抹掉 | **模型上限**。H3 对「头在画面里的像素占比」敏感，不是分辨率数字；720p 全景也会糊 | 改成中景/中近景，或接受远景只看形体，脸留给后期 FaceRefine |
| 4-step 在 0.5MP 及以下出现噪声、脸畸变 | **采样/分辨率**。社区实测 4-step LoRA 约 1.0MP 更稳 | 脸重要的镜头不要低于约 0.8MP（如 1216×672）；能上 1280×720 更好 |
| 正脸尚可，转到正侧或背面后换人 | **参考冲突 + 大转头**。侧面槽只用于轻微三分之二，不是 90° 正侧 | 提示词禁止 hard profile / back view；需要侧背就单独做背影镜 |
| 相册、倒影、后景里的脸被抹眼 | **提示词**。`out of focus` / `no second person` / `unrecognizable` 会被当成「毁掉五官」 | 印刷脸、倒影脸也要写 open eyelids、visible irises and pupils；禁止 smear / motion blur on eyes |
| 眼神闪、瞳孔跳、反复眨眼 | **提示词过多视线指令**，模型在几个注视点之间插值 | 一眼神持住，最多一次视线移动，最多一次自然眨眼 |
| 参考图互相打架（两张不同脸、服装冲突） | **参考输入**，不是正文能救 | 每个槽只承担一件事：身份、角度或服装，不要塞互相矛盾的图 |

改提示词解决不了「头太小」。那是 H3 的已知特性，社区才做 FaceRefine：先把脸裁满画布再生成，再贴回去。

## 官方 Ref2VA 六段，顺序不能乱

```text
subject_definitions:
summary:
retention_analysis:
detailed_description:
overall_soundscape:
non_diegetic_music:
```

字段名、标签、关系标记保持英文。对白、歌词、场景里真实可见的字保留原文。本项目成片用用户母带，故 `non_diegetic_music: N/A`。

### 标签怎么用

- `<Subject N>`：会出现在成片里的人/物/环境，不是文件本身。
- `<Picture N>`：只在「这张图就是首帧/尾帧/分镜锚点」时单独定义。角色三视图只用来锁身份时，写进 Subject 即可，不要再为每张图单开一行。
- 同一标签在六段里含义必须相同。
- 本项目单人镜：`<Subject 1>` ← `<Picture 1/2/3>`。双人镜加 `<Subject 2>` ← `<Picture 4/5/6>`。

### `subject_definitions`

用参考图锁身份，只写图里已经有的不变特征（发型、衣服、体型）。不要在这里发明新的眼型、鼻型、妆容。

```text
<Subject 1> is the adult woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same face, long dark hair worn loose, ivory T-shirt, denim shorts and white sneakers.
```

外套若只是外加层，不要写进身份定义当「换装」；在 `retention_analysis` 里说明它罩在参考服装外。

### `summary`

一行任务类型前缀，然后用已定义标签概括这一镜。本项目几乎都是：

```text
[reference generation] one continuous 6-second live-action MV shot of <Subject 1> ...
```

不要在 summary 里发明新标签。

### `retention_analysis`

每个标签一行。关系标记只能用：`fully_preserved` / `partially_preserved` / `attribute_transfer` / `weak_reference`。

官方澄清：画面里只露出局部（只看到半张脸、一张桌子）**不等于** `partially_preserved`。只要身份特征没改，仍写 `fully_preserved`，裁切写在 `detailed_description`。

```text
<Subject 1> (appears in [Shot 1]): fully_preserved - the same face, hair, body and reference outfit are retained. A dark wool overcoat is only an added outer layer.
```

不要把场景禁令、动作说明、运镜塞进这一段。

印刷照、倒影里的第二人用 `attribute_transfer` 或写清「只出现在照片里，不是店里的活人」。

### `detailed_description`

这是模型真正执行的时间轴。

1. **先写 1–2 句风格**，再写 `[Shot 1]`。不要一上来就 `[Shot 1]`。
2. 本项目一条提示词 = 一条连续镜头。不要写 `[Shot 2]`、`the camera cuts to`、叠化、匹配切。
3. `[Shot 1]` 不加时间码。时段变化写在同一镜里，用 `In the first two seconds... Then... By the final second...`，不要用 `0.0-3.5s:` 这种清单。
4. 运镜写进句子，用官方三维：**类型 + 幅度 + 速度**。

| 类型 | 写法 |
| --- | --- |
| 推近/拉远（机身动） | `pushes in` / `pulls out` |
| 变焦 | `zooms in` / `zooms out` |
| 横摇/横移 | `pans left/right` / `trucks left/right` |
| 固定 | `holds a static shot` |
| 幅度 | `with small amplitude` / `with large amplitude` |
| 速度 | `at slow speed` / `at fast speed` |

例：`The camera pushes in with small amplitude at slow speed toward her face.`

5. 生成任务官方建议 350–500 英文词。我们禁止切镜，单镜 5–8 秒写 **250–400 词** 即可：构图、人物位置、环境、光、一个动作、一个表情持住、运镜、声音。不要为凑字数堆 `cinematic` / `beautiful`。
6. 主体第一次清楚入画时，用标签复述身份特征；之后只复用 `<Subject 1>`，不要每句重写五官。
7. 质量约束写具体可见物，不要写抽象情绪词。社区有效短语：

```text
stable faces and hands, smooth skin texture, coherent clothing,
eyelids remain open, irises and pupils stay readable,
no flickering eyes, no facial warping, no beauty-filter slim face,
no extra limbs, no on-screen text, no logos
```

## 脸与眼神：可以写什么

身份以参考图为准。正文只写**这一镜里脸怎么动**，不重新设计脸。

### 要写

- 头在画面里足够大：优先中景、中近景、近景。需要交代环境时，用中全景而不是大全景演脸。
- 脸对向镜头或轻微三分之二。写 `a mild three-quarter turn toward camera`，不要 `turns to profile` / `looks back over her shoulder` 除非这是背影镜。
- 微表情：**一个持住的眼神 + 最多一次变化**。按时段写眉、唇、呼吸，但眼睛不要连续换目标。
- 眼皮保持睁开，虹膜和瞳孔可读。写 `one slow natural blink` 或全程不眨眼。
- 印刷脸、玻璃倒影里的脸同样要求五官完整。若不要活人第二人，写 `no second living person in the room`，不要写 `no second face`（会抹掉照片上的脸）。

### 不要写

- `soft focus on her face`、`dreamy blur`、`unrecognizable`、`smeared eyes`、`motion blur on the face`
- `glances around`、`eyes dart`、`blinks several times`、`looks left then right then down`
- `sparkling eyes`、换眼色、换鼻型、换脸型、`slim face`、整容感
- 同一镜里又张嘴又闭唇、又大笑又克制
- 把「不要第二人」写成毁掉所有后景五官

### 微表情时段怎么写

差：

```text
0.0-2s eyes look forward. 2-4s she glances to the glass. 4-5s she looks at the chairs. 5-6s she looks back to camera and blinks twice.
```

好：

```text
Her gaze holds on the two empty chairs inside the window. Brows stay level, lips remain closed, and her breath is shallow. Near the end she lets her eyes rest there without a second glance, with at most one slow blink.
```

情绪用可见动作代替形容词：不要写 `she feels lonely`，写 `her mouth stays closed and her shoulders lower half an inch`。

## 本机成片参数（RTX 3060 12GB）

- 脸重要的镜头：约 0.8–1.0MP，4–6 秒先跑通，再试 6–8 秒。横版参考 1216×672 或 1280×720。
- 冒烟可用 0.5MP，但不要把 0.5MP 4-step 当正式成片。
- 一次只跑一条 H3。显存不够先减时长，再减分辨率；不要先摘掉参考图。
- 4-step SLA 会放大提示词冲突。动作只留一件主事，运镜只留一种。

## 可粘贴骨架

```text
subject_definitions:
<Subject 1> is the adult woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same face, hair, body proportions and the exact reference outfit.

summary:
[reference generation] one continuous 6-second live-action MV shot of <Subject 1> at the photo-studio window, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same face, hair, body and reference outfit are retained in every frame. A dark wool overcoat is only an added outer layer. No second living person.

detailed_description:
The target video is photoreal live-action, a restrained modern Chinese-city music-video look, winter dusk, slightly cool color outside the window and warm tungsten inside.
[Shot 1] A medium shot at eye level keeps <Subject 1> large enough in frame that both eyes, eyelids, irises and pupils stay sharp. She wears the exact reference outfit under a simple dark wool overcoat. The camera holds a static shot, then pushes in with small amplitude at slow speed. Her body faces the camera with only a mild three-quarter turn; it never becomes a hard profile or a back view. Her gaze holds on the two empty wooden chairs inside the studio. Brows stay level, lips remain closed, and her breath is small. She does not speak, sing, or mouth lyrics. Near the end she settles that same look without a second glance, with at most one slow blink. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
Quiet wet-street ambience and a faint drip, with soft fabric movement when she shifts her weight. No voices.

non_diegetic_music:
N/A
```

## 写完自检

- [ ] 六段齐全，标签前后一致
- [ ] 风格句在 `[Shot 1]` 之前
- [ ] 只有一条连续镜头，没有切镜时间码
- [ ] 运镜写了类型，必要时写了幅度和速度
- [ ] 没有用文字重画五官
- [ ] 眼神是持住，不是左右扫
- [ ] 脸在画面里足够大；大全景不承担表情戏
- [ ] 印刷/倒影脸没有被 `out of focus` 或 `no second face` 抹掉
- [ ] `non_diegetic_music: N/A`
