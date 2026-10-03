# 《故乡》最终分镜提示词

> 60 镜最终双语 H3 Ref2VA 提示词。人物参考图与已确认场景图按每镜实际上传顺序绑定到 `<Picture N>`。

## 已确认人物参考图

| 角色 ID | 角色 | 文件 | 视图顺序 | 状态 |
| --- | --- | --- | --- | --- |
| maleLead | 小王 | `assets/characters/maleLead_three_view_sheet.png` | 正面 / 侧面 / 背面 | confirmed |
| femaleLead | 嫂子 | `assets/characters/femaleLead_three_view_sheet.jpg` | 正面 / 侧面 / 背面 | confirmed |
| childLead | 强子 | `assets/characters/childLead_three_view_sheet.jpg` | 正面 / 侧面 / 背面 | confirmed |

## 已确认场景基准

| ID | 场景 | 文件 | 状态 |
| --- | --- | --- | --- |
| valley | 整体山谷与地理关系 | `assets/scenes/homeland_aerial_v26.png` | confirmed |
| house | 普通自建房入口 | `assets/scenes/house_threshold_v29_candidate.png` | confirmed |
| kitchen | 普通厨房内景 | `assets/scenes/main_room_stove_v01_candidate.png` | confirmed |
| road | 东门外向东土路 | `assets/scenes/road_west_gate_v02.png` | confirmed |
| field | 菜地西头与两行豆架 | `assets/scenes/field_west_end_v11_candidate.png` | confirmed |

## 图片编号规则

- 图片编号以每镜实际上传文件顺序为准；一张人物三视图合图只占一个编号，不是三个。
- 使用合图的单人镜：人物合图为 `<Picture 1>`，场景从 `<Picture 2>` 顺延；双人镜人物合图为 `<Picture 1/2>`，场景从 `<Picture 3>` 顺延。
- 只有实际拆分上传正面、侧面、背面三个文件时，单个人物才占三个编号。优先核对每镜 `referenceImages` 与生成记录，不能把旧输出视为使用后来修正的编号生成。
- 空景镜：场景图从 `<Picture 1>` 按 `sceneReferenceIds` 顺序连续编号。

## 01 · 00:00–00:08 · 山谷先被认出来

- 场景引用：valley、road、field
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_01_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/homeland_aerial_v26.png. The confirmed valley scene reference, loaded as <Picture 1>. Use it as the visual anchor for the broad rolling hills, layered distant ridges, foreground crop texture and warm late-afternoon light. Do not invent houses or a visible road where they are outside this frame; the road and house references define those closer spaces.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 2>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.
<Subject 3> is the environment anchored by <Picture 3> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 3>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 3>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a working late-summer Chinese farm village seen from a slightly high camera. Natural afternoon light, muted greens, gray-yellow soil, corn and low bean trellises, a rutted dirt track. Clouds hold nearly still. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] A slightly high camera makes an extremely slow, continuous forward truck with tiny amplitude and no acceleration over the confirmed valley anchor. The movement is deliberately restrained and stable, with no stutter or sudden speed changes. Layered low ridges fill the distance and late-summer crop texture fills the foreground. The established eastbound route begins at the lower edge and leads toward the fields, while the nearer road and bean rows follow their own confirmed picture anchors. No person.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/homeland_aerial_v26.png）锁定的环境。已确认的“整体山谷与地理关系”场景基准图，作为<图片 1>载入。以它锁定开阔起伏山地、层叠远山、前景作物质感和夏末偏暖的下午光线。画面外不可见的房屋和道路不要硬塞进这一构图；近处道路和房屋由对应场景图锁定。
<主体 2> 是由<图片 2>（assets/scenes/road_west_gate_v02.png）锁定的环境。已确认的“东门外向东土路”场景基准图，作为<图片 2>载入。保持浅色碎石与压实土组成的双车辙路、中央和两侧草带、深色树线、左侧朴素建筑边缘以及右侧开阔庄稼。道路继续向东通往菜地；不要变成柏油路或城市街道。
<主体 3> 是由<图片 3>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 3>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 8 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。夏末下午，略高的镜头看一个干活的农村：低饱和绿色、灰黄土、玉米和矮豆架、有车辙的土路。云几乎不动。不用金黄怀旧调色。
[镜头 1] 略高机位以极慢、连续、无加速的小幅度向前推进，运动必须稳定，不得卡顿或突然变速；先锁定已确认山谷图里的起伏山地、层叠远山和前景作物质感。向东路线从画面下沿延伸向田地，近处道路和豆架按各自的已确认场景图衔接。没有人。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 02 · 00:08–00:10.5 · 同一条土路更近

- 场景引用：valley、road、field
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_02_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/homeland_aerial_v26.png. The confirmed valley scene reference, loaded as <Picture 1>. Use it as the visual anchor for the broad rolling hills, layered distant ridges, foreground crop texture and warm late-afternoon light. Do not invent houses or a visible road where they are outside this frame; the road and house references define those closer spaces.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 2>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.
<Subject 3> is the environment anchored by <Picture 3> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 3>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 2.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 3>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a working late-summer Chinese farm village seen from a slightly high camera. Natural afternoon light, muted greens, gray-yellow soil, corn and low bean trellises, a rutted dirt track. Clouds hold nearly still. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] A lower close view of the same dirt track makes an imperceptibly slow, continuous micro-push forward with no acceleration or sudden speed change. Keep the wheel ruts, the edge of a corn plot, low bean trellises, and a corner of plain brick with a simple low roof stable and readable. No person.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/homeland_aerial_v26.png）锁定的环境。已确认的“整体山谷与地理关系”场景基准图，作为<图片 1>载入。以它锁定开阔起伏山地、层叠远山、前景作物质感和夏末偏暖的下午光线。画面外不可见的房屋和道路不要硬塞进这一构图；近处道路和房屋由对应场景图锁定。
<主体 2> 是由<图片 2>（assets/scenes/road_west_gate_v02.png）锁定的环境。已确认的“东门外向东土路”场景基准图，作为<图片 2>载入。保持浅色碎石与压实土组成的双车辙路、中央和两侧草带、深色树线、左侧朴素建筑边缘以及右侧开阔庄稼。道路继续向东通往菜地；不要变成柏油路或城市街道。
<主体 3> 是由<图片 3>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 3>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 2.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。夏末下午，略高的镜头看一个干活的农村：低饱和绿色、灰黄土、玉米和矮豆架、有车辙的土路。云几乎不动。不用金黄怀旧调色。
[镜头 1] 更低的近景以极慢、连续、无加速的微小幅度向前推进，禁止突然变速；车辙、玉米地边、矮豆架和一角朴素砖墙与简易屋顶保持稳定清晰。没有人。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 03 · 00:10.5–00:16.5 · 一条路往东

- 场景引用：valley、road、house
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_03_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/homeland_aerial_v26.png. The confirmed valley scene reference, loaded as <Picture 1>. Use it as the visual anchor for the broad rolling hills, layered distant ridges, foreground crop texture and warm late-afternoon light. Do not invent houses or a visible road where they are outside this frame; the road and house references define those closer spaces.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 2>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.
<Subject 3> is the environment anchored by <Picture 3> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 3>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 3>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a working late-summer Chinese farm village seen from a slightly high camera. Natural afternoon light, muted greens, gray-yellow soil, corn and low bean trellises, plain brick walls and a low simple roof, a rutted dirt track. Clouds hold nearly still. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] A slightly high view moves forward with small amplitude at slow speed along the same rutted dirt road, and the road stays near the center of the frame the whole time. Corn and low bean trellises stay on both sides. Ordinary self-built rural houses with a simple low roof stay beside the road. The camera does not descend onto a roof. No person.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/homeland_aerial_v26.png）锁定的环境。已确认的“整体山谷与地理关系”场景基准图，作为<图片 1>载入。以它锁定开阔起伏山地、层叠远山、前景作物质感和夏末偏暖的下午光线。画面外不可见的房屋和道路不要硬塞进这一构图；近处道路和房屋由对应场景图锁定。
<主体 2> 是由<图片 2>（assets/scenes/road_west_gate_v02.png）锁定的环境。已确认的“东门外向东土路”场景基准图，作为<图片 2>载入。保持浅色碎石与压实土组成的双车辙路、中央和两侧草带、深色树线、左侧朴素建筑边缘以及右侧开阔庄稼。道路继续向东通往菜地；不要变成柏油路或城市街道。
<主体 3> 是由<图片 3>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 3>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。夏末下午，略高的镜头看一个干活的农村：低饱和绿色、灰黄土、玉米和矮豆架、朴素砖墙和简易屋顶、有车辙的土路。云几乎不动。不用金黄怀旧调色。
[镜头 1] 略高的镜头沿同一条有车辙的土路小幅度慢速向东跟随。两侧仍是玉米和矮豆架。路边仍是普通农村自建房和简易屋顶。没有人。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 04 · 00:16.5–00:18.5 · 这一家的屋顶

- 场景引用：valley、house
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_04_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/homeland_aerial_v26.png. The confirmed valley scene reference, loaded as <Picture 1>. Use it as the visual anchor for the broad rolling hills, layered distant ridges, foreground crop texture and warm late-afternoon light. Do not invent houses or a visible road where they are outside this frame; the road and house references define those closer spaces.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 2>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 2-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a working late-summer Chinese farm village seen from a slightly high camera. Natural afternoon light, muted greens, gray-yellow soil, corn and low bean trellises, plain brick walls and a low simple roof, a rutted dirt track. Clouds hold nearly still. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] A slightly high static view holds on the confirmed ordinary self-built house entrance. The faded plaster facade, closed blue-green double door at left, partly open green metal door near center, rough gray trim and shallow concrete step remain the spatial anchor. The road direction stays off frame. No person.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/homeland_aerial_v26.png）锁定的环境。已确认的“整体山谷与地理关系”场景基准图，作为<图片 1>载入。以它锁定开阔起伏山地、层叠远山、前景作物质感和夏末偏暖的下午光线。画面外不可见的房屋和道路不要硬塞进这一构图；近处道路和房屋由对应场景图锁定。
<主体 2> 是由<图片 2>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 2>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 2 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。夏末下午，略高的镜头看一个干活的农村：低饱和绿色、灰黄土、玉米和矮豆架、朴素砖墙和简易屋顶、有车辙的土路。云几乎不动。不用金黄怀旧调色。
[镜头 1] 略高机位固定看这座普通自建房入口。画面以褪色抹灰墙、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属门、粗糙灰色门框和浅水泥台阶为锚点。道路方向留在画外，保持普通入口的简洁构图。没有人。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 05 · 00:18.5–00:25.5 · 路还很长

- 场景引用：valley、road
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_05_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/homeland_aerial_v26.png. The confirmed valley scene reference, loaded as <Picture 1>. Use it as the visual anchor for the broad rolling hills, layered distant ridges, foreground crop texture and warm late-afternoon light. Do not invent houses or a visible road where they are outside this frame; the road and house references define those closer spaces.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 2>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.

summary:
[reference generation] one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a working late-summer Chinese farm village seen from a slightly high camera. Natural afternoon light, muted greens, gray-yellow soil, corn and low bean trellises, a rutted dirt track. Clouds hold nearly still. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] The same slightly high view trucks forward with small amplitude at slow speed along the same rutted dirt road, and the road stays near the center. Corn, low bean trellises and ordinary self-built rural houses with simple low roofs continue on both sides. No person.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/homeland_aerial_v26.png）锁定的环境。已确认的“整体山谷与地理关系”场景基准图，作为<图片 1>载入。以它锁定开阔起伏山地、层叠远山、前景作物质感和夏末偏暖的下午光线。画面外不可见的房屋和道路不要硬塞进这一构图；近处道路和房屋由对应场景图锁定。
<主体 2> 是由<图片 2>（assets/scenes/road_west_gate_v02.png）锁定的环境。已确认的“东门外向东土路”场景基准图，作为<图片 2>载入。保持浅色碎石与压实土组成的双车辙路、中央和两侧草带、深色树线、左侧朴素建筑边缘以及右侧开阔庄稼。道路继续向东通往菜地；不要变成柏油路或城市街道。

摘要:
一条连续 7 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。夏末下午，略高的镜头看一个干活的农村：低饱和绿色、灰黄土、玉米和矮豆架、有车辙的土路。云几乎不动。不用金黄怀旧调色。
[镜头 1] 同一高机位沿土路小幅度慢速前移。两侧是草。豆架只在最东头露出一点。没有岔路，也没有人。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 06 · 00:25.5–00:28.5 · 两行从天上被看清

- 场景引用：field
- 出镜人物：
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_06_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the single confirmed west-end bean-field environment anchored by <Picture 1> from assets/scenes/field_west_end_v11_candidate.png. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. This shot contains no basin, no tray, no basket and no loose props.

summary:
[reference generation] one continuous 3-second photoreal live-action 16:9 MV shot of <Subject 1>, with the camera locked in one static position while natural wind creates restrained plant motion.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed bean-field geometry, rows, stakes, soil, tree line and light from <Picture 1>; add no props and only subtle natural wind motion.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer rural Chinese field in natural afternoon light. The camera is locked off; this is not a time-lapse, not a sped-up shot, and not a still photograph. The locked frame remains stable while a light breeze creates continuous, visible but restrained motion in the bean leaves and a few roadside weeds.
[Shot 1] A slightly high east-facing aerial medium-wide holds one locked camera position for the entire three seconds. The sparse roadside bean row stays on the left and the dense field row stays on the right. No basin, tray, basket, tools, loose props, or people appear anywhere. Bean leaves and a few weeds sway gently in one consistent natural breeze from left to right, with small irregular changes across the clip; bamboo stakes, soil furrow, tree line, horizon and overall field geometry remain fixed. Clouds drift only imperceptibly. No time-lapse, acceleration, flicker, duplicate objects, object morphing, or on-screen text or logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/field_west_end_v11_candidate.png）锁定的唯一“菜地西头与两行豆架”环境。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。本镜不出现盆、竹匾、竹篮、农具、散落道具或人物。

摘要:
一条连续 3 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>位于已锁定菜地中，整段固定一个机位。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的菜地几何、豆行、竹竿、土沟、树线和光线；只加入持续、克制的自然风动，不加入任何道具。

详细描述:
目标视频为实时真人写实影像。夏末下午自然光，克制的农村菜地。摄影机全程锁定，不做延时、不做加速，也不是静态照片；固定画面中必须有连续可见但克制的自然风动。
[镜头 1] 略高航拍朝东，整段保持同一个固定机位。左侧靠路豆行稀疏，右侧靠田豆行浓密。全画面不出现盆、竹匾、竹篮、农具、散落道具或人物。豆叶和少量路边杂草在同一阵轻风中持续轻轻向右摆动，幅度小且不规则；竹竿、土沟、树线、地平线和菜地几何保持稳定。云层几乎不动。禁止延时、加速、闪烁、物体复制、物体变形或闪现，不出现画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 07 · 00:28.5–00:32.5 · 种盆在西头

- 场景引用：valley、field
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_07_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/homeland_aerial_v26.png. The confirmed valley scene reference, loaded as <Picture 1>. Use it as the visual anchor for the broad rolling hills, layered distant ridges, foreground crop texture and warm late-afternoon light. Do not invent houses or a visible road where they are outside this frame; the road and house references define those closer spaces.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 2>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 4-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a working late-summer Chinese farm village seen from a slightly high camera. Natural afternoon light, muted greens, gray-yellow soil, corn and low bean trellises, a rutted dirt track. Clouds hold nearly still. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] A lower aerial close view of the same enamel basin pushes in with small amplitude at slow speed. Short thick beans fill it. The two trellises stay readable behind, left sparse and right dense. No hand enters.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/homeland_aerial_v26.png）锁定的环境。已确认的“整体山谷与地理关系”场景基准图，作为<图片 1>载入。以它锁定开阔起伏山地、层叠远山、前景作物质感和夏末偏暖的下午光线。画面外不可见的房屋和道路不要硬塞进这一构图；近处道路和房屋由对应场景图锁定。
<主体 2> 是由<图片 2>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 2>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 4 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。夏末下午，略高的镜头看一个干活的农村：低饱和绿色、灰黄土、玉米和矮豆架、有车辙的土路。云几乎不动。不用金黄怀旧调色。
[镜头 1] 较低的航拍近景对同一只搪瓷盆小幅度慢速推近。盆里是短粗豆。后方两行架子仍能感到左稀右密。没有手入画。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 08 · 00:32.5–00:37 · 落到路的西头

