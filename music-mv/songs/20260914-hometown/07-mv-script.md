# 《故乡》MV 脚本

> 启动条件：MV 故事已被用户明确确认，并且用户同意继续拆分为 MV 脚本。
>
> 时间要求：每个分镜必须为 1–10 秒；所有分镜累计时长及最晚结束时间均不得超过歌曲时长。
>
> 母带：`music/hometown.mp3`（由用户提供的 `故乡.mp3` 拷入）。Xing 时长 257.097 秒，时间线按 **04:17** 铺满，避免按 04:18 多出无声的一秒。

## 导演总谱

- 导演论点：故乡还在过它的日子；那天谁都走不进去。
- 视觉章节：空的地方立住 → 日子被不同的人过、并切回空景 → 熟路和田埂对不上那天 → 副歌用空与众人并置落下 Hook → 一盏灯、黑路、云停着。
- 爆点窗口：Chorus 2 与 Bridge（约 02:38–03:28）对准「回得了故乡 / 走不进那天」和「不该难过」。
- 母题：开场是空田和慢云；结尾云停在田那边。不设唯一主角，不挂男女主三视图，不对口型。

## 制作设定

- 目标时长：04:17
- 用户确认的歌曲总时长：用户先报 04:18；以提供的母带实测为准，锁定 04:17
- 时长确认日期：20260916
- 分镜累计时长：04:17（257 秒）
- 画幅：16:9
- 视觉风格：中国乡村写实，干、慢，空景比人脸多
- 色彩与光线：夏末自然光，午后到擦黑，不要金黄怀旧滤镜
- 拍摄方式：H3 直出分镜视频。空景与路人不使用角色参考图
- 主要场景：田、泥路、土院晒场、沟渠、田埂、村路、桌边
- 主要人物：不固定。翻晒的人、洗手的人、跑过的少年、路上的背影、田边停住的人，都可以只出现一次
- 表演与口型需求：无对口型、无演唱镜头。有人的镜头闭唇，眼神持住
- 预算或制作限制：一次只跑一条 H3；空景可用大全景；有脸的镜头用中景或中近景

## 主角图片

本片不设唯一男女主，不登记三视图。`characterLooks` 留空。空景 `subjects: []`。

## 生成约定

- `mvWorkflow.generationMethod`：`characterReferenceVideo`（工作流仍走 H3；本片多数镜不挂图）
- `genMode`：`characterVideo`
- 不为每个分镜预制关键帧
- 有人的镜头写微表情；空景写风、云、路、庄稼如何承担主题
- 每个分镜导出 `generated/video/raw/shot_XX_h3_v01.mp4`

## 分镜脚本

