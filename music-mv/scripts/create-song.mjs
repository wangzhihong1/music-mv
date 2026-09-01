import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { PATHS, SONG_COLLECTIONS, SONG_DOCUMENTS } from '../shared/paths.js'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const inProgressRoot = path.join(projectRoot, SONG_COLLECTIONS[0].directory)
const templateRoot = path.join(projectRoot, PATHS.templates)

function printUsage(stream = process.stdout) {
  stream.write(`用法：
  npm run create-song -- "Song Title"
  npm run create-song -- --title "歌名" --slug "english-slug"
  npm run create-song -- --title "歌名" --slug "english-slug" --brief "创作描述"
`)
}

function toSlug(value) {
  return String(value || '')
    .normalize('NFKD')
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0)
      if (code >= 48 && code <= 57) return char
      if (code >= 65 && code <= 90) return String.fromCharCode(code + 32)
      if (code >= 97 && code <= 122) return char
      return '-'
    })
    .join('')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function parseArgs(argv) {
  const options = {
    title: '',
    slug: '',
    brief: '',
  }
  const positional = []

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index]
    if (token === '--title' || token === '-n' || token === '--歌名') {
      options.title = argv[index + 1] || ''
      index += 1
    } else if (token === '--slug' || token === '-s') {
      options.slug = argv[index + 1] || ''
      index += 1
    } else if (token === '--brief' || token === '-d' || token === '--描述') {
      options.brief = argv[index + 1] || ''
      index += 1
    } else if (token === '--help' || token === '-h' || token === '--帮助') {
      options.help = true
    } else if (token.startsWith('-')) {
      throw new Error(`无法识别的选项：${token}`)
    } else {
      positional.push(token)
    }
  }

  if (positional.length > 0) {
    if (options.title || options.brief) {
      throw new Error('直接输入歌名时，请不要与 --title 或 --brief 混用。')
    }
    options.title = positional.join(' ')
  }

  return options
}

async function pathExists(target) {
  try {
    await readdir(target)
    return true
  } catch (error) {
    if (error.code === 'ENOENT') return false
    if (error.code === 'ENOTDIR') return true
    throw error
  }
}

async function fileExists(target) {
  try {
    await readFile(target)
    return true
  } catch (error) {
    if (error.code === 'ENOENT') return false
    throw error
  }
}

function replacePlaceholders(source, values) {
  return source
    .replaceAll('{{title}}', values.title)
    .replaceAll('{{date}}', values.date)
    .replaceAll('{{brief}}', values.brief)
    .replaceAll('{{slug}}', values.slug)
    .replaceAll('{{歌名}}', values.title)
    .replaceAll('{{日期}}', values.date)
    .replaceAll('{{创作描述}}', values.brief)
}

function runNode(scriptPath, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [scriptPath, ...args], { stdio: 'inherit' })
    child.on('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${path.basename(scriptPath)} 退出码 ${code}`))
    })
  })
}

try {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    printUsage()
    process.exit(0)
  }

  let title = options.title.trim()
  let slug = toSlug(options.slug || title)
  const usingPlaceholder = !title
  const brief = options.brief.trim() || '（未提供，可后续补充）'

  if (!title && !options.brief.trim()) {
    printUsage(process.stderr)
    process.exit(1)
  }

  if (!title) title = '未命名歌曲'
  if (!slug) {
    slug = 'untitled'
    process.stderr.write('未提供英文 slug，文件夹将使用 untitled。请使用 --slug 指定。\n')
  }

  if (title.includes('/') || title.includes('\n')) {
    throw new Error('歌名不能包含斜杠或换行。')
  }

  const datePrefix = new Date().toISOString().slice(0, 10).replaceAll('-', '')
  let folderName = `${datePrefix}-${slug}`
  let targetDir = path.join(inProgressRoot, folderName)

  if (await pathExists(targetDir)) {
    if (!usingPlaceholder && slug !== 'untitled') {
      throw new Error(`歌曲文件夹已存在：${path.relative(projectRoot, targetDir)}`)
    }

    let serial = 2
    while (await pathExists(targetDir)) {
      slug = `untitled-${String(serial).padStart(2, '0')}`
      folderName = `${datePrefix}-${slug}`
      targetDir = path.join(inProgressRoot, folderName)
      serial += 1
    }
  }

  await mkdir(path.join(targetDir, 'references'), { recursive: true })

  for (const documentName of SONG_DOCUMENTS) {
    const templatePath = path.join(templateRoot, documentName)
    const outputPath = path.join(targetDir, documentName)
    const template = await readFile(templatePath, 'utf8')
    await writeFile(outputPath, replacePlaceholders(template, {
      title,
      date: datePrefix,
      brief,
      slug,
    }), 'utf8')
  }

  await runNode(path.join(projectRoot, 'scripts/create-song-json.mjs'), [
    path.join(targetDir, 'song.json'),
    title,
    datePrefix,
    brief,
    slug,
  ])

  if (!(await fileExists(path.join(targetDir, 'song.json')))) {
    throw new Error('未能写入 song.json')
  }

  process.stdout.write(`已创建：${path.relative(projectRoot, targetDir)}\n`)
} catch (error) {
  process.stderr.write(`${error.message}\n`)
  process.exit(1)
}