- 场景引用：valley、road、field
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_08_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/homeland_aerial_v26.png. The confirmed valley scene reference, loaded as <Picture 1>. Use it as the visual anchor for the broad rolling hills, layered distant ridges, foreground crop texture and warm late-afternoon light. Do not invent houses or a visible road where they are outside this frame; the road and house references define those closer spaces.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 2>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.
<Subject 3> is the environment anchored by <Picture 3> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 3>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 3>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a working late-summer Chinese farm village seen from a slightly high camera. Natural afternoon light, muted greens, gray-yellow soil, corn and low bean trellises, a rutted dirt track. Clouds hold nearly still. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] The camera lowers with small amplitude at slow speed along the same rutted dirt road. Corn and the bean trellises stay in place and do not become bare furrows. The pale basin remains beside the sparser row. By the end the road is larger in the frame. No person and no tray.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/homeland_aerial_v26.png）锁定的环境。已确认的“整体山谷与地理关系”场景基准图，作为<图片 1>载入。以它锁定开阔起伏山地、层叠远山、前景作物质感和夏末偏暖的下午光线。画面外不可见的房屋和道路不要硬塞进这一构图；近处道路和房屋由对应场景图锁定。
<主体 2> 是由<图片 2>（assets/scenes/road_west_gate_v02.png）锁定的环境。已确认的“东门外向东土路”场景基准图，作为<图片 2>载入。保持浅色碎石与压实土组成的双车辙路、中央和两侧草带、深色树线、左侧朴素建筑边缘以及右侧开阔庄稼。道路继续向东通往菜地；不要变成柏油路或城市街道。
<主体 3> 是由<图片 3>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 3>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。夏末下午，略高的镜头看一个干活的农村：低饱和绿色、灰黄土、玉米和矮豆架、有车辙的土路。云几乎不动。不用金黄怀旧调色。
[镜头 1] 航拍小幅度慢速下降，落到两行西头的空土。种盆留在画面左侧。土路从西边过来。没有人，也没有竹匾。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 09 · 00:37–00:43 · 土路还很长

- 场景引用：road
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_09_h3_v04.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man from the combined front, side and back character sheet in <Picture 1>. Keep the same face, layered black hair, ivory open shirt over a white T-shirt, loose light-blue jeans, white-gray sneakers, pendant, black watch and bracelet.
<Subject 2> is the confirmed eastbound rural lane from <Picture 2>. Preserve its single twin-track pale gravel and packed-earth road, grassy center and edges, left building edge, right crops and dark tree line. The road continues straight toward the field; there is no crossroads, fork or side road.

summary:
[reference generation] one continuous 6-second photoreal live-action shot of <Subject 1> walking away from the camera along the single eastbound road in <Subject 2>, carrying the empty round bamboo tray in front of his body.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain the same identity, hair, body and clothing from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - retain the confirmed road direction, twin tracks, grass, building edge, crops and light from <Picture 2>.

detailed_description:
Photoreal live-action in real time, restrained late-summer rural China, natural afternoon light and muted greens. The road axis is the main visual sentence: near foreground leads straight toward the distant field.
[Shot 1] The camera is behind and slightly left of <Subject 1>, facing east down the same road. The twin wheel tracks recede toward a central distant vanishing point. <Subject 1> enters from the near foreground and walks away from camera along the right wheel track, following the road depth toward the field. His back and slight left rear three-quarter outline remain visible, and the empty round bamboo tray stays held level in front of his abdomen, its near rim visible beside his body rather than behind his back. He never walks left-to-right across the frame, never turns around, never takes a side path, and never stops at a crossroads because there is no crossroads. The camera follows along the road axis with small amplitude at slow speed; it does not truck sideways or orbit. He grows slightly smaller as the road opens ahead. Keep one person, continuous direction, stable clothing and hands, no extra limbs, no text or logos.

overall_soundscape:
silence. No dialogue, singing or location sound is generated; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>正面、侧面、背面合成三视图中的成年中国男性小王。保持同一张脸、层次黑发、敞开的乳白短袖衬衫罩白T恤、浅蓝宽松牛仔裤、白灰运动鞋、吊坠、黑表和手链。
<主体 2> 是<图片 2>确认的向东农村土路。保持唯一一条浅色碎石与压实土双车辙路、中央和两侧草带、左侧建筑边缘、右侧庄稼和深色树线。道路直通远处菜地，没有十字路口、岔路或支路。

摘要:
一条连续6秒真人写实镜头，<主体 1>沿<主体 2>唯一向东土路背向镜头走远，腹前抱着空圆竹匾。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的身份、头发、身体和服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的路向、双车辙、草带、建筑边缘、庄稼和光线。

详细描述:
实时真人写实影像，克制的夏末农村下午光，低饱和绿色。道路纵深是本镜主句：近处道路一直指向远处菜地。
[镜头 1] 摄影机在<主体 1>后方偏左，朝东沿同一条路拍摄。双车辙从前景向画面中央远处消失。<主体 1>从近处进入，沿右侧车辙背向镜头向远处菜地走去。可见他的背部和轻微左后侧轮廓，空圆竹匾始终水平抱在腹部前方，匾的近边从身体侧后方仍可辨，不得背到身后。人物绝不横向从左走到右，绝不回头，绝不拐进支路；这里没有十字路口。摄影机沿道路轴线小幅度慢速跟随，不横移、不环绕。人物随道路展开略微变小。只有一个人，方向连续，服装和双手稳定，不出现额外肢体、文字或商标。

整体声音环境:
静音。不生成对白、演唱或现场声；歌曲母带只在最终剪辑加入。

非叙事音乐:
N/A
```

## 56 · 00:43–00:45 · 脚步还在走

- 场景引用：road
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_56_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 4>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.

summary:
[reference generation] one continuous 2-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] The camera is at ankle height in a tight locked-off close-up, framed strictly from below the knees. Only the loose light-blue jean cuffs, white-and-light-gray low-top sneakers, packed dirt road, and the near edge of the round bamboo tray are visible. Two natural alternating steps carry the lower legs from screen left to screen right; the tray edge swings slightly with the walk. The face, chest, shoulders, hands, and full body stay completely outside the frame. No frontal portrait, no upper body, no duplicate shoes, no extra legs, no jump cuts, no morphing, no text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/road_west_gate_v02.png）锁定的环境。已确认的“东门外向东土路”场景基准图，作为<图片 4>载入。保持浅色碎石与压实土组成的双车辙路、中央和两侧草带、深色树线、左侧朴素建筑边缘以及右侧开阔庄稼。道路继续向东通往菜地；不要变成柏油路或城市街道。

摘要:
一条连续 2 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 脚踝高度的低机位紧特写，构图严格裁在膝盖以下。画面只出现浅蓝宽松牛仔裤裤脚、白灰低帮运动鞋、压实土路和身侧圆竹匾的边缘。两步自然交替，从画面左侧走向右侧；竹匾边缘随步伐轻微摆动。脸、胸口、肩膀、双手和完整人物始终在画外。禁止正面肖像、上半身、重复鞋子、额外腿、跳切、变形、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 10 · 00:45–00:47 · 路上的鞋

- 场景引用：road
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_10_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man from the combined character sheet in <Picture 1>. Preserve his loose light-blue jeans, white-gray low-top sneakers, black watch and the near edge of his round bamboo tray.
<Subject 2> is the confirmed single eastbound twin-track dirt lane from <Picture 2>. Preserve the packed earth, pale gravel, grassy center, crop edges and road depth; there is no crossroads or side road.

summary:
[reference generation] one continuous 2-second photoreal live-action insert of <Subject 1>'s lower legs walking away along the road axis in <Subject 2>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same jeans, sneakers, tray edge and walking direction from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same eastbound twin-track road and depth from <Picture 2>.

detailed_description:
Photoreal live-action in real time, a restrained rural road insert matching the previous shot. The road must read as a corridor into depth, not a horizontal stage.
[Shot 1] The camera is at ankle height behind <Subject 1>, aimed east down the twin-track dirt lane. Only his loose light-blue jean cuffs, white-gray sneakers, the near edge of the round bamboo tray at the right side, and the road are visible. Two natural alternating steps travel away from camera from the lower foreground toward the central distance along the right wheel track. The shoes become slightly smaller as they move forward; they do not cross from screen left to screen right, do not turn, and do not reverse. Keep the face, torso and upper body outside the frame. No jump cut, no extra legs, no sideways tracking, no crossroads, no text or logos.

overall_soundscape:
silence. No dialogue, singing or location sound is generated; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>三视图中的成年中国男性小王。保持浅蓝宽松牛仔裤、白灰低帮运动鞋、黑表、竹匾近边和向前走的方向。
<主体 2> 是<图片 2>确认的唯一向东双车辙土路。保持压实土、浅色碎石、中央草带、路边庄稼和道路纵深；没有十字路口或支路。

摘要:
一条连续2秒真人写实脚部插入，<主体 1>沿<主体 2>道路轴线背向镜头走远。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的牛仔裤、运动鞋、竹匾边缘和行走方向。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的向东双车辙土路与纵深。

详细描述:
实时真人写实影像，克制的农村土路插入，和上一镜保持同一空间。土路必须是通向远处的走廊，不是横向舞台。
[镜头 1] 摄影机在<主体 1>后方脚踝高度，朝东沿双车辙土路拍摄。画面只出现浅蓝宽松牛仔裤脚、白灰运动鞋、身体右侧竹匾近边和土路。两步自然交替，从近处前景沿右侧车辙向画面中央远处走，鞋子随纵深略变小；绝不从画面左侧横穿到右侧，不转弯，不倒退。脸、躯干和上半身完全在画外。不得跳切、额外腿、横向跟拍、十字路口、文字或商标。

整体声音环境:
静音。不生成对白、演唱或现场声；歌曲母带只在最终剪辑加入。

非叙事音乐:
N/A
```

## 11 · 00:47–00:53 · 弯口第一次露出菜架

- 场景引用：road、field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_11_h3_v07.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man from the combined character sheet in <Picture 1>. Preserve his identity, ivory open shirt over white T-shirt, loose light-blue jeans, white-gray sneakers and empty round bamboo tray.
<Subject 2> is the confirmed eastbound road from <Picture 2>. Preserve the single packed-earth twin-track lane, grassy center, building edge and crops; it has one bend but no crossroads or fork.
<Subject 3> is the confirmed west-end bean field from <Picture 3>. Preserve only a distant small glimpse of its low bamboo trellis at the far end of the road; do not reveal the full field yet.

summary:
[reference generation] one continuous 6-second photoreal live-action shot of <Subject 1> continuing away along the bend in <Subject 2>, with only a first small glimpse of <Subject 3> at the end.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, outfit and tray from <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same road direction, materials and bend from <Picture 2>.
<Subject 3> (appears in [Shot 1]): fully_preserved - reveal only the distant trellis edge anchored by <Picture 3>, without changing the road into a crossroads.

detailed_description:
Photoreal live-action in real time, restrained late-summer rural China, natural afternoon light and muted greens. This is a continuation of the same eastbound road, not a new location and not a crossroad.
[Shot 1] The camera holds a static slightly low three-quarter view from outside the bend, facing east along the road. The road begins in the near foreground at the bottom center and recedes toward one bend in the distance. <Subject 1> enters from the near foreground on the road axis with the empty tray held level in front of his abdomen, then keeps walking away toward the bend. His body and tray become smaller with depth; he does not cross horizontally, turn around, stop at a junction or take a side path. As he rounds the bend, the road hides most of his body. Only during the final moment does a small distant section of low bean trellis from <Subject 3> appear beyond the bend on the right; the full field is reserved for the next shot. One person, one continuous direction, stable hands and clothing, no jump cut, no extra limbs, no text or logos.

overall_soundscape:
silence. No dialogue, singing or location sound is generated; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>三视图中的成年中国男性小王。保持他的身份、乳白衬衫罩白T恤、浅蓝宽松牛仔裤、白灰运动鞋和空圆竹匾。
<主体 2> 是<图片 2>确认的向东土路。保持唯一一条压实土双车辙路、中央草带、建筑边缘和庄稼；只有一个弯，没有十字路口或岔路。
<主体 3> 是<图片 3>确认的菜地西头。只在路弯远处露出一小截低矮竹架，不提前展示完整菜地。

摘要:
一条连续6秒真人写实镜头，<主体 1>继续沿<主体 2>弯道走远，最后才看见<主体 3>的一小截远处豆架。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的身份、头发、服装、身体和竹匾。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的路向、材质和弯道。
<主体 3>（出现在[镜头 1]）：完全保留——只按<图片 3>在远处露出一截竹架，不能把道路改成十字路口。

详细描述:
实时真人写实影像，克制的夏末农村下午光、低饱和绿色。这是同一条向东土路的延续，不是新地点，也不是十字路口。
[镜头 1] 摄影机在弯道外侧，平视略低三分之二构图，朝东沿路固定拍摄。土路从画面底部中央近处向远处一个弯道收束。<主体 1>沿道路轴线从近处进入，空竹匾水平抱在腹部前方，继续向弯道远处走。人物和竹匾随纵深变小；不横穿画面、不回头、不在路口停下、不走支路。转过弯后，弯道遮住他大部分身体。直到最后一刻，弯后右侧远处才露出<主体 3>的一小截矮豆架，完整菜地留给下一镜。只有一个人，方向连续，双手和服装稳定，不跳切、不出现额外肢体、文字或商标。

整体声音环境:
静音。不生成对白、演唱或现场声；歌曲母带只在最终剪辑加入。

