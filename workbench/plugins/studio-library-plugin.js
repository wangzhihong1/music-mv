import { Buffer } from 'node:buffer'
import { createReadStream } from 'node:fs'
import { readFile, readdir, stat, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { WORKSPACE_CHANGED_EVENT } from '../src/constants/workspace.js'
import { timeToSeconds } from '../src/lib/time.js'
import { attachProductions } from './studio-production.js'

const SONGS_DIRECTORY = 'songs'
const LIFECYCLE_LABELS = {
  'in-progress': '创作中',
  completed: '已完成',
}

const ARCHIVES = [
  { id: 'inspiration', directory: 'inspiration' },
  { id: 'library', directory: 'library' },
]

const MEDIA_TYPES = {
  '.mp4': 'video/mp4',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
}

export function resolveStudioRoot(workbenchRoot) {
  return path.resolve(workbenchRoot, '..', 'music-mv')
}

function isInsideStudio(studioRoot, targetPath) {
  const relativePath = path.relative(studioRoot, targetPath)
  return Boolean(relativePath) && !relativePath.startsWith('..') && !path.isAbsolute(relativePath)
}

async function listMarkdownFiles(studioRoot, directory) {
  const targetPath = path.join(studioRoot, directory)

  try {
    const entries = await readdir(targetPath, { withFileTypes: true })
    return entries
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.md'))
      .map((entry) => ({
        name: entry.name,
        path: `${directory}/${entry.name}`,
      }))
      .sort((left, right) => left.name.localeCompare(right.name))
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }
}

function songLifecycle(song) {
  return song.lifecycle === 'completed' ? 'completed' : 'in-progress'
}

async function readSong(studioRoot, folderName) {
  const dataPath = path.join(studioRoot, SONGS_DIRECTORY, folderName, 'song.json')

  try {
    const [source, fileStat] = await Promise.all([
      readFile(dataPath, 'utf8'),
      stat(dataPath),
    ])
    const song = JSON.parse(source)
    const lifecycle = songLifecycle(song)

    return {
      ...song,
      id: `${SONGS_DIRECTORY}/${folderName}`,
      slug: song.slug || folderName.replace(/^\d{8}-/, ''),
      folder: folderName,
      lifecycle,
      collectionId: lifecycle,
      collection: LIFECYCLE_LABELS[lifecycle],
      updatedAt: fileStat.mtime.toISOString(),
    }
  } catch (error) {
    if (error.code === 'ENOENT') return null
    throw new Error(`${dataPath}: ${error.message}`)
  }
}

async function scanSongs(studioRoot) {
  const songs = []
  const songsPath = path.join(studioRoot, SONGS_DIRECTORY)
  let entries = []

  try {
    entries = await readdir(songsPath, { withFileTypes: true })
  } catch (error) {
    if (error.code === 'ENOENT') return songs
    throw error
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const song = await readSong(studioRoot, entry.name)
    if (song) songs.push(song)
  }

  return songs.sort((left, right) => {
    const dateOrder = String(right.date || '').localeCompare(String(left.date || ''))
    if (dateOrder !== 0) return dateOrder
    return right.updatedAt.localeCompare(left.updatedAt)
  })
}

async function readLyricReferences(studioRoot) {
  const dataPath = path.join(studioRoot, 'library', 'lyric-references.json')

  try {
    const source = await readFile(dataPath, 'utf8')
    const entries = JSON.parse(source)
    if (!Array.isArray(entries)) return []
    return entries
      .filter((entry) => entry && typeof entry.title === 'string')
      .sort((left, right) => left.title.localeCompare(right.title, 'zh'))
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }
}

async function buildWorkspace(studioRoot) {
  const [rawSongs, inspiration, library, lyricReferences] = await Promise.all([
    scanSongs(studioRoot),
    listMarkdownFiles(studioRoot, 'inspiration'),
    listMarkdownFiles(studioRoot, 'library'),
    readLyricReferences(studioRoot),
  ])
  const songs = await attachProductions(studioRoot, rawSongs)

  return { songs, inspiration, library, lyricReferences }
}

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', 'no-store')
  response.end(JSON.stringify(payload))
}

