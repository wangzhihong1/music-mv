# 《一厢情愿》MV 制作方案

## 歌曲分析

- 文件：`music/song.mp3`
- 时长：3:54.2
- 音频：44.1kHz、立体声、192kbps
- 估算节拍：约 139 BPM，画面可按约 69.5 BPM 的半拍律动剪辑
- 核心情绪：期待 → 自我解释 → 反复退让 → 看清拒绝 → 收回自己
- 歌词母题：晚安、生日、在吗、门与窗、删除名字、取消计划、替对方找借口

歌词由本地 Whisper 初步识别，仅用于剧情理解。纯音乐段存在自动识别幻听，最终字幕和演唱口型必须以确认后的正式歌词为准。

## 故事概念

一句话故事：一位在中国现代都市工作的中国女造型师，把男同事每一次礼貌都误读成靠近；在一次被遗忘的生日后，她终于停止替他解释，并把为他预留的位置还给自己。

MV 不表现争吵或报复。女主的转变通过日常细节完成：第二只杯子、永远空着的座位、未发送的消息、为对方保留的窗灯，最终都被她平静地收回。

## 主要人物

### 女主：林乔

- 25 岁，中国人，在中国现代都市的时尚摄影棚担任造型助理
- 柔和窄心形脸、自然收窄的下颌、大而自然的深棕杏眼、挺直鼻梁、齐下巴深棕短发，带自然暖棕高光与轻薄空气刘海
- 夏季主造型：纯白合身圆领短袖 T 恤、中蓝色高腰直筒牛仔裤、细棕色皮带、白色简约运动鞋、心形项链和小型金色耳饰；不使用职业装
- 正式人物母版：`assets/characters/lin_qiao_confirmed_t2i.png`，对应 2026-08-15 20:34 生成的 `chinese_female_t2i_00004_.png`，由 RealVisXL 文生图生成并已确认；浅蓝短袖针织上衣、齐下巴短发、空气刘海、心形项链与金色心形耳饰是母图识别锚点
- 旧换装半身图 `assets/characters/lin_qiao_short_sleeve_portrait.png`、全身图 `assets/characters/lin_qiao_short_sleeve_jeans_full.png` 及旧四视角均基于上一版身份，不再作为林乔参考，须由新母图重新生成
- 一致性方法：确认母版作为唯一脸部参考，使用 SDXL IP-Adapter Plus Face，并用头部空间遮罩限制身份条件；禁止再用无身份条件的纯文生图扩展女主全身
- 表演：克制、敏感、习惯快速回应；后半段眼神由等待转为平静

### 男主：周叙

- 28 岁，中国摄影师，约 188cm，高挑清瘦、温和但明确地保持距离
- 棱角柔和的长椭圆脸、清晰颧骨与下颌、深棕杏眼、挺直鼻梁、自然暖色肤质；短而浓密的深棕黑纹理发向上抓出分束尖刺，带轻微暖棕高光；保留修整克制的淡胡须与下巴短胡茬
- 黑色短袖 T 恤、深灰轻薄夏季长衬衫/外搭、高腰炭灰宽腿长裤、黑色腰带、简约黑色运动鞋和银色手表
- 正式人物母版：`assets/characters/zhou_xu_confirmed_t2i.png`，对应 2026-08-15 20:50 生成的 `chinese_female_t2i_00009_.png`；源文件前缀虽沿用 female，但画面确认为成年中国男性
- 母图中的短上扬纹理发、轻微胡茬、白色 V 领上衣与双层细金链用于识别原图；剧情正式服装仍按黑色短袖、深灰外搭与炭灰长裤执行
- 旧 `zhou_xu_male_longhair_portrait.png`、`zhou_xu_male_longhair_candidate.png` 及其他长发派生图不再作为周叙参考，须由新母图重新生成全身与多视角
- 一致性方法：确认母版作为唯一脸部参考，使用 SDXL IP-Adapter Plus Face 与头部空间遮罩；后续镜头不得混入旧长发身份条件
- 表演不塑造成坏人；他的礼貌和疏离始终同时存在

### 第三人

- 只以远景、背影或玻璃倒影出现，不正面制造三角冲突
- 作用是让女主确认事实，而不是制造反派

## 视觉设定

