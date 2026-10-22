import { timeToSeconds } from './time.js'

const scriptStatuses = new Set(['not_started', 'draft', 'in_progress', 'complete'])
const visualStatuses = new Set(['not_started', 'draft', 'in_progress', 'confirmed'])
const promptStatuses = new Set(['not_started', 'draft', 'in_progress', 'complete'])
const storyStatuses = new Set(['not_started', 'draft', 'in_progress', 'confirmed'])
const newWorkflowFields = ['scriptSkeletonStatus', 'visualReferencesStatus', 'promptStatus']

export function validateWorkflowGates(song, relativePath) {
  const errors = []
  const workflow = song.mvWorkflow || {}
  const usesNewWorkflow = newWorkflowFields.some((field) => Object.hasOwn(workflow, field))
  const legacyScriptComplete = !usesNewWorkflow && workflow.scriptStatus === 'complete'
  const scriptStatus = workflow.scriptSkeletonStatus ?? 'not_started'
  const visualStatus = workflow.visualReferencesStatus ?? 'not_started'
  const promptStatus = workflow.promptStatus ?? 'not_started'
  const skeletonStarted = ['draft', 'in_progress', 'complete'].includes(scriptStatus) || legacyScriptComplete
  const skeletonComplete = scriptStatus === 'complete' || legacyScriptComplete
  const promptsStarted = ['draft', 'in_progress', 'complete'].includes(promptStatus)
  const promptsComplete = promptStatus === 'complete' || legacyScriptComplete
  const shots = Array.isArray(song.shots) ? song.shots : []
  const durationSeconds = timeToSeconds(song.metadata?.duration)

  if (workflow.storyStatus !== undefined && !storyStatuses.has(workflow.storyStatus)) {
    errors.push(`${relativePath}: mvWorkflow.storyStatus 状态无效`)
  }
  if (Object.hasOwn(workflow, 'scriptSkeletonStatus') && !scriptStatuses.has(scriptStatus)) {
    errors.push(`${relativePath}: mvWorkflow.scriptSkeletonStatus 状态无效`)
  }
  if (Object.hasOwn(workflow, 'visualReferencesStatus') && !visualStatuses.has(visualStatus)) {
    errors.push(`${relativePath}: mvWorkflow.visualReferencesStatus 状态无效`)
  }
  if (Object.hasOwn(workflow, 'promptStatus') && !promptStatuses.has(promptStatus)) {
    errors.push(`${relativePath}: mvWorkflow.promptStatus 状态无效`)
  }

  if (workflow.durationConfirmed === true) {
    if (durationSeconds === null) {
      errors.push(`${relativePath}: durationConfirmed 为 true 时必须填写有效 metadata.duration（MM:SS）`)
    }
    if (!/^(?:\d{8}|\d{4}-\d{2}-\d{2})$/.test(String(workflow.durationConfirmedAt || ''))) {
      errors.push(`${relativePath}: durationConfirmed 为 true 时必须填写 durationConfirmedAt`)
    }
  }

  if (workflow.storyStatus === 'confirmed' && usesNewWorkflow) {
    for (const field of ['summary', 'narrative', 'opening', 'development', 'turningPoint', 'climax', 'ending']) {
      if (!String(song.mvStory?.[field] || '').trim()) {
        errors.push(`${relativePath}: 故事标记已确认，但 mvStory.${field} 为空`)
      }
    }
  }

  if (skeletonStarted) {
    if (workflow.storyStatus !== 'confirmed') {
      errors.push(`${relativePath}: MV 脚本开始前，MV 故事必须由用户确认`)
    }
    if (workflow.durationConfirmed !== true || durationSeconds === null) {
      errors.push(`${relativePath}: MV 脚本开始前，歌曲总时长必须有效且由用户确认`)
    }
  }
  if (skeletonComplete && shots.length === 0) {
    errors.push(`${relativePath}: MV 脚本标记完成，但没有分镜 shots`)
  }

  if (['draft', 'in_progress', 'confirmed'].includes(visualStatus) && !skeletonComplete) {
    errors.push(`${relativePath}: 人物/场景基准图阶段开始前，MV 脚本骨架必须完成`)
  }
  if (promptsStarted && !skeletonComplete) {
    errors.push(`${relativePath}: 最终分镜提示词阶段开始前，MV 脚本骨架必须完成`)
  }
  if (promptsStarted && visualStatus !== 'confirmed') {
    errors.push(`${relativePath}: 最终分镜提示词阶段开始前，人物/场景基准图必须确认`)
  }
  if (promptsComplete && shots.length === 0) {
    errors.push(`${relativePath}: 最终分镜提示词标记完成，但没有分镜 shots`)
  }

  return { errors, usesNewWorkflow, skeletonComplete, promptsComplete }
}