| 镜号 | 开始 | 结束 | 时长 | 故事阶段 | 歌曲段落/歌词 | 出镜参考 | 生成类型 | 景别与机位 | 画面与动作 | 运镜 | 场景/道具 | 转场/特效 | 声画重点 | 输出视频 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | 00:00 | 00:07 | 7 秒 | 开场 | Instrumental Intro | 无（空景或路人） | characterVideo | 16:9 平视大全景，holds a static shot。 | 夏末田野，画面里没有人。远处一摊云从田那边慢慢过来。 | 16:9 平视大全景，holds a static shot。 | 田 | 从黑切到田 | 前奏空弦，先立地方 | generated/video/raw/shot_01_h3_v01.mp4 |
| 02 | 00:07 | 00:14 | 7 秒 | 开场 | Instrumental Intro | 无（空景或路人） | characterVideo | 16:9 平视中全景，pushes in with small amplitude at slow speed。 | 镜头对着田那边的云。云比任何脚步都慢。仍没有人。 | 16:9 平视中全景，pushes in with small amplitude at slow speed。 | 田与天 | 同天空景 | 吉他动机，云的速度 | generated/video/raw/shot_02_h3_v01.mp4 |
| 03 | 00:14 | 00:21 | 7 秒 | 开场 | Instrumental Intro | 无（空景或路人） | characterVideo | 16:9 略俯中全景，holds a static shot。 | 田边一条晒热的泥路空着，草从路边长进来。 | 16:9 略俯中全景，holds a static shot。 | 田边泥路 | 切到路 | 路还在，人还没来 | generated/video/raw/shot_03_h3_v01.mp4 |
| 04 | 00:21 | 00:28 | 7 秒 | 开场 | Instrumental Intro | 无（空景或路人） | characterVideo | 16:9 低机位近景，holds a static shot。 | 路边草被风压低再弹起。没有手去摸。 | 16:9 低机位近景，holds a static shot。 | 路边草 | 切到草 | 草和风，仍是空景 | generated/video/raw/shot_04_h3_v01.mp4 |
| 05 | 00:28 | 00:37 | 9 秒 | 开场 | Intro 尾 | 无（空景或路人） | characterVideo | 16:9 平视中全景，trucks right with small amplitude at slow speed。 | 成片庄稼被风翻过去又翻回来。故乡先作为地方结束前奏。 | 16:9 平视中全景，trucks right with small amplitude at slow speed。 | 田 | 前奏落到慢拨 | 前奏收束，地方立住 | generated/video/raw/shot_05_h3_v01.mp4 |
| 06 | 00:37 | 00:44 | 7 秒 | 发展 | Verse 1 | 无（空景或路人） | characterVideo | 16:9 平视中景，holds a static shot。 | 土院里一位中年女人用竹筐翻晒粮食，不看镜头，不是全片主角。 | 16:9 平视中景，holds a static shot。 | 土院晒场 | 空景切到日子 | 主歌进入，日子开始被过 | generated/video/raw/shot_06_h3_v01.mp4 |
| 07 | 00:44 | 00:51 | 7 秒 | 发展 | Verse 1 | 无（空景或路人） | characterVideo | 16:9 略俯近景，holds a static shot。 | 另一个人在沟边蹲着洗手，只见手、腕和裤脚，不必认脸。 | 16:9 略俯近景，holds a static shot。 | 沟渠 | 换人，不跟拍 | 水声，仍是村里的事 | generated/video/raw/shot_07_h3_v01.mp4 |
| 08 | 00:51 | 00:57 | 6 秒 | 发展 | Verse 1 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot，人从画面划过。 | 一个背着旧书包的少年从晒场跑过，镜头不追脸。 | 16:9 平视中全景，holds a static shot，人从画面划过。 | 晒场 | 动切静 | 脚步，一闪而过 | generated/video/raw/shot_08_h3_v01.mp4 |
| 09 | 00:57 | 01:03 | 6 秒 | 发展 | 草还在长 | 无（空景或路人） | characterVideo | 16:9 平视大全景，holds a static shot。 | 忽然又回到空田，只剩蝉和云。 | 16:9 平视大全景，holds a static shot。 | 田 | 有人切回空景 | 人声句与空田并置 | generated/video/raw/shot_09_h3_v01.mp4 |
| 10 | 01:03 | 01:08 | 5 秒 | 发展 | 摸到的，是今天 | 无（空景或路人） | characterVideo | 16:9 平视中景，从背后 holds a static shot。 | 一个成年男人背影走上泥路，镜头只跟背和路，不转成正脸。 | 16:9 平视中景，从背后 holds a static shot。 | 泥路 | 空田接到路 | 主歌尾，路开始被走 | generated/video/raw/shot_10_h3_v01.mp4 |
| 11 | 01:08 | 01:15 | 7 秒 | 发展 | 这条路还熟 / 我走上去 | 无（空景或路人） | characterVideo | 16:9 低机位近景，holds a static shot，人从镜头前走过。 | 特写两只鞋走在泥路上，路还熟。 | 16:9 低机位近景，holds a static shot，人从镜头前走过。 | 泥路 | 从背影落到脚 | 对词：这条路还熟 | generated/video/raw/shot_11_h3_v01.mp4 |
| 12 | 01:15 | 01:22 | 7 秒 | 发展 | 没走回去 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 同一条路空下来。没有人折返。 | 16:9 平视中全景，holds a static shot。 | 泥路 | 人走后的空 | 对词：没走回去 | generated/video/raw/shot_12_h3_v01.mp4 |
| 13 | 01:22 | 01:29 | 7 秒 | 发展 | 回得了，故乡 | 无（空景或路人） | characterVideo | 16:9 平视大全景，holds a static shot。 | 村边田和几户屋脊，光开始往下沉，仍可没人。 | 16:9 平视大全景，holds a static shot。 | 村边 | 副歌进入 | Hook：回得了故乡 | generated/video/raw/shot_13_h3_v01.mp4 |
| 14 | 01:29 | 01:36 | 7 秒 | 发展 | 风还认 / 那道弯 | 无（空景或路人） | characterVideo | 16:9 略高中全景，trucks left with small amplitude at slow speed。 | 泥路在田边拐一个熟弯，空的。 | 16:9 略高中全景，trucks left with small amplitude at slow speed。 | 泥路弯 | 同主题换景别 | 风还认那道弯 | generated/video/raw/shot_14_h3_v01.mp4 |
| 15 | 01:36 | 01:43 | 7 秒 | 发展 | 走不进 / 那天 | 无（空景或路人） | characterVideo | 16:9 平视中近景，holds a static shot。 | 一个中年男人在田埂边站着看田，不是演唱，不是主角。 | 16:9 平视中近景，holds a static shot。 | 田埂边 | 空弯接到人 | 人在，进不去那天 | generated/video/raw/shot_15_h3_v01.mp4 |
| 16 | 01:43 | 01:50 | 7 秒 | 发展 | 点点滴滴 / 就不在 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 切回空田和云。第一段副歌用空缺收。 | 16:9 平视中全景，holds a static shot。 | 田 | 从脸回到空 | 点点滴滴就不在 | generated/video/raw/shot_16_h3_v01.mp4 |
| 17 | 01:50 | 01:57 | 7 秒 | 发展 | 庄稼换了一季，还是那股香 | 无（空景或路人） | characterVideo | 16:9 平视近景，holds a static shot。 | 近处庄稼穗，风过。不演歌词说明书，只是田里的现在。 | 16:9 平视近景，holds a static shot。 | 田 | 第二段主歌 | 熟悉的香在风里 | generated/video/raw/shot_17_h3_v01.mp4 |
| 18 | 01:57 | 02:04 | 7 秒 | 发展 | 我站在田埂上 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 田埂空着，像有人会站，还没有人。 | 16:9 平视中全景，holds a static shot。 | 田埂 | 穗切到埂 | 位置在，人不在 | generated/video/raw/shot_18_h3_v01.mp4 |
| 19 | 02:04 | 02:10 | 6 秒 | 发展 | 风也过来 | 无（空景或路人） | characterVideo | 16:9 平视中景，holds a static shot。 | 一个年轻人站上田埂看风过来，不是等铃的扮演，只是站住。 | 16:9 平视中景，holds a static shot。 | 田埂 | 空埂到人 | 风也过来 | generated/video/raw/shot_19_h3_v01.mp4 |
| 20 | 02:10 | 02:16 | 6 秒 | 发展 | 像在等，放学铃 | 无（空景或路人） | characterVideo | 16:9 平视大全景，holds a static shot。 | 村路上两三个模糊的人往屋子方向走，不是成队放学。大全景不演脸。 | 16:9 平视大全景，holds a static shot。 | 村路 | 田埂切村路 | 像在等放学铃，画面却是现在的回家 | generated/video/raw/shot_20_h3_v01.mp4 |
| 21 | 02:16 | 02:22 | 6 秒 | 发展 | Verse 2 尾 | 无（空景或路人） | characterVideo | 16:9 略俯中近景，holds a static shot。 | 矮桌或灶边，碗还热着，人可以不在。 | 16:9 略俯中近景，holds a static shot。 | 屋内桌边 | 外面切到家里的空 | 日子的热气 | generated/video/raw/shot_21_h3_v01.mp4 |
| 22 | 02:22 | 02:30 | 8 秒 | 转折 | 还站在这里 / 原来的地方 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 转折：同一条熟路持住几秒，没有人按那天的方式走回去。 | 16:9 平视中全景，holds a static shot。 | 泥路 | 预副歌2，世界状态改变 | 还站在这里，路先空着 | generated/video/raw/shot_22_h3_v01.mp4 |
| 23 | 02:30 | 02:38 | 8 秒 | 转折 | 连自己，都有点生 | 无（空景或路人） | characterVideo | 16:9 平视中全景，pulls out with small amplitude at slow speed。 | 空田埂，风过。没有人在等。熟的是活法，生的是时间。 | 16:9 平视中全景，pulls out with small amplitude at slow speed。 | 田埂 | 空路到空埂 | 连自己都有点生——用空缺说 | generated/video/raw/shot_23_h3_v01.mp4 |
| 24 | 02:38 | 02:45 | 7 秒 | 高潮 | 回得了，故乡 / 泥路还发着烫 | 无（空景或路人） | characterVideo | 16:9 低机位中景，holds a static shot。 | 第二段副歌。侧光打在泥路上，路像还热。 | 16:9 低机位中景，holds a static shot。 | 泥路 | 副歌2爆点开始 | Hook 再起，泥路发烫 | generated/video/raw/shot_24_h3_v01.mp4 |
| 25 | 02:45 | 02:52 | 7 秒 | 高潮 | 回得了，故乡 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 院子里有人收拾，田边有人站一会儿，各过各的，没有对口型。 | 16:9 平视中全景，holds a static shot。 | 院与田边 | 空路切到众人 | 回得了故乡，人各自在 | generated/video/raw/shot_25_h3_v01.mp4 |
| 26 | 02:52 | 02:59 | 7 秒 | 高潮 | 走不进 / 那天 | 无（空景或路人） | characterVideo | 16:9 平视大全景，holds a static shot。 | 切回没人的田和路。主题不靠一张脸完成。 | 16:9 平视大全景，holds a static shot。 | 田与路 | 众人切回空 | 走不进那天 | generated/video/raw/shot_26_h3_v01.mp4 |
| 27 | 02:59 | 03:06 | 7 秒 | 高潮 | 点点滴滴 / 就散了 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 云还在田那边，更淡。 | 16:9 平视中全景，holds a static shot。 | 田与天 | 副歌2收在云 | 点点滴滴就散了 | generated/video/raw/shot_27_h3_v01.mp4 |
| 28 | 03:06 | 03:13 | 7 秒 | 高潮 | 明明不该难过 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 没人的村路，蝉在，风在。不是想哭也不是想逃。 | 16:9 平视中全景，holds a static shot。 | 村路 | 桥段更慢 | 明明不该难过 | generated/video/raw/shot_28_h3_v01.mp4 |
| 29 | 03:13 | 03:21 | 8 秒 | 高潮 | 却也高兴不起来 | 无（空景或路人） | characterVideo | 16:9 平视中近景，holds a static shot。 | 一个成年人坐在院边或田埂头，不哭、不笑、不唱。 | 16:9 平视中近景，holds a static shot。 | 院边 | 空路到坐着的人 | 却也高兴不起来 | generated/video/raw/shot_29_h3_v01.mp4 |
| 30 | 03:21 | 03:28 | 7 秒 | 高潮 | 想留下，那时候 | 无（空景或路人） | characterVideo | 16:9 低机位近景，holds a static shot。 | 草和庄稼再被风翻一次，没有人。 | 16:9 低机位近景，holds a static shot。 | 田边草 | 从脸回到风 | 想留下，那时候 | generated/video/raw/shot_30_h3_v01.mp4 |
| 31 | 03:28 | 03:36 | 8 秒 | 结尾 | 回得了，故乡 | 无（空景或路人） | characterVideo | 16:9 平视大全景，holds a static shot。 | 远景一扇窗或一盏路灯样的屋灯亮起来。不是告别仪式。 | 16:9 平视大全景，holds a static shot。 | 村边 | 最终副歌 | 回得了故乡，日子不告别 | generated/video/raw/shot_31_h3_v01.mp4 |
| 32 | 03:36 | 03:44 | 8 秒 | 结尾 | 我还站在田埂上 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 可有一个背影站在田埂，不转过脸来。也可以理解为路人。 | 16:9 平视中全景，holds a static shot。 | 田埂 | 灯到人的背影 | 我还站在田埂上 | generated/video/raw/shot_32_h3_v01.mp4 |
| 33 | 03:44 | 03:52 | 8 秒 | 结尾 | 走不进 / 那天 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 没亮灯的那截泥路。 | 16:9 平视中全景，holds a static shot。 | 泥路 | 背影切回黑路 | 走不进那天 | generated/video/raw/shot_33_h3_v01.mp4 |
| 34 | 03:52 | 04:00 | 8 秒 | 结尾 | 人已经，不是 | 无（空景或路人） | characterVideo | 16:9 平视大全景，holds a static shot。 | 空景即可：田、路、一点灯。不需要一张脸把这句话演完。 | 16:9 平视大全景，holds a static shot。 | 田与村 | 最终副歌收 | 人已经，不是 | generated/video/raw/shot_34_h3_v01.mp4 |
| 35 | 04:00 | 04:08 | 8 秒 | 结尾 | Outro | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 尾奏。田埂上空着。 | 16:9 平视中全景，holds a static shot。 | 田埂 | outro | 编曲收回 | generated/video/raw/shot_35_h3_v01.mp4 |
| 36 | 04:08 | 04:17 | 9 秒 | 结尾 | 云还停在 / 田那边 | 无（空景或路人） | characterVideo | 16:9 平视大全景，holds a static shot。 | 最后画面：云停着。日子还要过。那天还是进不去。 | 16:9 平视大全景，holds a static shot。 | 田与天 | 淡出或停住 | 云还停在田那边 | generated/video/raw/shot_36_h3_v01.mp4 |

