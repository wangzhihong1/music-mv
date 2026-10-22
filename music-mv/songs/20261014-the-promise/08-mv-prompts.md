# 《约定》最终分镜提示词

<!-- Generated from song.json by npm run render:mv-prompts. Do not edit directly. -->

- 歌曲目录：`songs/20261014-the-promise/`
- 脚本骨架：`complete`
- 视觉基准：`confirmed`
- 提示词状态：`complete`

## 视觉基准清单

### 人物参考图

| 角色 ID | 角色 | 三视图 |
| --- | --- | --- |
| lin-xi | 林夕 | characters/20261015-lin-xi/assets/characters/three-view.png |
| wang-xiao-an | 王小安 | characters/20261015-wang-xiao-an/assets/characters/three-view.png |

### 场景基准图

| 场景 ID | 名称 | 路径 | 状态 | 锁定说明 |
| --- | --- | --- | --- | --- |
| apartment-piano-living-room | 公寓客厅钢琴区与阳台 | assets/scenes/apartment-piano-living-room-upload-v01.png | confirmed | 现代都市公寓主场景。黑色立式钢琴在左，双人琴凳居中，玄关在右，阳台门在右后；暖灰墙面、深木地板、白色纱帘。傍晚至夜晚保持同一空间和左右关系。 |
| apartment-bathroom | 公寓浴室 | assets/scenes/apartment-bathroom-upload-v01.png | confirmed | 暖灰石材浴室，磨砂淋浴玻璃遮挡身体，暖顶光，门外连接卧室更衣镜；满足沐浴画面的隐私与连续性。 |
| apartment-dressing-area | 卧室更衣区 | assets/scenes/apartment-dressing-area-upload-v01.png | confirmed | 同一公寓卧室一角，落地更衣镜、深木衣柜与暖色镜灯；左侧接浴室，右侧通短廊。 |
| apartment-kitchen-corridor | 开放式厨房与短廊 | assets/scenes/apartment-kitchen-corridor-upload-v01.png | confirmed | 卧室通往客厅的短廊，左侧开放式厨房，杯架固定摆放左黑右白两只陶瓷杯，前方可见钢琴与阳台。 |

## 逐镜最终提示词

### 01　00:00–00:06.5　空着的家先被记住

