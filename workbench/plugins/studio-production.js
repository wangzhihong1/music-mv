import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const KIND_EXTENSIONS = {
  video: new Set(['.mp4']),
  image: new Set(['.png', '.jpg', '.jpeg', '.webp']),
  audio: new Set(['.mp3', '.wav']),
}

const ASSET_GROUPS = [
  { id: 'final', label: '成片', directory: 'generated/video/final', kind: 'video' },
  { id: 'intermediate', label: '修复超分', directory: 'generated/video/intermediate', kind: 'video' },
  { id: 'raw', label: '原始镜头', directory: 'generated/video/raw', kind: 'video' },
  { id: 'scenes', label: '场景关键帧', directory: 'assets/scenes', kind: 'image' },
  { id: 'characters', label: '人物定妆', directory: 'assets/characters', kind: 'image' },
  { id: 'references', label: '参考图', directory: 'assets', kind: 'image' },
  { id: 'music', label: '原曲母带', directory: 'music', kind: 'audio' },
]

function toPosix(value) {
  return value.split(path.sep).join('/')
}

function mediaUrl(relativePath) {
  return `/studio-media/${toPosix(relativePath)}`
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export async function listMvFolders(studioRoot) {
  const mvsRoot = path.join(studioRoot, 'mvs')

  try {
    const entries = await readdir(mvsRoot, { withFileTypes: true })
    return entries
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
      .map((entry) => entry.name)
      .sort()
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }
}

async function listGroupFiles(folderPath, group) {
  const targetPath = path.join(folderPath, group.directory)

  try {
    const entries = await readdir(targetPath, { withFileTypes: true })
    const files = []

    for (const entry of entries) {
      if (!entry.isFile()) continue
      const extension = path.extname(entry.name).toLowerCase()
      if (!KIND_EXTENSIONS[group.kind]?.has(extension)) continue
      files.push(path.join(targetPath, entry.name))
    }

    return files.sort((left, right) => path.basename(left).localeCompare(path.basename(right)))
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }
}

async function describeAsset(studioRoot, filePath, kind) {
  const info = await stat(filePath)
  const relativePath = path.relative(studioRoot, filePath)

  return {
    name: path.basename(filePath),
    kind,
    path: toPosix(relativePath),
    url: mediaUrl(relativePath),
    size: info.size,
    sizeLabel: formatSize(info.size),
    updatedAt: info.mtime.toISOString(),
  }
}

export async function scanMvAssets(studioRoot, folderName) {
  const folderPath = path.join(studioRoot, 'mvs', folderName)
  const groups = []

  for (const group of ASSET_GROUPS) {
    const files = await listGroupFiles(folderPath, group)
    if (files.length === 0) continue
    groups.push({
      id: group.id,
      label: group.label,
      kind: group.kind,
      items: await Promise.all(files.map((filePath) => describeAsset(studioRoot, filePath, group.kind))),
    })
  }

  return groups
}

export function deriveProductionStatus(groups) {
  const count = (id) => groups.find((group) => group.id === id)?.items.length || 0
  const keyframeCount = count('scenes') + count('characters') + count('references')

  return {
    keyframes: keyframeCount > 0 ? 'complete' : 'not_started',
    video: count('raw') > 0 ? 'complete' : keyframeCount > 0 ? 'in_progress' : 'not_started',
    post: count('intermediate') > 0 ? 'complete' : count('raw') > 0 ? 'in_progress' : 'not_started',
    delivery: count('final') > 0 ? 'complete' : count('intermediate') > 0 ? 'in_progress' : 'not_started',
  }
}

export function productionSummary(groups) {
  const count = (id) => groups.find((group) => group.id === id)?.items.length || 0
  if (count('final') > 0) return `成片 ${count('final')} 条`
  if (count('intermediate') > 0) return `超分中间件 ${count('intermediate')} 条`
  if (count('raw') > 0) return `原始镜头 ${count('raw')} 条`
  if (count('scenes') + count('characters') > 0) return '关键帧已生成'
  return '尚未生成'
}

export function matchMvFolder(song, folders) {
  const configured = String(song.production?.mvDirectory || '')
    .replace(/\\/g, '/')
    .replace(/^mvs\//, '')
  if (configured && folders.includes(configured)) return configured

  const exact = `${song.date || ''}-${song.slug || ''}`.replace(/^-|-$/g, '')
  if (exact && folders.includes(exact)) return exact

  if (song.slug) {
    const bySlug = folders.find((folder) => folder.endsWith(`-${song.slug}`))
    if (bySlug) return bySlug
  }

  return ''
}

async function readMvTitle(folderPath, folderName) {
  try {
    const source = await readFile(path.join(folderPath, 'mv-plan.md'), 'utf8')
    const titled = source.match(/^#\s*《([^》]+)》/m)
    if (titled) return titled[1].trim()
    const heading = source.match(/^#\s+(.+)$/m)
    if (heading) return heading[1].replace(/MV.*$/, '').trim()
  } catch {
    // Fall through to folder name.
  }

  return folderName.replace(/^\d{8}-/, '').replaceAll('-', ' ')
}

export async function buildProductionRecord(studioRoot, folderName) {
  if (!folderName) {
    return {
      mvDirectory: '',
      keyframes: 'not_started',
      video: 'not_started',
      post: 'not_started',
      delivery: 'not_started',
      summary: '尚未进入本机生成',
      groups: [],
    }
  }

  const groups = await scanMvAssets(studioRoot, folderName)
  const status = deriveProductionStatus(groups)

  return {
    mvDirectory: `mvs/${folderName}`,
    ...status,
    summary: productionSummary(groups),
    groups,
  }
}

export async function attachProductions(studioRoot, songs) {
  const folders = await listMvFolders(studioRoot)
  const linked = new Set()

  const decoratedSongs = await Promise.all(songs.map(async (song) => {
    const folderName = matchMvFolder(song, folders)
    if (folderName) linked.add(folderName)
    const production = await buildProductionRecord(studioRoot, folderName)
    return {
      ...song,
      production: {
        ...song.production,
        ...production,
      },
    }
  }))

  const standalone = []
  for (const folderName of folders) {
    if (linked.has(folderName)) continue
    const folderPath = path.join(studioRoot, 'mvs', folderName)
    const production = await buildProductionRecord(studioRoot, folderName)
    const date = folderName.match(/^\d{8}/)?.[0] || ''
    const title = await readMvTitle(folderPath, folderName)

    standalone.push({
      id: `mvs/${folderName}`,
      slug: folderName.replace(/^\d{8}-/, ''),
      title,
      date,
      status: production.summary,
      coreStatement: `本机生成项目，素材位于 ${production.mvDirectory}。`,
      metadata: {},
      prompts: [],
      sections: [],
      shots: [],
      mvWorkflow: {},
      mvStory: {},
      folder: folderName,
      collectionId: 'production',
      collection: '本机生成',
      production,
      updatedAt: new Date().toISOString(),
    })
  }

  return [...decoratedSongs, ...standalone]
}
