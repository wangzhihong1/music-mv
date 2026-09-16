import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const KIND_EXTENSIONS = {
  video: new Set(['.mp4']),
  image: new Set(['.png', '.jpg', '.jpeg', '.webp']),
  audio: new Set(['.mp3', '.wav']),
}

const ASSET_GROUPS = [
  { id: 'final', label: '成片', directory: 'generated/video/final', kind: 'video' },
  { id: 'intermediate', label: '修复超分', directory: 'generated/video/intermediate', kind: 'video' },
  { id: 'raw', label: '分镜视频', directory: 'generated/video/raw', kind: 'video' },
  { id: 'characters', label: '主角图片', directory: 'assets/characters', kind: 'image' },
  { id: 'scenes', label: '场景辅助图', directory: 'assets/scenes', kind: 'image' },
  { id: 'references', label: '其他参考图', directory: 'assets', kind: 'image' },
  { id: 'music', label: '原曲母带', directory: 'music', kind: 'audio' },
]

function toPosix(value) {
  return value.split(path.sep).join('/')
}

function padShotNumber(number) {
  return String(number).padStart(2, '0')
}

function shotNumberFromName(name) {
  const match = String(name).match(/shot[_-]?0*(\d+)/i)
  return match ? Number(match[1]) : null
}

function shotIdFromNumber(number) {
  return `shot${padShotNumber(number)}`
}

function isPresentAsset(item) {
  return Boolean(item) && !item.missing
}

function isCurrentShotAsset(item) {
  return isPresentAsset(item) && !item.voided
}

export function annotateRawShotItems(groups, shots = []) {
  if (!shots.length) return

  let group = groups.find((item) => item.id === 'raw')
  if (!group) {
    group = { id: 'raw', label: '分镜视频', kind: 'video', items: [] }
    const insertAt = groups.findIndex((item) => item.id === 'characters')
    if (insertAt === -1) groups.push(group)
    else groups.splice(insertAt, 0, group)
  }

  const byId = new Map(shots.map((shot) => [shot.id, shot]))
  const currentOutputs = new Set(
    shots
      .map((shot) => path.posix.basename(String(shot.output || '').replace(/\\/g, '/')))
      .filter(Boolean),
  )

  for (const item of group.items) {
    const number = shotNumberFromName(item.name)
    const shot = number ? byId.get(shotIdFromNumber(number)) : null
    const isCurrent = currentOutputs.has(item.name)
    item.shotNumber = number
    item.voided = Boolean(shot && !isCurrent)
    item.missing = false
    if (shot && isCurrent) {
      item.title = `${padShotNumber(number)} · ${shot.shot}`
    } else if (shot) {
      item.title = `【作废】${padShotNumber(number)} · ${shot.shot}`
    } else {
      item.title = item.name
    }
  }

  const presentNumbers = new Set(group.items.map((item) => item.shotNumber).filter(Boolean))
  for (const shot of shots) {
    const number = Number(String(shot.id || '').replace(/^shot/i, ''))
    if (!Number.isFinite(number) || number <= 0 || presentNumbers.has(number)) continue
    group.items.push({
      name: path.posix.basename(String(shot.output || `shot_${padShotNumber(number)}.mp4`).replace(/\\/g, '/')),
      kind: 'video',
      path: '',
      url: '',
      size: 0,
      sizeLabel: shot.genMode === 'composite' ? '剪辑镜，尚未合成' : '尚未生成',
      updatedAt: '',
      title: `${padShotNumber(number)} · ${shot.shot}`,
      shotNumber: number,
      voided: false,
      missing: true,
    })
  }

  group.items.sort((left, right) => {
    const leftNumber = left.shotNumber ?? 9999
    const rightNumber = right.shotNumber ?? 9999
    if (leftNumber !== rightNumber) return leftNumber - rightNumber
    if (Boolean(left.voided) !== Boolean(right.voided)) return left.voided ? 1 : -1
    return String(left.name).localeCompare(String(right.name))
  })
}

