import { access, readFile, readdir } from 'node:fs/promises'
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
const stagedStatuses = new Set(['not_started', 'draft', 'in_progress', 'complete'])

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

  const workflow = song.mvWorkflow || {}
  const newWorkflowFields = ['scriptSkeletonStatus', 'visualReferencesStatus', 'promptStatus']
  const usesNewWorkflow = newWorkflowFields.some((field) => Object.hasOwn(workflow, field))
  for (const field of newWorkflowFields) {
    if (Object.hasOwn(workflow, field) && !stagedStatuses.has(workflow[field]) && workflow[field] !== 'confirmed') {
      errors.push(`${relativePath}: mvWorkflow.${field} 状态无效`)
    }
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
      if (duration < 0.5 || duration > 8) {
        errors.push(`${relativePath}: ${label} 时长为 ${duration} 秒，必须在 0.5–8 秒内`)
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

    const legacyScriptComplete = !usesNewWorkflow && workflow.scriptStatus === 'complete'
    const skeletonComplete = workflow.scriptSkeletonStatus === 'complete' || legacyScriptComplete
    const promptsComplete = usesNewWorkflow
      ? workflow.promptStatus === 'complete'
      : legacyScriptComplete

    if (skeletonComplete) {
      if (workflow.storyStatus !== 'confirmed') {
        errors.push(`${relativePath}: MV 脚本骨架标记完成前，MV 故事必须由用户确认`)
      }
      if (workflow.durationConfirmed !== true) {
        errors.push(`${relativePath}: MV 脚本骨架标记完成前，歌曲总时长必须由用户确认`)
      }

      const skeletonFields = [
        'sectionId',
        'storyBeat',
        'shot',
        'action',
        'visual',
        'camera',
        'location',
        'transition',
        'soundFocus',
      ]
      for (const [index, shot] of shots.entries()) {
        const label = shot.id || `第 ${index + 1} 镜`
        for (const field of skeletonFields) {
          if (!String(shot[field] || '').trim()) {
            errors.push(`${relativePath}: ${label} 的脚本骨架缺少 ${field}`)
          }
        }
        if (!Array.isArray(shot.subjects)) {
          errors.push(`${relativePath}: ${label} 的 subjects 必须是数组；空景使用空数组`)
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
          errors.push(`${relativePath}: 完整 MV 脚本骨架缺少故事阶段 ${beat} 对应的分镜`)
        }
      }
    }

    if (promptsComplete) {
      if (workflow.generationMethod !== 'characterReferenceVideo') {
        errors.push(`${relativePath}: 最终分镜提示词必须使用角色参考图直接生成分镜视频`)
      }
      if (usesNewWorkflow && !skeletonComplete) {
        errors.push(`${relativePath}: 最终分镜提示词完成前，MV 脚本骨架必须完成`)
      }
      if (usesNewWorkflow && workflow.visualReferencesStatus !== 'confirmed') {
        errors.push(`${relativePath}: 最终分镜提示词完成前，人物/场景基准图必须确认`)
      }

      const characterIds = new Set((song.characterLooks || []).map((item) => item.id))
      const sceneReferences = Array.isArray(song.sceneReferences) ? song.sceneReferences : []
      const sceneReferenceIds = new Set()
      if (usesNewWorkflow && !Array.isArray(song.sceneReferences)) {
        errors.push(`${relativePath}: 新流程的最终分镜提示词必须提供 sceneReferences 数组`)
      }
      for (const [index, reference] of sceneReferences.entries()) {
        const label = reference.id || `第 ${index + 1} 个场景基准图`
        if (!String(reference.id || '').trim()) errors.push(`${relativePath}: ${label} 缺少 id`)
        if (!String(reference.name || '').trim()) errors.push(`${relativePath}: ${label} 缺少 name`)
        if (!String(reference.description || '').trim()) errors.push(`${relativePath}: ${label} 缺少 description`)
        const referencePath = String(reference.path || '').replace(/\\/g, '/')
        if (!/^assets\/scenes\/.+/i.test(referencePath)) {
          errors.push(`${relativePath}: ${label} 的 path 必须位于 assets/scenes/`)
        } else if (usesNewWorkflow) {
          try {
            await access(path.join(songsRoot, entry.name, referencePath))
          } catch {
            errors.push(`${relativePath}: ${label} 的场景基准图文件不存在：${referencePath}`)
          }
        }
        if (usesNewWorkflow && reference.status !== 'confirmed') {
          errors.push(`${relativePath}: ${label} 必须由用户确认`)
        }
        if (reference.id) {
          if (sceneReferenceIds.has(reference.id)) {
            errors.push(`${relativePath}: 场景基准图 ID 重复：${reference.id}`)
          }
          sceneReferenceIds.add(reference.id)
        }
      }

      const outputs = new Set()
      for (const [index, shot] of shots.entries()) {
        const label = shot.id || `第 ${index + 1} 镜`
        if (!Array.isArray(shot.subjects)) {
          errors.push(`${relativePath}: ${label} 的 subjects 必须是数组`)
        } else if (usesNewWorkflow) {
          for (const subjectId of shot.subjects) {
            if (!characterIds.has(subjectId)) {
              errors.push(`${relativePath}: ${label} 引用了不存在的角色 ID：${subjectId}`)
            }
          }
        }
        if (usesNewWorkflow && !Array.isArray(shot.sceneReferenceIds)) {
          errors.push(`${relativePath}: ${label} 的 sceneReferenceIds 必须是数组；无需场景图时使用空数组`)
        } else {
          for (const sceneId of shot.sceneReferenceIds || []) {
            if (!sceneReferenceIds.has(sceneId)) {
              errors.push(`${relativePath}: ${label} 引用了不存在的场景基准图 ID：${sceneId}`)
            }
          }
        }
        if (!['characterVideo', 'composite'].includes(shot.genMode)) {
          errors.push(`${relativePath}: ${label} 的 genMode 必须为 characterVideo 或 composite`)
        }
        if (!String(shot.prompt || '').trim()) {
          errors.push(`${relativePath}: ${label} 缺少可执行的 H3 参考图生视频提示词`)
        }
        if (usesNewWorkflow && !String(shot.promptZh || '').trim()) {
          errors.push(`${relativePath}: ${label} 缺少与英文对应的完整中文提示词`)
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
    }
}

if (errors.length > 0) {
  console.error(`歌曲数据检查失败（${errors.length} 项）：`)
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log(`歌曲数据检查通过：${checkedSongs} 首歌曲`)
