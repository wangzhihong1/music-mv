# 《比永远差一天》MV 脚本

> 启动条件：MV 故事已被用户明确确认，并且用户同意继续拆分为 MV 脚本。
>
> 时间要求：每个分镜必须为 1–10 秒；所有分镜累计时长及最晚结束时间均不得超过歌曲时长。

> 启动前提：必须先询问并获得用户确认的最终歌曲总时长。不得依据估算时长开始拆分。

## 制作设定

- 目标时长：03:51
- 用户确认的歌曲总时长：03:51
- 时长确认日期：20260901
- 分镜累计时长：03:51（231 秒）
- 画幅：生成统一 16:9；回忆段落可在后期裁成 4:3 画框，不单独生成静帧肖像
- 视觉风格：现实为缓慢、克制的电影感观察；回忆为同一照相馆拍摄区的连续表演，带胶片质感，人物保持呼吸与微动作
- 色彩与光线：现实外景低饱和蓝灰；照相馆钨丝暖黄；暗房克制红光；高潮使用一次高亮白色闪光
- 拍摄方式：以已确认的女主三视图、男主正面与侧面驱动 `05_ref2va_4step_sla`。单人镜挂 3 张图；双人镜需扩到 6 张图。禁止先做逐镜分镜静帧再图生视频
- 主要场景：雨后旧街、照相馆门厅与柜台、拍摄区、暗房
- 主要人物：年轻女主、回忆中的前任；摄影师只以画外、无头肩背或手出现，不以第三张参考图锁定
- 表演与口型需求：纯叙事表演，无对嘴演唱；情绪依靠微表情、呼吸、视线、手部动作和姿态变化表达；全程闭唇，除非镜头明确要求微笑。每镜必须按时段写清眼神、眉、唇与呼吸，并符合该镜情绪。
- 预算或制作限制：女主单人镜挂正/侧/背；男主单人镜挂正/侧/正（无背面）；双人镜 Picture 1–3 为女主三视图，Picture 4–6 为男主正面、侧面、正面。剪辑镜不跑 H3。现实线大衣只能罩在参考服装外

## 主角形象提示词

用于 ComfyUI `01_character_three_views`。只改工作流左上角 Shared Character Prompt；英文可直接粘贴。不要写正面/侧面/背面、半身或 16:9，机位由工作流自动拼接。全身必须从头顶到鞋底，单人、直立、双臂自然下垂，暖灰无缝棚拍。H3 分镜提示词不再用文字重新设计人物。

### 女主三视图共享提示词

- 中文：一位明确成年的中国女性，25岁。不透明米白短袖圆领棉T恤，下摆平贴腰腹盖住肚脐，不外翻不露脐；中蓝牛仔短裤至大腿中段，白色低帮运动鞋。深棕色长发过肩至背中，自然微卷放下，不盘发不扎马尾，额前轻盈碎发，不是齐刘海。鹅蛋脸，深棕杏仁眼，鼻梁挺直，自然薄唇，暖东亚肤色，浅淡日常妆，神情安静克制。银色细耳圈。健康自然的成年身材，肩臂和腰有正常体量，不要过瘦、不要骨架感。挺胸直立，肩背打开，不驼背，侧看有自然翘臀和髋部曲线，双臂自然下垂。仅一人，全身从头顶到鞋底完整可见。居中隔离棚拍定妆照，暖灰无缝背景，均匀柔和日光，50mm镜头，真人写实，真实皮肤、头发与布料质感，无文字无标志。
- 英文：one adult Chinese woman, 25 years old, (opaque ivory short-sleeve round-neck cotton T-shirt with a flat hem covering the navel:1.4), shirt hem lying smooth against the waist, not flared, not cropped, (medium-blue denim shorts to mid-thigh:1.4), (white low-top sneakers:1.25), (long dark brown hair to mid-back worn loose:1.45), hair down, no bun, no ponytail, no bob, airy forehead wisps, no blunt bangs, (healthy naturally proportioned adult figure:1.3), not skinny, not underweight, natural soft waist and arms, (chest lifted, shoulders back, upright stance:1.3), (natural lifted hip and glute curve:1.35), oval face, large deep-brown almond eyes, straight refined nose, natural lips, warm East Asian skin, light everyday makeup, quiet reserved expression, small silver hoop earrings, single person only, full body from head to shoes, standing upright, arms naturally down, centered isolated studio casting photograph, plain warm-gray seamless background, soft even daylight, 50mm lens, photorealistic live-action, realistic skin hair and fabric texture, no text, no logo
- 负向中文：儿童，青少年，老人，侧面，三分之二侧面，背面，换人，裁掉头，裁掉脚，裁掉鞋，裁掉手臂，特写，半身，重复人物，多人，多余肢体，畸形手指，融合手，解剖错误，扭曲身体，塑料皮肤，动漫，插画，3D渲染，模糊脸，低分辨率，过曝，文字，水印，标志，短发，波波头，齐肩发，齐刘海，盘发，丸子头，马尾，高跟鞋，细跟，礼服裙，超短热裤，长裤，直筒裤，细肩带背心，透视上衣，高领，大衣，过瘦，骨架感，头巾裹脸，布料遮头，浓妆，西方面孔，半身裁切，16:9横构图
- 负向英文：child, teenager, minor, elderly, side profile, three-quarter view, rear view, different person, cropped head, cropped feet, cropped shoes, cut-off arms, close-up, bust portrait, duplicate person, multiple people, extra limbs, extra fingers, fused hands, deformed anatomy, twisted body, plastic skin, anime, illustration, 3d render, blurry face, low resolution, overexposure, text, watermark, logo, short hair, bob haircut, chin-length hair, shoulder-length hair, blunt bangs, bun, updo, ponytail, high heels, stiletto, pumps, dress, mini skirt, hot pants, micro shorts, long trousers, straight-leg pants, camisole, spaghetti strap, sheer top, turtleneck, coat, skinny, underweight, bony, emaciated, tiny waist, scarf covering face, fabric wrapping head, veil, covered face, heavy makeup, western facial features, cropped torso, 16:9 widescreen crop

### 男主三视图共享提示词

- 中文：一位明确成年的中国男性，28岁，男性，清瘦偏高，神情克制温和，偏棱角的鹅蛋脸，深棕杏仁眼，鼻梁挺直，下颌清晰但不夸张，浅淡短胡茬，暖东亚肤色。深棕近黑头发，中分，额前轻盈碎发自然垂落，不是油头、齐刘海、寸头或长发。真实成年男性比例。夏天简约穿着：不透明米白短袖圆领棉T恤，下摆平贴、无标志；浅卡其休闲短裤至大腿中段；白色低帮运动鞋；银色细手表。仅一人，全身从头顶到鞋底完整可见，直立放松站姿，双手插口袋。居中隔离棚拍定妆照，暖灰无缝背景，均匀柔和日光，50mm镜头，真人写实，真实皮肤、头发与布料质感，无文字无标志。
- 英文：(adult Chinese man:1.7), (male:1.6), (full body from head to white sneakers:1.6), legs and shoes fully visible, (opaque ivory short-sleeve round-neck cotton T-shirt:1.45), simple summer outfit, no logo, no pocket logo, (light khaki chino shorts to mid-thigh:1.5), most of the thigh visible, (white low-top sneakers:1.3), (dark brown-black hair with a center part and wispy bangs:1.5), middle part, airy forehead wisps, short textured hair, not slicked back, 28 years old, handsome adult man, lean slightly tall male build, restrained calm expression, angular oval male face, deep-brown almond eyes, straight nose bridge, defined jawline, light short stubble, warm East Asian skin tone, slim silver wristwatch, realistic adult male body proportions, arms naturally down with hands visible, single person only, centered isolated studio casting photograph, plain warm-gray seamless background, soft even daylight, 50mm lens, photorealistic live-action, realistic skin hair and fabric texture, no text, no logo
- 负向中文：女性，女人，女孩，女装，口红，浓妆，耳环，盘发，丸子头，高跟鞋，细跟，高领，针织衫，大衣，皮鞋，油头，寸头，齐刘海，长发，阔腿裤，透视上衣，儿童，青少年，老人，侧面，三分之二侧面，背面，换人，裁掉头，裁掉脚，裁掉鞋，裁掉手臂，特写，半身，重复人物，多人，多余肢体，畸形手指，融合手，解剖错误，扭曲身体，塑料皮肤，动漫，插画，3D渲染，模糊脸，低分辨率，过曝，文字，水印，标志，络腮胡，西装领带，西方面孔，半身裁切，16:9横构图
- 负向英文：woman, female, girl, feminine, lipstick, makeup, earrings, bun, updo, high heels, stiletto, pumps, turtleneck, sweater, knitwear, coat, leather shoes, slicked-back hair, buzz cut, blunt bangs, long hair, wide-leg pants, sheer top, cropped sweater, child, teenager, minor, elderly, side profile, three-quarter view, rear view, different person, cropped head, cropped feet, cropped shoes, cut-off arms, close-up, bust portrait, duplicate person, multiple people, extra limbs, extra fingers, fused hands, deformed anatomy, twisted body, plastic skin, anime, illustration, 3d render, blurry face, low resolution, overexposure, text, watermark, logo, full beard, suit, tie, open coat, western facial features, cropped torso, 16:9 widescreen crop

## 角色参考与生成规则

本脚本按「角色参考图 → `05_ref2va_4step_sla` 直接生成每个分镜视频」执行。工作台复制按钮复制的就是完整 reference contract，单人镜可直接粘贴。

- 女主身份以已确认三视图为准；男主以已确认正面与侧面为准。提示词不再用年龄、国籍、脸型、发型或服饰文字重新设计人物。
- 全片固定为 2020 年代中期的现代中国城市。现实线连续发生在同一个雨后冬日傍晚至入夜；回忆线使用同一套参考服装，以保证身份锁定。
- 同一家现代胶片照相馆的外立面、柜台、灰色背景布、双木椅、灯架、暗房门、显影盘与晾片线保持统一。
- 单人镜：女主 Picture 1 / 2 / 3 挂正面、侧面、背面；男主 Picture 1 / 2 / 3 挂正面、侧面、正面（第三张再挂正面作身份锁定，不使用背面）。女主单人镜只挂女主，男主单人镜只挂男主。提示词使用 `<Subject 1>` + `<Picture 1>` `<Picture 2>` `<Picture 3>`。
- 双人镜：必须把工作流 `ref_images` 扩到 6 张。Picture 1–3 女主三视图；Picture 4 男主正面、Picture 5 男主侧面、Picture 6 再挂男主正面。提示词使用 `<Subject 1>` 和 `<Subject 2>`。当前默认工作流只有 3 个图像槽，双人镜生成前先加 3 个 Load Image。
- 现实线若需要冬装，只允许在参考服装外加一件深色羊毛大衣；脱大衣后必须回到参考图原服装。不得用文字改发型或换一套衣服。
- 摄影师不是锁定角色：只允许画外、过肩无头、或画面边缘的手/袖口，禁止正脸和完整第三人。
- 不要让 H3 生成可读汉字。`明年见` 手写字在后期贴到封套上，或用实拍手写道具替换。
- 镜 10、29 为剪辑镜，提示词是剪辑说明，不要送进 `05_ref2va_4step_sla`。
- 每条 H3 提示词都是一条连续镜头：不写匹配切、叠化、4:3 边框或引用其他镜号。回忆构图只要求人物居中留出 4:3 安全区，成片再裁。
- 人物表演克制自然，闭唇，不说话、不唱歌、不对口型。
- 微表情管理：每条 H3 提示词必须在 `detailed_description` 里写清眉、唇、呼吸与**一个持住的眼神**，并与该镜情绪一致。最多一次视线移动、最多一次自然眨眼。禁止空脸、假笑、张嘴演唱、突然大哭，或把后段释然提前到等待/承认之前。禁止 `soft focus on the face`、抹眼、左右扫视。完整写法见 `music-mv/library/h3-prompt-writing.md`。
- 脸糊优先查景别和脸占比，再查提示词：大全景/远景即使提高分辨率也会糊；表情戏用中景或中近景。4-step 正式镜头用约 0.8–1.0MP，不要用 0.5MP 当成品。

## 分镜索引

