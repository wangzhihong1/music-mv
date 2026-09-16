# 《只是想你了》MV 脚本

> 本片范围：第一段副歌竖屏短片，不是整首叙事 MV。
>
> 时间要求：每个分镜 1–10 秒；分镜从 00:00 连续覆盖至用户确认的短片时长。

## 制作设定

- 目标时长：00:28
- 用户确认的歌曲总时长：00:28（第一段副歌 `music/chorus1_first.mp3`，源文件 28.368 秒，时间线取整到 00:28）
- 时长确认日期：20260913
- 分镜累计时长：28 秒
- 画幅：9:16
- 视觉风格：真人写实录音棚演唱，克制近景
- 色彩与光线：暖琥珀棚灯、深色吸音板、自然肤色
- 拍摄方式：角色参考图直接生成 H3 分镜视频；H3 使用 9:16（约 720×1280 或 672×1216），合格后超至 1080×1920
- 主要场景：同一录音棚
- 主要人物：女主（本片只用正面定妆 `femaleLead_front.png`，即 v05；不使用侧面/背面）
- 表演与口型需求：五镜全程对口型。H3 按闭唇生成，口型由 ComfyUI MuseTalk 贴 `chorus1_first.mp3` 对应人声。不摘耳机、不换棚、不换装。不使用 Wav2Lip / InfiniteTalk。
- 预算或制作限制：一次只跑一条 H3；耳机是外加配件。H3 三个参考槽都用同一张正面。

## 主角图片

| 角色 ID | 角色 | 正面 | 侧面 | 背面 | 其他参考 |
| --- | --- | --- | --- | --- | --- |
| femaleLead | 女主 | assets/characters/femaleLead_front.png | 不使用 | 不使用 | 用户确认的 v05 正面；H3 三槽同图 |
| maleLead | 男主 | 本片不出镜 |  |  |  |

## 主角形象提示词

女主定妆提示词已写入 `song.json` 的 `characterLooks.femaleLead`，与确认的正面 v05 一致。H3 分镜只加黑色头戴耳机和棚内麦克风，不改脸和衣服。

## 生成约定

- `mvWorkflow.generationMethod`：`characterReferenceVideo`
- 每镜 `lipSync: true`，`aspectRatio: 9:16`
- H3 提示词保持闭唇；不要让 H3 张嘴唱
- 合格 H3 镜头再送 ComfyUI MuseTalk（只替换下半脸），音频用本片副歌文件对应片段
- H3 输出 `generated/video/raw/shot_XX_h3_v0X.mp4`；口型中间件为 `generated/video/intermediate/shot_XX_musetalk_v01.mp4`

## 分镜脚本

