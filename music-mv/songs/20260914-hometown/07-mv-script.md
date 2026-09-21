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
- 母题：开场先把脚底下的田和泥路立住；云放到下一镜。结尾云停在田那边。不设唯一主角，不挂男女主三视图，不对口型。
- 空景内切：只在空景里切，一条最多一刀。本片切 03 路→草、09 空田→云、12 脚印→前方空路、16 田→淡云、21 热碗→空门口、22 熟路→更远处仍空、26 空田→空路、31 擦黑→一盏窗、33 黑路→远处灯、36 空田→停云。镜 01 开场不切、不演天空。有人脸、手、脚、背影的镜头不切；已有推拉移的空景也不切。
- 运镜总谱：内切镜两边锁死。有动机才动——01 低机位沿泥路慢推进入田、10 背跟、13 慢摇山水田、14 横移弯道、15 慢推脸、18 横移空埂、23 拉空埂、24 低机位沿路推、27 仰到淡云、28 横移空泥路、29 慢推坐着的人、32 拉背影、34 升起看地方。人穿过画框（08、11）和草的近景锁死。慢歌全程 small + slow，不用环绕、滚转、手持晃。

## 制作设定

- 目标时长：04:17
- 用户确认的歌曲总时长：用户先报 04:18；以提供的母带实测为准，锁定 04:17
- 时长确认日期：20260916
- 分镜累计时长：04:17（257 秒）
- 画幅：16:9
- 视觉风格：有山有水的中国农村写实，风景优美，空景比人脸多。不是城镇。
- 色彩与光线：夏末自然光，午后到擦黑，青绿山水和田，不要金黄怀旧滤镜
- 拍摄方式：H3 直出分镜视频。空景与路人不使用角色参考图
- 主要场景：远山、溪塘或水田、泥路、土院晒场、田埂、稀疏旧农舍，不要成排新房
- 主要人物：不固定。翻晒的人、洗手的人、跑过的少年、路上的背影、田边停住的人，都可以只出现一次
- 表演与口型需求：无对口型、无演唱镜头。有人的镜头闭唇，眼神持住
- 预算或制作限制：一次只跑一条 H3；空景可用大全景；有脸的镜头用中景或中近景

## 主角图片

本片不设唯一男女主，不登记三视图。`characterLooks` 留空。空景 `subjects: []`。

## 生成约定

- `mvWorkflow.generationMethod`：`characterReferenceVideo`（工作流仍走 H3；本片多数镜不挂图）
- `genMode`：`characterVideo`
- 不为每个分镜预制关键帧
- 有人的镜头写微表情，一条连续镜头，禁止内切
- 空景写风、云、路、庄稼如何承担主题；上列空景在一条 H3 里硬切一次，镜 01 除外，其余空景仍一条连续镜头
- 每个分镜导出 `generated/video/raw/shot_XX_h3_v01.mp4`

## 分镜脚本

