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
- 输出视频：`generated/video/raw/shot_02_h3_v06.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is Lin Xi from the combined front-side-back sheet in <Picture 1>. Keep her face, long straight black hair, black off-shoulder knit top, dark high-waisted jeans and silver stud earrings.
<Subject 2> is the apartment piano living room in <Picture 2>. Use its dark wood floor, warm-gray walls, black upright piano, wide balcony glass with white sheer curtains, and the single wooden cabinet with a gray rug beside the dark wood door.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> stopped inside the entrance, close to the door.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and clothing from <Picture 1>.
<Subject 2> (appears in [Shot 1]): weak_reference - borrow the dark wood floor, cabinet, wide balcony glass, wall color and piano from <Picture 2>.

detailed_description:
Photoreal live-action, a restrained contemporary Chinese urban music video. Blue-hour light comes through the balcony glass.
[Shot 1] The camera stands inside the open door, close to it, at chest height, looking along the right-hand wall. The dark wood door and its frame fill the right third from top to bottom. <Subject 1> stands on the gray rug, a medium shot from mid-thigh upward, with both eyes, eyelids, irises and pupils sharp. Her face stays in a mild three-quarter toward the room on frame left. In the first second her right hand sets a small set of keys on top of the wooden cabinet beside her, then the hand rests at her side. She stays on the rug. Her gaze begins on the keys and then holds on the room to her left, brows slightly drawn, lips closed, with at most one slow blink. The floor is dark brown wood. The cabinet is the one wooden cabinet beside the door, with a vase on it. Beyond the cabinet, white sheer curtains cover a wide balcony glass, and the night city fills that glass. Only a narrow black side of the upright piano enters at the far left. A few steps of the same dark floor separate the rug from that piano. The camera holds a static shot. Stable face and hands, smooth skin, coherent clothing. No extra person, no on-screen text, no logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps or room ambience; the confirmed song master is added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是林夕，身份来自<图片 1>的正面、侧面、背面合图。保持同一张脸、黑色长直发、黑色露肩针织上衣、深色高腰牛仔裤和银色耳钉。
<主体 2> 是<图片 2>里的公寓钢琴客厅。使用其中的深木地板、暖灰墙、黑色立式钢琴、带白纱帘的整面阳台玻璃，以及深色木门旁那一只木柜和灰色地毯。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1> 停在贴着门的入户门内。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>的同一张脸、发型、身体和服装。
<主体 2>（出现在[镜头 1]）：弱参考——借用<图片 2>的深木地板、木柜、整面阳台玻璃、墙色和钢琴。

详细描述:
真人写实，克制的当代中国都市 MV。蓝调光从阳台玻璃进来。
[镜头 1] 摄影机站在打开的门内，贴着门，胸口高度，顺着右侧墙壁看进去。深色木门和门框从上到下占满画面右三分之一。<主体 1> 站在灰色地毯上，大约从大腿中部往上的中景，双眼、眼皮、虹膜和瞳孔都清楚。脸保持轻微四分之三，朝向画面左侧的房间。第一秒右手把一小串钥匙放到身旁木柜顶上一次，然后手垂在身侧。她留在地毯上。视线先在钥匙上，再停在她左侧的房间，眉心轻收，双唇闭合，最多一次缓慢眨眼。地板是深棕色木地板。木柜是门边那一只，上面有花瓶。木柜后面，白纱帘罩着整面阳台玻璃，夜里的城市铺在玻璃上。立式钢琴只在最左侧进入一条黑边。地毯到这条黑边之间，是几步同样的深色地板。摄影机保持固定。脸和手稳定，皮肤自然，服装连续。不出现多余的人、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步或室内环境声；已确认歌曲母带只在后期加入。

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
- 输出视频：`generated/video/raw/shot_13_h3_v04.mp4`
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
<Subject 1> is Lin Xi, the adult woman in the combined three-view sheet <Picture 1>. Keep her face, long black hair, black off-shoulder top, dark jeans and one silver left-ear stud.
<Subject 2> is Wang Xiao-an, the adult man in the combined three-view sheet <Picture 2>. Keep his clean-shaven face, short black hair, black T-shirt and charcoal jeans.
<Subject 3> is the bedroom dressing area in <Picture 3>: dark wood wardrobe and warm tall-mirror light. Source: assets/scenes/apartment-dressing-area-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 shot of <Subject 1> and <Subject 2> facing each other while one hand from each interlaces at their sides.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and reference clothing in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - same male face, short black hair, body and reference clothing in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - same dark wood wardrobe and warm mirror light from <Picture 3>.

detailed_description:
Photoreal live-action, a restrained contemporary Chinese music-video look, with steady warm mirror light.
[Shot 1] A locked eye-level medium close two-shot frames both people from the chest to the hips. <Subject 2> stands on frame left and <Subject 1> on frame right, already close, each in a mild three-quarter turn toward the other. Both faces stay large enough for readable eyes, irises and pupils. A narrow gap remains between their torsos; noses and closed lips stay apart. At the lower center, beside their hips, one hand from each person meets once. The fingers interlace gently, then the clasp holds still. Each other hand stays lowered and outside the clasp. <Subject 1> looks once at the joined hands, then lifts her eyes to his face and holds there. Her brows soften, her closed mouth eases into a faint smile, and she releases one small breath. <Subject 2> keeps looking at her eyes, with a barely visible closed-mouth smile. Each blinks at most once. The camera holds a static shot. Dark wardrobe panels stay behind them and the warm mirror glow stays at the left edge. Exactly two people. Five fingers on each clasped hand, stable faces and hands, smooth skin, coherent clothing. No hard profile, facial warping, flickering eyes, extra fingers or limbs, new person, on-screen text or logo.

overall_soundscape:
silence. No generated voices; the song master is added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是林夕，即<图片 1>三视图合图中的成年女性。保持她的面孔、黑色长直发、黑色露肩针织上衣、深色高腰牛仔裤，以及左耳唯一一枚银色耳钉。
<主体 2> 是王小安，即<图片 2>三视图合图中的成年男性。保持他无胡须的面孔、黑色短层次发型、黑色圆领T恤和深灰直筒牛仔裤。
<主体 3> 是<图片 3>中的卧室更衣区：深色木衣柜和暖色高镜灯光。来源：assets/scenes/apartment-dressing-area-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的镜头。<主体 1>与<主体 2>面对面，各自用一只手在身侧交扣。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持同一面孔、发型、身体和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持同一男性面孔、黑色短发、身体和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>中的深色木衣柜和暖色镜灯。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国 MV 质感，暖色镜灯保持稳定。
[镜头 1] 固定的平视腰上中近景，画面从胸口到腰下方一点。<主体 2>在画面左侧，<主体 1>在画面右侧，开场时已经靠近，都以轻微三分之二角度转向对方。两张脸足够大，眼睛、虹膜和瞳孔可读。躯干之间留一条窄缝，鼻尖和闭合的嘴唇始终分开。画面下方中央、髋部旁边，每人只伸出一只手，靠拢一次后手指轻轻交扣，并保持到最后一帧。另一只手各自垂在身侧，不进入交扣。<主体 1>先看一次交扣的手，再抬眼看他的脸并停住；眉眼放松，闭合的嘴角松开成极淡笑意，并轻轻呼出一口气。<主体 2>一直看她的眼睛，闭合的嘴唇给出几乎看不出的笑意。每人最多眨一次。摄影机固定。深色衣柜留在身后，暖色镜光留在画面左缘。始终只有两个人。交扣的每只手都是五指，脸和手稳定，肤理真实，服装连续。不出现正侧 90 度转头、脸部变形、眼神闪烁、多指、多肢体、新增人物、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱或室内环境声；已确认歌曲母带只在后期加入。

非叙事音乐:
N/A
````

### 19　01:26.5–01:32　他从身后替她关小炉火

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-kitchen-corridor
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_19_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-kitchen-corridor: assets/scenes/apartment-kitchen-corridor-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is Lin Xi, the adult woman in the combined three-view sheet <Picture 1>. Keep her face, long black hair, black off-shoulder top, dark jeans and one silver ear stud.
<Subject 2> is Wang Xiao-an, the adult man in the combined three-view sheet <Picture 2>. Keep his clean-shaven face, short black hair, black T-shirt and charcoal jeans.
<Subject 3> is the open-kitchen cooktop in <Picture 3>: dark counter, gas cooktop, one saucepan and warm under-cabinet light. Source: assets/scenes/apartment-kitchen-corridor-upload-v01.png.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 shot of <Subject 2> turning one cooktop knob down while <Subject 1> stays at the stove.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and reference clothing in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - same male face, short black hair, body and reference clothing in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - same dark counter, cooktop and warm kitchen light from <Picture 3>.

detailed_description:
Photoreal live-action, a restrained contemporary Chinese music-video look, with steady warm kitchen light.
[Shot 1] A locked medium shot at counter height frames the cooktop and both people from the chest to the hips. <Subject 1> stands at the stove. One of her hands rests on the saucepan handle and stays there. <Subject 2> stands a palm-width behind her right shoulder. His one arm is already extended to the front burner knob on the near edge of the cooktop. He turns that knob once toward the low mark, then his hand remains on the knob. His other arm stays at his side. She looks once at his hand on the knob. Her brows stay soft and her closed mouth eases slightly. He watches the knob. Each person blinks at most once. The camera holds a static shot. The dark counter, cooktop and warm light stay fixed. Exactly two people. Five fingers on each visible hand, stable faces and hands, coherent clothing. No hard profile, facial warping, flickering eyes, extra fingers or limbs, new person, on-screen text or logo.

overall_soundscape:
silence. No generated voices; the song master is added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是林夕，即<图片 1>三视图合图中的成年女性。保持她的面孔、黑色长发、黑色露肩上衣、深色牛仔裤和一枚银色耳钉。
<主体 2> 是王小安，即<图片 2>三视图合图中的成年男性。保持他无胡须的面孔、黑色短发、黑色T恤和深灰牛仔裤。
<主体 3> 是<图片 3>里的开放式厨房灶台：深色台面、燃气灶、一只汤锅和暖色柜底灯。来源：assets/scenes/apartment-kitchen-corridor-upload-v01.png。

摘要:
一条连续 5.5 秒、真人写实、16:9 的镜头。<主体 2>把一个灶台旋钮拧小，<主体 1>留在灶前。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持同一面孔、发型、身体和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持同一男性面孔、黑色短发、身体和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>中的深色台面、灶台和暖色厨房灯。

详细描述:
真人写实，克制的当代中国 MV 质感，暖色厨房灯保持稳定。
[镜头 1] 台面高度的固定中景，画面包含灶台以及两人从胸口到髋部的身体。<主体 1>站在灶前，一只手停在汤锅锅柄上，不再移动。<主体 2>站在她右肩后方约一掌远处。他的一只手臂开场时已经伸到灶台近缘的前侧旋钮上。他把这个旋钮朝低火刻度拧一次，手就停在旋钮上。他的另一只手臂留在身侧。她看一次他放在旋钮上的手；眉眼放松，闭合的嘴角只轻微松开。他看着旋钮。每人最多眨一次。摄影机固定。深色台面、灶台和暖光保持不变。始终只有两个人。每只入画的手都是五指，脸和手稳定，服装连续。不出现正侧 90 度转头、脸部变形、眼神闪烁、多指、多肢体、新增人物、画面文字或商标。

整体声音环境:
静音。不生成人声；歌曲母带只在后期加入。

非叙事音乐:
N/A
````

### 20　01:32–01:36　一黑一白两只杯子

- 出镜人物 ID：无
- 场景基准图 ID：apartment-kitchen-corridor
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_20_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> apartment-kitchen-corridor: assets/scenes/apartment-kitchen-corridor-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the black ceramic mug and the white ceramic mug on the dark rail in <Picture 1>. The black mug hangs from the left hook. The white mug hangs from the right hook. Keep their glaze, handles, tilt and spacing.
<Subject 2> is the cabinet face and the narrow counter edge directly around that rail in <Picture 1>. Warm light falls evenly on the mugs.

summary:
[reference generation] one continuous 4-second photoreal live-action 16:9 shot that stays on these two mugs.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same black mug on the left, same white mug on the right, same rail and spacing in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - same cabinet face, counter edge and warm light in every frame.

detailed_description:
Photoreal live-action, a restrained contemporary Chinese music-video look. Warm light and exposure stay exactly the same from the first frame through the last.
[Shot 1] The first frame is already a close view filled by the rail and the two mugs. The black mug occupies the left half and the white mug occupies the right half. A narrow band of dark counter crosses the top. The pale cabinet fills the soft background. The camera holds a static shot at counter height. Nothing shifts: the mugs do not swing, the rail does not move, and the framing does not open outward. Brightness, color and shadows stay constant. No hand and no living person. Stable ceramic glaze, no on-screen text or logo.

overall_soundscape:
silence. No generated voices; the song master is added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是<图片 1>里深色横杆上的黑杯和白杯。黑杯挂在左侧挂钩，白杯挂在右侧挂钩。保持釉色、杯把、倾斜角度和间距。
<主体 2> 是这根横杆周围的柜门和窄台面边缘。暖光均匀落在两只杯子上。

摘要:
一条连续 4 秒、真人写实、16:9 的镜头，画面始终停在这两只杯子上。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧都是左黑右白的同一对杯子、同一根横杆和同一间距。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧都是同一柜门、同一台面边缘和同一暖光。

详细描述:
真人写实，克制的当代中国 MV 质感。从第一帧到最后一帧，暖光和曝光完全不变。
[镜头 1] 第一帧就是被横杆和两只杯子占满的近景。黑杯在左半边，白杯在右半边。深色台面只在上方留一条窄边，浅色柜门是柔和的背景。摄影机在台面高度保持固定。杯子不摆动，横杆不移动，景别不向外拉开。亮度、颜色和阴影保持不变。没有手，也没有人。釉面稳定，不出现画面文字或商标。

整体声音环境:
静音。不生成人声；歌曲母带只在后期加入。

非叙事音乐:
N/A
````

### 21　01:36–01:41　一副耳机分给两个人

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_21_h3_v04.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is Lin Xi, the adult woman in the combined three-view sheet <Picture 1>. Keep her face, long black hair, black off-shoulder top, dark jeans and one silver ear stud.
<Subject 2> is Wang Xiao-an, the adult man in the combined three-view sheet <Picture 2>. Keep his clean-shaven face, short black hair, black T-shirt and charcoal jeans.
<Subject 3> is the piano corner in <Picture 3>. The black upright piano stays on the left. The wide black tufted two-person bench stays centered directly in front of the keyboard and does not slide, turn or leave. Warm light and the dark wood floor stay as they are. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 side shot of <Subject 1> and <Subject 2> seated on the bench, sharing exactly two earpieces plugged into one phone.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and reference clothing in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - same male face, short black hair, body and reference clothing in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - same piano on the left and the same bench fixed in front of the keyboard.

detailed_description:
Warm exposure stays constant.
[Shot 1] The first frame is already a slightly low side medium shot from the right end of the keyboard, looking along the keys. The camera stays locked. The black upright piano fills the left side. The tufted bench stays centered against the keys. <Subject 1> sits on the left half of the bench and <Subject 2> sits on the right half. A small black phone lies on the bench between their knees, its screen a plain warm glow. One white cable leaves the bottom port of that phone and splits once. Exactly two earpieces exist: one seated inside her left ear, one seated inside his right ear. A plain white wire runs from her earpiece straight to the phone. A plain white wire runs from his earpiece straight to the phone. Her right ear and his left ear show bare skin. Both look down at the phone. He straightens his wire once, then his hand rests beside the phone. Her lips stay closed. Hands stay stable. No extra fingers or logo.

overall_soundscape:
silence. No generated voices; the song master is added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是林夕，即<图片 1>三视图合图中的成年女性。保持她的面孔、黑色长发、黑色露肩上衣、深色牛仔裤和一枚银色耳钉。
<主体 2> 是王小安，即<图片 2>三视图合图中的成年男性。保持他无胡须的面孔、黑色短发、黑色T恤和深灰牛仔裤。
<主体 3> 是<图片 3>里的钢琴一角。黑色立式钢琴留在左侧。宽大的黑色双人软凳始终停在琴键正前方，不滑动、不转向、不离开。暖光和深色木地板保持原样。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的侧面镜头。<主体 1>与<主体 2>坐在琴凳上，共用插在同一部手机上的两只耳机。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持同一面孔、发型、身体和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持同一男性面孔、黑色短发、身体和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——钢琴仍在左侧，琴凳仍固定在琴键正前方。

详细描述:
暖色曝光从第一帧到最后一帧保持不变。
[镜头 1] 第一帧就是略低的侧面中景，机位在琴键右端，顺着琴键看过去。摄影机固定。黑色立式钢琴占在左侧。软凳紧贴琴键、居中停住。<主体 1>坐在凳子左半，<主体 2>坐在右半。一部小黑色手机放在两人膝间的凳面上，屏幕是一片暖色光。一根白线从这部手机底部的接口出发，只分成两股。整幅画面只有两只耳机：一只塞在她的左耳里，一只塞在他的右耳里。一根光的白线从她的耳机直连到手机。一根光的白线从他的耳机直连到手机。她的右耳和他的左耳是裸露的皮肤。两人都低头看手机。他把自己那根线理直一次，然后手停在手机旁边。她的嘴唇闭合。始终只有两个人。手保持稳定。不出现多指、多肢体或商标。

整体声音环境:
静音。不生成人声；歌曲母带只在后期加入。

非叙事音乐:
N/A
````

### 22　01:41–01:44　薄毯落到她肩上

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_22_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is Lin Xi, the adult woman in the combined three-view sheet <Picture 1>. Keep her face, long black hair, black off-shoulder top and dark jeans.
<Subject 2> is Wang Xiao-an, the adult man in the combined three-view sheet <Picture 2>. Keep his clean-shaven face, short black hair, black T-shirt and charcoal jeans.
<Subject 3> is the piano corner in <Picture 3>. The black upright piano stays on the left. Its fallboard is closed. The wide black tufted bench stays centered in front of the keyboard and does not slide or turn. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 3-second photoreal live-action 16:9 side shot of <Subject 2> laying a blanket over <Subject 1> at the unmoved piano bench.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and reference clothing in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - same male face, short black hair, body and reference clothing in every frame.
<Subject 3> (appears in [Shot 1]): fully_preserved - same piano, closed fallboard and bench fixed in front of the keyboard.

detailed_description:
Photoreal live-action, a restrained contemporary Chinese music-video look. Warm light and exposure stay the same from the first frame to the last.
[Shot 1] The first frame is already a side medium close shot from the right end of the keyboard. The camera looks along the closed fallboard. The piano stays at frame left and the tufted bench stays centered in front of it. <Subject 1> sits on the left half of that bench, leaning her head and folded arms on the closed fallboard, eyes closed, lips closed. <Subject 2> stands beside the bench. He lowers one dark gray blanket onto her shoulders once, and the blanket stays there. The camera holds a static shot. Exactly two people. Five fingers on each visible hand, stable faces and hands, coherent clothing. No hard profile, facial warping, flickering eyes, extra fingers or limbs, new person, on-screen text or logo.

overall_soundscape:
silence. No generated voices; the song master is added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是林夕，即<图片 1>三视图合图中的成年女性。保持她的面孔、黑色长发、黑色露肩上衣和深色牛仔裤。
<主体 2> 是王小安，即<图片 2>三视图合图中的成年男性。保持他无胡须的面孔、黑色短发、黑色T恤和深灰牛仔裤。
<主体 3> 是<图片 3>里的钢琴一角。黑色立式钢琴留在左侧，琴盖合拢。宽大的黑色双人软凳停在琴键正前方，不滑动、不转向。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 3 秒、真人写实、16:9 的侧面镜头。<主体 2>把毯子铺到坐在原位琴凳上的<主体 1>肩上。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持同一面孔、发型、身体和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——每一帧保持同一男性面孔、黑色短发、身体和参考服装。
<主体 3>（出现在[镜头 1]）：完全保留——同一架钢琴、合拢的琴盖，以及固定在琴键前的琴凳。

详细描述:
真人写实，克制的当代中国 MV 质感。暖光和曝光从第一帧到最后一帧不变。
[镜头 1] 第一帧就是琴键右端的侧面中近景，顺着合拢的琴盖看过去。钢琴在画面左侧，软凳停在琴键正前方。<主体 1>坐在琴凳左半，头和交叠的手臂伏在合拢的琴盖上，闭眼，嘴唇闭合。<主体 2>站在琴凳旁边。他把一条深灰薄毯铺到她肩上一次，毯子随后保持住。摄影机固定。始终只有两个人。每只入画的手都是五指，脸和手稳定，服装连续。不出现正侧 90 度转头、脸部变形、眼神闪烁、多指、多肢体、新增人物、画面文字或商标。

整体声音环境:
静音。不生成人声；歌曲母带只在后期加入。

非叙事音乐:
N/A
````

### 23　01:44–01:50　她穿过短廊回到现实

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-kitchen-corridor
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_23_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-kitchen-corridor: assets/scenes/apartment-kitchen-corridor-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is Lin Xi, the adult woman in the combined three-view sheet <Picture 1>. Keep her face, long black hair, black off-shoulder top and dark jeans.
<Subject 2> is the apartment corridor in <Picture 2>. The open kitchen and the black mug left of the white mug stay on the left. The upright piano stays ahead, and its tufted bench stays centered in front of the keyboard. Warm interior light and the night window stay at one brightness. Source: assets/scenes/apartment-kitchen-corridor-upload-v01.png.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 shot of <Subject 1> walking down the already lit corridor toward the piano.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and reference clothing in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - same kitchen on the left, same corridor, and the same piano with its bench fixed ahead.

detailed_description:
Photoreal live-action, a restrained contemporary Chinese music-video look. Warm interior light and the night window are already present in the first frame, and exposure does not change.
[Shot 1] The first frame is already a medium-wide view down the corridor. <Subject 1> is seen from behind, walking slowly away from the camera toward the piano. The kitchen counter and the two mugs stay on frame left. The piano and its unmoved bench stay ahead of her. She keeps her gaze toward that bench. The camera holds a static shot at eye level. The corridor, furniture and brightness stay constant. Exactly one person. Stable clothing, no extra limbs, no new person, no on-screen text or logo.

overall_soundscape:
silence. No generated voices; the song master is added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是林夕，即<图片 1>三视图合图中的成年女性。保持她的面孔、黑色长发、黑色露肩上衣和深色牛仔裤。
<主体 2> 是<图片 2>里的公寓短廊。开放式厨房和左黑右白的杯子留在左侧。立式钢琴在前方，软凳停在琴键正前方。暖色室内灯和夜间窗景保持同一种亮度。来源：assets/scenes/apartment-kitchen-corridor-upload-v01.png。

摘要:
一条连续 6 秒、真人写实、16:9 的镜头。<主体 1>走在已经亮着的短廊里，朝钢琴走去。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持同一面孔、发型、身体和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——厨房仍在左侧，短廊不变，前方的钢琴和琴凳位置固定。

详细描述:
真人写实，克制的当代中国 MV 质感。暖色室内灯和夜间窗景在第一帧就已经存在，曝光不再变化。
[镜头 1] 第一帧就是顺着短廊看出去的中全景。<主体 1>背对摄影机，慢步走向钢琴。厨房台面和两只杯子留在画面左侧。钢琴和没有挪动的琴凳留在她前方。她的目光朝向那张琴凳。摄影机在眼高保持固定。走廊、家具和亮度保持不变。始终只有一个人。服装稳定，不出现多余肢体、新增人物、画面文字或商标。

整体声音环境:
静音。不生成人声；歌曲母带只在后期加入。

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
- 输出视频：`generated/video/raw/shot_25_h3_v03.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and one silver stud in the left ear.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. One black upright piano stays fixed on the left wall. The wide tufted black two-person bench stays centered directly in front of the keyboard and never slides, rotates or leaves that spot. Warm-gray walls, dark wood floor, white sheer curtains and the dark wood entrance at far right stay in place. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the one piano, the unmoved bench centered before the keys, and the same warm interior light from <Picture 2>.