- 画幅：16:9，最终交付 1920×1080，关键帧以 1344×768 为目标画布
- 风格：中国都市真人电影感，夏季自然光，现代中国城市时装与生活空间
- 前半色彩：室内暖黄与窗外冷青并置，表现女主主动制造的温暖
- 后半色彩：逐步减少暖黄，结尾转为清晨自然白光，而非阴暗黑场
- 核心场景：时尚摄影棚、地铁、便利店窗边、女主公寓、生日小餐馆、城市河岸步道
- 视觉母题：第二只纸杯、手机输入框、窗灯、金色心形耳饰、空座位

## 音乐结构与剧情

| 时间 | 段落 | 剧情与表演 | H3 方式 |
|---|---|---|---|
| 00:00–00:20 | 前奏 | 女主清晨整理摄影棚，为男主桌面放下第二杯咖啡；对方座位始终空着 | I2V，慢推与细节特写 |
| 00:20–00:50 | 主歌 1 | 夜班后的地铁与手机信息；她秒回“在吗”，等到天亮；生日提醒被男主忽略 | I2V，静态构图、微表情 |
| 00:50–01:09 | 预副歌 | 男主后退一步，她仍替他整理衣领、递伞、保留座位 | 首尾帧，距离变化 |
| 01:09–01:38 | 间奏/情绪延长 | 女主单独演唱，空摄影棚内灯光逐盏熄灭；穿插空座与未发送消息 | I2V，轻微环绕/推近 |
| 01:38–02:05 | 主歌 2 | 她取消自己的计划去帮男主收工，却隔着便利店玻璃看到他和另一人离开 | R2V/I2V，远景与倒影 |
| 02:05–02:33 | 情绪上升 | 她仍说“没什么”，收起准备好的生日小蛋糕；男主明确说“不用对我这么好” | I2V，表演特写 |
| 02:33–03:04 | 桥段 | 公寓中，她看见日历上被划掉的个人计划和满屏未发送文字；镜子中的自己陌生而疲惫 | 首尾帧，暖光转冷白 |
| 03:04–03:34 | 最终副歌 | 她不再解释，删除草稿而非删除记忆；收起第二只杯子，关掉为他留的窗灯 | I2V，动作连续 |
| 03:34–03:54 | 尾奏 | 清晨城市河岸边，她独自戴好耳机向前走；最后回到摄影棚，只为自己放下一杯咖啡 | I2V，稳定跟拍后拉远 |

## 镜头清单

1. 00:00–00:06：摄影棚清晨，衣架与银色饰品细节，冷白窗光。
2. 00:06–00:12：女主将两杯咖啡放在并排桌面，第二张椅子空着。
3. 00:12–00:20：男主经过，只带走文件，没有注意咖啡；女主保持微笑。
4. 00:20–00:27：夜班地铁，女主手机亮起“在吗”，她立刻坐直。
5. 00:27–00:34：公寓窗边，输入“晚安”后反复检查手机。
6. 00:34–00:41：晨光进入房间，手机仍停留在未读状态。
7. 00:41–00:50：生日小餐馆，桌上两套餐具，女主独自吹灭小蜡烛。
8. 00:50–00:57：雨夜摄影棚门口，女主把伞向男主倾斜，自己肩膀淋湿。
9. 00:57–01:03：男主礼貌接过伞又退开半步，人物距离清晰可见。
10. 01:03–01:09：女主望着他离开，将退后理解成迟疑。
11. 01:09–01:18：演唱镜头，空棚中正面半身，镜头缓慢推近。
12. 01:18–01:28：窗外车灯掠过脸部，女主轻声对口型，不做夸张手势。
13. 01:28–01:38：灯光逐盏熄灭，只留下她身旁一盏暖灯。
14. 01:38–01:46：女主在电梯内取消自己的周末计划。
15. 01:46–01:54：她提着器材赶到摄影棚，发现已经收工。
16. 01:54–02:05：隔着便利店玻璃看见男主和另一人并肩离开，只拍背影。
17. 02:05–02:13：女主对玻璃中的自己轻轻说“没什么”。
18. 02:13–02:21：她独自坐下，把纸袋中的生日小蛋糕重新封好。
19. 02:21–02:27：男主在工作室明确但克制地说“不用对我这么好”。
20. 02:27–02:33：女主习惯性微笑，手指却捏皱咖啡杯套。
21. 02:33–02:41：公寓日历特写，她为男主取消的计划布满整月。
22. 02:41–02:49：手机草稿连续出现“你只是太忙”“以后会有机会”。
23. 02:49–02:57：浴室镜面，她卸下耳环，看见疲惫陌生的自己。
24. 02:57–03:04：镜面雾气散去，女主第一次平静直视自己。
25. 03:04–03:12：最终演唱镜头，清晨自然光，近景，情绪不再请求。
26. 03:12–03:20：她删除未发送草稿，将男主聊天取消置顶。
27. 03:20–03:27：收起第二只杯子和多余餐具，动作缓慢但确定。
28. 03:27–03:34：她关掉窗边暖灯，拉开窗帘迎接自然光。
29. 03:34–03:41：城市河岸步道稳定跟拍，女主独自向前，城市逐渐醒来。
30. 03:41–03:48：摄影棚重新开工，她为自己买下一杯咖啡。
31. 03:48–03:54：女主走入工作区，空椅仍在，但不再被强调；镜头拉远结束。

