import { readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PATHS } from '../shared/paths.js'
import { GENERATED_PROMPT_MARKER, renderMvPrompts } from '../shared/render-mv-prompts.js'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const songsRoot = path.join(projectRoot, PATHS.songs)
const charactersRoot = path.join(projectRoot, 'characters')

function parseArgs(args) {
  const options = { slugs: [], all: false, check: false, preview: false, replaceExisting: false }
  for (let index = 0; index < args.length; index += 1) {
    const token = args[index]
    if (token === '--slug') {
      const slug = args[index + 1]
      if (!slug || !/^\d{8}-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        throw new Error('--slug 必须是 YYYYMMDD-english-slug 格式的歌曲目录名')
      }
      options.slugs.push(slug)
      index += 1
    } else if (token === '--all') {
      options.all = true
    } else if (token === '--check') {
      options.check = true
    } else if (token === '--preview') {
      options.preview = true
    } else if (token === '--replace-existing') {
      options.replaceExisting = true
    } else if (token === '--help' || token === '-h') {
      options.help = true
    } else {
      throw new Error(`无法识别的选项：${token}`)
    }
  }
  if (!options.help && options.all === (options.slugs.length > 0)) {
    throw new Error('请提供一个或多个 --slug，或使用 --all。')
  }
  if ((options.check && options.replaceExisting) || (options.preview && (options.check || options.replaceExisting))) {
    throw new Error('--check、--preview 和 --replace-existing 不能组合使用。')
  }
  if (options.preview && (options.all || options.slugs.length !== 1)) {
    throw new Error('--preview 仅支持一个 --slug。')
  }
  if (options.replaceExisting && (options.all || options.slugs.length !== 1)) {
    throw new Error('--replace-existing 仅支持一个 --slug，避免批量覆盖手写文档。')
  }
  return options
}

async function loadLinkedCharacters(songFolder) {
  let entries = []
  try {
    entries = await readdir(charactersRoot, { withFileTypes: true })
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }

  const songId = `songs/${songFolder}`
  const characters = []
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const characterPath = path.join(charactersRoot, entry.name, 'character.json')
    let character
    try {
      character = JSON.parse(await readFile(characterPath, 'utf8'))
    } catch (error) {
      if (error.code === 'ENOENT') continue
      throw new Error(`characters/${entry.name}/character.json 无法读取：${error.message}`)
    }
    if (!(character.works || []).some((work) => work?.songId === songId)) continue
    const threeView = String(character.look?.threeView || '').replace(/\\/g, '/')
    characters.push({
      id: character.id || entry.name,
      name: character.name || character.id || entry.name,
      threeView: threeView ? `characters/${entry.name}/${threeView}` : '',
    })
  }
  return characters
}

async function renderOne(songFolder, { check, preview, replaceExisting }) {
  const songPath = path.join(songsRoot, songFolder, 'song.json')
  const outputPath = path.join(songsRoot, songFolder, '08-mv-prompts.md')
  const song = JSON.parse(await readFile(songPath, 'utf8'))
  let existing = ''
  try {
    existing = await readFile(outputPath, 'utf8')
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }

  if (existing && !existing.includes(GENERATED_PROMPT_MARKER) && !replaceExisting && !preview) {
    process.stdout.write(`跳过旧版手写文档：songs/${songFolder}/08-mv-prompts.md（迁移需显式传 --replace-existing）\n`)
    return { skipped: true, stale: false }
  }

  const characters = await loadLinkedCharacters(songFolder)
  const rendered = renderMvPrompts(song, songFolder, characters)
  if (preview) {
    process.stdout.write(rendered)
    return { skipped: false, stale: false }
  }
  if (check) {
    if (existing !== rendered) {
      process.stderr.write(`生成文档已过期：songs/${songFolder}/08-mv-prompts.md\n`)
      return { skipped: false, stale: true }
    }
    process.stdout.write(`生成文档最新：songs/${songFolder}/08-mv-prompts.md\n`)
    return { skipped: false, stale: false }
  }

  await writeFile(outputPath, rendered, 'utf8')
  process.stdout.write(`已生成：songs/${songFolder}/08-mv-prompts.md\n`)
  return { skipped: false, stale: false }
}

function printUsage() {
  process.stdout.write(`用法：
  npm run render:mv-prompts -- --slug YYYYMMDD-song-slug
  npm run render:mv-prompts -- --all
  npm run render:mv-prompts -- --slug YYYYMMDD-song-slug --check
  npm run render:mv-prompts -- --slug YYYYMMDD-song-slug --preview

旧版未标记的手写文档默认跳过；先 --preview，再显式传 --replace-existing 才会覆盖。
`)
}

try {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    printUsage()
    process.exit(0)
  }

  const slugs = options.all
    ? (await readdir(songsRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory()).map((entry) => entry.name)
    : [...new Set(options.slugs)]
  let staleCount = 0
  for (const slug of slugs) {
    const result = await renderOne(slug, options)
    if (result.stale) staleCount += 1
  }
  if (staleCount > 0) process.exitCode = 1
} catch (error) {
  process.stderr.write(`${error.message}\n`)
  process.exitCode = 1
}