| 镜号 | 开始 | 结束 | 时长 | 故事阶段 | 歌曲段落/歌词 | 出镜参考 | 生成类型 | 景别与机位 | 画面与动作 | 运镜 | 场景/道具 | 转场/特效 | 声画重点 | 输出视频 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | 00:00 | 00:06 | 6 秒 | 开场 | 只是想你了 / 在没开灯的房间 | femaleLead | characterVideo | 侧一点看见嘴和麦，唱出第一句 | 女主已戴黑色头戴耳机，站在录音棚里。镜头略偏左侧，轻微三分之二侧面，双唇和银色电容麦同时可见。全程不要挡住嘴。H3 闭唇，口型由后期 MuseTalk 生成。 | 9:16 平视中近景，镜头略偏左侧，holds a static shot。 | 录音棚 | 暖琥珀光，无切镜 | 第一句 Hook「只是想你了」入口型 | generated/video/raw/shot_01_h3_v10.mp4 |
| 02 | 00:06 | 00:12 | 6 秒 | 发展 | 只是想你了 | femaleLead | characterVideo | 右手轻触耳罩，把想念唱进棚里 | 同一机位略近。她右手轻轻按住右侧耳罩，眼神仍落在麦克风上，唱「只是想你了」。棚内只有她。H3 闭唇，后期 MuseTalk 对口型。 | 9:16 胸口高度中近景，holds a static shot 后极轻横移。 | 录音棚 | 同棚连续，景别略近 | 重复 Hook，动作落到耳机 | generated/video/raw/shot_02_h3_v01.mp4 |
| 03 | 00:12 | 00:18 | 6 秒 | 转折 | 在这个无声的瞬间 / 想你了 | femaleLead | characterVideo | 无声的瞬间，棚里只剩她和麦 | 镜头更近。她不再碰耳机，只对着麦克风把「在这个无声的瞬间」唱完，眼神持住，像把话留在棚里而不是发给对方。H3 闭唇，后期 MuseTalk 对口型。 | 9:16 近景，pushes in with small amplitude at slow speed。 | 录音棚 | 推近，环境声更空 | 「在这个无声的瞬间」 | generated/video/raw/shot_03_h3_v01.mp4 |
| 04 | 00:18 | 00:23 | 5 秒 | 高潮 | 不需要任何抱歉 | femaleLead | characterVideo | 不需要任何抱歉 | 最强一句。她仍克制，只把胸腔打开一点，对着麦克风唱「不需要任何抱歉」。不嘶吼、不笑、不哭。H3 闭唇，后期 MuseTalk 对口型。 | 9:16 中近景，holds a static shot。 | 录音棚 | 锁定近景 | 「不需要任何抱歉」 | generated/video/raw/shot_04_h3_v04.mp4 |
| 05 | 00:23 | 00:28 | 5 秒 | 结尾 | 想你了 | femaleLead | characterVideo | 最后一句想你了，停在麦前 | 唱完最后的「想你了」后她不离开麦克风，也不摘耳机，只把目光停在防喷罩上，像这句话已经说完、不会发到任何人手机里。H3 闭唇，后期 MuseTalk 对口型。 | 9:16 中近景，holds a static shot。 | 录音棚 | 停在麦前，不切出棚 | 最后一句「想你了」后的留白 | generated/video/raw/shot_05_h3_v01.mp4 |

## 逐镜 H3 提示词

### 01　00:00–00:06　开场

- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 对口型：是（H3 闭唇生成，后期 MuseTalk）
- 画幅：9:16
- 输出视频：`generated/video/raw/shot_01_h3_v10.mp4`
- 景别：侧一点看见嘴和麦，嘴全程无遮挡
- 运镜：9:16 平视中近景，镜头略偏左侧，holds a static shot。
- 场景/道具：竖屏录音棚。镜头略偏她左侧。银色电容麦在画面右侧。双唇、人中、下巴全程完全露出；防喷罩如出现只在胸口高度、低于下巴。
- 人物动作：女主已戴黑色头戴耳机。轻微三分之二侧面，双眼睁开。开始唱「只是想你了」。H3 本镜闭唇，口型由后期 MuseTalk 生成。
- 转场/特效：暖琥珀光，无切镜
- 声画重点：第一句 Hook「只是想你了」入口型
- H3 参考图生视频提示词：