const MAX_JSON_BODY_BYTES = 512 * 1024
const LYRICS_ROUTE = /^\/api\/songs\/([^/]+)\/lyrics$/
const SHORTS_ROUTE = /^\/api\/songs\/([^/]+)\/shorts$/
const SCENE_DELETE_ROUTE = /^\/api\/songs\/([^/]+)\/scenes\/([^/]+)$/
const SCENE_CONFIRM_ROUTE = /^\/api\/songs\/([^/]+)\/scenes\/confirm$/
const VOIDED_SHOT_DELETE_ROUTE = /^\/api\/songs\/([^/]+)\/raw-shots\/([^/]+)$/
const UPSCALE_DELETE_ROUTE = /^\/api\/songs\/([^/]+)\/intermediate\/([^/]+)$/

function isSafeFolderName(folderName) {
  return Boolean(folderName)
    && folderName !== '.'
    && folderName !== '..'
    && !folderName.includes('/')
    && !folderName.includes('\\')
    && !folderName.includes('\0')
}

function readJsonBody(request, maxBytes = MAX_JSON_BODY_BYTES) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    let settled = false

    function fail(error) {
      if (settled) return
      settled = true
      reject(error)
    }

    request.on('data', (chunk) => {
      size += chunk.length
      if (size > maxBytes) {
        const error = new Error('请求体过大')
        error.statusCode = 413
        fail(error)
        request.destroy()
        return
      }
      chunks.push(chunk)
    })
    request.on('end', () => {
      if (settled) return
      try {
        const raw = Buffer.concat(chunks).toString('utf8')
        settled = true
        resolve(raw ? JSON.parse(raw) : {})
      } catch {
        const error = new Error('请求体不是有效 JSON')
        error.statusCode = 400
        fail(error)
      }
    })
    request.on('error', fail)
  })
}

function applySectionLyrics(song, updates) {
  if (!Array.isArray(updates) || updates.length === 0) {
    const error = new Error('没有要保存的段落')
    error.statusCode = 400
    throw error
  }

  const sections = Array.isArray(song.sections) ? song.sections : []
  const byId = new Map(sections.map((section) => [section.id, section]))
  const seen = new Set()

  for (const update of updates) {
    if (!update || typeof update.id !== 'string' || !update.id) {
      const error = new Error('歌词段落编号无效')
      error.statusCode = 400
      throw error
    }
    if (seen.has(update.id)) {
      const error = new Error(`歌词段落重复：${update.id}`)
      error.statusCode = 400
      throw error
    }
    seen.add(update.id)

    const section = byId.get(update.id)
    if (!section) {
      const error = new Error(`找不到段落 ${update.id}`)
      error.statusCode = 400
      throw error
    }
    if (!Array.isArray(update.lyrics) || update.lyrics.some((line) => typeof line !== 'string')) {
      const error = new Error(`段落 ${update.id} 的歌词必须是字符串数组`)
      error.statusCode = 400
      throw error
    }

    section.lyrics = update.lyrics.map((line) => line.replace(/\r/g, ''))
  }
}

async function writeSongLyrics(studioRoot, request, response, folderName) {
  const decodedFolder = decodeURIComponent(folderName)
  if (!isSafeFolderName(decodedFolder)) {
    sendJson(response, 400, { error: '歌曲目录无效' })
    return
  }

  const dataPath = path.join(studioRoot, SONGS_DIRECTORY, decodedFolder, 'song.json')
  if (!isInsideStudio(studioRoot, dataPath)) {
    sendJson(response, 403, { error: '无权访问该文件' })
    return
  }

  let source
  try {
    source = await readFile(dataPath, 'utf8')
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendJson(response, 404, { error: '歌曲不存在' })
      return
    }
    throw error
  }

  let song
  try {
    song = JSON.parse(source)
  } catch {
    sendJson(response, 500, { error: '歌曲档案不是有效 JSON' })
    return
  }

  const payload = await readJsonBody(request)
  applySectionLyrics(song, payload.sections)
  await writeFile(dataPath, `${JSON.stringify(song, null, 2)}\n`, 'utf8')
  sendJson(response, 200, { ok: true })
}