- 出镜人物 ID：无
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_01_h3_v07.mp4`
- 图片顺序：
  - <Picture 1> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the confirmed apartment piano living room anchored by <Picture 1>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 6.5-second photoreal live-action 16:9 MV shot of <Subject 1>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 1>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] An empty eye-level medium-wide establishes the apartment. The camera holds an eye-level wide shot for four seconds, then makes a small, smooth, slow push-in of about five percent toward the empty right half of the bench. The camera keeps the same height and direction; no zoom, pan, tilt, reframing or digital crop. The upright piano stays on screen left, the entrance on far right and the balcony behind the sheer curtains. A gentle evening breeze moves the hanging sheer curtains. The curtain track, top edge, left panel position and right panel position stay fixed. The fabric only ripples and the lower edges sway a few centimeters back and forth; the curtain opening width and height stay exactly the same. The blue-hour sky, lamps, reflections, white balance, exposure, room brightness and shadows stay consistent during the camera push-in. Scene geometry, paper, furniture, props, lighting and material texture remain stable. No living person, new object, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是由<图片 1>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 6.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 从黑场接入无人客厅，先让观众认出钢琴、阳台与玄关的固定关系，为林夕回家留下入口。 傍晚暖灰客厅中全景；黑色立式钢琴在画面左侧，双人琴凳居中，右后方是半掩阳台纱帘，玄关在画面右侧。无人，傍晚的微风吹动悬挂的白色纱帘。纱帘轨道、顶部、左侧纱帘位置和右侧纱帘位置固定不变；只有布料产生细小褶皱，底边来回摆动几厘米。纱帘开合宽度和高度完全不变。蓝调天空、灯具、反射、白平衡、曝光、房间亮度和阴影在慢推过程中保持连续。 平视略广角，深景深锁住三处空间；平视略广角，前4秒固定建立空间，后2.5秒向空琴凳右半边做约5%的小幅匀速极慢推近；机位高度和方向保持不变，不变焦、不摇、不移、不重构图。主光来自右后方冷白窗光，室内暖灯未开。 地点：林夕公寓客厅钢琴区；钢琴左、玄关右、阳台右后，傍晚。 场景几何、纸张、家具、道具、光线和材质纹理保持稳定。不出现活人、新物件、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 02　00:06.5–00:11　林夕回到约定发生的家

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_02_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific person and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections.
[Shot 1] Use a wide master shot that preserves the full apartment depth established in the previous shot. The complete upright piano remains fixed on the far left, the complete two-person bench remains in front of it, and the apartment entrance remains at the far right. A long, clearly visible stretch of empty wooden floor separates the piano area from the entrance. <Subject 1> enters only through the far-right door and stops just inside the entrance area. Her full body is visible from head to shoes and stays relatively small in the wide frame. She sets her keys down once, then raises her gaze toward the distant piano; her brows tighten slightly, lips stay closed and her breath pauses. She does not walk toward the piano. The piano is not a foreground close-up and never overlaps her body. The camera stays fixed at eye level with a wide-angle perspective and deep depth of field; no push-in, zoom, crop or spatial compression. The room scale, floor distance, left-right positions and blue-hour lighting remain consistent with <Picture 2>. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for one natural blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合。
[镜头 1] 使用承接上一镜公寓纵深的全景主镜头。完整黑色立式钢琴固定在画面最左侧，完整双人琴凳固定在钢琴前，公寓玄关固定在画面最右侧；钢琴区与玄关之间保留一整段清楚可见的空地板和通道。林夕只从最右侧入户门进入，停在玄关里面；她从头到鞋完整可见，在全景画面中保持较小比例。她把钥匙放下一次，再抬眼看向远处钢琴；眉心轻收、双唇闭合、呼吸停半拍。她不向钢琴走近。钢琴不是前景近景，不遮挡或贴近她的身体。摄影机保持眼高略广角、深景深和固定机位，不推近、不变焦、不裁切、不压缩空间。房间尺度、地面距离、左右位置和蓝调灯光与<图片 2>保持一致。脸与手保持稳定，服装连续；最多一次自然眨眼，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 03　00:11–00:15.5　钢琴凳空着一半

- 出镜人物 ID：无
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_03_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the confirmed black upright piano and its wide tufted black two-person bench anchored by <Picture 1> in the same apartment piano corner. Preserve the bench width, upholstery, legs and fixed position in front of the piano, together with the piano's black finish and blue-hour side light. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV detail shot of <Subject 1>, cutting directly from Lin Xi's gaze to the empty right half of the fixed bench.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the confirmed piano, bench proportions, upholstery, fixed furniture positions, material texture and lighting from <Picture 1>. The bench remains stationary for the entire shot. No living person appears.

detailed_description:
The target video is photoreal live-action in real time, with restrained contemporary Chinese urban MV cinematography. The cool blue-hour edge light, exposure, white balance and shadows remain constant from first frame to last frame.
[Shot 1] Begin immediately on a tight low three-quarter medium-close composition at bench height; this is a continuation of the previous gaze, not a new establishing view. The two-person bench fills most of the frame. Its left half shows one subtle shallow seated indentation, while the complete right half is clean, unoccupied and the clear visual focus. The crop contains only the bench, the lower edge of the black upright piano and a narrow strip of structure beneath the keyboard, with only a thin strip of floor beneath the bench. The frame edges fall inside the piano corner before the entrance, balcony and window wall. Using a medium-telephoto look and shallow depth of field, the camera trucks right with extremely small amplitude at slow speed, moving only a few centimeters, then settles on the empty right half. There is no push-in, zoom or focus shift. The bench remains fixed: it does not slide, rotate, fold, resize or change position. The piano and upholstery stay geometrically stable; lighting and material texture do not flicker. No living person enters, and no new object, on-screen text or logo appears.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是由<图片 1>锁定的同一公寓钢琴角，包括黑色立式钢琴和其前方宽大的黑色绗缝双人琴凳。保持琴凳宽度、软包、凳腿及其在钢琴前的固定位置，同时保持钢琴黑色漆面和蓝调时刻侧光。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 局部镜头，从林夕的视线直接切到固定琴凳空着的右半边。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的钢琴、琴凳比例、软包、固定家具位置、材质纹理与光线。琴凳全程静止。画面中没有活人。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 摄影。蓝调时刻的冷色边光、曝光、白平衡和阴影从首帧到末帧保持恒定。
[镜头 1] 一开始就是琴凳高度的微低三分之二局部中近景；这是承接上一镜视线的镜头，不是重新建立空间。双人琴凳占据画面大部分。左半边只有一个轻浅的坐压痕，完整的右半边干净、无人占用，并且是明确视觉焦点。构图只包含琴凳、黑色立式钢琴下沿和琴键下方窄窄一条结构，琴凳下方只露一条很窄的地板。画框边缘收在钢琴角内部，不纳入玄关、阳台和整面窗墙。使用中长焦观感和浅景深，镜头以极小幅度、缓慢速度从左向右横移，仅移动几厘米，随后停在空着的右半边。没有推近、变焦或移焦。琴凳保持固定，不滑动、不旋转、不折叠、不缩放，也不改变位置。钢琴和软包几何稳定，光线与材质纹理不闪烁。没有活人进入，也不出现新物件、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 04　00:15.5–00:20　没写完的两小节

- 出镜人物 ID：无
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_04_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the confirmed apartment piano living room anchored by <Picture 1>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 1>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] A slightly high close shot holds on the handwritten score resting on the piano rack. The title “约定” is visible at the top and the final two measures remain blank. A faint graphite indentation remains near the unfinished measures while the adjacent rack surface stays empty. The camera makes one slow focus shift from the title to the unfinished measures; paper, indentation and room light remain unchanged. Scene geometry, paper, furniture, props, lighting and material texture remain stable. No living person, new object, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是由<图片 1>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 把空位进一步收成一张未完成琴谱；观众第一次看见这段关系仍有待补完。 谱架俯斜特写，同一张手写琴谱边角微卷，末尾两小节保持空白；画面只出现纸、谱架与一支缺席留下的铅笔压痕，不生成可读歌词。 略高俯拍中长焦，浅景深对焦空白小节；固定拍摄，纸面被窗边微风带起不足一厘米后落下。光线从右侧擦过纸纹。 地点：客厅钢琴谱架；唯一锚点道具《约定》手写琴谱。 场景几何、纸张、家具、道具、光线和材质纹理保持稳定。不出现活人、新物件、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 05　00:20–00:24.5　手触到三年前的约定

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_05_h3_v03.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] <Subject 1> stands at the piano rack in a tight hand-and-face composition. Only her empty right hand enters from the lower edge while her left hand remains outside the frame. Her bare right index fingertip touches the lower margin beneath the title once, then becomes completely still without lifting, turning or adjusting the page; the rack beside the score remains empty. Her gaze holds on the blank final measures, her lips stay closed, and her eyelids remain open with readable irises. The camera holds static, preserving the exact score and piano position. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 接住空白琴谱，林夕以手部与脸部同框站在钢琴谱架前。只有空着的右手从画面下缘进入，左手始终留在画外；裸露的右手食指指腹只触碰标题下方的纸面一次，随后完全停住，不抬起、不翻页、不调整纸张，琴谱旁的谱架保持空置。她的视线停在末尾空白两小节，嘴唇闭合，眼皮睁开且虹膜与瞳孔清晰。略高俯拍中长焦，极浅景深只对焦指腹和纸纹；固定机位，不跟手移动。右侧窗光柔和，手落下后保持。地点：客厅钢琴谱架。脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 06　00:24.5–00:30　她掀开琴布

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_06_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] <Subject 1> lifts the dark piano cover once and folds it back, revealing the same black upright piano. The medium shot keeps her face, both hands, the bench and the balcony relation readable. She finishes with both hands resting on the folded cloth, shoulders slightly lowered and gaze held on the keys. The camera trucks left with small amplitude at slow speed and stops with the piano centered. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 林夕把盖住三年的琴布慢慢掀开，完成回到这里后的第一个主动动作。 侧后中景，林夕站在钢琴左侧，双手把深灰琴布从近端掀到后侧，动作结束时黑色琴盖完整露出；她的肩背保持克制，不转头。 腰高平视标准焦段，中景深对焦双手与琴盖；从左向右小幅慢移，速度均匀，动机是随布面揭开钢琴。窗光沿琴盖形成稳定反射。 地点：客厅钢琴区。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 07　00:30–00:35.5　她看向没人坐的地方

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_07_h3_v03.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings.
<Subject 2> is the confirmed apartment piano corner anchored by <Picture 2>. Preserve exactly the single black upright piano fixed on the left wall and its one continuous keyboard, together with the same wide tufted black two-person bench fixed and centered directly in front of that piano. Preserve the warm-gray wall, dark wood floor, white sheer curtains, blue-hour window light and every original left-right relationship. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> seated on the left half of the fixed bench at the one existing piano in <Subject 2>, then making one clearly visible head turn toward the vacant right cushion. The first frame is already the live apartment shot and never displays a reference sheet.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, long black hair, body proportions and exact black outfit from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the one original upright piano, its one continuous keyboard, the one original two-person bench, fixed furniture positions, room geometry, materials and lighting from <Picture 2>. No additional furniture or instrument is introduced.

detailed_description:
The target video is photoreal live-action in real time with restrained contemporary Chinese urban MV cinematography. Cool blue-hour window light and soft warm interior reflections remain constant, with stable exposure, white balance and shadows.
[Shot 1] The camera is already positioned at seated eye height on the front-right side of the existing upright piano, looking diagonally left across the same keyboard and bench in a three-quarter medium shot. The frame contains exactly one piano: the single black upright piano from <Picture 2> remains on screen left, and its body and keyboard form one continuous object. The original tufted two-person bench remains fixed, centered directly in front of this same keyboard. <Subject 1> is visibly seated on the left half of that bench, with her hips and upper legs resting on the cushion, torso facing the keys and knees directed beneath the keyboard. The entire right half of the same bench remains clearly visible and empty beside her at screen right. Her face, the one piano and the vacant cushion are all sharp enough to read; only a narrow section of the original sheer curtains and blue-hour window light anchors the background. The entrance is outside this composition.
For the first two seconds her gaze holds on the keys. She then makes one clearly visible head turn of about twenty-five degrees to her own right and tilts her chin diagonally down toward the center of the vacant cushion at screen right. By the final half of the shot, her nose, chin, irises and pupils all point toward that empty cushion below the camera lens; the cushion is her unmistakable gaze target, not the keys, her hands or the camera. She holds this final head angle and gaze through the last frame. Her torso and hands remain still. Her brows soften briefly and draw in again, lips stay closed, and one quiet exhale lowers her shoulders slightly. The camera holds completely static with a standard-to-medium-telephoto look and moderate depth of field; there is no push, pan, truck, zoom or reframing. The bench and piano never slide, rotate, duplicate, resize or change position. Stable face, eyes, hands, clothing, furniture and piano geometry; eyelids remain open, irises and pupils readable, with at most one natural blink. No additional piano, extra bench, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master is added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形和银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴角。只保留左墙固定的同一架黑色立式钢琴及其一套连续琴键，同时保留同一张宽大的黑色绗缝双人琴凳；琴凳固定并居中位于这架钢琴正前方。保持暖灰墙面、深木地板、白色纱帘、蓝调时刻窗光和全部原始左右关系。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头；<主体 1>坐在<主体 2>唯一现有钢琴前固定琴凳的左半边，随后朝空着的右侧坐垫完成一次清楚可见的转头。首帧已经是公寓实景，绝不展示人物参考图或三视图板。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、黑色长发、身体比例和准确黑色服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的唯一原立式钢琴、连续的一套琴键、唯一原双人琴凳、固定家具位置、房间几何、材质与光线。不增加任何家具或乐器。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 摄影。蓝调时刻冷窗光与柔和暖色室内反射保持恒定，曝光、白平衡和阴影稳定。
[镜头 1] 摄影机从首帧就位于现有立式钢琴右前侧的坐姿眼高，沿同一套琴键和琴凳向左斜拍，形成三分之二中景。画面只包含一架钢琴：<图片 2>中的同一架黑色立式钢琴保持在画面左侧，钢琴主体与琴键始终是一个连续整体。原有绗缝双人琴凳保持固定，居中位于这同一套琴键正前方。<主体 1>确实坐在这张琴凳左半边，臀部与大腿上部压在坐垫上，躯干朝向琴键，双膝朝向琴键下方。同一张琴凳的整个右半边在她身旁、画面右侧清楚可见并保持空着。她的脸、唯一钢琴和空坐垫都达到清楚可读的景深；背景只保留原房间一小段纱帘与蓝调窗光作为方位锚点，玄关不进入构图。
前两秒她的视线停在琴键上。随后她只完成一次清楚可见的动作：头部向她自身右侧转动约二十五度，同时把下巴斜向右下方，朝画面右侧空坐垫中心压低。进入镜头后半段时，她的鼻尖、下巴、虹膜与瞳孔全部指向镜头下方的那块空坐垫；空坐垫是毫无歧义的视线目标，不是琴键、双手或镜头。她把最终头部角度与视线保持到末帧，躯干和双手不动。她的眉峰短暂放松后重新轻收，双唇始终闭合，一次安静呼气让肩膀略微下降。摄影机采用标准至中长焦观感和适中景深，完全固定；不推、不摇、不移、不变焦、不重新构图。琴凳和钢琴绝不滑动、旋转、复制、缩放或改变位置。面孔、眼睛、双手、服装、家具和钢琴几何保持稳定；眼皮保持睁开，虹膜与瞳孔清楚，最多一次自然眨眼。不增加钢琴、琴凳、人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带只在后期加入。

非叙事音乐:
N/A
````

### 08　00:35.5–00:38　空白小节停住约定

- 出镜人物 ID：无
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`composite`
- 输出视频：`generated/video/raw/shot_08_composite_v02.mp4`
- 图片顺序：
  - <Picture 1> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the confirmed handwritten score on the black upright piano in the apartment piano corner anchored by <Picture 1>. Preserve the same paper, handwritten musical notation, blank final measures, black piano surface and established blue-hour side light. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 2.5-second photoreal live-action 16:9 MV close shot of <Subject 1>, showing the unfinished score without any screen-fixed graphic or text overlay.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same score paper, existing handwritten notation, blank final measures, piano rack, material texture and lighting. No living person appears.

detailed_description:
The target video is photoreal live-action in real time with restrained contemporary Chinese urban MV cinematography. The score paper and black piano surface retain the same blue-hour side light, exposure, white balance and shadows.
[Shot 1] A slightly high oblique close shot holds on the same unfinished handwritten score. Paper texture, existing handwritten musical notation and the blank final measures form one diagonal composition. The camera remains fixed and the score stays stable, with the blank measures as the visual endpoint. The source image contains only the physical score and piano surface. No title, caption, subtitle, graphic, label, watermark or other screen-fixed lettering is added anywhere in the frame, especially in the upper-left corner. No living person or new object appears. Paper, rack, piano reflections, lighting and material texture remain continuous.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master is added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是由<图片 1>锁定的公寓钢琴角黑色立式钢琴上的同一张手写琴谱。保持同一张纸、原有手写乐谱、末尾空白小节、黑色钢琴表面和既定蓝调侧光。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 2.5 秒、真人写实、16:9 的参考图生成 MV 琴谱特写，不添加任何固定在画面上的图形或文字叠层。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持同一张琴谱纸、原有手写乐谱、末尾空白小节、谱架、材质纹理与光线。画面中没有活人。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 摄影。琴谱纸和黑色钢琴表面保持同一蓝调侧光，曝光、白平衡与阴影稳定。
[镜头 1] 略高俯斜的局部特写停在同一张未完成手写琴谱上。纸张纹理、原有手写乐谱和末尾空白小节形成一条斜线构图。摄影机固定，琴谱保持稳定，以空白小节作为视觉落点。源画面只包含实体琴谱与钢琴表面。画面任何位置都不添加片名、字幕、图形标签、水印或其他固定文字，尤其不在左上角添加文字。没有活人或新物件出现。纸张、谱架、钢琴反光、光线和材质纹理保持连续。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带只在后期加入。

非叙事音乐:
N/A
````

### 09　00:38–00:41.5　浴室内肩部以上的沐浴开始

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-bathroom
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_09_h3_v05.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-bathroom: assets/scenes/apartment-bathroom-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is adult East Asian woman Lin Xi, whose identity comes from the combined front-side-back three-view sheet in <Picture 1>. Preserve the same adult face, long dark hair, fair skin, silver earrings and restrained expression. She is showering without clothing, but the camera crop includes only her head, neck, collarbones, shoulder line and one upper arm; her chest and lower body remain completely outside the frame.
<Subject 2> is the confirmed apartment bathroom anchored by <Picture 2>. Preserve the warm gray stone, rainfall shower, center-left shower area, far-left vanity, frosted glass structure in the distant background, towel rail, right-side opening and constant warm recessed ceiling light. Source: assets/scenes/apartment-bathroom-upload-v01.png.

summary:
[reference generation] one continuous 3.5-second photoreal live-action 16:9 MV shoulder-up close shot of <Subject 1> beginning a shower inside <Subject 2>, filmed directly from a fixed camera inside the shower area with no frosted glass between camera and subject.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain the same adult identity, face, wet dark hair and silver earrings; only a privacy-safe head, neck, collarbone, shoulder and upper-arm crop is visible.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed bathroom materials, shower fixtures, fixed objects and constant warm light from <Picture 2>.

detailed_description:
The target video is photoreal live-action in real time with restrained contemporary Chinese urban MV cinematography. The camera is inside the same bathroom and inside the shower area; no frosted glass, door frame or privacy panel stands between the lens and Lin Xi. Warm-gray stone, the fixed rainfall shower, warm recessed light, exposure, white balance and room brightness remain unchanged.
[Shot 1] A completely fixed eye-level camera on the front-right side of the shower holds a tight three-quarter shoulder-up close shot. The top of frame leaves a little space above Lin Xi's wet hair; the bottom edge stays permanently just below her collarbones, before any chest enters the image. The composition directly shows only her face, wet hair, neck, both shoulder lines and part of her raised right upper arm. A steady rainfall stream lands on the crown of her head and runs through her hair. She lifts her right hand once, combs the wet hair backward with her fingers and holds her hand behind her head. Her gaze stays slightly downward, eyelids open, lips closed and brows gently drawn; one quiet exhale lowers her visible shoulder line slightly. She is showering without clothing, but breasts, nipples, cleavage, torso, waist, hips, buttocks, legs and private anatomy remain entirely below the fixed frame edge and never appear. No camera movement, reframing, zoom, exposure change, transparent reflection, second person, text or logo. Stable face, eyes, hand, wet hair, water direction, stone texture and lighting.

overall_soundscape:
silence. Do not generate dialogue, singing or spoken words; the confirmed song master and low shower ambience are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的正面、侧面、背面三视图合图。保持同一成年面孔、黑色长发、自然肤色、银色耳钉和克制神情。她未穿衣物正在洗澡，但摄影构图只包含头部、颈部、锁骨、肩线和一侧上臂；胸部及身体下方完全在画外。
<主体 2> 是由<图片 2>锁定的已确认公寓浴室。保持暖灰石材、顶喷、中央偏左淋浴区、最左侧盥洗台、远处背景中的磨砂玻璃结构、毛巾杆、右侧敞口和恒定暖色嵌灯。来源：assets/scenes/apartment-bathroom-upload-v01.png。

摘要:
一条连续 3.5 秒、真人写实、16:9 的肩部以上近景；林夕在<主体 2>内开始洗澡，摄影机固定在淋浴区内部，镜头与人物之间没有磨砂玻璃。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持同一成年身份、面孔、湿黑发和银色耳钉；只显示隐私安全的头部、颈部、锁骨、肩部和上臂构图。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的浴室材质、淋浴设备、固定物件和恒定暖光。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 摄影。摄影机位于同一浴室内部和淋浴区内部；镜头与林夕之间没有磨砂玻璃、门框或隐私隔板。暖灰石材、固定顶喷、暖色嵌灯、曝光、白平衡和房间亮度保持不变。
[镜头 1] 摄影机固定在淋浴区右前侧的眼高位置，形成紧凑的三分之二肩部以上近景。画面顶部在湿发上方保留少量空间，画面下沿永久固定在锁骨下方、胸部进入画面之前。构图直接显示的只有林夕的脸、湿发、颈部、两侧肩线和抬起的右上臂。稳定顶喷水流落在头顶并沿湿发流下。她只抬起右手一次，用手指把湿发向后理顺，然后把手停在后脑。视线保持略微向下，眼皮睁开，双唇闭合，眉峰轻收；一次安静呼气让可见肩线略微下降。她未穿衣物正在洗澡，但胸部、乳头、乳沟、躯干、腰部、臀胯、臀部、腿部和私密部位始终完全位于固定画面下沿之外，任何一帧都不出现。摄影机不移动、不重构图、不变焦，曝光不变化；不出现透明倒影、第二个人、文字或商标。面孔、眼睛、手、湿发、水流方向、石材纹理和光线保持稳定。

整体声音环境:
静音。不生成对白、演唱或说话；已确认歌曲母带和低层淋浴声只在后期加入。

非叙事音乐:
N/A
````

### 10　00:41.5–00:47　浴室内左后侧冲洗湿发

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-bathroom
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_10_h3_v04.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-bathroom: assets/scenes/apartment-bathroom-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is adult East Asian woman Lin Xi, whose identity comes from the combined front-side-back three-view sheet in <Picture 1>. Preserve the same adult identity, long wet dark hair and natural skin texture. She is showering without clothing, but only the back of her head, wet hair, back of neck, shoulder line and upper arms are framed; her chest and lower body remain outside the image.
<Subject 2> is the confirmed apartment bathroom anchored by <Picture 2>. Preserve the same warm gray stone, rainfall shower, fixtures and constant warm ceiling light. Source: assets/scenes/apartment-bathroom-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV upper-back close shot of <Subject 1> rinsing her hair inside <Subject 2>, filmed directly from a second fixed camera inside the shower area without frosted glass between lens and subject.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain the same adult identity, wet hair and skin texture, using only a privacy-safe upper-back crop.
<Subject 2> (appears in [Shot 1]): fully_preserved - retain the confirmed stone, shower fixtures, fixed objects and constant warm brightness from <Picture 2>.

detailed_description:
The target video is photoreal live-action in real time inside the same warm-gray bathroom. The lens is inside the shower area; no frosted glass or partition stands between the camera and Lin Xi. Lighting, exposure, white balance and water direction remain constant.
[Shot 1] A completely fixed camera on the left-rear side of the shower, slightly above shoulder height, frames the back of Lin Xi's wet head, hair, neck, both shoulder lines and upper arms. The bottom frame edge remains above the lower shoulder blades, excluding the chest, lower back, waist, hips, buttocks, legs and private anatomy. She raises both hands once to her scalp and slowly rinses her wet hair under the stable rainfall, then holds. Her head remains slightly bowed and never turns to reveal the front of her chest. The camera does not move, zoom or reframe. Wet hair, hands, shoulder line, water, stone, light and brightness remain stable. No second person, text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing or spoken words; the confirmed song master and shower ambience are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的正面、侧面、背面三视图合图。保持同一成年身份、湿黑长发和自然肤理。她未穿衣物正在洗澡，但只框取后脑、湿发、后颈、肩线和上臂；胸部及身体下方完全在画外。
<主体 2> 是由<图片 2>锁定的已确认公寓浴室。保持同一暖灰石材、顶喷、淋浴设备和恒定暖色顶灯。来源：assets/scenes/apartment-bathroom-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的上背部近景；林夕在<主体 2>内部冲洗湿发，第二个固定机位位于淋浴区内部，镜头与人物之间没有磨砂玻璃。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持同一成年身份、湿发和皮肤纹理，只使用隐私安全的上背部构图。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的石材、淋浴设备、固定物件和恒定暖色亮度。

详细描述:
目标视频为实时真人写实影像，发生在同一暖灰浴室内。镜头位于淋浴区内部；摄影机与林夕之间没有磨砂玻璃或隔板。灯光、曝光、白平衡和水流方向保持恒定。
[镜头 1] 摄影机完全固定在淋浴区左后侧、略高于肩部，只框住林夕湿润的后脑、湿发、后颈、两侧肩线和上臂。画面下沿始终固定在肩胛骨下方之前，排除胸部、下背部、腰部、臀胯、臀部、腿部和私密部位。她只抬起双手一次到头顶，在稳定顶喷水流下缓慢冲洗湿发，然后保持。头部始终略微低下，不转身露出正面胸口。摄影机不移动、不变焦、不重构图。湿发、双手、肩线、水流、石材、光线和亮度保持稳定。不出现第二个人、文字或商标。

整体声音环境:
静音。不生成对白、演唱或说话；已确认歌曲母带和淋浴声只在后期加入。

非叙事音乐:
N/A
````

### 11　00:47–00:52　低机位单腿擦水

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-bathroom
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_11_h3_v09.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-bathroom: assets/scenes/apartment-bathroom-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the single adult East Asian woman Lin Xi, whose identity comes from the combined front-side-back three-view sheet in <Picture 1>. Preserve one person only and the same adult skin texture and body proportions.
<Subject 2> is the confirmed apartment bathroom anchored by <Picture 2>. Preserve the warm gray stone, fixed rainfall shower, far-left vanity, distant frosted glass structure, towel rail, right-side opening and constant warm light. Source: assets/scenes/apartment-bathroom-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 low oblique close shot of the single <Subject 1> wiping water down her own left shin inside <Subject 2>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - one adult woman only; the crop shows one continuous left lower leg from below the knee through the ankle to the left foot, plus one right hand with a short connected section of right forearm.
<Subject 2> (appears in [Shot 1]): fully_preserved - retain the same bathroom geometry, fixtures, materials and constant warm brightness from <Picture 2>.

detailed_description:
The target video is photoreal live-action in real time inside the same bathroom shower. This is one continuous shot of one woman. The lens is inside the shower area with a direct view of the wet stone floor; no glass stands between the lens and the visible leg.
[Shot 1] Place the camera inside the shower at the front-left side, about twenty centimeters above the wet floor. Use a low oblique close view aimed horizontally toward the lower leg and slightly downward toward the floor, never upward toward the body. The upper frame edge stays below Lin Xi's left kneecap throughout. One continuous anatomical line is visible from the lower edge of her left knee through one left shin and one left ankle to one bare left foot planted beside the same round floor drain. Exactly one right hand, attached to a short visible section of right forearm entering from the upper-left edge, rests on the front of that same left shin. Her other leg, head and the rest of her body remain outside the frame. A steady shower stream runs down the one visible shin onto the warm-gray tile. Hold still for half a second, then the camera follows downward with small amplitude at slow speed as the same right hand makes one wipe from mid-shin to the ankle and stops there. The camera stops with the hand; it does not tilt up, pan, zoom or cut. Keep one woman, one visible leg, one visible foot and one wiping hand, with natural anatomy and no duplicated limbs or reflection. The fixed floor drain, tile joints, shower water, exposure, white balance and warm brightness remain stable. No on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing or spoken words; the confirmed song master and low shower ambience are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是唯一一位成年东亚女性林夕，身份来自<图片 1>中的正面、侧面、背面三视图合图。全程只保留一个人，保持同一成年皮肤纹理和身体比例。
<主体 2> 是由<图片 2>锁定的已确认公寓浴室。保持暖灰石材、固定顶喷、最左侧盥洗台、远处磨砂玻璃结构、毛巾杆、右侧敞口和恒定暖光。来源：assets/scenes/apartment-bathroom-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的低机位斜侧近景；唯一的<主体 1>在<主体 2>内沿自己的左小腿向下擦水。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——全程只有一个成年女性；构图只显示从膝下连续连接到脚踝和左脚的一条左小腿，以及一只右手和与它相连的一小段右前臂。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>的浴室几何、设备、材质和恒定暖色亮度。

详细描述:
目标视频为实时真人写实影像，发生在同一浴室淋浴区内。这是一条只有一个人的连续镜头。摄影机位于淋浴区内部，直接拍摄湿石材地面和可见小腿，镜头与皮肤之间没有玻璃。
[镜头 1] 摄影机放在淋浴区左前侧、离湿地面约二十厘米，采用低机位斜侧近景，镜头水平朝向小腿并略向下拍地面，绝不朝身体上方仰拍。画面上沿全程固定在林夕左膝盖下方。从左膝下沿开始，一条连续的身体结构依次连接左小腿、左脚踝和踩在同一圆形地漏旁的赤裸左脚。严格只有一只右手，并带有从画面左上缘进入且连续相连的一小段右前臂，手掌放在同一条左小腿胫骨正面。另一条腿、头部和身体其余部分全部留在画外。稳定水流沿唯一可见的小腿流到暖灰地砖。前半秒固定，随后摄影机以小幅慢速向下跟移，跟随同一只右手从胫骨中段向脚踝擦过一次，并和手一起停住。摄影机停止后不再上摇、横摇、变焦或切镜。全程保持一个人、一条可见腿、一只可见脚和一只擦洗手，人体结构自然，不重复肢体，不出现镜中倒影人物。圆形地漏、地砖接缝、水流、曝光、白平衡和暖色亮度保持稳定。不出现画面文字或商标。

整体声音环境:
静音。不生成对白、演唱或说话；已确认歌曲母带和低层淋浴声只在后期加入。

非叙事音乐:
N/A
````

### 12　00:52–00:56.5　洗完澡后穿上浴袍

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-bathroom
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_12_h3_v04.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-bathroom: assets/scenes/apartment-bathroom-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is adult East Asian woman Lin Xi, whose identity comes from the combined front-side-back three-view sheet in <Picture 1>. Keep the same adult face, wet dark hair and silver earrings. At the first frame she is already securely wrapped in a fully opaque white towel across the chest, then puts on a fully opaque dark-gray bathrobe.
<Subject 2> is the confirmed apartment bathroom anchored by <Picture 2>. Preserve the same warm gray stone, vanity mirror, shower area, towel rail, right-side opening and constant warm ceiling light. Source: assets/scenes/apartment-bathroom-upload-v01.png.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> putting on an opaque bathrobe after showering inside <Subject 2>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain the same adult identity, wet hair and earrings; the towel and robe fully cover the body throughout.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed bathroom geometry, mirror, fixed objects and constant warm brightness from <Picture 2>.

detailed_description:
The target video is photoreal live-action in real time inside the same bathroom. Lighting, exposure, white balance and room brightness remain constant.
[Shot 1] A fixed three-quarter shoulder-up camera beside the vanity mirror shows Lin Xi after showering. From the first frame, a fully opaque white towel is wrapped securely across her chest and remains closed. She performs one continuous dressing action: lifting a dark-gray opaque bathrobe onto both shoulders and bringing the two front panels together over the towel. She holds the closed robe front at the final frame. Her wet hair stays behind her shoulders; her gaze remains on her mirror reflection, lips closed and brows relaxed. The framing and opaque layers conceal breasts, torso, hips, legs and private anatomy at every moment. The camera remains inside the bathroom and does not move toward the doorway. Mirror, robe, towel, fixed objects, light and brightness stay stable. No lip sync, second person, text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing or spoken words; the confirmed song master and quiet post-shower room tone are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的正面、侧面、背面三视图合图。保持同一成年面孔、湿黑发和银色耳钉。首帧时她已经用完全不透明的白浴巾稳固包裹胸口，随后穿上完全不透明的深灰色浴袍。
<主体 2> 是由<图片 2>锁定的已确认公寓浴室。保持同一暖灰石材、洗手台镜面、淋浴区、毛巾杆、右侧敞口和恒定暖色顶灯。来源：assets/scenes/apartment-bathroom-upload-v01.png。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头；林夕在<主体 2>内部洗完澡后穿上不透明浴袍。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持同一成年身份、湿发和耳钉；浴巾与浴袍全程完整遮盖身体。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的浴室几何、镜面、固定物件和恒定暖色亮度。

详细描述:
目标视频为实时真人写实影像，发生在同一浴室内部。灯光、曝光、白平衡和房间亮度保持恒定。
[镜头 1] 摄影机固定在洗手台镜面旁，形成三分之二肩部以上近景，拍摄洗完澡后的林夕。从首帧开始，完全不透明的白浴巾已经稳固包裹胸口并保持合拢。她只完成一个连续穿衣动作：把深灰色不透明浴袍披到双肩，再将左右前襟在浴巾外合拢；末帧保持双手合住浴袍前襟。湿发留在肩后，视线保持看向镜中自己，双唇闭合，眉峰放松。构图和不透明衣料在每一帧遮住胸部、躯干、臀胯、腿部和私密部位。摄影机始终留在浴室内部，不移向门口。镜面、浴袍、浴巾、固定物件、光线和亮度保持稳定。不对口型，不出现第二个人、文字或商标。

整体声音环境:
静音。不生成对白、演唱或说话；已确认歌曲母带和安静的洗完澡后室内声场只在后期加入。

非叙事音乐:
N/A
````

### 13　00:56.5–01:01.5　石墙前触碰脸颊

- 出镜人物 ID：lin-xi
- 场景基准图 ID：无
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_13_h3_v03.mp4`
- 图片顺序：
  - <Picture 1> exact single-person bathroom composition guide: assets/shot-guides/shot-13-single-person-guide.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the single adult East Asian woman Lin Xi shown in the exact single-person composition guide <Picture 1>. Preserve the same face, wet dark hair, silver stud earrings, fully closed opaque dark-gray bathrobe, subject scale, framing and matte warm-gray stone-wall background.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 present-day MV shot of the single <Subject 1> touching her own cheek against a matte warm-gray bathroom stone wall.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, wet hair, face, hand anatomy and body proportions; retain the fully closed opaque dark-gray bathrobe throughout.

