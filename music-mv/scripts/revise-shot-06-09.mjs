import fs from 'node:fs'

const songPath = 'D:/MusicMV/music-mv/songs/20260914-hometown/song.json'
const promptPath = 'D:/MusicMV/music-mv/songs/20260914-hometown/08-mv-prompts.md'
const data = JSON.parse(fs.readFileSync(songPath, 'utf8'))

function replaceOnce(value, from, to) {
  if (!value.includes(from)) throw new Error(`Missing expected prompt text: ${from.slice(0, 80)}`)
  return value.replace(from, to)
}

const shot06 = data.shots.find((shot) => shot.id === '06')
const shot09 = data.shots.find((shot) => shot.id === '09')
const shot56 = data.shots.find((shot) => shot.id === '56')

shot06.camera = '高机位略俯，标准焦段，深景深；holds a static shot，机位和构图锁定，只有自然微风让豆叶和少量杂草轻轻摆动。'
shot06.action = '三秒把规矩的左右交待完：靠路稀，靠田密；不放盆，不放竹匾，只保留轻微自然风和叶片摆动。'
shot06.sceneReferenceIds = ['field']
shot06.output = 'generated/video/raw/shot_06_h3_v02.mp4'
shot06.prompt = `subject_definitions:
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
N/A`
shot06.promptZh = `主体定义:
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
N/A`
shot09.camera = '左侧平视三分之二中全景；follows with small amplitude at slow speed，只从侧面跟随向东，不环绕。'
shot09.visual = '左侧三分之二中全景。小王穿乳白色短袖开衫罩白T恤，侧身、双手和腹前竹匾同时清楚可见，匾面朝上并位于身体前方，唯一土路向东，没有岔路。'
shot09.action = '家和菜地的距离要靠走出来。六秒只做走路，从左侧看见人物侧身和腹前竹匾，双手稳稳托住竹匾，不背在身后，也不夹在腰后。'

shot56.camera = '脚踝高度的低机位紧特写，标准焦段，固定构图；只拍膝盖以下，鞋子从左向右连续走过画面，不出现脸和上半身。'
shot56.visual = '低机位紧特写，只见浅蓝牛仔裤膝盖以下、白灰低帮运动鞋、地面和身侧圆竹匾的边缘；人物从左向右走，不出现脸、胸口或完整人物。'
shot56.action = '两秒只完成连续两步，鞋底交替落在同一条土路上，竹匾边缘随步伐轻微摆动；绝不展示脸、上半身或正面全身。'
shot56.output = 'generated/video/raw/shot_56_h3_v02.mp4'
shot56.prompt = shot56.prompt.replace(
  '[Shot 1] A low close shot holds static. <Subject 1> keeps walking east. White sneakers and the round bamboo tray at his side stay in frame. The dirt road continues. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.',
  '[Shot 1] The camera is at ankle height in a tight locked-off close-up, framed strictly from below the knees. Only the loose light-blue jean cuffs, white-and-light-gray low-top sneakers, packed dirt road, and the near edge of the round bamboo tray are visible. Two natural alternating steps carry the lower legs from screen left to screen right; the tray edge swings slightly with the walk. The face, chest, shoulders, hands, and full body stay completely outside the frame. No frontal portrait, no upper body, no duplicate shoes, no extra legs, no jump cuts, no morphing, no text, no logos.'
)
shot56.promptZh = shot56.promptZh.replace(
  '[镜头 1] 低机位近景固定。白鞋和身侧的圆竹匾继续沿土路向东走。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。',
  '[镜头 1] 脚踝高度的低机位紧特写，构图严格裁在膝盖以下。画面只出现浅蓝宽松牛仔裤裤脚、白灰低帮运动鞋、压实土路和身侧圆竹匾的边缘。两步自然交替，从画面左侧走向右侧；竹匾边缘随步伐轻微摆动。脸、胸口、肩膀、双手和完整人物始终在画外。禁止正面肖像、上半身、重复鞋子、额外腿、跳切、变形、画面文字或商标。'
)

