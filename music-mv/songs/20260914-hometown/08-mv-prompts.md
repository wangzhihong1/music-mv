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

- 单人镜：人物正面 / 侧面 / 背面依次占用 `<Picture 1/2/3>`，场景图从 `<Picture 4>` 顺延。
- 双人镜：第一人物占用 `<Picture 1/2/3>`，第二人物占用 `<Picture 4/5/6>`，场景图从 `<Picture 7>` 顺延。
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
[Shot 1] A lower close view of the same dirt track holds static. Wheel ruts, the edge of a corn plot, low bean trellises, and a corner of plain brick with a simple low roof. No person.

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
[Shot 1] A slightly high view makes an imperceptibly slow, continuous micro-push forward with no acceleration or sudden speed change. Keep the wheel ruts, the edge of a corn plot, low bean trellises, and a corner of plain brick with a simple low roof stable and readable. No person.

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
- 输出：`generated/video/raw/shot_52_h3_v01.mp4`

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
[Shot 1] A slightly high close-up holds static on the hands. <Subject 1> releases two long green beans into the bamboo basket on the soil. He stays bent over the basket. Gaze on the basket, lips closed. The dense right-row trellis stays around the basket. The frame is filled by the hands, the long green beans, and the basket. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

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
[镜头 1] 略俯近景固定在手上。<主体 1>松开手，两根长豆角掉进土上的竹篮。他一直弯在篮子上方。目光在篮子上，闭唇。右侧浓密豆架包着篮子。画面里是手、长豆角和竹篮。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

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

- 场景引用：house、kitchen
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_34_h3_v01.mp4`

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
[Shot 1] A high close shot pushes in with small amplitude at slow speed on the hot oil in the same wok. The surface shivers. No hand enters yet. No beans yet.

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
[镜头 1] 俯近景对着同一口锅里的热油小幅度慢速推近。油面轻颤。还没有手，也还没有豆子。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 35 · 02:49–02:56 · 饱豆下锅

- 场景引用：house、kitchen
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_35_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 4>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.
<Subject 3> is the environment anchored by <Picture 5> from assets/scenes/main_room_stove_v01_candidate.png. The confirmed ordinary kitchen interior reference, loaded as <Picture 5>. Preserve the compact ordinary kitchen with cream walls, a red lower wall stripe, the pale L-shaped counter, the two-burner gas cooktop at the left foreground, metal pots and bowls, the wooden shelves and hanging utensils, and the wood-framed window looking onto green fields. Add a bowl, wok, bean bag or hand only when the shot action calls for it, while keeping this room layout fixed.

summary:
[reference generation] one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 5>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] A slightly high medium close-up holds static. <Subject 1> tips long full beans into the oil and turns them once. No short seed beans enter. Her face stays at the top of frame, gaze in the pan, lips closed. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 4>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 4>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。
<主体 3> 是由<图片 5>（assets/scenes/main_room_stove_v01_candidate.png）锁定的环境。已确认的“普通厨房内景”场景基准图，作为<图片 5>载入。保持奶油色墙面、红色下墙裙、浅色L形操作台、左前景双眼燃气灶、金属锅盆、木层架和悬挂厨具，以及望向绿色田野的木框窗。只有镜头动作需要时才加入碗、锅、种袋或手，房间布局保持不变。

摘要:
一条连续 7 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 5>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 略俯中近景固定。<主体 1>把长饱豆倒进油里，用铲翻一次。没有短种豆进锅。她的脸在画面上方，目光在锅里，闭唇。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 36 · 02:56–02:57.5 · 锅里的长豆

- 场景引用：house、kitchen
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_36_h3_v01.mp4`

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
[Shot 1] A high tight shot holds static on long green beans moving in hot oil inside a worn wok.

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
[镜头 1] 俯特写固定在旧锅里、热油中滚动的长豆角上。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

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
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 4>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium-wide shot holds static. <Subject 1> sits on the south-facing threshold holding a bowl of dry-fried long beans. The partly open green entrance door and shallow concrete step remain behind him; the road direction stays off frame. Gaze on the bowl, lips closed. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 4>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视中全景固定。<主体 1>端着干煸长豆角的碗，坐上朝南的入口台阶。身后的绿色入口门保持半开，浅水泥台阶留在他身下；道路方向留在画外。目光在碗上，闭唇。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 38 · 03:02–03:08 · 吃到这口

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_38_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 4>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium close-up holds static. <Subject 1> lifts one dry-fried long bean to his mouth and eats it with a small closed-mouth chew. The chopsticks stay in his hand. Gaze stays in the bowl. Brows level, no smile, no tears. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 4>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视中近景固定。<主体 1>夹起一根干煸豆角送到嘴边，闭着嘴轻轻嚼。筷子还在手里。目光停在碗里。眉平稳，不笑，不流泪。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 55 · 03:08–03:14 · 筷子放回碗沿

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_55_h3_v02.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 4>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 6-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level close-up holds static. <Subject 1> lowers the chopsticks onto the rim of the bowl. A few dry-fried long beans remain in the bowl. Gaze stays in the bowl, brows level, his mouth a flat closed line. The doorway threshold stays in the soft background. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 4>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 6 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视近景固定。<主体 1>把筷子搁回碗沿。碗里还剩几根干煸豆角。目光停在碗里，眉平稳，嘴是一条闭着的平线。入口台阶在浅后景。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 39 · 03:14–03:22 · 高兴不起来

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_39_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 4>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium close-up pushes in with small amplitude at slow speed. <Subject 1> has swallowed. His gaze holds on the bowl. Brows level, lips closed, mouth corners do not lift. His shoulders lower a little. No tears. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 4>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 8 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视中近景小幅度慢速推近。<主体 1>已经咽下。目光停在碗上。眉平稳，闭唇，嘴角不抬。肩略微落下。没有眼泪。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 59 · 03:22–03:24 · 肩落下来