| 镜号 | 开始 | 结束 | 时长 | 故事阶段 | 歌曲段落/歌词 | 出镜参考 | 生成类型 | 景别与机位 | 画面与动作 | 运镜 | 场景/道具 | 转场/特效 | 声画重点 | 输出视频 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | 00:00 | 00:07 | 7 秒 | 开场 | Instrumental Intro | 无（空景或路人） | characterVideo | 16:9 略低，泥路从左下进入而非正中对称，trucks forward with small amplitude at slow speed。整镜不切。 | 贴着高低不齐的庄稼沿泥路往田里走。路肩留车辙、碎土和杂草，旧农舍退到右侧边缘，远山作墙。天空只剩一条空蓝。 | 16:9 略低，泥路从左下进入而非正中对称，trucks forward with small amplitude at slow speed。整镜不切。 | 田、泥路、远山、旧农舍 | 从黑切到田 | 前奏空弦，先立地方 | generated/video/raw/shot_01_h3_v08.mp4 |
| 02 | 00:07 | 00:14 | 7 秒 | 开场 | Instrumental Intro | 无（空景或路人） | characterVideo | 16:9 平视中全景，pushes in with small amplitude at slow speed。 | 镜头对着田那边的云。云比任何脚步都慢。仍没有人。 | 16:9 平视中全景，pushes in with small amplitude at slow speed。 | 田与天 | 同天空景 | 吉他动机，云的速度 | generated/video/raw/shot_02_h3_v02.mp4 |
| 03 | 00:14 | 00:21 | 7 秒 | 开场 | Instrumental Intro | 无（空景或路人） | composite | 16:9 略俯中全景固定；00:04 硬切到路边草近景，仍固定。 | 先看空着的泥路。四秒后切到路边草往路里长。没有人。 | 16:9 略俯中全景固定；00:04 硬切到路边草近景，仍固定。 | 田边泥路 | 切到路 | 路还在，人还没来 | generated/video/raw/shot_03_h3_v03.mp4 |
| 04 | 00:21 | 00:28 | 7 秒 | 开场 | Instrumental Intro | 无（空景或路人） | characterVideo | 16:9 低机位近景，holds a static shot。 | 路边草被风压低再弹起。没有手去摸。 | 16:9 低机位近景，holds a static shot。 | 路边草 | 切到草 | 草和风，仍是空景 | generated/video/raw/shot_04_h3_v01.mp4 |
| 05 | 00:28 | 00:37 | 9 秒 | 开场 | Intro 尾 | 无（空景或路人） | characterVideo | 16:9 平视中全景，trucks right with small amplitude at slow speed。 | 成片庄稼被风翻过去又翻回来。故乡先作为地方结束前奏。 | 16:9 平视中全景，trucks right with small amplitude at slow speed。 | 田 | 前奏落到慢拨 | 前奏收束，地方立住 | generated/video/raw/shot_05_h3_v01.mp4 |
| 06 | 00:37 | 00:44 | 7 秒 | 发展 | Verse 1 | 无（空景或路人） | characterVideo | 16:9 平视中景，holds a static shot。 | 土院里一位中年女人用竹筐翻晒粮食，不看镜头，不是全片主角。 | 16:9 平视中景，holds a static shot。 | 土院晒场 | 空景切到日子 | 主歌进入，日子开始被过 | generated/video/raw/shot_06_h3_v01.mp4 |
| 07 | 00:44 | 00:51 | 7 秒 | 发展 | Verse 1 | 无（空景或路人） | characterVideo | 16:9 略俯近景，holds a static shot。 | 另一个人在沟边蹲着洗手，只见手、腕和裤脚，不必认脸。 | 16:9 略俯近景，holds a static shot。 | 沟渠 | 换人，不跟拍 | 水声，仍是村里的事 | generated/video/raw/shot_07_h3_v01.mp4 |
| 08 | 00:51 | 00:57 | 6 秒 | 发展 | Verse 1 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot，人从画面划过。 | 一个背着旧书包的少年从晒场跑过，镜头不追脸。 | 16:9 平视中全景，holds a static shot，人从画面划过。 | 晒场 | 动切静 | 脚步，一闪而过 | generated/video/raw/shot_08_h3_v01.mp4 |
| 09 | 00:57 | 01:03 | 6 秒 | 发展 | 草还在长 | 无（空景或路人） | characterVideo | 16:9 低机位近景，holds a static shot。整镜不切。 | 少年离开后的晒场竹席边，一株草从碎土缝里长着，散落的几粒粮食还在。人不在，日子仍继续。 | 16:9 低机位近景，holds a static shot。整镜不切。 | 晒场竹席边、碎土、草 | 空晒场切到同处细节 | 人离开后，地方还在 | generated/video/raw/shot_09_h3_v01.mp4 |
| 10 | 01:03 | 01:08 | 5 秒 | 发展 | 摸到的，是今天 | 无（空景或路人） | characterVideo | 16:9 平视中景，从背后 follows with small amplitude at slow speed。 | 镜头从背后小幅度慢跟他走上泥路，不绕到正脸。 | 16:9 平视中景，从背后 follows with small amplitude at slow speed。 | 泥路 | 空田接到路 | 主歌尾，路开始被走 | generated/video/raw/shot_10_h3_v01.mp4 |
| 11 | 01:08 | 01:15 | 7 秒 | 发展 | 这条路还熟 / 我走上去 | 无（空景或路人） | characterVideo | 16:9 低机位近景，holds a static shot，人从镜头前走过。 | 特写两只鞋走在泥路上，路还熟。 | 16:9 低机位近景，holds a static shot，人从镜头前走过。 | 泥路 | 从背影落到脚 | 对词：这条路还熟 | generated/video/raw/shot_11_h3_v01.mp4 |
| 12 | 01:15 | 01:22 | 7 秒 | 发展 | 没走回去 | 无（空景或路人） | characterVideo | 16:9 略高机位中景，holds a static shot。整镜不切。 | 人走后的窄泥路向右上拐出画面，只留两处不完整的鞋底擦痕。草轻动一次，没有人折返。 | 16:9 略高机位中景，holds a static shot。整镜不切。 | 田边窄泥路 | 脚部动作切到静止空路 | 对词：没走回去，画面不再前进 | generated/video/raw/shot_12_h3_v02.mp4 |
| 13 | 01:22 | 01:29 | 7 秒 | 发展 | 回得了，故乡 | 无（空景或路人） | characterVideo | 16:9 略高机位大全景，向下约15度；前两秒固定，随后 pans right with small amplitude at slow speed。 | 从镜12的空泥路拉开到同一片故乡：连续田地和一条不足一米宽的浅沟占满画面，低矮山坡只压在上沿；镜头先停住两秒，再小幅度慢慢向右摇，没有人进入。 | 16:9 略高机位大全景，向下约15度；前两秒固定，随后 pans right with small amplitude at slow speed。 | 田边浅沟与低山坡 | 从空泥路拉开到故乡全貌，进入副歌 | Hook：回得了故乡；地方仍在，时间却不回头 | generated/video/raw/shot_13_h3_v03.mp4 |
| 14 | 01:29 | 01:36 | 7 秒 | 发展 | 风还认 / 那道弯 | 无（空景或路人） | characterVideo | 16:9 低机位中近景，向下约35度，trucks left with small amplitude at slow speed。 | 镜头从镜13的田地落到一小段熟泥路弯，内侧路肩被走得低平，外侧短草和作物封住上沿；全程空着，没有人出现，画面不见地平线。 | 16:9 低机位中近景，向下约35度，trucks left with small amplitude at slow speed。 | 田边窄泥路弯 | 同主题换景别 | 风还认那道弯 | generated/video/raw/shot_14_h3_v03.mp4 |
| 15 | 01:36 | 01:43 | 7 秒 | 发展 | 走不进 / 那天 | 无（空景或路人） | characterVideo | 16:9 平视腰上中景，holds a static shot for all seven seconds。 | 一个中年男人站在田埂边看田，不看镜头，不演唱；镜头固定不推，近处高玉米和菜地遮住远景，脸清楚但不占满画面。 | 16:9 平视腰上中景，holds a static shot for all seven seconds。 | 田埂边 | 空弯接到人 | 人在，进不去那天 | generated/video/raw/shot_15_h3_v03.mp4 |
| 16 | 01:43 | 01:50 | 7 秒 | 发展 | 点点滴滴 / 就不在 | 无（空景或路人） | characterVideo | 16:9 略高中全景固定；00:04 硬切到同一田边更紧的空地，仍固定。 | 先空田，四秒后切到同一田边更空的近处，不用天空变化表达。 | 16:9 略高中全景固定；00:04 硬切到同一田边更紧的空地，仍固定。 | 田边作物与土 | 从脸回到空 | 点点滴滴就不在 | generated/video/raw/shot_16_h3_v02.mp4 |
| 17 | 01:50 | 01:57 | 7 秒 | 发展 | 庄稼换了一季，还是那股香 | 无（空景或路人） | characterVideo | 16:9 平视近景，holds a static shot。 | 近处庄稼穗，风过。不演歌词说明书，只是田里的现在。 | 16:9 平视近景，holds a static shot。 | 田 | 第二段主歌 | 熟悉的香在风里 | generated/video/raw/shot_17_h3_v01.mp4 |
| 18 | 01:57 | 02:04 | 7 秒 | 发展 | 我站在田埂上 | 无（空景或路人） | characterVideo | 16:9 平视中全景，trucks right with small amplitude at slow speed。 | 镜头沿空田埂小幅度慢移。位置在，人还没有。 | 16:9 平视中全景，trucks right with small amplitude at slow speed。 | 田埂 | 穗切到埂 | 位置在，人不在 | generated/video/raw/shot_18_h3_v01.mp4 |
| 19 | 02:04 | 02:10 | 6 秒 | 发展 | 风也过来 | 无（空景或路人） | characterVideo | 16:9 平视中景，holds a static shot。 | 一个年轻人站上田埂看风过来，不是等铃的扮演，只是站住。 | 16:9 平视中景，holds a static shot。 | 田埂 | 空埂到人 | 风也过来 | generated/video/raw/shot_19_h3_v01.mp4 |
| 20 | 02:10 | 02:16 | 6 秒 | 发展 | 像在等，放学铃 | 无（空景或路人） | characterVideo | 16:9 平视约1.5米机位大全景，holds a static shot。 | 平视村路上两三个模糊的人持续往稀疏旧屋方向走，不是成队放学；稻谷穗、菜叶、路边草和竹叶被同一阵轻风持续带动，人物只作为远处日常，不演脸。不出现航拍感和成排新房。 | 16:9 平视约1.5米机位大全景，holds a static shot。 | 村路 | 田埂切村路 | 像在等放学铃，画面却是现在的回家 | generated/video/raw/shot_20_h3_v03.mp4 |
| 21 | 02:16 | 02:22 | 6 秒 | 发展 | Verse 2 尾 | 无（空景或路人） | characterVideo | 16:9 平视中近景，一条连续镜头，pans right with small amplitude at slow speed。 | 镜头从旧木桌上仍冒热气的搪瓷碗缓慢向右摇到空门口；桌边无人落座，门外也没有人回来。 | 16:9 平视中近景，一条连续镜头，pans right with small amplitude at slow speed。 | 屋内桌边 | 从村路进入家里的空 | 日子的热气 | generated/video/raw/shot_21_h3_v02.mp4 |
| 22 | 02:22 | 02:30 | 8 秒 | 转折 | 还站在这里 / 原来的地方 | 无（空景或路人） | characterVideo | 16:9 平视中全景，一条连续固定镜头，holds a static shot for all eight seconds。 | 镜头停在旧泥路岔口，半埋界石仍在原位；稻穗和路边杂草被风持续带动，但两条路都没有人回来。 | 16:9 平视中全景，一条连续固定镜头，holds a static shot for all eight seconds。 | 田边旧泥路岔口 | 预副歌2，世界状态改变 | 还站在这里，原来的地方仍在 | generated/video/raw/shot_22_h3_v02.mp4 |
| 23 | 02:30 | 02:38 | 8 秒 | 转折 | 连自己，都有点生 | 无（空景或路人） | characterVideo | 16:9 略向下约15度中景起幅，pulls out with small amplitude at slow speed，始终保持低位且不升空。 | 镜头从田埂上一小块被长期站压过的草痕缓慢后退，露出两侧随风稻谷和仍然空着的田埂；熟悉的位置还在，却没有人等。 | 16:9 略向下约15度中景起幅，pulls out with small amplitude at slow speed，始终保持低位且不升空。 | 田埂 | 旧岔口到旧站位 | 连自己都有点生——熟悉痕迹里的空缺 | generated/video/raw/shot_23_h3_v03.mp4 |
| 24 | 02:38 | 02:45 | 7 秒 | 高潮 | 回得了，故乡 / 泥路还发着烫 | 无（空景或路人） | characterVideo | 16:9 贴地中景，向下约10度，pushes in with small amplitude at slow speed，机位不抬高。 | 低机位沿晒热的旧泥路持续小幅慢推，干土脊、浅车辙和碎石被侧光逐段擦亮；路肩短草与稻穗随风，路始终空着。 | 16:9 贴地中景，向下约10度，pushes in with small amplitude at slow speed，机位不抬高。 | 泥路 | 副歌2爆点开始 | Hook 再起，泥路发烫 | generated/video/raw/shot_24_h3_v02.mp4 |
| 25 | 02:45 | 02:52 | 7 秒 | 高潮 | 回得了，故乡 | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 院边左前景的中年妇女收起搪瓷盆并向门口走两步，右后景戴草帽的男人在田边停一下后继续整理锄头；两人各过各的，不看镜头、不对口型。 | 16:9 平视中全景，holds a static shot。 | 院与田边 | 空路切到众人 | 回得了故乡，人各自在 | generated/video/raw/shot_25_h3_v03.mp4 |
| 26 | 02:52 | 02:59 | 7 秒 | 高潮 | 走不进 / 那天 | 无（空景或路人） | characterVideo | 16:9 平视中全景，一条连续固定镜头，holds a static shot for all seven seconds。 | 镜25同一院边已经无人：木凳上只留搪瓷盆刚放过的湿圆痕，锄头靠在旧墙边；菜叶、玉米叶和晾布仍随风，门口没有人再出来。 | 16:9 平视中全景，一条连续固定镜头，holds a static shot for all seven seconds。 | 院与田边 | 众人切回空 | 走不进那天 | generated/video/raw/shot_26_h3_v03.mp4 |
| 27 | 02:59 | 03:06 | 7 秒 | 高潮 | 点点滴滴 / 就散了 | 无（空景或路人） | characterVideo | 16:9 略高机位近景，向下约25度，一条连续固定镜头，holds a static shot for all seven seconds。 | 承接镜26，同一院落木凳旁的旧竹筛里只余一小撮干稻壳；一阵轻风从左向右经过，稻壳分几次越过筛沿，最后只留近乎空的筛面，没有人回来。 | 16:9 略高机位近景，向下约25度，一条连续固定镜头，holds a static shot for all seven seconds。 | 院边木凳旁 | 同院落由中全景切近景，副歌2收在被风带走的零碎稻壳 | 点点滴滴就散了 | generated/video/raw/shot_27_h3_v03.mp4 |
| 28 | 03:06 | 03:13 | 7 秒 | 高潮 | 明明不该难过 | 无（空景或路人） | characterVideo | 16:9 平视中近景，trucks right with small amplitude at slow speed，一条连续镜头。 | 镜头贴着旧土墙缓慢向右平移，掠过一扇敞开的旧木门；薄门帘和墙脚草轻动，门内只有空院，没有人进出。 | 16:9 平视中近景，trucks right with small amplitude at slow speed，一条连续镜头。 | 院外旧土墙与门口 | 竹筛清空后切至空门，桥段节奏放慢，并引向下一镜院边人物 | 明明不该难过 | generated/video/raw/shot_28_h3_v03.mp4 |
| 29 | 03:13 | 03:21 | 8 秒 | 高潮 | 却也高兴不起来 | 无（空景或路人） | characterVideo | 16:9 平视中近景，pushes in with small amplitude at slow speed。 | 一位约45岁的村妇坐在旧木门内，目光始终停在院里同一点；她闭唇、不哭不笑，末段只在缓慢呼气时让肩膀落下一点。 | 16:9 平视中近景，pushes in with small amplitude at slow speed。 | 旧木门内侧 | 镜28空门切到同一类门内的人，空间由空转有人 | 却也高兴不起来 | generated/video/raw/shot_29_h3_v03.mp4 |
| 30 | 03:21 | 03:28 | 7 秒 | 高潮 | 想留下，那时候 | 无（空景或路人） | characterVideo | 16:9 低机位近景，向下约15度，一条连续固定镜头，holds a static shot for all seven seconds。 | 贴近田边浅沟，前景细草先被一阵风压向右侧，半秒后后景稻叶跟着倾斜；风减弱时两层植物以不同速度回弹，整镜没有人。 | 16:9 低机位近景，向下约15度，一条连续固定镜头，holds a static shot for all seven seconds。 | 田边浅沟 | 从脸回到风 | 想留下，那时候 | generated/video/raw/shot_30_h3_v02.mp4 |
| 31 | 03:28 | 03:36 | 8 秒 | 结尾 | 回得了，故乡 | 无（空景或路人） | characterVideo | 16:9 平视中景，一条连续固定镜头，holds a static shot for all eight seconds。 | 一扇旧木窗在暮色土墙上保持全暗，约四秒时屋内暖灯一次性亮起并稳定下来；窗外一枝竹叶仍在风里轻动，没有人出现。 | 16:9 平视中景，一条连续固定镜头，holds a static shot for all eight seconds。 | 旧屋外墙与木窗 | 镜30的暗绿风动切到静止旧墙，灯亮在最终副歌进入时发生，不切镜 | 回得了故乡，日子不告别 | generated/video/raw/shot_31_h3_v02.mp4 |
| 32 | 03:36 | 03:44 | 8 秒 | 结尾 | 我还站在田埂上 | 无（空景或路人） | characterVideo | 16:9 平视中景，pulls out with small amplitude at slow speed，机位始终低于人物肩线。 | 一个只见背面的成年人站在旧田埂上，双手自然垂下，不回头；镜头从腰上至膝上的中景小幅度慢拉，人物仍清楚，低矮稻田和风动草沟逐渐露出。 | 16:9 平视中景，pulls out with small amplitude at slow speed，机位始终低于人物肩线。 | 旧田埂与低矮稻田之间 | 灯到人的背影 | 我还站在田埂上 | generated/video/raw/shot_32_h3_v01.mp4 |
| 33 | 03:44 | 03:52 | 8 秒 | 结尾 | 走不进 / 那天 | 无（空景或路人） | composite | 16:9 平视中全景固定；00:04.500 硬切到远处灯，仍固定。 | 先没灯的泥路。四点五秒后切到远处那一点暖光，走不近。 | 16:9 平视中全景固定；00:04.500 硬切到远处灯，仍固定。 | 泥路 | 背影切回黑路 | 走不进那天 | generated/video/raw/shot_33_h3_v02.mp4 |
| 34 | 03:52 | 04:00 | 8 秒 | 结尾 | 人已经，不是 | 无（空景或路人） | composite | 16:9 平视大全景，pedestals up with small amplitude at slow speed。 | 镜头小幅度升起，看见更多空田、路和那一点灯。不需要脸。 | 16:9 平视大全景，pedestals up with small amplitude at slow speed。 | 田与村 | 最终副歌收 | 人已经，不是 | generated/video/raw/shot_34_h3_v03.mp4 |
| 35 | 04:00 | 04:08 | 8 秒 | 结尾 | Outro | 无（空景或路人） | characterVideo | 16:9 平视中全景，holds a static shot。 | 尾奏。田埂上空着。 | 16:9 平视中全景，holds a static shot。 | 田埂 | outro | 编曲收回 | generated/video/raw/shot_35_h3_v01.mp4 |
| 36 | 04:08 | 04:17 | 9 秒 | 结尾 | 云还停在 / 田那边 | 无（空景或路人） | characterVideo | 16:9 平视大全景固定；00:05 硬切到田那边停着的云，仍固定。 | 先空田。五秒后切到停住的云，停在最后一帧。 | 16:9 平视大全景固定；00:05 硬切到田那边停着的云，仍固定。 | 田与天 | 淡出或停住 | 云还停在田那边 | generated/video/raw/shot_36_h3_v01.mp4 |