function normalizeShortOutput(value) {
  const output = String(value || '').replace(/\\/g, '/').trim()
  if (!output) return ''
  if (!/^generated\/video\/final\/[A-Za-z0-9._-]+\.mp4$/.test(output)) {
    const error = new Error('短视频成片路径无效')
    error.statusCode = 400
    throw error
  }
  return output
}

function applyShorts(song, shorts) {
  if (!Array.isArray(shorts)) {
    const error = new Error('短视频列表无效')
    error.statusCode = 400
    throw error
  }
  if (shorts.length > 12) {
    const error = new Error('一首歌最多保留 12 条 Shorts')
    error.statusCode = 400
    throw error
  }

  const seen = new Set()
  song.shorts = shorts.map((item) => {
    if (!item || typeof item !== 'object') {
      const error = new Error('短视频条目无效')
      error.statusCode = 400
      throw error
    }
    const id = String(item.id || '').trim()
    if (!/^[a-z0-9-]{1,40}$/.test(id) || seen.has(id)) {
      const error = new Error('短视频编号无效或重复')
      error.statusCode = 400
      throw error
    }
    seen.add(id)

    const title = String(item.title || '').replace(/\r/g, '').trim()
    const start = String(item.start || '').trim()
    const end = String(item.end || '').trim()
    const startSeconds = timeToSeconds(start)
    const endSeconds = timeToSeconds(end)
    const duration = startSeconds === null || endSeconds === null
      ? null
      : Math.round((endSeconds - startSeconds) * 10) / 10
    if (!title || title.length > 100) {
      const error = new Error('短视频标题不能为空，且不能超过 100 字')
      error.statusCode = 400
      throw error
    }
    if (duration === null || duration < 1 || duration > 60) {
      const error = new Error('短视频时间须为 MM:SS，时长 1–60 秒')
      error.statusCode = 400
      throw error
    }

    const lyricCue = String(item.lyricCue || '').replace(/\r/g, '').trim()
    const note = String(item.note || '').replace(/\r/g, '').trim()
    const sectionId = String(item.sectionId || '').trim()
    if (lyricCue.length > 200 || note.length > 300 || sectionId.length > 80) {
      const error = new Error('短视频的歌词、备注或段落过长')
      error.statusCode = 400
      throw error
    }

    const saved = {
      id,
      title,
      start,
      end,
      sectionId,
      lyricCue,
      note,
      status: item.status === 'ready' ? 'ready' : 'draft',
    }
    const output = normalizeShortOutput(item.output)
    if (output) saved.output = output
    return saved
  })
}

async function writeSongShorts(studioRoot, request, response, folderName) {
  const decodedFolder = decodeURIComponent(folderName)
  if (!isSafeFolderName(decodedFolder)) {
    sendJson(response, 400, { error: '歌曲目录无效' })
    return
  }

  const dataPath = path.join(studioRoot, SONGS_DIRECTORY, decodedFolder, 'song.json')
  if (!isInsideStudio(studioRoot, dataPath)) {
    sendJson(response, 403, { error: '无权访问该文件' })
    return
  }

  let source
  try {
    source = await readFile(dataPath, 'utf8')
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendJson(response, 404, { error: '歌曲不存在' })
      return
    }
    throw error
  }

  let song
  try {
    song = JSON.parse(source)
  } catch {
    sendJson(response, 500, { error: '歌曲档案不是有效 JSON' })
    return
  }

  const payload = await readJsonBody(request)
  applyShorts(song, payload.shorts)
  await writeFile(dataPath, `${JSON.stringify(song, null, 2)}\n`, 'utf8')
  sendJson(response, 200, { ok: true })
}