detailed_description:
Frame zero is already the full medium composition and that exact crop holds through the last frame. The camera does not zoom, dolly, widen or reframe. Looking along the keys from the right end, the black upright piano fills the left edge. The whole two-person bench is already inside the frame: <Subject 1> sits on its left half with both hands on her lap and her eyes lowered toward the keys, while the empty tufted right half fills the lower-right third. The apartment entrance is already visible at the right edge. She shifts once a short distance farther left and stays, so the empty half remains readable. The bench stays centered in front of the keys. Cool window light and warm interior light are already present in frame zero, and the exposure stays constant. Exactly one piano and one bench. Faces and hands remain stable, clothing stays coherent, and irises remain readable. No extra fingers, extra limbs, second person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，左耳一枚银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。一台黑色立式钢琴固定在左墙。宽大黑色双人软凳始终居中停在琴键正前方，不滑动、不旋转、不离开这个位置。暖灰墙面、深木地板、白色纱帘和最右侧深木入户门保持原位。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持一台钢琴、停在琴键正前方的琴凳，以及<图片 2>里已经亮着的暖色室内光。

详细描述:
第 0 帧已经是完整的中景构图，这个裁切一直保持到最后一帧。镜头不推、不拉、不变宽、不改机位。从琴键右端沿琴键看过去，黑色立式钢琴占满左缘。整张双人琴凳从首帧就在画面里：<主体 1>坐在左半，双手放在膝上，眼睛低向琴键；空着的软包右半占右下三分之一。公寓入户门从首帧就出现在右缘。她只向左再挪一小段并停住，空位始终看得清。琴凳停在琴键正前方。冷色窗光和暖色室内光在第 0 帧就已经存在，曝光保持不变。只有一台钢琴、一张琴凳。脸与手保持稳定，服装连续，虹膜可读。不出现多指、多肢体、第二个人、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 26　02:01–02:06.5　空位终于被她看清

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_26_h3_v03.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot continuing the same moment <Subject 1> sits on the left half of the piano bench.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look. One black upright piano stands at frame left with the fallboard open. A black tufted two-person bench stays tight against the keys. Sheer curtains and a blue-hour city window fill the background, with a glass door at frame right. A warm lamp stays at the same brightness.
[Shot 1] The same seated moment continues, seen closer from the keyboard side. At the first frame <Subject 1> is already sitting on the left half of the bench. Both hands rest on her thighs, her head is lowered toward the keys, and her lips stay closed. The empty right half of the bench is visible beside her. Her face is a mild three-quarter toward the keys, large enough that both eyes stay readable, and it never turns square to the lens. The camera starts at chest height and pushes in with small amplitude at slow speed toward the empty cushion. During that push her eyes rise once from the empty cushion to the glass door at frame right, then hold there. She does not look into the lens, does not stand, and does not slide into the center of the bench. One piano only. Brightness stays constant. Stable face and hands, smooth skin, coherent clothing, at most one slow blink. No facial warping, no extra fingers, no extra person, no on-screen text, no logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形和银色耳钉。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，承接<主体 1>坐在琴凳左半的同一个瞬间。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感。画面左侧是一架打开琴盖的黑色立式钢琴。黑色双人软凳紧贴琴键。背景是纱帘和蓝调城市夜窗，右侧有一扇玻璃门。一盏暖灯的亮度保持不变。
[镜头 1] 同一个坐着的瞬间继续，只是从琴键一侧看近一些。第一帧<主体 1>已经坐在琴凳左半。双手放在大腿上，头低向琴键，双唇闭合。空着的右半琴凳留在她身边。脸朝琴键呈轻微四分之三，足够看清双眼，始终不正对镜头。摄影机从胸口高度开始，向空位做一次小幅慢推。慢推中她的视线从空位抬起一次，看向画面右侧的玻璃门，然后停住。她不看镜头，不站起来，也不坐到凳子中间。只有这一台钢琴。亮度保持不变。脸和手稳定，皮肤自然，服装连续，最多一次缓慢眨眼。不出现脸部变形、多余手指、多余的人、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 27　02:06.5–02:12.5　她主动打开门迎接空气里的吻

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_27_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and one silver stud in the left ear.
<Subject 2> is the confirmed apartment piano living room anchored by <Picture 2>. The balcony glazing and white sheer curtains stay on the night side of the room, with the same blue-hour city beyond the glass. Warm interior light is already on. Source: assets/scenes/apartment-piano-living-room-upload-v01.png.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the open balcony door, sheer curtains and the same warm interior light beside the blue night.

