import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PATHS } from '../shared/paths.js'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const songsRoot = path.join(projectRoot, PATHS.songs)

function parseArgs(args) {
  const options = { slug: '', mode: 'summary', includePrompts: false, fields: [] }
  for (let index = 0; index < args.length; index += 1) {
    const token = args[index]
    if (token === '--slug') {
      options.slug = args[index + 1] || ''
      index += 1
    } else if (token === '--summary') {
      if (options.mode !== 'summary') throw new Error('只能选择一种查询类型。')
      options.mode = 'summary'
    } else if (token === '--section' || token === '--shot' || token === '--field') {
      const value = args[index + 1]
      if (!value) throw new Error(`${token} 后需要编号或字段路径`)
      if (options.mode !== 'summary') throw new Error('只能选择一种查询类型。')
      options.mode = token.slice(2)
      options.value = value
      index += 1
    } else if (token === '--prompts') {
      options.includePrompts = true
    } else if (token === '--only') {
      const value = args[index + 1]
      if (!value) throw new Error('--only 后需要逗号分隔的字段名')
      options.fields = value.split(',').map((field) => field.trim()).filter(Boolean)
      if (!options.fields.length) throw new Error('--only 至少需要一个字段名')
      index += 1
    } else if (token === '--help' || token === '-h') {
      options.help = true
    } else {
      throw new Error(`无法识别的选项：${token}`)
    }
  }
  if (!options.help && !/^\d{8}-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(options.slug)) {
    throw new Error('--slug 必须是 YYYYMMDD-english-slug 格式的歌曲目录名')
  }
  if (options.includePrompts && options.mode !== 'shot') {
    throw new Error('--prompts 只能与 --shot 一起使用。')
  }
  if (options.fields.length && !['section', 'shot'].includes(options.mode)) {
    throw new Error('--only 只能与 --section 或 --shot 一起使用。')
  }
  if (new Set(options.fields).size !== options.fields.length) {
    throw new Error('--only 字段不能重复。')
  }
  return options
}

function printSummary(song, slug) {
  const workflow = song.mvWorkflow || {}
  const shots = Array.isArray(song.shots) ? song.shots : []
  const sections = Array.isArray(song.sections) ? song.sections : []
  const scenes = Array.isArray(song.sceneReferences) ? song.sceneReferences : []
  const lines = [
    `歌曲：${song.title || song.slug || slug}`,
    `目录：songs/${slug}`,
    `状态：${song.lifecycle || 'unknown'} / ${song.status || ''}`,
    `时长：${song.metadata?.duration || '未填写'}；曲风：${song.metadata?.genre || '未填写'}；情绪：${song.metadata?.mood || '未填写'}`,
    `MV 状态：故事 ${workflow.storyStatus || '未开始'}；时长确认 ${workflow.durationConfirmed === true ? '是' : '否'}；脚本 ${workflow.scriptSkeletonStatus || workflow.scriptStatus || '未开始'}；视觉 ${workflow.visualReferencesStatus || '未开始'}；提示词 ${workflow.promptStatus || '未开始'}`,
    `数据规模：${sections.length} 个歌词段落；${shots.length} 个分镜；${scenes.length} 个场景基准图`,
  ]
  process.stdout.write(`${lines.join('\n')}\n`)
}

function getField(song, fieldPath) {
  const segments = fieldPath.split('.')
  if (segments.some((segment) => !segment || ['__proto__', 'prototype', 'constructor'].includes(segment))) {
    throw new Error('字段路径无效。')
  }
  let value = song
  for (const segment of segments) {
    if (value === null || typeof value !== 'object' || !Object.hasOwn(value, segment)) return undefined
    value = value[segment]
  }
  return value
}

function printJson(value) {
  if (value === undefined) throw new Error('未找到对应数据。')
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`)
}

function selectFields(value, fields) {
  if (!fields.length) return value
  const selected = {}
  for (const field of fields) {
    if (!Object.hasOwn(value, field)) throw new Error(`未找到字段：${field}`)
    selected[field] = value[field]
  }
  return selected
}

function printUsage() {
  process.stdout.write(`用法：
  npm run inspect:song -- --slug YYYYMMDD-song-slug
  npm run inspect:song -- --slug YYYYMMDD-song-slug --summary
  npm run inspect:song -- --slug YYYYMMDD-song-slug --section chorus1
  npm run inspect:song -- --slug YYYYMMDD-song-slug --shot 03
  npm run inspect:song -- --slug YYYYMMDD-song-slug --shot 03 --only start,end,visual,action
  npm run inspect:song -- --slug YYYYMMDD-song-slug --section chorus1 --only time,lyrics
  npm run inspect:song -- --slug YYYYMMDD-song-slug --shot 03 --prompts
  npm run inspect:song -- --slug YYYYMMDD-song-slug --field metadata.duration

默认只输出摘要；镜头提示词必须显式使用 --prompts。--only 可选取段落或分镜字段。
`)
}

try {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    printUsage()
    process.exit(0)
  }

  const songPath = path.join(songsRoot, options.slug, 'song.json')
  const song = JSON.parse(await readFile(songPath, 'utf8'))
  if (options.mode === 'summary') {
    printSummary(song, options.slug)
  } else if (options.mode === 'section') {
    const section = song.sections?.find((item) => item.id === options.value)
    printJson(section === undefined ? undefined : selectFields(section, options.fields))
  } else if (options.mode === 'shot') {
    const shot = song.shots?.find((item) => String(item.id) === options.value)
    if (!shot) throw new Error(`未找到分镜：${options.value}`)
    if (options.includePrompts) {
      printJson(selectFields(shot, options.fields))
    } else {
      const { prompt, promptZh, ...summaryShot } = shot
      printJson(selectFields(summaryShot, options.fields))
    }
  } else {
    printJson(getField(song, options.value))
  }
} catch (error) {
  process.stderr.write(`${error.message}\n`)
  process.exitCode = 1
}
