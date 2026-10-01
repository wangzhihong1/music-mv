export const PIPELINE_STAGES = [
  { id: 'brief', label: '企划', kicker: '01 · Brief' },
  { id: 'style', label: '风格', kicker: '02 · Style' },
  { id: 'lyrics', label: '歌词', kicker: '03 · Lyrics' },
  { id: 'prompts', label: '提示词', kicker: '04 · Prompts' },
  { id: 'mv-story', label: 'MV 故事', kicker: '06 · Story' },
  { id: 'mv-script', label: '脚本骨架', kicker: '07 · Script Skeleton' },
  { id: 'visual-references', label: '人物/场景基准图', kicker: 'Visual References' },
  { id: 'mv-prompts', label: '最终分镜提示词', kicker: '08 · H3 Prompts' },
  { id: 'shot-videos', label: '分镜视频', kicker: 'H3 Shots' },
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

function normalizeStatus(value) {
  const status = String(value || '').split(';')[0].trim()
  if (status === 'confirmed') return 'complete'
  return ['not_started', 'draft', 'in_progress', 'complete', 'paused', 'skipped'].includes(status)
    ? SCRIPT_STATUS[status] || status
    : 'not_started'
}

function hasText(value) {
  return Boolean(String(value || '').trim())
}

export function derivePipeline(song = {}) {
  const hasBrief = hasText(song.coreStatement)
  const hasStyle = hasText(song.metadata?.genre)
  const hasLyrics = (song.sections || []).some((section) => (section.lyrics || []).length > 0)
  const hasPrompts = (song.prompts || []).some((item) => hasText(item.zh) || hasText(item.en))
  const hasCharacterLooks = (song.characterLooks || []).some((item) => hasText(item.zh) || hasText(item.en))
  const hasShotPrompts = (song.shots || []).some((shot) => hasText(shot.prompt) || hasText(shot.promptZh))
  const production = song.production || {}
  const workflow = song.mvWorkflow || {}
  const legacyScriptStatus = workflow.scriptStatus

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
        status = normalizeStatus(workflow.scriptSkeletonStatus || legacyScriptStatus)
        if (status === 'not_started' && (song.shots || []).length > 0) status = 'in_progress'
        break
      case 'visual-references':
        status = normalizeStatus(
          workflow.visualReferencesStatus || production.characterReferences || production.keyframes,
        )
        if (status === 'not_started' && hasCharacterLooks) status = 'in_progress'
        break
      case 'mv-prompts':
        status = normalizeStatus(workflow.promptStatus || legacyScriptStatus)
        if (status === 'not_started' && hasShotPrompts) status = 'in_progress'
        break
      case 'shot-videos':
        status = production.shotVideos || production.video || 'not_started'
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