detailed_description:
Frame zero is already a shoulder-height medium close and that exact crop holds through the last frame. The camera does not zoom, dolly, widen or reframe. <Subject 1> is already standing inside the balcony doorway. The glass door is already fully open behind her, with the blue-hour city visible outside. She faces three-quarters toward the night, eyes closed, lips closed, and takes one slow breath. Her long hair and the sheer curtain beside her drift gently inward and then settle. The door stays open. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Her face and shoulders fill the frame. Faces and hands remain stable, clothing stays coherent. No extra fingers, extra limbs, second person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，左耳一枚银色耳钉。
<主体 2> 是由<图片 2>锁定的已确认公寓钢琴客厅。阳台玻璃和白色纱帘留在房间的夜景一侧，玻璃外是同一片蓝调城市。暖色室内灯已经亮着。来源：assets/scenes/apartment-piano-living-room-upload-v01.png。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持已经打开的阳台门、纱帘，以及蓝调夜色旁边已经亮着的暖色室内光。

详细描述:
第 0 帧已经是肩高中近景，这个裁切一直保持到最后一帧。镜头不推、不拉、不变宽、不改机位。<主体 1>从首帧就站在阳台门内。玻璃门在她身后已经完全打开，门外是蓝调城市夜色。她三分之二朝向室外，闭眼，唇闭，慢慢吸一口气。长发和身旁纱帘向屋内轻轻飘一下，然后落下。门保持打开。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。她的脸和肩占满画面。脸与手保持稳定，服装连续。不出现多指、多肢体、第二个人、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 28　02:12.5–02:17.5　她从等待走回演唱

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_28_h3_v04.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and one silver stud in the left ear.
<Subject 2> is the side view of the same piano corner in <Picture 2>. One black upright piano fills the left side. The wide tufted black bench stays tucked against the keyboard and does not slide. The night window stays at the right. Keep this camera.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2>, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the side camera, the piano on the left, and the bench tucked against the keys.

