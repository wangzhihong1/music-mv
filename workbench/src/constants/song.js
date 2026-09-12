export const EMPTY_SONG = {
  id: '',
  title: '暂无歌曲',
  date: '',
  status: '等待创建',
  coreStatement: '使用新建歌曲入口后，作品会显示在这里。',
  metadata: {},
  prompts: [],
  characterLooks: [],
  sections: [],
  shots: [],
  mvWorkflow: {},
  mvStory: {},
  production: {
    mvDirectory: '',
    characterReferences: 'not_started',
    shotVideos: 'not_started',
    post: 'not_started',
    delivery: 'not_started',
    summary: '',
    groups: [],
  },
}

export const METADATA_FIELDS = [
  ['风格', 'genre'],
  ['情绪', 'mood'],
  ['速度', 'tempo'],
  ['调性', 'key'],
  ['演唱', 'vocal'],
  ['时长', 'duration'],
]

export const STORY_FIELDS = [
  ['summary', '故事概要'],
  ['opening', '开场'],
  ['development', '发展'],
  ['turningPoint', '转折'],
  ['climax', '高潮'],
  ['ending', '结尾'],
]