- 场景引用：house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_59_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 4>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 2-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium close-up holds static. <Subject 1> stays with the bowl of dry-fried long beans. His shoulders are slightly down, gaze on the bowl, mouth a flat closed line. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国男性小王，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持清秀无胡须的脸、蓬松有层次的中短黑发、瘦高身材、敞开的乳白色短袖翻领衬衫、纯白圆领T恤、浅蓝色宽松长牛仔裤、白灰低帮运动鞋、银色矩形吊坠、左腕黑表和右腕细手链。
<主体 2> 是由<图片 4>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 4>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 2 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视中近景固定。他仍对着干煸长豆角的碗，肩略微落下，目光在碗上，嘴是一条闭着的平线。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 40 · 03:24–03:28 · 地头还是那块

- 场景引用：field
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_40_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the environment anchored by <Picture 1> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 1>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 4-second photoreal live-action 16:9 MV shot of <Subject 1> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 1>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] A slightly high medium-wide shot looks east and holds static, matching the opening geography. The basin of short beans is still at the left row. The tray is empty. The right row is thinner. Lower light, same day. No person.

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
一条连续 4 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持<图片 1>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 略高中全景朝东固定，地理与开场一致。短豆的盆仍在左行。圆匾空了。右行稀了。光线更低，仍是同一天。没有人。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 41 · 03:28–03:30 · 种盆没被动过

- 场景引用：field
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_41_h3_v01.mp4`

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
[Shot 1] A low close shot pushes in with small amplitude at slow speed. The same enamel basin sits on the soil and is filled with short, thick, stubby green beans.

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
[镜头 1] 低机位近景对着土上的同一只搪瓷盆小幅度慢速推近。盆里是短粗、拇指长的绿豆。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 42 · 03:30–03:38 · 再走一趟

- 场景引用：road
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_42_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 4>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.

summary:
[reference generation] one continuous 8-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] Lower light, same day. An eye-level back view follows <Subject 1> with small amplitude at slow speed. She walks east with empty hands and does not turn. The road has no fork.

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

摘要:
一条连续 8 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 光线更低，仍是同一天。平视背影小幅度慢速跟随<主体 1>。她空手向东走，不转身。路没有岔路。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 43 · 03:38–03:40 · 她的鞋

- 场景引用：road
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_43_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 4>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.

summary:
[reference generation] one continuous 2-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] A low close shot holds static on brown flat shoes and dark-blue trouser cuffs taking two slower steps toward screen right along the dirt road.

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

摘要:
一条连续 2 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 低机位近景固定在棕色平底鞋和深蓝裤脚上，沿土路向画面右侧更慢地走两步。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 44 · 03:40–03:46 · 提起种盆

- 场景引用：field
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_44_h3_v01.mp4`

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
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium shot tilts up with small amplitude at slow speed as <Subject 1> lifts the basin off the soil with both hands. Short beans shift once inside. The empty tray stays down. Gaze on the basin, lips closed. Mild three-quarter. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

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
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视中景小幅度慢速上摇，跟着<主体 1>双手把盆提离地面。里面的短豆动一下。空匾留在下面。目光在盆上，闭唇。轻微三分之二。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 45 · 03:46–03:47.5 · 盆里的短豆动了一下