## 逐镜 H3 提示词

### 01　00:00–00:07　开场

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_01_h3_v01.mp4`
- 景别：空田，云还在远处
- 运镜：16:9 平视大全景，holds a static shot。
- 场景/道具：田
- 人物动作：夏末田野，画面里没有人。远处一摊云从田那边慢慢过来。
- 转场/特效：从黑切到田
- 声画重点：前奏空弦，先立地方
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, an empty late-summer field with a distant cloud

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level very wide shot of dry rice fields in a Chinese village, late summer afternoon. The camera holds a static shot. In the first two seconds the frame is only crops and pale sky. Then a low cloud bank drifts in slowly from the far side of the fields. By the final second the land is still empty of people. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
quiet field wind, distant insects, no voices

non_diegetic_music:
N/A
```

### 02　00:07–00:14　开场

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_02_h3_v01.mp4`
- 景别：云走得很慢
- 运镜：16:9 平视中全景，pushes in with small amplitude at slow speed。
- 场景/道具：田与天
- 人物动作：镜头对着田那边的云。云比任何脚步都慢。仍没有人。
- 转场/特效：同天空景
- 声画重点：吉他动机，云的速度
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, the same cloud drifting slower than walking pace

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide frame of sky over the fields. The camera pushes in with small amplitude at slow speed. In the first two seconds the cloud sits low over the far crops. Then it drifts a little, slower than a person would walk. By the final second the field below is still empty. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
soft wind, no voices

non_diegetic_music:
N/A
```

