export const NAV_ITEMS = [
  { id: 'in-progress', label: '创作中', kind: 'collection' },
  { id: 'completed', label: '已完成', kind: 'collection' },
  { id: 'production', label: '本机生成', kind: 'collection' },
  { id: 'inspiration', label: '灵感池', kind: 'archive' },
  { id: 'library', label: '公共素材', kind: 'archive' },
]

export const SONG_NAVS = ['in-progress', 'completed', 'production']

export const PRODUCTION_STAGES = ['character-references', 'shot-videos', 'post', 'delivery']

export const STAGE_VIEW_MODES = {
  brief: 'brief',
  style: 'style',
  lyrics: 'lyrics',
  prompts: 'prompts',
  'mv-story': 'story',
  'mv-script': 'script',
  'character-references': 'production',
  'shot-videos': 'production',
  post: 'production',
  delivery: 'production',
}

export const HEADER_STAGE = {
  overview: '',
  align: 'mv-script',
  production: 'delivery',
}

export const PRODUCTION_FOCUS = {
  'character-references': ['characters'],
  'shot-videos': ['raw'],
  post: ['intermediate'],
  delivery: ['final'],
}

export const VIEW_MODES = [
  { id: 'overview', label: '创作总览' },
  { id: 'align', label: 'MV 对齐' },
  { id: 'production', label: '本机成片' },
]

export const ARCHIVE_COPY = {
  inspiration: {
    kicker: 'Inspiration',
    title: '灵感池',
    description: '记录尚未立项的主题、句子、故事和声音想法。确定创作后，再建立歌曲文件夹。',
  },
  library: {
    kicker: 'Library',
    title: '公共素材',
    description: '可复用的风格描述、歌词素材和中英文提示词，供各首歌引用，不绑定单曲。',
  },
}
