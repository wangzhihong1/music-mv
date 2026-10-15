export const NAV_ITEMS = [
  { id: 'in-progress', label: '创作中', kind: 'collection' },
  { id: 'completed', label: '已完成', kind: 'collection' },
  { id: 'characters', label: '人物', kind: 'characters' },
  { id: 'lyric-lines', label: '佳句', kind: 'archive' },
  { id: 'library', label: '公共素材', kind: 'archive' },
]

export const SONG_NAVS = ['in-progress', 'completed']
export const ARCHIVE_NAVS = ['lyric-lines', 'library']
export const CHARACTER_NAV = 'characters'

export const PRODUCTION_STAGES = ['visual-references', 'shot-videos', 'post', 'delivery']

export const STAGE_VIEW_MODES = {
  'brief-style': 'brief-style',
  lyrics: 'lyrics',
  prompts: 'prompts',
  'mv-story': 'story',
  'mv-script': 'script',
  'visual-references': 'production',
  'mv-prompts': 'shot-prompts',
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
  'visual-references': ['characters', 'scenes'],
  'shot-videos': ['raw'],
  post: ['intermediate'],
  delivery: ['final'],
}

export const VIEW_MODES = [
  { id: 'overview', label: '创作总览' },
  { id: 'align', label: 'MV 对齐' },
  { id: 'production', label: '本机成片' },
  { id: 'shorts', label: 'Shorts' },
]

export const ARCHIVE_COPY = {
  library: {
    kicker: 'Library',
    title: '公共素材',
    description: '可复用的风格描述、歌词素材和中英文提示词，供各首歌引用，不绑定单曲。',
  },
}