async function deleteSceneImage(studioRoot, response, folderName, fileName) {
  let decodedFolder
  let decodedFile
  try {
    decodedFolder = decodeURIComponent(folderName)
    decodedFile = decodeURIComponent(fileName)
  } catch {
    sendJson(response, 400, { error: '场景图片路径无效' })
    return
  }

  if (!isSafeFolderName(decodedFolder) || !decodedFile || path.basename(decodedFile) !== decodedFile) {
    sendJson(response, 400, { error: '场景图片路径无效' })
    return
  }
  if (!/^\.(png|jpe?g|webp)$/i.test(path.extname(decodedFile))) {
    sendJson(response, 400, { error: '只能删除场景图片' })
    return
  }

  const targetPath = path.join(
    studioRoot,
    SONGS_DIRECTORY,
    decodedFolder,
    'assets',
    'scenes',
    decodedFile,
  )
  if (!isInsideStudio(studioRoot, targetPath)) {
    sendJson(response, 403, { error: '无权访问该文件' })
    return
  }

  const dataPath = path.join(studioRoot, SONGS_DIRECTORY, decodedFolder, 'song.json')

  try {
    await unlink(targetPath)
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendJson(response, 404, { error: '场景图片不存在' })
      return
    }
    throw error
  }

  try {
    const song = JSON.parse(await readFile(dataPath, 'utf8'))
    const deletedPath = `assets/scenes/${decodedFile}`
    song.sceneReferences = (song.sceneReferences || []).filter((reference) => {
      const referencePath = String(reference.path || '').replace(/\\/g, '/')
      return referencePath !== deletedPath && path.posix.basename(referencePath) !== decodedFile
    })
    const confirmedCount = song.sceneReferences.length
    if (confirmedCount < 4 && song.mvWorkflow?.visualReferencesStatus === 'confirmed') {
      song.mvWorkflow.visualReferencesStatus = 'in_progress'
    }
    await writeFile(dataPath, `${JSON.stringify(song, null, 2)}\n`, 'utf8')
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  sendJson(response, 200, { ok: true })
}

function shotNumberFromFileName(fileName) {
  const match = String(fileName).match(/^shot[_-]?0*(\d+)/i)
  return match ? Number(match[1]) : null
}

async function deleteVoidedShot(studioRoot, response, folderName, fileName) {
  let decodedFolder
  let decodedFile
  try {
    decodedFolder = decodeURIComponent(folderName)
    decodedFile = decodeURIComponent(fileName)
  } catch {
    sendJson(response, 400, { error: '分镜视频路径无效' })
    return
  }

  if (!isSafeFolderName(decodedFolder) || !decodedFile || path.basename(decodedFile) !== decodedFile) {
    sendJson(response, 400, { error: '分镜视频路径无效' })
    return
  }
  if (!/^\.mp4$/i.test(path.extname(decodedFile))) {
    sendJson(response, 400, { error: '只能删除 MP4 分镜视频' })
    return
  }

  const dataPath = path.join(studioRoot, SONGS_DIRECTORY, decodedFolder, 'song.json')
  const targetPath = path.join(studioRoot, SONGS_DIRECTORY, decodedFolder, 'generated', 'video', 'raw', decodedFile)
  if (!isInsideStudio(studioRoot, dataPath) || !isInsideStudio(studioRoot, targetPath)) {
    sendJson(response, 403, { error: '无权访问该文件' })
    return
  }

  let source
  let song
  try {
    source = await readFile(dataPath, 'utf8')
    song = JSON.parse(source)
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendJson(response, 404, { error: '歌曲不存在' })
      return
    }
    sendJson(response, 500, { error: '歌曲档案不是有效 JSON' })
    return
  }

  const shot = findShotByFileName(song, decodedFile)
  if (!shot) {
    sendJson(response, 400, { error: '只能删除已标记为作废的分镜视频' })
    return
  }
  if (!isVoidedRawShot(song, shot, decodedFile)) {
    sendJson(response, 409, { error: '当前有效分镜视频不可删除，请先作废' })
    return
  }

  try {
    await unlink(targetPath)
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendJson(response, 404, { error: '分镜视频不存在' })
      return
    }
    throw error
  }
  const voidedNames = voidedShotFileNames(song).filter((name) => name !== decodedFile)
  if (voidedNames.length !== voidedShotFileNames(song).length) {
    writeVoidedShotFiles(song, voidedNames)
    await writeFile(dataPath, patchSongArchive(source, {
      voidedNames: voidedShotFileNames(song),
    }), 'utf8')
  }
  sendJson(response, 200, { ok: true })
}

