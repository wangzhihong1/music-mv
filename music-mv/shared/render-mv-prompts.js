export const GENERATED_PROMPT_MARKER = '<!-- Generated from song.json by npm run render:mv-prompts. Do not edit directly. -->'

function cell(value) {
  return String(value || '').replaceAll('|', '\\|').replaceAll('\n', ' ')
}

function renderReferenceTable(title, rows, columns, emptyText) {
  const lines = [`### ${title}`, '', `| ${columns.map(([, label]) => label).join(' | ')} |`, `| ${columns.map(() => '---').join(' | ')} |`]
  if (rows.length === 0) {
    lines.push(`| ${columns.map((_, index) => index === 0 ? emptyText : '').join(' | ')} |`)
  } else {
    for (const row of rows) lines.push(`| ${columns.map(([key]) => cell(row[key])).join(' | ')} |`)
  }
  return lines.join('\n')
}

export function renderMvPrompts(song, songFolder, linkedCharacters = []) {
  const sceneReferences = Array.isArray(song.sceneReferences) ? song.sceneReferences : []
  const shots = Array.isArray(song.shots) ? song.shots : []
  const lines = [
    `# 《${song.title || song.slug || songFolder}》最终分镜提示词`,
    '',
    GENERATED_PROMPT_MARKER,
    '',
    `- 歌曲目录：\`songs/${songFolder}/\``,
    `- 脚本骨架：\`${song.mvWorkflow?.scriptSkeletonStatus || 'not_started'}\``,
    `- 视觉基准：\`${song.mvWorkflow?.visualReferencesStatus || 'not_started'}\``,
    `- 提示词状态：\`${song.mvWorkflow?.promptStatus || 'not_started'}\``,
    '',
    '## 视觉基准清单',
    '',
    renderReferenceTable('人物参考图', linkedCharacters.map((character) => ({
      id: character.id,
      name: character.name,
      path: character.threeView,
    })), [['id', '角色 ID'], ['name', '角色'], ['path', '三视图']], '暂无已关联人物'),
    '',
    renderReferenceTable('场景基准图', sceneReferences, [
      ['id', '场景 ID'], ['name', '名称'], ['path', '路径'], ['status', '状态'], ['description', '锁定说明'],
    ], '暂无场景基准图'),
    '',
    '## 逐镜最终提示词',
    '',
  ]

  if (shots.length === 0) lines.push('暂无分镜提示词。')

  for (const [index, shot] of shots.entries()) {
    const title = shot.shot || shot.id || `镜头 ${index + 1}`
    lines.push(
      `### ${String(shot.id || index + 1).padStart(2, '0')}　${shot.start || '--:--'}–${shot.end || '--:--'}　${title}`,
      '',
      `- 出镜人物 ID：${(shot.subjects || []).join(', ') || '无'}`,
      `- 场景基准图 ID：${(shot.sceneReferenceIds || []).join(', ') || '无'}`,
      `- 生成类型：\`${shot.genMode || ''}\``,
      `- 输出视频：\`${shot.output || ''}\``,
    )
    if (Array.isArray(shot.referenceOrder) && shot.referenceOrder.length > 0) {
      lines.push('- 图片顺序：', ...shot.referenceOrder.map((item) => `  - ${item}`))
    }
    lines.push(
      '',
      '- H3 英文提示词（`prompt`）：',
      '',
      '````text',
      String(shot.prompt || ''),
      '````',
      '',
      '- 中文完整对照（`promptZh`）：',
      '',
      '````text',
      String(shot.promptZh || ''),
      '````',
      '',
    )
  }

  return `${lines.join('\n').trimEnd()}\n`
}