### 03　00:14–00:21　开场

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_03_h3_v01.mp4`
- 景别：空着的泥路
- 运镜：16:9 略俯中全景，holds a static shot。
- 场景/道具：田边泥路
- 人物动作：田边一条晒热的泥路空着，草从路边长进来。
- 转场/特效：切到路
- 声画重点：路还在，人还没来
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, an empty sun-baked mud path beside the fields

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 slightly high medium-wide shot of a packed mud path along the crops. The camera holds a static shot. In the first two seconds the empty path runs toward the fields. Then grass at the verge barely moves. By the final second no person has entered. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
dry wind along the path, no footsteps

non_diegetic_music:
N/A
```

### 04　00:21–00:28　开场

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_04_h3_v01.mp4`
- 景别：风把草翻过来
- 运镜：16:9 低机位近景，holds a static shot。
- 场景/道具：路边草
- 人物动作：路边草被风压低再弹起。没有手去摸。
- 转场/特效：切到草
- 声画重点：草和风，仍是空景
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, grass at the path edge moving once in the wind

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 low close view of mixed wild grass beside packed mud. The camera holds a static shot. In the first two seconds the blades are still. Then one gust lays them over and they spring back. By the final second no hand and no person appear. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
grass rustle, light wind

non_diegetic_music:
N/A
```

### 05　00:28–00:37　开场

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_05_h3_v01.mp4`
- 景别：庄稼自己在过下午
- 运镜：16:9 平视中全景，trucks right with small amplitude at slow speed。
- 场景/道具：田
- 人物动作：成片庄稼被风翻过去又翻回来。故乡先作为地方结束前奏。
- 转场/特效：前奏落到慢拨
- 声画重点：前奏收束，地方立住
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 9-second live-action 16:9 MV shot of <Subject 1>, crops turning in wind with no people in the village afternoon

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide of rice or grain. The camera trucks right with small amplitude at slow speed. In the first two seconds a gust turns the crop heads. Then they settle. By the final second the field is still empty of people. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
crop wind, quiet village distance, no voices

non_diegetic_music:
N/A
```

### 06　00:37–00:44　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_06_h3_v01.mp4`
- 景别：有人在翻晒
- 运镜：16:9 平视中景，holds a static shot。
- 场景/道具：土院晒场
- 人物动作：土院里一位中年女人用竹筐翻晒粮食，不看镜头，不是全片主角。
- 转场/特效：空景切到日子
- 声画重点：主歌进入，日子开始被过
- H3 提示词：

```text
subject_definitions:
<Subject 1> is an adult Chinese village woman about 50, dark hair in a low bun, faded printed blouse, dark trousers, rolling grain on a round bamboo tray. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, turning grain on a bamboo tray in a dirt courtyard, not a heroine shot

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city, no cars.
[Shot 1] A 16:9 eye-level medium shot. The camera holds a static shot. Framed from the waist up so her face stays readable. In the first two seconds she is already turning grain with both hands. Then she keeps that work, eyes on the tray, lips closed. By the final second she does not look at camera. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
dry grain on bamboo, courtyard room tone, no dialogue

non_diegetic_music:
N/A
```

### 07　00:44–00:51　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_07_h3_v01.mp4`
- 景别：沟边洗手
- 运镜：16:9 略俯近景，holds a static shot。
- 场景/道具：沟渠
- 人物动作：另一个人在沟边蹲着洗手，只见手、腕和裤脚，不必认脸。
- 转场/特效：换人，不跟拍
- 声画重点：水声，仍是村里的事
- H3 提示词：