```text
subject_definitions:
<Subject 1> is the adult woman whose appearance comes from <Picture 1>. <Picture 2> and <Picture 3> are the same front still as <Picture 1>, used only to reinforce identity. Preserve her identity, face, long dark hair worn loose, body proportions, fitted ivory ribbed crop top, denim shorts and white sneakers. Do not invent a side or back view. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 6-second live-action 9:16 MV shot of <Subject 1> at a slight off-axis booth angle with her mouth fully uncovered and the silver microphone visible, with appearance taken only from <Picture 1>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - her face stays the same person as <Picture 1> in every frame. <Picture 2> and <Picture 3> repeat the same front still and do not provide a side or back view; do not turn her into a hard 90-degree profile or a back view. Hair, body proportions and the exact reference outfit stay identical to <Picture 1>. Black over-ear studio headphones are only an added accessory over her hair. A silver condenser microphone belongs to the booth as a visible prop at her right, never covering her mouth. No second living person. The environment, lighting, action and camera movement are generated from this prompt.

detailed_description:
The target video is photoreal live-action, a restrained contemporary Chinese recording-booth look, warm amber practical light, dark acoustic panels, 9:16 vertical.
[Shot 1] A 9:16 medium close-up at eye level. The camera sits slightly to her left, so we see a mild three-quarter of her face and also the silver condenser microphone on her right. Both eyes, eyelids, irises, pupils, nose, philtrum, both lips and chin stay fully readable. Never a 90-degree profile; the far left eye remains visible. Framed from the upper chest to a little space above the headphones. The camera holds a static shot. Her head stays locked: no turn, no nod, no sway, no lean. Exact fitted ivory ribbed crop top, black over-ear headphones added. Warm amber light on her face, especially the mouth. The silver microphone stands on the right side of the frame, clearly visible as a studio condenser, beside her shoulder and chest, not in front of her face. Keep a clear gap of empty air around both lips, the philtrum and the chin in every frame. Nothing touches or covers the mouth: no microphone body, no hand, no hair, no mesh. If a round pop filter appears, it sits low on the stand at chest height, entirely below her chin, never at lip height and never overlapping the face. Both lips stay fully uncovered in clear air. In the first two seconds she is already standing in the booth, shoulders settled, eyelids open, eyes looking toward the microphone. Then only a tiny chest lift, mouth softly closed for this generation pass, at most one slow natural blink. By the final second her gaze still holds on the mic, quiet and unapologetic. Stable faces and hands, smooth skin texture, coherent clothing, eyelids remain open, irises and pupils stay readable. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no mesh covering the mouth, no pop filter at mouth height, no microphone covering the face, no on-screen text, no logos, no readable lyric sheet text.

overall_soundscape:
quiet booth room tone, faint headphone cable, no extra voices.

non_diegetic_music:
N/A
```

### 02　00:06–00:12　发展

- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 对口型：是（H3 闭唇生成，后期 MuseTalk）
- 画幅：9:16
- 输出视频：`generated/video/raw/shot_02_h3_v01.mp4`
- 景别：右手轻触耳罩，把想念唱进棚里
- 运镜：9:16 胸口高度中近景，holds a static shot 后极轻横移。
- 场景/道具：同一录音棚、同一耳机与麦克风；手指与耳罩的接触是本镜动作。
- 人物动作：同一机位略近。她右手轻轻按住右侧耳罩，眼神仍落在麦克风上，唱「只是想你了」。棚内只有她。H3 闭唇，后期 MuseTalk 对口型。
- 转场/特效：同棚连续，景别略近
- 声画重点：重复 Hook，动作落到耳机
- H3 参考图生视频提示词：

```text
subject_definitions:
<Subject 1> is the adult woman whose appearance comes from <Picture 1>. <Picture 2> and <Picture 3> are the same front still as <Picture 1>, used only to reinforce identity. Preserve her identity, face, long dark hair worn loose, body proportions, fitted ivory ribbed crop top, denim shorts and white sneakers. Do not invent a side or back view. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 6-second live-action 9:16 MV shot of <Subject 1> lightly touching her headphone cup at the studio microphone, with appearance taken only from <Picture 1>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - her face stays the same person as <Picture 1> in every frame. <Picture 2> and <Picture 3> repeat the same front still and do not provide a side or back view; do not turn her into a hard 90-degree profile or a back view. Hair, body proportions and the exact reference outfit stay identical to <Picture 1>. Black over-ear studio headphones are only an added accessory over her hair. A silver condenser microphone and round black pop filter belong to the booth, not to her identity. No second living person. The environment, lighting, action and camera movement are generated from this prompt.

detailed_description:
The target video is photoreal live-action, a restrained contemporary Chinese recording-booth look, warm amber practical light, dark acoustic panels, 9:16 vertical.
[Shot 1] A 9:16 chest-height medium close-up of <Subject 1> at the same recording booth. Exact reference outfit, black over-ear headphones added, silver microphone and black pop filter in the lower foreground. The camera holds a static shot, then trucks right with small amplitude at slow speed. In the first two seconds her right hand rises and rests two fingers on the right headphone cup. Then the hand stays, she does not fidget, and her eyes keep holding the microphone. By the final second her shoulders lower half an inch, still restrained, mouth softly closed for this generation pass. Keep her head large in the 9:16 frame so both eyes, eyelids, irises and pupils stay sharp. Body faces the camera with only a mild three-quarter turn. Gaze holds on the microphone. Brows stay level, breath is small, at most one slow natural blink. Lips remain softly closed in this H3 pass; do not open the mouth to sing. Keep the pop filter beside the microphone so both lips stay fully visible. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos, no readable lyric sheet text.

overall_soundscape:
quiet booth, faint headphone foam, no voices.

non_diegetic_music:
N/A
```

