export function joinLyrics(sections = []) {
  return sections
    .map((section) => `[${section.label}]\n${(section.lyrics || []).join('\n')}`)
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
  if (song.mvWorkflow?.scriptStatus === 'complete') {
    return `${shotCount} 镜 · 完整覆盖 ${song.metadata?.duration || ''}`
  }
  if (!song.mvWorkflow?.durationConfirmed) {
    return `${shotCount} 镜 · 示例草稿 · 时长待确认`
  }
  return `${shotCount} 镜 · 草稿累计 ${totalDurationLabel}`
}