```text
subject_definitions:
<Subject 1> is an adult Chinese villager seen from the hands and forearms only, wet skin, dark sleeves rolled, crouching at a ditch. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, hands rinsing in ditch water, face not required

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city, no cars.
[Shot 1] A 16:9 slightly high close shot of hands and a ditch edge. The camera holds a static shot. In the first two seconds both hands enter the water. Then they rub once and pause dripping. By the final second no full face is needed; if a cheek appears it stays still, lips closed, eyes down on the water. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
water against cement, no voices

non_diegetic_music:
N/A
```

### 08　00:51–00:57　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_08_h3_v01.mp4`
- 景别：有人跑过晒场
- 运镜：16:9 平视中全景，holds a static shot，人从画面划过。
- 场景/道具：晒场
- 人物动作：一个背着旧书包的少年从晒场跑过，镜头不追脸。
- 转场/特效：动切静
- 声画重点：脚步，一闪而过
- H3 提示词：

```text
subject_definitions:
<Subject 1> is a Chinese teenage boy, short black hair, worn backpack, plain t-shirt, running across a threshing ground. This is a passing figure, not a lead. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 6-second live-action 16:9 MV shot of <Subject 1>, a boy running across the threshing ground without being followed as hero

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city, no cars.
[Shot 1] A 16:9 eye-level medium-wide of packed dirt and bamboo mats. The camera holds a static shot. In the first two seconds the frame is almost empty. Then the boy runs through from left to right, body readable, face not held as a close-up. By the final second only dust hangs. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
quick footsteps on dirt, backpack strap, no voices

non_diegetic_music:
N/A
```

### 09　00:57–01:03　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_09_h3_v01.mp4`
- 景别：切回没人的田
- 运镜：16:9 平视大全景，holds a static shot。
- 场景/道具：田
- 人物动作：忽然又回到空田，只剩蝉和云。
- 转场/特效：有人切回空景
- 声画重点：人声句与空田并置
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 6-second live-action 16:9 MV shot of <Subject 1>, cut back to the empty field, only wind and the far cloud

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level very wide of the same fields, light a little later. The camera holds a static shot. In the first two seconds no person is present. Then crop heads move once. By the final second the cloud is still far off. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
insects, field wind, no voices

non_diegetic_music:
N/A
```

### 10　01:03–01:08　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_10_h3_v01.mp4`
- 景别：有人走上熟路
- 运镜：16:9 平视中景，从背后 holds a static shot。
- 场景/道具：泥路
- 人物动作：一个成年男人背影走上泥路，镜头只跟背和路，不转成正脸。
- 转场/特效：空田接到路
- 声画重点：主歌尾，路开始被走
- H3 提示词：

```text
subject_definitions:
<Subject 1> is an adult Chinese man, short black hair, faded light shirt, dark trousers, seen from behind on a mud path. Dedicated back view; do not turn him to camera. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 5-second live-action 16:9 MV shot of <Subject 1>, a man walking onto the familiar mud path, back view only

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city, no cars.
[Shot 1] A 16:9 eye-level medium shot from behind. The camera holds a static shot. In the first two seconds he steps onto the packed mud. Then he walks a few paces away from camera. By the final second he is still facing the fields, never a front view. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
slow footsteps on dry mud, no voices

non_diegetic_music:
N/A
```

### 11　01:08–01:15　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_11_h3_v01.mp4`
- 景别：脚在熟路上
- 运镜：16:9 低机位近景，holds a static shot，人从镜头前走过。
- 场景/道具：泥路
- 人物动作：特写两只鞋走在泥路上，路还熟。
- 转场/特效：从背影落到脚
- 声画重点：对词：这条路还熟
- H3 提示词：

```text
subject_definitions:
<Subject 1> is an adult walker shown only from the knees down, worn sneakers, dark trousers, stepping on packed mud. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, feet walking the familiar mud path

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city, no cars.
[Shot 1] A 16:9 low close shot of a packed mud path. The camera holds a static shot. In the first two seconds the path is empty. Then two feet walk through the frame at walking pace and continue out. By the final second the path remains. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
footsteps on dry mud, no voices

non_diegetic_music:
N/A
```

### 12　01:15–01:22　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_12_h3_v01.mp4`
- 景别：走过，没走回去
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：泥路
- 人物动作：同一条路空下来。没有人折返。
- 转场/特效：人走后的空
- 声画重点：对词：没走回去
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, the same mud path after the walker, nobody turning back

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide of the mud path toward the fields. The camera holds a static shot. In the first two seconds faint footprints are visible and the path is empty. Then grass at the verge moves. By the final second nobody walks back into frame. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
settling dust, light wind, no footsteps

non_diegetic_music:
N/A
```

### 13　01:22–01:29　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_13_h3_v01.mp4`
- 景别：地方还在
- 运镜：16:9 平视大全景，holds a static shot。
- 场景/道具：村边
- 人物动作：村边田和几户屋脊，光开始往下沉，仍可没人。
- 转场/特效：副歌进入
- 声画重点：Hook：回得了故乡
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, the village still there at the edge of the fields

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level very wide of fields and a few low tiled roofs. The camera holds a static shot. In the first two seconds the place is simply present. Then light lowers a little. By the final second it can remain empty of people. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
open village air, distant dog or insects, no close voices

non_diegetic_music:
N/A
```

### 14　01:29–01:36　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_14_h3_v01.mp4`
- 景别：风还认那道弯
- 运镜：16:9 略高中全景，trucks left with small amplitude at slow speed。
- 场景/道具：泥路弯
- 人物动作：泥路在田边拐一个熟弯，空的。
- 转场/特效：同主题换景别
- 声画重点：风还认那道弯
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, the familiar bend in the mud path, empty

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 slightly high medium-wide of a gentle bend in the packed mud path. The camera trucks left with small amplitude at slow speed. In the first two seconds the bend is empty. Then the inner grass is shorter from use. By the final second nobody rounds the bend. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
wind along the curve, no footsteps