## 逐镜 H3 提示词

### 01　00:00–00:07　开场

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_01_h3_v08.mp4`
- 景别：偏离中轴的泥路贴着庄稼进入画面，远山作墙
- 运镜：16:9 略低，泥路从左下进入而非正中对称，trucks forward with small amplitude at slow speed。整镜不切。
- 场景/道具：田、泥路、远山、右侧边缘一栋旧农舍、车辙与路肩杂草
- 人物动作：贴着高低不齐的庄稼沿泥路往田里走。路肩保留车辙、碎土和杂草，旧农舍退到右侧边缘，远山作墙。天空只剩一条空蓝。没有人，没有城镇。
- 转场/特效：从黑切到田
- 声画重点：前奏空弦，先立地方
- H3 提示词：

```text
subject_definitions:
<Subject 1> is lived-in late-summer Chinese farmland in this prompt: an uneven packed dirt path with shallow farm-cart ruts, irregular crop rows, verge grass, green mountains as a far wall, and one weathered earthen farmhouse at the far-right edge. No living person. Not a town.

summary:
one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1>. A slightly low, deliberately off-center composition follows the worn dirt path forward through the crops in soft restrained afternoon light. No cut. No living person.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same off-center path, irregular crop rows, mountain silhouette, farmhouse geometry and gentle light stay consistent. Only the camera travels forward. No living person.

detailed_description:
The target video is photoreal live-action in real time, observed rather than picturesque: late-summer Chinese farmland under soft, low-contrast afternoon daylight. Colors are restrained green, weathered earth and muted blue, with natural dynamic range and no golden nostalgia treatment.
[Shot 1] A 16:9 slightly low medium-wide shot. Mature crop heads fill much of the lower frame, but their heights and spacing are naturally uneven. A narrow packed-earth farm path enters from the lower-left third and leads toward the middle distance instead of dividing the image symmetrically. Two shallow wheel ruts, broken clods of dry earth, sparse verge grass and one small worn patch make the path feel used. Green mountains form a stable wall beyond the fields. Only a thin strip of empty pale-blue sky remains above the ridges. One modest weathered earthen farmhouse is partially visible at the far-right edge, never centered and never presented as a neat housing row. No living person. The camera trucks forward with small amplitude at slow speed along the path. There is no cut.
In the first two seconds the near leaves, ruts and clods already show fine matte surface detail and the slow forward move has begun. The motion feels like a careful human walking pace without bobbing or shaking.
Then only the viewpoint advances. Foreground leaves pass with gentle parallax while the path keeps its off-center course. Crop rows remain irregular rather than becoming a perfect corridor. Mountain ridges retain exactly the same silhouette. The farmhouse keeps straight roof edges, fixed wall proportions and weathered plaster texture. The illumination remains soft and even; soil shadows keep the same direction and length. The narrow sky stays quiet and pale blue.
By the final second the viewer is only a few steps farther into the same field. Crops move no more than a slight natural tremble. Fine leaf veins, dry soil grains, wheel ruts, grass and matte earthen walls remain readable without waxy gloss or over-smoothed surfaces. Stable architecture, stable landforms, coherent crop geometry, restrained realistic color, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
quiet field wind in the crops, distant insects, no voices

non_diegetic_music:
N/A
```

### 02　00:07–00:14　开场

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_02_h3_v02.mp4`
- 景别：只保留田、山脊与低云，不让屋舍进入画面
- 运镜：16:9 平视中全景，pushes in with small amplitude at slow speed。
- 场景/道具：田、山脊、低云
- 人物动作：镜头对着田那边的云。云比任何脚步都慢。仍没有人。
- 转场/特效：同天空景
- 声画重点：吉他动机，云的速度
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the same lived-in late-summer Chinese countryside established by shot 01, framed only as uneven crop fields, layered green mountain ridges and a narrow strip of pale-blue sky. The camera faces away from all houses and village structures. No living person.

summary:
one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1>, a low cloud resting over the far ridge while the camera makes a very small slow push in. Same afternoon, real time, no cut. Crops and mountain only.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same mountain silhouette, cloud shape, crop edge and gentle light stay consistent. Only the camera moves slightly forward. No living person.

detailed_description:
The target video is photoreal live-action in real time, a restrained continuation of shot 01: muted green fields, weathered earth, layered blue-green mountains and soft low-contrast afternoon light. The image observes one place patiently, with no nostalgic glow and no change of hour.
[Shot 1] A 16:9 eye-level medium-wide from the field edge, tightly framed on crops and mountains. The lower frame holds uneven crop tops and only a thin strip of the worn path; the mountain wall occupies the middle distance and a single compact white cloud rests low against one ridge, slightly left of center. The frame contains no house, roof, utility pole, village lane or built structure; the camera faces across open fields. The camera pushes in with very small amplitude at slow speed, almost imperceptibly, with no bobbing. In the first two seconds the cloud is already fully formed and the landscape is settled. Then the cloud keeps its shape and position while only the viewpoint advances a little; any movement is a barely perceptible natural softness along the cloud edge, never a weather change. By the final second the same field and ridge remain empty and quiet. Keep mountain contours, crop spacing and shadow direction stable. Fine leaf texture, matte soil and subdued color remain readable. No living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
soft wind, no voices

non_diegetic_music:
N/A
```

### 03　00:14–00:21　开场

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：两段 H3 空景组接 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_03_h3_v03.mp4`
- 景别：空着的泥路
- 运镜：16:9 略俯中全景固定；00:04 硬切到路边草近景，仍固定。
- 场景/道具：田边泥路
- 人物动作：先看空着的泥路。四秒后切到路边草往路里长。没有人。
- 转场/特效：切到路
- 声画重点：路还在，人还没来
- 组接说明：前 4 秒取 `generated/video/raw/shot_03_path_h3_v02.mp4` 的空路；后 3 秒取 `generated/video/raw/shot_03_h3_v01.mp4`，裁取画面 `(x=450, y=175, w=700, h=387)` 的草与泥土，再用 Lanczos 缩放到 1216×672。00:04.000 硬切，导出 24 fps / 7.000 秒。全片合成时替换为原曲母带。
- 两段素材的生成意图（不直接送入 H3）：