- 场景引用：field
- 出镜人物：femaleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_45_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult rural Chinese woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/field_west_end_v11_candidate.png. The confirmed west-end bean-field reference, loaded as <Picture 4>. Preserve the two parallel bean rows, green bamboo stakes, dark open soil furrow, tree line and distant low ridge. The basin, round bamboo tray and the later sparse-versus-dense harvest state are shot-specific props and must be added only where the shot action calls for them.

summary:
[reference generation] one continuous 1.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] A close shot holds static on the lifted enamel basin. Short, thick, stubby green beans, each only about a thumb long, shift once against the enamel. <Subject 1>'s two hands hold the rim. The frame is filled by the basin, the beans, and the hands.

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
一条连续 1.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 近景固定在被提起的搪瓷盆里。短而粗、只有拇指那么长的豆角往盆壁上碰一下。<主体 1>的两只手扶着盆沿。画面里是盆、豆子和手。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

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
<Subject 1> is the adult rural Chinese woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 4>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.
<Subject 3> is the environment anchored by <Picture 5> from assets/scenes/main_room_stove_v01_candidate.png. The confirmed ordinary kitchen interior reference, loaded as <Picture 5>. Preserve the compact ordinary kitchen with cream walls, a red lower wall stripe, the pale L-shaped counter, the two-burner gas cooktop at the left foreground, metal pots and bowls, the wooden shelves and hanging utensils, and the wood-framed window looking onto green fields. Add a bowl, wok, bean bag or hand only when the shot action calls for it, while keeping this room layout fixed.

summary:
[reference generation] one continuous 7-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 5>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium shot tilts down with small amplitude at slow speed. <Subject 1> pours short, thick, stubby green bean pods, each only about a thumb long, from the white enamel basin into a cloth bag held open in front of her. The same green pods fill the basin and fall into the bag. The covered wok rests on the ordinary kitchen counter in the left foreground, matching the confirmed kitchen layout. The bare wooden nail is on the interior wall away from the cooktop. Gaze on the bag mouth, lips closed. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 4>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 4>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。
<主体 3> 是由<图片 5>（assets/scenes/main_room_stove_v01_candidate.png）锁定的环境。已确认的“普通厨房内景”场景基准图，作为<图片 5>载入。保持奶油色墙面、红色下墙裙、浅色L形操作台、左前景双眼燃气灶、金属锅盆、木层架和悬挂厨具，以及望向绿色田野的木框窗。只有镜头动作需要时才加入碗、锅、种袋或手，房间布局保持不变。

摘要:
一条连续 7 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 5>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视中景小幅度慢速下摇。<主体 1>把白搪瓷盆里短而粗、只有拇指那么长的青豆角倒进身前张开的布袋。盆里和落下的都是同样的青豆角。盖着的锅放在左前景普通厨房操作台上，与已确认的厨房布局一致。光木钉在远离炉具的内墙上。目光在袋口，闭唇。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 47 · 03:54.5–03:56.5 · 袋口

- 场景引用：house、kitchen
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_47_h3_v01.mp4`

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
[Shot 1] A close shot holds static on the open cloth bag. Short, thick, stubby green bean pods, each only about a thumb long, sit inside the mouth of the bag. The frame is filled by the cloth and the green pods.

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
[镜头 1] 近景固定在张开的布袋口。袋口里是短而粗、只有拇指那么长的青豆角。画面里是布和青豆角。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

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
<Subject 1> is the adult rural Chinese woman whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same mature face, blue-gray floral headscarf, black hair in a low ponytail, faded light-blue floral short-sleeve shirt, dark-blue cropped trousers, brown flat shoes, and sturdy working build.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 4>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.
<Subject 3> is the environment anchored by <Picture 5> from assets/scenes/main_room_stove_v01_candidate.png. The confirmed ordinary kitchen interior reference, loaded as <Picture 5>. Preserve the compact ordinary kitchen with cream walls, a red lower wall stripe, the pale L-shaped counter, the two-burner gas cooktop at the left foreground, metal pots and bowls, the wooden shelves and hanging utensils, and the wood-framed window looking onto green fields. Add a bowl, wok, bean bag or hand only when the shot action calls for it, while keeping this room layout fixed.

summary:
[reference generation] one continuous 5.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 5>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium shot pushes in with small amplitude at slow speed. <Subject 1> lifts a white cloth sack by its cloth tie and sets that tie onto the small wooden nail on the interior wall at screen left of the doorway. She lowers her hand. The white cloth sack hangs from the nail, full and closed, the green pods inside the cloth. Mild three-quarter, mouth a flat closed line. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

overall_soundscape:
silence. No dialogue, singing, or location sound is generated for this shot; the confirmed song master is added only in the final edit.

non_diegetic_music:
N/A
```