## 当前制作进度

### 已完成：镜头 001 摄影棚清晨建立镜头

- 对应段落：00:00–00:06 前奏
- 确认关键帧：`assets/scenes/shot_001_studio_keyframe.png`，1344×768
- H3 原始视频：`generated/video/raw/shot_001_studio_h3_1024x576_24fps_3.75s_raw.mp4`
- 生成方式：MiniMax H3 首帧图生视频，1024×576、90 帧、24fps、20 步 `res_multistep`，约 3.75 秒
- 镜头表现：空摄影棚内极慢推近，城市晨光逐步抬亮，服装架与工作台保持稳定，单独空椅作为关系母题首次出现
- 技术验收：H.264 / yuv420p；90 帧全部可解码；无黑帧、无人误入、无明显跳切，首尾平均亮度自然增加
- 性能记录：RTX 3060 12GB 峰值显存约 11.7GB，单任务总耗时约 15 分 28 秒；本轮未解码 H3 原生音频，正式剪辑仍使用原始音乐母带
- 当前状态：可作为第一阶段镜头测试素材；尚未做人脸/手部修复、视频超分、统一调色或正式音乐合成

### 已完成：镜头 002 两杯咖啡

- 对应段落：00:06–00:12 前奏延续
- 确认关键帧：`assets/scenes/shot_002_studio_coffees_keyframe.png`，由镜头 001 场景底图与女主身份条件联合生成
- H3 原始视频：`generated/video/raw/shot_002_studio_h3_1024x576_24fps_3.75s_raw.mp4`
- 专业镜头提示词结构：0.0–0.8 秒停顿并看向空位；0.8–2.0 秒转身伸手；2.0–3.1 秒将第二只纸杯放到第一只旁边；3.1–3.75 秒收手并回望空椅；全程 35mm 视角、极慢稳定推近、冷白晨光抬亮
- 技术验收：H.264 / yuv420p；90 帧全部可解码；中后段两只纸杯数量稳定，手部动作连续，窗框、衣架和工作台无明显跳变
- 当前状态：动作测试合格；首帧女主头顶有轻微生成边缘瑕疵，正式成片前需做局部修复、调色和超分；本轮仍未使用 H3 原生音频

### 已生成：镜头 003 男主从右侧进入（首条视频动作测试）

- 对应段落：00:12–00:20 前奏收束
- 首帧：`assets/scenes/shot_002_last_frame.png`，严格承接镜头 002 尾帧
- 视频：`generated/video/raw/shot_003_male_enters_studio_h3_1024x576_24fps_3s_raw.mp4`
- 生成方式：MiniMax H3 首帧图生视频，1024×576、约 3.04 秒、73 帧、24fps、20 步 `res_multistep`；时间轴为停顿 → 男主右侧入画 → 携文件夹走到空椅后方 → 停下查看文件夹
- 镜头提示词：35mm 视角、平视机位、极慢稳定推近；锁定摄影棚窗框、衣架、工作台、空椅和两杯咖啡；男主使用周叙短上扬深棕黑纹理发、轻微胡茬、黑 T 恤与深灰外搭身份锚点；禁止切镜、重复人物、融合和背景重构
- 技术验收：H.264 视频可完整解码；73 帧全部可读；无黑帧；男主轮廓、发型、文件夹动作和摄影棚布局稳定；QA 接触表：`.analysis/shot_003_video_qa/contact_sheet_9frames.jpg`
- 已知问题：首条成功测试在第 18 帧后女主上衣由镜头 002 的蓝色针织上衣跳变为白色短袖，故仅归档为动作测试，不进入正式成片；后续需在不改变首帧的前提下修复服装连续性。随后三次重跑分别在 H3 动态权重读取阶段失败（`hostbuf_file_reader_read failed`），关闭动态卸载后又因页面文件不足失败；没有覆盖本条已生成文件
- 当前状态：第一条可播放视频已生成并保留原始文件；尚未做人脸/手部修复、视频超分、统一调色或正式音乐合成

