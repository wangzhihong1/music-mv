export const PATHS = {
  inspiration: 'inspiration',
  library: 'library',
  templates: 'templates/song',
  songs: 'songs',
}

export const SONG_LIFECYCLES = [
  {
    id: 'in-progress',
    label: 'In Progress',
    labelZh: '创作中',
  },
  {
    id: 'completed',
    label: 'Completed',
    labelZh: '已完成',
  },
]

export const SONG_DOCUMENTS = [
  '01-brief.md',
  '02-style.md',
  '03-lyrics.md',
  '04-prompts.md',
  '05-production-log.md',
  '06-mv-story.md',
  '07-mv-script.md',
  '08-checklist.md',
  '09-release.md',
]

export function songLifecycle(song) {
  return song?.lifecycle === 'completed' ? 'completed' : 'in-progress'
}

export function songLifecycleLabel(song) {
  const lifecycle = songLifecycle(song)
  return SONG_LIFECYCLES.find((item) => item.id === lifecycle)?.labelZh || '创作中'
}