```text
subject_definitions:
<Subject 1> is the same field-edge ground established by shots 01 and 02: a worn packed-earth farm path beside uneven crop rows and verge grass. No buildings or living person enter the frame.

summary:
one 7-second photoreal live-action 16:9 MV clip of <Subject 1>: an empty worn mud path, then one cut to the grass at its edge. Same afternoon, same light, no living person.

retention_analysis:
<Subject 1> (appears in [Shot 1] and [Shot 2]): fully_preserved - the same path material, crop edge, grass, shadow direction and subdued afternoon light stay consistent across the cut. No living person.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer field edge in muted greens and weathered earth, continuing the light of shots 01 and 02. No nostalgic glow, no change of hour.
[Shot 1] A 16:9 slightly high medium-wide of the empty packed-earth path running diagonally beside the crop rows. The camera holds a static shot. Fine cracks, shallow old wheel marks and sparse verge grass remain readable; the upper frame is mostly crops, not sky. The path stays empty for four seconds.
[Shot 2] At 00:04.000, the camera cuts to a low close of the same path edge, changing only spatial scale from the open path to the grass immediately beside it. The camera holds a static shot. Uneven blades lean once into the packed mud and settle. Same light direction, same dry earth color, no hand and no person.
Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
dry wind along the path, then grass rustle, no footsteps

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
<Subject 1> is a dense patch of mixed wild grass growing from the dry packed-earth verge of the same farm path. Individual blades and seed heads fill the frame. No living person.

summary:
one continuous 7-second photoreal live-action 16:9 low close shot of <Subject 1>, one light gust bending the grass and letting it settle. One fixed camera position.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same grass clumps, seed heads, soil cracks and shadow direction stay coherent while the blades flex and return. No living person.

detailed_description:
The target video is photoreal live-action in real time. Soft low-contrast afternoon light, restrained green and matte brown, fine natural texture. This is a ground-level detail, not an establishing landscape.
[Shot 1] A 16:9 low close view no more than half a meter across. Mixed wild grass fills almost the entire frame from left to right, with several dry seed heads rising above uneven green blades. Only a narrow strip of cracked packed earth is visible along the bottom edge. The camera holds a static shot. In the first two seconds the blades hold still; a single gentle gust bends a few clumps together, then they return and settle by the final second. The roots remain fixed in the same soil and the seed heads stay attached. Light direction and soil texture remain steady. The tight ground-level frame contains only grass and earth. No hand, foot, living person, text or logo.

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
<Subject 1> is the same late-summer Chinese farmland established in the opening: irregular rows of broad-leaf green vegetables in front, a band of mature corn farther back, packed earth between rows and layered green mountains beyond. No living person.

summary:
one continuous 9-second photoreal live-action 16:9 MV shot of <Subject 1>. The camera trucks right slowly across the broad field as one gentle wave of wind crosses the crop tops. Same restrained afternoon, no cut.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same vegetable rows, corn band, packed earth, mountain silhouette and soft light stay coherent. Only the camera travels right and the crop leaves flex once. No living person.

detailed_description:
The target video is photoreal live-action in real time, continuing the muted greens, weathered earth and soft low-contrast afternoon light of shots 01 through 04. This closing image of the instrumental intro widens from the preceding grass close-up back to the working field.
[Shot 1] A 16:9 eye-level medium-wide across irregular field rows. Broad-leaf vegetables occupy the foreground and lower middle frame; a band of mature corn crosses the farther field, with layered green mountains forming a steady background wall. Packed earth remains visible between several rows. The frame is deliberately asymmetric, with one empty earthen ridge entering from the lower right. The camera trucks right with small amplitude at slow speed for the full shot, creating gentle parallax between near leaves, corn and mountains. In the first two seconds the crops are almost still. Then one soft gust travels across a limited patch of leaves from left to right; leaves flex together once and settle rather than fluttering constantly. By the final second the lateral move reveals a little more empty field edge, preparing the next cut to daily work in the courtyard. Mountain contours, row spacing, soil texture, shadow direction and afternoon color remain stable. Natural matte leaf surfaces, no waxy shine, no living person, no on-screen text, no logos, no readable Chinese characters.

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
<Subject 1> is a real adult Chinese village woman around 50, with naturally weathered skin, dark hair tied in a low bun, a faded small-print cotton blouse and dark trousers. She works with grain on a large round bamboo drying tray using a short flat wooden scraper. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1> quietly spreading grain on a bamboo tray in an earthen courtyard. An observed daily task, not a heroine portrait or performance.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - her face, low bun, faded blouse, body proportions, wooden scraper and bamboo tray stay consistent. No second living person.

detailed_description:
The target video is photoreal live-action in real time, a restrained Chinese rural courtyard in the same soft late-summer afternoon as the opening fields. Natural skin texture, muted cotton fabric, earthen wall and dry grain; no nostalgic gold treatment.
[Shot 1] A 16:9 eye-level medium shot frames <Subject 1> from the waist up beside a large round bamboo drying tray that occupies the lower third. An old matte earthen wall and one dark wooden doorway form a simple stable background. The camera holds a static shot. Her body is angled mildly three-quarter toward camera, but her gaze stays lowered to the grain and never meets the lens. Her right hand holds one short flat wooden scraper and slowly pushes a shallow layer of grain once across the tray. Her left forearm steadies the far rim, with most fingers naturally hidden behind the bamboo edge. She does not lift or shake the entire tray. Brows remain level with one faint working crease, eyelids stay open, irises and pupils remain readable, lips stay gently pressed, and a small breath lowers her shoulders near the end. At most one slow natural blink. She does not speak, sing, smile or perform for camera. Keep the same face, age, bun, blouse, scraper, tray and hand count in every frame. Real weathered skin, coherent hands, stable bamboo weave and grain texture, no facial warping, no beauty-filter face, no extra fingers or limbs, no on-screen text, no logos.

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
<Subject 1> is an adult Chinese villager represented only by two naturally weathered hands, forearms with dark cotton sleeves rolled below the elbows, bent knees and dark trouser cuffs while crouching at a shallow concrete field ditch. The head and face remain outside the frame. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 7-second photoreal live-action 16:9 close shot of <Subject 1>, both hands dipping into shallow ditch water and lifting once to drip. Fixed camera, no face.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same two hands, forearms, rolled sleeves, trouser cuffs and crouched posture stay coherent. Exactly two hands and ten fingers throughout. No second living person.

detailed_description:
The target video is photoreal live-action in real time, a close observational detail of daily work in the same soft late-summer afternoon. Muted cement grey, brownish shallow water, naturally weathered skin and dark cotton fabric.
[Shot 1] A 16:9 slightly high close shot looking down at the edge of a narrow concrete irrigation ditch. <Subject 1> crouches just outside the upper frame; only both forearms, rolled dark sleeves, bent knees, trouser cuffs and two hands are visible. The camera holds a static shot. Both hands are already above the same small area of shallow water, palms angled down and fingers naturally held together without crossing. During the first two seconds they lower side by side into the water. They pause beneath the surface, then lift together once and hold over the ditch as small drops fall from the fingertips. The hands never rub, interlace, swap sides or leave the close frame. Brownish water makes one gentle ring of ripples against the cement edge; stones and silt remain fixed below. Exactly two anatomically coherent hands, five fingers on each, stable wrists and sleeve cuffs. The face and head remain completely outside the frame. No extra hand, no fused fingers, no foot entering the water, no text or logo.

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
<Subject 1> is a Chinese teenage boy with short black hair, a faded plain cotton shirt, dark straight trousers and a worn canvas school backpack with two shoulder straps. He is a passing village figure, not a lead. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> running once across a packed-dirt threshing ground from left to right. The camera stays fixed and does not follow or feature his face.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same boy, short hair, faded shirt, dark trousers, body proportions, canvas backpack and two straps stay coherent while he crosses the frame. No second living person.

detailed_description:
The target video is photoreal live-action in real time, a restrained observation of daily life in the same soft late-summer afternoon as the courtyard and irrigation ditch. Muted earth, faded cotton and weathered bamboo remain natural and low contrast, without a nostalgic gold treatment.
[Shot 1] A 16:9 eye-level medium-wide frames one level packed-dirt threshing ground beside the edge of an old earthen courtyard. One or two flat bamboo drying mats lie near the lower-right edge, leaving a clear horizontal path across the middle of the frame. A matte earthen wall and a partial dark wooden gate form a simple stable background. The frame contains no modern building, vehicle, utility pole or extra person. The camera holds a static shot for the entire clip and never pans, tracks or reframes.
For roughly the first two seconds the threshing ground stays empty and still. Then <Subject 1>, wearing the same faded plain shirt, dark trousers and worn canvas backpack, enters fully from the left and runs at a natural unhurried schoolchild pace across the middle ground toward the right. His whole body remains readable, but his head stays small in the medium-wide composition and his face is never held, presented to camera or turned into a portrait. Both backpack straps stay on his shoulders; the bag moves only with his steps. His arms swing naturally without crossing or merging with his torso. He does not look at the camera, speak, sing or mouth lyrics.
He clears the right edge before the final second. One faint low puff of dry dust rises only around his last two footfalls and settles close to the ground; it never becomes a large cinematic cloud. By the final second the same empty threshing ground, bamboo mats, earthen wall and gate remain in the fixed frame. Keep exactly one boy, two arms, two legs, stable shoes, coherent clothing and one backpack throughout. Stable architecture and bamboo weave, no warped limbs, no duplicated body, no on-screen text, no logos, no readable characters.

overall_soundscape:
quick light footsteps on packed dirt, a soft backpack-strap rustle, no voices

non_diegetic_music:
N/A
```

### 09　00:57–01:03　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_09_h3_v01.mp4`
- 景别：晒场竹席边的草
- 运镜：16:9 低机位近景，holds a static shot。整镜不切。
- 场景/道具：竹席边、碎土、几粒粮食、一株草
- 人物动作：少年离开后的晒场，一株草从碎土缝里长着；风动一次，人不在。
- 转场/特效：空晒场切到同处细节
- 声画重点：人离开后，地方还在
- H3 提示词：

```text
subject_definitions:
<Subject 1> is a small tuft of wild grass rooted in the broken packed-earth edge of the same rural threshing ground, beside the frayed corner of one flat bamboo drying mat and a few scattered dry grains. No living person.

summary:
one continuous 6-second photoreal live-action 16:9 MV close shot of <Subject 1> at the threshing-ground edge after the boy has passed. Static camera, no cut, no living person.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same rooted grass, frayed bamboo corner, dry grains, broken earth and soft afternoon light stay coherent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a restrained detail of the same packed-dirt courtyard threshing ground seen in shot 08, under the same soft late-summer afternoon light. Muted matte earth, aged bamboo and ordinary wild grass, without a nostalgic gold treatment.
[Shot 1] A 16:9 low close composition covers roughly one meter of ground. The worn corner of one flat bamboo drying mat enters from the right edge, its frayed strips resting directly on broken packed earth. Several individual dry grains lie near the mat, and one small rooted tuft of wild grass rises through a crack on the left third. The grass, ground and mat are all sharply readable; the frame contains no horizon, sky, house, doorway or person. The camera holds a static shot for all six seconds, without a cut, zoom, reframe or focus pull. In the first two seconds the ground is still. One light passing gust bends only the grass blades a little, then they settle naturally by the final second. The grass roots, bamboo strips, grains and soil cracks never change position. No feet or hands enter, no new grains fall, no dramatic dust cloud. Stable natural texture, no waxy surfaces, no on-screen text, no logos, no readable characters.

overall_soundscape:
soft grass rustle and distant insects, no voices or footsteps

non_diegetic_music:
N/A
```

### 10　01:03–01:08　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_10_h3_v03.mp4`
- 景别：有人走上熟路
- 运镜：16:9 平视中景，从背后 follows with small amplitude at slow speed。
- 场景/道具：泥路
- 人物动作：镜头从背后小幅度慢跟他走上泥路，不绕到正脸。
- 转场/特效：空田接到路
- 声画重点：主歌尾，路开始被走
- H3 提示词：

```text
subject_definitions:
<Subject 1> is an adult Chinese man, short black hair, faded light shirt, dark trousers, seen from behind on a mud path. Dedicated back view; do not turn him to camera. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1>, framed from the back of his shoulders to his ankles as he walks along a familiar narrow mud path. Downward-facing camera, no horizon.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same person, clothes and body stay consistent. No second living person unless already named.

detailed_description:
The target video is photoreal live-action in real time, an observed rural Chinese workday with restrained natural color. Prioritize the exact foreground action and ground texture in this shot. Keep the frame away from village buildings, white houses, utility poles, roads and distant scenic establishing views. No golden nostalgia treatment, no time-lapse, no hyperlapse, no modern architecture, no cars.
[Shot 1] A 16:9 slightly high medium shot from directly behind, with the lens angled down toward the ground. The top edge cuts across the back of his shoulders below the neck; the bottom edge keeps both ankles and shoes visible. His head and the horizon remain outside the frame for all five seconds. The narrow packed-earth path fills the center beneath him while vegetable leaves and dry verge grass fill every background edge. Only earth, leaves, grass, his faded shirt and dark trousers are visible; no sky, distant mountain, water, house, roof, wall, pole or road can enter the frame. The camera follows him from behind with small amplitude at slow walking speed. He takes three natural steps without turning. Both arms hang and swing slightly at his sides without crossing his body. The shirt hem, hands, elbows, trouser legs, ankles and shoes remain coherent. No singing, no speech, no extra limbs, no on-screen text, no logos.

overall_soundscape:
slow footsteps on dry mud, no voices

non_diegetic_music:
N/A
```