| 镜号 | 开始 | 结束 | 时长 | 故事阶段 | 歌曲段落/歌词 | 标题 | 画面与动作 | 运镜 | 场景/道具 | 转场/特效 | 声画重点 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | 00:00 | 00:06 | 6 秒 | 开场 | Instrumental Intro | 独自走到照相馆，想走又停 | 女主沿湿人行道走来，在照相馆橱窗前停下，侧身像要离开，又停住，看向店内。 | 16:9 平视大全景，从右向左极慢横移后锁定，无手持晃动。 | 照相馆外街道 | 冷蓝调，玻璃反光 | 第一颗钢琴音建立独行与缺席 |
| 02 | 00:06 | 00:11 | 5 秒 | 开场 | Instrumental Intro | 橱窗倒影里只剩她一个人 | 她从口袋抽出折旧取件单攥紧，几乎侧身离开，又停住；焦点转到玻璃倒影，倒影里只有她，店内映出两把椅子。 | 胸口高度近景，焦点由纸条转到倒影，同时极慢推近约百分之十。 | 橱窗 | 焦点由纸条转向倒影 | 两把椅子对应两人的缺席 |
| 03 | 00:11 | 00:16 | 5 秒 | 开场 | Intro 尾部 | 门铃响在空门口 | 她从门外湿街道推门进屋，门向店内开，铜铃轻晃；她穿过门框走进暖色门厅，把取件单平放在柜台上。画面边缘只见摄影师肩背，不上前。 | 从女主右肩后方跟入，穿过门框后停在柜台侧面中景。 | 照相馆门厅 | 门框遮挡切入暖色 | 门铃落在前奏结束处，无对白 |
| 04 | 00:16 | 00:23 | 7 秒 | 发展 | Verse 1 / “那年的光” | 扶住空椅，回忆被触动 | 先看见两处磨淡的站位标记，右标记几乎消失；女主走到右椅旁，右手轻轻扶正椅背，掌心停在木头上，没有坐下。 | 从地面特写极慢上摇至中全景后微停。 | 拍摄区 | 暖黄钨丝光，无剪辑 | 手触椅背触发回忆 |
| 05 | 00:23 | 00:30 | 7 秒 | 发展 | “两个人靠得很近” | 第一年：来不及摆姿势的亲密 | 两人从画框外匆忙挤进画面，肩膀紧贴，来不及摆姿势就闭唇笑出，她抓着他袖口，笑点不同步。 | 固定全身机位，主体居中并保留4:3安全构图，无推拉摇移。 | 拍摄区回忆 | 胶片颗粒 | 未经排练的亲密 |
| 06 | 00:30 | 00:37 | 7 秒 | 发展 | “你写下明年见” | 第二年：亲密变成互相整理的习惯 | 他侧身用右手把她耳侧碎发拢到耳后；她低头替他拉平左衣袖；两人短暂对视后一起看向镜头。 | 固定中景，主体居中并保留4:3安全构图，无推拉摇移。 | 拍摄区回忆 | 一次自然闪光白帧 | 动作回应早期亲密记忆 |
| 07 | 00:37 | 00:43 | 6 秒 | 发展 | “我们把永远说得轻” | 第三年：肩与肩之间出现细缝 | 两人熟练坐下，脊背挺直，同时给出端正闭唇笑容，双手在膝间交握，但不再转头看对方。 | 固定中景，主体居中并保留4:3安全构图，无推拉摇移。 | 拍摄区回忆 | 饱和度轻降 | 亲密开始变成共同完成的仪式 |
| 08 | 00:43 | 00:49 | 6 秒 | 发展 | “平常的晚安” | 手离开空椅，回到只有自己的现在 | 女主手仍停在空着的右椅椅背上，手指慢慢松开，掌心离开木头，视线落到空座位。 | 中近景极轻微拉远到中景，运动幅度很小。 | 拍摄区 | 回到现实，无边框 | 主歌尾部保留呼吸 |
| 09 | 00:49 | 00:56 | 7 秒 | 发展 | Pre-Chorus 1 / “后来，时间” | 翻相册，两人距离一页页变远 | 女主在柜台缓慢翻一页旧相册。左右页必须是两张不同的双人合照，各坐一把椅，不能同一张复制。翻页后换成新合照，间距从肩贴到礼貌一拳。相纸五官锐利，男主眼睛不糊。 | 垂直俯拍特写，随翻页做极轻横移。 | 柜台 | 翻页作自然擦拭 | 时间以实体页面推进 |
| 10 | 00:56 | 01:03 | 7 秒 | 发展 | “我们，走向两端” | 剪辑：历年距离从紧贴叠到礼貌一拳 | 将镜05、06、07按同一双椅与视线对齐后短叠化，从肩贴到礼貌一拳宽，笑容由自然变为端正。 | 固定双人中景，无新运镜；变化来自剪辑叠化。 | 拍摄区回忆 | 三次短叠化 | 副歌前建立关系变化 |
| 11 | 01:03 | 01:11 | 8 秒 | 发展 | Chorus 1 / “我们离永远” | 最后一年：身体还近，他的目光已经离开 | 两人坐得很近；女主看镜头，闭唇笑容勉强完整；男主在快门前把目光从镜头移向右侧窗外。 | 固定双人中景，主体居中并保留4:3安全构图，轻微慢动作。 | 拍摄区回忆 | 结尾一次闪光 | Hook第一次出现时呈现距离 |
| 12 | 01:11 | 01:19 | 8 秒 | 发展 | “那一句明年见” | 他写下明年见，承诺当时是真的 | 男主右手用黑色钢笔在米黄色封套背面从容写字，落笔稳定；字迹保持失焦或不可读，不生成汉字。 | 手部特写缓慢推近到笔尖与纸面，不推到可读文字。 | 拍摄区回忆 | 墨迹微反光 | 承诺当时真实 |
| 13 | 01:19 | 01:27 | 8 秒 | 发展 | “你没有说谎 / 我也没有食言” | 她穿衣离开，他停笔却没开口 | 前景女主背对镜头穿上大衣、低头扣扣子；后景男主停笔后抬头看她的背影，闭唇，又低头看封套。 | 先固定，再极轻向右横移，露出窗外冷光。 | 拍摄区回忆 | 暖光逐渐偏冷 | 无争吵，只有未说出口的迟疑 |
| 14 | 01:27 | 01:34 | 7 秒 | 发展 | “没带走那一年” | 现在的柜台只剩空取件夹 | 现在同一柜台只剩一只空着的米黄色取件文件夹，封面打开，里面没有照片。画面里始终只有一个女主，站在柜台右侧，双手停在边缘没有去碰文件夹。镜头先给空文件夹特写，再微拉远带出暗房门。 | 近景微拉远，带出柜台与暗房门。 | 柜台 | 现实连续镜头，无匹配切 | 副歌结束回到现在 |
| 15 | 01:34 | 01:42 | 8 秒 | 发展 | Instrumental Break | 暗房门口，显影开始 | 女主侧站在暗房门口向里看，白灯熄灭，红色安全灯亮起；画面内只见操作者的手和夹钳把相纸放入显影盘。 | 稳定跟随女主视线，操作者只见手，不见脸。 | 暗房 | 暖黄转暗红 | 大提琴进入，显影开始 |
| 16 | 01:42 | 01:49 | 7 秒 | 发展 | Instrumental Break | 独自站在两椅之间等待 | 女主站在两椅正中间不坐下。微表情：先空看椅缝，再慢眨眼抬眼向暗房门，最后头转几度停住听液体；不笑不哭。 | 以她为轴极慢环绕约四分之一圈，从正面转到微侧。 | 拍摄区 | 环境压暗，椅子留暖光 | 器乐留白延长等待 |
| 17 | 01:49 | 01:57 | 8 秒 | 转折 | Verse 2 / “旧门铃响” | 从门缝看见当年的距离 | 女主走到半开的暗房门口，先向店门方向侧目一瞥，再向里看；红光只照亮半张脸和一侧耳圈，一次缓慢眨眼。 | 从背后缓慢靠近到过肩中景，推进幅度很小。 | 暗房门口 | 门框画中画 | 第二段更贴近现实 |
| 18 | 01:57 | 02:05 | 8 秒 | 转折 | “最后一张合照 / 慢慢醒来” | 显影盘里浮出最后一张合照 | 从女主侧脸连续下摇到显影盘。空白相纸先浮出两把深色木椅，再显出男女主最后一张合照：两人坐得很近，她看镜头，他目光略偏开。相纸上的人有完整五官，不是没脸的影子。 | 一条连续下摇：侧脸落到显影盘后停住。 | 暗房 | 实拍渐显，无剪辑 | 显影即理解发生 |
| 19 | 02:05 | 02:12 | 7 秒 | 转折 | “目光，却望向窗外” | 手指碰到两人之间的空隙 | 女主右手食指轻触合照里两人之间的空档。合照是干的棚拍：女主穿扣好的深色不透明大衣，男主穿不透明白T，各坐一把木椅，中间一拳空隙。液体只在盘边，不打湿衣服。 | 微距极慢推近。 | 暗房 | 红光局部锐化 | 照片比记忆诚实 |
| 20 | 02:12 | 02:20 | 8 秒 | 转折 | Pre-Chorus 2 / “读完你的字” | 翻到背面，读懂那句话 | 女主把已经干燥的照片翻到背面，手指逐渐收紧，随后抬眼；背面字迹保持失焦不可读，焦点落在她的表情。 | 先看手翻面，再缓慢焦点转到她的脸，不把文字对实。 | 暗房 | 焦点从手转到脸 | 刺痛转向理解 |
| 21 | 02:20 | 02:28 | 8 秒 | 转折 | Chorus 2 / “我们离永远” | 玻璃里只反射出她和空椅 | 女主独自站在照相馆拍摄区的玻璃门前，不举手中照片。画面里只有她一个实体人；玻璃里只反射出她自己和两把空着的深色木椅，椅上没人，走廊里也不再出现第二个她。 | 过肩中近景极慢推近，玻璃里空椅位置稳定。 | 暗房门口 | 可后期低透明度叠入镜11 | 两种真实共存 |
| 22 | 02:28 | 02:36 | 8 秒 | 转折 | “日期困在那个冬天” | 他递出写完的封套 | 字已写完，笔放下。闭唇垂眼看封套，停半拍，再把封套递给画外；全程不写、不张嘴。 | 固定侧机位上半身中景，无推拉。 | 拍摄区回忆 | 取消浪漫柔焦 | 重新观看记忆，意义改变 |
| 23 | 02:36 | 02:43 | 7 秒 | 转折 | “爱没有说谎 / 承诺没有食言” | 一滴泪承认失去，不是控诉 | 眉心先紧、抿唇；一滴细泪沿左脸颊缓慢滑下，她不擦；攥照片的手指渐渐松开，照片恢复平整。 | 完全固定近景，或不超过百分之十的极慢推近，不拉远。 | 暗房门口 | 保留泪光真实反射 | 眼泪是承认，不是控诉 |
| 24 | 02:43 | 02:50 | 7 秒 | 转折 | “才看清那场告别” | 把旧照片收进柜台 | 女主独自站在旧照相馆木柜台前，把男女主坐着的棚拍合照连同封套放到柜面上后松手。柜台上只有旧相机、取件夹和这张照片，没有咖啡机、杯子和酒瓶。 | 中景略俯，始终看见柜面，缓慢拉远。 | 照相馆柜台 | 红光退回暖黄 | 女主开始主动选择 |
| 25 | 02:50 | 02:58 | 8 秒 | 高潮 | Bridge / “相纸留住了光” | 移开空椅，给自己让出位置 | 女主独自站在拍摄区两把空木椅之间。她把右侧空椅拖到画面一侧，自己从头到脚始终留在画里；再把剩下那把椅子推到灰色背景布中央对齐。全程只有她一个人。 | 固定宽景全景，女主从头到脚始终完整可见，不走出画面。 | 拍摄区 | 椅脚声点在稀疏节拍 | 桥段抽空，动作成为选择 |
| 26 | 02:58 | 03:05 | 7 秒 | 高潮 | “何必向结局，道歉” | 独自坐下，准备拍第一张单人照 | 开场已坐，上半身入画。脱大衣后嘴角只抬一两毫米，再花后半段连续卸掉，没有从笑到不笑的突然切换。 | 正面上半身中景，从头不裁切，极慢推近。 | 拍摄区 | 背景变静 | 完成独自拍照决定 |
| 27 | 03:05 | 03:12 | 7 秒 | 高潮 | Final Chorus 前四句 | 相机后方看见她决定只拍自己 | 前景只有胶片相机后背和一只出画的肩；她深呼吸，肩膀下降，双手从交叉改为放松放在膝上，保持不修饰的表情。 | 从相机后方同角度极慢推近。 | 拍摄区 | 无特效 | 最终副歌蓄势 |
| 28 | 03:12 | 03:19 | 7 秒 | 高潮 | “你没有说谎”全编制进入 | 快门白闪，新照片诞生 | 她直视镜头，闭唇；快门按下，闪光灯爆亮，白色吞没画面，短暂残影后定格她的脸。 | 正面近景在闪光前快速推近，随后定格。 | 拍摄区 | 高亮白闪与残影 | 全编制进入，同步闪光 |
| 29 | 03:19 | 03:27 | 8 秒 | 高潮 | “我们用整个从前” | 剪辑：从前叠化退成相纸白 | 将镜05、06、07、11对齐双椅与站位后快速叠化，从紧靠到疏离，最后一次闪光退成相纸白。 | 固定双人中景，变化来自剪辑，无新运镜。 | 拍摄区回忆 | 胶片曝光叠层后退白 | 全部从前回应歌词 |
| 30 | 03:27 | 03:35 | 8 秒 | 高潮 | “如果爱过 / 不算输给时间”升调 | 单人照片在显影盘里浮现 | 显影盘里先出现单椅，再浮出女主独自坐着的轮廓；人脸逐渐可辨但保持相纸质感，全程不切到拍摄区。 | 俯拍特写固定，或极慢推近，一条连续镜头。 | 暗房 | 显影渐显，无匹配切 | 独自出现不是胜利姿态 |
| 31 | 03:35 | 03:42 | 7 秒 | 高潮 | “会照亮，没有你的明天”最高音 | 窗边逆光，带着旧照走向明天 | 她把旧合照放回封套，双手把封套贴在胸口；窗外云层裂开一道窄光，白光落在她脸上，泪光还在但她不躲。 | 从微侧缓慢侧移至逆光轮廓。 | 照相馆窗边 | 柔和真实过曝 | 最高音期间让光停留 |
| 32 | 03:42 | 03:49 | 7 秒 | 结尾 | “只比永远差一天” | 从门里向外走，离开照相馆 | 女主已穿好深色大衣，右手握封套，从照相馆门厅内部背对镜头走向敞开的店门，穿过门框走到雨后湿街上，不回头、不微笑，继续向前走远离开画面。 | 固定机位在门厅内朝向店门，女主背影由近走远穿过门框。 | 照相馆门厅到门外 | 暖色室内与冷色街道自然交界 | 歌名句完整连唱，动作不中断 |
| 33 | 03:49 | 03:51 | 2 秒 | 结尾 | Short Outro | 新照片正面停住，背面空白 | 晾片线上的新照片已正面朝向镜头，女主含泪直视；背面若可见则保持空白，画面缓慢褪为相纸白。 | 极慢推近后静止，画面渐褪为相纸白。 | 暗房晾片区 | 画面褪为相纸白 | 钢琴尾音与远处门铃结束全片 |