detailed_description:
Frame zero already matches the side camera in <Picture 2>, and that exact crop holds through the last frame. The camera does not zoom, dolly, truck or reframe. <Subject 1> is already seated on the left half of the tufted bench. The empty right half stays visible. She lowers her gaze toward the keys and rests both hands on her lap, then holds still. The bench stays tucked against the keyboard. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Exactly one piano and one bench. Faces and hands remain stable, clothing stays coherent. No extra fingers, extra limbs, second person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形，左耳一枚银色耳钉。
<主体 2> 是<图片 2>里同一处钢琴角落的侧面。一台黑色立式钢琴占在左侧。宽大黑色软凳紧贴琴键，不滑动。夜窗留在右侧。保持这个机位。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持侧面机位、左侧钢琴，以及紧贴琴键的琴凳。

详细描述:
第 0 帧已经对齐<图片 2>的侧面机位，这个裁切一直保持到最后一帧。镜头不推、不拉、不横移、不改机位。<主体 1>从首帧就坐在软凳左半。空着的右半保持可见。她把视线低向琴键，双手放到膝上，然后保持不动。琴凳紧贴琴键。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。只有一台钢琴、一张琴凳。脸与手保持稳定，服装连续。不出现多指、多肢体、第二个人、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 29　02:17.5–02:23　第一个和弦把房间唤醒

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_29_h3_v03.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, restrained expression, black off-shoulder knit top, dark high-waisted jeans, slim adult proportions and silver stud earrings.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot continuing the same moment <Subject 1> brings both hands onto one piano chord.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same adult identity, face, hair, body proportions and reference clothing from <Picture 1> in every frame.

detailed_description:
The target video is photoreal live-action in real time, a restrained contemporary Chinese urban music-video look. One black upright piano has its fallboard open. The black tufted bench stays tight against the keys. Sheer curtains and blue-hour city light remain behind her, with one warm lamp at a constant brightness.
[Shot 1] The same playing action continues, now seen from the right end of the keyboard and looking along the keys. At the first frame <Subject 1> is already seated on the left half of the bench, head lowered, lips closed. The hand nearer the keys is already touching them, and the other hand is lifting from her thigh. The camera is at key height and trucks along the keys with small amplitude at slow speed. The second hand joins, both hands press one chord, and they stay on that chord. Her eyes remain on the keys. She does not look up and does not look into the lens. The empty half of the bench stays visible. Her face remains readable in a mild three-quarter toward the keys. One piano only. Brightness stays constant. Stable face and hands, smooth skin, coherent clothing, at most one slow blink. No facial warping, no extra fingers, no extra person, no on-screen text, no logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、克制神情、黑色露肩针织上衣、深色高腰牛仔裤、成年纤细身形和银色耳钉。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，承接<主体 1>把双手放到同一个和弦上的同一个瞬间。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——每一帧保持<图片 1>中的同一成年身份、面孔、发型、身体比例和参考服装。

详细描述:
目标视频为实时真人写实影像，采用克制的当代中国都市 MV 质感。一架黑色立式钢琴的琴盖打开。黑色软凳紧贴琴键。纱帘和蓝调城市灯光留在她身后，一盏暖灯亮度不变。
[镜头 1] 同一个弹奏动作继续，这次从琴键右端顺着琴键看。第一帧<主体 1>已经坐在琴凳左半，头低着，双唇闭合。靠近琴键的那只手已经按在键上，另一只手正从大腿上抬起。摄影机在琴键高度，沿琴键做一次小幅慢移。第二只手合上来，两只手按下同一个和弦并停在那里。眼睛一直看键。她不抬头，也不看镜头。空着的半边琴凳仍能看见。脸朝琴键呈轻微四分之三，五官可读。只有这一台钢琴。亮度保持不变。脸和手稳定，皮肤自然，服装连续，最多一次缓慢眨眼。不出现脸部变形、多余手指、多余的人、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 30　02:23–02:28　为他写的歌仍缺最后两小节

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_30_h3_v03.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment-piano-living-room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. In this shot only her hands and the black sleeves at her wrists are visible. Preserve her fair skin and natural adult hands.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV close-up, following the single action and camera design below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): hands_only - keep her fair adult hands and black sleeves. Her face stays outside the frame.

detailed_description:
Frame zero is already a slightly high close-up, and that exact crop holds through the last frame. The camera does not zoom, dolly or reframe. One opaque white sheet lies flat on the upright piano music rack and fills the upper two-thirds. Handwritten staves and notes cover the page. The last two measures contain staff lines and no notes. <Subject 1>'s two hands rest on the black and white keys along the bottom edge and stay on the keys. The near corner of the paper lifts a few millimeters and settles. The sheet stays on the rack. Warm light is already even across the paper and the keys, and the exposure stays constant. Hands remain stable. No extra fingers, extra limbs, second person or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience; the confirmed song master and any required lip sync are added only in postproduction.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。本镜只看见她的双手和腕部黑色袖口。保持冷白肤色和自然的成年手部。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 特写，执行下述单一动作与摄影设计。

保留分析:
<主体 1>（出现在[镜头 1]）：只保留双手——保持她冷白的成年双手和黑色袖口。脸留在画面外。

详细描述:
第 0 帧已经是略高的俯拍特写，这个裁切一直保持到最后一帧。镜头不推、不拉、不改机位。一张不透明的白纸平放在立式钢琴谱架上，铺满画面上三分之二。纸上是手写五线谱和音符。最后两小节只有谱线，没有音符。<主体 1>的两只手停在画面下缘的黑白琴键上，并一直留在琴键上。纸的近角抬起几毫米再落下。纸页留在谱架上。暖光从第 0 帧就均匀照在纸面和琴键上，曝光保持不变。手保持稳定。不出现多指、多肢体、第二个人或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声；已确认歌曲母带和需要的对口型只在后期加入。

