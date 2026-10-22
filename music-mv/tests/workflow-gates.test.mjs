import assert from 'node:assert/strict'
import test from 'node:test'
import { validateWorkflowGates } from '../shared/workflow-gates.js'

test('rejects completed script and prompt states when shots are missing', () => {
  const result = validateWorkflowGates({
    mvWorkflow: {
      storyStatus: 'confirmed',
      durationConfirmed: true,
      durationConfirmedAt: '20261020',
      scriptSkeletonStatus: 'complete',
      visualReferencesStatus: 'confirmed',
      promptStatus: 'complete',
    },
    metadata: { duration: '03:00' },
    mvStory: {
      summary: 'summary',
      narrative: 'narrative',
      opening: 'opening',
      development: 'development',
      turningPoint: 'turn',
      climax: 'climax',
      ending: 'ending',
    },
    shots: [],
  }, 'songs/test/song.json')

  assert.ok(result.errors.some((error) => error.includes('脚本标记完成，但没有分镜')))
  assert.ok(result.errors.some((error) => error.includes('提示词标记完成，但没有分镜')))
})

test('requires prerequisite states before visual references and prompts', () => {
  const result = validateWorkflowGates({
    mvWorkflow: {
      visualReferencesStatus: 'not_started',
      promptStatus: 'complete',
    },
    shots: [],
  }, 'songs/test/song.json')

  assert.ok(result.errors.some((error) => error.includes('脚本骨架必须完成')))
  assert.ok(result.errors.some((error) => error.includes('人物/场景基准图必须确认')))
})

test('keeps legacy completed scripts valid when their gates and shots exist', () => {
  const result = validateWorkflowGates({
    mvWorkflow: {
      storyStatus: 'confirmed',
      durationConfirmed: true,
      durationConfirmedAt: '20261020',
      scriptStatus: 'complete',
    },
    metadata: { duration: '03:00' },
    shots: [{ id: '01' }],
  }, 'songs/legacy/song.json')

  assert.deepEqual(result.errors, [])
  assert.equal(result.skeletonComplete, true)
  assert.equal(result.promptsComplete, true)
})