### 11　01:08–01:15　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_11_h3_v03.mp4`
- 景别：脚在熟路上
- 运镜：16:9 低机位近景，holds a static shot，人从镜头前走过。
- 场景/道具：泥路
- 人物动作：特写两只鞋走在泥路上，路还熟。
- 转场/特效：从背影落到脚
- 声画重点：对词：这条路还熟
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the same adult walker implied by shot 10, shown only from below the knees: two dark straight trouser legs, two ankles and one pair of worn black canvas shoes with dull off-white soles. Appearance comes from this text only; there is no reference picture. The visible scene consists only of this lower body, dry earth and short rooted grass.

summary:
one continuous 7-second photoreal live-action 16:9 low close shot of <Subject 1>, already walking away along a familiar dry mud path from the first frame. Static downward-facing camera, no horizon.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same two trouser legs, two ankles and one pair of worn canvas shoes stay coherent throughout.

detailed_description:
The target video is photoreal live-action in real time, a restrained ground-level detail in the same rural workday as shot 10. Matte dry earth, shallow shoe marks, sparse verge grass and faded cloth remain natural and low contrast.
[Shot 1] A 16:9 low close shot from the side of a narrow packed-earth path, with the lens angled downward over an area no larger than two meters. The frame contains only matte dry soil, irregular fine cracks, a narrow fringe of short rooted grass, two dark trouser legs and one pair of worn black canvas shoes. There is no horizon. The camera holds a static shot without a cut, zoom, focus pull or reframe. <Subject 1> is already visible from below the knees in the first frame and walks steadily away toward the upper edge for the full shot. The left and right shoe alternate weight through four natural steps; each sole lifts, moves forward and lands once before the other foot follows. The two legs maintain normal spacing and the shoes keep the same shape and color. The soil remains naturally irregular and receives only faint partial pressure marks, never repeated identical stamped prints. By the final second both shoes are still visible near the upper third, continuing forward. The composition stays limited to ground, rooted grass, trousers and shoes. No extra limb, no on-screen text, no logo.

overall_soundscape:
footsteps on dry mud, no voices

non_diegetic_music:
N/A
```

### 12　01:15–01:22　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_12_h3_v02.mp4`
- 景别：走过，没走回去
- 运镜：16:9 略高机位中景，holds a static shot。整镜不切。
- 场景/道具：泥路
- 人物动作：人走后的窄泥路向右上拐出画面，只留两处不完整的鞋底擦痕。草轻动一次，没有人折返。
- 转场/特效：脚部动作切到静止空路
- 声画重点：对词：没走回去，画面不再前进
- H3 提示词：

```text
subject_definitions:
<Subject 1> is a short empty section of narrow packed-earth farm path curving out of frame, bordered by low rooted grass and matte dry soil. Two faint incomplete shoe scuffs remain near the lower third. No living person.

summary:
one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1>, the empty path after someone has walked away. Static camera, no cut, no living person.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same path curve, two incomplete scuffs, soil cracks and rooted grass stay coherent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a restrained continuation of the dry path in shots 10 and 11. Matte brown earth, irregular fine cracks and muted green verge grass remain natural and low contrast.
[Shot 1] A 16:9 slightly high medium shot angles down over four or five meters of a narrow packed-earth path. The path enters from the lower-left third, curves gently toward the upper-right and leaves the frame before any horizon appears. Low ordinary grass and a few vegetable leaves border the path without forming a scenic panorama. Two faint incomplete pressure scuffs sit near the lower third; they are irregular partial smudges rather than clear repeated shoe prints. The frame contains only dry ground, rooted grass and a few leaves. The camera holds a static shot for all seven seconds, without a cut, push, drift, zoom or focus pull. In the first two seconds everything is still. One light gust bends a small patch of verge grass once, then it settles. The soil cracks, path curve and two scuffs stay fixed. No living person enters or returns. No on-screen text, logo or readable characters.

overall_soundscape:
settling dust, light wind, no footsteps

non_diegetic_music:
N/A
```

### 13　01:22–01:29　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_13_h3_v02.mp4`
- 景别：地方还在
- 运镜：16:9 平视大全景，pans right with small amplitude at slow speed。
- 场景/道具：山水田
- 人物动作：镜头沿远山、水面和田小幅度慢摇过去。最多远处一栋旧土房。
- 转场/特效：副歌进入
- 声画重点：Hook：回得了故乡
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese countryside in this prompt: mountains, water, fields, mud paths, at most one old farmhouse far away. No living person. Not a town.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, mountains, water and fields still there

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
[Shot 1] A 16:9 eye-level very wide of fields, a stream or pond, and distant green mountains. At most one old earthen farmhouse far apart. No housing row, no town. The camera pans right with small amplitude at slow speed. In the first two seconds the place is simply present. Then the pan reads more mountain and water as light lowers a little. By the final second it can remain empty of people. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
open countryside air, distant insects, no close voices

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
<Subject 1> is the rural Chinese countryside in this prompt: mountains, water, fields, mud paths, at most one old farmhouse far away. No living person. Not a town.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, the familiar bend in the mud path, empty

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
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
- 运镜：16:9 平视中近景，pushes in with small amplitude at slow speed。
- 场景/道具：田埂边
- 人物动作：他站着看田。镜头小幅度慢推向他的脸，不是演唱。
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
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
[Shot 1] A 16:9 eye-level medium close-up. The camera pushes in with small amplitude at slow speed toward his face. Head large enough for both eyes. In the first two seconds he is already looking at the crops, lips closed, brows level. Then he holds that gaze with at most one slow blink. By the final second his shoulders have not moved into a song performance. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

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
- 运镜：16:9 平视中全景固定；00:04 硬切到天边更淡的云，仍固定。
- 场景/道具：田
- 人物动作：先空田。四秒后切到更淡的云。点点滴滴不在。
- 转场/特效：从脸回到空
- 声画重点：点点滴滴就不在
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese countryside in this prompt: mountains, water, fields, mud paths, at most one old farmhouse far away. No living person. Not a town.

summary:
one 7-second live-action 16:9 MV clip of <Subject 1>: an empty field after the first chorus, then a cut to the thinner cloud. No living person.

retention_analysis:
<Subject 1> (appears in [Shot 1] and [Shot 2]): fully_preserved - the same ground, crops, dirt, sky, rural materials and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
[Shot 1] A 16:9 eye-level medium-wide of fields. The camera holds a static shot. The land is empty of people.
[Shot 2] At 00:04.000, the camera cuts to a 16:9 eye-level medium-wide of sky over the crops. The camera holds a static shot. The far cloud looks thinner. The field below stays empty.
Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

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
<Subject 1> is the rural Chinese countryside in this prompt: mountains, water, fields, mud paths, at most one old farmhouse far away. No living person. Not a town.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, crop heads in the present season, empty of people

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
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
- 运镜：16:9 平视中全景，trucks right with small amplitude at slow speed。
- 场景/道具：田埂
- 人物动作：镜头沿空田埂小幅度慢移。位置在，人还没有。
- 转场/特效：穗切到埂
- 声画重点：位置在，人不在
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese countryside in this prompt: mountains, water, fields, mud paths, at most one old farmhouse far away. No living person. Not a town.

summary:
one continuous 7-second live-action 16:9 MV shot of <Subject 1>, an empty field ridge as if someone might stand there later

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
[Shot 1] A 16:9 eye-level medium-wide along a narrow packed-earth ridge between crops. The camera trucks right with small amplitude at slow speed along the empty ridge. In the first two seconds the ridge is empty. Then wind moves the crop walls as the viewpoint slides. By the final second nobody is waiting on it. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

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
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
[Shot 1] A 16:9 eye-level medium shot. The camera holds a static shot. In the first two seconds he is already on the ridge, looking at the crops, lips closed. Then wind moves his shirt once. By the final second he has not turned into profile. Keep any visible face large enough that eyelids, irises and pupils stay readable. A mild three-quarter turn toward camera unless this is a back view. Gaze holds on one target, at most one slow natural blink, lips closed, no singing, no speech. Stable faces and hands, smooth skin texture, coherent clothing. No flickering eyes, no facial warping, no beauty-filter slim face, no extra limbs, no on-screen text, no logos.

overall_soundscape:
wind, fabric, no bell, no voices

non_diegetic_music:
N/A
```

### 20　02:10–02:16　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_20_h3_v03.mp4`
- 景别：远处有人往回走
- 运镜：16:9 平视大全景，holds a static shot。
- 场景/道具：村路
- 人物动作：村路上两三个模糊的人以连续交替步伐往屋子方向走，不是成队放学；稻谷穗、菜叶、路边草和竹叶被同一阵轻风持续带动。大全景不演脸。
- 转场/特效：田埂切村路
- 声画重点：像在等放学铃，画面却是现在的回家
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one ordinary rural Chinese village lane at present time, with two or three distant small figures walking toward a few separate old farmhouses. Faces stay unreadable because they are far; they are not leads. The field plants and verge vegetation are part of the same living place.

summary:
one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1>, present-day villagers walking home while the rice heads, vegetable leaves, roadside grass and bamboo leaves move in one light wind. Not a school-line flashback.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same eye-level lane, dusty verge, separate old houses, field plants and distant walkers stay coherent.

detailed_description:
The target video is photoreal live-action in real time, an ordinary late-summer rural lane after the empty field. Keep the view at human eye level, not aerial or drone-like. No grand mountain panorama, no water vista, no dense new housing, no white multi-story row houses, no cars, no signs, no town street, no school uniforms, no marching line, no time-lapse, no hyperlapse.
[Shot 1] A 16:9 eye-level very wide camera at about 1.5 meters height looks along a narrow dusty village lane. The lane enters from the lower foreground and leads toward three or four separate weathered low farmhouses with gaps of vegetation between them. Two or three small distant figures walk away from camera toward the houses for the entire six seconds: each person shows repeated alternating steps, a small natural arm swing and steady forward displacement along the lane; their bodies remain tiny and faces unreadable, but their walking direction is clear. The figures are ordinary present-day villagers, not a school group. The camera holds a static shot. A single light wind moves through the living surroundings throughout the shot: rice heads on the left sway together with small irregular amplitude, vegetable leaves on the right flutter and tilt, roadside grass bends and recovers, and a few bamboo leaves near the houses tremble in the same wind direction. The wind is continuous but gentle, with no storm gust, no dust cloud and no time-lapse. Lane, old walls and sparse houses stay fixed while walkers and plants move naturally. No aerial view, no sweeping reveal, no mountains filling the background, no lake or rice-paddy panorama. No extra limbs, no on-screen text, no logos, no readable Chinese characters.

overall_soundscape:
distant alternating footsteps on dust, soft rice and leaf rustle, light village air, no school bell, no voices

non_diegetic_music:
N/A
```

### 21　02:16–02:22　发展

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_21_h3_v02.mp4`
- 景别：桌上只剩热气
- 运镜：16:9 平视中近景，一条连续镜头，pans right with small amplitude at slow speed。
- 场景/道具：屋内桌边
- 人物动作：镜头从旧木桌上仍冒热气的搪瓷碗缓慢向右摇到空门口；桌边无人落座，门外也没有人回来。
- 转场/特效：外面切到家里的空
- 声画重点：日子的热气
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one modest lived-in room inside an old rural Chinese farmhouse at present time: a worn unpainted wooden table, two simple enamel bowls, one low empty wooden stool, plain earthen walls and an open wooden doorway. No living person appears.