## 第一阶段生成顺序

1. 女主标准定妆照：唯一确认母版 `assets/characters/lin_qiao_confirmed_t2i.png`；基于该母图重新生成短袖换装半身、全身与四视角，旧图仅保留为废弃版本
2. 男主标准定妆照：唯一确认母版 `assets/characters/zhou_xu_confirmed_t2i.png`；使用 `D:\ComfyUI\ComfyUI_windows_portable\ComfyUI\user\default\workflows\MusicMV\02_人物锁定.json` 重新生成全身与多视角，旧长发图仅保留为废弃版本
3. 场景基准图：摄影棚、公寓窗边、便利店玻璃、城市河岸清晨，共四张
4. 关键剧情帧：双咖啡、生日空座、玻璃目击、镜前醒悟、只留一杯，共五张
5. 角色与场景确认后，再批量制作 H3 首帧和尾帧

## 女主定妆提示词

正向提示词（已根据用户参考图更新）：

`high-end cinematic modern Chinese summer fashion portrait of the exact same adult 25-year-old Chinese woman as the confirmed reference image, preserve her facial identity exactly, soft narrow heart-shaped face, naturally tapered jawline, large natural almond-shaped deep brown eyes, straight refined nose bridge, softly full natural lips, realistic Chinese facial features, chin-length deep espresso-brown blunt bob with subtle warm-brown highlights and airy see-through bangs, fitted clean pure white crew-neck short-sleeve cotton T-shirt at normal waist length, medium-blue high-waisted straight-leg denim jeans, slim brown leather belt, clean white minimal sneakers, preserve the same delicate gold heart necklace and small gold heart earrings from the reference, full body from top of hair to both shoes visible, contemporary Chinese city street, soft natural daylight, natural skin texture, premium live-action Chinese music video casting photo, photorealistic, high detail, no text, no logo`

负向提示词：

`anime, illustration, 3d render, plastic skin, excessive beauty filter, western facial features, childlike face, exaggerated crying, heavy makeup, deformed hands, extra fingers, asymmetrical eyes, duplicate person, low resolution, blurry face, overexposed skin, oversaturated colors, text, watermark, logo`

建议参数：RealVisXL V5.0 FP16 + SDXL IP-Adapter Plus Face；确认母版使用最新 `chinese_female_t2i_00004_.png`，全身 768×1344；头部空间遮罩，IP-Adapter 权重约 0.90，DPM++ 2M SDE Karras，38 步，CFG 5.2。所有女主侧面、全身和剧情关键帧必须连接确认母版身份条件，不得连接旧版换装图或旧四视角作为身份参考。

## 男主定妆提示词

正向提示词：

`high-end cinematic modern Chinese summer fashion portrait of the exact same adult 28-year-old Chinese man as the confirmed reference image, preserve his facial identity exactly, tall lean athletic build, angular oval face, defined cheekbones and jawline, deep brown almond-shaped eyes, straight nose bridge, natural warm skin texture, subtle neatly trimmed mustache and short chin stubble, short dense deep brown-black textured hair styled upward into separated tousled spikes with subtle warm-brown highlights, fitted black crew-neck short-sleeve T-shirt, lightweight dark gray summer overshirt worn open, high-waisted charcoal wide-leg trousers, black leather belt, minimal black sneakers, silver wristwatch, restrained confident expression, contemporary Chinese city street, soft natural daylight, realistic skin and fabric texture, premium live-action Chinese music video casting photo, photorealistic, high detail, no text, no logo`

负向提示词：

`different person, changed identity, long hair, shoulder-length hair, bowl cut, center part, slicked-back hair, buzz cut, shaved head, blonde hair, heavy full beard, elderly, deep wrinkles, short stature, stocky body, white V-neck T-shirt, gold chain necklace, suit, tie, office uniform, deformed hands, extra fingers, anime, illustration, 3d render, plastic skin, blurry, low resolution, watermark, text, logo`

建议参数：RealVisXL V5.0 FP16 + SDXL IP-Adapter Plus Face；确认母版使用最新 `chinese_female_t2i_00009_.png`，全身 768×1344；头部空间遮罩，IP-Adapter 权重约 0.85，DPM++ 2M SDE Karras，40 步，CFG 5.3。所有男主侧面、全身和剧情关键帧必须连接确认母版身份条件，不得连接旧长发近景或全身候选。