非叙事音乐:
N/A
````

### 31　02:28–02:33.5　眼泪还没有掉下来

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_31_h3_v04.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> apartment piano room: assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, black off-shoulder long-sleeve knit top, dark high-waisted jeans, slim adult proportions and one silver stud in the left ear.
<Subject 2> is the apartment piano room in <Picture 2>. Exactly one black upright piano stands on the left. The wide tufted black bench stays tucked against that keyboard. This shot uses a new camera at the right end of the keyboard, not the wide room view.
<Audio 1> is the sung line 它也偷偷地掉泪了, taken from the confirmed master for this shot only.

summary:
[reference generation + audio reuse] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> playing the piano and singing in lip-sync to <Audio 1>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and black off-shoulder long-sleeve outfit from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - one upright piano and the bench tucked against its keys.
<Audio 1> (appears in [Shot 1]): fully_copy - reused 1:1 as this shot's complete soundtrack. Her mouth follows the sung line while both hands play.

detailed_description:
Frame zero is already a three-quarter medium from the right end of the keyboard. Her face, both hands and the keys are all inside the frame, and that view holds through the last frame. She is seated on the bench. Both hands stay on the black and white keys, and her fingers press the keys while she sings. Her mouth stays fully visible and shapes the full phrase in <Audio 1>. Her gaze stays down toward her hands and the keys. Her eyes stay wet and both cheeks stay dry. Exactly one piano is in the room. The bench stays against the keyboard. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Both long sleeves stay on her arms. Face, hands and clothing remain stable. No extra fingers, extra limbs, second person, on-screen text or logo.

overall_soundscape:
Her singing voice follows <Audio 1>. No extra ambience is added.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、黑色露肩长袖针织上衣、深色高腰牛仔裤、成年纤细身形，左耳一枚银色耳钉。
<主体 2> 是<图片 2>里的公寓钢琴间。只有一台黑色立式钢琴，立在左侧。宽大黑色软凳紧贴琴键。本镜机位改到琴键右端，不沿用房间全景。
<音频 1> 是已确认母带里的这一句“它也偷偷地掉泪了”，只用于本镜。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头。<主体 1>边弹琴边跟随<音频 1>演唱。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的同一面孔、发型、身体和黑色露肩长袖服装。
<主体 2>（出现在[镜头 1]）：完全保留——一台立式钢琴，琴凳紧贴琴键。
<音频 1>（出现在[镜头 1]）：完全复用——1:1 作为本镜完整声轨。她的嘴跟随这一句，双手同时在弹琴。

详细描述:
第 0 帧已经是从琴键右端看过来的三分之二中景。脸、双手和琴键都在画面里，这个景别保持到最后一帧。她坐在琴凳上。两只手都停在黑白琴键上，手指一边按键一边唱。嘴部全程可见，并唱完<音频 1>里的整句。视线低向自己的手和琴键。眼睛保持湿润，两颊保持干燥。房间里只有一台钢琴。琴凳紧贴琴键。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。两只长袖留在手臂上。脸、手和服装保持稳定。不出现多指、多肢体、第二个人、画面文字或商标。

整体声音环境:
她的演唱跟随<音频 1>。不另加环境声。

非叙事音乐:
N/A
````

### 32　02:33.5–02:38　第一次正面唱出我还记得

- 出镜人物 ID：lin-xi
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_32_h3_v05.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> same piano from shot 31: assets/shot-guides/shot-32-same-piano.jpg

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, black off-shoulder long-sleeve knit top, dark high-waisted jeans, slim adult proportions and one silver stud in the left ear.
<Subject 2> is the same single piano and seated player in <Picture 2>. Move the camera to the front of that same keyboard. She still sits on that piano bench. No second piano and no second bench are added.
<Audio 1> is the sung line 我还记得我们的约定, taken from the confirmed master for this shot only.

summary:
[reference generation + audio reuse] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> playing the piano and singing in lip-sync to <Audio 1> while looking toward the lens.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and black off-shoulder long-sleeve outfit from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - one upright piano and the bench tucked against its keys.
<Audio 1> (appears in [Shot 1]): fully_copy - reused 1:1 as this shot's complete soundtrack. Her mouth follows the sung line while both hands play.

detailed_description:
Frame zero is already a frontal medium taken from in front of the keyboard. Her face fills the upper half, and both hands on the keys fill the lower third. That view holds through the last frame. She is seated on the bench and looks toward the lens. Both hands stay on the black and white keys, and her fingers press the keys while she sings. Her mouth stays fully visible and shapes the full phrase in <Audio 1>. She plays only the piano under her hands. No keyed instrument stands behind her. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Both long sleeves stay on her arms. Face, hands and clothing remain stable. No extra fingers, extra limbs, second person, on-screen text or logo.

overall_soundscape:
Her singing voice follows <Audio 1>. No extra ambience is added.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、黑色露肩长袖针织上衣、深色高腰牛仔裤、成年纤细身形，左耳一枚银色耳钉。
<主体 2> 是<图片 2>里同一台钢琴和坐着弹琴的人。机位改到这排琴键的正前方。她仍坐在这台钢琴的凳上。不再加第二台钢琴或第二张凳子。
<音频 1> 是已确认母带里的这一句“我还记得我们的约定”，只用于本镜。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头。<主体 1>看着镜头，边弹琴边跟随<音频 1>演唱。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的同一面孔、发型、身体和黑色露肩长袖服装。
<主体 2>（出现在[镜头 1]）：完全保留——一台立式钢琴，琴凳紧贴琴键。
<音频 1>（出现在[镜头 1]）：完全复用——1:1 作为本镜完整声轨。她的嘴跟随这一句，双手同时在弹琴。

详细描述:
第 0 帧已经是从琴键正前方拍的中景。脸占在画面上半，按着琴键的两只手占在下三分之一。这个景别保持到最后一帧。她坐在琴凳上，看向镜头。两只手都停在黑白琴键上，手指一边按键一边唱。嘴部全程可见，并唱完<音频 1>里的整句。房间里只有一台钢琴。琴凳紧贴琴键。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。两只长袖留在手臂上。脸、手和服装保持稳定。不出现多指、多肢体、第二个人、画面文字或商标。

