export function lyricsToText(lyrics = []) {
  return (lyrics || []).join('\n')
}

export function textToLyrics(text = '') {
  const normalized = String(text).replace(/\r\n/g, '\n').replace(/\r/g, '').replace(/\n+$/, '')
  if (!normalized) return []
  return normalized.split('\n')
}

export function joinLyrics(sections = []) {
  return sections
    .map((section) => `[${section.label}]\n${lyricsToText(section.lyrics)}`)
    .join('\n\n')
}

export function joinPrompts(prompts = [], language = 'zh') {
  return prompts
    .map((item) => `${item.label}：${item[language] || ''}`)
    .join('\n\n')
}

export function metadataFacts(song, fields) {
  return fields
    .map(([label, key]) => [label, song.metadata?.[key]])
    .filter(([, value]) => value)
}

export function sectionForShot(sections = [], shot) {
  return sections.find((section) => section.id === shot.sectionId) || {
    id: shot.sectionId,
    label: shot.sectionId || '未关联段落',
    lyrics: [],
  }
}

export function scriptSummary(song, shotCount, totalDurationLabel) {
  const status = song.mvWorkflow?.scriptSkeletonStatus || song.mvWorkflow?.scriptStatus
  if (status === 'complete') {
    return `${shotCount} 镜 · 完整覆盖 ${song.metadata?.duration || ''}`
  }
  if (!song.mvWorkflow?.durationConfirmed) {
    return `${shotCount} 镜 · 示例草稿 · 时长待确认`
  }
  return `${shotCount} 镜 · 草稿累计 ${totalDurationLabel}`
}