非叙事音乐:
N/A
```

## 12 · 00:53–01:01 · 放下匾，看见两行

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_12_h3_v05.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] A fixed eye-level medium-wide view faces east at the western end of the confirmed bean field. The left bean row is visibly sparse and the right row visibly denser. One small pale enamel seed basin stays fixed on the bare soil at the western end of the sparse left row. <Subject 1> must enter from screen left and move toward screen right, carrying the empty round bamboo tray level in both hands. He reaches the space beside the two rows, lowers the tray once onto the bare soil, releases it, and then holds his gaze on the sparse-left/dense-right contrast. The action must not reverse direction, start from screen right, jump position, or duplicate the tray or basin. Brows slightly gathered, lips closed. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable face and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 8 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视中全景固定朝东，机位锁在确认过的菜地西头。左侧豆行明显稀疏，右侧豆行明显浓密；左侧稀疏豆行西头的裸土上固定放着一只小的浅色搪瓷种盆。<主体 1>必须从画面左侧向画面右侧进入，双手平稳抱着空圆竹匾，走到两行旁边后只放下一次竹匾，松手，再停住看向左稀右密的两行。不得从右侧进入、反向行走、突然换位、复制竹匾或复制种盆。眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 13 · 01:01–01:04 · 他看见了

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_13_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 3-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] An eye-level medium close-up pushes in with small amplitude at slow speed. <Subject 1>'s gaze moves once from the dense right row to the basin on the left, then holds. Mild three-quarter, brows gathered, lips closed. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 3 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视中近景小幅度慢速推近。<主体 1>的目光从右侧浓密豆行移到左侧种盆一次，然后停住。轻微三分之二，眉收着，闭唇。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 14 · 01:04–01:06.5 · 手伸进留种行

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_14_h3_v07.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from the combined front, side and back character sheet in <Picture 1>. Keep the same clean-shaven youthful face, layered medium-short black hair, ivory-white short-sleeve open shirt over a plain white T-shirt, loose light-blue jeans, white-gray low-top sneakers, silver rectangular pendant, black watch and thin bracelet.
<Subject 2> is the confirmed west-end bean-field environment anchored by <Picture 2>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line, low ridge and the pale enamel seed basin beside the sparse left row.

summary:
[reference generation] one continuous 2.5-second photoreal live-action single-hand insert of one adult man's right forearm approaching a short bean and stopping with a large visible gap before contact; no body or second person is visible.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain only the same right forearm, ivory cuff, bracelet and hand from <Picture 1>; the torso, legs and face stay outside the frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - retain the confirmed bean rows, bamboo supports, soil, basin and afternoon light from <Picture 2>.

detailed_description:
Photoreal live-action in real time, restrained late-summer rural China, natural afternoon light, muted greens and realistic vine texture. This shot is only the approach beat before the next shot's contact beat.
[Shot 1] A tight hand insert holds one clearly visible short thick bean in the upper-left/center on the sparse vine. Only one adult man's right forearm and right hand enter from the lower-right, with the ivory shirt cuff and thin bracelet visible. Crop the frame strictly below the elbow: no torso, chest, shoulders, waist, legs, shoes, face, head, standing body or second person may appear anywhere, even in the background. The hand moves slowly toward the vine but stops on the lower-right side, still at least one palm-width away from the bean, with a continuous strip of soil and leaves visibly separating hand and bean. The open fingertips stay beside the vine, never below it; the palm never supports it. The hand must not reach under the bean, cup it, touch it, pinch it, pull it, bend it or wrap around it. The bean remains untouched and attached for the entire shot. Hold the final separated hover for the last half-second so the next shot alone can cut to contact. No basin, tray, basket, harvest props, duplicate person, duplicate arm, duplicate hand, extra fingers, full body, object morphing, text or logos.

overall_soundscape:
silence. No dialogue, singing or location sound is generated; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>正面、侧面、背面合成三视图中的成年中国男性小王。保持清秀无胡须的脸、层次中短黑发、敞开的乳白短袖衬衫罩白T恤、浅蓝宽松牛仔裤、白灰运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是<图片 2>确认的菜地西头场景。保持两行豆架、绿色竹竿、深色裸土沟、树线、低山脊，以及稀疏左行旁的浅色搪瓷种盆。

摘要:
一条连续2.5秒真人写实靠近镜头，<主体 1>张开的右手靠近<主体 2>中的短豆，但在保留明显空隙时停住。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>中的身份、服装、右腕手链和手部。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>中的豆行、竹架、土沟、种盆和下午光。

详细描述:
实时真人写实影像，克制的夏末农村下午光，低饱和绿色和真实藤蔓纹理。本镜只负责下一镜接触动作之前的靠近段。
[镜头 1] 手部插入紧特写，唯一清楚可见的一根短粗豆角固定在画面左上至中央的稀疏藤蔓上。画面严格裁在手肘以下，只有一个成年男人的一条右前臂和一只右手从右下侧进入，乳白衬衫袖口和细手链清楚可见；小王的躯干、胸口、肩膀、腰、腿、鞋、脸、头和任何第二个人始终不得出现，包括背景中站立的人影。手缓慢靠近藤蔓，但停在豆角右下侧外面，手与豆角之间始终留有至少一掌宽、连续可见的土色和叶片空隙。手指完全张开，只停在豆角侧边，绝不从下方进入，绝不托住、碰到、捏住、拉拽、弯折或环抱豆角。豆角全程没有被触碰并仍连在藤上。最后半秒保持分离悬停，只有下一镜才硬切到接触。豆角旁不放搪瓷盆、竹匾、竹篮或其他收获道具。不得出现第二个人、第二条手臂、重复手、额外手指、完整人物、物体变形、文字或商标。

整体声音环境:
静音。不生成对白、演唱或现场声；歌曲母带只在最终剪辑加入。

非叙事音乐:
N/A
```

## 15 · 01:06.5–01:08 · 短豆还在藤上

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_15_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 1.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] A true tight hand macro close-up holds static, framed from below the chest and excluding the face, head, shoulders and full body. Only <Subject 1>'s right fingertips gently pinch one short thick bean still attached to the sparse vine, plus a small curve of the round bamboo tray and the edge of the pale enamel seed basin at the frame border. The bean remains on the vine for the entire shot. The fingers do not pull, snap, pick, or move the bean toward the tray. No portrait, no full-body view, no wide field, no extra fingers, no duplicate beans, no morphing, no text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 1.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 特写固定在<主体 1>捏着一根短粗豆的手指上。豆角还在藤上。搪瓷盆的弧线留在画边。手指不往下拽。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 16 · 01:08–01:12.5 · 嫂子在豆架边喊停

- 场景引用：field
- 出镜人物：femaleLead（小王画外）
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_16_h3_v06.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from the single three-view character sheet in <Picture 1>. Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the confirmed west-end bean field anchored by <Picture 2> from assets/scenes/field_west_end_v11_candidate.png. Preserve the same two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. Keep the sparse seed row and the denser meal row in their established left-right relationship.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot in the same west-end bean field immediately after the hand macro: the woman comes over from the adjacent bean row and firmly stops Xiaowang, who remains offscreen at the exact picking position from the previous shot.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three-view reference.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed field geometry, bean rows, stakes, soil furrow and afternoon light from <Picture 2>. Xiaowang is offscreen; do not generate any second person, partial body or duplicate.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow soil and used bamboo stakes. No golden nostalgia grade and no tourism scenery.
[Shot 1] Use a locked eye-level medium shot inside the same bean field, with the row gap and dark soil furrow visible. <Subject 1> enters slowly from the side of the denser meal row into the row gap, takes two short steps, then stops. She faces toward an offscreen point just beyond the sparse seed row where Xiaowang remains at the exact position from the previous hand close-up. She extends one arm toward that offscreen point, palm fully facing him with fingers together in a clear stop gesture. Her other hand stays down. Her eyes lock offscreen, brows pull together, eyes widen slightly, and her mouth opens in a short urgent call shape; this must read as stopping someone who is about to pick the seed beans, not waving goodbye. Keep the same bean rows and field depth throughout. Do not show Xiaowang, any male body part, a second person, a road junction, a house entrance, a new location, a walk-through of the rows, a camera move, a jump cut, extra limbs, facial warping, text or logos. The camera is completely locked off; the only motion is her two short steps, stop, palm-out gesture and urgent expression.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the shout is expressed visually through the urgent mouth shape and stop gesture, and the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>中的成年中国农村女性嫂子三视图人物参考。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是<图片 2>（assets/scenes/field_west_end_v11_candidate.png）确认的菜地西头环境。保持同一块菜地、两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊；左侧稀疏留种行与右侧浓密晚饭行的左右关系不变。小王不出镜，不能生成第二个人或局部男性身体。

摘要:
一条连续4.5秒、真人写实、16:9的镜头，紧接镜15手部特写，仍在同一片菜地。嫂子从相邻豆行走到行间土沟，停下来朝画外、仍在上一镜摘豆位置的小王明确喊停。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持嫂子三视图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持已确认菜地的两行豆架、竹竿、土沟、光线和左右空间关系；小王在画外，不生成任何第二个人或男性局部。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 在同一片菜地内部使用完全锁定的平视中景，画面能看见行间土沟、两侧豆架和上一镜的空间纵深。<主体 1>从右侧浓密晚饭行一侧进入行间土沟，短短走两步后停下。她面朝左侧稀疏留种行外、上一镜小王仍在摘豆的画外位置，伸出一只手，掌心完整朝向画外小王、手指并拢，形成明确的“停下”手势，另一只手自然下垂。她的目光锁定画外，眉头收紧，眼睛略睁大，嘴张开形成短促急切的喊停口型；必须看起来是在阻止小王摘留种短豆，不是挥手告别。全程保持同一两行豆架、土沟和下午光线。不出现小王、任何男性身体局部、第二个人、土路路口、房屋入口、新地点、横向穿行、跳切、镜头移动、额外肢体、脸部变形、文字或商标。镜头完全固定，唯一动作是嫂子短走两步、停住、掌心拦停和急切表情。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；喊停通过急切张口口型和掌心拦停动作表达，歌曲母带只在最终剪辑中加入。

非叙事音乐:
N/A
```

## 17 · 01:12.5–01:16 · 他看见种盆

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_17_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 3.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] An eye-level medium close-up holds the same framing for the entire clip, allowing only a very small slow push of a few centimeters. <Subject 1> remains chest-up with a little bean trellis and the pale enamel basin at lower screen-left still recognizable. He withdraws his right hand once from the vine, then moves his gaze once down-left to the basin and holds it. The camera must not zoom from full body to close-up, must not rush forward, and must not change to a wide shot. Brows gathered, lips closed, breath shallow, mild three-quarter view. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable face and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 3.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视中近景小幅度慢速推近。<主体 1>把手抽回。目光移到种盆一次并停住。眉收着，闭唇，呼吸浅。轻微三分之二。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 18 · 01:16–01:22 · 改摘晚饭行

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_18_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] An eye-level medium shot holds static. <Subject 1> bends into the dense right row and snaps two long green beans off the vine. The basket stays on the soil by his feet. Gaze on the pods, brows loosening, lips closed. He does not touch the left row. Mild three-quarter. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视中景固定。<主体 1>弯进右侧浓密豆行，折下两根长豆角。篮子留在脚边的土上。目光在豆荚上，眉松开，闭唇。他不碰左行。轻微三分之二。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 52 · 01:22–01:28 · 长豆落进篮

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_52_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from the single combined front/side/back character sheet in <Picture 1>. Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 2>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] Tight slightly overhead close-up filling the frame with a shallow rectangular woven bamboo basket mouth, green beans and two hands. The basket mouth occupies most of the image; the camera holds this tight crop unchanged for all six seconds. The surrounding field is only a narrow strip of blurred green leaves and soil. <Subject 1>'s left hand, with the black wristwatch visible, rests on the near rim and stays in exactly that supported position for the entire take. Only the two forearms and hands appear above the basket; the body remains bent outside the crop. The basket is low-sided, about eight centimeters deep, with tall arched handles extending above the cropped top edge. Its base stays flat on the soil. The right hand with the thin bracelet holds exactly two long slender green beans three centimeters over the pile. For the first two seconds both hands hold their positions. Then the right fingers gently open once and release the two beans, which settle onto the pile in the basket. The right hand remains hovering only a few centimeters above the beans afterward; the left hand continues resting on the rim through the last frame. The basket and both forearms keep the same positions and scale. Natural small finger motion and a slight rustle of nearby leaves make this a real-time moving shot. Stable weave, coherent hands, fixed focus on the beans and fingertips.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面、侧面、背面合在同一张人物三视图中）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 2>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 2>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持单张人物三视图合图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 紧取景略俯近景，浅长方竹篮口、青豆和双手填满画面，篮口占大部分画幅；摄影机六秒始终保持这个紧裁切。周围豆地只剩窄条虚化绿叶和泥土。<Subject 1>戴黑表的左手搭在近侧篮沿，整镜一直留在同一支撑位置。篮上方只露双前臂和手，身体在取景外保持弯着。篮壁约八厘米高，长拱提手伸到画面上沿外，篮底贴土不动。戴细手链的右手在豆堆上方三厘米捏着恰好两根细长青豆角。前两秒双手持住，随后右手指只张开一次，两根长豆落入篮中并搭在豆堆上落稳。右手随后仅悬停在豆上方几厘米，左手直到末帧仍搭着篮沿。篮和双前臂位置、大小保持不变。细微真实指动、边缘叶子轻动体现实时视频，竹纹和双手稳定，对焦豆与指尖。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 19 · 01:28–01:30.5 · 篮子沉了

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_19_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 2.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] From the very first frame, the camera is already in a tight slightly high close-up framed strictly below the shoulders. Only <Subject 1>'s wrist, black watch, lower white shirt, bamboo handle, and the full basket of long beans are visible. The camera makes only a tiny slow downward tilt of a few centimeters from the wrist to the basket; the face, head, shoulders, chest and full body never enter the frame. The bamboo handle bends slightly under the weight. No portrait, no wide opening, no sudden zoom, no extra hands, no duplicate basket, no morphing, no text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 2.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 从第一帧起就是略俯手部紧特写，构图严格裁在肩膀以下。画面只出现<主体 1>的手腕、黑表、白色衣摆、竹匾提手和装满长豆的竹匾。镜头只从手腕向竹匾做几厘米幅度的极小幅度慢速下摇；脸、头、肩膀、胸口和完整人物始终不入画。竹柄因重量微微弯曲。禁止肖像、大全景开场、突然推近、额外手、重复竹匾、变形、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 20 · 01:30.5–01:35.5 · 强子把满篮抱到匾边

- 场景引用：field
- 出镜人物：childLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_20_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the eight-year-old Chinese rural boy whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same round face, wide-brim straw hat, blue short-sleeve frog-button shirt with cream side and back panels, brown cuffed trousers, and dark-blue cloth shoes.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] An eye-level medium-wide shot holds static. <Subject 1> carries a basket piled high with long green beans and sets that full basket on the soil beside a bare round bamboo tray. The seed basin at screen left is untouched. Gaze on the basket, lips closed, breath a little short. Mild three-quarter. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是八岁中国农村男孩强子，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持圆脸、宽檐草帽、蓝色短袖盘扣衫及米白侧后片、棕色卷脚长裤和深蓝布鞋。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视中全景固定。<主体 1>抱着装满长豆角的篮子，把这只满篮放在空圆竹匾旁边的土上。画面左侧种盆没人动。目光在篮子上，闭唇，呼吸稍短。轻微三分之二。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 21 · 01:35.5–01:39.5 · 第二篮倒上匾

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_21_h3_v02.mp4`
- 实际参考顺序：图片1为小王合成三视图，图片2为已确认菜地基准图。

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the single adult Chinese man Xiao Wang from the combined front, side and back character sheet in <Picture 1>. Preserve his face, layered black hair, ivory short-sleeve open shirt over a white T-shirt, loose light-blue jeans, pendant, left wrist black watch and right wrist bracelet.
<Subject 2> is the confirmed west-end bean field from <Picture 2>. Preserve the parallel bamboo bean rows, dark bare soil, tree line, low ridge and natural afternoon light.

summary:
[reference generation] one continuous 4-second photoreal live-action shot of <Subject 1> pouring long green beans out of a deep wicker basket into a separate shallow round bamboo tray on the soil in <Subject 2>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain the identity and outfit of the one man shown in three views within <Picture 1>.
<Subject 2> (appears in [Shot 1]): fully_preserved - retain the confirmed field geometry, materials and light of <Picture 2>.

detailed_description:
Photoreal live-action at natural speed, restrained late-summer rural China, soft afternoon light and muted greens. Wicker, soil and bean leaves have realistic texture.
[Shot 1] A slightly high medium shot frames the bent man's upper body, both hands and two distinct containers. A broad shallow round bamboo tray rests flat on the bare soil in the lower center, with a small layer of long beans already on it. He stays in place beside it, holding a separate deep wicker basket full of long green beans just above the tray. During the first second he grips the basket rim with one hand and supports its bottom with the other. He then rotates the basket opening downward over the tray, visibly pouring the long beans out under gravity in one continuous cascade. The basket empties as the mound on the tray grows. By the last second he holds the emptied basket tipped above the settled beans. The tray stays on the ground throughout. The camera tilts down with very small amplitude at slow speed from his hands to the falling beans, keeping both containers visible. A small pale enamel seed basin remains separate in the left background and receives nothing. His gaze stays on the pour, brows relaxed, lips closed, breath even; at most one natural blink. Stable hands and containers, one person, no walking, no cuts, no text or logos.

overall_soundscape:
silence. No dialogue, singing or background audio. The confirmed song master is added in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>正面、侧面、背面合成三视图中的唯一成年中国男性小王。保持他的脸、层次黑发、乳白短袖衬衫敞开罩白T恤、浅蓝宽松牛仔裤、吊坠、左腕黑表和右腕手链。
<主体 2> 是<图片 2>确认的菜地西头。保持平行竹竿豆行、深色裸土、树线、低山脊与自然下午光。