## 逐镜提示词

### 01　00:00–00:06　开场　独自走到照相馆，想走又停

- 时长：6 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_01_h3_v04.mp4`
- 景别：女主 · 雨后旧街平视大全景
- 运镜：16:9 平视大全景，从右向左极慢横移后锁定，无手持晃动。
- 场景/道具：照相馆外街道；冬日傍晚刚停雨，湿沥青倒映冷蓝天空与橱窗暖黄灯光；旧招牌、玻璃水珠、店内隐约两把空椅。
- 人物动作：女主沿湿人行道走来，在照相馆橱窗前停下，侧身像要离开，又停住，看向店内。
- 转场/特效：冷蓝调，玻璃反光
- 声画重点：第一颗钢琴音建立独行与缺席
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 6-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - her face stays the same person as <Picture 1> in every frame. <Picture 2> is used only if a mild three-quarter angle appears; do not turn her into a hard 90-degree profile or a back view. Hair, body proportions, ivory T-shirt, denim shorts and white sneakers stay identical to the three reference pictures. A simple dark wool overcoat is only an added outer layer. The face does not morph, slim down, change nose or eyes, or become a different person. The environment, lighting, action and camera movement are generated from this prompt. Do not generate a second person.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 6 seconds, modern Chinese city around 2024, winter dusk just after rain. Wet asphalt, cold blue sky reflections, a small analog photo studio with warm tungsten in the window. Camera: eye-level very wide shot, extremely slow pan from right to left, then lock off; no handheld shake. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. Keep her mostly facing the camera so the face stays readable and sharp: clear eyes, natural skin texture, no beauty-filter slim face, no motion blur on the face, no identity drift. 0.0-3.5s: <Subject 1> walks along the wet sidewalk from deep in the street toward the studio; body and face toward camera, eyes look forward, brows relaxed, lips closed, no smile. 3.5-5.0s: she stops at the window and starts to glance toward the glass as if leaving, but her body stays facing the camera; only a slight head turn, not a full profile. 5.0-6.0s: she stays, looks into the studio through the glass with a mild three-quarter face still matching <Picture 1> and <Picture 2>; eyes rest on two empty wooden chairs faintly visible inside, mouth closed, no smile. Quiet street, no extra pedestrians stealing focus, no vehicle close-up. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet wet street, distant drip, no traffic close-up, no voices.

non_diegetic_music: N/A

### 02　00:06–00:11　开场　橱窗倒影里只剩她一个人

- 时长：5 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_02_h3_v01.mp4`
- 景别：女主 · 取件单与橱窗倒影近景
- 运镜：胸口高度近景，焦点由纸条转到倒影，同时极慢推近约百分之十。
- 场景/道具：橱窗；折痕起毛的取件单、带水珠的橱窗玻璃、暖黄反光、店内双椅与灰色背景布的倒影。
- 人物动作：她从口袋抽出折旧取件单攥紧，几乎侧身离开，又停住；焦点转到玻璃倒影，倒影里只有她，店内映出两把椅子。
- 转场/特效：焦点由纸条转向倒影
- 声画重点：两把椅子对应两人的缺席
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 5-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 5 seconds, same rain-washed winter street and photo-studio window. Camera: chest-height close medium, rack focus from a worn pickup slip to the window reflection, with an extremely slow 10 percent push-in. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. 0.0-2.0s: <Subject 1> pulls a creased paper pickup slip from her overcoat pocket and holds it tight. 2.0-3.5s: she starts to turn away, then stops. 3.5-5.0s: focus lands on the wet glass; her reflection is alone, while two empty studio chairs and a gray backdrop are visible inside. No second person in the reflection. Hands must stay anatomically correct. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
soft paper rustle, quiet street, no voices.

non_diegetic_music: N/A

### 03　00:11–00:16　开场　门铃响在空门口

- 时长：5 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_03_h3_v02.mp4`
- 景别：女主 · 跟入门厅的过肩中景
- 运镜：从女主右肩后方跟入，穿过门框后停在柜台侧面中景。
- 场景/道具：照相馆门厅；旧木门、铜铃、木质柜台、钨丝暖黄室内光与门外冷蓝交界。
- 人物动作：她从门外湿街道推门进屋，门向店内开，铜铃轻晃；她穿过门框走进暖色门厅，把取件单平放在柜台上。画面边缘只见摄影师肩背，不上前。
- 转场/特效：门框遮挡切入暖色
- 声画重点：门铃落在前奏结束处，无对白
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 5-second MV shot of <Subject 1> entering a photo studio from the street, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - identity and face stay identical to <Picture 1> when any front view appears and identical to <Picture 3> from behind. Hair, body proportions, ivory T-shirt, denim shorts and white sneakers stay identical to the three reference pictures. A simple dark wool overcoat is only an added outer layer. The environment, lighting, action and camera movement are generated from this prompt. No photographer face or full body. A second person may appear only as an out-of-focus shoulder or sleeve at the frame edge.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 5 seconds. One continuous enter-from-outside shot. A small analog photo studio in a modern Chinese city, winter dusk just after rain. One single wooden street door with glass panes, hinged on the left when seen from outside. The door opens INWARD into the shop, never outward onto the sidewalk. Warm tungsten lobby and wooden counter inside; cold blue wet street outside. Camera starts OUTSIDE behind <Subject 1>'s right shoulder, then follows her through the doorway and holds a side medium shot at the counter. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. 0.0-1.8s: she is still on the wet sidewalk at the threshold, cold street visible around her; her right or left hand PUSHES the street door inward into the studio; a brass bell above the door moves. She is not already inside. 1.8-3.5s: she steps through the open doorway from the cold street into the warm lobby, walking forward; camera follows from behind her right shoulder; the door stays swinging inward, not out. 3.5-5.0s: she is fully inside, sets a small pickup slip flat on the wooden counter. Do not start with her standing inside facing a closed door. Do not have her open the door from inside. Do not swing the door out onto the street. Do not generate a full extra character. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
soft inward door, faint brass bell, quiet room tone, no dialogue.

non_diegetic_music: N/A

### 04　00:16–00:23　发展　扶住空椅，回忆被触动

- 时长：7 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_04_h3_v01.mp4`
- 景别：女主 · 地面标记特写上摇至拍摄区
- 运镜：从地面特写极慢上摇至中全景后微停。
- 场景/道具：拍摄区；地面旧胶带标记、灰色背景布、两把深色木椅、斜上方钨丝暖光与软阴影。
- 人物动作：先看见两处磨淡的站位标记，右标记几乎消失；女主走到右椅旁，右手轻轻扶正椅背，掌心停在木头上，没有坐下。
- 转场/特效：暖黄钨丝光，无剪辑
- 声画重点：手触椅背触发回忆
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, analog photo-studio shooting bay. Gray backdrop, two dark wooden chairs, worn tape marks on the wooden floor, warm tungsten from above with soft shadows. Camera starts on the floor marks and tilts extremely slowly up to a medium-wide, then holds. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. 0.0-2.5s: two faded standing marks, the right mark almost gone. 2.5-7.0s: <Subject 1> walks to the right chair, steadies the chair back with her right palm, and does not sit. Chairs do not teleport. No 4:3 border, no cut into another time period. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet studio, faint wood contact as her palm rests on the chair.

non_diegetic_music: N/A

### 05　00:23–00:30　发展　第一年：来不及摆姿势的亲密