summary:
one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1>, beginning on faint steam above the bowls and slowly revealing the empty doorway where nobody returns.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same table, two bowls, empty stool, earthen wall, doorway, stable daylight and quiet interior remain coherent for the entire shot. No living person.

detailed_description:
The target video is photoreal live-action in real time, restrained and intimate, moving from the present-day village lane into an ordinary old farmhouse interior. Soft neutral afternoon daylight enters from one open doorway. Materials stay practical and worn, with no picturesque landscape display and no nostalgic color filter.
[Shot 1] A 16:9 eye-level medium-close composition begins with a worn unpainted wooden table occupying the left foreground. Exactly two simple enamel bowls sit apart on the table with one pair of plain chopsticks; a thin thread of natural steam rises continuously from one bowl with small irregular curls. No hands, body parts or seated person appear. The camera pans right with small amplitude at slow speed during the six seconds, keeping the table edge in frame while gradually revealing one low empty wooden stool and the open doorway in the right middle ground. The doorway shows only a close patch of packed-earth courtyard and a few soft bamboo-leaf shadows moving gently across the threshold; there is no horizon, mountain, water, field panorama, modern building or road visible through it. A narrow cloth edge beside the doorway moves slightly in the same light breeze, while the table, bowls, stool, walls and doorframe remain fixed. Nobody enters, passes outside or sits down. The room contains no red couplets, signs, posters or readable writing. One continuous shot only, with no cut, no return to an exterior wide view, no time-lapse, no extra objects appearing, no on-screen text, no logos.

overall_soundscape:
quiet room tone, faint bowl and chopstick settling sound, soft steam and cloth movement, distant leaf rustle outside, no footsteps, no voices

non_diegetic_music:
N/A
```

### 22　02:22–02:30　转折

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_22_h3_v02.mp4`
- 景别：熟路停住
- 运镜：16:9 平视中全景，一条连续固定镜头，holds a static shot for all eight seconds。
- 场景/道具：田边旧泥路岔口、半埋旧界石
- 人物动作：镜头停在旧泥路岔口，半埋界石仍在原位；稻穗和路边杂草被风持续带动，但两条路都没有人回来。
- 转场/特效：预副歌2，世界状态改变
- 声画重点：还站在这里，路先空着
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one small familiar fork in an old packed-earth footpath beside late-summer rice, marked by one plain weathered boundary stone half buried at the inner edge. Rooted verge grass and low rice heads surround the fork. No living person appears.

summary:
one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1>, the unchanged path marker held in frame while wind moves the plants and both branches remain empty.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same fork, worn foot tracks, half-buried boundary stone, rooted grass, low rice heads and stable side light remain coherent for the entire shot. No living person.

detailed_description:
The target video is photoreal live-action in real time, restrained and ordinary, returning outside after the empty farmhouse room. The frame stays close to the ground and uses muted natural late-afternoon color. It is a remembered working path, not a scenic landscape view.
[Shot 1] A 16:9 eye-level medium-wide camera at about 1.3 meters height faces a compact Y-shaped fork in a narrow packed-earth footpath. The fork fills the lower and middle frame. A plain hand-sized weathered boundary stone sits half buried at the inner split, with no carving, paint or readable mark. Two shallow worn foot tracks continue around it, one branch bending left behind low rice and the other bending right behind mixed verge grass. The upper edge is closed by rice heads, grass and a low dark tree line so there is no broad sky or distant view. The camera holds a completely static shot for all eight seconds, with no cut, pan, push, pull, zoom or focus change. A continuous light wind moves through the living surroundings: rice heads lean and recover with small irregular amplitude, fine grass blades ripple in the same direction, and a few dry seed heads tremble. The earth, boundary stone and path edges stay fixed. Neither branch receives a person, bicycle, vehicle or animal; there are no footsteps or shadows suggesting someone is about to arrive. No houses, roofs, utility poles, mountains, water, panorama, signs, writing, extra objects, on-screen text or logos.

overall_soundscape:
steady light wind through rice and verge grass, faint insects, no footsteps, no voices

non_diegetic_music:
N/A
```

### 23　02:30–02:38　转折

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_23_h3_v03.mp4`
- 景别：田埂上没有人等
- 运镜：16:9 略向下约15度中景起幅，pulls out with small amplitude at slow speed，始终保持低位且不升空。
- 场景/道具：田埂
- 人物动作：镜头从田埂上一小块被长期站压过的草痕缓慢后退，露出两侧随风稻谷和仍然空着的田埂；熟悉的位置还在，却没有人等。
- 转场/特效：空路到空埂
- 声画重点：连自己都有点生——用空缺说
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one narrow raised earth ridge between late-summer rice plots, with a small oval patch of grass flattened by years of someone standing there and two incomplete old dry shoe-edge impressions pressed into the soil. No living person appears.

summary:
one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1>, slowly pulling away from the familiar standing mark to reveal that the ridge is empty while rice and grass move in light wind.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same flattened grass patch, incomplete old impressions, narrow ridge, bordering rice and dark soil channel remain coherent as the camera moves backward. No living person.

detailed_description:
The target video is photoreal live-action in real time, quiet and restrained at the turning point before the chorus. The view stays low and close to working farmland, with muted late-afternoon color and tactile earth texture. The absence is carried by a familiar human trace, not by a grand landscape.
[Shot 1] A 16:9 medium shot begins at about one meter camera height, angled down approximately fifteen degrees toward the center of a narrow raised earth ridge. Near the lower center is one small oval patch of short grass pressed flat from repeated standing; beside it are only two partial dry shoe-edge impressions, softened by time and not fresh tracks. No shoes, feet, body parts or person are present. The camera pulls out with small amplitude at slow speed over the full eight seconds, moving backward less than one meter without rising, tilting or changing direction. The retreat gradually reveals more of the same empty ridge extending forward, mature rice heads close on the left and mixed verge grass beside a narrow dark soil drainage line on the right. The frame remains enclosed by crops and a low strip of earth; there is no broad sky or distant panorama. A continuous light wind moves the rice heads, short grass and dry seed stems in one direction with small irregular motion. The flattened patch, old impressions, ridge and soil channel remain stable and do not slide, multiply or deform. Nobody enters or waits at the far end. No houses, roofs, utility poles, mountains, water vista, vehicles, signs, writing, extra objects, on-screen text or logos.

overall_soundscape:
light wind through mature rice, soft grass friction and fading insects, no footsteps, no voices

non_diegetic_music:
N/A
```

### 24　02:38–02:45　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_24_h3_v02.mp4`
- 景别：泥路还发着烫
- 运镜：16:9 贴地中景，向下约10度，pushes in with small amplitude at slow speed，机位不抬高。
- 场景/道具：泥路
- 人物动作：低机位沿晒热的旧泥路持续小幅慢推，干土脊、浅车辙和碎石被侧光逐段擦亮；路肩短草与稻穗随风，路始终空着。
- 转场/特效：副歌2爆点开始
- 声画重点：Hook 再起，泥路发烫
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one narrow old packed-earth footpath at the edge of late-summer rice fields, with dry brown soil ridges, two shallow worn ruts, a few embedded pale stones, rooted short verge grass and a small number of rice heads leaning into the frame. No living person appears.

summary:
one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1>, pushing low along sun-warmed earth as side light catches the path texture and wind moves the bordering plants.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same dry soil ridges, shallow ruts, embedded stones, rooted verge grass and nearby rice remain coherent as the camera advances. No living person.

detailed_description:
The target video is photoreal live-action in real time, tactile and restrained at the second-chorus entrance. Warmth comes from stable late-afternoon side light striking ordinary dry earth, not from a scenic sunset, color effect or time-lapse. The frame stays close to the working path and keeps the rural materials physically believable.
[Shot 1] A 16:9 ground-level medium shot begins about thirty centimeters above the old packed-earth path, angled down approximately ten degrees. The path enters from the lower left and continues toward the upper middle, but low rice heads and verge grass close the upper edge before any horizon appears. Dry soil ridges, two shallow worn ruts and several small embedded pale stones remain sharply readable. The camera pushes in with small amplitude at slow speed for all seven seconds, traveling forward less than one meter and never rising, panning, tilting, cutting or changing focus. Stable side light grazes the raised dirt and gives it a quiet warm sheen without changing brightness or color. A continuous light breeze moves the living edges: short grass bends and recovers, a few rice heads sway with small irregular amplitude, and one dry seed stem trembles. The dirt, stones and ruts stay fixed and do not melt, slide or multiply. The path remains empty from beginning to end; no feet, person, bicycle, vehicle, animal or approaching shadow enters. No horizon, sky, house, roof, utility pole, mountain, water, panorama, sign, writing, on-screen text or logo.

overall_soundscape:
soft dry earth texture under the moving camera, light wind through short grass and rice, faint insects, no footsteps, no voices

non_diegetic_music:
N/A
```

### 25　02:45–02:52　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_25_h3_v03.mp4`
- 景别：傍晚被不同的人过
- 运镜：16:9 平视中全景，holds a static shot。
- 场景/道具：院与田边
- 人物动作：院边左前景的中年妇女收起搪瓷盆并向门口走两步，右后景戴草帽的男人在田边停一下后继续整理锄头；两人各过各的，不看镜头、不对口型。
- 转场/特效：空路切到众人
- 声画重点：回得了故乡，人各自在
- H3 提示词：