function mediaUrl(relativePath) {
  return `/studio-media/${toPosix(relativePath)}`
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
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

export async function scanSongAssets(studioRoot, relativeDirectory) {
  const folderPath = path.join(studioRoot, relativeDirectory)
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

export function deriveProductionStatus(groups, expectedShotCount = 0) {
  const count = (id) => (groups.find((group) => group.id === id)?.items || []).filter(isPresentAsset).length
  const characterItems = groups.find((group) => group.id === 'characters')?.items || []
  const characterReferenceCount = characterItems.length
  const characterNames = characterItems.map((item) => item.name.toLowerCase())
  const hasRequiredViews = [
    /front/,
    /(side|profile)/,
    /back/,
  ].every((pattern) => characterNames.some((name) => pattern.test(name)))
  const rawItems = groups.find((group) => group.id === 'raw')?.items || []
  const intermediateItems = groups.find((group) => group.id === 'intermediate')?.items || []
  const generatedShotNumbers = new Set(
    rawItems
      .filter(isCurrentShotAsset)
      .map((item) => shotNumberFromName(item.name))
      .filter(Boolean),
  )
  const repairedShotNumbers = new Set(
    intermediateItems
      .filter(isPresentAsset)
      .map((item) => shotNumberFromName(item.name))
      .filter(Boolean),
  )
  const hasAllShotVideos = expectedShotCount > 0 && generatedShotNumbers.size >= expectedShotCount
  const hasAllRepairedVideos = expectedShotCount > 0 && repairedShotNumbers.size >= expectedShotCount

  return {
    characterReferences: hasRequiredViews
      ? 'complete'
      : characterReferenceCount > 0
        ? 'in_progress'
        : 'not_started',
    shotVideos: hasAllShotVideos
      ? 'complete'
      : count('raw') > 0 || characterReferenceCount > 0
        ? 'in_progress'
        : 'not_started',
    post: hasAllRepairedVideos
      ? 'complete'
      : count('intermediate') > 0
        ? 'in_progress'
        : 'not_started',
    delivery: count('final') > 0 ? 'complete' : 'not_started',
  }
}

export function productionSummary(groups) {
  const count = (id) => (groups.find((group) => group.id === id)?.items || []).filter(isPresentAsset).length
  if (count('final') > 0) return `成片 ${count('final')} 条`
  if (count('intermediate') > 0) return `超分中间件 ${count('intermediate')} 条`
  if (count('raw') > 0) return `分镜视频 ${count('raw')} 条`
  if (count('characters') > 0) return `主角图片 ${count('characters')} 张`
  return '尚未生成'
}

export async function buildProductionRecord(studioRoot, relativeDirectory, expectedShotCount = 0, shots = []) {
  if (!relativeDirectory) {
    return {
      directory: '',
      characterReferences: 'not_started',
      shotVideos: 'not_started',
      post: 'not_started',
      delivery: 'not_started',
      summary: '尚未进入本机成片',
      groups: [],
    }
  }

  const groups = await scanSongAssets(studioRoot, relativeDirectory)
  annotateRawShotItems(groups, shots)
  const status = deriveProductionStatus(groups, expectedShotCount)

  return {
    directory: relativeDirectory.replace(/\\/g, '/'),
    ...status,
    summary: productionSummary(groups),
    groups,
  }
}

function mergeProductionRecord(declared = {}, derived = {}) {
  const declaredRest = { ...declared }
  delete declaredRest.mvDirectory
  delete declaredRest.directory
  const statusKeys = ['characterReferences', 'shotVideos', 'post', 'delivery']
  const merged = { ...declaredRest, ...derived }

  for (const key of statusKeys) {
    if (declared[key] === 'complete') merged[key] = 'complete'
  }

  return merged
}

export async function attachProductions(studioRoot, songs) {
  return Promise.all(songs.map(async (song) => {
    const relativeDirectory = song.folder ? `songs/${song.folder}` : ''
    const production = await buildProductionRecord(
      studioRoot,
      relativeDirectory,
      song.shots?.length || 0,
      song.shots || [],
    )
    return {
      ...song,
      production: mergeProductionRecord(song.production, production),
    }
  }))
}