const shot10 = data.shots.find((shot) => shot.id === '10')
shot10.camera = '脚踝高度的低机位紧特写，标准焦段，固定构图；严格裁在膝盖以下，只让脚从画面左侧走向右侧。'
shot10.visual = '低机位紧特写，只见浅蓝牛仔裤膝盖以下、白灰低帮运动鞋和土路；圆竹匾的窄边从画面左上沿短暂掠过，不出现脸、胸口、肩膀或完整人物。'
shot10.action = '两秒连续走过两步，脚交替落地并穿过画框；竹匾窄边只在前半段从左上沿一闪而过，不能消失成空手，也不能带入人物上半身。'
shot10.output = 'generated/video/raw/shot_10_h3_v02.mp4'
shot10.prompt = shot10.prompt.replace(
  '[Shot 1] A low close shot holds static on the dirt. <Subject 1>\'s white-and-light-gray low-top sneakers and loose light-blue full-length jean cuffs take two steps through frame toward screen right. The tray rim barely shows at the top. No face, no turn, no trellis.',
  '[Shot 1] The camera is at ankle height in a tight locked-off close-up, framed strictly from below the knees. <Subject 1>\'s loose light-blue jean cuffs and white-and-light-gray low-top sneakers take two natural alternating steps from screen left to screen right across the packed dirt lane. A thin, unmistakable arc of the round bamboo tray edge briefly enters along the upper-left edge during the first step, then leaves the frame; the shot must not look empty-handed. Keep the face, chest, shoulders, hands, and upper body completely outside the frame. No portrait, no full body, no trellis, no extra legs, no jump cuts, no morphing, no text, no logos.'
)
shot10.promptZh = shot10.promptZh.replace(
  '[镜头 1] 近景固定在土路上。<主体 1>的白灰低帮运动鞋和浅蓝宽松长牛仔裤脚交替走过画面，匾的边在画面上方一闪。没有脸，没有转身，没有豆架。',
  '[镜头 1] 脚踝高度的低机位紧特写，构图严格裁在膝盖以下。<主体 1>的浅蓝宽松长牛仔裤裤脚和白灰低帮运动鞋从画面左侧向右侧连续交替走两步。第一步时，圆竹匾一条清楚的窄边从画面左上沿短暂掠过，随后离开画面；不能看起来像空手走路。脸、胸口、肩膀、双手和上半身始终在画外。禁止肖像、全身、豆架、额外腿、跳切、变形、画面文字或商标。'
)

const shot12 = data.shots.find((shot) => shot.id === '12')
shot12.camera = '平视中全景，标准焦段，深景深；holds a static shot，固定朝东构图，人物明确从画面左侧向右侧进入，不反向。'
shot12.visual = '平视中全景。人物从画面左侧向右侧进入，先抱着空圆竹匾走到两行西头，再把匾放到两行旁边的裸土上；左侧稀疏豆行西头固定一只小浅色搪瓷种盆，右侧豆行更密。'
shot12.action = '八秒完成一个清楚连续动作：小王从左向右走入，走到两行西头后放下圆竹匾，手离开匾，再停住看向左稀右密的两行；不从右侧进入，不反向走，不突然换位。'
shot12.output = 'generated/video/raw/shot_12_h3_v05.mp4'
shot12.prompt = shot12.prompt.replace(
  '[Shot 1] An eye-level medium-wide shot holds static on the soil at the western end of the bean field. Corn and low bean trellises fill the plots. The left row is sparser, the right row is denser. <Subject 1> enters from screen left and sets the empty round bamboo tray on the soil beside the rows. His gaze holds on the two bean rows. Brows slightly gathered, lips closed. He does not pick yet. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.',
  '[Shot 1] A fixed eye-level medium-wide view faces east at the western end of the confirmed bean field. At the first frame, the person is completely offscreen and the empty field is visible. One small pale enamel seed basin stays fixed on the bare soil at the western end of the sparse left row. At about 0.5 seconds, <Subject 1> enters from the extreme screen-left edge in a clear right-facing side profile and walks toward screen right, crossing the foreground in one uninterrupted left-to-right path while carrying the empty round bamboo tray level in both hands. His nose, chest and leading shoulder point to screen right throughout the walk. He reaches the right side beside the two rows only after walking across the frame, lowers the tray once onto the bare soil, releases it, and then holds his gaze on the sparse-left/dense-right contrast. The tray must not appear before he enters, must not start at screen right, and must not reverse direction. Do not duplicate the person, tray or basin. Brows slightly gathered, lips closed. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable face and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.'
)
shot12.promptZh = shot12.promptZh.replace(
  '[镜头 1] 平视中全景固定在菜地西头的土上。地里是玉米和矮豆架，左行稀、右行密。<主体 1>从画面左侧进来，把空竹匾放在两行旁边的土上。目光停在两行豆子上。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。',
  '[镜头 1] 平视中全景固定朝东，机位锁在确认过的菜地西头。第一帧人物完全不在画面内，先让观众看见空地和固定在左侧稀疏豆行西头裸土上的一只小浅色搪瓷种盆。约 0.5 秒后，<主体 1>以清楚的右向侧身轮廓从画面最左边缘进入，鼻子、胸口和领先肩膀全程朝向画面右侧，明确从左向右横穿前景，双手平稳抱着空圆竹匾；走到画面右侧、两行旁边后才放下一次竹匾，松手，再停住看向左稀右密的两行。不得复制人物、竹匾或种盆；竹匾不得在人物进入前出现，不得从右侧进入、反向行走或突然换位。眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。'
)