function shotIdNumber(shot) {
  return Number(String(shot?.id || '').replace(/^shot/i, ''))
}

function findShotByFileName(song, fileName) {
  const shotNumber = shotNumberFromFileName(fileName)
  if (!shotNumber) return null
  return (song.shots || []).find((shot) => shotIdNumber(shot) === shotNumber) || null
}

function voidedShotFileNames(song) {
  return (Array.isArray(song.voidedShotFiles) ? song.voidedShotFiles : [])
    .map((name) => path.posix.basename(String(name).replace(/\\/g, '/')))
    .filter(Boolean)
}

function writeVoidedShotFiles(song, names) {
  const unique = [...new Set(names)].sort((left, right) => left.localeCompare(right))
  if (unique.length) song.voidedShotFiles = unique
  else delete song.voidedShotFiles
}

function lineEndingOf(source) {
  return source.includes('\r\n') ? '\r\n' : '\n'
}

function formatVoidedShotFiles(names, newline) {
  const entries = names.map((name) => `    ${JSON.stringify(name)}`).join(`,${newline}`)
  return `  "voidedShotFiles": [${newline}${entries}${newline}  ]`
}

function patchSongArchive(source, { previousOutput = '', nextOutput = '', voidedNames = [] }) {
  const newline = lineEndingOf(source)
  let text = source
  if (previousOutput && nextOutput && previousOutput !== nextOutput) {
    const from = `"output": ${JSON.stringify(previousOutput)}`
    const to = `"output": ${JSON.stringify(nextOutput)}`
    if (!text.includes(from)) {
      const error = new Error('找不到分镜输出路径')
      error.statusCode = 500
      throw error
    }
    text = text.replace(from, to)
  }

  const blockPattern = /,?\r?\n {2}"voidedShotFiles": \[[\s\S]*?\]/
  if (!voidedNames.length) {
    return text.replace(blockPattern, '')
  }
  const block = formatVoidedShotFiles(voidedNames, newline)
  if (blockPattern.test(text)) {
    return text.replace(blockPattern, `,${newline}${block}`)
  }
  const closing = text.match(/\r?\n\}[ \t]*\r?\n?$/)
  if (!closing) {
    const error = new Error('歌曲档案格式无法更新')
    error.statusCode = 500
    throw error
  }
  const head = text.slice(0, closing.index).replace(/[ \t]+$/, '').replace(/,+$/, '')
  return `${head},${newline}${block}${closing[0]}`
}

function outputBaseName(shot) {
  return path.posix.basename(String(shot?.output || '').replace(/\\/g, '/'))
}

function isVoidedRawShot(song, shot, fileName) {
  if (!shot) return false
  return outputBaseName(shot) !== fileName || voidedShotFileNames(song).includes(fileName)
}