detailed_description:
The target video is photoreal live-action in real time, continuing the present-day bathroom from the previous shot without any time jump. Lighting, exposure, white balance and room brightness remain constant.
[Shot 1] Begin from the exact composition in <Picture 1>. Keep <Subject 1> at the same scale and in the same part of the frame, with the continuous matte warm-gray stone wall filling the background and the short fixed towel rail at the far-right edge. Her fully opaque dark-gray bathrobe is already closed across her chest and remains closed. Her gaze holds slightly downward past the lens. Her right hand starts at the robe collar, rises once, and the fingertips gently touch her own left cheek. At contact she closes her eyes once and keeps the fingertips still against the cheek through the final frame, with lips closed and shoulders relaxed. The camera holds for the first half, then pushes in with small amplitude at slow speed and stops on her closed eyes and touching hand. It does not pan, tilt, zoom or cut. The frame remains a single uninterrupted portrait of the same woman against the same stone wall. Stable face, fingers, wet hair, robe, matte stone, light and brightness. No on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master is added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是<图片 1>单人构图基准图中的唯一成年东亚女性林夕。保持同一面孔、湿黑发、银色耳钉、完全合拢的不透明深灰浴袍、人物大小、构图和哑光暖灰石墙背景。

摘要:
一条连续 5 秒、真人写实、16:9 的现在时 MV 镜头；唯一的<主体 1>在浴室哑光暖灰石墙前触碰自己的脸颊。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持同一成年身份、湿发、面孔、手部结构和身体比例；全程保留完全合拢的不透明深灰浴袍。