摘要:
一条连续4秒真人写实镜头，<主体 1>在<主体 2>中，把深竹篮里的长豆倒进地上独立的浅圆竹匾。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>合成三视图中同一个人的身份与服装。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的菜地几何、材质与光线。

详细描述:
自然速度的真人写实影像，夏末普通农村，柔和下午光、低饱和绿色，竹编、土壤和豆叶材质真实。
[镜头 1] 略俯中景包含弯身人物的上半身、双手和两个不同容器。宽浅圆竹匾平放在画面下方中央的裸土上，已有薄薄一层长豆。小王原地站在匾旁，把另一只装满长豆的深竹篮拿在匾上方。第一秒一手抓篮沿，另一手托篮底；随后将篮口向下转到匾上方，长豆在重力作用下连续可见地落进匾里。篮中豆子减少，匾中豆堆增大。最后一秒持住已倒空、仍倾斜的篮子，豆子在匾里落定。竹匾全程不离地。摄影机从双手向落下的豆子做极小幅度慢速下摇，始终保留两个容器。画左后景另有一只浅色搪瓷种盆，不接收豆子。目光始终看着倾倒处，眉放松、闭唇、呼吸平稳，最多一次自然眨眼。双手和容器稳定，只有一人，不走路、不切镜、无文字商标。

整体声音环境:
静音。无对白、演唱或背景音；歌曲母带仅在最终剪辑时加入。

非叙事音乐:
N/A
```

## 22 · 01:39.5–01:44.5 · 嫂子沿路回屋

- 场景引用：road、field
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_22_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from the single three-view character sheet in <Picture 1>. Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes and sturdy working build.
<Subject 2> is the confirmed west-end bean field anchored by <Picture 2> from assets/scenes/field_west_end_v11_candidate.png. Preserve the same parallel bean rows, green bamboo stakes, dark bare-soil furrow, tree line, low ridge and late-afternoon light. Keep the small pale enamel seed basin fixed at the west end of the sparse row.
<Subject 3> is the confirmed single westbound return lane anchored by <Picture 3> from assets/scenes/road_west_gate_v02.png. Preserve one pale twin-track packed-earth road with a grassy center and the westbound direction toward home. It is the same road that leads back from the field; do not create a crossroads or a second path.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot immediately after the second basket has been poured into the round tray: at the same field west end, <Subject 1> checks the fixed seed basin once, then walks west away along the single return road while the full tray and basin remain behind.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three-view reference.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the same field geometry, seed basin position, materials and afternoon light from <Picture 2>; the tray and basin are shot-specific props anchored to the previous shot.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the same single road, twin tracks, grassy center and westbound return direction from <Picture 3>; no crossroads or side road.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil and used bamboo. No golden nostalgia grade and no tourism scenery.
[Shot 1] A locked medium-wide three-quarter view holds at the west end of the bean field. A shallow circular bamboo tray filled with slender long green bean pods rests on the same low support at lower right. At left rear a separate cream enamel basin contains intact short thick green bean PODS, not shelled seeds. Both containers remain fixed throughout. The single twin-track return road begins beside the field and recedes diagonally toward upper left into the distance. The woman starts at its near end beside the field, empty-handed. In the first second she lowers her eyes once toward the basin, lips closed, brows relaxed, breathing even. She then turns toward the distant vanishing point and walks naturally away from camera along the wheel track. Her back stays visible and her figure gets smaller. She never crosses the road sideways or walks toward the lens. The camera does not follow: by the end she is farther away on the same track; this is only the start of her return home. The tray and basin remain in the foreground, untouched. No other person, no new house, no cuts, no accelerated motion. Gentle leaf motion, stable hands and props.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>中的成年中国农村女性嫂子三视图人物参考。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是<图片 2>（assets/scenes/field_west_end_v11_candidate.png）确认的菜地西头环境。保持同一块菜地、平行豆架、绿色竹竿、深色裸土沟、树线、低山脊和下午光线；浅色搪瓷种盆固定在左侧稀疏留种行西头。
<主体 3> 是<图片 3>（assets/scenes/road_west_gate_v02.png）确认的向西回家土路。保持唯一一条浅色碎石与压实土双车辙、中央草带和向西回家的方向；不能生成十字路口或第二条路。

摘要:
一条连续5秒、真人写实、16:9的镜头，紧接第二篮倒入竹匾。仍在同一菜地西头，嫂子看一眼固定的种盆，然后沿唯一土路向西回家并在道路纵深里走远；满匾和种盆留在原地。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持嫂子三视图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持同一菜地几何、种盆位置、材质和下午光；圆竹匾与种盆作为承接镜21的道具固定在原地。
<主体 3>（出现在[镜头 1]）：完全保留——保持同一条唯一土路、双车辙、中央草带和向西回家的方向；没有十字路口或支路。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，竹竿和土壤保持使用痕迹，不用金黄怀旧调色。
[镜头 1] 地头平视三分之二中全景固定。右下方浅圆竹匾延续上一镜的低支撑，装着细长绿豆荚。左后方独立的奶油色搪瓷种盆装完整短粗绿豆荚，不是剥出的散籽；两件容器全程固定。同一条双车辙回家土路从地头近处斜向画面左上远处延伸。嫂子空手站在道路近端，第一秒低头看种盆一次，闭唇、眉放松、呼吸平稳；随后转向远处消失点，背向摄影机沿车辙自然走远，身影逐渐变小。不得横穿路面、横向出画或朝镜头走。镜头不跟随，结尾她仍在远一点的同一条路上，只表现回家旅程的开始；匾和盆留在前景不被触碰。没有其他人物、新房屋、切镜或加速，豆叶轻微自然活动，手和道具稳定。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；歌曲母带只在最终剪辑时加入。

非叙事音乐:
N/A
```

## 23 · 01:44.5–01:52.5 · 饱豆被拨到边上

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_23_h3_v04.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the single adult Chinese man Xiao Wang from the combined front, side and back character sheet in <Picture 1>. Keep the same clean-shaven youthful face, layered medium-short black hair, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist and thin bracelet on the right wrist.
<Subject 2> is the confirmed west-end bean field anchored by <Picture 2> from assets/scenes/field_west_end_v11_candidate.png. Preserve the same two parallel bean rows, green bamboo stakes, dark bare-soil furrow, tree line, low ridge and late-afternoon light. The shallow round bamboo tray full of long beans remains on the same bare soil, and the pale enamel seed basin remains fixed in the left background.

summary:
[reference generation] One continuous 8-second live-action shot of one man sorting a small selection of long green bean pods into a separate pile on the right side of a single bamboo tray.

retention_analysis:
<Subject 1> (appears in [Shot 1] A slightly high medium-close view shows only one man crouching behind one shallow round bamboo tray at the west end of the bean rows. His white shirt, left wrist watch and right wrist bracelet match Picture 1. The tray stays on its low support. It begins with a loose large mound of slender long green bean pods in its center-left and clear empty woven bamboo at its right edge. With his right fingertips he selects three or four plump pods from the main mound, lifts them just above the surface and places them on the EMPTY RIGHT SIDE. He releases them, then repeats with a few more pods. His left hand rests on the rim. Most beans remain undisturbed in the center-left mound. A visible band of bare bamboo separates the small selected pile on the right from the main pile. The final second holds both distinct piles and his resting hands. He does not push the entire mound, lift the tray, shell beans or place beans in the basin. A cream enamel seed basin remains motionless on bare soil behind the tray at left, holding intact short green pods. His gaze stays on his right hand, eyebrows gently gathered, lips closed, breathing calm. Only his upper face is at the top of the composition. The camera pushes in with tiny amplitude at very slow speed while keeping the whole sorting area visible. Frame edges contain only soil and plants. One body and two hands in the whole scene. Real-time movement, stable fingers and containers; no cut, no text.

overall_soundscape:
silence. No dialogue, singing or background audio is generated; the confirmed song master is added in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>正面、侧面、背面合成三视图中的唯一成年中国男性小王。保持清秀无胡须的脸、层次黑发、乳白短袖翻领衬衫敞开罩白T恤、浅蓝宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是<图片 2>（assets/scenes/field_west_end_v11_candidate.png）确认的菜地西头。保持同一块菜地、两行平行豆架、绿色竹竿、深色裸土沟、树线、低山脊和下午光线。上一镜刚倒满长豆的浅圆竹匾留在同一块裸土上，浅色搪瓷种盆固定在左后景。

摘要:
一条连续8秒真人镜头，唯一的小王把少量饱满长豆从主堆挑到同一只匾右侧，形成有间隔的独立小堆。

保留分析:
<主体 1>（出现在[镜头 1] 略俯中近景，只有一个小王蹲在豆行西头的浅圆竹匾后方；白衬衫、左腕表、右腕细手链与图片1一致。匾留在低支撑上。初始大堆细长绿豆荚在匾中央偏左，匾右缘留出空竹编面。小王右手指挑出三四根饱豆，略抬离匾面，放到右侧空处并松手，再挑少量重复一次。左手扶匾沿。大部分豆留在中央偏左，右侧小堆与主堆之间露出一条空竹编面。最后一秒双手停住，两堆同时可读。不整堆推走、不抬匾、不剥豆、不往种盆放豆。左后方裸土上的奶油色搪瓷盆保持固定，内装完整短绿豆荚。目光跟住右手，眉轻收、闭唇、呼吸平稳；脸上部在画幅上缘。镜头极小幅度极慢推近，始终保留分拣区域。画缘只有土和植物，全场一个身体两只手，实时自然动作、稳定手指与容器，不切镜、无文字。

整体声音环境:
静音。不生成对白、演唱或背景音；歌曲母带仅在最终剪辑时加入。

非叙事音乐:
N/A
```

## 57 · 01:52.5–01:54.5 · 拨开的那一侧

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_57_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 2-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] A slightly high close-up holds static. <Subject 1> keeps both hands on the round bamboo tray as the fullest long green beans sit in a separate pile on one side. Gaze on that pile, lips closed. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 2 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 略俯近景固定。最满的长豆角已经在圆竹匾一侧，双手还在匾上。目光在那一堆，闭唇。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 53 · 01:54.5–01:59.5 · 手停在分开的堆上

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_53_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] An eye-level close-up holds static. A separate pile of the fullest long green beans already sits on one side of the round bamboo tray. <Subject 1> lifts his left hand off the beans. The separate pile stays on that side of the tray. Gaze on that pile, brows level, lips closed. The enamel basin of short green pods sits on the soil in the left background. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视近景固定。最满的长豆角已经在圆竹匾的一侧形成单独一堆。<主体 1>左手离开豆子，那一堆留在匾侧。目光在那一堆上，眉平稳，闭唇。短而粗的青豆角装在搪瓷盆里，盆在左侧后景的土上。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 24 · 01:59.5–02:02 · 两套规矩同时在

- 场景引用：field
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_24_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 2.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] An eye-level medium shot pulls out with small amplitude at slow speed until both the separated pile and the untouched seed basin are readable. <Subject 1> is behind the tray, gaze held on the pile, lips closed, shoulders slightly down. He does not touch the beans again. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 2.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视中景小幅度慢速拉远，直到分开的那一堆和没动过的种盆都能看清。<主体 1>在匾后，目光停在那一堆上，闭唇，肩略微落下。他不再碰豆子。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 25 · 02:02–02:06 · 强子把堆拨回

- 场景引用：field
- 出镜人物：childLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_25_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the eight-year-old Chinese rural boy whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same round face, wide-brim straw hat, blue short-sleeve frog-button shirt with cream side and back panels, brown cuffed trousers, and dark-blue cloth shoes.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 4-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] A slightly high medium shot holds static. <Subject 1> squats and slides the separated full beans back into the cooking pile with one hand. Gaze on the beans, brows neutral, lips closed. The basin stays at screen left, untouched in this shot. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是八岁中国农村男孩强子，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持圆脸、宽檐草帽、蓝色短袖盘扣衫及米白侧后片、棕色卷脚长裤和深蓝布鞋。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 4 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 略俯中景固定。<主体 1>蹲着，用一只手把分开的饱豆拨回下锅的那堆。目光在豆子上，眉平静，闭唇。种盆在画面左侧，这一镜不碰。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 26 · 02:06–02:08 · 指向种盆

- 场景引用：field
- 出镜人物：childLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_26_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the eight-year-old Chinese rural boy whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same round face, wide-brim straw hat, blue short-sleeve frog-button shirt with cream side and back panels, brown cuffed trousers, and dark-blue cloth shoes.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 2-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] An eye-level medium shot holds static. <Subject 1> remains squatting and points at the seed basin. The tray is one pile of full beans again. Gaze on the basin, lips closed. He does not stand. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是八岁中国农村男孩强子，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持圆脸、宽檐草帽、蓝色短袖盘扣衫及米白侧后片、棕色卷脚长裤和深蓝布鞋。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 2 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视中景固定。<主体 1>仍蹲着，指向种盆。圆匾又回到一堆饱豆。目光在盆上，闭唇。他不站起来。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 27 · 02:08–02:10 · 盆里仍是短豆

- 场景引用：field
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_27_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 1>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 2-second photoreal live-action 16:9 MV shot of <Subject 1> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] A close shot pushes in with small amplitude at slow speed. The old enamel basin rests on gray-yellow packed soil at the west end of the bean row. It is filled with short, thick, stubby green beans, each only about a thumb long. No hand and no person. Sparse low bean vines stand on the soil beside the basin.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 1>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 2 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 近景小幅度慢速推近。旧搪瓷盆放在豆行西头的灰黄土上。里面装满短粗、只有拇指长的绿豆。没有手，也没有人。稀疏的矮豆藤立在盆边的土上。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 28 · 02:10–02:16 · 嫂子沿原路回来

- 场景引用：road、field
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_28_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 4>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.
<Subject 3> is the environment anchored by <Picture 5> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 5>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 5>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] An eye-level medium-wide shot follows <Subject 1> with small amplitude at slow speed as she walks from screen left toward the plot. Mild three-quarter, never a hard profile. At the end the western tips of the two trellises enter at screen right. Gaze ahead, lips closed, pace unhurried. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 4>（assets/scenes/road_west_gate_v02.png）锁定的环境。已确认的“东门外向东土路”场景基准图，作为<图片 4>载入。保持浅色碎石与压实土组成的双车辙路、中央和两侧草带、深色树线、左侧朴素建筑边缘以及右侧开阔庄稼。道路继续向东通往菜地；不要变成柏油路或城市街道。
<主体 3> 是由<图片 5>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 5>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 5>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视中全景小幅度慢速跟随<主体 1>从画面左侧走向菜地。轻微三分之二，不是正侧面。结束时两行架子的西头从画面右侧进入。目光向前，闭唇，步子不急。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 58 · 02:16–02:19 · 架子从画右进来

- 场景引用：road、field
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_58_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese woman in the three-view sheet <Picture 1>. Preserve her mature face, blue-gray headscarf, low ponytail, pale-blue floral shirt, dark-blue cropped trousers and brown flat shoes.
<Subject 2> is the lane in <Picture 2> and its eastern endpoint beside the bean rows in <Picture 3>. Preserve the gravel wheel tracks, grass verge, parallel green trellis stakes and dark soil.

summary:
[reference generation] one continuous 3-second live-action medium-wide shot of <Subject 1> reaching the bean-field end of <Subject 2>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same identity, adult proportions and clothing.
<Subject 2> (appears in [Shot 1]): fully_preserved - same connected lane and bean field, surface materials, stakes and afternoon light.

detailed_description:
Photoreal live-action at normal walking speed, steady natural afternoon light and muted greens.
[Shot 1] Eye-level medium-wide camera trucks right with small amplitude at slow speed as the woman walks two unhurried steps along the existing wheel track to the field entrance. She stays on the left of the composition; the ends of two parallel green-staked bean rows gradually become visible on screen right. The lane runs alongside the rows rather than through them. Her hands hang empty beside her trousers, her gaze holds along the path, brows level and lips closed. Mild three-quarter angle keeps her face readable. The woman is the sole person present. Her path remains on flat bare soil beside the trellises throughout. Solid foot contact, coherent limbs and steady camera travel. One uninterrupted shot.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>三视图中的成年嫂子。保持成熟面孔、蓝灰头巾、低马尾、浅蓝碎花衬衫、深蓝七分裤和棕平底鞋。
<主体 2> 是<图片 2>的土路与<图片 3>的土路东头与菜地西头的连接处，保留碎石车辙、路边草、平行绿色豆架和深色裸土。

摘要:
一条连续3秒写实中全景，嫂子沿路走到菜地西头。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——同一身份、成年比例、衣着。
<主体 2>（出现在[镜头 1]）：完全保留——相连的路和菜地、地面、架子与午后光线。

详细描述:
真人写实、正常步速、稳定自然午后光与低饱和绿色。
[镜头 1] 平视中全景小幅慢速右移，嫂子沿现有车辙缓步走两步到菜地入口。她保持在画左，两行绿色豆架的西端逐渐从画右露出。路在豆架旁，不穿过架子。她双手空着垂在裤边，目光保持看前路，眉平、闭唇，轻微三分之二角度可读脸部。仅嫂子一人，始终走在豆架旁的平坦裸土上。落脚、肢体、运镜连续，一镜到底。

整体声音环境:
静音。

非叙事音乐:
N/A
```

## 29 · 02:19–02:25 · 满豆倒回下锅

- 场景引用：field
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_29_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] An eye-level medium shot holds static. <Subject 1> looks once at the basin, then sweeps the edge pile back into the single cooking pile. She does not lift the basin. Gaze returns to the tray. Brows level, lips closed, no smile. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 4>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 4>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视中景固定。<主体 1>看种盆一次，然后把边上的豆子扫回唯一的下锅堆。她不端起种盆。目光回到匾上。眉平稳，闭唇，不笑。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 30 · 02:25–02:30 · 夸的是摘