- 时长：7 秒
- 出镜参考：女主+男主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_05_h3_v01.mp4`
- 景别：女主+男主 · 固定机位第一年全身
- 运镜：固定全身机位，主体居中并保留4:3安全构图，无推拉摇移。
- 场景/道具：拍摄区回忆；同一灰色背景布与同一双深色木椅；人物居中，保留4:3安全构图；轻微胶片颗粒。
- 人物动作：两人从画面两侧最后一步挤到中间，从头顶到鞋都在画内。肩膀紧贴，来不及摆姿势就闭唇笑出，她抓着他袖口，笑点不同步；牙齿不露。
- 转场/特效：胶片颗粒
- 声画重点：未经排练的亲密
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.
<Subject 2> is the same adult man shown from the front in <Picture 4> and <Picture 6>, and from the side in <Picture 5>. There is no rear-view reference. Preserve his identity, face, hair, body proportions and clothing. Do not redesign his appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1> and <Subject 2> in the prompted scene, with her appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>, and his appearance taken only from <Picture 4>, <Picture 5> and <Picture 6>.

retention_analysis:
<Subject 1> is fully preserved from <Picture 1-3>. <Subject 2> is fully preserved from <Picture 4-6>. Do not merge or swap the two identities. The environment, lighting, action and camera movement are generated from this prompt. Keep both people centered in the middle 4:3 of the 16:9 frame. Exact reference outfits, no coats. Both faces and both pairs of sneakers stay fully visible.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, analog studio shooting bay, same gray backdrop and two dark wooden chairs behind them. Locked-off full-body camera from the FIRST FRAME, no pan, tilt, or zoom. Keep both people centered in the middle 4:3 of the frame. Both heads, hair, feet and sneakers fully visible with headroom; never crop either crown or shoes. Exact clothing from the reference pictures, no coats. Emotion: first-year photo, unrehearsed closeness. 0.0-2.0s: <Subject 1> and <Subject 2> take the last hurried step into center from near the frame edges; they are already partly in frame at 0.0s. 2.0-7.0s: they stand shoulder to shoulder, unposed; she holds his sleeve. Micro-expression: small closed-lip smiles out of sync, teeth never visible; her smile arrives a beat later than his; eyes lively but not a bright crescent-eye grin. Mouths stay closed. No kissing. Mild film grain only, no generated frame border. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet studio, faint cloth movement, no voices.

non_diegetic_music: N/A

### 06　00:30–00:37　发展　第二年：亲密变成互相整理的习惯

- 时长：7 秒
- 出镜参考：女主+男主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_06_h3_v01.mp4`
- 景别：女主+男主 · 固定机位第二年中景
- 运镜：固定中景，主体居中并保留4:3安全构图，无推拉摇移。
- 场景/道具：拍摄区回忆；同一灰色背景布与同一双深色木椅；人物居中，保留4:3安全构图。
- 人物动作：第一帧两人已并站入画，头顶可见。他侧身用右手把她耳侧碎发拢到耳后；她低头替他拉平左衣袖；两人短暂对视后一起看向镜头。闭唇、牙齿不露，笑容比第一年更收。结尾一次闪光白帧。
- 转场/特效：一次自然闪光白帧
- 声画重点：动作回应早期亲密记忆
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.
<Subject 2> is the same adult man shown from the front in <Picture 4> and <Picture 6>, and from the side in <Picture 5>. There is no rear-view reference. Preserve his identity, face, hair, body proportions and clothing. Do not redesign his appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1> and <Subject 2> in the prompted scene, with her appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>, and his appearance taken only from <Picture 4>, <Picture 5> and <Picture 6>.

retention_analysis:
<Subject 1> is fully preserved from <Picture 1-3>. <Subject 2> is fully preserved from <Picture 4-6>. Do not merge or swap the two identities. The environment, lighting, action and camera movement are generated from this prompt. Keep both people centered in the middle 4:3 of the 16:9 frame. Exact reference outfits, no coats. Both faces stay fully visible.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, analog studio shooting bay, gray seamless backdrop, two dark brown wooden photo-studio chairs behind them, not black Windsor chairs, not folding chairs. Locked-off medium two-shot from the FIRST FRAME, waist-up, no camera move. Both heads, hair and shoulders fully visible with headroom; never crop either crown. Keep both people centered in the middle 4:3 of the frame. Exact clothing from the reference pictures, no coats. They are already standing close, shoulder to shoulder, at 0.0s. Emotion: second-year photo, still tender, a practiced small care. Micro-expression and action: 0.0-3.0s <Subject 2> turns slightly and gently tucks a wisp of <Subject 1>'s hair behind her ear with his right hand; both mouths closed, small soft closed-lip look, teeth never visible, no bright grin. 3.0-5.5s she looks down and smooths his left sleeve with both hands; eyes lowered, lips sealed. 5.5-6.5s they glance at each other, then look to camera together; small closed-lip smiles, eyes not crescent. 6.5-7.0s one natural photo-flash white frame. No kissing, no readable text. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet studio, soft fabric, one camera flash pop at the end.

non_diegetic_music: N/A

### 07　00:37–00:43　发展　第三年：肩与肩之间出现细缝

- 时长：6 秒
- 出镜参考：女主+男主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_07_h3_v01.mp4`
- 景别：女主+男主 · 固定机位第三年中景
- 运镜：固定中景，主体居中并保留4:3安全构图，无推拉摇移。
- 场景/道具：拍摄区回忆；同一灰色背景布与同一双深色木椅；肩膀之间出现细缝，饱和度轻微降低。
- 人物动作：两人已坐在双椅上，脊背挺直，肩与肩之间留一条细缝，不再转头看对方。微表情：同时给出很小的闭唇端正笑，牙齿不露，眼睛看镜头不看对方；笑容保持仪式感，不要灿烂。双手在膝间交握。
- 转场/特效：饱和度轻降
- 声画重点：亲密开始变成共同完成的仪式
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.
<Subject 2> is the same adult man shown from the front in <Picture 4> and <Picture 6>, and from the side in <Picture 5>. There is no rear-view reference. Preserve his identity, face, hair, body proportions and clothing. Do not redesign his appearance with text.

summary:
[reference generation] one continuous 6-second MV shot of <Subject 1> and <Subject 2> in the prompted scene, with her appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>, and his appearance taken only from <Picture 4>, <Picture 5> and <Picture 6>.

retention_analysis:
<Subject 1> is fully preserved from <Picture 1-3>. <Subject 2> is fully preserved from <Picture 4-6>. Do not merge or swap the two identities. The environment, lighting, action and camera movement are generated from this prompt. Keep both people centered in the middle 4:3 of the 16:9 frame. Exact reference outfits, no coats. Both faces stay fully visible.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 6 seconds, same studio shooting bay, gray backdrop, two dark wooden chairs. Locked-off medium two-shot from the FIRST FRAME, no camera move. Both heads, hair and shoulders fully visible with headroom; never crop either crown. Keep both people centered in the middle 4:3 of the frame. Exact clothing from the reference pictures, no coats. They are already seated side by side at 0.0s. Emotion: the yearly photo has become a practiced ritual; intimacy is thinning. Micro-expression: 0.0-2.0s they settle with straight backs, a thin gap between their shoulders, hands folding in their laps; they do not turn to look at each other. 2.0-6.0s both hold a SMALL closed-lip polite photo smile, teeth never visible, eyes toward the camera not toward each other, eyes stay mostly round, not a bright happy grin, not crescent eyes. Mouths stay closed. No playfulness, no talking, no singing, no lip-sync. Slightly lower saturation. Chairs and backdrop stay fixed. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet studio, faint chair wood, no voices.

non_diegetic_music: N/A

### 08　00:43–00:49　发展　手离开空椅，回到只有自己的现在

- 时长：6 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_08_h3_v01.mp4`
- 景别：女主 · 现实椅背手部中近景
- 运镜：中近景极轻微拉远到中景，运动幅度很小。
- 场景/道具：拍摄区；16:9拍摄区，空椅与她的手成为中心；脸色偏冷。
- 人物动作：女主手仍停在空着的右椅椅背上，手指慢慢松开，掌心离开木头，视线落到空座位。
- 转场/特效：回到现实，无边框
- 声画重点：主歌尾部保留呼吸
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 6-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 6 seconds, present-day studio shooting bay. The empty right chair and her hand are the center. Camera: close medium with an extremely small pull-back to medium. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. <Subject 1> already stands beside the empty right chair. 0.0-4.0s: her right hand rests on the chair back, fingers slowly loosen. 4.0-6.0s: her palm leaves the wood and her gaze drops to the empty seat. She does not sit, does not suddenly cry. No 4:3 border, no cut to memory. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet studio, faint wood as her hand leaves the chair.

non_diegetic_music: N/A

### 09　00:49–00:56　发展　翻相册，两人距离一页页变远

- 时长：7 秒
- 出镜参考：女主、男主（仅出现在相册合照里）
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_09_h3_v03.mp4`
- 景别：女主 · 相册俯拍翻页特写
- 运镜：垂直俯拍特写，随翻页做极轻横移。
- 场景/道具：柜台；旧相册、发黄相纸、木柜台纹理、翻页纸张厚度；左右页不是同一张照片；两人各坐一把深色木椅。
- 人物动作：女主在柜台缓慢翻一页旧相册。左右页必须是两张不同的双人合照，各坐一把椅，不能同一张复制。翻页后换成新合照，间距从肩贴到礼貌一拳。相纸五官锐利，男主眼睛不糊。
- 转场/特效：翻页作自然擦拭
- 声画重点：时间以实体页面推进
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.
<Subject 2> is the same adult man shown from the front in <Picture 4> and <Picture 6>, and from the side in <Picture 5>. There is no rear-view reference. Preserve his identity, face, hair, body proportions and clothing. Do not redesign his appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1> turning an old photo album whose printed pages show several DIFFERENT couple portraits of <Subject 1> and <Subject 2>, with her live appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>, and his appearance taken only from the printed photographs using <Picture 4>, <Picture 5> and <Picture 6>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved as the live woman whose hands turn the album, and also appears inside the printed photographs. <Subject 2> (appears in [Shot 1] only as printed photographs): transferred onto the album prints, never as a live second person in the room. Every printed face stays tack-sharp, especially <Subject 2>'s two eyes: open eyelids, visible irises and pupils, no smear, no motion blur, no closed-eye smear. No readable text. No tablet. No phone.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, wooden counter of a small analog photo studio. Camera: overhead close-up of an old bound album. Keep the album mostly still so printed faces stay in focus; only a tiny lateral drift. If a winter layer is needed on the live woman, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; her hair, face, and the clothes underneath stay identical to the references. The album contains vintage 4:3 studio couple photographs on yellowed paper, gray backdrop. Every print uses TWO separate dark wooden chairs, one person per chair. Never squeeze both people onto one chair. Each print shows <Subject 1> on the left chair and <Subject 2> on the right chair. Faces on every print are tack-sharp studio prints: two eyes, nose and mouth fully visible. <Subject 2>'s eyes stay sharp in every frame, with two distinct pupils, no smeared eye band, no Gaussian blur, no mosaic, no missing eye. Motion blur is allowed only on the turning paper edge, never on faces. CRITICAL: the left page and the right page are two DIFFERENT photographs, not duplicates, not mirrored copies, not the same pose twice. Different sitting distance, different hand positions, different head angles. 0.0-2.5s: first spread. LEFT print: they sit close, shoulders almost touching, both look at camera, small closed-lip smiles. RIGHT print: a clearly different later-year photo, a small visible gap between the two chairs, her hands folded, his hands on his knees, he looks slightly off-camera. These two images must not match. 2.5-4.8s: her right hand turns ONE page. The old spread leaves; a new spread arrives. Do not morph the same photos. 4.8-7.0s: second spread, two NEW photographs, not copies of each other and not copies of the first spread. LEFT: medium gap. RIGHT: polite fist-width gap between them, still clearly a couple portrait. Both still on two separate chairs. No tablet, no phone, no extra screens, no captions. Live hands only: five fingers on each hand, anatomically correct. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
paper pages turning, quiet room tone.

non_diegetic_music: N/A

### 10　00:56–01:03　发展　剪辑：历年距离从紧贴叠到礼貌一拳

- 时长：7 秒
- 出镜参考：剪辑
- 生成类型：剪辑合成，不送进 H3
- 输出视频：`generated/video/raw/shot_10_h3_v02.mp4`
- 景别：剪辑 · 历年双人距离叠化
- 运镜：固定双人中景，无新运镜；变化来自剪辑叠化。
- 场景/道具：拍摄区回忆；同一灰色背景布与同一双深色木椅，4:3安全区居中裁切。
- 人物动作：将镜05、06、07按同一双椅与视线对齐后短叠化，从肩贴到礼貌一拳宽，笑容由自然变为端正。
- 转场/特效：三次短叠化
- 声画重点：副歌前建立关系变化
- 剪辑说明（不要粘贴到 H3）：

COMPOSITE ONLY. Do not paste into 05_ref2va_4step_sla.

sources:
- generated/video/raw/shot_05_h3_v01.mp4
- generated/video/raw/shot_06_h3_v01.mp4
- generated/video/raw/shot_07_h3_v01.mp4

edit:
Align both wooden chairs, the gray backdrop, and eyeline. Center-crop the same 4:3 safe area inside 16:9. Over 7 seconds, make three short dissolves: shot 05 (shoulders touching) to shot 06 (tender adjustment) to shot 07 (polite gap). Do not generate new faces, flashes, or captions.

output:
generated/video/raw/shot_10_h3_v02.mp4

### 11　01:03–01:11　发展　最后一年：身体还近，他的目光已经离开

- 时长：8 秒
- 出镜参考：女主+男主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_11_h3_v02.mp4`
- 景别：女主+男主 · 最后一年双人中景
- 运镜：固定双人中景，主体居中并保留4:3安全构图，轻微慢动作。
- 场景/道具：拍摄区回忆；同一灰色背景布与同一双深色木椅；膝盖几乎相碰但目光方向不同，结尾一次闪光。
- 人物动作：第一帧已并坐入画，头顶可见，膝盖几乎相碰。女主看镜头，只保持很小的闭唇微笑，嘴角微抬，牙齿始终不露，不张嘴、不大笑。男主先看镜头，快门前把目光移向右侧窗外。两人不再对视。结尾一次闪光。
- 转场/特效：结尾一次闪光
- 声画重点：Hook第一次出现时呈现距离
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.
<Subject 2> is the same adult man shown from the front in <Picture 4> and <Picture 6>, and from the side in <Picture 5>. There is no rear-view reference. Preserve his identity, face, hair, body proportions and clothing. Do not redesign his appearance with text.