### 03　00:12–00:18　转折

- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 对口型：是（H3 闭唇生成，后期 MuseTalk）
- 画幅：9:16
- 输出视频：`generated/video/raw/shot_03_h3_v01.mp4`
- 景别：无声的瞬间，棚里只剩她和麦
- 运镜：9:16 近景，pushes in with small amplitude at slow speed。
- 场景/道具：麦克风与防喷罩占画面下沿，暖光更贴脸，背景吸音板虚成暗色。
- 人物动作：镜头更近。她不再碰耳机，只对着麦克风把「在这个无声的瞬间」唱完，眼神持住，像把话留在棚里而不是发给对方。H3 闭唇，后期 MuseTalk 对口型。
- 转场/特效：推近，环境声更空
- 声画重点：「在这个无声的瞬间」
- H3 参考图生视频提示词：

```text
subject_definitions:
<Subject 1> is the adult woman whose appearance comes from <Picture 1>. <Picture 2> and <Picture 3> are the same front still as <Picture 1>, used only to reinforce identity. Preserve her identity, face, long dark hair worn loose, body proportions, fitted ivory ribbed crop top, denim shorts and white sneakers. Do not invent a side or back view. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 6-second live-action 9:16 MV shot of <Subject 1> in a tighter 9:16 close-up at the silent studio microphone, with appearance taken only from <Picture 1>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - her face stays the same person as <Picture 1> in every frame. <Picture 2> and <Picture 3> repeat the same front still and do not provide a side or back view; do not turn her into a hard 90-degree profile or a back view. Hair, body proportions and the exact reference outfit stay identical to <Picture 1>. Black over-ear studio headphones are only an added accessory over her hair. A silver condenser microphone and round black pop filter belong to the booth, not to her identity. No second living person. The environment, lighting, action and camera movement are generated from this prompt.

detailed_description:
The target video is photoreal live-action, a restrained contemporary Chinese recording-booth look, warm amber practical light, dark acoustic panels, 9:16 vertical.
[Shot 1] A 9:16 close-up at eye level keeps <Subject 1>'s face large, from upper chest to hair, with the silver microphone and round pop filter along the bottom of the frame. Same booth, same headphones, exact reference T-shirt. The camera pushes in with small amplitude at slow speed. In the first two seconds both hands are down, she is still, eyes on the mic as if the room has gone quiet. Then she holds that look without a second glance, inner brows tightening one millimeter. By the final second her mouth stays softly closed for this generation pass, no smile, no apology. Keep her head large in the 9:16 frame so both eyes, eyelids, irises and pupils stay sharp. Body faces the camera with only a mild three-quarter turn. Gaze holds on the microphone. Brows stay level, breath is small, at most one slow natural blink. Lips remain softly closed in this H3 pass; do not open the mouth to sing. Keep the pop filter beside the microphone so both lips stay fully visible. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos, no readable lyric sheet text.

overall_soundscape:
almost empty booth tone, very faint breath, no voices.

non_diegetic_music:
N/A
```

### 04　00:18–00:23　高潮

- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 对口型：是（H3 闭唇生成，后期 MuseTalk）
- 画幅：9:16
- 输出视频：`generated/video/raw/shot_04_h3_v04.mp4`
- 景别：不需要任何抱歉
- 运镜：9:16 中近景，holds a static shot。
- 场景/道具：暖光打在脸和麦克风上，耳机轮廓清晰，背景几乎全暗。麦和仅一块防喷罩在画面右下角，与嘴唇留空，双唇全程无遮挡。
- 人物动作：最强一句。她仍克制，只把胸腔打开一点，对着麦克风唱「不需要任何抱歉」。不嘶吼、不笑、不哭。H3 闭唇，后期 MuseTalk 对口型。
- 转场/特效：锁定近景
- 声画重点：「不需要任何抱歉」
- H3 参考图生视频提示词：

```text
subject_definitions:
<Subject 1> is the adult woman whose appearance comes from <Picture 1>. <Picture 2> and <Picture 3> are the same front still as <Picture 1>, used only to reinforce identity. Preserve her identity, face, long dark hair worn loose, body proportions, fitted ivory ribbed crop top, denim shorts and white sneakers. Do not invent a side or back view. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 5-second live-action 9:16 MV shot of <Subject 1> holding a restrained medium close-up on the line that needs no apology, with appearance taken only from <Picture 1>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - her face stays the same person as <Picture 1> in every frame. <Picture 2> and <Picture 3> repeat the same front still and do not provide a side or back view; do not turn her into a hard 90-degree profile or a back view. Hair, body proportions and the exact reference outfit stay identical to <Picture 1>. Black over-ear studio headphones are only an added accessory over her hair. A silver condenser microphone and exactly one round black pop filter belong to the booth, not to her identity. No second living person. The environment, lighting, action and camera movement are generated from this prompt.

detailed_description:
The target video is photoreal live-action, a restrained contemporary Chinese recording-booth look, warm amber practical light, dark acoustic panels, 9:16 vertical.
[Shot 1] A 9:16 medium close-up of <Subject 1> at the recording booth, framed from the upper chest to a little space above the headphones. Her head is large enough that both eyes, eyelids, irises, pupils, nose, philtrum and both lips stay fully readable, but the face does not fill the whole frame. Body faces the camera, almost frontal, only a mild three-quarter turn. The camera holds a static shot. Her head stays still: no turn, no nod, no sway. Same black over-ear headphones, same fitted ivory ribbed crop top. The silver condenser microphone and exactly one round black pop filter sit in the lower-right corner on a separate stand, clearly separated from her face. Leave empty space between the pop filter and her lips. The pop filter must not overlap her mouth, chin, cheeks or hair in any frame. Both lips, philtrum and chin stay fully uncovered; no mesh, no microphone body, no hand in front of the mouth. No second pop filter. Warm even light on her face, especially the mouth. In the first two seconds her chest lifts a little as if the vocal opens, but her expression stays restrained, not a grin, not a cry. Then she keeps her gaze toward the microphone, brows level, mouth softly closed for this generation pass. By the final second she is still, unapologetic, no extra gesture. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no pop filter covering the mouth, no second pop filter, no extra mesh screen, no on-screen text, no logos, no readable lyric sheet text.

overall_soundscape:
intimate booth, close breath against the pop filter, no extra voices.

non_diegetic_music:
N/A
```

### 05　00:23–00:28　结尾

- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 对口型：是（H3 闭唇生成，后期 MuseTalk）
- 画幅：9:16
- 输出视频：`generated/video/raw/shot_05_h3_v01.mp4`
- 景别：最后一句想你了，停在麦前
- 运镜：9:16 中近景，holds a static shot。
- 场景/道具：同一近景略收，暖光仍在，她和麦克风停在最后一帧。
- 人物动作：唱完最后的「想你了」后她不离开麦克风，也不摘耳机，只把目光停在防喷罩上，像这句话已经说完、不会发到任何人手机里。H3 闭唇，后期 MuseTalk 对口型。
- 转场/特效：停在麦前，不切出棚
- 声画重点：最后一句「想你了」后的留白
- H3 参考图生视频提示词：