non_diegetic_music:
N/A
```

### 15　01:36–01:43　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_15_h3_v01.mp4`
- 景别：有人在田边停一下
- 运镜：16:9 平视中近景，holds a static shot。
- 场景/道具：田埂边
- 人物动作：一个中年男人在田埂边站着看田，不是演唱，不是主角。
- 转场/特效：空弯接到人
- 声画重点：人在，进不去那天
- H3 提示词：

```text
subject_definitions:
<Subject 1> is an adult Chinese man about 40, sun-dark skin, short black hair, faded grey polo, standing at the field ridge. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, a man pausing at the ridge looking at the fields, not a performance close-up

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city, no cars.
[Shot 1] A 16:9 eye-level medium close-up. The camera holds a static shot. Head large enough for both eyes. In the first two seconds he is already looking at the crops, lips closed, brows level. Then he holds that gaze with at most one slow blink. By the final second his shoulders have not moved into a song performance. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
field wind, close quiet breath, no singing

non_diegetic_music:
N/A
```

### 16　01:43–01:50　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_16_h3_v01.mp4`
- 景别：点点滴滴不在
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：田
- 人物动作：切回空田和云。第一段副歌用空缺收。
- 转场/特效：从脸回到空
- 声画重点：点点滴滴就不在
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, empty field and thinner cloud after the first chorus hook

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide of fields and sky. The camera holds a static shot. In the first two seconds the land is empty. Then the far cloud looks thinner. By the final second still no person. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
wind, fading insects, no voices

non_diegetic_music:
N/A
```

### 17　01:50–01:57　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_17_h3_v01.mp4`
- 景别：庄稼换了一季仍香
- 运镜：16:9 平视近景，holds a static shot。
- 场景/道具：田
- 人物动作：近处庄稼穗，风过。不演歌词说明书，只是田里的现在。
- 转场/特效：第二段主歌
- 声画重点：熟悉的香在风里
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, crop heads in the present season, empty of people

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level close of grain heads. The camera holds a static shot. In the first two seconds they are still. Then wind turns them once. By the final second no person enters. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
close crop rustle

non_diegetic_music:
N/A
```

### 18　01:57–02:04　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_18_h3_v01.mp4`
- 景别：空田埂
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：田埂
- 人物动作：田埂空着，像有人会站，还没有人。
- 转场/特效：穗切到埂
- 声画重点：位置在，人不在
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, an empty field ridge as if someone might stand there later

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide along a narrow packed-earth ridge between crops. The camera holds a static shot. In the first two seconds the ridge is empty. Then wind moves the crop walls. By the final second nobody is waiting on it. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
wind in two walls of crop, no footsteps

non_diegetic_music:
N/A
```

### 19　02:04–02:10　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_19_h3_v01.mp4`
- 景别：有人站上田埂
- 运镜：16:9 平视中景，holds a static shot。
- 场景/道具：田埂
- 人物动作：一个年轻人站上田埂看风过来，不是等铃的扮演，只是站住。
- 转场/特效：空埂到人
- 声画重点：风也过来
- H3 提示词：

```text
subject_definitions:
<Subject 1> is a young adult Chinese man about 28, short black hair, white short-sleeve shirt, dark trousers, standing on a field ridge. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 6-second live-action 16:9 MV shot of <Subject 1>, someone standing on the ridge as wind comes across, not acting out a school bell

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city, no cars.
[Shot 1] A 16:9 eye-level medium shot. The camera holds a static shot. In the first two seconds he is already on the ridge, looking at the crops, lips closed. Then wind moves his shirt once. By the final second he has not turned into profile. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
wind, fabric, no bell, no voices

non_diegetic_music:
N/A
```

### 20　02:10–02:16　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_20_h3_v01.mp4`
- 景别：远处有人往回走
- 运镜：16:9 平视大全景，holds a static shot。
- 场景/道具：村路
- 人物动作：村路上两三个模糊的人往屋子方向走，不是成队放学。大全景不演脸。
- 转场/特效：田埂切村路
- 声画重点：像在等放学铃，画面却是现在的回家
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese village lane in this prompt, including two or three distant small figures walking toward houses. Faces stay unreadable because they are far; they are not leads.

summary:
one continuous 6-second live-action 16:9 MV shot of <Subject 1>, distant small figures walking toward houses, faces not the job

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, houses, dirt, sky, light and the same distant walkers stay consistent.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level very wide of a village lane and low houses. The camera holds a static shot. In the first two seconds two or three small figures walk away down the lane, too far for readable faces. Then they keep going. By the final second they are smaller. Do not treat this as a school-line flashback. Do not crop in for faces. No extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
distant steps, village air, no school bell

non_diegetic_music:
N/A
```

### 21　02:16–02:22　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_21_h3_v01.mp4`
- 景别：桌上只剩热气
- 运镜：16:9 略俯中近景，holds a static shot。
- 场景/道具：屋内桌边
- 人物动作：矮桌或灶边，碗还热着，人可以不在。
- 转场/特效：外面切到家里的空
- 声画重点：日子的热气
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 6-second live-action 16:9 MV shot of <Subject 1>, bowls still steaming on a low table with nobody sitting

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 slightly high medium close of a worn wooden table and enamel bowls with faint steam. The camera holds a static shot. In the first two seconds steam lifts. Then it thins. By the final second no person sits down. Interior is a simple village room, dry daylight from a doorway, no neon, no city kitchen. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
quiet interior, faint steam, no dialogue

non_diegetic_music:
N/A
```

### 22　02:22–02:30　转折

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_22_h3_v01.mp4`
- 景别：熟路停住
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：泥路
- 人物动作：转折：同一条熟路持住几秒，没有人按那天的方式走回去。
- 转场/特效：预副歌2，世界状态改变
- 声画重点：还站在这里，路先空着
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 8-second live-action 16:9 MV shot of <Subject 1>, the familiar path held empty, nobody walking back the old way

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide of the same mud path, later side light. The camera holds a static shot. In the first two seconds the path is empty. Then nothing arrives. By the final second it is still empty, as if the old walking rhythm will not return. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
thin wind, no footsteps