### 中文对照提示词

```text
主体定义:
<主体 1> 是成年中国农村女性嫂子，外观来自<图片 1>（正面）、<图片 2>（侧面）、<图片 3>（背面）。保持成熟面孔、蓝灰碎花头巾、低马尾、浅蓝碎花短袖衬衫、深蓝七分裤、棕色平底鞋和结实的劳作身材。
<主体 2> 是由<图片 4>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 4>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。
<主体 3> 是由<图片 5>（assets/scenes/main_room_stove_v01_candidate.png）锁定的环境。已确认的“普通厨房内景”场景基准图，作为<图片 5>载入。保持奶油色墙面、红色下墙裙、浅色L形操作台、左前景双眼燃气灶、金属锅盆、木层架和悬挂厨具，以及望向绿色田野的木框窗。只有镜头动作需要时才加入碗、锅、种袋或手，房间布局保持不变。

摘要:
一条连续 5.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 5>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视中景小幅度慢速推近。<主体 1>提起一只已经装满的白布袋，把袋绳套上门内、画面左侧墙上的小木钉，然后放下手。白布袋挂在钉子上，袋口合着，青豆角在布里面。轻微三分之二，嘴是一条闭着的平线。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

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
[Shot 1] A close shot holds static on the white cloth sack hanging from the wooden nail on the interior wall. The sack is full, closed, and still. The frame is filled by the sack, the nail, and the wall.

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
[镜头 1] 近景固定在门内墙上、挂在木钉上的白布袋。袋子是满的，口是合的，停着不动。画面里是布袋、钉子和墙。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 50 · 04:03.5–04:07.5 · 三只碗在一起

- 场景引用：house、kitchen
- 出镜人物：无
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_50_h3_v01.mp4`

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
[Shot 1] An eye-level close shot trucks right with small amplitude at slow speed across three used bowls gathered by the ordinary kitchen counter. One bowl is slightly larger. A few fried green bean pods remain in the bowls. The frame is filled by the bowls and the stove edge.

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
[镜头 1] 平视近景小幅度慢速右移，扫过普通厨房操作台旁放在一起的三只用过的碗。一只稍大。碗里还留着几根干煸过的青豆角。画面里是碗和普通厨房沿。 保持场景几何和材质纹理稳定，不出现活人、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 51 · 04:07.5–04:12.5 · 他还坐在入口台阶上

- 场景引用：road、house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_51_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 4>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.
<Subject 3> is the environment anchored by <Picture 5> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 5>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 5>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] Lower light, not yet night. An eye-level medium-wide shot pulls out with small amplitude at slow speed. <Subject 1> stays seated on the threshold, empty hands resting on his knees. The seed bag hangs on the nail inside behind him. The partly open green entrance door stays behind him; the road reference defines the off-frame route and is not pasted into the doorway. His gaze holds on the yard. Brows level, lips closed. He stays seated for the whole shot. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

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
<主体 3> 是由<图片 5>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 5>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 5>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 光线更低，天还没黑。平视中全景小幅度慢速拉远。<主体 1>仍坐在入口台阶上，双手空着放在膝上。身后门里，种袋挂在钉子上。身后的绿色入口门保持半开；道路基准图只用于锁定画外行进方向，不把道路硬塞进门洞。目光停在院子里。眉平稳，闭唇。他一直坐在入口台阶上。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 60 · 04:12.5–04:17 · 入口台阶、种袋和东侧通道

- 场景引用：road、house
- 出镜人物：maleLead
- 生成类型：characterVideo
- 输出：`generated/video/raw/shot_60_h3_v01.mp4`

### English H3 prompt