summary:
[reference generation] one continuous 8-second MV shot of <Subject 1> and <Subject 2> in the prompted scene, with her appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>, and his appearance taken only from <Picture 4>, <Picture 5> and <Picture 6>.

retention_analysis:
<Subject 1> is fully preserved from <Picture 1-3>. <Subject 2> is fully preserved from <Picture 4-6>. Do not merge or swap the two identities. The environment, lighting, action and camera movement are generated from this prompt. Keep both people centered in the middle 4:3 of the 16:9 frame. Exact reference outfits, no coats. Both faces stay fully visible.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds, analog studio shooting bay, gray seamless backdrop, two dark brown wooden photo-studio chairs, not black Windsor chairs, not folding chairs. Locked-off medium two-shot from the FIRST FRAME, waist-up, very slight slow motion, no pan. Both heads, hair and shoulders fully visible with headroom; never crop either crown. Keep both people centered in the middle 4:3 of the frame. Exact clothing from the reference pictures, no coats. They are already seated close at 0.0s, knees almost touching. Emotion: last yearly photo; bodies still close, attention already splitting. Micro-expression: 0.0-5.5s she looks at camera with only a SMALL closed-lip smile, mouth corners lifted 1-2 millimeters, lips fully sealed, teeth never visible, mouth never opens, no laugh, no wide grin, eyes stay mostly round not crescent; he also looks at camera, mouth closed, quieter than hers. 5.5-7.2s just before the shutter he turns his eyes to a window on the right and does not look back; she keeps facing camera, still only the same small closed-lip smile. They do not look at each other. 7.2-8.0s one photography flash white frame. They do not argue or stand up. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet studio, one camera flash pop at the end.

non_diegetic_music: N/A

### 12　01:11–01:19　发展　他写下明年见，承诺当时是真的

- 时长：8 秒
- 出镜参考：男主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_12_h3_v01.mp4`
- 景别：男主 · 钢笔与封套背面特写
- 运镜：手部特写缓慢推近到笔尖与纸面，不推到可读文字。
- 场景/道具：拍摄区回忆；黑色钢笔、未干墨迹微反光、虚化的拍摄区暖光、米黄色封套。
- 人物动作：第一帧就是右手特写：黑色钢笔已落在米黄色封套背面，从容连写，五指完整。字迹始终失焦不可读，不生成汉字、英文或数字。
- 转场/特效：墨迹微反光
- 声画重点：承诺当时真实
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult man shown from the front in <Picture 1> and <Picture 3>, and from the side in <Picture 2>. There is no rear-view reference. Preserve his identity, face, hair, body proportions and clothing. Do not redesign his appearance with text.

summary:
[reference generation] one continuous 8-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. Do not generate readable letters, Chinese characters, or logos. Handwriting stays out of focus. No second person.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds, analog studio, warm tungsten bokeh. Camera: close-up of a right hand from the FIRST FRAME, extremely slow push toward the pen tip and paper, never sharp enough to read writing. Exact white short-sleeve T-shirt from the reference pictures. <Subject 1> is already writing at 0.0s with a black fountain pen on the back of a cream photo envelope. Five anatomically correct fingers, no extra fingers. 0.0-8.0s: stable continuous handwriting motion, no pause, no putting the pen down. Ink may glint, but any marks stay soft and illegible; no Chinese characters, no English letters, no numbers, no logos. Only his right hand, the envelope, and a sliver of white sleeve; if a face appears it stays out of focus in the background. No woman. Closed lips if the mouth is visible, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet pen on paper, room tone, no voices.

non_diegetic_music: N/A

### 13　01:19–01:27　发展　她穿衣离开，他停笔却没开口

- 时长：8 秒
- 出镜参考：女主+男主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_13_h3_v01.mp4`
- 景别：女主+男主 · 穿衣前景与停笔后景
- 运镜：先固定，再极轻向右横移，露出窗外冷光。
- 场景/道具：拍摄区回忆；双层景深同框，无对话；暖光逐渐渗入窗外冷光。
- 人物动作：第一帧前景已是女主背影，后景男主已停笔。她低头把深色羊毛大衣罩在定妆夏装外并扣扣子；他抬头看她的背影，闭唇不笑，再低头看封套。不拥抱、不说话、不张嘴。
- 转场/特效：暖光逐渐偏冷
- 声画重点：无争吵，只有未说出口的迟疑
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.
<Subject 2> is the same adult man shown from the front in <Picture 4> and <Picture 6>, and from the side in <Picture 5>. There is no rear-view reference. Preserve his identity, face, hair, body proportions and clothing. Do not redesign his appearance with text.

summary:
[reference generation] one continuous 8-second MV shot of <Subject 1> and <Subject 2> in the prompted scene, with her appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>, and his appearance taken only from <Picture 4>, <Picture 5> and <Picture 6>.

retention_analysis:
<Subject 1> is fully preserved from <Picture 1-3>. <Subject 2> is fully preserved from <Picture 4-6>. Do not merge or swap the two identities. The environment, lighting, action and camera movement are generated from this prompt. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. His lips stay closed; no mouth movement. She is seen from the back using <Picture 3>.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds, analog studio shooting bay, dual-plane depth of field. Camera holds from the FIRST FRAME, then a tiny pan right to reveal colder window light. At 0.0s both people are already in frame. Foreground, closer to camera: <Subject 1> faces fully away, back of head and long dark hair visible, putting a simple dark wool overcoat ON OVER her exact summer reference outfit, head down fastening buttons. Background, farther and slightly soft: <Subject 2> sits or stands at a table with a cream envelope; the pen is already down, he is not writing. Emotion: unspoken hesitation, no quarrel. Micro-expression: 0.0-3.5s he looks up at her back, lips fully sealed, no smile, no teeth, mouth never opens. 3.5-8.0s he lowers his eyes to the envelope, a tiny swallow, lips stay sealed. She never turns to face camera. No hug, no argument, no speaking mouth shape, no readable text on the envelope. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
soft coat fabric, quiet room, no voices.

non_diegetic_music: N/A

### 14　01:27–01:34　发展　现在的柜台只剩空取件夹

- 时长：7 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_14_h3_v03.mp4`
- 景别：女主 · 现在时柜台空取件夹
- 运镜：近景微拉远，带出柜台与暗房门。
- 场景/道具：柜台；打开的空米黄色取件文件夹占满柜台中央，内页空白；可带金属夹，但主体必须是文件夹；柜台对面空着；远处暗房门缝。照相馆柜台，不是咖啡馆。
- 人物动作：现在同一柜台只剩一只空着的米黄色取件文件夹，封面打开，里面没有照片。画面里始终只有一个女主，站在柜台右侧，双手停在边缘没有去碰文件夹。镜头先给空文件夹特写，再微拉远带出暗房门。
- 转场/特效：现实连续镜头，无匹配切
- 声画重点：副歌结束回到现在
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Those three pictures are three views of ONE person, not three people. Preserve her identity, face, hair, body proportions and clothing. Do not redesign her appearance with text. Do not instantiate her twice.

summary:
[reference generation] one continuous 7-second MV shot of exactly one woman, <Subject 1>, looking at an empty open photo-pickup folder on a wooden photo-studio counter, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved as the only living person in the shot. Exactly one body, one face, one pair of hands. No clone, no twin, no clerk, no man in the background. The hero prop is an empty cream kraft photo folder, clearly visible in every frame. Present day only. No photographs inside the folder. No readable text.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, present-day analog photo studio, NOT a cafe. Wooden counter, tungsten light, a darkroom door with a small round window in the distance. No espresso machine, no coffee cups, no cafe fridge. Camera starts as a tight close-up of the hero prop, then a slow pull-back that includes <Subject 1> and the darkroom door. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references.

HERO PROP, must remain large and readable after pull-back: a cream kraft paper photo-pickup FOLDER lying open in the center of the counter, like an empty document folder / photo envelope sleeve. The folder is open like a book, showing two blank inner pages. Completely empty: no prints, no photographs, no loose paper stack, no clipboard of photos. A small metal clip may sit on the folder flap, but the folder itself is the main object, not a standalone binder clip. No readable Chinese, English or numbers on the folder.

CRITICAL: only ONE person exists in every frame. <Subject 1> stands alone on the RIGHT side of the counter. Both hands rest at the right edge and do not touch the folder. The LEFT side of the counter is vacant wood.

0.0-3.2s: close-up filling the frame with the OPEN EMPTY folder on wood; her two hands visible only at the right edge. 3.2-7.0s: slow pull-back; her face and body appear on the right only; she looks down at the empty open folder, closed lips, quiet, no smile, no tears. Background: analog studio and darkroom door only. No second woman, no man by the door, no extra limbs. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap.

overall_soundscape:
quiet room tone, distant darkroom hush.

non_diegetic_music: N/A

### 15　01:34–01:42　发展　暗房门口，显影开始

- 时长：8 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_15_h3_v01.mp4`
- 景别：女主 · 暗房门口看显影
- 运镜：稳定跟随女主视线，操作者只见手，不见脸。
- 场景/道具：暗房；空间从钨丝暖黄转为克制暗红，显影盘、夹钳、安全灯。
- 人物动作：女主侧站在暗房门口向里看，白灯熄灭，红色安全灯亮起；画面内只见操作者的手和夹钳把相纸放入显影盘。
- 转场/特效：暖黄转暗红
- 声画重点：大提琴进入，显影开始
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 8-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. Operator appears only as hands with a print tong. No photographer face or full body.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds, doorway into a small darkroom. Camera stays with <Subject 1>'s eyeline. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. 0.0-3.0s: she stands in profile at the darkroom door looking in; white work light goes out. 3.0-8.0s: a restrained red safelight comes on. Only anonymous hands and a print tong lower a blank sheet into a developing tray. No operator face, no horror lighting, no extra character identity. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
click of a light, soft liquid, quiet room, no voices.

non_diegetic_music: N/A

### 16　01:42–01:49　发展　独自站在两椅之间等待