async function setRawShotStatus(studioRoot, request, response, folderName, fileName) {
  let decodedFolder
  let decodedFile
  try {
    decodedFolder = decodeURIComponent(folderName)
    decodedFile = decodeURIComponent(fileName)
  } catch {
    sendJson(response, 400, { error: '分镜视频路径无效' })
    return
  }

  if (!isSafeFolderName(decodedFolder) || !decodedFile || path.basename(decodedFile) !== decodedFile) {
    sendJson(response, 400, { error: '分镜视频路径无效' })
    return
  }
  if (!/^\.mp4$/i.test(path.extname(decodedFile))) {
    sendJson(response, 400, { error: '只能操作 MP4 分镜视频' })
    return
  }

  const dataPath = path.join(studioRoot, SONGS_DIRECTORY, decodedFolder, 'song.json')
  const targetPath = path.join(studioRoot, SONGS_DIRECTORY, decodedFolder, 'generated', 'video', 'raw', decodedFile)
  if (!isInsideStudio(studioRoot, dataPath) || !isInsideStudio(studioRoot, targetPath)) {
    sendJson(response, 403, { error: '无权访问该文件' })
    return
  }

  let source
  let song
  try {
    source = await readFile(dataPath, 'utf8')
    song = JSON.parse(source)
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendJson(response, 404, { error: '歌曲不存在' })
      return
    }
    sendJson(response, 500, { error: '歌曲档案不是有效 JSON' })
    return
  }

  try {
    await stat(targetPath)
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendJson(response, 404, { error: '分镜视频不存在' })
      return
    }
    throw error
  }

  const payload = await readJsonBody(request)
  const action = payload.action
  if (action !== 'void' && action !== 'restore') {
    sendJson(response, 400, { error: '分镜操作无效' })
    return
  }

  const shot = findShotByFileName(song, decodedFile)
  if (!shot) {
    sendJson(response, 400, { error: '找不到对应分镜' })
    return
  }

  const voided = isVoidedRawShot(song, shot, decodedFile)
  const names = voidedShotFileNames(song)
  const previousOutput = String(shot.output || '').replace(/\\/g, '/')
  if (action === 'void') {
    if (voided) {
      sendJson(response, 409, { error: '该分镜视频已经作废' })
      return
    }
    writeVoidedShotFiles(song, [...names, decodedFile])
  } else if (!voided) {
    sendJson(response, 409, { error: '该分镜视频未作废' })
    return
  } else {
    writeVoidedShotFiles(song, names.filter((name) => name !== decodedFile))
    shot.output = `generated/video/raw/${decodedFile}`
  }

  await writeFile(dataPath, patchSongArchive(source, {
    previousOutput,
    nextOutput: String(shot.output || '').replace(/\\/g, '/'),
    voidedNames: voidedShotFileNames(song),
  }), 'utf8')
  sendJson(response, 200, { ok: true })
}

async function deleteUpscaleVideo(studioRoot, response, folderName, fileName) {
  let decodedFolder
  let decodedFile
  try {
    decodedFolder = decodeURIComponent(folderName)
    decodedFile = decodeURIComponent(fileName)
  } catch {
    sendJson(response, 400, { error: '超分视频路径无效' })
    return
  }

  if (!isSafeFolderName(decodedFolder) || !decodedFile || path.basename(decodedFile) !== decodedFile) {
    sendJson(response, 400, { error: '超分视频路径无效' })
    return
  }
  if (!/^\.mp4$/i.test(path.extname(decodedFile))) {
    sendJson(response, 400, { error: '只能删除 MP4 超分视频' })
    return
  }

  const targetPath = path.join(
    studioRoot,
    SONGS_DIRECTORY,
    decodedFolder,
    'generated',
    'video',
    'intermediate',
    decodedFile,
  )
  if (!isInsideStudio(studioRoot, targetPath)) {
    sendJson(response, 403, { error: '无权访问该文件' })
    return
  }

  try {
    await unlink(targetPath)
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendJson(response, 404, { error: '超分视频不存在' })
      return
    }
    throw error
  }

  const timingPath = path.join(path.dirname(targetPath), 'upscale-timings.json')
  try {
    const timings = JSON.parse(await readFile(timingPath, 'utf8'))
    if (timings && Object.prototype.hasOwnProperty.call(timings, decodedFile)) {
      delete timings[decodedFile]
      await writeFile(timingPath, `${JSON.stringify(timings, null, 2)}\n`, 'utf8')
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }

  sendJson(response, 200, { ok: true })
}