```text
subject_definitions:
<Subject 1> is an ordinary middle-aged Chinese rural woman in the left foreground, wearing a faded navy work jacket, loose gray trousers and flat dark cloth shoes, carrying one empty white enamel basin with a thin blue rim. Appearance comes from text only.
<Subject 2> is an ordinary middle-aged Chinese rural man about six meters behind her at the right vegetable edge, wearing a faded olive work shirt, dark trousers and one plain straw hat, holding one wooden-handled hoe. Appearance comes from text only.

summary:
one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> living separate evening routines in the same enclosed farmhouse-yard edge, with no singing or acknowledgment between them.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same woman, navy jacket, gray trousers, cloth shoes and single enamel basin remain coherent.
<Subject 2> (appears in [Shot 1]): fully_preserved - the same distant man, olive shirt, dark trousers, straw hat and single hoe remain coherent. No additional living person.

detailed_description:
The target video is photoreal live-action in real time, observant and restrained during the second chorus. One modest packed-earth farmhouse yard occupies the foreground and opens directly to a close vegetable plot. A weathered earthen wall and dark doorway fill the left side. Tall corn leaves, dense bamboo and one low old mud wall form a continuous near background behind the people, completely blocking the horizon and all distant buildings. Soft neutral late-afternoon light enters from outside the frame; the sun itself is not visible.
[Shot 1] A 16:9 eye-level medium-wide static camera holds the same composition for all seven seconds. <Subject 1> stands left of center in a mild three-quarter back view beside one low wooden stool. She is already lifting the empty enamel basin from the stool with both hands, keeps her lips closed and gaze on the basin, then turns only slightly and takes two unhurried steps toward the dark doorway at far left. She does not stop to perform or look at camera. About six meters behind her at the right vegetable edge, <Subject 2> remains smaller in frame against tall corn and bamboo, never against open sky. He rests one hand on the hoe for one brief beat while looking down toward the crop row, then lowers the hoe head to the soil and resumes one small practical adjustment; he never looks at <Subject 1> or camera. Their actions stay separate and natural. A single light breeze moves vegetable leaves, corn tips, bamboo leaves and one small plain cloth hanging beside the doorway in the same direction. The camera, old wall, stool, basin, hoe and ground remain stable. No open horizon, sky, visible sun, distant houses, modern buildings, utility poles, wires, road, extra crowd, child, clone, conversation, singing, readable writing, on-screen text or logos.

overall_soundscape:
enamel basin lifted from wood, soft cloth movement, one hoe touching soil, light vegetable-leaf, corn and bamboo rustle, no voices, no singing

non_diegetic_music:
N/A
```

### 26　02:52–02:59　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_26_h3_v03.mp4`
- 景别：也可以完全没人
- 运镜：16:9 平视中全景，一条连续固定镜头，holds a static shot for all seven seconds。
- 场景/道具：院与田边
- 人物动作：镜25同一院边已经无人：木凳上只留搪瓷盆刚放过的湿圆痕，锄头靠在旧墙边；菜叶、玉米叶和晾布仍随风，门口没有人再出来。
- 转场/特效：众人切回空
- 声画重点：走不进那天
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one modest empty packed-earth farmhouse-yard edge: one low worn wooden stool with a fresh circular damp mark on its seat, one wooden-handled hoe leaning against a weathered earthen wall, one dark open doorway, close vegetable rows, tall corn, dense bamboo and one small plain hanging cloth. No living person appears.

summary:
one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1> immediately after the two villagers have left, with only recent work traces and wind movement remaining.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same stool, damp ring, single hoe, old wall, doorway, vegetable rows, corn, bamboo and hanging cloth remain coherent. No living person.

detailed_description:
The target video is photoreal live-action in real time, restrained and observational, continuing the exact kind of enclosed farmhouse-yard space from the previous shot after its daily actions have ended. Soft neutral late-afternoon light stays constant. Tall corn, bamboo and the low old wall block the horizon and all distant buildings.
[Shot 1] A 16:9 eye-level medium-wide static camera holds the empty yard for all seven seconds. The low wooden stool stands left of center where the enamel basin was just lifted; one clear but ordinary circular damp mark darkens the seat, with no basin present. One wooden-handled hoe now leans securely against the weathered wall near the vegetable edge. The doorway at far left stays dark and empty. No woman returns, no man remains by the crops, and no body part or moving shadow enters. A continuous light breeze moves the living surroundings: broad vegetable leaves tilt and recover, corn tips and bamboo leaves sway with small irregular amplitude, and the plain hanging cloth lifts slightly then settles. The stool, damp ring, hoe, wall, doorframe and ground stay completely fixed. No cut, camera movement, visible sun, open sky, distant house, modern building, utility pole, wire, vehicle, animal, readable writing, on-screen text or logo.

overall_soundscape:
quiet empty courtyard, light cloth movement, vegetable, corn and bamboo rustle, fading insects, no footsteps, no voices

non_diegetic_music:
N/A
```

### 27　02:59–03:06　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_27_h3_v03.mp4`
- 景别：竹筛上稻壳被风带散
- 运镜：16:9 略高机位近景，向下约25度，一条连续固定镜头，holds a static shot for all seven seconds。
- 场景/道具：院边木凳旁
- 人物动作：承接镜26，同一院落木凳旁的旧竹筛里只余一小撮干稻壳；一阵轻风从左向右经过，稻壳分几次越过筛沿，最后只留近乎空的筛面，没有人回来。
- 转场/特效：同院落由中全景切近景，副歌2收在被风带走的零碎稻壳
- 声画重点：点点滴滴就散了
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one old shallow round bamboo winnowing tray resting securely beside the wooden stool in the same enclosed farmhouse yard, with one small loose handful of dry pale rice husks on its woven surface and the edge of one broad vegetable leaf at frame right. No living person appears.

summary:
one continuous 7-second photoreal live-action 16:9 MV close shot of <Subject 1>, where a light breeze carries the small remainder of rice husks away in several natural pulses until the tray is nearly empty.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same single bamboo tray, woven pattern, small finite group of rice husks, stool edge and vegetable leaf remain coherent. No living person.

detailed_description:
The target video is photoreal live-action in real time, restrained and observational, in the same enclosed late-summer Chinese farmhouse yard as the previous shot. Soft neutral late-afternoon light stays constant. The frame contains no horizon, sky or distant scenery.
[Shot 1] A 16:9 slightly high close shot angled downward about twenty-five degrees holds a static camera for all seven seconds. One old shallow round bamboo winnowing tray fills most of frame and rests motionless beside the stool; its dry woven surface is clearly visible. At the start, only one small loose handful of pale rice husks lies near the left half of the tray, with no grain and no food. A light breeze travels consistently from left to right. In two or three gentle pulses, a few separate husks slide, flutter, cross the right rim and leave frame; the finite handful visibly thins until only two or three husks remain on the tray near the end. The husks do not multiply, clump into objects, turn into liquid, or change species. The bamboo tray, stool edge and ground stay completely fixed while one vegetable leaf at frame right flexes softly in the same breeze. No hand, foot, face, body part or moving shadow enters. No dramatic whirlwind, flying dust cloud, rain, puddle, visible sun, open sky, house, modern building, utility pole, wire, vehicle, animal, readable writing, on-screen text or logo.

overall_soundscape:
dry rice-husk whisper across bamboo, one soft leaf rustle, fading insects, no footsteps, no voices

non_diegetic_music:
N/A
```

### 28　03:06–03:13　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_28_h3_v03.mp4`
- 景别：桥段：旧土墙与空门
- 运镜：16:9 平视中近景，trucks right with small amplitude at slow speed，一条连续镜头。
- 场景/道具：院外旧土墙与门口
- 人物动作：镜头贴着旧土墙缓慢向右平移，掠过一扇敞开的旧木门；薄门帘和墙脚草轻动，门内只有空院，没有人进出。
- 转场/特效：竹筛清空后切至空门，桥段节奏放慢，并引向下一镜院边人物
- 声画重点：明明不该难过
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one short section of weathered earthen farmhouse wall with natural cracks, one old plain wooden door standing open in its frame, one thin unpatterned cloth curtain just inside, sparse short grass at the wall base, and a dim enclosed empty courtyard beyond. No living person appears.

summary:
one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1>, slowly moving along the old wall to reveal an open but empty doorway at dusk.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same earthen wall, cracks, single wooden doorway, plain curtain, base grass and enclosed empty courtyard remain coherent. No living person.

detailed_description:
The target video is photoreal live-action in real time, restrained rural observation at late-summer dusk. Muted neutral earth colors and softly cooling natural light replace scenic sunset color. The old wall and doorway fill the frame and block all distant scenery.
[Shot 1] A 16:9 eye-level medium-close camera trucks right with small amplitude at slow speed in one continuous move parallel to the earthen wall. The shot begins on rough wall texture and short grass at its base. As the camera glides right, one plain old wooden doorway enters and settles near center; the door already stands open and never swings. A thin unpatterned cloth curtain just inside lifts a few centimeters and falls in a continuous light breeze, while the short grass bends softly in the same direction. Through the doorway only a dim enclosed patch of packed-earth courtyard and an empty low stool are visible. No person enters, exits, passes behind the curtain or casts a moving shadow. The camera never turns toward a road, field or horizon. No visible sky, mountain, water, modern building, white house, utility pole, wire, vehicle, animal, readable writing, couplet, on-screen text or logo.

overall_soundscape:
soft curtain movement, short grass rustle, dusk insects, no footsteps, no voices

non_diegetic_music:
N/A
```

### 29　03:13–03:21　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_29_h3_v03.mp4`
- 景别：空门内坐着的村妇
- 运镜：16:9 平视中近景，pushes in with small amplitude at slow speed。
- 场景/道具：旧木门内侧
- 人物动作：一位约45岁的村妇坐在旧木门内，目光始终停在院里同一点；她闭唇、不哭不笑，末段只在缓慢呼气时让肩膀落下一点。
- 转场/特效：镜28空门切到同一类门内的人，空间由空转有人
- 声画重点：却也高兴不起来
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one adult Chinese rural woman about forty-five, with a natural oval face, visible everyday skin texture, dark hair gathered in a simple low bun, and a faded indigo long-sleeve work shirt with no pattern or logo. She is already seated on a low stool just inside one old wooden farmhouse doorway. Appearance comes from this text only; there is no reference picture.

summary:
one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1> sitting inside the doorway, holding one quiet gaze toward the empty yard, neither crying nor smiling nor singing.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same adult face, low bun, body proportions, faded indigo shirt and seated position remain consistent. No second living person.

detailed_description:
The target video is photoreal live-action in real time, restrained rural portraiture at late-summer dusk. Soft cool natural light from the empty yard reaches one side of her face, while the room behind stays dim and neutral. The old wooden doorframe and a plain cloth curtain enclose the background; no distant scenery is visible.
[Shot 1] A 16:9 eye-level chest-up medium close-up keeps <Subject 1> large enough that both eyelids, irises and pupils remain sharp. The camera pushes in with small amplitude at slow speed for all eight seconds, without a cut. She sits upright just inside the doorway in a mild three-quarter orientation, her face never becoming hard profile. Her gaze holds on one fixed point in the empty yard slightly left of camera. Brows stay level with only faint tension between them; lips remain gently closed with no upward corners; jaw stays relaxed. Her breathing is small and visible. Near the final two seconds she releases one slow breath and her shoulders lower less than two centimeters, while her gaze does not move. At most one natural slow blink. She does not smile, cry, speak, sing, mouth lyrics, turn her head or look into camera. Her hands remain below frame. The curtain edge behind her moves softly in a light breeze, while the doorframe and stool remain fixed. Stable face and hair, natural skin texture, coherent clothing. No second person, duplicate face, flickering eyes, facial warping, beauty-filter slim face, open mouth, tears, extra limbs, visible sky, mountain, water, modern building, utility pole, readable writing, on-screen text or logo.

overall_soundscape:
quiet empty courtyard, faint curtain rustle and dusk insects, one soft exhale, no dialogue or singing