- 时长：7 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_16_h3_v01.mp4`
- 景别：女主 · 两椅之间极慢环绕宽景
- 运镜：以她为轴极慢环绕约四分之一圈，从正面转到微侧。
- 场景/道具：拍摄区；环境压暗，双椅仍被一盏暖光打亮；旧相机与灯架在暗处。
- 人物动作：女主独自站在两把椅子正中间，不坐下、不迈步。微表情贴合器乐留白里的等待与收着的不安：0–2秒目光落在两椅之间的空隙，闭唇，面部空而克制；2–4秒一次极慢眨眼，眉心收一毫米，视线抬向暗房门；4–7秒头转几度朝向暗房门后停住听门内液体，浅呼吸落在肩上。不笑、不哭、不张嘴。
- 转场/特效：环境压暗，椅子留暖光
- 声画重点：器乐留白延长等待
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, studio shooting bay. Room falls darker while one warm lamp still hits the two empty chairs. Camera: extremely slow quarter-orbit around <Subject 1>, starting from the front and ending at a slight side angle. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. She stands exactly between the two chairs, feet planted, does not sit, does not step away. Emotion: waiting after Chorus 1, held unease, not crying, not at peace. Micro-expression: 0.0-2.0s eyes rest on the empty gap between the two chairs, lids slightly heavy, lips softly closed, face still and restrained, no smile. 2.0-4.0s one slow blink; gaze lifts toward the darkroom door; inner brows tighten one millimeter as if she hears liquid. 4.0-7.0s head turns a few degrees toward the darkroom door and holds; she listens, swallows once, shoulders drop a few millimeters on a held breath. No tear, no smile, no open mouth, no crying, no singing, no blank doll face. No dancing, no extra people, no sudden camera whip. Closed lips throughout, no speech, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet studio, faint distant liquid from the darkroom.

non_diegetic_music: N/A

### 17　01:49–01:57　转折　从门缝看见当年的距离

- 时长：8 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_17_h3_v01.mp4`
- 景别：女主 · 暗房门框过肩中景
- 运镜：从背后缓慢靠近到过肩中景，推进幅度很小。
- 场景/道具：暗房门口；门框构成画中画，克制暗红安全灯只照亮女主半张脸，另一半留在门厅暗部。
- 人物动作：女主走到半开的暗房门口。微表情仍是克制等待：0–3秒走到门口停住，目光平视门缝，唇闭，眉放松；3–5秒侧目看店门时眼神一闪即收，不惊讶；5–8秒向里看，一次慢眨眼，眉心轻收，不哭不笑。红光只照亮半张脸和一侧耳圈。
- 转场/特效：门框画中画
- 声画重点：第二段更贴近现实
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 8-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds, half-open darkroom doorway. Camera: from behind, a very small slow approach into an over-shoulder medium. The doorframe makes a frame-within-a-frame. Restrained red safelight on one half of her face; the other half stays in hallway shadow. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. Emotion: still waiting, not yet understanding. Micro-expression: 0.0-3.0s <Subject 1> walks to the doorway and stops, eyes level on the door gap, lips closed, brows relaxed, no smile. 3.0-5.0s a brief glance back toward the front door as if remembering the bell; eyes flick and return, no surprise. 5.0-8.0s she looks into the darkroom, one slow blink, inner brows tighten one millimeter. No tears, no smile, no open mouth, no blank doll face, no second person. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet room, a faint remembered bell far away, no voices.

non_diegetic_music: N/A

### 18　01:57–02:05　转折　显影盘里浮出最后一张合照

- 时长：8 秒
- 出镜参考：女主、男主（仅出现在显影合照里）
- 景别：女主 · 侧脸下摇至显影盘
- 运镜：一条连续下摇：侧脸落到显影盘后停住。
- 场景/道具：暗房；暗红安全灯、浅盘显影液、湿相纸从白雾里长出可辨认的双人棚拍合照；店里只有女主一个人。
- 人物动作：从女主侧脸连续下摇到显影盘。空白相纸先浮出两把深色木椅，再显出男女主最后一张合照：两人坐得很近，她看镜头，他目光略偏开。相纸上的人有完整五官，不是没脸的影子。
- 转场/特效：实拍渐显，无剪辑
- 声画重点：显影即理解发生
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Those three pictures are three views of ONE person. Preserve her identity, face, hair, body proportions and clothing. Do not redesign her appearance with text.
<Subject 2> is the same adult man shown from the front in <Picture 4> and <Picture 6>, and from the side in <Picture 5>. There is no rear-view reference. Preserve his identity, face, hair, body proportions and clothing. Do not redesign his appearance with text.

summary:
[reference generation] one continuous 8-second MV shot of <Subject 1> watching the last couple photograph of <Subject 1> and <Subject 2> develop in a tray, with her live appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>, and his appearance taken only from the wet print using <Picture 4>, <Picture 5> and <Picture 6>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved as the live woman leaning over the tray, and also appears inside the developing print. <Subject 2> (appears in [Shot 1] only as the developing print): transferred onto the wet photograph, never as a live second person in the darkroom. By the end of the shot the printed faces are complete and recognizable, with two eyes, nose and mouth. No smeared faces. No faceless silhouettes. No readable text.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds, analog darkroom, restrained red safelight. Camera: one continuous move, starting on <Subject 1>'s profile as she leans in, then tilting down to a metal developing tray and holding. If a winter layer is needed on the live woman, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; her hair, face, and the clothes underneath stay identical to the references. Live room: exactly one person, <Subject 1>. No clerk, no man standing in the room.

The print in the tray is a vintage 4:3 studio couple photograph: gray backdrop, TWO separate dark wooden studio chairs, not folding chairs. Each person sits on their own chair. The couple on the print wear the exact reference outfits, not long coats. This is the last-year sitting: bodies close, a small polite gap between them. Printed <Subject 1> looks toward camera with a small closed-lip smile. Printed <Subject 2> looks slightly off to the side, not at her. Faces on the print must become real faces, not blobs, not headless coats, not empty chairs only.

0.0-2.5s: live <Subject 1> in profile looking down, closed lips, quiet, no smile, no tears. 2.5-5.0s: camera holds on the tray; a blank wet sheet first shows two wooden chairs, then two seated bodies forming like analog development in liquid, not a digital glitch. 5.0-8.0s: the last couple portrait finishes developing: both faces readable, two eyes each, no smeared eye band, no missing heads. Still only one live woman in the room. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
soft liquid in the tray, quiet breathing, no voices.

non_diegetic_music: N/A

### 19　02:05–02:12　转折　手指碰到两人之间的空隙

- 时长：7 秒
- 出镜参考：女主、男主（仅出现在湿相纸合照里）
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_19_h3_v04.mp4`
- 景别：女主 · 触碰湿相纸空隙
- 运镜：微距极慢推近。
- 场景/道具：暗房；暗红安全灯、金属显影盘、干燥的着装双人合照；画面中心是两人椅臂之间的空隙和点上去的食指。
- 人物动作：女主右手食指轻触合照里两人之间的空档。合照是干的棚拍：女主穿扣好的深色不透明大衣，男主穿不透明白T，各坐一把木椅，中间一拳空隙。液体只在盘边，不打湿衣服。
- 转场/特效：红光局部锐化
- 声画重点：照片比记忆诚实
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Those three pictures are three views of ONE person. Preserve her identity, face, hair, body proportions and clothing. Do not redesign her appearance with text.
<Subject 2> is the same adult man shown from the front in <Picture 4> and <Picture 6>, and from the side in <Picture 5>. There is no rear-view reference. Preserve his identity, face, hair, body proportions and clothing. Do not redesign his appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1>'s index finger touching the empty space between a dry, fully clothed couple portrait of <Subject 1> and <Subject 2> in a developing tray, with her live appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>, and his appearance taken only from the print using <Picture 4>, <Picture 5> and <Picture 6>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved as the live right hand, and also appears inside the photograph wearing a fully buttoned opaque dark wool overcoat that covers the entire torso. <Subject 2> (appears in [Shot 1] only as the photograph): transferred onto the print in an opaque white T-shirt, never live in the room. Printed garments stay thick and opaque. No sheer fabric. No wet T-shirt. No extra fingers. No readable text.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, analog darkroom, restrained red safelight. Camera: overhead close-up of a metal tray, extremely slow push-in toward the empty space between two seated people. A dry studio photograph lies in the tray: gray backdrop, two dark wooden chairs, a clear fist-width gap of empty gray backdrop between the inner chair arms. Printed <Subject 1> sits LEFT in a fully buttoned opaque dark wool overcoat over her reference clothes; the coat covers neck to mid-thigh, fabric thick, no transparency. Printed <Subject 2> sits RIGHT in an opaque white T-shirt and khaki shorts. Both faces complete. Developer liquid stays around the paper edges in the tray only; do not paint water droplets over their clothes.

Live action: one right hand of <Subject 1> from the bottom of frame, five fingers. The index fingertip lightly touches the EMPTY GRAY GAP between the two people, at chair-arm height, not on a body. 0.0-2.5s: the clothed couple and the gap are already visible. 2.5-7.0s: the fingertip rests on that gap while the camera creeps closer. No second live person. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
very quiet liquid, fingertip on paper.

non_diegetic_music: N/A

### 20　02:12–02:20　转折　翻到背面，读懂那句话

- 时长：8 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_20_h3_v01.mp4`
- 景别：女主 · 翻看照片背面近景
- 运镜：先看手翻面，再缓慢焦点转到她的脸，不把文字对实。
- 场景/道具：暗房；照片背面与女主微蹙的眉心；暗房红光与门厅暖光自然交界。
- 人物动作：女主把已经干燥的照片翻到背面，手指逐渐收紧，随后抬眼；背面字迹保持失焦不可读，焦点落在她的表情。
- 转场/特效：焦点从手转到脸
- 声画重点：刺痛转向理解
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 8-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. Any handwriting stays out of focus. No readable Chinese or other letters.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds, darkroom doorway. Camera: close medium, focus moves from her hands to her face, never to sharp text. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. 0.0-3.5s: <Subject 1> turns a dried print over. 3.5-6.0s: her fingers tighten on the paper. 6.0-8.0s: she lifts her eyes; brow slightly drawn. Marks on the back stay illegible and soft. No crying out, no captions, no extra person. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
soft paper turn, quiet room, no voices.

non_diegetic_music: N/A

### 21　02:20–02:28　转折　玻璃里只反射出她和空椅

- 时长：8 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_21_h3_v02.mp4`
- 景别：女主 · 过肩看玻璃里的空椅
- 运镜：过肩中近景极慢推近，玻璃里空椅位置稳定。
- 场景/道具：暗房门口；拍摄区玻璃门、灰色背景布、两把空木椅；门厅暖光；反射克制真实，不是鬼影叠人。
- 人物动作：女主独自站在照相馆拍摄区的玻璃门前，不举手中照片。画面里只有她一个实体人；玻璃里只反射出她自己和两把空着的深色木椅，椅上没人，走廊里也不再出现第二个她。
- 转场/特效：可后期低透明度叠入镜11
- 声画重点：两种真实共存
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Those three pictures are three views of ONE person, not three people. Preserve her identity, face, hair, body proportions and clothing. Do not redesign her appearance with text. Do not instantiate her twice.

summary:
[reference generation] one continuous 8-second MV shot of exactly one woman, <Subject 1>, standing at a glass studio door whose reflection shows only herself and two empty chairs, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved as the only living person. Exactly one body. The glass may show one mirror reflection of that same body, which is not a second person. Two empty wooden studio chairs, nobody sitting, nobody standing between them. Do not spawn the three reference views as three faces or as extra women. No photograph of faces in her hands. No hallway clone.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds, analog photo studio shooting bay, not a hotel corridor. Camera: over her left shoulder, close medium, extremely slow push-in toward a glass door. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references.

CRITICAL: exactly ONE living woman in every frame. She stands with empty hands; she does NOT hold a print, does NOT hold a collage of three faces. Through the glass: a gray studio backdrop and TWO empty dark wooden chairs, seats vacant. A faint single reflection of her own face may appear on the glass, matching her real position, one reflection only. No second woman walking the hallway, no woman standing between the chairs, no ghost, no extra identity.

0.0-4.0s: over-shoulder, she looks at the empty chairs in the glass, closed lips, quiet, no smile, no tears. 4.0-8.0s: tiny push-in; the chairs stay empty; still only her and her one reflection. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet room tone, faint glass, no voices.

non_diegetic_music: N/A

### 22　02:28–02:36　转折　他递出写完的封套

- 时长：8 秒
- 出镜参考：男主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_22_h3_v02.mp4`
- 景别：男主 · 侧面递封套中景
- 运镜：固定侧机位上半身中景，第一帧就看到头和肩，无推拉。
- 场景/道具：拍摄区回忆；米黄色封套和真实纸张反光；笔已放下，不再碰到纸；不使用浪漫柔焦；封套背面字迹不可读。
- 人物动作：这一镜开始前字已经写完。0–2.5秒闭唇垂眼看手里的封套，笔放在一边，不写。2.5–4秒停住，喉结轻动，仍然闭唇。4–8秒抬眼看向画外，把封套递出去；嘴唇全程闭合，不说话、不唱歌、不张嘴。没有歉意也没有得意。
- 转场/特效：取消浪漫柔焦
- 声画重点：重新观看记忆，意义改变
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult man shown from the front in <Picture 1> and <Picture 3>, and from the side in <Picture 2>. There is no rear-view reference. Preserve his identity, face, hair, body proportions and clothing. Do not redesign his appearance with text.

