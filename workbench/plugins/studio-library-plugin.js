import { createReadStream } from 'node:fs'
import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { attachProductions } from './studio-production.js'

const COLLECTIONS = [
  { id: 'in-progress', directory: 'songs/in-progress', labelZh: '创作中' },
  { id: 'completed', directory: 'songs/completed', labelZh: '已完成' },
]

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

async function readSong(studioRoot, collection, folderName) {
  const dataPath = path.join(studioRoot, collection.directory, folderName, 'song.json')

  try {
    const [source, fileStat] = await Promise.all([
      readFile(dataPath, 'utf8'),
      stat(dataPath),
    ])
    const song = JSON.parse(source)

    return {
      ...song,
      id: `${collection.directory}/${folderName}`,
      slug: song.slug || folderName.replace(/^\d{8}-/, ''),
      folder: folderName,
      collectionId: collection.id,
      collection: collection.labelZh,
      updatedAt: fileStat.mtime.toISOString(),
    }
  } catch (error) {
    if (error.code === 'ENOENT') return null
    throw new Error(`${dataPath}: ${error.message}`)
  }
}

async function scanSongs(studioRoot) {
  const songs = []

  for (const collection of COLLECTIONS) {
    const collectionPath = path.join(studioRoot, collection.directory)
    let entries = []

    try {
      entries = await readdir(collectionPath, { withFileTypes: true })
    } catch (error) {
      if (error.code === 'ENOENT') continue
      throw error
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const song = await readSong(studioRoot, collection, entry.name)
      if (song) songs.push(song)
    }
  }

  return songs.sort((left, right) => {
    const dateOrder = String(right.date || '').localeCompare(String(left.date || ''))
    if (dateOrder !== 0) return dateOrder
    return right.updatedAt.localeCompare(left.updatedAt)
  })
}

async function buildWorkspace(studioRoot) {
  const [rawSongs, inspiration, library] = await Promise.all([
    scanSongs(studioRoot),
    listMarkdownFiles(studioRoot, 'inspiration'),
    listMarkdownFiles(studioRoot, 'library'),
  ])
  const songs = await attachProductions(studioRoot, rawSongs)

  return { songs, inspiration, library }
}

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', 'no-store')
  response.end(JSON.stringify(payload))
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
  if (!filePath.includes(`${path.sep}mvs${path.sep}`)) return false
  if (filePath.includes(`${path.sep}wav2lip_segments${path.sep}`)) return false
  if (filePath.includes(`${path.sep}.analysis${path.sep}`)) return false
  if (filePath.includes(`${path.sep}archive${path.sep}`)) return false
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
        ...COLLECTIONS.map(({ directory }) => path.join(studioRoot, directory)),
        ...ARCHIVES.map(({ directory }) => path.join(studioRoot, directory)),
        path.join(studioRoot, 'mvs'),
      ]
      server.watcher.add(watchRoots)
      server.watcher.on('all', (eventName, filePath) => {
        const isWatched = filePath.endsWith('song.json')
          || filePath.endsWith('.md')
          || shouldReloadProduction(filePath)
        if (['add', 'change', 'unlink'].includes(eventName) && isWatched) {
          server.ws.send({ type: 'full-reload' })
        }
      })
      server.middlewares.use(apiMiddleware(studioRoot))
    },
    configurePreviewServer(server) {
      server.middlewares.use(apiMiddleware(studioRoot))
    },
  }
}