整体声音环境:
她的演唱跟随<音频 1>。不另加环境声。

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
- 输出视频：`generated/video/raw/shot_34_h3_v05.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her same delicate face, long straight black hair, naturally fair skin, black off-shoulder long-sleeve knit top, dark high-waisted jeans, slim adult proportions and one silver stud in the left ear.
<Subject 2> is Lin Xi seated at the one black upright piano. In this shot the piano body fills the left side of the frame and her face is on the right. She sits on that piano bench. No second piano is added.
<Audio 1> is the sung line 连那风都笑我了, taken from the confirmed master for this shot only.

summary:
[reference generation + audio reuse] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> playing the piano and singing in lip-sync to <Audio 1> from the bass side of the keys.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and black off-shoulder long-sleeve outfit from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - one upright piano and the bench tucked against its keys.
<Audio 1> (appears in [Shot 1]): fully_copy - reused 1:1 as this shot's complete soundtrack. Her mouth follows the sung line while both hands play.

detailed_description:
Frame zero is already a medium with the piano body on screen left and her face on screen right. Her face, both hands and the keys are all inside the frame, and that view holds through the last frame. She is seated on the bench. Both hands stay on the black and white keys, and her fingers press the keys while she sings. Her hair lifts slightly. She closes her eyes once and opens them again. Her mouth stays fully visible, shapes the full phrase in <Audio 1>, and the corners lift only a little at the end. Exactly one piano is in the room. The bench stays against the keyboard. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Both long sleeves stay on her arms. Face, hands and clothing remain stable. No extra fingers, extra limbs, second person, on-screen text or logo.

overall_soundscape:
Her singing voice follows <Audio 1>. No extra ambience is added.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持同一张精致面孔、黑色及腰长直发、自然冷白肤色、黑色露肩长袖针织上衣、深色高腰牛仔裤、成年纤细身形，左耳一枚银色耳钉。
<主体 2> 是<图片 2>里同一台钢琴和坐着弹琴的人。机位改到这排琴键的另一侧，让她的另一侧肩膀朝向镜头。她仍坐在这台钢琴的凳上。不再加第二台钢琴或第二张凳子。
<音频 1> 是已确认母带里的这一句“连那风都笑我了”，只用于本镜。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头。<主体 1>从低音区一侧边弹琴边跟随<音频 1>演唱。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的同一面孔、发型、身体和黑色露肩长袖服装。
<主体 2>（出现在[镜头 1]）：完全保留——一台立式钢琴，琴凳紧贴琴键。
<音频 1>（出现在[镜头 1]）：完全复用——1:1 作为本镜完整声轨。她的嘴跟随这一句，双手同时在弹琴。

详细描述:
第 0 帧已经是从低音区那一端看过来的中景，和顺着高音区看过去的方向相反。脸、双手和琴键都在画面里，这个景别保持到最后一帧。她坐在琴凳上。两只手都停在黑白琴键上，手指一边按键一边唱。发丝轻轻扬起。她闭眼一次，再睁开。嘴部全程可见，唱完<音频 1>里的整句，句尾嘴角只轻轻抬起。房间里只有一台钢琴。琴凳紧贴琴键。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。两只长袖留在手臂上。脸、手和服装保持稳定。不出现多指、多肢体、第二个人、画面文字或商标。

整体声音环境:
她的演唱跟随<音频 1>。不另加环境声。

非叙事音乐:
N/A
````

### 35　02:49–02:54　王小安真实出现在门口

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_35_h3_v08.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> night living room: songs/20261014-the-promise/assets/scenes/apartment-piano-living-room-upload-v01.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her long straight black hair, black off-shoulder long-sleeve top and one silver left-ear stud.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his clean-shaven face, short black hair, black crew-neck T-shirt, charcoal jeans and white sneakers.
<Subject 3> is the confirmed night living room in <Picture 3>. Keep the black upright piano on the left, the entrance door on the right, the sheer curtains, the night city window, the warm lamp, the wood floor and the same wall colors.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot in that living room. He appears in the doorway, then walks toward her as the camera pulls back.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair and black off-shoulder top from <Picture 1>. She stays seated at the piano.
<Subject 2> (appears in [Shot 1]): fully_preserved - same face, hair, black T-shirt and white sneakers from <Picture 2>.
<Subject 3> (appears in [Shot 1]): fully_preserved - the same night living room from <Picture 3> stays for the whole shot.

detailed_description:
Frame zero is already inside the living room from <Picture 3>, close to the open entrance door on the right. <Subject 2> already stands in that doorway. His right hand holds one wooden pencil. The camera then pulls back slowly through this same room, and he walks forward with it, toward <Subject 1>. His steps are calm. By the last frame he is closer to the piano, and the wider view shows <Subject 1> already seated at the one black upright on the left, her hands on the keys. She remains seated and does not stand. The night window, sheer curtains, warm lamp, wood floor and door stay in place. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Faces and clothing remain stable. No second piano, extra person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps or room ambience.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持黑色及腰长直发、黑色露肩长袖上衣，左耳一枚银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持无胡须的面孔、黑色短发、黑色圆领T恤、深灰牛仔裤和白色运动鞋。
<主体 3> 是<图片 3>里已确认的夜景客厅。保持左侧的黑色立式钢琴、右侧的入户门、纱帘、夜里的城市窗、暖灯、木地板和同样的墙色。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，发生在这间客厅。他出现在门口，然后跟着镜头走向她，镜头慢慢拉远。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的同一面孔、发型和黑色露肩上衣。她一直坐在钢琴前。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的同一面孔、发型、黑色T恤和白色运动鞋。
<主体 3>（出现在[镜头 1]）：完全保留——<图片 3>的同一间夜景客厅保持到结束。

详细描述:
第 0 帧已经在<图片 3>的客厅里，靠近右侧打开的入户门。<主体 2>已经站在这扇门里。他的右手握着一支木铅笔。镜头接着在这同一间房里慢慢拉远，他跟着镜头向前走，走向<主体 1>。步伐平稳。到最后一帧，他离钢琴更近，拉远的画面能看见<主体 1>已经坐在左侧这一架黑色立式钢琴前，双手放在琴键上。她一直坐着，不站起来。夜窗、纱帘、暖灯、木地板和门都留在原地。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。脸和服装保持稳定。不出现第二台钢琴、多余的人、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步或室内环境声。

非叙事音乐:
N/A
````

### 36　02:54–02:59.5　他坐上空了三年的位置

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_36_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her long straight black hair, black off-shoulder long-sleeve top, dark jeans and one silver left-ear stud.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his clean-shaven face, short black hair, black crew-neck T-shirt, charcoal jeans and white sneakers.
<Subject 3> is one black upright piano and its one wide tufted bench. The bench touches the front of the keys. No second piano and no second bench are added.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 2> sitting beside <Subject 1> at the same piano.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and black off-shoulder top from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - same face, hair, body and black T-shirt from <Picture 2>.
<Subject 3> (appears in [Shot 1]): fully_preserved - one piano and the bench against its keys.

detailed_description:
Frame zero is already a locked side medium at the height of the keys. The piano body fills the left side of the frame, and that crop holds through the last frame. The camera does not zoom, dolly, truck or reframe. <Subject 1> is already seated on the left half of the bench in frame zero, with her body turned toward the keys. <Subject 2> is already standing at the right end of that same bench. She shifts once toward the left end. He then sits once on the right half. At the last frame both remain seated side by side on that bench, looking down at the keys, and they do not embrace. The bench does not slide, rotate or leave the piano. Their lips stay closed. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Faces, hands and clothing remain stable. No extra fingers, extra limbs, third person, second piano, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持黑色及腰长直发、黑色露肩长袖上衣、深色牛仔裤，左耳一枚银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持无胡须的面孔、黑色短发、黑色圆领T恤、深灰牛仔裤和白色运动鞋。
<主体 3> 是一台黑色立式钢琴和它唯一的宽大软凳。软凳贴着琴键正面。不再加第二台钢琴或第二张凳子。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头。<主体 2>坐到已经坐在同一台钢琴旁的<主体 1>身边。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的同一面孔、发型、身体和黑色露肩上衣。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的同一面孔、发型、身体和黑色T恤。
<主体 3>（出现在[镜头 1]）：完全保留——一台钢琴，琴凳贴着琴键。

详细描述:
第 0 帧已经是琴键高度的侧面中景。钢琴机身占画面左侧，这个裁切一直保持到最后一帧。镜头不推、不拉、不横移、不改机位。<主体 1>从第 0 帧起就已经坐在琴凳左半边，身体朝向琴键。<主体 2>从第 0 帧起就已经站在这张琴凳的右端。她向左让一次。他随即在右半边坐下一次。最后一帧两人都坐在这张凳上，肩并肩，低头看琴键，不相拥。琴凳不滑动、不转动、不离开钢琴。两人嘴唇都闭着。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。脸、手和服装保持稳定。不出现多指、多肢体、第三个人、第二台钢琴、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声。

非叙事音乐:
N/A
````

### 37　02:59.5–03:04　肩膀轻轻碰在一起

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_37_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> same piano: assets/shot-guides/shot-37-same-piano.jpg

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her long straight black hair, black off-shoulder long-sleeve top, dark jeans and one silver left-ear stud.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his clean-shaven face, short black hair, black crew-neck T-shirt, charcoal jeans and white sneakers.
<Subject 3> is the one black upright piano and the two seated people in <Picture 3>. Copy that single piano. Both people stay at that same keyboard.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot closer to the two people already seated in <Picture 3>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair, body and black off-shoulder top from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - same face, hair, body and black T-shirt from <Picture 2>.
<Subject 3> (appears in [Shot 1]): fully_preserved - the same one piano and the same seated pair from <Picture 3>.

detailed_description:
Frame zero is already a shoulder-level medium close view of the same two people and the same one piano in <Picture 3>. Their shoulders, faces and the keys along the bottom edge are all inside the frame, and that crop holds through the last frame. The camera drifts only a little from right to left, then stops. It does not zoom, dolly or change to another angle. Exactly one upright piano is visible. Their shoulders touch and stay touching. <Subject 1> keeps her eyes on the sheet music. <Subject 2> looks at her face once, then returns his eyes to the keys. Neither person looks into the lens. Both sets of hands stay near the keys. Their lips stay closed. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Faces, hands and clothing remain stable. No extra fingers, extra limbs, third person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持黑色及腰长直发、黑色露肩长袖上衣、深色牛仔裤，左耳一枚银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持无胡须的面孔、黑色短发、黑色圆领T恤、深灰牛仔裤和白色运动鞋。
<主体 3> 是<图片 3>里那一台黑色立式钢琴和已经并排坐着的两个人。照抄这一台钢琴。两人都留在这一排琴键前。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头。镜头比<图片 3>更靠近这两个已经坐下的人。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的同一面孔、发型、身体和黑色露肩上衣。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的同一面孔、发型、身体和黑色T恤。
<主体 3>（出现在[镜头 1]）：完全保留——<图片 3>里的同一台钢琴和同一对坐下的人。

详细描述:
第 0 帧已经是肩部高度的双人中近景，拍的就是<图片 3>里的两个人和那一台钢琴。肩膀、脸和画面下缘的琴键都在画面里，这个裁切保持到最后一帧。镜头只从右向左轻轻移一点，然后停住。不推近，不拉远，也不改成另一个角度。画面里只有一台立式钢琴。两人肩膀相碰，并保持相碰。<主体 1>的眼睛一直看琴谱。<主体 2>看她的脸一次，再把视线回到琴键。两个人都不看镜头。两双手都留在琴键附近。嘴唇都闭着。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。脸、手和服装保持稳定。不出现多指、多肢体、第三个人、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声。

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
- 输出视频：`generated/video/raw/shot_40_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her long straight black hair, black off-shoulder long-sleeve top and one silver left-ear stud.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his clean-shaven face, short black hair and black crew-neck T-shirt.
<Subject 3> is the glossy black fallboard of the one upright piano. Both faces appear inside that reflection.
<Audio 1> is the sung line 你会记得我们的约定, taken from the confirmed master for this shot only.