- 场景引用：field
- 出镜人物：femaleLead、childLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_30_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the eight-year-old Chinese rural boy whose appearance comes from <Picture 4> (front), <Picture 5> (side), and <Picture 6> (back). Keep the same round face, wide-brim straw hat, blue short-sleeve frog-button shirt with cream side and back panels, brown cuffed trousers, and dark-blue cloth shoes.
<Subject 3> is the environment anchored by <Picture 7> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 7>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 7>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, a restrained late-summer Chinese-village MV with natural afternoon light, muted greens, gray-yellow packed soil, plain brick and simple low roof. Materials look used. No golden nostalgia grade and no tourism scenery.
[Shot 1] An eye-level medium-wide shot trucks left with small amplitude at slow speed from two empty baskets to the seed basin still on the soil. <Subject 1> gives one small nod, gaze on the baskets. <Subject 2> squats at the tray. Both lips closed, no laugh. Nobody lifts the basin. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是八岁中国农村男孩强子，外观来自<图片 4>（正面）、<图片 5>（侧面）、<图片 6>（背面）。保持圆脸、宽檐草帽、蓝色短袖盘扣衫及米白侧后片、棕色卷脚长裤和深蓝布鞋。
<主体 3> 是由<图片 7>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 7>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 7>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。自然下午光，低饱和绿色和灰黄土，不用金黄怀旧调色。
[镜头 1] 平视中全景小幅度慢速左移，从两只空篮移到仍在土上的种盆。<主体 1>很小地点一次头，目光在篮子上。<主体 2>蹲在匾边。两人都闭唇，不笑。谁也不端起种盆。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 31 · 02:30–02:36 · 饱豆挑回家

- 场景引用：road
- 出镜人物：femaleLead、childLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_31_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the eight-year-old Chinese rural boy whose appearance comes from <Picture 4> (front), <Picture 5> (side), and <Picture 6> (back). Keep the same round face, wide-brim straw hat, blue short-sleeve frog-button shirt with cream side and back panels, brown cuffed trousers, and dark-blue cloth shoes.
<Subject 3> is the environment anchored by <Picture 7> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 7>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 7>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] Later the same day, lower sun. An eye-level back view follows with small amplitude at slow speed. <Subject 1> carries a basin of long full beans. <Subject 2> walks just behind with empty hands. They go west on the same road. Neither turns. The seed basin is not with them.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是八岁中国农村男孩强子，外观来自<图片 4>（正面）、<图片 5>（侧面）、<图片 6>（背面）。保持圆脸、宽檐草帽、蓝色短袖盘扣衫及米白侧后片、棕色卷脚长裤和深蓝布鞋。
<主体 3> 是由<图片 7>（assets/scenes/road_west_gate_v02.png）锁定的环境。已确认的“东门外向东土路”场景基准图，作为<图片 7>载入。保持浅色碎石与压实土组成的双车辙路、中央和两侧草带、深色树线、左侧朴素建筑边缘以及右侧开阔庄稼。道路继续向东通往菜地；不要变成柏油路或城市街道。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 7>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 同一天更晚，太阳更低。平视背影小幅度慢速跟随。<主体 1>端着一盆长饱豆。<主体 2>空手走在后面。两人沿同一条路向西。都不转身。种盆不在他们手里。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 54 · 02:36–02:41 · 路上的盆和鞋

- 场景引用：road
- 出镜人物：femaleLead、childLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_54_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult woman in <Picture 1>, retaining her pale-blue floral shirt, dark-blue calf-length trousers and brown flat cloth shoes.
<Subject 2> is the small boy in <Picture 2>, retaining his blue shirt with cream back, brown cuffed trousers and dark-blue cloth shoes.
<Subject 3> is the gravel lane in <Picture 3>, retaining twin wheel tracks, grassy center, tree-lined left edge and crops on the right.

summary:
[reference generation] one continuous 5-second live-action low medium shot of <Subject 1> and <Subject 2> walking home on <Subject 3>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - same adult identity and clothing.
<Subject 2> (appears in [Shot 1]): fully_preserved - same child identity, size and clothing.
<Subject 3> (appears in [Shot 1]): fully_preserved - same lane geometry, materials and late afternoon light.

detailed_description:
Real-time photoreal live-action, soft lower afternoon sunlight and restrained rural colors.
[Shot 1] Low medium rear three-quarter composition crops both people above the waist, keeping their feet and the waist-high basin visible. The camera follows with small amplitude at slow speed. The woman walks ahead along one gravel wheel track and holds a brown metal basin of long green beans at her waist. The boy walks one small step behind on her right, with empty hands. Her brown flat shoes and his dark-blue cloth shoes take unhurried alternating steps parallel to the wheel tracks. Both continue along the lane toward home in the same direction, with the basin stable and level. Their heads stay outside the upper frame. The grassy center strip remains between the wheel tracks and bends slightly in the breeze. Continuous natural foot contact, consistent body proportions, one uninterrupted shot.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>中的成年嫂子，保持浅蓝碎花衬衫、深蓝七分裤、棕色平底布鞋。
<主体 2> 是<图片 2>中的强子，保持蓝衣米白后片、棕色卷裤脚、深蓝布鞋。
<主体 3> 是<图片 3>中的双车辙碎石土路，中央草带、左树线、右庄稼。

摘要:
一条连续5秒低机位中景，嫂子和强子沿原路回家。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——成年身份和衣着一致。
<主体 2>（出现在[镜头 1]）：完全保留——儿童身份、身高和衣着一致。
<主体 3>（出现在[镜头 1]）：完全保留——同一路形、材质和午后光线。

详细描述:
真人写实实时速度，柔和低位下午光，克制自然色彩。
[镜头 1] 低机位后侧中景，两人的头保持在画框上方之外，脚步和腰间满盆可见。镜头小幅慢速跟随。嫂子在车辙上走在前面，腰间端棕色金属盆，盆里是长绿豆。强子空手落后半步在她右边。棕平底鞋和深蓝布鞋沿车辙方向缓慢交替落地，两人始终沿路朝家走，盆水平稳定。中央草带被微风轻吹。脚部落地自然，身体比例稳定，一镜到底。

整体声音环境:
静音。

非叙事音乐:
N/A
```

## 32 · 02:41–02:43.5 · 他们走过的路

- 场景引用：road
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_32_h3_v05.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the empty gravel lane and roadside grasses in <Picture 1>. Preserve the twin wheel tracks, grass center strip, tree line and crops.

summary:
[reference generation] one continuous 2.5-second live-action landscape study of <Subject 1>, a vacant rural lane with gently moving grass.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain the reference road materials, geometry, vegetation and late-afternoon lighting.

detailed_description:
Photoreal live-action at natural real-time speed. Muted green foliage and pale gravel under steady late-afternoon light.
[Shot 1] A low medium composition shows the gravel wheel tracks and adjoining grassy verge. The camera holds a static shot. Foreground slender grass blades gently lean a few centimeters under a light breeze, pause, and return at slightly different speeds; the farther crop leaves sway more subtly. The gravel and compacted soil remain solid and still. Both wheel tracks continue through the center depth of the frame in the same curved direction as the reference. The entire frame contains only road surface and vegetation. The lane remains vacant throughout. One uninterrupted shot, stable illumination and stable geometry.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>中的空碎石土路和路边草。保留双车辙、中央草带、树线和庄稼。

摘要:
一条连续2.5秒的写实空景，空路旁的草随微风轻动。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持道路材质、几何、植被与午后光线。

详细描述:
真人写实、正常实时速度。低饱和绿色与浅色碎石，午后光线稳定。
[镜头 1] 低机位中景固定，画面只包含车辙路面和相邻草带。前景细草随微风倾斜几厘米，短暂停住再以略不同的速度回弹，远处作物叶片轻微摆动。碎石和压实土保持稳定。两条车辙沿基准图的弯曲方向向画面深处延伸。全程空路，一条连续镜头，光照和空间稳定。

整体声音环境:
静音。

非叙事音乐:
N/A
```

## 33 · 02:43.5–02:47 · 油倒进热锅

- 场景引用：house、kitchen
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_33_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese woman in the three-view sheet <Picture 1>. Retain her mature face, blue-gray headscarf, low ponytail, pale-blue floral shirt and dark blue cropped trousers.
<Subject 2> is the compact kitchen in <Picture 2>, with cream walls, red lower stripe, pale counter, gas cooktop, metal cookware, wooden shelf and wood-framed window.

summary:
[reference generation] one continuous 3.5-second live-action medium shot of <Subject 1> pouring cooking oil from a small glass bottle into a stationary black wok in <Subject 2>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain the reference identity, clothing and body proportions.
<Subject 2> (appears in [Shot 1]): fully_preserved - retain the kitchen layout, cooktop and window lighting.

detailed_description:
Photoreal live-action at normal speed. Steady soft window light, restrained natural colors and ordinary household materials.
[Shot 1] Eye-level medium shot holds static. The woman stands on screen right, in a mild three-quarter view. The black wok rests solidly on the cooktop at screen left, its bowl visibly bare. Her right hand holds a small clear glass oil bottle above the wok. Her left hand rests flat on her own left thigh for the entire shot. She slowly tilts the bottle with her right wrist, pours one thin pale-gold stream into the center of the wok, and rights the bottle to stop. Oil spreads into a shallow glossy pool on the black metal. The wok remains resting on the burner throughout. Both arms are visible from shoulder to wrist and stay anatomically separate. Her gaze holds on the pouring point, eyebrows level, lips closed, breathing gentle, with at most one natural blink. Stable fingers and face. One uninterrupted shot.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>三视图中的成年嫂子。保留成熟面孔、蓝灰头巾、低马尾、浅蓝碎花衬衫和深蓝七分裤。
<主体 2> 是<图片 2>中的普通厨房，保持奶油墙、红墙裙、浅色台面、燃气灶、金属厨具、木层架与木框窗。

摘要:
一条连续3.5秒写实中景，嫂子用小玻璃油瓶向固定在灶上的黑锅倒油。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——身份、衣着和身体比例一致。
<主体 2>（出现在[镜头 1]）：完全保留——保持厨房布局、灶台与窗光。

详细描述:
真人写实正常速度，柔和稳定窗光，自然色彩和普通家用材质。
[镜头 1] 平视中景固定。嫂子位于画右，轻微三分之二侧身。画左黑锅稳放在灶上，锅内露出空黑金属面。她右手握小透明油瓶悬于锅上，左手全程贴在自己左大腿侧。右腕缓慢倾斜油瓶，把一注浅金色油倒入锅心，再回正油瓶停止。油在锅底扩成薄薄的光亮油面，锅始终落在炉架上。两条手臂从肩到腕清楚可见，解剖结构稳定。目光一直看倒油位置，眉平、闭唇、轻呼吸，最多一次自然眨眼。一镜到底。

整体声音环境:
静音。

非叙事音乐:
N/A
```

## 34 · 02:47–02:49 · 油面

- 场景引用：kitchen
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_34_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the ordinary kitchen anchored by <Picture 1>: cream walls, red lower stripe, pale counter and metal gas cooktop. The cooking vessel is a small black carbon-steel wok with a long cylindrical brown wooden handle pointing toward screen right.

summary:
[reference generation] one continuous 2-second live-action close insert of a thin oil coating warming inside <Subject 1>'s stationary wok.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain the kitchen counter and natural window illumination, framing only the cooking area.

detailed_description:
Photoreal live-action, normal speed, soft natural window light and realistic black seasoned steel.
[Shot 1] A slightly elevated close view looks into the black wok sitting level on the gas burner. Its brown wooden stick handle extends to screen right. The camera pushes in with very small amplitude at slow speed. A tablespoon-sized puddle of pale clear oil thinly coats the dark base, letting the iron texture show through. Tiny slow surface ripples catch a small rectangular window reflection and settle; a steady low blue flame burns beneath the base. The pan and stove stay completely still. Only the cookware and its oil surface occupy the frame throughout this uninterrupted insert. The interior stays bare except for the thin oil film.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>的普通厨房：奶油墙、红墙裙、浅台面和金属燃气灶。使用带棕色圆柱长木柄的小黑铁锅，锅柄向画右。

摘要:
一条连续2秒近景，固定黑锅内一层薄油受热。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持厨房台面与自然窗光，只拍灶台区域。

详细描述:
真人写实、正常速度、柔和自然窗光，黑色养锅铁面纹理真实。
[镜头 1] 稍俯近景看向平放在灶上的黑锅，棕色长木柄朝右。镜头极小幅慢推。锅底约一汤匙浅色清油薄薄铺开，能透过油看见铁面。细小缓慢波纹反射一块矩形窗光并逐渐平复，锅下稳定小蓝火。锅和灶固定不动，一镜到底，只见锅和油面，锅内除薄油膜外为空。

整体声音环境:
静音。

非叙事音乐:
N/A
```

## 35 · 02:49–02:56 · 饱豆下锅

- 场景引用：kitchen
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_35_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese woman in the three-view sheet <Picture 1>. Retain her mature face, blue-gray headscarf, low ponytail, pale-blue floral shirt and dark-blue cropped trousers.
<Subject 2> is the ordinary kitchen in <Picture 2>. Preserve the cream wall, red lower stripe, pale L-shaped counter, gas stove at left and wood-framed window. A black iron wok with a long brown wooden handle pointing right rests on the burner.

summary:
[reference generation] one continuous 7-second live-action medium close shot of <Subject 1> adding long green beans to the lightly oiled wok in <Subject 2>, then turning them once.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve identity, reference outfit and two anatomically coherent arms.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve room geometry, cooker, window light and pan position.