non_diegetic_music:
N/A
```

### 23　02:30–02:38　转折

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_23_h3_v01.mp4`
- 景别：田埂上没有人等
- 运镜：16:9 平视中全景，pulls out with small amplitude at slow speed。
- 场景/道具：田埂
- 人物动作：空田埂，风过。没有人在等。熟的是活法，生的是时间。
- 转场/特效：空路到空埂
- 声画重点：连自己都有点生——用空缺说
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 8-second live-action 16:9 MV shot of <Subject 1>, the ridge stays empty, wind only, nobody waiting

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide of the field ridge. The camera pulls out with small amplitude at slow speed. In the first two seconds the ridge is empty. Then wind moves the crops. By the final second still nobody waits there. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
wind, insects thinning, no voices

non_diegetic_music:
N/A
```

### 24　02:38–02:45　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_24_h3_v01.mp4`
- 景别：泥路还发着烫
- 运镜：16:9 低机位中景，holds a static shot。
- 场景/道具：泥路
- 人物动作：第二段副歌。侧光打在泥路上，路像还热。
- 转场/特效：副歌2爆点开始
- 声画重点：Hook 再起，泥路发烫
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, late light on the packed mud as if the path still holds heat

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 low medium shot of the mud path catching late side light. The camera holds a static shot. In the first two seconds the dirt looks warm and dry. Then the light holds. By the final second the path is empty. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
dry heat-like stillness, light wind

non_diegetic_music:
N/A
```

### 25　02:45–02:52　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_25_h3_v01.mp4`
- 景别：傍晚被不同的人过
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：院与田边
- 人物动作：院子里有人收拾，田边有人站一会儿，各过各的，没有对口型。
- 转场/特效：空路切到众人
- 声画重点：回得了故乡，人各自在
- H3 提示词：

```text
subject_definitions:
<Subject 1> is two adult Chinese villagers in the same wide frame: one woman gathering a tray near a courtyard, one man standing at the field edge. Neither is a singing lead. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, dusk being lived by different people at once

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city, no cars.
[Shot 1] A 16:9 eye-level medium-wide. The camera holds a static shot. In the first two seconds both figures are already in their tasks, faces readable if close enough but not belting. Then they continue separately, lips closed. By the final second neither looks at camera. No second extra crowd. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
courtyard work, field wind, no singing

non_diegetic_music:
N/A
```

### 26　02:52–02:59　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_26_h3_v01.mp4`
- 景别：也可以完全没人
- 运镜：16:9 平视大全景，holds a static shot。
- 场景/道具：田与路
- 人物动作：切回没人的田和路。主题不靠一张脸完成。
- 转场/特效：众人切回空
- 声画重点：走不进那天
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, completely empty fields and path at the second hook

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level very wide of fields and the mud path at dusk. The camera holds a static shot. In the first two seconds there is no person. Then light drops a little. By the final second it stays empty. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
open dusk, insects, no voices

non_diegetic_music:
N/A
```

### 27　02:59–03:06　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_27_h3_v01.mp4`
- 景别：点点滴滴散了
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：田与天
- 人物动作：云还在田那边，更淡。
- 转场/特效：副歌2收在云
- 声画重点：点点滴滴就散了
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, the far cloud thinning over the fields

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide of sky over crops. The camera holds a static shot. In the first two seconds the cloud is still there. Then its edge looks thinner. By the final second the field below is empty. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
thin wind, no voices

non_diegetic_music:
N/A
```

### 28　03:06–03:13　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_28_h3_v01.mp4`
- 景别：桥段：空的村路
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：村路
- 人物动作：没人的村路，蝉在，风在。不是想哭也不是想逃。
- 转场/特效：桥段更慢
- 声画重点：明明不该难过
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, an empty village lane at dusk, no crying image

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide of a dirt village lane, dusk, one dark window. The camera holds a static shot. In the first two seconds the lane is empty. Then wind moves a tree or grass. By the final second nobody enters. No tears, no running away. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
insects, dusk wind, no voices

non_diegetic_music:
N/A
```

### 29　03:13–03:21　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_29_h3_v01.mp4`
- 景别：有人坐着，高兴不起来
- 运镜：16:9 平视中近景，holds a static shot。
- 场景/道具：院边
- 人物动作：一个成年人坐在院边或田埂头，不哭、不笑、不唱。
- 转场/特效：空路到坐着的人
- 声画重点：却也高兴不起来
- H3 提示词：

```text
subject_definitions:
<Subject 1> is an adult Chinese woman about 35, hair tied loosely, faded blue shirt, sitting on a low stool at the courtyard edge. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 8-second live-action 16:9 MV shot of <Subject 1>, someone sitting still, not crying, not smiling, not singing

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city, no cars.
[Shot 1] A 16:9 eye-level medium close-up. The camera holds a static shot. Both eyes readable. In the first two seconds she is already seated, looking past camera toward the fields, lips closed, brows level. Then she holds that look, breath small, at most one slow blink. By the final second she has not smiled and has not cried. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
quiet courtyard, insects, no dialogue

non_diegetic_music:
N/A
```

### 30　03:21–03:28　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_30_h3_v01.mp4`
- 景别：想留下那时候，留下的是风
- 运镜：16:9 低机位近景，holds a static shot。
- 场景/道具：田边草
- 人物动作：草和庄稼再被风翻一次，没有人。
- 转场/特效：从脸回到风
- 声画重点：想留下，那时候
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, grass and crops moving once more, empty, as if that time cannot be kept

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 low close of grass and crop leaves in dimmer light. The camera holds a static shot. In the first two seconds they are still. Then one gust. By the final second no person appears. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
close vegetation, wind