详细描述:
目标视频为实时真人写实影像，直接延续上一镜的现在时浴室，不发生时间跳转。灯光、曝光、白平衡和房间亮度保持恒定。
[镜头 1] 从<图片 1>的精确构图开始。保持<主体 1>在画面中的人物大小和位置不变，连续的哑光暖灰石墙填满背景，固定短毛巾杆只留在画面最右侧边缘。深灰色不透明浴袍已经完整合拢遮盖胸口，并始终保持合拢。她的视线保持略微向下越过镜头。右手从浴袍领口开始，只抬起一次，指腹轻触自己的左脸颊；接触时她闭眼一次，随后指腹保持贴在脸颊直到末帧，双唇闭合，肩膀放松。摄影机前半段固定，随后以小幅慢速推近，停在她闭合的眼睛和触脸手势上；不横摇、不纵摇、不变焦、不切镜。画面始终是同一位女性在同一石墙前的一条连续肖像镜头。面孔、手指、湿发、浴袍、哑光石墙、光线与亮度稳定。不出现画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带只在后期加入。

非叙事音乐:
N/A
````

### 14　01:01.5–01:07.5　衣柜前展开并贴身比对黑色上衣

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-dressing-area
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_14_h3_v03.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-dressing-area: assets/scenes/apartment-dressing-area-upload-v01.png
  - <Picture 3> shot-14 warm motion guide: assets/shot-guides/shot-14-warm-motion-guide.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same adult identity, face, long straight black hair, body proportions and natural skin texture. For this present-time shot she wears one fully closed, opaque dark gray bathrobe; the black top is one separate garment held in both hands.
<Subject 2> is the confirmed apartment dressing area anchored by <Picture 2>. Preserve the exact central dark-wood wardrobe: the same panel widths and seams, long vertical handles, right-side lower drawers, warm wood color, wall edge, narrow illuminated-mirror edge on the far left, corridor entrance on the far right and warm wood floor. Preserve the same warm overhead light and mirror-light reflection at one constant brightness.
<Picture 3> is the shot-specific warm-light starting composition. Preserve its side-front medium framing, Lin Xi's closed bathrobe, the low starting position of the black top, the wardrobe layout and warm exposure. Use it as the first-frame action anchor rather than as a still pose for the whole shot.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> actively unfolding, raising and trying one black top against herself in front of <Subject 2>, beginning from <Picture 3>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair and body proportions from <Picture 1> in every frame; the closed dark gray bathrobe remains unchanged throughout.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed wardrobe panel layout, handles, right-side lower drawers, wood tone, mirror edge, corridor entrance, floor, warm light direction, color temperature and brightness from <Picture 2> unchanged in every frame.
<Picture 3> (guides the opening of [Shot 1]): fully_preserved - begin from the same side-front composition, low garment position, wardrobe geometry and warm lighting, then animate the one continuous clothing-inspection action described below.

detailed_description:
The target video is photoreal live-action in real time with a restrained contemporary Chinese urban MV look. From the first frame to the last, the dressing area has the same stable warm interior light, exposure, white balance, wardrobe geometry and material color shown in <Picture 2> and <Picture 3>.
[Shot 1] An eye-level, side-front medium shot on a standard lens frames <Subject 1> from about mid-thigh upward against the central dark-wood wardrobe of <Subject 2>. The camera holds a completely static position with medium depth of field. Begin in the practical composition of <Picture 3>: <Subject 1> is fully covered by the closed dark gray bathrobe and holds one partly gathered black off-shoulder top low near her waist with both hands. In the first two seconds, she smoothly draws her hands apart once so the same top unfolds and both sleeves hang naturally. Through the middle two seconds, she raises the unfolded top to her upper chest and aligns its neckline below her collarbone while carefully examining that same neckline. During the final two seconds, she lays the top flat against the front of the closed bathrobe, uses her right fingertips to straighten one shoulder edge once, then gives one small downward confirming nod and holds the final comparison pose. Her head remains in a mild three-quarter angle toward the garment. Her gaze follows and stays fixed on the same neckline throughout the action; it never leaves the garment. Her brows remain lightly focused, her lips stay closed, and at most one natural blink occurs. The black top remains the same single garment with the same neckline, two sleeves, shape and size throughout. The wardrobe panels, seams, handles, right-side drawers, mirror edge and corridor entrance remain rigid and identical, and the warm light and brightness do not change. Only Lin Xi appears. Stable face and hands, coherent robe and garment, natural skin texture, no facial warping, no extra fingers or limbs, no on-screen text and no logos.

overall_soundscape:
silence

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一成年身份、面孔、黑色长直发、身体比例和自然皮肤质感。本镜是现在时，她只穿一件完全合拢、不透明的深灰浴袍；黑色上衣是由双手拿住的同一件独立衣物。
<主体 2> 是由<图片 2>锁定的已确认公寓更衣区。精确保持中央深木衣柜：相同的门板宽度和拼缝、竖向长拉手、右侧下方抽屉、暖木色、墙面边缘、最左侧一小段带灯镜边、最右侧走廊入口和暖色木地板。保持同一方向的暖色顶灯与镜灯反射，亮度恒定。
<图片 3> 是本镜暖光起始构图。保持其中的侧前方中景、林夕合拢的浴袍、黑色上衣的低位起始位置、衣柜布局和暖色曝光；它只作为首帧动作锚点，不要求人物整镜静止。

摘要:
一条连续6秒、真人写实、16:9的MV镜头：<主体 1>在<主体 2>中央衣柜前主动展开、抬起并贴身比对同一件黑色上衣，从<图片 3>的状态开始。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型和身体比例；完全合拢的深灰浴袍全程不变。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>确认的衣柜门板布局、拉手、右侧下方抽屉、木色、镜边、走廊入口、地板、暖光方向、色温和亮度不变。
<图片 3>（引导[镜头 1]开场）：完全保留——从相同侧前构图、衣服低位、衣柜结构与暖光开始，再执行下方的一条连续挑衣动作。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市MV质感。从首帧到末帧，更衣区始终保持<图片 2>和<图片 3>中的同一暖色室内光、曝光、白平衡、衣柜结构和材质颜色。
[镜头 1] 平视侧前方中景，标准焦段，从林夕大腿中部以上取景，背景为<主体 2>中央深木衣柜。摄影机以中等景深完全固定。从<图片 3>的实用构图开始：<主体 1>穿着完全合拢的深灰浴袍，双手在腰部附近低位拿住一件略微收拢的黑色露肩上衣。前两秒，她平稳地将双手向两侧分开一次，让同一件上衣完全展开，两只袖子自然垂下。中间两秒，她把展开的上衣抬到胸前，让领口对齐锁骨下方，同时专心检查同一处领口。最后两秒，她把上衣平贴在合拢浴袍的正面，右手指尖只整理一次肩线，然后轻微向下点头一次确认，并保持最终比对姿势。头部始终以轻微三分之二角度朝向衣服，视线跟随并始终固定在同一处领口上，不离开衣物。眉眼保持轻微专注，嘴唇闭合，最多自然眨眼一次。黑色上衣全程是同一件，领口、两只袖子、形状和尺寸保持一致。衣柜门板、拼缝、拉手、右侧抽屉、镜边和走廊入口完全固定，暖光与画面亮度不发生变化。画面中只有林夕一人。脸与手稳定，浴袍和衣物连续，皮肤质感自然，不出现脸部变形、多指、多肢体、画面文字或商标。

整体声音环境:
静音

非叙事音乐:
N/A
````

### 15　01:07.5–01:12　银色耳钉扣上

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-dressing-area
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_15_h3_v03.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-dressing-area: assets/scenes/apartment-dressing-area-upload-v01.png
  - <Picture 3> exact warm ear close first frame: assets/shot-guides/shot-15-warm-ear-guide.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same adult identity, face, long straight black hair, body proportions and natural skin texture. In this shot she is already dressed in the same black off-shoulder knit top chosen in the previous shot and wears one small round silver stud at her left earlobe.
<Subject 2> is the confirmed apartment dressing area anchored by <Picture 2>. Preserve its dark-wood wardrobe, warm mirror light, warm ceiling light, warm wood color and stable present-time exposure. In this close shot the room appears only as a shallow-focus warm brown background; its lighting and color temperature still come exclusively from <Picture 2>.
<Picture 3> is the exact first-frame composition anchor for [Shot 1]. Preserve its close framing of Lin Xi's face, left ear, silver stud and both hands, its mild three-quarter face angle, warm brown shallow-focus background and already-stable warm exposure.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV close shot of <Subject 1> securing one silver stud earring in the warm dressing area <Subject 2>, beginning directly from <Picture 3>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, black off-shoulder top, left ear, two hands and single silver stud in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same warm mirror light, warm ceiling light, brown wardrobe tone, exposure and white balance from <Picture 2> unchanged in every frame.
<Picture 3> (is the opening frame of [Shot 1]): fully_preserved - the video begins immediately with this close composition, hand placement, warm background, brightness and color temperature.

detailed_description:
The target video is photoreal live-action in real time with a restrained contemporary Chinese urban MV look. The first decoded frame already has the final warm reference lighting and the exact ear-close composition of <Picture 3>; every later frame keeps the same brightness, exposure, white balance and warm color temperature.
[Shot 1] A fixed eye-level close shot on a medium-telephoto lens frames <Subject 1>'s face, left ear, both hands and the upper edge of her black off-shoulder knit top exactly as in <Picture 3>. The background remains one shallow-focus warm brown portion of the dressing area <Subject 2>. At the opening, the single round silver stud is aligned in her left earlobe while her fingertips hold its front and backing. She presses the backing into place once with a small controlled movement. After it locks, the lower hand releases and drops only a few centimeters while the index fingertip of the other hand remains beside the stud for one beat, creating the final position needed for the next shot's match cut. Her head keeps the same mild three-quarter angle. Her gaze holds on one fixed point in the dressing mirror just off frame to the right, never shifting toward the camera. Her brows stay level, lips remain closed and breath remains even, with at most one natural blink. The camera remains completely static. The single earring, hands, hair, black neckline and face remain coherent. The warm light is already on at the first frame and stays identical through the last frame; the shot contains one continuous state rather than an illumination event. No opening wide view, no transition inside the clip, no dissolve, no reframing, no additional person, no facial warping, no extra fingers or limbs, no on-screen text and no logos.

overall_soundscape:
silence

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一成年身份、面孔、黑色长直发、身体比例和自然皮肤质感。本镜中她已经穿好上一镜选定的同一件黑色露肩针织上衣，左耳佩戴一枚小号圆形银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓更衣区。保持深木衣柜、暖色镜灯、暖色顶灯、暖木色和稳定的现在时曝光。本镜为近景，房间只作为浅景深暖棕背景出现，但光线与色温仍然只能来自<图片 2>。
<图片 3> 是[镜头 1]精确的第一帧构图锚点。保持林夕面孔、左耳、银色耳钉与双手的近景构图、轻微三分之二脸部角度、暖棕浅景深背景，以及从首帧起已经稳定的暖色曝光。