detailed_description:
Photoreal live-action, natural real-time motion under steady soft afternoon window light. Everyday cooking in a modest household.
[Shot 1] Slightly high medium close composition holds static. The woman stands at screen right; her face occupies the upper right, and the wok at lower left is fully readable. The wok begins with only a thin oil coating. Her left hand supports one brown metal bowl of long intact green beans above the rim. Her right hand holds one metal spatula. In the first three seconds she gently tips the bowl, allowing its beans to slide continuously into the wok under gravity. The bowl visibly empties while the pile in the wok grows. She keeps the emptied bowl still beside the pan in her left hand, while her right hand draws the spatula once under the beans and folds them across the oil. By the final second both hands settle, all beans resting in the pan. The wok stays on the burner, its wooden handle unchanged. Her gaze stays on the pan, brows level, mouth softly closed; one gentle breath and at most one natural blink. Continuous hands and utensils with distinct grips, stable anatomy and consistent bean quantity. One uninterrupted shot.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>三视图中的成年嫂子，保持成熟脸、蓝灰头巾、低马尾、浅蓝碎花衬衫、深蓝七分裤。
<主体 2> 是<图片 2>的普通厨房，奶油墙、红墙裙、浅色L台面、左侧燃气灶和木框窗保持一致。黑铁锅落在灶上，棕色长木柄向右。

摘要:
连续7秒写实中近景，嫂子把长豆倒入薄油锅，再铲翻一次。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——身份、服装及正常双臂。
<主体 2>（出现在[镜头 1]）：完全保留——房间结构、灶台、窗光与锅位置。

详细描述:
真人写实、正常速度、稳定柔和下午窗光，普通家庭做饭。
[镜头 1] 略俯中近景固定。嫂子在画右，脸在右上，左下锅内清晰。开场锅里只有薄油层。左手托一只装满完整长绿豆的棕色金属碗，右手拿一把金属锅铲。前三秒缓慢倾碗，豆子顺重力连续滑入锅中，碗内减少、锅内增加。左手随后把倒空的碗持稳在锅边，右手锅铲从豆下铲起折翻一次。最后一秒双手停稳，豆子全部落锅。锅始终落灶，木柄不变。目光保持看锅，眉平、轻闭唇，一次轻呼吸，最多一次自然眨眼。手和器具的握持关系连贯，肢体和豆量稳定，一镜到底。

整体声音环境:
静音。

非叙事音乐:
N/A
```

## 36 · 02:56–02:57.5 · 锅里的长豆

- 场景引用：kitchen
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_36_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the fixed black iron wok and gas burner in the ordinary kitchen shown in <Picture 1>. Preserve the brown wooden handle pointing to screen right, the silver stove, red wall stripe and pale counter.

summary:
[reference generation] one continuous 1.5-second photoreal close insert of long green beans settling in the same wok after one turn.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain the same wok, wooden handle, burner, counter and kitchen light.

detailed_description:
Photoreal live-action at real-time speed, close food detail, stable warm daylight.
[Shot 1] A tight slightly elevated close-up holds static on only the long intact green beans inside the same black wok. The beans make one small settling movement in the oil, then become still; a little heat shimmer rises. The brown wooden handle remains visible at the right edge and the blue flame flickers below the rim. No person, hand, arm, face, bowl, spatula, seed bean, short bean, new pan, new location, text or logo. The geometry, oil sheen and bean quantity remain stable for the entire uninterrupted shot.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>普通厨房里的固定黑铁锅和燃气灶。保持棕色长木柄向右、银色灶台、红墙裙和浅色台面。

摘要:
一条连续1.5秒写实特写，翻动后的长豆在同一口锅里落稳。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持同一口锅、木柄、灶台、台面与厨房光线。

详细描述:
真人写实、正常速度、稳定暖色自然光。
[镜头 1] 略俯紧特写固定，只看同一口黑锅里的完整长豆。长豆在油里轻轻落稳一次，随后静止，锅面上有少量热气。右边保留棕色长木柄，锅沿下方可见蓝火。不要人物、手臂、脸、碗、锅铲、种豆、短豆、新锅、新地点、文字或商标。锅的几何、油光和豆量全程稳定，一镜到底。

整体声音环境:
静音。

非叙事音乐:
N/A
```

## 37 · 02:57.5–03:02 · 坐到自家入口台阶

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_37_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the same adult Chinese man from the three-view sheet <Picture 1>. Preserve his clean-shaven youthful face, layered medium-short black hair, ivory open short-sleeve collared shirt over a white crew-neck T-shirt, loose light-blue jeans, white-gray low-top sneakers, silver rectangular pendant, black watch on left wrist and thin bracelet on right wrist.
<Subject 2> is the ordinary self-built house entrance anchored by <Picture 2>. Preserve the faded beige plaster, closed blue-green double door on the left, partly open green entrance door near center, rough gray trim, shallow concrete threshold and narrow rubble strip.

summary:
[reference generation] one continuous 4.5-second photoreal live-action medium-wide shot of <Subject 1> carrying a bowl of dry-fried long beans to the same threshold and sitting down.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain identity, clothing, body proportions and one single person in every frame.
<Subject 2> (appears in [Shot 1]): fully_preserved - retain the exact entrance geometry and door positions.

detailed_description:
Photoreal live-action in real time, late-afternoon muted natural light, modest lived-in house.
[Shot 1] Eye-level medium-wide static shot. The single man enters from screen left holding one white ceramic bowl containing dry-fried long green beans with both hands at waist level. He takes two short steps to the shallow concrete threshold, turns only slightly toward the open green door, bends his knees and sits down once. The bowl stays level in both hands and remains clearly visible on his lap. After sitting, he remains seated through the final frame; he does not stand, walk away, pass the bowl, or change clothes. The closed blue-green double door remains on screen left and the partly open green door stays behind him. His gaze settles on the bowl, brows level, lips closed, with at most one slow natural blink. Stable face, hands, bowl and feet; no duplicate person, no child, no extra bowl, no road pasted into the doorway, no text or logo.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>三视图中的同一个成年小王。保持无胡须清秀脸、蓬松中短黑发、敞开的乳白短袖翻领衬衫、白T恤、浅蓝宽松牛仔裤、白灰低帮鞋、银色矩形吊坠、左腕黑表、右腕细手链。
<主体 2> 是<图片 2>的普通自建房入口。保持褪色米灰墙、左侧关闭蓝绿色双扇门、中央偏右半开的绿色入口门、粗灰门框、浅水泥台阶与墙脚碎石带。

摘要:
一条连续4.5秒写实中全景，小王端着干煸长豆角碗走到同一入口台阶并坐下。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——身份、衣着、比例，全程只有一个人。
<主体 2>（出现在[镜头 1]）：完全保留——入口结构和门的位置一致。

详细描述:
真人写实实时速度，低位午后自然光，普通有人住的房子。
[镜头 1] 平视中全景固定。唯一的小王从画左端着一只白瓷碗入画，碗里是干煸长豆角，双手在腰间托稳。他走两小步到浅水泥台阶，朝半开的绿色门轻微转身，屈膝坐下。碗始终水平，坐下后清楚放在膝上。最后他保持坐姿，不站起、不离开、不递碗、不换衣服。左侧蓝绿色双扇门关闭，半开的绿色门在身后。目光落在碗上，眉平、闭唇，最多一次慢眨眼。脸、手、碗和鞋稳定；不得第二个小王、儿童、第二只碗、道路塞进门洞、文字或商标。

整体声音环境:
静音。

非叙事音乐:
N/A
```

## 38 · 03:02–03:08 · 吃到这口

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_38_h3_v04.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from the single combined front/side/back character sheet in <Picture 1>. Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 2>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] A fixed eye-level medium close-up shows <Subject 1> already seated on the shallow entrance step, green door and gray jamb immediately behind his shoulders. His left hand holds the plain small cream-white ceramic bowl above his lap with a few cooked green beans inside. At the first frame, his right hand holds parallel wooden chopsticks with one tiny two-centimeter cooked bean piece, already just one centimeter in front of his lips. In the first second he brings this small piece completely into his mouth and closes his lips. The empty chopstick tips immediately withdraw. During the second second his right hand lowers the empty chopsticks all the way to just above the bowl at lap level. From that moment through the last frame, the chopsticks stay low and still beside the bowl, held in his right hand. He gently chews with closed lips, eyes lowered toward the bowl, brows quiet and mouth corners level. His left hand, bowl and seated body keep their positions throughout. One small breath is visible as chewing settles. The image retains exactly the same medium close scale and soft late-afternoon exposure. Stable facial features, coherent hands and a fixed green doorway. The action is one small mouthful followed by a calm resting hold.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面、侧面、背面合在同一张人物三视图中）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 2>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 2>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持单张人物三视图合图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[Shot 1] 从浅水泥入口台阶正前方拍固定平视中近景。<Subject 1>已经直接坐在这一级台阶上，绿色金属门和灰门框紧贴肩后，距离约一臂；臀部全程留在同一台阶上。左手在膝上端素色米白小瓷碗，里面有几段干煸豆角。右手木筷夹起一小段能一口吃完的熟豆角，完整送入唇间，闭嘴，再把空筷尖抽出放低到碗旁。闭唇缓慢咀嚼，视线落在碗上，眉平静、嘴角水平，肩膀放松，最多一次自然眨眼。正常实时吃一口。镜头固定，景别不变，手、碗、筷和门框形状稳定，傍晚自然光均匀。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/[镜头 1] 固定平视中近景，<Subject 1>已坐在浅入口台阶上，绿门与灰门框紧贴肩后。左手在膝上托素色米白小瓷碗，碗内有几根熟豆角。首帧右手平行木筷夹一小段约两厘米熟豆，已在唇前一厘米处。第一秒把这小段完全送入口并闭唇，空筷尖随即抽出。第二秒右手把空筷子一直放低到膝上碗旁。此后直到末帧，右手握着筷子一直低停在碗旁不动。闭唇轻轻咀嚼，眼睛向下看碗，眉平静、嘴角水平。左手、碗和坐姿整镜保持原位，咀嚼落稳后只有一次小呼吸。中近景大小和傍晚曝光固定，脸、手与绿门稳定。这一镜仅一次小口入口，随后平静持住。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 55 · 03:08–03:14 · 筷子放回碗沿

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_55_h3_v02_trim.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from the single combined front/side/back character sheet in <Picture 1>. Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 2>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] A fixed eye-level close shot of <Subject 1> seated directly on the shallow concrete step, the green metal door and gray jamb immediately behind his shoulders. His left hand supports the same plain cream-white ceramic bowl in his lap, with a few cooked green bean pieces still inside. His right hand holds a pair of wooden chopsticks parallel just above the bowl. At the beginning he has finished chewing, and his closed mouth is at rest. He lowers the pair together once and lays both chopsticks horizontally across the bowl rim. His right fingers release them, then the right hand rests quietly beside the bowl on his knee. The chopsticks remain supported across the rim and the left hand keeps the bowl steady. For the remainder of the six seconds he holds this position, looking down into the bowl, eyebrows level, lips gently closed with level corners and a small quiet breath. The camera holds a static shot throughout, keeping the bowl rim, hands and lower face clear, with the nearby doorway softly behind. Stable fingers, stable bowl, two coherent chopsticks, at most one natural blink.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面、侧面、背面合在同一张人物三视图中）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 2>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 2>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持单张人物三视图合图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 固定平视近景，<Subject 1>直接坐在浅水泥台阶上，绿门与灰门框紧贴肩后。左手在膝上托同一只素色米白瓷碗，内有几段熟豆角；右手平行夹着一双木筷，停在碗上方。开始时已经咀嚼完，闭嘴平静。他只把两根筷子一起放下一次，横搁在碗沿，右指松开，右手随后静放碗旁的膝上。筷子由碗沿支撑不动，左手托碗稳定。余下时间保持该姿势，视线落在碗内，眉平、嘴轻合且嘴角水平，一口轻呼吸。六秒全程固定，碗沿、双手与下半张脸清楚，近处入口作柔和后景。手指、碗与两根木筷稳定，最多一次自然眨眼。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 39 · 03:14–03:22 · 高兴不起来

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_39_h3_v05.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from the single combined front/side/back character sheet in <Picture 1>. Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 2>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] A chest-up medium close-up starts with <Subject 1>'s face and shoulders filling the picture. His hair is near the upper edge, and the cream-white bowl rim lies at the lower edge. Behind his shoulders are only the same nearby green door panel and a slim gray jamb. He is still seated on the entrance step, his lower body outside the tight crop. His left hand steadies the plain cream-white bowl of cooked green bean pieces in his lap; two wooden chopsticks lie across the rim. His right hand remains on his knee outside the frame. His eyes rest on the bowl below, with a heavy, absorbed gaze. The inner eyebrows lower slightly; both mouth corners point subtly downward. His lips remain gently pressed together, cheeks relaxed, jaw still. During the middle of the shot he releases one shallow breath and lets his shoulders sink half an inch. The same tired downturned mouth and lowered gaze remain unchanged for the rest of the shot. The camera pushes in with extremely small amplitude at slow speed, a total of two centimeters over eight seconds; the face stays essentially the same size. Real skin texture, readable eyes, one natural blink at most. Steady late-afternoon light and restrained real-time performance.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面、侧面、背面合在同一张人物三视图中）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 2>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 2>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 8 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持单张人物三视图合图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[Shot 1] 平视中近景，<Subject 1>已经坐在同一级低水泥入口台阶上，身后紧贴半开的绿门与灰门框。首帧脸和肩已经足够大，碗处于画面下沿。他左手在膝上托同一只素色米白瓷碗，右手静放右膝，碗内有几根熟豆角，木筷横搁碗沿。左手托碗、右手留在右膝、臀部始终留在台阶。摄影机八秒内只前进几厘米，小幅慢推。视线始终向下落在碗里，眉略沉、嘴唇轻合且嘴角水平。中段一次轻呼气，肩略落下，随后保持到结束。嘴保持平静，不微笑。眼皮睁开、虹膜可读，最多一次自然眨眼。门紧贴身后，傍晚自然曝光稳定。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/[镜头 1] 首帧即胸口以上的中近景，<Subject 1>的脸和双肩填满画面，发顶接近上沿，米白碗沿处于画面下缘。肩后只见近处绿门板和一窄条灰门框。他仍坐在入口台阶，紧取景之外是下半身。左手在膝上扶素色米白瓷碗，里面几段熟绿豆角，两根木筷横搁碗沿；右手留在画外的膝上。眼睛向下持住碗，目光沉静略疲惫，内眉稍压低，两侧嘴角微向下，嘴唇轻抿，脸颊松弛、下颌安静。中段一次浅呼气，肩膀下沉约一厘米半，此后疲惫的下垂嘴角和向下目光一直维持到末帧。摄影机八秒内总共只前进两厘米，极小幅慢推，脸的大小基本不变。真实皮肤、眼睛可读，最多一次自然眨眼，傍晚曝光稳定，克制实时表演。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 59 · 03:22–03:24 · 肩落下来

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_59_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man identified by the combined character sheet in <Picture 1>. Keep the same face, layered black hair, ivory short-sleeved overshirt and white T-shirt.
<Subject 2> is the entrance from <Picture 2> (assets/scenes/house_threshold_v29_candidate.png), seen close behind the seated man. The green entrance door remains open inward on the right side of the image; the doorway on image left stays dark. A narrow gray concrete jamb divides these surfaces from the wall.

summary:
[reference generation] one continuous 2-second close portrait reaction of <Subject 1> at <Subject 2>, holding his already lowered head and quiet unsmiling gaze.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
Photoreal live-action, muted natural late-afternoon light, real-time restrained performance.
[Shot 1] Static tight facial close-up. The frame includes the top of <Subject 1>'s black hair, his entire face, neck and only the upper shoulders of the ivory overshirt. His face fills half the image height. The bottom frame edge crosses his shirt collar; his chest and everything lower remain outside the picture. His chin is already lowered and his eyes already rest downward at the start. Both eyes remain readable beneath the lowered gaze. He holds this exact head position throughout. His lips remain closed with level corners, inner brows subtly knit. A single quiet breath slightly relaxes his already lowered shoulders; his head stays still. He remains seated just as before, with all props outside the close crop. Behind him, the open green door remains at image right and the dark doorway remains at image left. The camera holds a static shot with no change of scale or height. No lip movement, stable features and reference identity, constant exposure, at most one slow natural blink.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是<图片 1>合并人物三视图中的成年中国男性小王，保持同一张脸、有层次黑发、乳白短袖衬衫与白T恤。
<主体 2> 是<图片 2>（assets/scenes/house_threshold_v29_candidate.png）里的入口，紧贴坐着的小王身后。绿色入口门仍向内开在画右，画左门洞保持黑暗；窄灰水泥门框连接墙面。

摘要:
一条连续2秒的小王近景反应镜，位于已确认入口，保持已经低下的头与沉默不笑的视线。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持单张人物三视图合图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
真人写实、低饱和午后自然光，实时而克制的表演。
[镜头 1] 固定紧面部近景，包含<主体 1>黑发顶部、整张脸、脖子和乳白衬衫上肩，脸占画高一半。下边沿横过衣领，胸部及以下完全在画外。首帧下巴已经低下，眼睛已经向下凝住，双眼仍能辨认；全程保持这个头位。嘴轻闭且嘴角水平，眉间略收紧，一次安静呼吸使本就下沉的肩稍放松，头不动。他保持原来坐姿，道具全在紧构图外。身后画右是向内打开的绿门，画左是黑暗门洞。摄影机固定，大小高度不变；嘴不动、面部和身份稳定、曝光稳定，最多一次缓慢自然眨眼。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 40 · 03:24–03:28 · 地头还是那块

- 场景引用：field
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_40_h3_v04.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the bean field in <Picture 1>, retaining the parallel bamboo trellises, earth furrow, trees and distant ridge.

summary:
[reference generation] one continuous 4-second live-action empty landscape shot of <Subject 1>, with subtle leaf movement.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - the reference geography, earth and plants stay consistent.

detailed_description:
Photoreal rural China, real-time late afternoon, restrained natural colors and stable exposure.
[Shot 1] The camera holds a static shot from a slightly elevated position looking east along the two bean rows. The composition is established at the first frame and held until the last. In the left foreground, a small cream enamel basin with a dark blue rim and faded red exterior flowers rests on bare soil beside the left row. It contains short plump green seed pods, each approximately a thumb long. A single empty shallow round woven bamboo tray lies horizontally flat on the bare soil in the center-right foreground, its whole base in contact with the earth. The tray is seen as a low ellipse from this angle, its open top facing upward. The basin and tray are settled still-life objects. The left row has only scattered pods remaining, and the harvested right row is thinner. A gentle breeze flexes a few leaves slightly on their stems, then they settle. Earth, containers and bamboo stakes stay motionless in the locked composition. The field is unoccupied. Soft late-afternoon light stays even over four seconds.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
subject_definitions:
<Subject 1> 是<Picture 1>中的豆地，保持平行竹架、土沟、树线和远山。

summary:
[reference generation] 一条连续4秒的<Subject 1>真人写实空景，只有细微叶动。

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - 保持参考图的地形、泥土与植被。

detailed_description:
中国农村真人写实、实时傍晚、克制自然色彩和稳定曝光。
[Shot 1] 略高机位朝东沿两行豆架拍摄，固定镜头从首帧保持到尾帧。左前景靠左行的裸土上，放着小号米白内壁、深蓝盆沿、外侧褪色红花的搪瓷盆，里面是约拇指长的短而饱满的绿色种豆。中右前景的裸土上，一只空的浅圆竹匾从首帧就水平平放，底面完整贴地，开口朝上；在这个角度呈低矮椭圆。盆与匾都是已经放稳的静物。左行只剩零星豆荚，收获后的右行较稀。微风轻弯少数叶片，随后落稳。土面、容器、竹竿在锁定构图中保持不动。豆地无人。四秒内傍晚柔光均匀稳定。

overall_soundscape:
silence

non_diegetic_music:
N/A
```