summary:
[reference generation] one continuous 8-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. Do not add a second person into the frame. No readable text on the envelope. He is not writing in this shot.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds, studio shooting bay. Locked-off exact left-side medium, waist-up from the FIRST FRAME. Head, hair and shoulders fully visible with headroom; never crop the crown. No push, no orbit. Exact clothing from the reference pictures, no romantic soft focus. The writing is already finished before this shot starts. A black pen rests aside and never touches the paper. <Subject 1> holds a finished cream envelope. Emotion: he meant the promise; he is handing it over, not explaining it. Micro-expression and action: 0.0-2.5s he looks down at the envelope, calm, lips fully closed and sealed, mouth corners neutral, no writing motion. 2.5-4.0s he pauses, a tiny swallow, brows still, lips stay sealed. 4.0-8.0s he lifts his eyes toward off-screen and extends the envelope forward with one or both hands, offering it to someone out of frame; lips remain fully closed the whole time. Mouth never opens. No talking, no singing, no lip-sync, no grin, no teeth. Envelope back stays blank or illegible; no Chinese characters. No woman enters the frame. No pen-to-paper. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet paper, room tone, no voices.

non_diegetic_music: N/A

### 23　02:36–02:43　转折　一滴泪承认失去，不是控诉

- 时长：7 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_23_h3_v01.mp4`
- 景别：女主 · 脸部固定近景
- 运镜：完全固定近景，或不超过百分之十的极慢推近，不拉远。
- 场景/道具：暗房门口；泪光真实细薄，皮肤与眼部细节自然，不夸张。
- 人物动作：眉心先紧、抿唇；一滴细泪沿左脸颊缓慢滑下，她不擦；攥照片的手指渐渐松开，照片恢复平整。
- 转场/特效：保留泪光真实反射
- 声画重点：眼泪是承认，不是控诉
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. Only one thin tear. Do not generate a second person.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, darkroom doorway close-up. Camera locked, or at most a 10 percent slow push-in, never pulling back. If a winter layer is needed, it is only a simple dark wool overcoat worn OVER the exact outfit from the reference pictures; hair, face, and the clothes underneath stay identical to the references. 0.0-2.5s: <Subject 1>'s brow tightens, lips pressed closed. 2.5-5.5s: one thin tear slides down her left cheek; she does not wipe it. 5.5-7.0s: fingers holding the print loosen and the paper flattens. Only one tear, no sobbing, no twin thick tears, no mouth opening. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
very quiet room, no voices.

non_diegetic_music: N/A

### 24　02:43–02:50　转折　把旧照片收进柜台

- 时长：7 秒
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_24_h3_v04.mp4`
- 出镜参考：女主、男主（仅出现在柜台上的合照里）
- 景别：女主 · 柜台收起照片
- 运镜：中景略俯，始终看见柜面，缓慢拉远。
- 场景/道具：照相馆柜台；模拟照相馆接待柜台：钨丝暖光、深色木台、老式相机、金属取件夹、远处灰色背景布或暗房门。禁止咖啡机、咖啡杯、酒瓶和咖啡馆陈设。
- 人物动作：女主独自站在旧照相馆木柜台前，把男女主坐着的棚拍合照连同封套放到柜面上后松手。柜台上只有旧相机、取件夹和这张照片，没有咖啡机、杯子和酒瓶。
- 转场/特效：红光退回暖黄
- 声画重点：女主开始主动选择
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Those three pictures are three views of ONE person. Preserve her identity. Do not instantiate her twice. She has one torso and one dark coat.
<Subject 2> is the same adult man shown from the front in <Picture 4> and <Picture 6>, and from the side in <Picture 5>. There is no rear-view reference. Preserve his identity.

summary:
[reference generation] one continuous 7-second MV shot of exactly one live woman placing a seated couple photograph of <Subject 1> and <Subject 2> onto the wooden pickup counter of a Chinese analog photo studio.

retention_analysis:
<Subject 1> fully_preserved as the only living person; also on the print. <Subject 2> only on the print, seated. Location: analog photo studio 照相馆 pickup counter. Forbidden: cafe, espresso machine, coffee grinder, coffee cups, wine bottles, tableware, second coat, second live body.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds. LOCATION: the reception / pickup counter of a small analog photography studio (照相馆), like a neighborhood film-photo shop. Warm tungsten practicals. Dark wooden counter. Background: gray seamless studio backdrop or a darkroom door, photo drying clips, maybe one old enlarger. Allowed objects on the wood: one vintage analog camera, a few metal bulldog clips, the cream envelope. The rest of the counter is empty. Forbidden objects: espresso machine, coffee grinder, coffee cups, mugs, saucers, wine bottles, liquor, cafe syrup, bar tools. This is not a cafe and not a coffee bar. Camera: slightly high medium, countertop always visible, slow pull-back. Live <Subject 1> wears a dark wool overcoat over the exact reference outfit. Exactly one live body from first frame to last; never two identical coats side by side.

The print is a 4:3 studio couple portrait on gray backdrop. Printed <Subject 1> SITS on the left wooden chair in an opaque dark coat. Printed <Subject 2> SITS on the right wooden chair in an opaque white T-shirt and khaki shorts. They are sitting ON the chairs, not standing between empty chairs. Faces complete, two people only.

0.0-1.8s: one woman holds the envelope and couple print above the wood. 1.8-4.5s: she lays it on the counter and slides it forward. 4.5-7.0s: her hands leave; the couple print stays on the wood; she remains one person behind the counter. Closed lips, no smile, no speech. Photoreal live-action. Single continuous shot, no captions, no watermark, no extra limbs.

overall_soundscape:
paper on wood, quiet studio.

non_diegetic_music: N/A

### 25　02:50–02:58　高潮　移开空椅，给自己让出位置

- 时长：8 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_25_h3_v02.mp4`
- 景别：女主 · 拍摄区固定全景移椅
- 运镜：固定宽景全景，女主从头到脚始终完整可见，不走出画面。
- 场景/道具：拍摄区；照相馆拍摄区：灰色背景布、两把深色木椅变成一把居中的单椅；钨丝灯；没有镜子里的第二个人，没有画面边缘伸进来的手。
- 人物动作：女主独自站在拍摄区两把空木椅之间。她把右侧空椅拖到画面一侧，自己从头到脚始终留在画里；再把剩下那把椅子推到灰色背景布中央对齐。全程只有她一个人。
- 转场/特效：椅脚声点在稀疏节拍
- 声画重点：桥段抽空，动作成为选择
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Those three pictures are three views of ONE person. Preserve her identity. Do not instantiate her twice. She has one body and one dark coat.

summary:
[reference generation] one continuous 8-second MV shot of exactly one live woman, <Subject 1>, dragging an empty wooden chair aside and centering the remaining chair in front of a gray studio backdrop, staying fully visible the whole time.

retention_analysis:
<Subject 1> fully_preserved as the only living person from first frame to last. Forbidden: a second woman, a clone, an extra arm at the frame edge, a photographer, a person in a mirror, her leaving the frame and popping back.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds. Analog photo studio shooting bay. Gray seamless backdrop. Warm tungsten. Wood floor. Two dark wooden chairs in front of the backdrop. No full-length mirror. No espresso machine. Locked-off wide shot. Live <Subject 1> wears a dark wool overcoat over the exact reference outfit. Exactly one live body. Her head, torso, legs and feet stay inside the frame for all 8 seconds; she never walks out.

0.0-2.0s: she stands between two empty wooden chairs, closed lips, quiet, no smile, looking at the empty chair on her right. 2.0-5.0s: she drags that right-hand empty chair toward the right side of the set but remains fully visible; the chair slides on the wood, it does not teleport. 5.0-8.0s: she pushes the remaining chair to the center of the gray backdrop and stands beside it. End: one woman, one centered chair, the other chair parked at the side still in frame. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action. Single continuous shot, no captions, no watermark, no extra limbs.

overall_soundscape:
chair legs on wood, quiet studio.

non_diegetic_music: N/A

### 26　02:58–03:05　高潮　独自坐下，准备拍第一张单人照

- 时长：7 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_26_h3_v04.mp4`
- 景别：女主 · 正面坐姿上半身中景极慢推近
- 运镜：正面上半身中景，第一帧就看到头、肩、胸，头顶留空间，极慢推近，全程不裁切头顶。
- 场景/道具：拍摄区；中央单椅与灰色背景布保持固定；疲惫、难过与平静同时留在表情里。
- 人物动作：开场已坐在中央单椅上。0–2秒把大衣从肩上褪下搭到画外，唇闭不笑。2–3秒嘴角只抬一两毫米，牙齿不露，眼睛保持圆形、不弯。3–7秒这点嘴角在剩余时间里连续往回收，每一瞬间都比前一瞬更少一点笑意，直到疲惫、难过与平静；禁止从笑脸突然切到不笑。
- 转场/特效：背景变静
- 声画重点：完成独自拍照决定
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. After the coat is removed, clothing must match the reference pictures exactly. No second chair. Framing stays waist-up with the full head visible. The face changes continuously; there is no sudden snap from smiling to not smiling.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, studio shooting bay, one centered chair, gray backdrop. Camera: frontal waist-up medium from the FIRST FRAME. Head, hair, shoulders and chest are fully visible with headroom above the hair. Never crop the crown, forehead or chin. Do not start on legs, shorts, or a headless torso. Extremely slow push-in; the frame stays upper-body for the whole shot. <Subject 1> is already seated on the center chair at 0.0s. 0.0-2.0s: she slips a dark wool overcoat off her shoulders and sets it off-frame; outfit underneath matches <Picture 1-3> exactly; eyes quiet, lips closed, mouth corners neutral, no smile. 2.0-3.0s: mouth corners lift only one or two millimeters, a faint closed-lip hint, teeth never visible, eyes stay round, no crescent eyes, cheeks do not lift. 3.0-7.0s: ONE continuous facial morph lasting four seconds: those mouth corners ease back down through every moment, each instant slightly less smile than the last, until tiredness, sadness and calm remain; she looks straight into the lens, no tear. Do not hold a big smile. Do not jump from a smiling face to a neutral face. No two discrete expressions, no snap change, no grin, no bright happy smile, no laughing, no victory smile, no sudden sobbing, no blank doll face. Closed lips throughout, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
soft coat fabric, quiet room, no voices.

non_diegetic_music: N/A

### 27　03:05–03:12　高潮　相机后方看见她决定只拍自己

- 时长：7 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_27_h3_v01.mp4`
- 景别：女主 · 相机后方越肩缓推
- 运镜：从相机后方同角度极慢推近。
- 场景/道具：拍摄区；胶片相机、测光表、中央单椅和窗框位置稳定；全镜无闪光。
- 人物动作：第一帧已坐在中央单椅，头顶入画；前景只有胶片相机后背和一只出画、无头的肩。不穿大衣。微表情：0–3秒吸气后肩落下，目光定在镜头，唇闭，不笑；3–7秒双手从交叉改为放在膝上，表情不修饰，眉眼保持承认后的平静，不哭不唱。
- 转场/特效：无特效
- 声画重点：最终副歌蓄势
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. Foreground may include a camera back and an anonymous shoulder with no head. No second person. No coat. No flash.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, studio shooting bay. Camera: from behind a film camera, extremely slow push-in on the same axis, no orbit. Seated medium from the FIRST FRAME: her head, hair and shoulders fully visible with headroom; never crop the crown. Foreground only: analog film-camera back and one anonymous right shoulder with no head, no face, no second identity. <Subject 1> is already seated on the single center wooden chair at 0.0s, exact summer outfit from the reference pictures, no overcoat. Emotion: she has decided to be photographed alone; quiet after accepting the loss. Micro-expression: 0.0-3.0s she inhales, shoulders drop, eyes hold the camera lens, brows still, lips fully closed and sealed, mouth corners neutral, no smile, eyes not crescent. 3.0-7.0s her crossed arms slowly open and her hands rest on her knees; face stays unstyled and calm, brows still, no tear, no grin, no singing mouth. Mouth never opens. No flash in this shot. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet room, one breath, no voices.

non_diegetic_music: N/A

### 28　03:12–03:19　高潮　快门白闪，新照片诞生

- 时长：7 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_28_h3_v01.mp4`
- 景别：女主 · 正面近景快推至白闪
- 运镜：正面近景在闪光前快速推近，随后定格。
- 场景/道具：拍摄区；中央单椅和闪光灯位置稳定；这是全片最明亮的一次真实曝光。
- 人物动作：她直视镜头，闭唇；快门按下，闪光灯爆亮，白色吞没画面，短暂残影后定格她的脸。
- 转场/特效：高亮白闪与残影
- 声画重点：全编制进入，同步闪光
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. No red-eye, no facial morph, no particle effects.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, studio shooting bay, center chair. Camera: frontal close-up that pushes in quickly just before the flash, then holds. <Subject 1> looks into the lens, lips closed, exact reference outfit. 0.0-5.0s: steady gaze, small breath. 5.0-7.0s: shutter, a real photography flash, white fills the frame, a brief afterimage, then her face holds. No red-eye, no face morph, no particle light effects. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
camera shutter and flash pop, no voices.