摘要:
一条连续4.5秒、真人写实、16:9的MV近景：<主体 1>在暖色更衣区<主体 2>中扣紧一枚银色耳钉，视频从<图片 3>直接开始。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持同一成年身份、面孔、头发、黑色露肩上衣、左耳、两只手和唯一一枚银色耳钉。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一暖色镜灯、暖色顶灯、棕色衣柜色调、曝光和白平衡不变。
<图片 3>（是[镜头 1]的开场画面）：完全保留——视频立即从这一近景构图、手部位置、暖色背景、亮度和色温开始。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市MV质感。第一个解码画面就已经具有最终暖色参考光线和<图片 3>中的耳部近景构图；此后每一帧都保持相同亮度、曝光、白平衡与暖色色温。
[镜头 1] 固定平视近景，中长焦，严格按照<图片 3>同时拍到<主体 1>的面孔、左耳、双手和黑色露肩针织上衣的领口上缘。背景始终是<主体 2>中一小块浅景深暖棕更衣区。开场时，唯一一枚圆形银色耳钉已经对准左耳耳垂，指尖分别扶住耳钉正面和耳堵。她以克制的小动作把耳堵向内扣紧一次。扣紧后，下方那只手只放低几厘米，另一只手的食指在耳钉旁停一拍，形成下一镜匹配切需要的最终位置。头部保持同一轻微三分之二角度；视线始终落在画面右侧外同一个更衣镜位置，不转向摄影机。眉形平稳，嘴唇闭合，呼吸均匀，最多自然眨眼一次。摄影机完全固定。唯一耳钉、双手、头发、黑色领口与面孔保持连续。暖光从第一帧起就已经亮起，并以完全相同的状态保持到末帧；本镜只有一种连续光线状态，不拍摄亮灯过程。开场不出现全身或全景，不在视频内部转场，不溶解，不重新构图，不出现其他人物、脸部变形、多指、多肢体、画面文字或商标。

整体声音环境:
静音

非叙事音乐:
N/A
````