async function confirmSceneReference(studioRoot, request, response, folderName) {
  const decodedFolder = decodeURIComponent(folderName)
  if (!isSafeFolderName(decodedFolder)) {
    sendJson(response, 400, { error: '歌曲目录无效' })
    return
  }
  const payload = await readJsonBody(request)
  const fileName = String(payload.fileName || '')
  const planId = String(payload.planId || '')
  const name = String(payload.name || '').trim()
  const description = String(payload.description || '').trim()
  if (!fileName || path.basename(fileName) !== fileName || !/^\.(png|jpe?g|webp)$/i.test(path.extname(fileName))) {
    sendJson(response, 400, { error: '场景图片无效' })
    return
  }
  const imagePath = path.join(studioRoot, SONGS_DIRECTORY, decodedFolder, 'assets', 'scenes', fileName)
  const dataPath = path.join(studioRoot, SONGS_DIRECTORY, decodedFolder, 'song.json')
  if (!isInsideStudio(studioRoot, imagePath) || !isInsideStudio(studioRoot, dataPath)) {
    sendJson(response, 403, { error: '无权访问该文件' })
    return
  }
  try {
    await stat(imagePath)
    const song = JSON.parse(await readFile(dataPath, 'utf8'))
    const sceneReferences = Array.isArray(song.sceneReferences) ? song.sceneReferences : []
    const id = planId || path.basename(fileName, path.extname(fileName))
    const reference = {
      id,
      name: name || id,
      path: `assets/scenes/${fileName}`,
      status: 'confirmed',
      description: description || name || id,
    }
    const nextReferences = sceneReferences.filter((item) => item.id !== id && item.path !== reference.path)
    nextReferences.push(reference)
    song.sceneReferences = nextReferences
    if (!song.mvWorkflow) song.mvWorkflow = {}
    song.mvWorkflow.visualReferencesStatus = nextReferences.length >= 4 ? 'confirmed' : 'in_progress'
    await writeFile(dataPath, `${JSON.stringify(song, null, 2)}\n`, 'utf8')
    sendJson(response, 200, { ok: true })
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendJson(response, 404, { error: '场景图片不存在' })
      return
    }
    throw error
  }
}

