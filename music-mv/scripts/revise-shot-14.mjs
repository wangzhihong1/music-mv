import fs from 'node:fs'

const songPath = 'D:/MusicMV/music-mv/songs/20260914-hometown/song.json'
const promptPath = 'D:/MusicMV/music-mv/songs/20260914-hometown/08-mv-prompts.md'
const data = JSON.parse(fs.readFileSync(songPath, 'utf8'))
const shot = data.shots.find((item) => item.id === '14')

shot.action = '视线落到左行之后，只有一条右前臂和一只右手从画面右下侧缓慢伸向稀疏藤蔓；手在目标短豆的右下方外侧就停住，最后仍保留至少一掌的清晰空隙，手指完全张开，掌心朝上但不进入豆角下方，整镜绝不接触、不托住、不捏住，马上把真正的触碰交给下一镜。'
shot.visual = '略俯手部近景，严格单人手部插入。短豆固定在画面左上至中央，只有小王的一条右前臂、乳白色短袖袖口、右腕细手链和一只右手从右下侧入画；画面不出现小王的躯干、胸口、腿、鞋、脸或第二个人。手与短豆分处两个区域，中间有连续的土色背景空隙，手指张开，不托在豆角下面，不出现盆边。'
shot.camera = '略俯手部近景，中长焦；holds a nearly static shot with only a small slow drift toward the vine。画面严格裁在手肘以下，只拍单条右前臂、右手、藤蔓和短豆，排除所有人物躯干与腿。'
shot.transition = '从镜13的目光切到同一行藤蔓；镜14只完成伸手和停住，镜15硬切到更近的手指接触。'
shot.output = 'generated/video/raw/shot_14_h3_v07.mp4'
shot.referenceImages = ['assets/characters/maleLead_three_view_sheet.png', 'assets/scenes/field_west_end_v11_candidate.png']
shot.prompt = `subject_definitions:
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
N/A`
shot.promptZh = `主体定义:
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
N/A`

fs.writeFileSync(songPath, JSON.stringify(data, null, 2) + '\n')
let markdown = fs.readFileSync(promptPath, 'utf8')
const section = [`## ${shot.id} · ${shot.start}–${shot.end} · ${shot.shot}`, '', `- 场景引用：${shot.sceneReferenceIds.join('、')}`, `- 出镜人物：${shot.subjects.join('、')}`, `- 生成类型：${shot.genMode}`, `- 输出：\`${shot.output}\``, '', '### English H3 prompt', '', '```text', shot.prompt, '```', '', '### 中文对照提示词', '', '```text', shot.promptZh, '```', ''].join('\n')
markdown = markdown.replace(/## 14 ·[\s\S]*?(?=\n## |$)/, section)
fs.writeFileSync(promptPath, markdown)