```text
subject_definitions:
<Subject 1> is the adult Chinese man whose appearance comes from <Picture 1> (front), <Picture 2> (side), and <Picture 3> (back). Keep the same clean-shaven youthful face, voluminous layered medium-short black hair, slim build, ivory-white short-sleeve collared shirt worn open over a plain white crew-neck T-shirt, loose light-blue full-length jeans, white-and-light-gray low-top sneakers, silver rectangular pendant, black watch on the left wrist, and thin bracelet on the right wrist.
<Subject 2> is the environment anchored by <Picture 4> from assets/scenes/road_west_gate_v02.png. The confirmed eastbound rural lane reference, loaded as <Picture 4>. Preserve the same twin-track pale gravel and packed-earth lane, the grassy center and edges, the dark tree line, the modest building edge on the left and open crops on the right. The route continues east toward the field; do not turn it into a paved road or a city street.
<Subject 3> is the environment anchored by <Picture 5> from assets/scenes/house_threshold_v29_candidate.png. The confirmed ordinary self-built house entrance reference, loaded as <Picture 5>. Preserve the faded beige plaster facade, the large closed blue-green double door on the left, the partly open green metal entrance door near center, its rough gray trim, the shallow concrete step and the narrow rubble strip along the wall. Keep the architecture modest and ordinary, without ornamental enlargement.

summary:
[reference generation] one continuous 4.5-second photoreal live-action 16:9 MV shot of <Subject 1> and <Subject 2> and <Subject 3> at the established location, following the single action described below.

retention_analysis:
<Subject 1> (appears in [Shot 1]): fully_preserved - keep the same face, hair, body, clothing and identity from the three character references.
<Subject 2> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 4>; add only the shot-specific action props described below.
<Subject 3> (appears in [Shot 1]): fully_preserved - preserve the confirmed spatial anchor, visible materials, camera-side relationships and light from <Picture 5>; add only the shot-specific action props described below.

detailed_description:
The target video is photoreal live-action in real time, the same late-summer Chinese village later the same day, with a lower sun, longer shadows and a pale sky that is not yet night. Colors stay muted. No golden nostalgia grade.
[Shot 1] An eye-level medium-wide shot pulls out with small amplitude at slow speed. <Subject 1> remains seated on the threshold, empty hands on his knees. The white cloth seed sack hangs on the interior nail behind him, and the partly open green entrance door stays behind him; the road direction remains off frame. He stays seated. Mouth a flat closed line. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.

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
<主体 3> 是由<图片 5>（assets/scenes/house_threshold_v29_candidate.png）锁定的环境。已确认的“普通自建房入口”场景基准图，作为<图片 5>载入。保持褪色米灰抹灰墙面、左侧关闭的蓝绿色双扇门、中央偏右半开的绿色金属入口门、粗糙灰色门框、浅水泥台阶和墙脚窄碎石带。建筑保持朴素普通，不做装饰性扩建。

摘要:
一条连续 4.5 秒、真人写实、16:9 的参考图生成 MV 镜头，<主体 1>和<主体 2>和<主体 3>位于已锁定场景中，执行下述单一动作。

保留分析:
<主体 1>（出现在[镜头 1]）：完全保留——保持三张人物参考图中的脸、头发、身体、服装和身份。
<主体 2>（出现在[镜头 1]）：完全保留——保持<图片 4>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。
<主体 3>（出现在[镜头 1]）：完全保留——保持<图片 5>确认的空间锚点、可见材质、镜头侧关系和光线；只加入下方动作明确要求的镜头道具。

详细描述:
目标视频为实时真人写实影像。同一天更晚，太阳更低，影子更长，天还没黑，色彩保持低饱和。
[镜头 1] 平视中全景小幅度慢速拉开。他仍坐在入口台阶上，双手空着放在膝上。身后墙内钉子上挂着白布种袋，身后的绿色入口门保持半开，道路方向留在画外。他一直坐着。嘴是一条闭着的平线。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。

整体声音环境:
静音。该镜不生成对白、演唱或现场环境声；成片仅在最终剪辑中使用已确认的歌曲母带。

非叙事音乐:
N/A
```

## 完成检查

- [x] `storyStatus: confirmed`、`durationConfirmed: true`、`scriptSkeletonStatus: complete`、`visualReferencesStatus: confirmed`
- [x] 三张人物三视图与五张场景基准图文件存在且状态为 `confirmed`
- [x] 60 镜时间线连续覆盖 `00:00–04:17`，每镜 0.5–8 秒，输出路径唯一
- [x] 每镜中英文六段结构完整，图片编号按实际上传顺序绑定
- [x] `song.json` 与本文件同步，并已运行 `npm run validate:songs`