### 16　01:12–01:16.5　他曾替她理顺碎发

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-dressing-area
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_16_h3_v06.mp4`
- 图片顺序：
  - <Picture 1> shot 15 v03 final frame anchor: assets/shot-guides/shot-16-open-frame-guide.png
  - <Picture 2> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 3> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 4> apartment-dressing-area: assets/scenes/apartment-dressing-area-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Picture 1> is the exact final frame of the accepted shot 15: a warm left-ear close-up where the silver stud is already fastened and Lin Xi's index fingertip rests beside the stud. It is the opening-frame composition anchor; only the touching hand becomes Wang Xiao-an's hand at the same location.
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and the single silver stud at her left earlobe.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 3>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt and charcoal straight-leg jeans.
<Subject 3> is the confirmed bedroom dressing area anchored by <Picture 4>. Preserve the dark wood wardrobe, illuminated full-length mirror, warm wood floor, warm mirror light and warm ceiling light. Keep the confirmed geography fixed. Source: assets/scenes/apartment-dressing-area-upload-v01.png.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, opening on the exact close-up composition of <Picture 1> and slowly pulling back to reveal <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 3> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, fixed objects and warm lighting from <Picture 4>; add only the shot-specific people described below.
<Picture 1> (is the opening-frame composition anchor of [Shot 1]): fully_preserved - the video opens directly on the close-up camera height, subject scale, left-ear position, fingertip location and warm exposure shown in <Picture 1>; only the touching hand becomes Wang Xiao-an's hand at the same location.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Memory scenes use the confirmed architecture with slightly warmer light, without a dream filter.
[Shot 1] The first decoded frame is the exact warm left-ear close-up of <Picture 1>, with the same camera height, subject scale, left-ear position and fingertip location, making a direct hard-cut continuation from shot 15. The hand at Lin Xi's left ear now belongs to <Subject 2>, clearly revealing that this is a memory from three years earlier. His hand gently smooths one loose strand behind her left ear once. While his hand moves, the camera pulls back very slowly, smoothly and continuously, gradually revealing <Subject 2> standing behind and slightly to her right, and the pull settles into a stable medium two-shot holding both of them: he lowers his hand away from her face and looks at her, she keeps steady open eyes and closed lips, brows level. The light is slightly warmer than the present-day shot from the first frame onward and does not change during the clip. The camera performs one single slow pull-back and then holds still; no push-in, no pan, no tilt, no zoom, no cut, no dissolve, no shake. Exactly one Lin Xi and one Wang Xiao-an exist in the scene, never a duplicated person. Faces and hands remain stable, clothing stays coherent on every revealed body part, eyelids stay open except for at most one natural blink, and irises and pupils remain readable. No facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<图片 1> 是已验收第15镜的精确末帧：暖色左耳近景，银色耳钉已扣紧，林夕的食指停在耳钉旁。它是开场构图锚点；只有触摸的手替换为同一位置的王小安的手。
<主体 1> 是成年东亚女性林夕，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色长直发、自然肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，左耳佩戴唯一一枚银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 3>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色短发、自然肤色、修长匀称身形、克制神情、黑色圆领T恤和深灰直筒牛仔裤。
<主体 3> 是由<图片 4>锁定的已确认卧室更衣区。保持深木衣柜、带灯落地镜、暖色木地板、暖色镜灯和暖色顶灯。确认的地理关系固定不变。来源：assets/scenes/apartment-dressing-area-upload-v01.png。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>出镜，以<图片 1>的精确近景构图开场并缓慢拉远渐显<主体 2>，执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 3>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间几何、材质、固定物件与暖色光线；只加入下方镜头明确要求的人物。
<图片 1>（是[镜头 1]的开场构图锚点）：完全保留——视频直接以<图片 1>中的近景机位高度、主体比例、左耳位置、指尖位置和暖色曝光开场；只有触摸的手替换为王小安的手。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。回忆段落使用确认的同一建筑并略微偏暖，不使用梦境滤镜。
[镜头 1] 第一个解码画面就是<图片 1>的精确暖色左耳近景，沿用其机位高度、主体比例、左耳位置和指尖位置，与15镜直接硬切衔接。林夕左耳旁的手属于<主体 2>，明确进入三年前回忆。他的手轻柔地把一缕碎发别到她左耳后一次。在他的手动的同时，摄影机缓慢、匀速、连续地拉远，逐渐显出站在她侧后方略右的<主体 2>，拉远落定为容纳两人的稳定中景双人构图并停住：他把手从她脸旁放下并注视她，她眼神持住、嘴唇闭合、眉形平稳。光线从首帧起就比现在时段略暖，并在整条内不变。摄影机只做一次缓慢拉远然后静止；不推近、不摇、不移、不变焦、不切、不溶解、不抖动。场景中只有一个林夕和一个王小安，不出现重复人物。脸与手保持稳定，所有露出的身体部位服装连续；除最多一次自然眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 17　01:16.5–01:21.5　额头相抵而没有越界

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-dressing-area
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_17_h3_v05.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-dressing-area: assets/scenes/apartment-dressing-area-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and the single silver stud at her left earlobe.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt and charcoal straight-leg jeans.
<Subject 3> is the confirmed bedroom dressing area anchored by <Picture 3>. Preserve the dark wood wardrobe, illuminated full-length mirror, warm wood floor, warm mirror light and warm ceiling light. Keep the confirmed geography fixed. Source: assets/scenes/apartment-dressing-area-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 memory shot of <Subject 1> and <Subject 2> in the same bedroom dressing area, continuing the established axis from shot 16 and following the single action below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, fixed objects and warm lighting from <Picture 3>; add only the two people described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look. This is the same three-years-earlier bedroom memory and the same warm, connected apartment established in shot 16; warm mirror light remains steady throughout.
[Shot 1] Begin on a stable eye-level medium close two-shot of <Subject 1> and <Subject 2>, facing each other at a gentle three-quarter angle, on the same axis as the ending of shot 16. Keep both faces and shoulders clearly framed at the same scale throughout; the mirror, wardrobe and rest of the room stay out of frame. <Subject 2> is unmistakably Wang Xiao-an, the clean-shaven adult man with the short layered black haircut from <Picture 2>; keep his male face, short hair, black crew-neck T-shirt and charcoal jeans unchanged in every frame. He eases back by one small half-step and pauses without turning away. Then <Subject 1> deliberately leans forward a little. They incline their heads slightly in opposite directions so the upper forehead just below each hairline is the single contact point. Their noses remain visibly separated by a small gap, and their closed lips stay clearly apart throughout. Their brows and noses do not touch. Hold only this forehead-to-forehead contact through the final frame. <Subject 1> closes her eyes briefly once and reopens them; the gaze of <Subject 2> stays on her eyes until the forehead touch. Their shoulders remain relaxed and their breathing small and synchronized. Hands stay at their sides or below frame. The camera stays locked at shoulder height with shallow depth of field focused on both faces; no push, pull, pan, tilt, zoom, cut, dissolve, shake or reframing. Exactly one Lin Xi and one Wang Xiao-an remain in the scene. No kiss, lip contact, embrace, tears or crying. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one described eye-close, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, sobbing or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色长直发、自然肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，左耳佩戴唯一一枚银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色短发、自然肤色、修长匀称身形、克制神情、黑色圆领T恤和深灰直筒牛仔裤。
<主体 3> 是由<图片 3>锁定的已确认卧室更衣区。保持深木衣柜、带灯落地镜、暖色木地板、暖色镜灯和暖色顶灯。确认的地理关系固定不变。来源：assets/scenes/apartment-dressing-area-upload-v01.png。

摘要:
一条连续5秒、真人写实、16:9的回忆镜头，发生在第16镜已建立的同一卧室更衣区，并沿用同一镜头轴线，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、固定物件与暖色光线；只加入下方镜头中的两人。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感。这是三年前的同一段卧室回忆，沿用第16镜确立的同一套相连公寓与稳定暖色镜灯。
[镜头 1] 以平视、稳定的双人中近景开场，<主体 1>与<主体 2>以柔和的三分之二角度相对而立，沿用第16镜结尾的同一轴线。全程保持两人的脸和肩部清楚入画、景别大小不变；镜子、衣柜和房间其他部分不入画。<主体 2>始终明确是<图片 2>中的王小安：成年男性、无胡须、黑色短层次发型；每一帧都保持男性面孔、短发、黑色圆领T恤和深灰牛仔裤，不得变成长发或改变身份。他先轻轻向后退半步，停住但不转身离开。然后<主体 1>主动稍稍向前靠近，缩短距离，直到两人额头轻轻相触。这个接触保持到最后一帧，嘴唇之间始终清楚留有距离。<主体 1>只短暂闭眼一次后睁开；<主体 2>的目光始终停在她的眼睛上。两人肩膀放松，呼吸细而同步。双手留在身侧或画面下方。摄影机固定在肩高，浅景深同时对焦两人的脸；不推、不拉、不摇、不移、不变焦、不切、不溶解、不抖动、不重新构图。场景中始终只有一个林夕和一个王小安。不接吻、不拥抱、不落泪、不哭泣。脸与手保持稳定，服装连续；除明确的一次短暂闭眼外，眼皮保持睁开，虹膜与瞳孔清晰可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、啜泣或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/[镜头 1] 以平视、稳定的双人中近景开场，<主体 1>与<主体 2>以柔和的三分之二角度相对而立，沿用第16镜结尾的同一轴线。全程保持两人的脸和肩部清楚入画、景别大小不变；镜子、衣柜和房间其他部分不入画。<主体 2>先轻轻向后退半步，停住但不转身离开。然后<主体 1>主动稍稍向前靠近。两人头部轻微朝相反方向倾斜，让发际线下方的上额头成为唯一接触点。两人的鼻尖之间始终留有小而清楚的间隙，闭合的嘴唇也始终明显分开；眉毛与鼻尖都不相碰。只有额头保持相抵直到最后一帧。<主体 1>只短暂闭眼一次后睁开；在额头相触前，<主体 2>的目光始终停在她的眼睛上。两人肩膀放松，呼吸细而同步。双手留在身侧或画面下方。摄影机固定在肩高，浅景深同时对焦两人的脸；不推、不拉、不摇、不移、不变焦、不切、不溶解、不抖动、不重新构图。场景中始终只有一个林夕和一个王小安。不接吻、不嘴唇接触、不拥抱、不落泪、不哭泣。脸与手保持稳定，服装连续；除明确的一次短暂闭眼外，眼皮保持睁开，虹膜与瞳孔清晰可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、啜泣或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 18　01:21.5–01:26.5　手指在身侧相扣

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-dressing-area
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_18_h3_v03.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-dressing-area: assets/scenes/apartment-dressing-area-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve the same face, long straight black hair, naturally fair skin, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when visible.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve the same clean-shaven adult face, short layered black hair, naturally fair skin, tall balanced build, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed bedroom dressing area anchored by <Picture 3>. Preserve the dark wood wardrobe across the center, illuminated full-length mirror on the left, bathroom doorway farther left, warm wood floor and warm mirror light. Keep this fixed layout and its lighting. Source: assets/scenes/apartment-dressing-area-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> sharing a quiet intimate moment with their hands clasped.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same adult identity, face, hair, body proportions and reference clothing in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - same adult identity, face, hair, body proportions and reference clothing in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - same confirmed geometry, materials, fixed objects and warm lighting from <Picture 3>.

detailed_description:
The target is photoreal live-action in real time, with restrained contemporary Chinese music-video styling and the slightly warm memory lighting established in the preceding shot.
[Shot 1] A steady eye-level medium close two-shot frames both faces and their joined hands at the lower center, from chest height to just below the waist. <Subject 1> and <Subject 2> face each other in a mild three-quarter view, standing close but not embracing. Their hands meet once at their sides; fingers interlace gently and settle, then remain joined without squeezing or separating. At first <Subject 1> looks briefly toward their joined hands, then lifts her eyes once to meet his. Her brows soften and one corner of her closed mouth eases into a faint, unforced smile; she releases one small breath. <Subject 2> keeps his gaze on her, his brow loosens and his closed lips answer with a barely visible smile. They hold the shared look, with at most one slow natural blink each. Both faces, eyes and clasped fingers remain readable and stable. The camera holds a static shot; warm mirror light stays constant. Keep the wardrobe and illuminated mirror in the same left-right positions. Smooth skin texture, coherent clothing, stable faces and hands, visible irises and pupils. No profile turn, facial warping, flickering eyes, extra fingers or limbs, on-screen text or logos.

overall_soundscape:
silence. No generated dialogue, singing, footsteps or room ambience; use the confirmed song master only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一面孔、黑色及腰长直发、自然肤色、黑色露肩针织上衣、深色高腰牛仔裤、纤细成年身形，入镜时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须成年面孔、黑色蓬松短发、自然肤色、修长匀称身形、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认卧室更衣区。保持中央深木衣柜、左侧带灯落地镜、更左侧浴室门洞、暖色木地板与暖色镜灯；空间布局和光线固定不变。来源：assets/scenes/apartment-dressing-area-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的 MV 镜头，<主体 1>与<主体 2>相对站立并在身侧相扣双手。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、固定物件与暖色灯光。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国 MV 质感，回忆段落沿用上一镜略暖的光线。
[镜头 1] 平视双人中近景，画面从胸口至腰下，林夕与王小安的脸和画面下方中央相扣的手同时清楚可辨。两人以轻微三分之二角度相对站立，靠近但没有拥抱。双手在身侧只靠拢一次，手指轻轻交扣后落定，全程保持相扣，不挤握、不分开。起初林夕短暂看向交扣的手，随后只抬眼一次与王小安对视；她的眉眼放松，闭合的唇角一侧自然松开成极淡的笑意，并轻轻呼出一口气。王小安一直看着她，眉间松开，闭合唇线给出几乎看不出的回应。两人维持这次眼神交流，每人最多自然慢眨一次。两张脸、眼睛和交扣手指始终清楚稳定。固定机位，暖镜灯保持恒定；衣柜和落地镜的左右位置不变。肤理真实、服装连续、五官和双手稳定，虹膜与瞳孔可读。不转成正侧脸，不变形、不闪脸、不增加手指或肢体，不出现文字和商标。

整体声音环境:
静音。不生成对白、演唱、脚步或室内环境声；已确认歌曲母带只在后期使用。

非叙事音乐:
N/A
````

### 19　01:26.5–01:32　他从身后替她关小炉火

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-kitchen-corridor
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_19_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-kitchen-corridor: assets/scenes/apartment-kitchen-corridor-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed open kitchen and corridor anchored by <Picture 3>. Preserve the open kitchen on the left with dark counter, cooktop and the black mug hanging left of the white mug; the straight central corridor leads toward the living room, upright piano and balcony, while the bedroom edge remains on the right. Keep the warm interior light and cool blue-hour windows consistent. Source: assets/scenes/apartment-kitchen-corridor-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] In the warmer memory version of the open kitchen, <Subject 1> stands at the cooktop while <Subject 2> stands close behind without enclosing her body. He reaches past once to turn the burner down; the control stops at the lower setting and his hand withdraws only a few centimeters. Her hand remains on the same utensil. A static medium shot keeps both faces in mild three-quarter view and the kitchen layout fixed. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认开放式厨房与短廊。保持左侧开放厨房、深色台面与灶台，以及杯架上左黑右白的两只杯子；中央直廊通向客厅、立式钢琴与阳台，卧室边缘位于右侧。暖色室内光与蓝调窗光保持一致。来源：assets/scenes/apartment-kitchen-corridor-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 把相扣的手转成日常照顾；王小安从林夕身后伸手关小炉火，手臂环过但不收紧。 厨房侧面中景，林夕站在灶台前，王小安从右后方伸手将旋钮转小后停住；两人身体保留一掌距离，她侧目看他的手，嘴角只轻微松开。 台面高度标准焦段，中景深对焦旋钮和两人上身；从左向右小幅横移跟随手臂，动作完成即锁定。暖厨房灯恒定。 地点：三年前公寓开放式厨房，左侧通短廊，右侧接客厅。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 20　01:32–01:36　一黑一白两只杯子

- 出镜人物 ID：无
- 场景基准图 ID：apartment-kitchen-corridor
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_20_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> apartment-kitchen-corridor: assets/scenes/apartment-kitchen-corridor-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the confirmed open kitchen and corridor anchored by <Picture 1>. Preserve the open kitchen on the left with dark counter, cooktop and the black mug hanging left of the white mug; the straight central corridor leads toward the living room, upright piano and balcony, while the bedroom edge remains on the right. Keep the warm interior light and cool blue-hour windows consistent. Source: assets/scenes/apartment-kitchen-corridor-upload-v01.png.

summary:
[reference generation] one continuous 4-second photoreal live-action 16:9 MV shot of <Subject 1>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 1>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] An empty counter-height close shot holds on exactly two ceramic mugs hanging from the same rail: black on the left and white on the right. Their spacing, handles and glaze remain stable. Warm kitchen light reflects softly while cool dusk stays beyond the window. The camera trucks right with very small amplitude at slow speed; no hand or person enters. Scene geometry, paper, furniture, props, lighting and material texture remain stable. No living person, new object, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是由<图片 1>锁定的已确认开放式厨房与短廊。保持左侧开放厨房、深色台面与灶台，以及杯架上左黑右白的两只杯子；中央直廊通向客厅、立式钢琴与阳台，卧室边缘位于右侧。暖色室内光与蓝调窗光保持一致。来源：assets/scenes/apartment-kitchen-corridor-upload-v01.png。

摘要:
一条连续 4 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 从人物切到他们共同生活的痕迹；两只杯子并排，证明亲密不是一场姿态。 杯架近景，唯一一黑一白两只陶瓷杯并排，黑杯在左、白杯在右，背景仅保留虚焦厨房暖光，不出现人物。 台面高度中长焦浅景深，固定对焦杯沿；无运镜，暖灯反射稳定。 地点：三年前与现在相同的开放式厨房杯架。 场景几何、纸张、家具、道具、光线和材质纹理保持稳定。不出现活人、新物件、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 21　01:36–01:41　一副耳机分给两个人

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_21_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed apartment piano living room anchored by <Picture 3>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] <Subject 1> and <Subject 2> sit shoulder to shoulder on the living-room rug before the same piano in the warmer memory light. Each wears one side of a single shared pair of headphones. He straightens the cable once between them and stops; their shoulders remain lightly touching. The camera holds a static medium shot, both faces in mild three-quarter view with closed lips and stable eyes. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 回忆继续向客厅推进，两人坐在地毯上共享一副耳机；那首歌属于他们共同完成的夜晚。 客厅地毯中景，林夕与王小安并肩坐在钢琴前方，一人戴一侧耳机，肩膀轻触；他把线缆理到两人中间，她低眼听旋律，嘴唇闭合。 略低平视标准焦段，中景深保留钢琴和双人关系；固定拍摄，让线缆整理成为唯一动作。暖色回忆光，钢琴位置与现实一致。 地点：三年前客厅钢琴前地毯。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 22　01:41–01:44　薄毯落到她肩上

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_22_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed apartment piano living room anchored by <Picture 3>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 3-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] <Subject 1> is already asleep fully clothed with her head resting near the closed piano lid. <Subject 2> lays one dark gray blanket across her shoulders, smooths it once, then moves one loose strand away from her face and stops. She remains still with eyes closed. The camera holds a static piano-height medium close; the blanket does not change form after settling. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 3 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 王小安把薄毯盖到伏在琴边睡着的林夕肩上，第一遍“我更爱你了”落在照顾而非宣言。 钢琴侧面中近景，林夕伏在合拢的琴盖边，王小安只把深灰薄毯轻铺到她肩上，指尖最后替她拨开一缕头发；她安静闭眼。 琴键高度中长焦浅景深，固定机位，毯子从画面上方落下一次后保持。暖回忆光不变。 地点：三年前客厅钢琴区。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 23　01:44–01:50　她穿过短廊回到现实

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-kitchen-corridor
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_23_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-kitchen-corridor: assets/scenes/apartment-kitchen-corridor-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed open kitchen and corridor anchored by <Picture 2>. Preserve the open kitchen on the left with dark counter, cooktop and the black mug hanging left of the white mug; the straight central corridor leads toward the living room, upright piano and balcony, while the bedroom edge remains on the right. Keep the warm interior light and cool blue-hour windows consistent. Source: assets/scenes/apartment-kitchen-corridor-upload-v01.png.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] Back in the present, <Subject 1> walks from the bedroom end of the corridor toward the living-room piano at one slow even pace. The open kitchen remains on her left, the corridor stays centered and the piano and balcony remain visible ahead. Her gaze holds toward the bench and she does not turn into any doorway. The camera follows backward with small amplitude at slow speed, maintaining constant distance. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认开放式厨房与短廊。保持左侧开放厨房、深色台面与灶台，以及杯架上左黑右白的两只杯子；中央直廊通向客厅、立式钢琴与阳台，卧室边缘位于右侧。暖色室内光与蓝调窗光保持一致。来源：assets/scenes/apartment-kitchen-corridor-upload-v01.png。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 从回忆暗部切回现在，林夕沿厨房与客厅之间的短廊走向钢琴；她已穿妥赴约衣服，回忆不再替她占据现实。 短廊中全景，林夕从卧室方向走向客厅，左侧开放式厨房、右前方钢琴和阳台都可辨认；她步速慢，目光始终落在琴凳。 走廊尽头平视略广角，深景深；小幅向后跟移保持距离，动机是让相连空间依次出现。现实恢复冷暖混合光。 地点：公寓短廊，从卧室经厨房通向客厅。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 24　01:50–01:56　现在仍摆着两只杯子

- 出镜人物 ID：无
- 场景基准图 ID：apartment-kitchen-corridor
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_24_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> apartment-kitchen-corridor: assets/scenes/apartment-kitchen-corridor-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the confirmed open kitchen and corridor anchored by <Picture 1>. Preserve the dark counter, the same black mug hanging on the left, the same white mug hanging on the right, the central corridor, warm interior light and cool blue-hour window. Source: assets/scenes/apartment-kitchen-corridor-upload-v01.png.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the confirmed kitchen geometry, mug positions, materials and lighting from <Picture 1>; add only the anonymous hand touch described below.

detailed_description:
A counter-height close shot holds exactly two ceramic mugs hanging from the same rail: black on the left and white on the right. Both mugs remain fixed in place, aligned and untouched except for one brief touch by two unidentifiable fingertips from the right edge brushing the outside of the white handle without lifting, rotating or moving it; the fingertips immediately leave. No face, body, clothing, readable person or extra hand enters. The camera is locked off; mug glaze, rail, counter, corridor and window light remain stable. No new object, text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是由<图片 1>锁定的已确认开放式厨房与走廊。保持深色台面、左侧同一只黑杯、右侧同一只白杯、中央走廊、暖色室内灯与蓝调窗光。来源：assets/scenes/apartment-kitchen-corridor-upload-v01.png。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的厨房几何、杯子位置、材质与光线；只加入下方匿名手指触碰动作。

详细描述:
柜台高度近景始终只拍同一根挂杆上的两只陶瓷杯：左黑右白。两只杯子全程固定、对齐，只有两个无法辨认的手指从右侧画外短暂擦过白杯把手外侧一次，不抬起、不旋转、不移动，随后立即离开。不得出现脸、身体、服装、可读人物或多余手。机位锁死；杯釉、挂杆、台面、走廊和窗光保持稳定。不出现新物件、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 25　01:56–02:01　她坐下仍给他留位置

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_25_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] <Subject 1> sits on the left half of the two-person piano bench and shifts left once by half a body width, leaving the entire right half clear. She finishes with both hands on her lap and gaze on the score. The entrance remains visible behind the empty place. The camera holds a static piano-height medium shot and keeps her face, bench division and doorway readable. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 林夕坐到琴凳左半并向左挪一点，主动留下右半；观众看见等待已成为身体习惯。 钢琴正侧中景，林夕从画面左侧坐下，双手放到膝上，再向左挪半个身位；右半琴凳完整留空，玄关在背景右侧。 琴键高度标准焦段，中景深同时看清人物、空凳和玄关；固定机位，不跟随，动作结束后留一拍。现实窗光偏冷。 地点：现实客厅钢琴区。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 26　02:01–02:06.5　空位终于被她看清

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_26_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] A three-quarter medium close places <Subject 1> on the left, the empty bench in the right foreground and the entrance in the right background. Her gaze moves once from the empty place to the doorway and then holds. Brows tighten slightly, lips stay closed and her inhalation pauses. The camera pushes in with tiny amplitude at slow speed; at most one natural blink. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 从双人宽度切到林夕与空位的近关系；她看向玄关一次，确认王小安还没有出现。 三分之二中近景，林夕在左，空琴凳前景占右下，玄关虚焦在右后；眼神从空位移到玄关一次，眉心微收，唇闭，吸气停住。 眼高中长焦浅景深对焦脸，空位和玄关形成前后层次；极小幅慢推，动机是让确认缺席变得不可回避。 地点：现实客厅钢琴区。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 27　02:06.5–02:12.5　她主动打开门迎接空气里的吻

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_27_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] <Subject 1> stands just inside the already open balcony door, fully dressed and turned only mildly three-quarter toward outside. She closes her eyes once and takes one deep breath as her long hair and the white sheers move gently in the same direction. The door state and blue-hour skyline remain unchanged. The camera holds a static shoulder-height medium close; lips stay closed. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 林夕已推开阳台门，站在门内闭眼迎风；她不再等幻觉出现，而是让风真实触到脸。 阳台门内中近景，门已完全打开，林夕三分之二朝向室外，长发与纱帘向屋内同一方向轻动；她闭眼，眉心放松，唇闭，胸腔完成一次深呼吸。 肩高标准至中长焦，浅景深对焦脸，固定机位；风是唯一运动，不在镜内改变门的状态。外部蓝调夜色与室内暖灰保持。 地点：现实客厅阳台门，门外只见同一城市夜色，不另造地点。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 28　02:12.5–02:17.5　她从等待走回演唱

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_28_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] <Subject 1> walks from the open balcony door to the piano along the confirmed clear route, then sits on the left half of the bench and stops. The curtains continue one gentle direction of movement and no second person appears. The camera trucks left with moderate amplitude at slow speed, stopping as she sits. Her face remains readable but the shot prioritizes the connected room geography. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 接住向屋内的风，林夕从阳台门走回琴凳并坐下；这是她决定把歌主动唱出去的行动。 客厅中全景，阳台门在右后保持打开，林夕从右向左走到钢琴并坐到左半琴凳；窗帘持续同方向轻动，屋内无人增加。 平视略广角，深景深；从右向左做中等幅度缓慢横移跟随，人物坐下即停止，动机是连接阳台与钢琴。 地点：现实客厅阳台门到钢琴的固定路线。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 29　02:17.5–02:23　第一个和弦把房间唤醒

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_29_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] <Subject 1> sits steadily on the left half of the bench while the right half remains empty. Both hands lower once onto the keys, press the first chord and hold. Her shoulders release slightly with one exhale. The camera holds a static piano-height medium shot, keeping hands, mild three-quarter face, empty place and moving score edge in the same composition. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 林夕双手落到琴键并按下第一个和弦，空着的右半琴凳仍在画面里；她开始独自完成两个人的歌。 钢琴斜侧中景，林夕左侧坐姿稳定，右半琴凳清晰空着；双手从键上方落下并停在和弦，肩膀随呼气落下一点。阳台风仍轻动琴谱。 琴键高度标准焦段，中景深；固定机位，构图同时保留手、脸和空位。右后方冷风光与左侧室内暖反射相衡。 地点：现实客厅钢琴区。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 30　02:23–02:28　为他写的歌仍缺最后两小节

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_30_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] A slightly high close shot frames the score above and <Subject 1>’s hands below. The title and the same two blank final measures remain unchanged while her fingers continue the established chord pattern. One paper corner lifts gently in the balcony airflow and settles without turning the page. The camera holds static and makes one slow focus transfer from the blank measures to the hands. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 从手切到琴谱，标题与空白末尾再次出现；这首歌正在被唱出，但约定还没有被另一人回应。 琴谱与弹琴手指斜俯特写，谱面位于上半画面，双手位于下半；末尾空白小节保持不变，纸页只被风抬起边缘。 略高俯拍中长焦，浅景深在谱面标题与手指之间做一次缓慢移焦；固定机位。窗风光从右侧扫过纸纹。 地点：现实钢琴谱架与琴键。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 31　02:28–02:33.5　眼泪还没有掉下来

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_31_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] A mild three-quarter medium close keeps <Subject 1>’s face large and unobstructed. Her eyes remain open and wet but no tear falls; her brows tremble once and settle while her lips stay closed as a clean reference for later lip sync. Her gaze holds on the score and her breath deepens. The camera pushes in with tiny amplitude at slow speed; the empty bench stays recognizable behind her. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 回到林夕的脸，眼眶出现水光但她继续弹；“歌在掉泪”先落成压住的情绪，为真正落泪留到高潮。 正面轻三分之二中近景，林夕面向琴谱，嘴部无遮挡；眼眶微湿但没有泪滴，眉尾轻颤后稳定，唇闭基准供后期对口型，呼吸随乐句加深。 眼高85mm倾向浅景深，极小幅慢推至脸，动机是第一次直接连接观众；背景空位虚焦仍可辨。柔和侧窗光照脸。 地点：现实客厅钢琴区。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 32　02:33.5–02:38　第一次正面唱出我还记得

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_32_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment piano living room composition guide: assets/shot-guides/shot-32-composition-guide.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/shot-guides/shot-32-composition-guide.png. This frame preserves the confirmed apartment piano living-room geometry and the exact static composition.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] Begin immediately in the exact frontal medium-close composition of <Picture 2> and hold that identical composition for the entire shot. <Subject 1> remains seated and completely still at the fixed camera distance: her head size, shoulder crop, torso position, piano edge and window position do not change between the first and last frame. She holds a steady gaze toward the camera with composed brows and open, readable eyes. Her jaw is completely motionless and both lips remain gently touching in the same neutral closed shape in every frame. The tripod camera is absolutely locked with no dolly, push, zoom, digital crop, reframing or focus breathing under stable side window light. Face, hair, clothing, piano and background remain stable. No body lean, forward movement, head tilt, jaw movement, lip separation, blink, hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Generate no audio.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/shot-guides/shot-32-composition-guide.png。该构图帧同时保留已确认公寓钢琴客厅的空间几何与精确静态构图。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 首帧立即采用<图片 2>的精确正面中近景构图，并在整镜保持完全相同的构图。林夕坐姿与摄影机距离固定且全程静止，首尾帧的人头大小、肩部裁切、躯干位置、钢琴边缘和窗户位置均不改变。她以克制眉眼稳定直视镜头，眼皮睁开且虹膜清晰；下颌完全静止，上下唇每一帧都以同一中性闭合形状轻轻相贴。三脚架机位绝对锁死，不推轨、不推近、不变焦、不做数字裁切、不重构图、不呼吸式变焦，右侧窗光稳定且脸部不过曝。脸、头发、服装、钢琴与背景保持稳定。不出现身体倾斜、身体前移、歪头、下颌动作、嘴唇分开、眨眼、正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 33　02:38–02:44　她独自弹稳曾由他带过的和弦

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_33_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano and the fixed wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, and blue-hour city view. The bench is a fixed object: it must not slide, rotate, fold, or change position. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] The first frame is already a tight keyboard-height close-up of <Subject 1>’s hands and the piano keys; remain in this composition for the entire shot with no establishing view, no wide opening, no hard cut, and no reframing. Her left hand sustains the bass while the right hand completes one clear chord change and then holds. The glossy black lid reflection contains only her established silhouette, never a second person. The camera trucks right with small amplitude at slow speed along the keyboard and stops with coherent fingers and keys. Hands, keys, and the fixed piano bench remain spatially consistent, clothing stays coherent, and no extra fingers, extra limbs, new person, scene change, on-screen text or logo appears.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘和蓝调城市夜景。琴凳是固定物件，不得滑动、旋转、折叠或改变位置。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 从正脸切到双手，林夕在过去需要王小安带领的位置独自弹稳；爱没有让她停在无力等待里。第一帧就进入琴键高度的双手近景，全程保持这一构图，不要大全景开场、硬切或重新构图。左手维持低音，右手完成一次和弦转换后稳定；黑色琴盖倒影只出现她一人，不凭空出现王小安。沿键盘从左向右小幅慢移，跟随和弦转换后停止；手、琴键和固定不动的琴凳保持空间一致。地点：现实钢琴键盘。不出现多指、多肢体、凭空新增人物、场景变化、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 34　02:44–02:49　风让她第一次松开嘴角

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_34_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. The bench is a fixed object: it must not slide, rotate, fold, or change position. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] The first frame is already a side-front medium close of <Subject 1> at the piano, with her face large and the balcony route only softly implied; remain in this composition for the entire shot with no establishing view, no wide opening, and no hard cut. Her hair moves gently left in the same balcony airflow; she closes her eyes once, reopens them and lets her gaze settle toward the entrance. Her brows relax and the corners of her closed lips rise only slightly, preserving a clean later lip-sync base. The camera holds static; no second glance or repeated blink. Face, hair, hands, and the fixed bench remain spatially stable, clothing stays coherent, and no extra fingers, extra limbs, new person, scene change, on-screen text or logo appears.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 风从阳台掠过林夕的脸，她没有躲开，嘴角第一次出现极轻的笑意；等待开始从苦涩转向传达。 侧前方中近景，发丝向左轻动，林夕闭眼一次后睁开看向玄关方向；眉心舒展，嘴角只上扬一点，唇闭基准清晰。 肩高85mm倾向浅景深，固定机位；风和一次视线移动承担画面变化。冷窗光在眼睛形成小高光。 地点：现实客厅钢琴区，阳台门仍在右后打开。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 35　02:49–02:54　王小安真实出现在门口

- 出镜人物 ID：wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_35_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. The bench is a fixed object: it must not slide, rotate, fold, or change position. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 2>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] The first frame is already a static eye-level medium-full view from the piano toward the right-side entrance. <Subject 1> is already standing alone just inside the doorway, with both feet planted and his body fixed in the same floor position for the entire shot; he must not walk, lean forward, approach the camera, or change scale. He holds the one wooden pencil loosely at his right side. His gaze stays toward Lin Xi off camera, brows calm with a trace of regret, lips closed. The camera is locked with no push, dolly, zoom, pan, or reframing; the foreground score rack stays softly out of focus while his face and doorway remain sharp. Faces and hands remain stable, clothing stays coherent, and no extra fingers, extra limbs, new person, scene change, on-screen text or logo appears.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚男性王小安，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 沿林夕视线切到玄关，王小安已经站在门内，手握三年前带走的铅笔；歌曲里的“他会告诉你”第一次得到现实回应。 从钢琴方向望向玄关的中全景，王小安独自站在门内，黑色上衣与深灰长裤保持；右手自然垂下握着唯一那支木铅笔，目光越过镜头看向林夕，神情平静而有歉意，不迈步。 钢琴后方平视标准焦段，中景深同时保留前景虚焦谱架和玄关人物；固定机位，不让人物凭空进入，开镜即已在场。冷门外光勾边，室内暖光照脸。 地点：现实公寓玄关，面对客厅钢琴。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 36　02:54–02:59.5　他坐上空了三年的位置

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_36_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed apartment piano living room anchored by <Picture 3>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. The bench is a fixed object: it must not slide, rotate, fold, or change position while either person sits. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] The first frame is already a static piano-height two-person medium shot with <Subject 1> seated on the left half of the fixed bench and <Subject 2> standing beside its right half. The bench must stay planted in the same floor position and must not slide, rotate, fold, or change scale. <Subject 1> shifts left once; <Subject 2> sits once into the cleared place, then both finish facing the keys without embracing. Keep the entire bench and score rack visible. The camera is locked with no push, dolly, zoom, pan, or reframing. Faces and hands remain stable, clothing stays coherent, and no extra fingers, extra limbs, new person, scene change, on-screen text or logo appears.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 王小安已走到琴边，林夕向左让出位置，他坐到右半琴凳；“你会记得”在空位被填满的瞬间得到回答。 钢琴正侧双人中景，王小安在开镜时站在右侧琴凳旁，林夕向左微挪，他随即坐下；动作结束时两人并肩但不相拥，眼神先落琴键。 琴键高度标准焦段，中景深完整保留双人、琴凳和谱架；固定机位，让位置变化清楚可读。室内暖光稍占上风但不改变时段。 地点：现实客厅钢琴区。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 37　02:59.5–03:04　肩膀轻轻碰在一起

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_37_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed apartment piano living room anchored by <Picture 3>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] <Subject 1> and <Subject 2> sit side by side facing the piano. Their shoulders move together once until they touch lightly and then remain there. She keeps her gaze on the score; he looks at her once and returns his gaze to the keys. Both lips stay closed and their breathing slows. The camera trucks left with tiny amplitude at slow speed into a balanced two-person medium close. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 落座后两人都没有急着拥抱，只让肩膀自然相碰；长期承诺回到最克制的身体距离。 双人上半身中近景，两人面向钢琴，肩膀轻触后保持；林夕眼神仍看琴谱，王小安看她一眼后回到琴键，双方唇闭，呼吸逐渐同步。 眼高标准至中长焦，浅景深对焦两人同一平面；从右向左做极小幅慢移，把两人收进对称构图后停住。暖灰光线稳定。 地点：现实客厅双人琴凳。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 38　03:04–03:09.5　三年前的铅笔回到琴谱

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_38_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the confirmed piano score and fixed piano-key area anchored by <Picture 1>. Preserve the same open score page, the same two blank final measures, the same piano keys at the lower edge, the same black piano surface, warm interior reflection and cool window light. The page and pencil are fixed visual props; do not replace the paper. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV insert shot of <Subject 1>, following the single prop action and locked camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the exact score page, blank measures, piano keys, paper edges and lighting from <Picture 1>; add only one hand placing one wooden pencil and the continuing lower-edge playing hands described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video insert inside the same apartment. The first frame is already a slightly high oblique close-up of the same score page, the same two blank final measures and the piano keys at the lower edge. Hold this single composition for the entire shot: no establishing view, no people standing in the background, no faces, no three-view display, no hard cut, no page replacement and no reframing. One adult right hand enters from the right and places exactly one wooden pencil horizontally beneath the blank measures, releases it once, and withdraws; the pencil stays still and does not roll. Lin Xi’s playing hands remain at the lower edge on the same keys. The camera is locked with shallow depth of field on the paper, pencil and coherent fingers. No extra hands, extra pencils, extra limbs, new person, scene change, text overlay or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 王小安把带回来的铅笔放到末尾空白两小节旁；他没有替她写答案，只把共同完成的可能还回来。 谱架与手部特写，王小安右手将唯一木铅笔水平放在空白小节下方，林夕弹琴的手在画面下缘持续；铅笔落下后不滚动。 略高俯斜中长焦浅景深，对焦铅笔与空白小节；固定机位，单一放置动作。风只抬纸角，不改变道具位置。 地点：现实钢琴谱架。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 39　03:09.5–03:14　一滴泪把旧墨晕开

- 出镜人物 ID：无
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_39_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the same piano score page and black piano surface from the confirmed apartment piano setting. Preserve the exact sheet, existing ink, two blank final measures, paper texture and a single wooden pencil resting below the blank measures.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 macro insert shot of <Subject 1>, following the single liquid action and locked camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the exact score page, ink, blank measures, pencil and paper edges from the reference description; add only one tear drop.

detailed_description:
The target video is photoreal live-action in real time. The first frame is already an extreme macro close-up of the same score page, the same two blank final measures and the same pencil below them; hold this exact paper-only composition for the entire shot. One single clear tear drop enters from above, lands once beside existing ink, and creates only a small localized bloom. The pencil never moves, the paper is never replaced, no person or room appears, and there is no cut, pullback, pan, zoom, dissolve or change of focal plane away from the drop. Keep the blank measures readable throughout. No extra droplets, flood, splash, new object, face, hand, scene change, text overlay or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是由<图片 1>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 林夕的泪终于落到琴谱，把旧墨晕开一点；前面压住的情绪在歌曲最强处释放，但不变成大哭。 琴谱极近特写，一滴泪从画面上方落在既有墨迹边缘，形成一个小范围晕染；空白两小节和铅笔仍保持，纸张不被替换。 俯拍微距倾向，极浅景深对焦泪滴落点；固定机位，不慢动作，不夸张扩散。右侧窗光照见水光。 地点：现实钢琴谱架。 场景几何、纸张、家具、道具、光线和材质纹理保持稳定。不出现活人、新物件、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 40　03:14–03:19.5　琴盖倒影里终于有两个人

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_40_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed apartment piano living room anchored by <Picture 3>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] The glossy black piano lid forms a stable reflected two-person medium close of <Subject 1> beside <Subject 2>. Their real bodies appear only as a narrow lower-edge contour. She looks at his reflected face while keeping her mouth naturally closed and unobstructed for later lip sync; he returns the look without moving closer. The camera holds static, preserving open eyelids, readable irises and an undistorted reflection. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 从晕开的墨切到黑色琴盖倒影，两张脸第一次在现实中并列；林夕向倒影唱出第二次“你会记得”。 黑色琴盖反射构成双人中近景，林夕与王小安并肩，真实人物只在画面下缘留少量轮廓；她目光看向倒影中的他，嘴部清晰可供后期对口型，他安静回望。 略低中长焦浅景深对焦琴盖倒影；固定机位，倒影稳定不变形。琴盖暖反光中保留右侧冷窗高光。 地点：现实钢琴琴盖与双人琴凳。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 41　03:19.5–03:24.5　他的手覆上她的手

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_41_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed apartment piano living room anchored by <Picture 3>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] A close shot isolates the keyboard and both pairs of hands. <Subject 1> already sustains the final chord with her left hand. <Subject 2>’s right hand enters once from screen right, rests gently across the back of her hand and then remains still; neither hand presses a second time. The camera pushes in with tiny amplitude at slow speed toward the joined hands, maintaining coherent fingers. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 王小安把手轻覆在林夕维持和弦的左手上，两人共同压住琴键；“我更爱你了”成为共同完成的动作。 琴键与双手近景，林夕左手先维持和弦，王小安右手从右侧进入轻覆手背，力度稳定；两只手停住，不重复按键。 琴键高度中长焦极浅景深对焦交叠手指；从右向左做极小幅慢推，动机是把两只手收成同一视觉中心。暖反射稳定。 地点：现实钢琴键盘。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 42　03:24.5–03:29.5　她迎着风真正笑了

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_42_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed apartment piano living room anchored by <Picture 3>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] A medium close holds <Subject 1> in focus while <Subject 2>’s shoulder remains a soft but coherent foreground presence at right. She raises her eyes toward the open balcony airflow, brows fully relax and a restrained natural smile appears. Her mouth remains suitable for light later lip sync and never becomes a broad grin. The camera holds static; her hair moves gently left and her tear-bright eyes remain readable. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 林夕感到手背上的温度，抬眼迎向阳台风；这次笑不是回忆，而是确认眼前的人已经回来。 林夕中近景，王小安肩部只在右侧前景虚焦出现；她眼中仍有泪光，眉心完全松开，嘴角自然上扬但不夸张，发丝向左轻动，呼吸释出。 眼高85mm倾向浅景深，固定机位；不推近，让风和微表情完成高潮中的停顿。右侧冷窗光与左侧暖反射平衡。 地点：现实客厅钢琴区，阳台门仍打开。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 43　03:29.5–03:34　他擦泪，她留下那只手

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_43_h3_v01.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed apartment piano living room anchored by <Picture 3>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] A two-person mild three-quarter medium close keeps both faces and the touch point sharp. <Subject 2> raises one hand and wipes <Subject 1>’s cheek once with his thumb. She closes her fingers around his wrist and keeps the hand there; no repeated wiping follows. Their gazes meet and hold, lips closed and breathing slow. The camera trucks right with tiny amplitude at slow speed and stops. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 王小安替林夕擦去脸颊泪痕，林夕握住他的手腕不让手离开；关系由等待转为真实触碰。 双人三分之二中近景，王小安用拇指轻触她脸颊一次，林夕抬手握住他手腕并保持；两人目光相遇，唇闭，呼吸放慢。 肩高标准至中长焦浅景深，对焦两人眼睛与触碰点；从左向右极小幅横移，为下一镜正面关系让出空间。暖灰光不变。 地点：现实客厅双人琴凳。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 44　03:34–03:40　最后一句唱给眼前的人

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_44_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed apartment piano living room anchored by <Picture 3>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below. The first frame must already be the live apartment shot; never show, recreate, or transition through any reference sheet, studio backdrop, or three-view board.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] <Subject 1> and <Subject 2> lean together once until their foreheads touch, then hold with their lips visibly separated. Lin Xi remains in a mild three-quarter angle that keeps her mouth clear for the final later lip sync; she does not mouth lyrics during generation. Her lower jaw and both lips stay completely still in one neutral closed-lip shape for the entire take; no lip movement and no singing mouth. Her fingers stay around his wrist while their other hands remain at the piano. The camera pushes in with tiny amplitude at slow speed, locking for the last two seconds. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 两人额头轻轻相抵，林夕保持能看见嘴部的三分之二角度，把“我更爱你了”唱给王小安；亲密停在呼吸与相扣的手指。 双人中近景，林夕朝镜头保留三分之二脸，王小安与她额头相抵但嘴唇保持距离；她的手仍握着他手腕，另一只手在琴键上，两人眼神落在彼此。 眼高85mm倾向浅景深，极小幅慢推后在最后两秒锁定；动机是让最后一句由演唱转为私密确认。光线柔和，无梦幻光斑。 地点：现实客厅双人琴凳。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 45　03:40–03:46.5　琴凳不再有空位

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_45_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings when the shot calls for them.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his same clean-shaven youthful adult face, short layered black hair, naturally fair skin, tall balanced build, restrained expression, black crew-neck T-shirt, charcoal straight-leg jeans and white low-top sneakers.
<Subject 3> is the confirmed apartment piano living room anchored by <Picture 3>. Preserve the black upright piano fixed on the left wall, the wide tufted black two-person bench centered before it, warm-gray walls, dark wood floor, white sheer curtains across the balcony glazing, the blue-hour city view, and the dark wood apartment entrance at far right. Keep the route between entrance, piano and balcony open and keep every left-right relationship unchanged. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 6.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 2> in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - keep the confirmed geometry, materials, camera-side relationships, fixed objects and lighting from <Picture 3>; add only the shot-specific people and props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look inside the same connected apartment. Present-day scenes use cool blue-hour window light mixed with warm-gray interior reflections; memory scenes use the same architecture with slightly warmer light, without a dream filter.
[Shot 1] A piano-height composition begins with both performers’ joined hands holding the same chord in the foreground. The score, blank final measures and wooden pencil remain in the middle plane while <Subject 1> and <Subject 2> sit side by side across the full bench. One paper corner lifts and settles once; no writing occurs. The camera pulls out with small amplitude at slow speed to reveal the piano, filled bench and balcony, then locks for the final second. Faces and hands remain stable, clothing stays coherent, eyelids stay open except for the one explicitly described blink, and irises and pupils remain readable. No hard profile turn, facial warping, flickering eyes, extra fingers, extra limbs, new person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，并在镜头要求时保留银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持同一张无胡须的年轻成年面孔、黑色蓬松短发、自然冷白肤色、修长匀称身形、克制神情、黑色圆领T恤、深灰直筒牛仔裤和白色低帮运动鞋。
<主体 3> 是由<图片 3>锁定的已确认公寓钢琴客厅。保持左墙黑色立式钢琴、正前方居中的宽大黑色双人软凳、暖灰墙面、深木地板、阳台玻璃前的白色纱帘、蓝调城市夜景，以及最右侧深木入户门。玄关、钢琴和阳台之间的路线保持畅通，所有左右关系不变。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 6.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持<图片 2>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间几何、材质、镜头侧关系、固定物件与光线；只加入下方镜头明确要求的人物与道具。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感，所有镜头发生在同一套相连公寓中。现实段落使用蓝调窗光与暖灰室内反射混合，回忆段落只在同一建筑基础上略微偏暖，不使用梦境滤镜。
[镜头 1] 尾奏回到两只共同压住和弦的手，再慢慢看见坐满的琴凳与被风掀起的琴谱；故事停在约定已被兑现的事实。 先以双手和琴键为前景，末尾空白两小节与铅笔位于中景，两人并肩坐满琴凳；风将琴谱纸角轻抬后落回，两只手始终停在同一和弦，不新增书写动作。 琴键高度标准焦段，中景深起步，向后做小幅慢拉，从手部关系扩展到完整钢琴、双人琴凳和阳台；速度均匀，最后一秒锁定。冷暖光线维持夜晚连续性。 地点：现实客厅钢琴区，最终全空间。 脸与手保持稳定，服装连续；除明确写出的一次闭眼或眨眼外，眼皮保持睁开，虹膜与瞳孔可读。不出现正侧90度转头、脸部变形、眼神闪烁、多指、多肢体、凭空新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````
