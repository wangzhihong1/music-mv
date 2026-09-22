import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PATHS, SONG_LIFECYCLES } from '../shared/paths.js'
import { timeToSeconds } from '../shared/time.js'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const songsRoot = path.join(projectRoot, PATHS.songs)
const allowedLifecycles = new Set(SONG_LIFECYCLES.map((item) => item.id))
const errors = []
let checkedSongs = 0
const storyBeats = ['opening', 'development', 'turningPoint', 'climax', 'ending']

let entries = []
try {
  entries = await readdir(songsRoot, { withFileTypes: true })
} catch (error) {
  if (error.code !== 'ENOENT') throw error
}

for (const entry of entries) {
  if (!entry.isDirectory()) continue
  const relativePath = path.join(PATHS.songs, entry.name, 'song.json')

  let song
  try {
    song = JSON.parse(await readFile(path.join(projectRoot, relativePath), 'utf8'))
  } catch (error) {
    if (error.code === 'ENOENT') continue
    errors.push(`${relativePath}: JSON 无效，${error.message}`)
    continue
  }

  checkedSongs += 1

  if (!allowedLifecycles.has(song.lifecycle)) {
    errors.push(`${relativePath}: lifecycle 必须为 in-progress 或 completed`)
  }

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
        errors.push(`${relativePath}: ${label} 的 start/end 必须使用 MM:SS，半秒写作 MM:SS.S`)
        continue
      }

      const duration = Math.round((end - start) * 10) / 10
      if (duration < 0.5 || duration > 15) {
        errors.push(`${relativePath}: ${label} 时长为 ${duration} 秒，必须在 0.5–15 秒内`)
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
      if (song.mvWorkflow?.generationMethod !== 'characterReferenceVideo') {
        errors.push(`${relativePath}: 完整 MV 脚本必须使用角色参考图直接生成分镜视频`)
      }

      const outputs = new Set()
      for (const [index, shot] of shots.entries()) {
        const label = shot.id || `第 ${index + 1} 镜`
        if (!Array.isArray(shot.subjects)) {
          errors.push(`${relativePath}: ${label} 的 subjects 必须是数组；空景可以是空数组，有人出镜时再填写角色参考图`)
        }
        if (!['characterVideo', 'composite'].includes(shot.genMode)) {
          errors.push(`${relativePath}: ${label} 的 genMode 必须为 characterVideo 或 composite`)
        }
        if (!String(shot.prompt || '').trim()) {
          errors.push(`${relativePath}: ${label} 缺少可执行的 H3 参考图生视频提示词`)
        }

        const output = String(shot.output || '').replace(/\\/g, '/')
        if (!/^generated\/video\/raw\/shot_\d+_[^/]+\.mp4$/i.test(output)) {
          errors.push(`${relativePath}: ${label} 必须填写 generated/video/raw/ 下的独立 MP4 输出路径`)
        } else if (outputs.has(output.toLowerCase())) {
          errors.push(`${relativePath}: ${label} 的输出路径与其他分镜重复：${output}`)
        } else {
          outputs.add(output.toLowerCase())
        }
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

if (errors.length > 0) {
  console.error(`歌曲数据检查失败（${errors.length} 项）：`)
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log(`歌曲数据检查通过：${checkedSongs} 首歌曲`)
