import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const COLLECTIONS = [
  { id: 'in-progress', directory: 'songs/in-progress', labelZh: '创作中' },
  { id: 'completed', directory: 'songs/completed', labelZh: '已完成' },
]

const ARCHIVES = [
  { id: 'inspiration', directory: 'inspiration' },
  { id: 'library', directory: 'library' },
]

export function resolveStudioRoot(workbenchRoot) {
  return path.resolve(workbenchRoot, '..', 'music-mv')
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
  const [songs, inspiration, library] = await Promise.all([
    scanSongs(studioRoot),
    listMarkdownFiles(studioRoot, 'inspiration'),
    listMarkdownFiles(studioRoot, 'library'),
  ])

  return { songs, inspiration, library }
}

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', 'no-store')
  response.end(JSON.stringify(payload))
}

function apiMiddleware(studioRoot) {
  return async (request, response, next) => {
    const requestUrl = new URL(request.url, 'http://localhost')
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
      ]
      server.watcher.add(watchRoots)
      server.watcher.on('all', (eventName, filePath) => {
        const isWatched = filePath.endsWith('song.json') || filePath.endsWith('.md')
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
