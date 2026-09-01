import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = process.cwd()
const songRoots = ['02-创作中', '03-已完成']
const errors = []
let checkedSongs = 0
const storyBeats = ['opening', 'development', 'turningPoint', 'climax', 'ending']

function timeToSeconds(value) {
  if (typeof value !== 'string' || !/^\d{2,}:\d{2}$/.test(value)) return null
  const [minutes, seconds] = value.split(':').map(Number)
  if (seconds > 59) return null
  return minutes * 60 + seconds
}

for (const root of songRoots) {
  const entries = await readdir(path.join(projectRoot, root), { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const relativePath = path.join(root, entry.name, 'song.json')

    let song
    try {
      song = JSON.parse(await readFile(path.join(projectRoot, relativePath), 'utf8'))
    } catch (error) {
      if (error.code === 'ENOENT') continue
      errors.push(`${relativePath}: JSON 无效，${error.message}`)
      continue
    }

    checkedSongs += 1
    const shots = Array.isArray(song.shots) ? song.shots : []
    if (shots.length === 0) continue

    const songDuration = timeToSeconds(song.metadata?.duration)
    if (songDuration === null) {
      errors.push(`${relativePath}: 存在 MV 分镜时必须填写有效歌曲时长 metadata.duration（MM:SS）`)
      continue
    }

    let totalShotDuration = 0
    const timedShots = []

    for (const [index, shot] of shots.entries()) {
      const label = shot.id || `第 ${index + 1} 镜`
      const start = timeToSeconds(shot.start)
      const end = timeToSeconds(shot.end)

      if (start === null || end === null) {
        errors.push(`${relativePath}: ${label} 的 start/end 必须使用 MM:SS`)
        continue
      }

      const duration = end - start
      if (duration < 1 || duration > 10) {
        errors.push(`${relativePath}: ${label} 时长为 ${duration} 秒，必须在 1–10 秒内`)
      }
      if (end > songDuration) {
        errors.push(`${relativePath}: ${label} 结束于 ${shot.end}，超过歌曲时长 ${song.metadata.duration}`)
      }

      totalShotDuration += Math.max(duration, 0)
      timedShots.push({ ...shot, startSeconds: start, endSeconds: end })
    }

    if (totalShotDuration > songDuration) {
      errors.push(`${relativePath}: 分镜累计 ${totalShotDuration} 秒，超过歌曲时长 ${songDuration} 秒`)
    }

    if (song.mvWorkflow?.scriptStatus === 'complete') {
      if (song.mvWorkflow?.storyStatus !== 'confirmed') {
        errors.push(`${relativePath}: MV 脚本标记完成前，MV 故事必须由用户确认`)
      }
      if (song.mvWorkflow?.durationConfirmed !== true) {
        errors.push(`${relativePath}: MV 脚本标记完成前，歌曲总时长必须由用户确认`)
      }

      for (const field of ['summary', ...storyBeats]) {
        if (!String(song.mvStory?.[field] || '').trim()) {
          errors.push(`${relativePath}: MV 故事缺少 ${field}，无法保证故事完整性`)
        }
      }

      const sortedShots = timedShots.sort((left, right) => left.startSeconds - right.startSeconds)
      if (sortedShots[0]?.startSeconds !== 0) {
        errors.push(`${relativePath}: 完整 MV 脚本必须从 00:00 开始`)
      }

      for (let index = 1; index < sortedShots.length; index += 1) {
        const previous = sortedShots[index - 1]
        const current = sortedShots[index]
        if (current.startSeconds !== previous.endSeconds) {
          const relation = current.startSeconds < previous.endSeconds ? '重叠' : '空档'
          errors.push(`${relativePath}: ${previous.id} 与 ${current.id} 之间存在时间${relation}`)
        }
      }

      if (sortedShots.at(-1)?.endSeconds !== songDuration) {
        errors.push(`${relativePath}: 完整 MV 脚本必须结束于歌曲时长 ${song.metadata.duration}`)
      }

      const representedBeats = new Set(shots.map((shot) => shot.storyBeat))
      for (const beat of storyBeats) {
        if (!representedBeats.has(beat)) {
          errors.push(`${relativePath}: 完整 MV 脚本缺少故事阶段 ${beat} 对应的分镜`)
        }
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`歌曲数据检查失败（${errors.length} 项）：`)
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log(`歌曲数据检查通过：${checkedSongs} 首歌曲`)
