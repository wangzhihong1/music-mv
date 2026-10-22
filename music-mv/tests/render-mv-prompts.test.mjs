import assert from 'node:assert/strict'
import test from 'node:test'
import { GENERATED_PROMPT_MARKER, renderMvPrompts } from '../shared/render-mv-prompts.js'

test('renders structured shot prompts and reference mapping from song data', () => {
  const song = {
    title: '测试歌曲',
    mvWorkflow: {
      scriptSkeletonStatus: 'complete',
      visualReferencesStatus: 'confirmed',
      promptStatus: 'complete',
    },
    sceneReferences: [{
      id: 'studio',
      name: '录音室',
      path: 'assets/scenes/studio.png',
      status: 'confirmed',
      description: '左侧钢琴 | 右侧窗户',
    }],
    shots: [{
      id: '01',
      start: '00:00',
      end: '00:05',
      shot: '门口回望',
      subjects: ['singer'],
      sceneReferenceIds: ['studio'],
      genMode: 'characterVideo',
      output: 'generated/video/raw/shot_01_h3_v01.mp4',
      referenceOrder: ['<Picture 1> singer: characters/singer/three-view.png'],
      prompt: 'subject_definitions:\n<Subject 1> is the singer.',
      promptZh: '主体定义：歌手。',
    }],
  }

  const markdown = renderMvPrompts(song, '20261020-test-song', [{
    id: 'singer',
    name: '歌手',
    threeView: 'characters/singer/three-view.png',
  }])

  assert.ok(markdown.includes(GENERATED_PROMPT_MARKER))
  assert.ok(markdown.includes('左侧钢琴 \\| 右侧窗户'))
  assert.match(markdown, /<Picture 1> singer/)
  assert.match(markdown, /subject_definitions:/)
  assert.match(markdown, /主体定义：歌手。/)
  assert.match(markdown, /generated\/video\/raw\/shot_01_h3_v01\.mp4/)
})

test('renders an explicit empty state for songs without prompts', () => {
  const markdown = renderMvPrompts({ title: '无分镜', shots: [] }, '20261020-empty')
  assert.match(markdown, /暂无分镜提示词。/)
  assert.match(markdown, /暂无场景基准图/)
})
