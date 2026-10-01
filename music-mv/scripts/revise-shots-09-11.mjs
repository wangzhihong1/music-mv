import fs from 'node:fs'

const songPath = 'D:/MusicMV/music-mv/songs/20260914-hometown/song.json'
const promptPath = 'D:/MusicMV/music-mv/songs/20260914-hometown/08-mv-prompts.md'
const data = JSON.parse(fs.readFileSync(songPath, 'utf8'))

const shot09 = data.shots.find((shot) => shot.id === '09')
shot09.action = '六秒只做沿唯一东向土路向远处走：小王从东门外近处进入道路轴线，背向镜头走向远处的菜地，不横穿画面，不转弯，不走进支路。'
shot09.visual = '后方偏左三分之二中全景。道路双车辙从前景向画面中央远处收束，小王沿右侧车辙向东远离镜头，腹前竹匾从侧后方仍可辨，人物逐渐变小。'
shot09.camera = '机位在人物后方偏左、朝东沿路；follows with small amplitude at slow speed，沿道路纵深跟随，不横向平移，不环绕。'
shot09.location = '东门外唯一一条向东的双车辙土路，前景是门外，远处通往菜地；没有十字路口和岔路。'
shot09.transition = '从院门方向接到同一条路的后方跟拍，人物运动轴线始终由近处指向远处。'
shot09.output = 'generated/video/raw/shot_09_h3_v04.mp4'
shot09.referenceImages = ['assets/characters/maleLead_three_view_sheet.png', 'assets/scenes/road_west_gate_v02.png']
shot09.prompt = `subject_definitions:
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
N/A`
shot09.promptZh = `主体定义:
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
N/A`

const shot10 = data.shots.find((shot) => shot.id === '10')
shot10.action = '两秒连续走两步，脚沿同一条东向土路的右侧车辙从近处走向远处；脚不横穿画框，不改变方向。'
shot10.visual = '低机位后方紧特写，只见膝盖以下、双车辙土路和鞋子朝画面深处走；竹匾窄边从身体右侧偶尔露出，不出现脸或上半身。'
shot10.camera = '脚踝高度的低机位后方固定构图，镜头朝东沿路；holds a static shot，脚由前景向远处走，不左右横穿。'
shot10.location = '镜09同一条东向双车辙土路，路轴线向画面深处延伸，没有十字路口。'
shot10.transition = '从镜09后方沿路跟拍切到同一运动轴线的脚部插入，方向仍由近处走向远处。'
shot10.output = 'generated/video/raw/shot_10_h3_v03.mp4'
shot10.referenceImages = ['assets/characters/maleLead_three_view_sheet.png', 'assets/scenes/road_west_gate_v02.png']
shot10.prompt = `subject_definitions:
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
N/A`
shot10.promptZh = `主体定义:
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
N/A`

const shot11 = data.shots.find((shot) => shot.id === '11')
shot11.action = '六秒继续沿唯一土路向东：人物从弯口前的近处沿道路走向远处，在弯道后逐渐离开画面；只在最后露出远处一小截矮豆架，不横穿、不回头。'
shot11.visual = '固定弯口纵深构图。土路从前景中央通向远处弯道，小王沿路从近处向弯后走，人物逐渐变小并被弯道遮住，远处右侧最后露出一小截豆架。'
shot11.camera = '机位在弯道外侧、朝东沿路的平视略低三分之二中全景；holds a static shot，不横向跟拍，不把人物拍成左向右穿框。'
shot11.location = '镜09、10同一条向东土路的弯口；道路只有一个弯，没有十字路口，菜地在弯后远处。'
shot11.transition = '从脚部向前走的插入切回同一道路轴线；人物继续由近处走向弯后，最后才让一小截菜架进入视线。'
shot11.output = 'generated/video/raw/shot_11_h3_v07.mp4'
shot11.referenceImages = ['assets/characters/maleLead_three_view_sheet.png', 'assets/scenes/road_west_gate_v02.png', 'assets/scenes/field_west_end_v11_candidate.png']
shot11.prompt = `subject_definitions:
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
N/A`
shot11.promptZh = `主体定义:
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
N/A`

fs.writeFileSync(songPath, JSON.stringify(data, null, 2) + '\n')
let markdown = fs.readFileSync(promptPath, 'utf8')
function section(shot) {
  return [`## ${shot.id} · ${shot.start}–${shot.end} · ${shot.shot}`, '', `- 场景引用：${shot.sceneReferenceIds.join('、')}`, `- 出镜人物：${shot.subjects.join('、')}`, `- 生成类型：${shot.genMode}`, `- 输出：\`${shot.output}\``, '', '### English H3 prompt', '', '```text', shot.prompt, '```', '', '### 中文对照提示词', '', '```text', shot.promptZh, '```', ''].join('\n')
}
for (const shot of [shot09, shot10, shot11]) {
  const pattern = new RegExp(`## ${shot.id} ·[\\s\\S]*?(?=\\n## |$)`)
  markdown = markdown.replace(pattern, section(shot))
}
fs.writeFileSync(promptPath, markdown)