non_diegetic_music:
N/A
```

### 30　03:21–03:28　高潮

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_30_h3_v02.mp4`
- 景别：想留下那时候，留下的是风
- 运镜：16:9 低机位近景，向下约15度，一条连续固定镜头，holds a static shot for all seven seconds。
- 场景/道具：田边浅沟
- 人物动作：贴近田边浅沟，前景细草先被一阵风压向右侧，半秒后后景稻叶跟着倾斜；风减弱时两层植物以不同速度回弹，整镜没有人。
- 转场/特效：从脸回到风
- 声画重点：想留下，那时候
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one close section of a shallow dry field-edge ditch, with thin mixed wild grass rooted in the foreground, a dense row of mature green rice leaves directly behind it, and compact dark earth visible between them. No living person appears.

summary:
one continuous 7-second photoreal live-action 16:9 MV close shot of <Subject 1>, where one breeze passes visibly through the foreground grass and then the rice leaves before both layers recover.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same shallow ditch, rooted thin grass, finite rice leaves and dark earth remain spatially coherent. No living person.

detailed_description:
The target video is photoreal live-action in real time, restrained rural observation in softly dimming late-summer light. Natural green, gray and earth colors stay neutral, with no sunset glow. The low frame is enclosed by vegetation and ground, with no horizon or distant scenery.
[Shot 1] A 16:9 low close shot angled downward about fifteen degrees holds a static camera for all seven seconds. Thin mixed grass fills the lower foreground, the edge of a shallow dry soil groove stays visible at center, and mature rice leaves form the middle background. From the first second a moderate natural breeze travels clearly from left to right: the foreground grass bends first in an irregular wave, and about half a second later the rice leaves behind tilt in the same direction. The plants never become completely still. As the breeze eases, thin grass springs back faster while the heavier rice leaves recover more slowly, creating visible layered motion through the final second. Roots, soil and ditch edge remain fixed; no plant detaches or multiplies. No person, hand, foot, face, animal or moving shadow enters. No camera movement, cut, storm, dramatic whirlwind, flying debris, visible sky, mountain, water surface, road, house, modern building, utility pole, wire, vehicle, readable writing, on-screen text or logo.

overall_soundscape:
close grass hiss, heavier rice-leaf rustle, fading dusk insects, no footsteps, no voices

non_diegetic_music:
N/A
```

### 31　03:28–03:36　结尾

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_31_h3_v02.mp4`
- 景别：村里一盏灯先亮
- 运镜：16:9 平视中景，一条连续固定镜头，holds a static shot for all eight seconds。
- 场景/道具：旧屋外墙与木窗
- 人物动作：一扇旧木窗在暮色土墙上保持全暗，约四秒时屋内暖灯一次性亮起并稳定下来；窗外一枝竹叶仍在风里轻动，没有人出现。
- 转场/特效：镜30的暗绿风动切到静止旧墙，灯亮在最终副歌进入时发生，不切镜
- 声画重点：回得了故乡，日子不告别
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one small old wooden lattice window set into a weathered earthen farmhouse wall, with plain translucent paper or frosted panes, one short bamboo branch entering from frame left, and a narrow strip of dark packed earth at the wall base. No living person appears.

summary:
one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1>, where the dark window receives one steady warm indoor light near the midpoint and remains lit.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same single window, wooden frame, plain panes, earthen wall, bamboo branch and ground remain coherent before and after the light turns on. No living person.

detailed_description:
The target video is photoreal live-action in real time, restrained rural dusk with cool muted exterior tones and one modest warm interior light. The earthen wall fills the background, preventing any distant scenery. There is no time-lapse and the exterior brightness stays constant.
[Shot 1] A 16:9 eye-level medium static shot holds the single old wooden window slightly right of center for all eight seconds. At the start the plain panes are dark and reflect no face or scenery. A short bamboo branch at frame left moves gently and irregularly in a continuous light breeze while the wall, window frame and ground remain completely fixed. At about 00:04.000, one warm tungsten room light turns on behind the panes in a single smooth rise lasting less than half a second; it does not flicker, pulse or change color, and it remains steadily lit through the final frame. No silhouette, face, hand or body crosses behind the window. No camera movement or cut. No visible sky, mountain, field, water, road, second window, modern building, utility pole, wire, vehicle, animal, readable writing, couplet, on-screen text or logo.

overall_soundscape:
dusk insects, soft bamboo-leaf rustle, one faint indoor switch click and distant bowl clink, no voices

non_diegetic_music:
N/A
```

### 32　03:36–03:44　结尾

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_32_h3_v01.mp4`
- 景别：旧田埂上的背影中景
- 运镜：16:9 平视中景，pulls out with small amplitude at slow speed，机位始终低于人物肩线。
- 场景/道具：旧田埂与低矮稻田之间
- 人物动作：一个只见背面的成年人站在旧田埂上，双手自然垂下，不回头；镜头从腰上至膝上的中景小幅度慢拉，人物仍清楚，低矮稻田和风动草沟逐渐露出。
- 转场/特效：灯到人的背影
- 声画重点：我还站在田埂上
- H3 提示词：

```text
subject_definitions:
<Subject 1> is one adult figure seen only from behind, already standing on a narrow old packed-earth field ridge between low rice plots. The figure wears a plain dark indigo shirt and loose dark trousers; the face is never visible. Dedicated back view. Appearance comes from this text only; there is no reference picture. No second living person.

summary:
one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1> standing quietly on the familiar ridge after one warm village window has come on, not a farewell portrait.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same back, dark shirt, trousers, posture and ridge position remain coherent as the camera moves. No second living person.

detailed_description:
The target video is photoreal live-action in real time, restrained rural dusk continuing the previous warm-window mood. Muted blue-green and earth tones, no scenic sunset, no distant panorama. The frame is enclosed by the old ridge, low rice, short grass and one tiny far warm window partly screened by vegetation.
[Shot 1] A 16:9 eye-level medium shot begins from the figure's waist to knees, keeping the back large enough to read as one person while never showing the face. The figure is already standing on the ridge facing away from camera, arms hanging naturally, shoulders quiet. The camera pulls out with small amplitude at slow speed for all eight seconds, revealing more of the same ridge, shallow field groove and low rice leaves. The figure does not turn, wave, walk, sing or speak; their posture remains upright with one small natural weight shift only. Rice leaves and short grass move continuously in a light breeze, while the packed ridge and figure remain stable. No front face, profile, second person, duplicate body, visible sky, mountain panorama, water surface, road, modern building, utility pole, wire, vehicle, readable writing, on-screen text or logo.

overall_soundscape:
soft rice and grass rustle, distant village room tone, no footsteps, no singing, no voices

non_diegetic_music:
N/A
```

### 33　03:44–03:52　结尾

- 出镜参考：不挂三视图。空景按环境生成；路人仅用提示词，不锁唯一主角
- 生成类型：H3 文生视频 / 无角色参考槽
- 输出视频：`generated/video/raw/shot_33_h3_v02.mp4`
- 景别：一段路仍然黑着
- 运镜：16:9 平视中全景固定；00:04.500 硬切到远处灯，仍固定。
- 场景/道具：泥路
- 人物动作：先没灯的泥路。四点五秒后切到远处那一点暖光，走不近。
- 转场/特效：背影切回黑路
- 声画重点：走不进那天
- H3 提示词：

  实际执行为两个空景源片段逐个生成后组接：前 4.5 秒固定暗路，后 3.5 秒固定远处暖点；最终硬切点为 00:04.500。最终文件保持 1216×672、24 fps、8.000 秒。

```text
subject_definitions:
<Subject 1> is the rural Chinese countryside in this prompt: mountains, water, fields, mud paths, at most one old farmhouse far away. No living person. Not a town.

summary:
one 8-second live-action 16:9 MV clip of <Subject 1>: a dark empty mud path, then a cut to a distant warm light that stays far. No living person.

retention_analysis:
<Subject 1> (appears in [Shot 1] and [Shot 2]): fully_preserved - the same ground, crops, dirt, sky, rural materials and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
[Shot 1] A 16:9 eye-level medium-wide of the mud path in shadow. The camera holds a static shot. The path is dark and empty.
[Shot 2] At 00:04.500, the camera cuts to a 16:9 eye-level medium-wide looking toward a distant warm speck of light. The camera holds a static shot. The light stays far. Nobody walks the path.
Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

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
- 运镜：16:9 平视大全景，pedestals up with small amplitude at slow speed。
- 场景/道具：田与村
- 人物动作：镜头小幅度升起，看见更多空田、路和那一点灯。不需要脸。
- 转场/特效：最终副歌收
- 声画重点：人已经，不是
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese countryside in this prompt: mountains, water, fields, mud paths, at most one old farmhouse far away. No living person. Not a town.

summary:
one continuous 8-second live-action 16:9 MV shot of <Subject 1>, fields, path and one light, no face required for the last line

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
[Shot 1] A 16:9 eye-level very wide. The camera pedestals up with small amplitude at slow speed. In the first two seconds the countryside edge sits between day and night. Then more empty fields, the path and the one light enter the frame. By the final second the frame stays empty of a close person. Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

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
<Subject 1> is the rural Chinese countryside in this prompt: mountains, water, fields, mud paths, at most one old farmhouse far away. No living person. Not a town.

summary:
one continuous 8-second live-action 16:9 MV shot of <Subject 1>, the empty ridge in the last guitar

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same ground, crops, dirt, sky and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
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
- 运镜：16:9 平视大全景固定；00:05 硬切到田那边停着的云，仍固定。
- 场景/道具：田与天
- 人物动作：先空田。五秒后切到停住的云，停在最后一帧。
- 转场/特效：淡出或停住
- 声画重点：云还停在田那边
- H3 提示词：

```text
subject_definitions:
<Subject 1> is the rural Chinese countryside in this prompt: mountains, water, fields, mud paths, at most one old farmhouse far away. No living person. Not a town.

summary:
one 9-second live-action 16:9 MV clip of <Subject 1>: empty fields, then a cut to the cloud stopped over the fields as the last image. No living person.

retention_analysis:
<Subject 1> (appears in [Shot 1] and [Shot 2]): fully_preserved - the same ground, crops, dirt, sky, rural materials and light stay consistent. No living person.

detailed_description:
The target video is photoreal live-action in real time, a beautiful late-summer Chinese countryside with distant mountains and water (river, pond or paddy), mud paths and fields. Scenic and rural, not a town. Natural daylight, no golden nostalgia filter, no time-lapse, no hyperlapse, no accelerated weather, no city, no town street, no dense new housing rows, no suburban villas, no cars.
[Shot 1] A 16:9 eye-level very wide of the fields. The camera holds a static shot. The land is empty of people.
[Shot 2] At 00:05.000, the camera cuts to a 16:9 eye-level medium-wide of the far cloud. The camera holds a static shot. The cloud remains still. This is the last frame the viewer should keep. No living person.
Stable earth and sky, real crop texture, no living person, no extra limbs, no on-screen text, no logos, no readable Chinese characters.

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