## 41 · 03:28–03:30 · 种盆没被动过

- 场景引用：field
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_41_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 1>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 2-second photoreal live-action 16:9 MV shot of <Subject 1> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] A low close shot pushes in with small amplitude at slow speed. A single cream enamel basin with a dark blue rim and faded red exterior flowers sits on the soil, with a thin dirt mark on its rim. It is filled only with short, thick, stubby thumb-length green beans. This is an enamel basin, never a bamboo tray or woven basket; no long beans, no harvested pile, no second container, no person.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 1>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 2 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 低机位近景对着土上的唯一一只米白内壁、深蓝盆沿、外侧褪色红花的搪瓷盆小幅度慢速推近，盆沿有一圈薄土痕。盆里只装短粗、拇指长的绿豆。必须是搪瓷盆，绝不是竹匾或编织篮；不得出现长豆、饱豆堆、第二只容器或人物。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 42 · 03:30–03:38 · 再走一趟

- 场景引用：road
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_42_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from the single combined front/side/back character sheet in <Picture 1>. Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 2>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.

summary:
[reference generation] one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] Lower light, same day. An eye-level back view follows <Subject 1> with small amplitude at slow speed. She walks east with empty hands and does not turn. She stays on the exact same twin-track packed-earth lane from the earlier road shots: two pale wheel ruts with a grassy center, dark tree line, modest building edge on the left and open crops on the right. It is not a narrow gravel footpath, not a new rural landscape, not a fork, and not a winding side road; the route continues straight east toward the field.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面、侧面、背面合在同一张人物三视图中）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 2>（assets/scenes/road_west_gate_v02.png）锁定的环境。已确认的“东门外向东土路”场景基准图，作为<图片 2>载入。保持浅色碎石与压实土组成的双车辙路、中央和两侧草带、深色树线、左侧朴素建筑边缘以及右侧开阔庄稼。道路继续向东通往菜地；不要变成柏油路或城市街道。

摘要:
一条连续 8 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持单张人物三视图合图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 光线更低，仍是同一天。平视背影小幅度慢速跟随<主体 1>。她空手向东走，不转身。她必须走前面镜头的同一条双车辙压实土路：两条浅色车辙、中间草带、左侧朴素建筑边缘、右侧开阔庄稼和深色树线。不是窄碎石小径、不是陌生田野、不是岔路或弯曲支路，道路继续向东通往菜地。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 43 · 03:38–03:40 · 她的鞋

- 场景引用：road
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_43_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from the single combined front/side/back character sheet in <Picture 1>. Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 2>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.

summary:
[reference generation] one continuous 2-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] The camera holds a static low close shot immediately behind the woman's calves, aligned lengthwise along the right wheel rut of the road. Only her two lower legs below the knees and brown flat shoes appear. The heels face the camera, and the toes point away toward the road's distant vanishing point. She takes two unhurried forward steps away from the lens, placing both feet within the same right-hand rut. The grassy center strip stays on the left of her shoes, the outer grassy verge on their right. The legs recede gently into depth; the framing remains low and fixed throughout. Natural walking weight transfers smoothly from heel to toe, with coherent shoes and ankles.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面、侧面、背面合在同一张人物三视图中）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 2>（assets/scenes/road_west_gate_v02.png）锁定的环境。已确认的“东门外向东土路”场景基准图，作为<图片 2>载入。保持浅色碎石与压实土组成的双车辙路、中央和两侧草带、深色树线、左侧朴素建筑边缘以及右侧开阔庄稼。道路继续向东通往菜地；不要变成柏油路或城市街道。

摘要:
一条连续 2 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1] 摄影机固定在嫂子小腿后方的低机位，沿右侧车辙纵向拍近景。全程仅露双膝以下和棕色平底鞋。鞋跟朝镜头、鞋尖朝道路远处消失点。她缓慢向前走两步，双脚始终落在同一条右侧车辙内，渐渐远离镜头；中央草带在鞋左侧，路边草在右侧。机位全程低而固定。真实步态重心由脚跟平顺转到脚尖，鞋与脚踝结构一致。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 44 · 03:40–03:46 · 提起种盆

- 场景引用：field
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_44_h3_v03.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from the single combined front/side/back character sheet in <Picture 1>. Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 2>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium shot tilts up with small amplitude at slow speed as <Subject 1> bends and lifts the single cream enamel basin with a dark blue rim and faded red exterior flowers filled with short thick beans off the soil with both hands. This is the enamel basin, not the bamboo tray. The one empty round bamboo tray stays flat on the soil and remains empty and completely still; it is never lifted, filled, duplicated, or moved. Short beans shift once inside the enamel basin. Gaze on the basin, lips closed. Mild three-quarter. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面、侧面、背面合在同一张人物三视图中）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 2>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 2>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持单张人物三视图合图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视中景小幅度慢速上摇，跟着<主体 1>弯腰用双手把装着短粗豆的唯一米白内壁、深蓝盆沿、外侧褪色红花的搪瓷盆提离土面。这是搪瓷盆，不是竹匾。唯一的空圆竹匾平放在土上，保持空且绝对不动；不得被提起、装豆、重复或移动。搪瓷盆里的短豆只轻微移动一次。目光在盆上，闭唇。轻微三分之二。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 45 · 03:46–03:47.5 · 盆里的短豆动了一下

- 场景引用：field
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_45_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from the single combined front/side/back character sheet in <Picture 1>. Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 2>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 1.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] Locked close-up at upper-thigh height, looking slightly down into the small cream enamel basin with a dark blue rim and faded red exterior flowers. The basin fills three quarters of the image from first to last frame. Two hands of <Subject 1> grip opposite sides of its rim. A narrow strip of her faded blue floral shirt is visible above the basin; the frame remains cropped to hands, basin and shirt. Her feet stay planted and she remains slightly bent forward, holding the lifted basin level near her upper thighs. Short plump green seed pods, approximately a thumb long, shift gently a few centimeters once as her grip settles, then rest inside the cream interior. The camera holds a static shot and the basin keeps the same size in the frame. The bean field is only a soft narrow background edge. Hands retain five fingers and remain attached to the same arms.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面、侧面、背面合在同一张人物三视图中）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 2>（assets/scenes/field_west_end_v11_candidate.png）锁定的环境。已确认的“菜地西头与两行豆架”场景基准图，作为<图片 2>载入。保持两行平行豆架、绿色竹竿、深色裸土沟、树线和远处低山脊。搪瓷盆、圆竹匾以及后续“稀疏与浓密”的收获状态属于镜头道具，只在动作明确要求时加入。

摘要:
一条连续 1.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持单张人物三视图合图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 大腿上段高度略俯的固定近景，米白内壁、深蓝边、外侧褪色红花的搪瓷盆从首帧到尾帧占画面四分之三。<主体 1>双手握着相对两侧的盆沿，盆上方只见窄条旧蓝碎花衫，始终裁切在手、盆与衣料。她双脚站稳在原地，仍略弯身，在大腿上段附近水平端着已离地的盆。拇指长、短而饱满的绿色种豆随着扶稳动作轻移几厘米一次，随后停在米白内壁内。镜头固定，盆在画面中的大小不变。豆地仅在边缘形成窄条柔和背景。双手各五指并始终连在同一双手臂上。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 46 · 03:47.5–03:54.5 · 倒进种袋

- 场景引用：house、kitchen
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_46_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from the single combined front/side/back character sheet in <Picture 1>. Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 2>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.
<Subject 3> is the environment anchored by <Picture 3> from assets/scenes/main_room_stove_v01_candidate.png. The confirmed ordinary kitchen interior reference, loaded as <Picture 3>. Preserve the compact ordinary kitchen with cream walls, a red lower wall stripe, the pale L-shaped counter, the two-burner gas cooktop at the left foreground, metal pots and bowls, the wooden shelves and hanging utensils, and the wood-framed window looking onto green fields. Add a bowl, wok, bean bag or hand only when the shot action calls for it, while keeping this room layout fixed.

summary:
[reference generation] one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 3>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium shot just inside the ordinary green entrance frames <Subject 1> at mild three-quarter angle. The left interior wall holds one bare wooden peg. Through the opening to the right, the modest cream-and-red kitchen remains quiet, with a covered wok resting on its counter. In front of her, a small unbleached white cotton seed bag stands upright on a low wooden stool. Its wide mouth is folded outward and stays open by itself. Her two hands hold opposite sides of the same cream enamel basin with a dark blue rim and faded red exterior flowers, containing the short plump green pods collected from the field. Her eyes hold on the bag mouth, brows level, lips softly closed. She tips the basin once, slowly and continuously, and the green pods slide over its lower rim into the open bag. Both hands stay on the basin; the bag is supported by the stool. The camera tilts down with small amplitude at slow speed to keep the falling pods and bag mouth visible. The bag grows fuller, its bottom remains on the stool, and the basin becomes visibly empty. She gently returns the empty basin to level and holds it above the filled bag. The peg remains bare throughout this shot. Coherent hands, stable vessels and natural gravity, in one uninterrupted real-time take.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面、侧面、背面合在同一张人物三视图中）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 2>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 2>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。
<主体 3> 是由<图片 3>（assets/scenes/main_room_stove_v01_candidate.png）锁定的环境。已确认的“普通厨房内景”场景基准图，作为<图片 3>载入。保持奶油色墙面、红色下墙裙、浅色L形操作台、左前景双眼燃气灶、金属锅盆、木层架和悬挂厨具，以及望向绿色田野的木框窗。只有镜头动作需要时才加入碗、锅、种袋或手，房间布局保持不变。

摘要:
一条连续 7 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持单张人物三视图合图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 普通绿色入口内侧的平视中景，<Subject 1>轻微三分之二角度。左侧内墙上一颗空木钉；画右开口可见安静的奶油色红墙裙普通厨房，盖好的锅留在操作台。她身前低木凳上，一只本白棉布种袋直立，宽袋口向外翻折并自行撑开。她双手握同一只米白内壁、蓝边、外侧褪色红花搪瓷盆的相对两侧，盆中是从地头取回的短而饱满的绿豆荚。目光持住袋口，眉平、嘴轻闭。她缓慢连续倾斜盆一次，豆荚沿低侧盆沿滑入袋口；双手始终在盆上，袋底由凳子支撑。镜头小幅慢速下摇，保持豆子落下和袋口可见。袋子渐满、袋底留在凳上，盆内明显倒空。她轻轻将空盆回正，端在装好的袋上方。木钉全程空着。单条实时连续镜头，手与容器稳定，豆子按重力落下。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 47 · 03:54.5–03:56.5 · 袋口

- 场景引用：house、kitchen
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_47_h3_v01_trim.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 1>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/main_room_stove_v01_candidate.png. The confirmed ordinary kitchen interior reference, loaded as <Picture 2>. Preserve the compact ordinary kitchen with cream walls, a red lower wall stripe, the pale L-shaped counter, the two-burner gas cooktop at the left foreground, metal pots and bowls, the wooden shelves and hanging utensils, and the wood-framed window looking onto green fields. Add a bowl, wok, bean bag or hand only when the shot action calls for it, while keeping this room layout fixed.

summary:
[reference generation] one continuous 2-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] The camera holds a static close shot slightly above the mouth of the same unbleached white cotton seed bag, standing on the low wooden stool just inside the green entrance. The bag is filled with short plump green pods, each about a thumb long. Its folded white cloth rim relaxes slightly inward and then settles, leaving the green pods visible through a partly open mouth. The bottom stays supported by the stool throughout. The cloth and pods occupy most of the frame. Only a narrow soft green door edge and gray entrance jamb appear behind; the kitchen is outside this tight crop. Gentle natural cloth settling is the sole motion. A quiet two-second insert showing the finished contents, with constant light, fixed framing and a stable amount of beans.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 1>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。
<主体 2> 是由<图片 2>（assets/scenes/main_room_stove_v01_candidate.png）锁定的环境。已确认的“普通厨房内景”场景基准图，作为<图片 2>载入。保持奶油色墙面、红色下墙裙、浅色L形操作台、左前景双眼燃气灶、金属锅盆、木层架和悬挂厨具，以及望向绿色田野的木框窗。只有镜头动作需要时才加入碗、锅、种袋或手，房间布局保持不变。