const shot15 = data.shots.find((shot) => shot.id === '15')
shot15.camera = '手部微距近景，中长焦，浅景深；holds a static shot，构图只留胸口以下的手指、短豆和盆沿，不出现脸或全身。'
shot15.visual = '特写。只见右手手指捏住藤上的一根短豆、圆竹匾边缘的一点和浅色搪瓷种盆边缘；脸、胸口以上和完整身体都在画外。'
shot15.action = '一秒半只保持捏住未折断的短豆，手指不拉、不摘、不把豆移到匾里；画面专注停顿。'
shot15.output = 'generated/video/raw/shot_15_h3_v03.mp4'
shot15.prompt = shot15.prompt.replace(
  '[Shot 1] A tight close-up holds static on <Subject 1>\'s fingers around one short thick bean. The bean stays on the vine. A curve of the enamel basin remains at the frame edge. The fingers do not pull.',
  '[Shot 1] A true tight hand macro close-up holds static, framed from below the chest and excluding the face, head, shoulders and full body. Only <Subject 1>\'s right fingertips gently pinch one short thick bean still attached to the sparse vine, plus a small curve of the round bamboo tray and the edge of the pale enamel seed basin at the frame border. The bean remains on the vine for the entire shot. The fingers do not pull, snap, pick, or move the bean toward the tray. No portrait, no full-body view, no wide field, no extra fingers, no duplicate beans, no morphing, no text, no logos.'
)
shot15.promptZh = shot15.promptZh.replace(
  '[镜头 1] 特写固定在<主体 1>的手指和一根短粗豆角上。豆角仍连在藤上。画面边缘保留搪瓷盆的一弯。手指不拉。',
  '[镜头 1] 真正的手部微距特写，构图裁在胸口以下，脸、头、肩膀和完整身体全部在画外。画面只出现<主体 1>右手指尖轻轻捏住稀疏豆藤上一根短粗豆角、圆竹匾的一小段边缘和画面边缘的浅色搪瓷种盆。豆角全程仍连在藤上。手指不拉、不折、不摘，也不把豆角移向竹匾。禁止肖像、全身、大面积田地、额外手指、重复豆角、变形、画面文字或商标。'
)

const shot17 = data.shots.find((shot) => shot.id === '17')
shot17.camera = '平视中近景，标准焦段，浅景深；holds a nearly static shot with only a very small slow push of a few centimeters。全程保持中近景，不推进成大特写。'
shot17.visual = '中近景锁住小王胸口以上和少量豆架背景，种盆留在画面左下方可辨；人物脸、白色叠穿、银色吊坠和左手回收动作清楚，背景只保留同一菜地的竹架与土沟。'
shot17.action = '三秒半只完成一次收手和一次视线落向种盆：右手从藤边收回，目光向左下落到种盆后停住；镜头只做几厘米极慢推进，不突然拉近、不变成大特写。'
shot17.output = 'generated/video/raw/shot_17_h3_v02.mp4'
shot17.prompt = shot17.prompt.replace(
  '[Shot 1] An eye-level medium close-up pushes in with small amplitude at slow speed. <Subject 1> pulls his hand back. His gaze moves once to the basin and holds. Brows gathered, lips closed, breath shallow. Mild three-quarter. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable faces and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.',
  '[Shot 1] An eye-level medium close-up holds the same framing for the entire clip, allowing only a very small slow push of a few centimeters. <Subject 1> remains chest-up with a little bean trellis and the pale enamel basin at lower screen-left still recognizable. He withdraws his right hand once from the vine, then moves his gaze once down-left to the basin and holds it. The camera must not zoom from full body to close-up, must not rush forward, and must not change to a wide shot. Brows gathered, lips closed, breath shallow, mild three-quarter view. Eyelids remain open, irises and pupils stay readable, with at most one slow natural blink. Stable face and hands, coherent clothing, no flickering eyes, no facial warping, no extra limbs, no on-screen text, no logos.'
)
shot17.promptZh = shot17.promptZh.replace(
  '[镜头 1] 平视中近景以小幅度慢速推近。<主体 1>收回手。目光向种盆移动后停住。眉间微收，闭唇，呼吸浅。轻微三分之二侧面。眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。',
  '[镜头 1] 平视中近景全程保持同一构图，只允许几厘米幅度的极慢推进。<主体 1>始终保持胸口以上，画面左下方的浅色搪瓷种盆和少量豆架仍清楚可认。他从藤边一次收回右手，再把目光向左下移到种盆并停住。禁止从全身突然推进成大特写，禁止快速前冲，禁止变成大全景或突然换景别。眉间微收，闭唇，呼吸浅，轻微三分之二侧面。眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。'
)

