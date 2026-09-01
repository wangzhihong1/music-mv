import { writeFile } from 'node:fs/promises'

const [, , outputPath, title, date, brief = '', slug = ''] = process.argv

if (!outputPath || !title || !date) {
  console.error('用法：node scripts/create-song-json.mjs <输出路径> <歌名> <日期> [创作描述] [slug]')
  process.exit(1)
}

const hasBrief = Boolean(brief) && brief !== '（未提供，可后续补充）'

const song = {
  schemaVersion: 2,
  slug: slug || 'untitled',
  title,
  date,
  status: '企划中',
  coreStatement: hasBrief ? brief : '',
  metadata: {
    genre: '',
    mood: '',
    tempo: '',
    key: '',
    vocal: '',
    duration: '',
  },
  prompts: [
    { key: 'style', label: '风格', zh: '', en: '' },
    { key: 'mood', label: '情绪', zh: '', en: '' },
    { key: 'instruments', label: '乐器', zh: '', en: '' },
    { key: 'vocal', label: '演唱方式', zh: '', en: '' },
    { key: 'structure', label: '结构与动态', zh: '', en: '' },
    { key: 'avoid', label: '避免元素', zh: '', en: '' },
  ],
  mvWorkflow: {
    storyStatus: 'not_started',
    durationConfirmed: false,
    durationConfirmedAt: '',
    scriptStatus: 'not_started',
  },
  mvStory: {
    summary: '',
    opening: '',
    development: '',
    turningPoint: '',
    climax: '',
    ending: '',
  },
  production: {
    mvDirectory: '',
    keyframes: 'not_started',
    video: 'not_started',
    post: 'not_started',
    delivery: 'not_started',
  },
  sections: [],
  shots: [],
}

await writeFile(outputPath, `${JSON.stringify(song, null, 2)}\n`, 'utf8')