async function sendStudioMedia(studioRoot, request, response) {
  const requestUrl = new URL(request.url, 'http://localhost')
  const relativePath = decodeURIComponent(requestUrl.pathname.replace(/^\/studio-media\//, ''))
  const targetPath = path.resolve(studioRoot, relativePath)

  if (!isInsideStudio(studioRoot, targetPath)) {
    sendJson(response, 403, { error: '无权访问该文件' })
    return
  }

  let fileStat
  try {
    fileStat = await stat(targetPath)
  } catch (error) {
    if (error.code === 'ENOENT') {
      sendJson(response, 404, { error: '文件不存在' })
      return
    }
    throw error
  }

  const mime = MEDIA_TYPES[path.extname(targetPath).toLowerCase()] || 'application/octet-stream'
  const isHead = request.method === 'HEAD'
  response.setHeader('Content-Type', mime)
  response.setHeader('Cache-Control', 'no-store')
  response.setHeader('Accept-Ranges', 'bytes')

  const range = request.headers.range
  if (!range) {
    response.statusCode = 200
    response.setHeader('Content-Length', fileStat.size)
    if (isHead) {
      response.end()
      return
    }
    createReadStream(targetPath).pipe(response)
    return
  }

  const match = range.match(/^bytes=(\d*)-(\d*)$/)
  if (!match) {
    response.statusCode = 416
    response.end()
    return
  }

  const start = match[1] ? Number(match[1]) : 0
  const end = match[2] ? Number(match[2]) : fileStat.size - 1
  if (start >= fileStat.size || end >= fileStat.size || start > end) {
    response.statusCode = 416
    response.setHeader('Content-Range', `bytes */${fileStat.size}`)
    response.end()
    return
  }

  response.statusCode = 206
  response.setHeader('Content-Range', `bytes ${start}-${end}/${fileStat.size}`)
  response.setHeader('Content-Length', end - start + 1)
  if (isHead) {
    response.end()
    return
  }
  createReadStream(targetPath, { start, end }).pipe(response)
}

function shouldReloadProduction(filePath) {
  if (!filePath.includes(`${path.sep}songs${path.sep}`)) return false
  if (filePath.includes(`${path.sep}wav2lip_segments${path.sep}`)) return false
  if (filePath.includes(`${path.sep}.analysis${path.sep}`)) return false
  if (filePath.includes(`${path.sep}archive${path.sep}`)) return false
  if (/\.(png|jpe?g|webp|mp4|mp3|wav)$/i.test(filePath)) return false
  return true
}

function apiMiddleware(studioRoot) {
  return async (request, response, next) => {
    const requestUrl = new URL(request.url, 'http://localhost')

    if (['GET', 'HEAD'].includes(request.method) && requestUrl.pathname.startsWith('/studio-media/')) {
      try {
        await sendStudioMedia(studioRoot, request, response)
      } catch (error) {
        sendJson(response, 500, { error: error.message })
      }
      return
    }

    const lyricsMatch = requestUrl.pathname.match(LYRICS_ROUTE)
    if (request.method === 'POST' && lyricsMatch) {
      try {
        await writeSongLyrics(studioRoot, request, response, lyricsMatch[1])
      } catch (error) {
        sendJson(response, error.statusCode || 500, { error: error.message })
      }
      return
    }

    const shortsMatch = requestUrl.pathname.match(SHORTS_ROUTE)
    if (request.method === 'POST' && shortsMatch) {
      try {
        await writeSongShorts(studioRoot, request, response, shortsMatch[1])
      } catch (error) {
        sendJson(response, error.statusCode || 500, { error: error.message })
      }
      return
    }

    const sceneDeleteMatch = requestUrl.pathname.match(SCENE_DELETE_ROUTE)
    if (request.method === 'DELETE' && sceneDeleteMatch) {
      try {
        await deleteSceneImage(studioRoot, response, sceneDeleteMatch[1], sceneDeleteMatch[2])
      } catch (error) {
        sendJson(response, error.statusCode || 500, { error: error.message })
      }
      return
    }

    const voidedShotDeleteMatch = requestUrl.pathname.match(VOIDED_SHOT_DELETE_ROUTE)
    if (voidedShotDeleteMatch && (request.method === 'DELETE' || request.method === 'POST')) {
      try {
        if (request.method === 'DELETE') {
          await deleteVoidedShot(studioRoot, response, voidedShotDeleteMatch[1], voidedShotDeleteMatch[2])
        } else {
          await setRawShotStatus(studioRoot, request, response, voidedShotDeleteMatch[1], voidedShotDeleteMatch[2])
        }
      } catch (error) {
        sendJson(response, error.statusCode || 500, { error: error.message })
      }
      return
    }

    const upscaleDeleteMatch = requestUrl.pathname.match(UPSCALE_DELETE_ROUTE)
    if (request.method === 'DELETE' && upscaleDeleteMatch) {
      try {
        await deleteUpscaleVideo(studioRoot, response, upscaleDeleteMatch[1], upscaleDeleteMatch[2])
      } catch (error) {
        sendJson(response, error.statusCode || 500, { error: error.message })
      }
      return
    }

    const sceneConfirmMatch = requestUrl.pathname.match(SCENE_CONFIRM_ROUTE)
    if (request.method === 'POST' && sceneConfirmMatch) {
      try {
        await confirmSceneReference(studioRoot, request, response, sceneConfirmMatch[1])
      } catch (error) {
        sendJson(response, error.statusCode || 500, { error: error.message })
      }
      return
    }

    if (request.method !== 'GET' || !['/api/workspace', '/api/songs'].includes(requestUrl.pathname)) {
      next()
      return
    }

    try {
      const workspace = await buildWorkspace(studioRoot)
      if (requestUrl.pathname === '/api/songs') {
        sendJson(response, 200, { songs: workspace.songs })
        return
      }
      sendJson(response, 200, workspace)
    } catch (error) {
      sendJson(response, 500, { error: error.message })
    }
  }
}

export function songLibraryPlugin() {
  let studioRoot

  return {
    name: 'local-studio-library',
    configResolved(config) {
      studioRoot = resolveStudioRoot(config.root)
    },
    configureServer(server) {
      const watchRoots = [
        path.join(studioRoot, SONGS_DIRECTORY),
        ...ARCHIVES.map(({ directory }) => path.join(studioRoot, directory)),
      ]
      server.watcher.add(watchRoots)
      server.watcher.on('all', (eventName, filePath) => {
        const isWatched = filePath.endsWith('song.json')
          || filePath.endsWith('.md')
          || shouldReloadProduction(filePath)
        if (['add', 'change', 'unlink'].includes(eventName) && isWatched) {
          server.ws.send({ type: 'custom', event: WORKSPACE_CHANGED_EVENT })
        }
      })
      server.middlewares.use(apiMiddleware(studioRoot))
    },
    configurePreviewServer(server) {
      server.middlewares.use(apiMiddleware(studioRoot))
    },
  }
}