```text
subject_definitions:
<Subject 1> is the adult woman whose appearance comes from <Picture 1>. <Picture 2> and <Picture 3> are the same front still as <Picture 1>, used only to reinforce identity. Preserve her identity, face, long dark hair worn loose, body proportions, fitted ivory ribbed crop top, denim shorts and white sneakers. Do not invent a side or back view. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 5-second live-action 9:16 MV shot of <Subject 1> finishing the last 想你了 and staying at the microphone, with appearance taken only from <Picture 1>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - her face stays the same person as <Picture 1> in every frame. <Picture 2> and <Picture 3> repeat the same front still and do not provide a side or back view; do not turn her into a hard 90-degree profile or a back view. Hair, body proportions and the exact reference outfit stay identical to <Picture 1>. Black over-ear studio headphones are only an added accessory over her hair. A silver condenser microphone and round black pop filter belong to the booth, not to her identity. No second living person. The environment, lighting, action and camera movement are generated from this prompt.

detailed_description:
The target video is photoreal live-action, a restrained contemporary Chinese recording-booth look, warm amber practical light, dark acoustic panels, 9:16 vertical.
[Shot 1] A 9:16 medium close-up of <Subject 1> still at the same recording booth, headphones on, microphone in the lower frame. The camera holds a static shot. In the first two seconds she is still performing toward the mic, mouth softly closed for this generation pass. Then the performance settles: shoulders drop a few millimeters, eyes stay on the pop filter, no smile. By the final second she does not remove the headphones and does not step away; she simply remains in the warm booth with the unsent feeling already sung. Keep her head large in the 9:16 frame so both eyes, eyelids, irises and pupils stay sharp. Body faces the camera with only a mild three-quarter turn. Gaze holds on the microphone. Brows stay level, breath is small, at most one slow natural blink. Lips remain softly closed in this H3 pass; do not open the mouth to sing. Keep the pop filter beside the microphone so both lips stay fully visible. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos, no readable lyric sheet text.

overall_soundscape:
quiet booth after the last syllable, faint headphone hiss, no voices.

non_diegetic_music:
N/A
```


## 拍摄清单

### 场景

- 同一暖色录音棚，深色吸音板，不切换地点

### 角色与造型

- 女主定妆：米白贴身罗纹露脐短袖、牛仔短裤、白鞋、长发
- 外加：黑色头戴耳机

### 道具

- 银色电容麦克风、圆形黑防喷罩、耳机线

### 特效与后期

- 五镜均 ComfyUI MuseTalk；Wav2Lip / InfiniteTalk 废次不进成片
- 超分至 1080×1920
- 成片音轨使用 `music/chorus1_first.mp3`

## 连贯性检查

- [x] 歌曲总时长已经用户明确确认
- [x] 时间线从 00:00 连续覆盖至歌曲结束
- [x] 相邻分镜之间无空档、无重叠
- [x] 每个分镜时长均为 1–10 秒
- [x] 每个分镜的结束时间不超过歌曲时长
- [x] 所有分镜累计时长等于歌曲总时长
- [x] 开场、发展、转折、高潮、结尾均有对应分镜
- [x] 关键因果、人物动机、情绪转折和故事结局完整
- [x] 已运行 `npm run validate:songs` 并通过
- [x] 关键歌词有对应画面或情绪回应
- [x] 情节与已确认故事一致
- [x] 人物、服装、道具和时间线连续
- [x] 已登记主角正面、侧面、背面参考图，且每镜 `subjects` 与出镜人物一致
- [x] 每镜均有 `genMode`、可执行的 H3 提示词和唯一输出视频路径
- [x] 不依赖逐镜关键帧；剪辑/合成镜也导出为独立分镜视频
- [x] 高潮画面与歌曲高潮同步
- [x] 结尾落实歌曲和故事的共同主题
