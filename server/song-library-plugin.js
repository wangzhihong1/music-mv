import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const COLLECTIONS = [
  { directory: '02-创作中', label: '创作中' },
  { directory: '03-已完成', label: '已完成' },
]

async function readSong(projectRoot, collection, folderName) {
  const folderPath = path.join(projectRoot, collection.directory, folderName)
  const dataPath = path.join(folderPath, 'song.json')

  try {
    const [source, fileStat] = await Promise.all([
      readFile(dataPath, 'utf8'),
      stat(dataPath),
    ])
    const song = JSON.parse(source)

    return {
      ...song,
      id: `${collection.directory}/${folderName}`,
      folder: folderName,
      collection: collection.label,
      updatedAt: fileStat.mtime.toISOString(),
    }
  } catch (error) {
    if (error.code === 'ENOENT') return null
    throw new Error(`${dataPath}: ${error.message}`)
  }
}

async function scanSongs(projectRoot) {
  const songs = []

  for (const collection of COLLECTIONS) {
    const collectionPath = path.join(projectRoot, collection.directory)
    const entries = await readdir(collectionPath, { withFileTypes: true })

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const song = await readSong(projectRoot, collection, entry.name)
      if (song) songs.push(song)
    }
  }

  return songs.sort((left, right) => {
    const dateOrder = String(right.date || '').localeCompare(String(left.date || ''))
    if (dateOrder !== 0) return dateOrder
    return right.updatedAt.localeCompare(left.updatedAt)
  })
}

function apiMiddleware(projectRoot) {
  return async (request, response, next) => {
    const requestUrl = new URL(request.url, 'http://localhost')
    if (request.method !== 'GET' || requestUrl.pathname !== '/api/songs') {
      next()
      return
    }

    try {
      const songs = await scanSongs(projectRoot)
      response.statusCode = 200
      response.setHeader('Content-Type', 'application/json; charset=utf-8')
      response.setHeader('Cache-Control', 'no-store')
      response.end(JSON.stringify({ songs }))
    } catch (error) {
      response.statusCode = 500
      response.setHeader('Content-Type', 'application/json; charset=utf-8')
      response.end(JSON.stringify({ error: error.message }))
    }
  }
}

export function songLibraryPlugin() {
  let projectRoot

  return {
    name: 'local-song-library',
    configResolved(config) {
      projectRoot = config.root
    },
    configureServer(server) {
      const songRoots = COLLECTIONS.map(({ directory }) => path.join(projectRoot, directory))
      server.watcher.add(songRoots)
      server.watcher.on('all', (eventName, filePath) => {
        if (['add', 'change', 'unlink'].includes(eventName) && path.basename(filePath) === 'song.json') {
          server.ws.send({ type: 'full-reload' })
        }
      })
      server.middlewares.use(apiMiddleware(projectRoot))
    },
    configurePreviewServer(server) {
      server.middlewares.use(apiMiddleware(projectRoot))
    },
  }
}
