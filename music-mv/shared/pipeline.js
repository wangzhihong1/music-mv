export const PIPELINE_STAGES = [
  { id: 'brief', label: '企划', kicker: '01 · Brief' },
  { id: 'style', label: '风格', kicker: '02 · Style' },
  { id: 'lyrics', label: '歌词', kicker: '03 · Lyrics' },
  { id: 'prompts', label: '提示词', kicker: '04 · Prompts' },
  { id: 'mv-story', label: 'MV 故事', kicker: '06 · Story' },
  { id: 'mv-script', label: 'MV 脚本', kicker: '07 · Script' },
  { id: 'keyframes', label: '关键帧', kicker: 'Keyframes' },
  { id: 'video', label: '镜头生成', kicker: 'H3 Video' },
  { id: 'post', label: '修复超分', kicker: 'Post' },
  { id: 'delivery', label: '成片', kicker: 'Delivery' },
]

const STORY_STATUS = {
  not_started: 'not_started',
  paused: 'paused',
  in_progress: 'in_progress',
  confirmed: 'complete',
}

const SCRIPT_STATUS = {
  not_started: 'not_started',
  draft: 'in_progress',
  complete: 'complete',
}

function hasText(value) {
  return Boolean(String(value || '').trim())
}

export function derivePipeline(song = {}) {
  const hasBrief = hasText(song.coreStatement)
  const hasStyle = hasText(song.metadata?.genre)
  const hasLyrics = (song.sections || []).some((section) => (section.lyrics || []).length > 0)
  const hasPrompts = (song.prompts || []).some((item) => hasText(item.zh) || hasText(item.en))
  const production = song.production || {}

  const stages = PIPELINE_STAGES.map((stage) => {
    let status = 'not_started'

    switch (stage.id) {
      case 'brief':
        status = hasBrief ? 'complete' : 'not_started'
        break
      case 'style':
        status = hasStyle ? 'complete' : hasBrief ? 'in_progress' : 'not_started'
        break
      case 'lyrics':
        status = hasLyrics ? 'complete' : hasStyle ? 'in_progress' : 'not_started'
        break
      case 'prompts':
        status = hasPrompts ? 'complete' : hasLyrics ? 'in_progress' : 'not_started'
        break
      case 'mv-story':
        status = STORY_STATUS[song.mvWorkflow?.storyStatus] || 'not_started'
        if (status === 'not_started' && hasText(song.mvStory?.summary)) status = 'in_progress'
        break
      case 'mv-script':
        status = SCRIPT_STATUS[song.mvWorkflow?.scriptStatus] || 'not_started'
        if (status === 'not_started' && (song.shots || []).length > 0) status = 'in_progress'
        break
      case 'keyframes':
        status = production.keyframes || 'not_started'
        break
      case 'video':
        status = production.video || 'not_started'
        break
      case 'post':
        status = production.post || 'not_started'
        break
      case 'delivery':
        status = production.delivery || 'not_started'
        break
      default:
        break
    }

    return { ...stage, status }
  })

  const current = stages.find((stage) => !['complete', 'skipped'].includes(stage.status)) || stages.at(-1)

  return {
    stages,
    currentStage: current?.id || 'brief',
  }
}