non_diegetic_music:
N/A
```

### 31　03:28–03:36　结尾

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_31_h3_v01.mp4`
- 景别：村里一盏灯先亮
- 运镜：16:9 平视大全景，holds a static shot。
- 场景/道具：村边
- 人物动作：远景一扇窗或一盏路灯样的屋灯亮起来。不是告别仪式。
- 转场/特效：最终副歌
- 声画重点：回得了故乡，日子不告别
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 8-second live-action 16:9 MV shot of <Subject 1>, one warm window light coming on at the village edge

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level very wide of darkening fields and low houses. The camera holds a static shot. In the first two seconds the village is almost dark. Then one small warm window light comes on. By the final second the rest of the lane can stay dark. No person needed in the foreground. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
dusk, a distant indoor clink, no voices in the field

non_diegetic_music:
N/A
```

### 32　03:36–03:44　结尾

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_32_h3_v01.mp4`
- 景别：田埂上一个看不清的背影
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：田埂
- 人物动作：可有一个背影站在田埂，不转过脸来。也可以理解为路人。
- 转场/特效：灯到人的背影
- 声画重点：我还站在田埂上
- H3 提示词：

```text
subject_definitions:
<Subject 1> is an adult figure seen only from behind on a field ridge at dusk, dark shirt, unreadable face. Dedicated back view. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 8-second live-action 16:9 MV shot of <Subject 1>, an unreadable back on the ridge, not a farewell portrait

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city, no cars.
[Shot 1] A 16:9 eye-level medium-wide. The camera holds a static shot. In the first two seconds the figure is already standing on the ridge facing the fields. Then they do not turn. By the final second still a back view, never a front face. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
field dusk, no singing

non_diegetic_music:
N/A
```

### 33　03:44–03:52　结尾

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_33_h3_v01.mp4`
- 景别：一段路仍然黑着
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：泥路
- 人物动作：没亮灯的那截泥路。
- 转场/特效：背影切回黑路
- 声画重点：走不进那天
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 8-second live-action 16:9 MV shot of <Subject 1>, a stretch of mud path still dark while one light stays far

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide of the mud path in shadow. The camera holds a static shot. In the first two seconds the path is dark and empty. Then a distant warm speck of light stays far. By the final second nobody walks it. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
quiet dark path, distant village, no footsteps

non_diegetic_music:
N/A
```

### 34　03:52–04:00　结尾

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_34_h3_v01.mp4`
- 景别：人已经不是
- 运镜：16:9 平视大全景，holds a static shot。
- 场景/道具：田与村
- 人物动作：空景即可：田、路、一点灯。不需要一张脸把这句话演完。
- 转场/特效：最终副歌收
- 声画重点：人已经，不是
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 8-second live-action 16:9 MV shot of <Subject 1>, fields, path and one light, no face required for the last line

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level very wide. The camera holds a static shot. In the first two seconds the village edge sits between day and night. Then nothing else happens except still light. By the final second the frame stays empty of a close person. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
open nightfall, no voices

non_diegetic_music:
N/A
```

### 35　04:00–04:08　结尾

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_35_h3_v01.mp4`
- 景别：空田埂
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：田埂
- 人物动作：尾奏。田埂上空着。
- 转场/特效：outro
- 声画重点：编曲收回
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 8-second live-action 16:9 MV shot of <Subject 1>, the empty ridge in the last guitar

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level medium-wide of the ridge as a dark line between crops. The camera holds a static shot. In the first two seconds it is empty. Then it stays empty. By the final second no person returns. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
very quiet field, fading insects

non_diegetic_music:
N/A
```

### 36　04:08–04:17　结尾

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_36_h3_v01.mp4`
- 景别：云停在田那边
- 运镜：16:9 平视大全景，holds a static shot。
- 场景/道具：田与天
- 人物动作：最后画面：云停着。日子还要过。那天还是进不去。
- 转场/特效：淡出或停住
- 声画重点：云还停在田那边
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese landscape in this prompt. No living person.

summary:
one continuous 9-second live-action 16:9 MV shot of <Subject 1>, the cloud stopped over the fields, empty final image

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action, a dry late-summer Chinese village, natural light, no golden nostalgia filter, no city streets, no cars.
[Shot 1] A 16:9 eye-level very wide of the fields and the far cloud. The camera holds a static shot. In the first two seconds the cloud is still. Then it remains still. By the final second the land is empty of people. This is the last frame the viewer should keep. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
almost no air, a last distant insect, no voices

non_diegetic_music:
N/A
```


## 拍摄清单

### 场景

- 田、田埂、泥路与弯道、土院晒场、沟渠、村路、简单室内桌边

### 角色与造型

- 不锁定主角。路人用当地夏末日常衣服，不民俗表演装

### 道具

- 竹筐、粮食、书包、搪瓷碗、泥路、云

### 特效与后期

- 统一干一点的色彩，不要金黄 LUT；成片音轨用 `music/hometown.mp3`

## 连贯性检查

- [x] 歌曲总时长已经用户提供母带并按实测锁定
- [x] 时间线从 00:00 连续覆盖至 04:17
- [x] 相邻分镜之间无空档、无重叠
- [x] 每个分镜时长均为 1–10 秒
- [x] 每个分镜的结束时间不超过歌曲时长
- [x] 所有分镜累计时长等于歌曲总时长
- [x] 开场、发展、转折、高潮、结尾均有对应分镜
- [x] 关键因果、主题转折和故事结局完整
- [x] 已运行 `npm run validate:songs` 并通过
- [x] Hook 与桥段有对应画面，不是逐句还原
- [x] 情节与已确认故事一致：空景与多人，不设唯一主角
- [x] 高潮画面与第二段副歌到桥段同步
- [x] 结尾落实云停在田那边