摘要:
一条连续 2 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 摄影机略高于袋口拍固定近景。同一只本白棉布种袋直立在绿门内侧的低木凳上，里面装着约拇指长、短而饱满的绿色豆荚。翻折的白布袋沿稍向内松落并停住，半开的袋口仍能看清绿豆荚，袋底全程由凳子支撑。布料与豆子占据大部分画面，后面只留窄条虚化绿门与灰色门框；厨房在紧取景之外。仅布料有轻微自然落稳动作。两秒只交代装好的结果，光线、构图、豆量保持稳定。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 48 · 03:56.5–04:02 · 挂上那颗钉

- 场景引用：house、kitchen
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_48_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from the single combined front/side/back character sheet in <Picture 1>. Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 2>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.
<Subject 3> is the environment anchored by <Picture 3> from assets/scenes/main_room_stove_v01_candidate.png. The confirmed ordinary kitchen interior reference, loaded as <Picture 3>. Preserve the compact ordinary kitchen with cream walls, a red lower wall stripe, the pale L-shaped counter, the two-burner gas cooktop at the left foreground, metal pots and bowls, the wooden shelves and hanging utensils, and the wood-framed window looking onto green fields. Add a bowl, wok, bean bag or hand only when the shot action calls for it, while keeping this room layout fixed.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 3>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium shot inside the same ordinary entrance shows <Subject 1> beside the pale interior wall on the left of the green doorway. A single exposed wooden peg projects from this pale wall at her shoulder height, separate from the utensils hanging on the green door. She already holds the same filled unbleached white cotton seed bag, its mouth gathered shut with one simple cloth drawstring loop. Her right hand holds the loop while her left hand supports the bag's rounded lower part. She raises the bag a short distance and places the loop over the exposed peg. The loop catches securely around the wood. She releases the right hand, then lowers the supporting left hand. The weight transfers naturally to the peg, and the bag hangs against the wall with one small settling sway. The camera pushes in with small amplitude at slow speed, only a few centimeters, keeping her face, both hands, peg and whole bag visible throughout. Her gaze holds on the loop and peg, brows calm, lips closed. She stays in a mild three-quarter orientation, with at most one natural blink. The quiet kitchen stays in the right background. One woman, coherent hands and stable cloth, real-time motion, stable late-afternoon exposure.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面、侧面、背面合在同一张人物三视图中）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 2>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 2>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。
<主体 3> 是由<图片 3>（assets/scenes/main_room_stove_v01_candidate.png）锁定的环境。已确认的“普通厨房内景”场景基准图，作为<图片 3>载入。保持奶油色墙面、红色下墙裙、浅色L形操作台、左前景双眼燃气灶、金属锅盆、木层架和悬挂厨具，以及望向绿色田野的木框窗。只有镜头动作需要时才加入碗、锅、种袋或手，房间布局保持不变。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持单张人物三视图合图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 3>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 同一普通入口内侧平视中景，<Subject 1>站在绿门左侧的浅色内墙旁。浅墙上在她肩高处伸出一颗空木钉，与绿门上挂厨具的位置分开。她已拿着同一只装满的本白棉布种袋，袋口用一根简单布绳收紧，留一个绳圈。右手提绳圈，左手托圆鼓袋底，向上抬一小段，将绳圈套上空木钉。绳圈挂稳后，先放开右手，再放下左侧托袋的手。重量自然交给木钉，袋子贴墙小摆一次落稳。镜头仅前进几厘米、小幅慢推，全程保持脸、双手、木钉和整袋可见。视线持住绳圈和钉子，眉平静、闭唇、轻微三分之二角度，最多一次自然眨眼。安静的厨房留在右后景。只有嫂子一人，双手与布料稳定，正常实时动作，傍晚曝光稳定。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 49 · 04:02–04:03.5 · 袋子垂着

- 场景引用：house、kitchen
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_49_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 1>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/main_room_stove_v01_candidate.png. The confirmed ordinary kitchen interior reference, loaded as <Picture 2>. Preserve the compact ordinary kitchen with cream walls, a red lower wall stripe, the pale L-shaped counter, the two-burner gas cooktop at the left foreground, metal pots and bowls, the wooden shelves and hanging utensils, and the wood-framed window looking onto green fields. Add a bowl, wok, bean bag or hand only when the shot action calls for it, while keeping this room layout fixed.

summary:
[reference generation] one continuous 1.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] The camera holds a static close shot of the same full unbleached white cotton seed bag hanging at the left side of the green doorway. Its gathered neck is tied shut, and a single doubled white cloth loop passes over a short horizontal round wooden peg projecting from the gray plastered inner door jamb. The loop is taut and supports the bag's weight. The bag has a softly triangular filled body and a nearly horizontal lower seam. At the first frame it is already hanging freely; it makes one tiny natural settling sway of less than a centimeter and rests. The gray plaster behind, the wood and a narrow green door edge stay fixed. Only the closed bag, loop, peg and plaster appear in this tight crop. The kitchen is beyond the cropped frame. Steady late-afternoon light, constant scale and coherent cloth texture.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 1>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。
<主体 2> 是由<图片 2>（assets/scenes/main_room_stove_v01_candidate.png）锁定的环境。已确认的“普通厨房内景”场景基准图，作为<图片 2>载入。保持奶油色墙面、红色下墙裙、浅色L形操作台、左前景双眼燃气灶、金属锅盆、木层架和悬挂厨具，以及望向绿色田野的木框窗。只有镜头动作需要时才加入碗、锅、种袋或手，房间布局保持不变。

摘要:
一条连续 1.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 固定近景拍绿门左侧挂着的同一只装满的本白棉布种袋。袋颈已收拢扎紧，一根折成双股的白布绳圈套在灰抹灰内门框上伸出的短圆木钉，绳圈绷紧承重。袋身饱满、柔和三角形，下缝近水平。首帧已经自由悬挂，只轻轻摆不到一厘米落稳。背后的灰墙、木钉和窄绿门边固定。紧取景里只有闭口袋、绳圈、木钉和灰墙，厨房在画外。傍晚光线稳定，比例与布纹连续。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 50 · 04:03.5–04:07.5 · 三只碗在一起

- 场景引用：house、kitchen
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_50_h3_v01_trim.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 1>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.
<Subject 2> is the environment anchored by <Picture 2> from assets/scenes/main_room_stove_v01_candidate.png. The confirmed ordinary kitchen interior reference, loaded as <Picture 2>. Preserve the compact ordinary kitchen with cream walls, a red lower wall stripe, the pale L-shaped counter, the two-burner gas cooktop at the left foreground, metal pots and bowls, the wooden shelves and hanging utensils, and the wood-framed window looking onto green fields. Add a bowl, wok, bean bag or hand only when the shot action calls for it, while keeping this room layout fixed.

summary:
[reference generation] one continuous 4-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 2>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level close shot trucks right with small amplitude at slow speed across three used bowls gathered by the ordinary kitchen counter. One is the same plain cream-white ceramic bowl used by the seated man; a second family bowl is slightly larger. All three already rest together on the counter. A few fried green bean pods remain in the bowls. The frame is filled by the bowls and the stove edge.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是由<图片 1>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 1>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。
<主体 2> 是由<图片 2>（assets/scenes/main_room_stove_v01_candidate.png）锁定的环境。已确认的“普通厨房内景”场景基准图，作为<图片 2>载入。保持奶油色墙面、红色下墙裙、浅色L形操作台、左前景双眼燃气灶、金属锅盆、木层架和悬挂厨具，以及望向绿色田野的木框窗。只有镜头动作需要时才加入碗、锅、种袋或手，房间布局保持不变。

摘要:
一条连续 4 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 2>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视近景小幅度慢速右移，扫过普通厨房操作台旁放在一起的三只用过的碗。其中一只是小王用过的同一只素色米白瓷碗，另一只家用碗稍大；三只碗已经并排放好。碗里还留着几根干煸过的青豆角。画面里是碗和普通厨房沿。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 51 · 04:07.5–04:12.5 · 他还坐在入口台阶上

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_51_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man in the combined three-view sheet <Picture 1>. Retain his face, hair, ivory open shirt over a white T-shirt, light-blue jeans, white-gray sneakers, silver pendant, black watch and thin bracelet.
<Subject 2> is the ordinary entrance in <Picture 2>. Retain the faded beige plaster, closed blue-green double doors at left, partly open green metal entrance door, gray frame and shallow concrete step.

summary:
[reference generation] one continuous 5-second live-action shot of <Subject 1> remaining seated at <Subject 2>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain identity, clothing and accessories from the single combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - retain the entrance architecture, materials, scale and left-right arrangement.

detailed_description:
Photoreal rural Chinese home late on the same afternoon, natural muted colors, quiet real-time human breathing.
[Shot 1] An eye-level medium-wide shot begins with the seated man prominent in the entrance. <Subject 1> remains seated directly on the shallow concrete step immediately in front of the green metal door. His empty hands rest on his knees and his feet stay on the concrete below. Behind him, inside the narrow doorway, the same filled unbleached white cotton seed bag hangs by its gathered cloth loop on the left gray inner door jamb, separate from the green door. The seed bag is already hung and settled. The camera pulls out with small amplitude at slow speed, traveling only a few centimeters during the entire take. The slight widening gives the seated figure a little more breathing room while preserving his readable face. His gaze holds quietly on the yard in front of him, eyebrows level, lips closed with level corners. One small natural breath gently moves his chest; his hips stay on the step and his hands stay on his knees. He maintains the same seated pose through the true final frame. The green door stays partly open, the beige wall and left double doors stay fixed, and late-afternoon illumination is steady. Coherent hands, stable face, at most one natural blink. The distant field and travel route remain beyond the frame.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
subject_definitions:
<Subject 1> 是<Picture 1>人物三视图合图中的成年中国男性小王，保持面孔、发型、白衬衫叠穿白T恤、浅蓝牛仔裤、白灰鞋、银吊坠、黑表与细手链。
<Subject 2> 是<Picture 2>的普通入口，保持褪色米灰墙、左侧关闭的蓝绿双门、半开的绿色金属入口门、灰门框和浅水泥台阶。

summary:
[reference generation] 一条连续5秒真人写实镜头，<Subject 1>仍坐在<Subject 2>。

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - 保持单张人物合图中的身份、服装和配饰。
<Subject 2> (appears in [Shot 1]): fully_preserved - 保持入口建筑、材质、尺度和左右关系。

detailed_description:
同一天下午更晚的中国农村真人写实，自然低饱和色彩，实时细微呼吸。
[Shot 1] 平视中全景，起始让坐着的小王在入口中清楚可见。<Subject 1>始终直接坐在紧靠绿门的浅水泥台阶上，空手放双膝、双脚落在下方水泥地。身后窄门内，同一只装满的本白棉布种袋已用收紧的布绳圈挂在左侧灰色内门框旁，与绿色门板分开；袋子已经挂好并落稳。摄影机整镜只后退几厘米，小幅慢拉。轻微拉开给坐着的人留出一点环境，脸仍能看清。目光持住前方院子，眉平、闭唇且嘴角水平。一口自然呼吸轻动胸口，臀部留在台阶，双手留在膝上，坐姿持续到真实末帧。绿门保持半开，米灰墙与左侧双门固定，傍晚光照稳定。手和脸稳定，最多一次自然眨眼。远处豆地与出行路线都留在画外。

overall_soundscape:
silence

non_diegetic_music:
N/A
```

## 60 · 04:12.5–04:17 · 入口台阶、种袋和东侧通道

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_60_h3_v02_trim.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man in the combined three-view sheet <Picture 1>. Retain his face, hair, ivory open shirt over a white T-shirt, light-blue jeans, white-gray sneakers, silver pendant, black watch and thin bracelet.
<Subject 2> is the ordinary entrance in <Picture 2>. Retain the faded beige plaster, closed blue-green double doors at left, partly open green metal entrance door, gray frame and shallow concrete step.

summary:
[reference generation] one continuous 4.5-second live-action shot of <Subject 1> remaining seated at <Subject 2>.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - retain identity, clothing and accessories from the single combined character sheet.
<Subject 2> (appears in [Shot 1]): fully_preserved - retain the entrance architecture, materials, scale and left-right arrangement.

detailed_description:
Photoreal rural Chinese home late on the same afternoon, natural muted colors, quiet real-time human breathing.
[Shot 1] An establishing view of the whole modest house frontage is already present in the first frame. From across the yard, both complete door frames, the roof eave, the whole concrete base and the passage around the right corner all fit with comfortable margins. The seated man is a small figure near the lower center, his complete seated body and shoes only one quarter of image height. The shot stays at this wide scale throughout. <Subject 1> remains seated directly on the shallow concrete step immediately in front of the green metal door. His empty hands rest on his knees and his feet stay on the concrete below. Behind him, inside the narrow doorway, the same filled unbleached white cotton seed bag hangs by its gathered cloth loop on the left gray inner door jamb, separate from the green door. The seed bag is already hung and settled. The camera pulls out with small amplitude at slow speed, traveling only twenty centimeters during the entire take, keeping the entire house frontage in view from the first frame. The final composition keeps the man, step, hanging bag and narrow passage along the right exterior wall readable together. His gaze holds quietly on the yard in front of him, eyebrows level, lips closed with level corners. One small natural breath gently moves his chest; his hips stay on the step and his hands stay on his knees. He maintains the same seated pose through the true final frame. The green door stays partly open, the beige wall and left double doors stay fixed, and late-afternoon illumination is steady. Coherent hands, stable face, at most one natural blink. The distant field and travel route remain beyond the frame.

overall_soundscape:
silence

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
subject_definitions:
<Subject 1> 是<Picture 1>人物三视图合图中的成年中国男性小王，保持面孔、发型、白衬衫叠穿白T恤、浅蓝牛仔裤、白灰鞋、银吊坠、黑表与细手链。
<Subject 2> 是<Picture 2>的普通入口，保持褪色米灰墙、左侧关闭的蓝绿双门、半开的绿色金属入口门、灰门框和浅水泥台阶。

summary:
[reference generation] 一条连续4.5秒真人写实镜头，<Subject 1>仍坐在<Subject 2>。

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - 保持单张人物合图中的身份、服装和配饰。
<Subject 2> (appears in [Shot 1]): fully_preserved - 保持入口建筑、材质、尺度和左右关系。

detailed_description:
同一天下午更晚的中国农村真人写实，自然低饱和色彩，实时细微呼吸。
[Shot 1] 首帧已经是整个朴素屋前立面的交代画面。摄影机在院子另一侧，两处完整门框、上方屋檐、整条水泥基座和右侧绕屋角窄通道都完整入画并留余量。小王是下方中央的小人物，含鞋的坐姿全身只占画高四分之一，全程保持此宽构图。<Subject 1>始终直接坐在紧靠绿门的浅水泥台阶上，空手放双膝、双脚落在下方水泥地。身后窄门内，同一只装满的本白棉布种袋已用收紧的布绳圈挂在左侧灰色内门框旁，与绿色门板分开；袋子已经挂好并落稳。摄影机整镜只缓慢后退二十厘米，从首帧开始保持整个屋前立面可见，小幅慢拉。尾帧让人物、台阶、挂袋和外墙右侧窄通道一起可读。目光持住前方院子，眉平、闭唇且嘴角水平。一口自然呼吸轻动胸口，臀部留在台阶，双手留在膝上，坐姿持续到真实末帧。绿门保持半开，米灰墙与左侧双门固定，傍晚光照稳定。手和脸稳定，最多一次自然眨眼。远处豆地与出行路线都留在画外。

overall_soundscape:
silence

non_diegetic_music:
N/A
```

## 完成检查

- [x] `storyStatus: confirmed`、`durationConfirmed: true`、`scriptSkeletonStatus: complete`、`visualReferencesStatus: confirmed`
- [x] 三张人物三视图与五张场景基准图文件存在且状态为 `confirmed`
- [x] 60 镜时间线连续覆盖 `00:00–04:17`，每镜 0.5–8 秒，输出路径唯一
- [x] 每镜中英文六段结构完整，图片编号按实际上传顺序绑定
- [x] `song.json` 与本文件同步，并已运行 `npm run validate:songs`