summary:
[reference generation + audio reuse] one continuous 5.5-second photoreal live-action 16:9 MV shot of the two faces reflected in the piano, with <Subject 1> singing in lip-sync to <Audio 1>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face and hair from <Picture 1>, seen in the reflection.
<Subject 2> (appears in [Shot 1]): fully_preserved - same face and hair from <Picture 2>, seen in the reflection.
<Audio 1> (appears in [Shot 1]): fully_copy - reused 1:1 as this shot's complete soundtrack. Her mouth follows the sung line.

detailed_description:
Frame zero is already a locked close view of the black fallboard. Both faces are already visible inside that reflection, and that crop holds through the last frame. The camera does not zoom, dolly, truck or reframe. Their real bodies stay below the frame, with only a small lower edge of shoulders or hands. <Subject 1> looks toward his reflected face. Her mouth stays fully visible and shapes the full phrase in <Audio 1>. <Subject 2> looks back at her reflection, and his lips stay nearly closed. Exactly one piano is present. Warm reflection and cool night highlight are already in frame zero, and the exposure stays constant. Faces remain stable. No extra fingers, extra limbs, third person, on-screen text or logo.

overall_soundscape:
Her singing voice follows <Audio 1>. No extra ambience is added.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持黑色及腰长直发、黑色露肩长袖上衣，左耳一枚银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持无胡须的面孔、黑色短发和黑色圆领T恤。
<主体 3> 是这一台立式钢琴光亮的黑色琴盖。两张脸都出现在这面倒影里。
<音频 1> 是已确认母带里的这一句“你会记得我们的约定”，只用于本镜。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头。两人的脸在钢琴倒影里，<主体 1>跟随<音频 1>演唱。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——倒影中保持<图片 1>的同一面孔和发型。
<主体 2>（出现在[镜头 1]）：完全保留——倒影中保持<图片 2>的同一面孔和发型。
<音频 1>（出现在[镜头 1]）：完全复用——1:1 作为本镜完整声轨。她的嘴跟随这一句。

详细描述:
第 0 帧已经是黑色琴盖的近景。两张脸从第 0 帧起就在这面倒影里，这个裁切保持到最后一帧。镜头不推、不拉、不横移、不改机位。真人身体留在画面下方，只在下缘露出少量肩膀或手。<主体 1>看向他在倒影中的脸。她的嘴全程可见，唱完<音频 1>里的整句。<主体 2>回看她的倒影，嘴唇基本闭着。只有一台钢琴。暖色反光和冷色夜光在第 0 帧就已经存在，曝光保持不变。脸保持稳定。不出现多指、多肢体、第三个人、画面文字或商标。

整体声音环境:
她的演唱跟随<音频 1>。不另加环境声。

非叙事音乐:
N/A
````

### 41　03:19.5–03:24.5　他的手覆上她的手

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_41_h3_v05.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the young adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Only her hand and black long sleeve enter this shot. Her hand has smooth, even early-twenties skin, slender fingers and short clean nails.
<Subject 2> is the young adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Only his hand and black short sleeve enter this shot. His hand has the same smooth early-twenties skin, just slightly larger.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot from the side of the keyboard. She keeps playing while his hand slowly comes to rest on hers.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the same young hand and black sleeve from <Picture 1> keep playing.
<Subject 2> (appears in [Shot 1]): fully_preserved - the same young hand and black sleeve from <Picture 2> settle on the back of her hand.

detailed_description:
Frame zero is already a low side view along one black upright piano's keyboard. The keys run across the frame, and this camera position holds through the last frame. It does not rise to a top-down view, zoom, or change rooms. No face or hair enters. Her hand is already on the keys, and her fingers keep pressing a slow phrase for the whole shot. Her black long sleeve stays at the wrist. His hand begins above and beside her hand, then lowers slowly onto the back of her hand and stays there. His fingers rest together on her skin and do not take over the keys. She continues playing underneath his hand. Both forearms connect to these two hands. Soft warm light is already on the keys in frame zero, and the exposure stays constant. The skin stays smooth and even. No second keyboard, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps or room ambience.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是年轻的成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。这一镜只出现她的手和黑色长袖。她的手有二十岁出头的均匀皮肤，手指纤细，指甲短而干净。
<主体 2> 是年轻的成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。这一镜只出现他的手和黑色短袖。他的手同样是二十岁出头的均匀皮肤，只是略大一点。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头。机位在键盘侧面。她一直在弹，他的手慢慢搭到她的手上。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——<图片 1>对应的年轻的手和黑色袖子一直在弹。
<主体 2>（出现在[镜头 1]）：完全保留——<图片 2>对应的年轻的手和黑色袖子落到她的手背上。

详细描述:
第 0 帧已经是这一架黑色立式钢琴键盘的侧面低机位。琴键横过画面，这个机位保持到最后一帧。不升成俯拍，不推近，也不换房间。不出现脸或头发。她的手已经在琴键上，手指整段都在慢慢按一段旋律。黑色长袖留在腕口。他的手从她的手侧上方开始，慢慢落到她的手背上，然后留在那里。他的手指并拢，停在她的皮肤上，不去抢琴键。她在他的手下继续弹。两条前臂各自连着这两只手。柔和的暖光在第 0 帧就已经落在琴键上，曝光保持不变。皮肤保持均匀。不出现第二排键盘、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步或室内环境声。

非叙事音乐:
N/A
````

### 42　03:24.5–03:29.5　她迎着风真正笑了

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_42_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> smile framing: assets/shot-guides/shot-42-smile.jpg

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her long straight black hair, black off-shoulder top and one silver left-ear stud.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Only his shoulder and the side of his head stay in the right foreground.
<Subject 3> is the close framing in <Picture 3>: she faces him, and his shoulder fills the right edge.
<Audio 1> is the sung line 迎着风我也笑了, taken from the confirmed master for this shot only.

summary:
[reference generation + audio reuse] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> smiling and singing in lip-sync to <Audio 1>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair and black off-shoulder top from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - the same man remains only as the right foreground shoulder.
<Audio 1> (appears in [Shot 1]): fully_copy - reused 1:1 as this shot's complete soundtrack. Her mouth follows the sung line.

detailed_description:
Frame zero is already the close view in <Picture 3>. Her face fills the left and center, his shoulder stays at the right edge, and that crop holds through the last frame. The camera does not zoom, dolly, truck or reframe. She looks toward him. Her mouth stays fully visible, shapes the full phrase in <Audio 1>, and the corners stay lifted in a small natural smile. Her hair moves only a little. His face stays mostly out of frame. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Face and clothing remain stable. No extra fingers, extra limbs, third person, on-screen text or logo.

overall_soundscape:
Her singing voice follows <Audio 1>. No extra ambience is added.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持黑色及腰长直发、黑色露肩上衣，左耳一枚银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。只让他的肩膀和头的侧面留在右侧前景。
<主体 3> 是<图片 3>的近景：她看向他，他的肩膀占住画面右缘。
<音频 1> 是已确认母带里的这一句“迎着风我也笑了”，只用于本镜。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头。<主体 1>微笑着跟随<音频 1>演唱。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的同一面孔、发型和黑色露肩上衣。
<主体 2>（出现在[镜头 1]）：完全保留——他仍只作为右侧前景的肩膀。
<音频 1>（出现在[镜头 1]）：完全复用——1:1 作为本镜完整声轨。她的嘴跟随这一句。

详细描述:
第 0 帧已经是<图片 3>那个近景。她的脸占左侧和中间，他的肩膀停在右缘，这个裁切保持到最后一帧。镜头不推、不拉、不横移、不改机位。她看向他。她的嘴全程可见，唱完<音频 1>里的整句，嘴角保持一点自然的笑。发丝只轻轻动。他的脸大部分留在画面外。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。脸和服装保持稳定。不出现多指、多肢体、第三个人、画面文字或商标。

整体声音环境:
她的演唱跟随<音频 1>。不另加环境声。

非叙事音乐:
N/A
````

### 43　03:29.5–03:34　他擦泪，她留下那只手

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_43_h3_v02.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> night window light: assets/shot-guides/shot-43-night-window.jpg

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her long straight black hair, black off-shoulder top and one silver left-ear stud.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his clean-shaven face, short black hair and black crew-neck T-shirt.
<Subject 3> is only the cool night-window light in <Picture 3>. Use that light behind the two people. Do not copy a pose from it.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 2> touching <Subject 1>'s cheek while she holds his wrist.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair and black off-shoulder top from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - same face, hair and black T-shirt from <Picture 2>.
<Subject 3> (appears in [Shot 1]): fully_preserved - the same cool night-window light from <Picture 3> stays behind them.