non_diegetic_music: N/A

### 29　03:19–03:27　高潮　剪辑：从前叠化退成相纸白

- 时长：8 秒
- 出镜参考：剪辑
- 生成类型：剪辑合成，不送进 H3
- 输出视频：`generated/video/raw/shot_29_h3_v02.mp4`
- 景别：剪辑 · 历年合照叠化退白
- 运镜：固定双人中景，变化来自剪辑，无新运镜。
- 场景/道具：拍摄区回忆；同一灰色背景布、同一双椅和同一站位始终对齐；胶片颗粒与真实曝光层次。
- 人物动作：将镜05、06、07、11对齐双椅与站位后快速叠化，从紧靠到疏离，最后一次闪光退成相纸白。
- 转场/特效：胶片曝光叠层后退白
- 声画重点：全部从前回应歌词
- 剪辑说明（不要粘贴到 H3）：

COMPOSITE ONLY. Do not paste into 05_ref2va_4step_sla.

sources:
- generated/video/raw/shot_05_h3_v01.mp4
- generated/video/raw/shot_06_h3_v01.mp4
- generated/video/raw/shot_07_h3_v01.mp4
- generated/video/raw/shot_11_h3_v02.mp4

edit:
Align both chairs, standing marks, and the gray backdrop. Center-crop the same 4:3 safe area. Over 8 seconds, rapidly dissolve 05 to 06 to 07 to 11, then flash-fade to photopaper white. Do not generate a new H3 take, new faces, or quarrel footage.

output:
generated/video/raw/shot_29_h3_v02.mp4

### 30　03:27–03:35　高潮　单人照片在显影盘里浮现

- 时长：8 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_30_h3_v01.mp4`
- 景别：女主 · 新单人照片显影
- 运镜：俯拍特写固定，或极慢推近，一条连续镜头。
- 场景/道具：暗房；暗红安全灯、浅盘液体；新照片里没有第二个人。
- 人物动作：显影盘里先出现单椅，再浮出女主独自坐着的轮廓；人脸逐渐可辨但保持相纸质感，全程不切到拍摄区。
- 转场/特效：显影渐显，无匹配切
- 声画重点：独自出现不是胜利姿态
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 8-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. The emerging print may show <Subject 1> alone. No man in the new photograph. No match cut to another room.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 8 seconds, darkroom developing tray, restrained red safelight. Camera: overhead close-up, locked or with a tiny push-in, one continuous shot. 0.0-3.0s: a blank sheet in liquid. 3.0-5.5s: a single chair appears. 5.5-8.0s: <Subject 1> sitting alone fades in as an analog print; she is recognizable but stays photographic, not a live body climbing out of the tray. No second person in the print, no cut to the shooting bay, no digital glitch. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
soft liquid, quiet darkroom, no voices.

non_diegetic_music: N/A

### 31　03:35–03:42　高潮　窗边逆光，带着旧照走向明天

- 时长：7 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_31_h3_v01.mp4`
- 景别：女主 · 窗边中近景侧移至逆光
- 运镜：从微侧缓慢侧移至逆光轮廓。
- 场景/道具：照相馆窗边；冬日窗光与泪光同在；柔和真实过曝，不要光斑特效。
- 人物动作：她把旧合照放回封套，双手把封套贴在胸口；窗外云层裂开一道窄光，白光落在她脸上，泪光还在但她不躲。
- 转场/特效：柔和真实过曝
- 声画重点：最高音期间让光停留
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 7-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. After the coat was removed, clothing matches the reference pictures. Light comes from the real window only.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds, beside the studio window. Camera: from a slight side angle, slow lateral move into backlight. <Subject 1> wears the exact reference outfit, no coat. 0.0-3.0s: she slides the old print back into the envelope. 3.0-7.0s: both hands hold the envelope to her chest; a narrow band of winter daylight breaks through clouds and lands on her face. A thin tear catch remains; she does not look away. Real window light only, no halo, no lens-flare stickers, no wind-machine hair. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
quiet room, distant outside air, no voices.

non_diegetic_music: N/A

### 32　03:42–03:49　结尾　从门里向外走，离开照相馆

- 时长：7 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_32_h3_v02.mp4`
- 景别：女主 · 门内向外固定全身背影
- 运镜：固定机位在门厅内朝向店门，女主背影由近走远穿过门框。
- 场景/道具：照相馆门厅到门外；机位在店内朝外：近处是钨丝暖黄的照相馆门厅和旧木门框，门外是冷蓝湿街、旧招牌。人由近走远。
- 人物动作：女主已穿好深色大衣，右手握封套，从照相馆门厅内部背对镜头走向敞开的店门，穿过门框走到雨后湿街上，不回头、不微笑，继续向前走远离开画面。
- 转场/特效：暖色室内与冷色街道自然交界
- 声画重点：歌名句完整连唱，动作不中断
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Those three pictures are three views of ONE person. Preserve her identity. Do not instantiate her twice.

summary:
[reference generation] one continuous 7-second MV shot of exactly one live woman walking OUT of an analog photo studio through the front door onto a wet street, seen from behind inside the lobby.

retention_analysis:
<Subject 1> fully_preserved as the only living person. She starts INSIDE the studio. She walks AWAY from camera, through the doorway, onto the street. Forbidden: walking toward camera, entering from the street, putting a coat on in the doorway, smiling, looking back, a cafe interior.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 7 seconds. EXIT shot, not an entrance. Small analog photo studio (照相馆) in a modern Chinese city, winter dusk just after rain. Camera is LOCKED INSIDE the warm tungsten lobby, looking OUT through the open wooden street door. The wet cold-blue street is visible beyond the doorframe. No restaurant tables, no espresso machine. Exactly one live body.

She already wears a dark wool overcoat OVER the exact reference outfit. Cream photo envelope in her right hand. Coat is already on; she does not put it on during the shot.

0.0-1.5s: she stands INSIDE the lobby in the foreground, BACK TO CAMERA matching <Picture 3>, facing the open doorway. Warm interior around her. She is not on the street. Closed lips, no smile.
1.5-4.5s: she walks away from camera through the wooden doorframe, across the threshold onto the wet sidewalk. A brass bell above the door moves. Complete walk cycle. She recedes from near to far.
4.5-7.0s: she continues down the rain-washed street away from camera, getting smaller, does not look back, does not smile, then walks out of frame or recedes into the street. The camera stays inside. The doorway still frames the wet street.

Do not start with her already on the street. Do not have her walk toward the camera. Do not have her enter the shop. Photoreal live-action. Single continuous shot, no captions, no watermark, no extra limbs.

overall_soundscape:
brass bell, footsteps on wet pavement, quiet street.

non_diegetic_music: N/A

### 33　03:49–03:51　结尾　新照片正面停住，背面空白

- 时长：2 秒
- 出镜参考：女主
- 生成类型：H3 角色参考图生视频
- 输出视频：`generated/video/raw/shot_33_h3_v01.mp4`
- 景别：女主 · 新照片正面停住后褪白
- 运镜：极慢推近后静止，画面渐褪为相纸白。
- 场景/道具：暗房晾片区；晾片夹、细线、相纸白；新照片没有文字。
- 人物动作：晾片线上的新照片已正面朝向镜头，女主含泪直视；背面若可见则保持空白，画面缓慢褪为相纸白。
- 转场/特效：画面褪为相纸白
- 声画重点：钢琴尾音与远处门铃结束全片
- H3 reference contract（可直接复制到 `05_ref2va_4step_sla`）：

subject_definitions:
<Subject 1> is the same adult woman shown from the front in <Picture 1>, from the side in <Picture 2>, and from the back in <Picture 3>. Preserve her identity, face, hair, body proportions and clothing across all views. Do not redesign her appearance with text.

summary:
[reference generation] one continuous 2-second MV shot of <Subject 1> in the prompted scene, with appearance taken only from <Picture 1>, <Picture 2> and <Picture 3>.

retention_analysis:
<Subject 1> is fully preserved from all three reference views. The environment, lighting, action and camera movement are generated from this prompt. The new print shows <Subject 1> alone. No text on the print. No photo flip.

detailed_description:
[Shot 1] Photoreal cinematic MV, 16:9, 2 seconds, darkroom drying line. Camera: tiny push then hold, then fade toward photopaper white. A new print already faces camera on a wooden clip and string. The print shows <Subject 1> sitting alone, tearlight in her eyes, looking at camera. If the back edge is visible it is blank. No rotation, no handwriting, no second person. A hand may appear only as a clip, never a face. Closed lips, no speech, no singing, no lip-sync. Photoreal live-action, natural skin, real materials, coherent light. Single continuous shot, no cut, no dissolve, no captions, no watermark, no border, no anime, no plastic skin, no identity swap, no extra limbs.

overall_soundscape:
distant brass bell, quiet room, no voices.

non_diegetic_music: N/A

## 生成清单

### 需要准备的参考图

- 女主：正面 `femaleLead_front.png`（v04）；侧面为回眸三分之二侧面 `femaleLead_side.png`；背面 `femaleLead_back.png`。挂到 Picture 1 / 2 / 3。
- 男主：正面 `maleLead_front.png`（v05）；侧面 `maleLead_side.png`。不使用背面。单人镜挂到 Picture 1 / 2 / 3（第三张再挂正面）；双人镜挂到 Picture 4 / 5 / 6（第六张再挂正面）。
- 不需要：男主背面、逐镜分镜图、逐张合照静帧、摄影师角色参考图、可读汉字贴图以外的文字生成

### 场景（写入提示词，不单独出每镜场景图）

- 雨后旧街与照相馆外立面
- 照相馆门厅与柜台
- 拍摄区：同一旧背景布、两把木椅、地面站位标记
- 暗房：红色安全灯、显影盘、晾片线

### 后期与剪辑

- 所有 H3 素材都是角色参考视频；回忆段落如需 4:3，在成片里居中裁切
- 镜 10：剪辑叠化镜 05、06、07
- 镜 12 / 20 / 22：H3 不生成汉字；成片把实拍或手写 `明年见` 贴到封套背面
- 镜 19、21：看清合照内容时，可低透明度叠入镜 11
- 镜 29：只剪镜 05、06、07、11，对齐双椅与站位后叠化退白
- 镜 28 白色闪光与最终副歌全编制进入逐帧同步
- 镜 30 只出显影盘；如需与坐姿接力，剪辑时接镜 26 或镜 28 的坐姿帧
- 镜 31 只用窗光与克制过曝，避免梦幻光斑
- 镜 33 时间轴为 2 秒，H3 可按 2 秒生成后直接用；不要再做翻面动作
- 最终调色保持冬日蓝灰、室内暖黄和暗房红三套空间逻辑

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
- [x] 高潮画面与歌曲高潮同步
- [x] 结尾落实歌曲和故事的共同主题
- [x] 每镜可凭男女主角参考图直接生成视频，不依赖逐镜分镜静帧
- [x] H3 提示词使用 `05_ref2va_4step_sla` 的 reference contract
- [x] 剪辑镜未写入 H3 生成提示词
- [x] 从镜 16 起，H3 提示词含分时段微表情并符合该镜情绪