const shot19 = data.shots.find((shot) => shot.id === '19')
shot19.camera = '略俯手部近景，中长焦，浅景深；从第一帧起严格裁在肩膀以下，只做极小幅度慢速下摇到竹匾，不出现脸或完整人物。'
shot19.visual = '手腕、白色衣摆、黑表、竹匾提手和装满长豆的竹匾占据画面；构图从第一帧起低于肩膀，脸、头、胸口以上和完整人物始终在画外。'
shot19.action = '两秒半只完成一次极小幅度下摇：手腕提着变沉的竹匾，竹柄轻微下弯，镜头从手腕移到满篮长豆；不先展示全身或脸。'
shot19.output = 'generated/video/raw/shot_19_h3_v02.mp4'
shot19.prompt = shot19.prompt.replace(
  '[Shot 1] A slightly high close shot tilts down with small amplitude at slow speed from <Subject 1>\'s wrist to the full basket of long beans. The bamboo handle bends slightly under the weight. No face.',
  '[Shot 1] From the very first frame, the camera is already in a tight slightly high close-up framed strictly below the shoulders. Only <Subject 1>\'s wrist, black watch, lower white shirt, bamboo handle, and the full basket of long beans are visible. The camera makes only a tiny slow downward tilt of a few centimeters from the wrist to the basket; the face, head, shoulders, chest and full body never enter the frame. The bamboo handle bends slightly under the weight. No portrait, no wide opening, no sudden zoom, no extra hands, no duplicate basket, no morphing, no text, no logos.'
)
shot19.promptZh = shot19.promptZh.replace(
  '[镜头 1] 略俯近景从小幅度慢速下摇，从<主体 1>的手腕到装满长豆的篮子。竹梁因重量微微弯。没有脸。 眼皮若在画内则保持睁开，虹膜与瞳孔可读，最多一次慢眨眼。不得脸部变形、多余肢体、画面文字或商标。',
  '[镜头 1] 从第一帧起就是略俯手部紧特写，构图严格裁在肩膀以下。画面只出现<主体 1>的手腕、黑表、白色衣摆、竹匾提手和装满长豆的竹匾。镜头只从手腕向竹匾做几厘米幅度的极小幅度慢速下摇；脸、头、肩膀、胸口和完整人物始终不入画。竹柄因重量微微弯曲。禁止肖像、大全景开场、突然推近、额外手、重复竹匾、变形、画面文字或商标。'
)

fs.writeFileSync(songPath, JSON.stringify(data, null, 2) + '\n')
let markdown = fs.readFileSync(promptPath, 'utf8')
function section(shot) {
  return [`## ${shot.id} · ${shot.start}–${shot.end} · ${shot.shot}`, '', `- 场景引用：${shot.sceneReferenceIds.join('、')}`, `- 出镜人物：${shot.subjects.join('、')}`, `- 生成类型：${shot.genMode}`, `- 输出：\`${shot.output}\``, '', '### English H3 prompt', '', '```text', shot.prompt, '```', '', '### 中文对照提示词', '', '```text', shot.promptZh, '```', ''].join('\n')
}
for (const shot of [shot06, shot09, shot56, shot10, shot12, shot15, shot17, shot19]) {
  const pattern = new RegExp(`## ${shot.id} ·[\\s\\S]*?(?=\\n## |$)`)
  markdown = markdown.replace(pattern, section(shot))
}
fs.writeFileSync(promptPath, markdown)