detailed_description:
Frame zero is already a shoulder-level close two-shot inside the same night apartment, with the cool window light from <Picture 3> behind them. Both faces are visible, and that crop holds through the last frame. The camera drifts only a little from left to right, then stops. It does not zoom or change rooms. <Subject 2> looks at her. His thumb already rests on her cheek, as if wiping one tear, and stays there. <Subject 1> looks back at him. Her hand already holds his wrist and keeps holding it. Their lips stay closed. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Faces, hands and clothing remain stable. No extra fingers, extra limbs, third person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps, water, wind or room ambience.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持黑色及腰长直发、黑色露肩上衣，左耳一枚银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持无胡须的面孔、黑色短发和黑色圆领T恤。
<主体 3> 只是<图片 3>里的冷色夜窗光。把这层光留在两人身后。不要从这张图复制姿势。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头。<主体 2>碰着<主体 1>的脸颊，她握住他的手腕。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的同一面孔、发型和黑色露肩上衣。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的同一面孔、发型和黑色T恤。
<主体 3>（出现在[镜头 1]）：完全保留——<图片 3>的同一层冷色夜窗光留在他们身后。

详细描述:
第 0 帧已经是肩部高度的双人近景，就在同一间夜里的公寓里，<图片 3>的冷色窗光留在两人身后。两张脸都在画面里，这个裁切保持到最后一帧。镜头只从左向右轻轻移一点，然后停住。不推近，也不换成另一间房。<主体 2>看着她。他的拇指已经停在她的脸颊上，像擦去一滴泪，并留在那里。<主体 1>回看他。她的手已经握住他的手腕，并一直握着。两人嘴唇都闭着。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。脸、手和服装保持稳定。不出现多指、多肢体、第三个人、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步、水声、风声或室内环境声。

非叙事音乐:
N/A
````

### 44　03:34–03:40　最后一句唱给眼前的人

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_44_h3_v04.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png
  - <Picture 3> night window light: assets/shot-guides/shot-43-night-window.jpg

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her long straight black hair, black off-shoulder long-sleeve top, and one silver left-ear stud.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his clean-shaven face, short black hair and black crew-neck T-shirt.
<Subject 3> is only the cool night-window light in <Picture 3>. Use that light behind them. Do not copy a pose from it.
<Audio 1> is the sung line 我更爱你了, taken from the confirmed master for this shot only.

summary:
[reference generation + audio reuse] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> singing to <Subject 2> at the piano, foreheads touching, one hand staying on the keys.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair and black off-shoulder long-sleeve top from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - same face, hair and black T-shirt from <Picture 2>.
<Subject 3> (appears in [Shot 1]): fully_preserved - the same cool night-window light from <Picture 3> stays behind them.
<Audio 1> (appears in [Shot 1]): fully_copy - use it 1:1 as the complete soundtrack. Her mouth follows this sung line.

detailed_description:
Frame zero is already a locked medium close two-shot at the one black upright piano. The keyboard fills the lower part of the frame, and that same crop holds through the last frame. The camera stays locked. <Subject 1> sits on the bench in her black off-shoulder long-sleeve top. Her three-quarter face is toward the lens, and her mouth stays unobstructed. <Subject 2> sits beside her. Their foreheads already touch and stay touching. Their lips stay apart. One of her hands is already pressing the keys and remains on the keys until the last frame. Her other hand already holds his wrist and keeps holding that wrist. She looks at him and sings the whole line in <Audio 1>. Warm interior light and the cool window light are already present in frame zero, and the exposure stays constant. Faces, hands and clothing remain stable. No extra fingers, extra limbs, third person, on-screen text or logo.

overall_soundscape:
Her singing follows <Audio 1>. Do not add dialogue, footsteps or room ambience.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持黑色及腰长直发、黑色露肩长袖上衣，两肩露在外面，左耳一枚银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持无胡须的面孔、黑色短发和黑色圆领T恤。
<主体 3> 只是<图片 3>里的冷色夜窗光。把这层光留在两人身后。不要从这张图复制姿势。
<音频 1> 是已确认母带里的这一句“我更爱你了”，只用于本镜。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头。<主体 1>在钢琴前唱给<主体 2>听，额头相抵，一只手一直留在琴键上。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的同一面孔、发型和黑色露肩长袖上衣。两肩和长袖都留在画面里。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的同一面孔、发型和黑色T恤。
<主体 3>（出现在[镜头 1]）：完全保留——<图片 3>的同一层冷色夜窗光留在他们身后。
<音频 1>（出现在[镜头 1]）：完全复用——1:1 作为本镜完整声轨。她的嘴跟随这一句。

详细描述:
第 0 帧已经是黑色立式钢琴前锁定的双人中近景。琴键占住画面下方，这个裁切保持到最后一帧。镜头不推近、不拉远、不横移。<主体 1>穿着黑色露肩长袖坐在琴凳上。她的三分之二脸朝向镜头，嘴部没有被挡住。<主体 2>坐在她旁边。两人额头已经相抵，并一直贴着。嘴唇保持分开。她的一只手已经按在琴键上，直到最后一帧都留在琴键上。另一只手已经握住他的手腕，并一直握着那只手腕。她看着他，唱完<音频 1>里的整句。暖色室内光和冷色窗光在第 0 帧就已经存在，曝光保持不变。脸、手和服装保持稳定。不出现多指、多肢体、第三个人、画面文字或商标。

整体声音环境:
她的演唱跟随<音频 1>。不另加对白、脚步或室内环境声。

非叙事音乐:
N/A
````

### 45　03:40–03:46.5　琴凳不再有空位

- 出镜人物 ID：lin-xi, wang-xiao-an
- 场景基准图 ID：apartment-piano-living-room
- 生成类型：`characterVideo`
- 输出视频：`generated/video/raw/shot_45_h3_v04.mp4`
- 图片顺序：
  - <Picture 1> lin-xi combined three-view: characters/20261015-lin-xi/assets/characters/three-view.png
  - <Picture 2> wang-xiao-an combined three-view: characters/20261015-wang-xiao-an/assets/characters/three-view.png

- H3 英文提示词（`prompt`）：

````text
subject_definitions:
<Subject 1> is the adult East Asian woman Lin Xi, whose identity comes from the single combined front-side-back three-view sheet in <Picture 1>. Preserve her long straight black hair, black off-shoulder long-sleeve top and one silver left-ear stud.
<Subject 2> is the adult East Asian man Wang Xiao-an, whose identity comes from the single combined front-side-back three-view sheet in <Picture 2>. Preserve his clean-shaven face, short black hair, black crew-neck T-shirt and white low-top sneakers.

summary:
[reference generation] one continuous 6.5-second photoreal live-action 16:9 MV shot of the two people seated at one piano, already holding one shared chord.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same face, hair and black off-shoulder long-sleeve top from <Picture 1>. She has two arms only.
<Subject 2> (appears in [Shot 1]): fully_preserved - same face, hair, black T-shirt and white sneakers from <Picture 2>. He has two arms only.

detailed_description:
Frame zero is already a side medium shot of the one black upright piano. <Subject 1> and <Subject 2> already sit together on the wide black bench, and that bench is tucked against the keyboard. They face the keys. Her right hand and his left hand already hold one chord together. Her other hand rests on her own thigh, and his other hand rests on his own thigh. Each arm connects to one of these four hands. The camera pulls back a little along the same side and locks. It does not swing around to the front of the room. The bench stays against the keyboard. The same two hands stay on the same chord, and the other two hands stay on the thighs. One wooden pencil and the open score stay on the music rack. Warm interior light and cool night light are already present in frame zero, and the exposure stays constant. Faces and clothing remain stable. No third person, on-screen text or logo.

overall_soundscape:
silence. Do not generate dialogue, singing, footsteps or room ambience.

non_diegetic_music:
N/A
````

- 中文完整对照（`promptZh`）：

````text
主体定义:
<主体 1> 是成年东亚女性林夕，身份来自<图片 1>中的单张正面、侧面、背面三视图合图。保持黑色及腰长直发、黑色露肩长袖上衣，左耳一枚银色耳钉。
<主体 2> 是成年东亚男性王小安，身份来自<图片 2>中的单张正面、侧面、背面三视图合图。保持无胡须的面孔、黑色短发、黑色圆领T恤和白色低帮运动鞋。

摘要:
一条连续 6.5 秒、真人写实、16:9 的参考图生成 MV 镜头。两人已经坐在同一架钢琴前，按着同一个和弦。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的同一面孔、发型和黑色露肩长袖上衣。她只有两条手臂。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的同一面孔、发型、黑色T恤和白色运动鞋。他只有两条手臂。

详细描述:
第 0 帧已经是这一架黑色立式钢琴的侧面中景。<主体 1>和<主体 2>已经一起坐在宽大的黑色琴凳上，琴凳贴着琴键。他们面向琴键。她的右手和他的左手已经一起按着同一个和弦。她的另一只手放在自己的大腿上，他的另一只手也放在自己的大腿上。每条手臂都连着这四只手中的一只。镜头沿同一侧稍微拉远，然后锁定。不转到房间正面。琴凳保持贴着琴键。按和弦的两只手留在原处，另外两只手留在大腿上。一支木铅笔和打开的琴谱留在谱架上。暖色室内光和冷色夜光在第 0 帧就已经存在，曝光保持不变。脸和服装保持稳定。不出现第三个人、画面文字或商标。

整体声音环境:
静音。不生成对白、演唱、脚步或室内环境声。

非叙事音乐:
N/A
````
