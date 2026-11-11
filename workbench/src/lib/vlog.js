const ID_PATTERN = /^[a-z0-9-]{1,40}$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
const VIDEO_PATTERN = /^vlog\/[a-z0-9-]+\/[A-Za-z0-9._-]+\.mp4$/

export const VLOG_MAX_ENTRIES = 48
export const VLOG_MAX_SHOTS = 30
export const SHOT_MIN_SECONDS = 1
export const SHOT_MAX_SECONDS = 12
export const VLOG_MIN_SECONDS = 15
export const VLOG_MAX_SECONDS = 30

export const VLOG_LIMITS = {
  handle: 80,
  bio: 300,
  title: 100,
  theme: 80,
  monologue: 200,
  angle: 40,
  line: 80,
  prompt: 8000,
  promptZh: 2500,
  description: 500,
  tag: 20,
  tags: 8,
}

function fail(message) {
  const error = new Error(message)
  error.statusCode = 400
  throw error
}

function cleanText(value, max, label, { required = false } = {}) {
  const text = String(value ?? '').replace(/\r/g, '').trim()
  if (required && !text) fail(`${label}不能为空`)
  if (text.length > max) fail(`${label}不能超过 ${max} 字`)
  return text
}

function isIsoDate(value) {
  if (!DATE_PATTERN.test(value)) return false
  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))
  return date.getUTCFullYear() === year
    && date.getUTCMonth() === month - 1
    && date.getUTCDate() === day
}

function cleanAccount(source, label) {
  const account = source && typeof source === 'object' && !Array.isArray(source) ? source : {}
  return {
    handle: cleanText(account.handle, VLOG_LIMITS.handle, `${label}账号名`),
    bio: cleanText(account.bio, VLOG_LIMITS.bio, `${label}简介`),
  }
}

function cleanTags(tags, label) {
  if (tags == null) return []
  if (!Array.isArray(tags)) fail(`${label}话题必须是列表`)
  if (tags.length > VLOG_LIMITS.tags) fail(`${label}话题最多 ${VLOG_LIMITS.tags} 个`)
  return tags.map((tag) => {
    const text = String(tag ?? '').replace(/\r/g, '').trim().replace(/^#/, '').trim()
    if (!text) fail(`${label}话题不能为空`)
    if (text.length > VLOG_LIMITS.tag) fail(`${label}话题不能超过 ${VLOG_LIMITS.tag} 字`)
    return text
  })
}

function cleanPlatform(source, label) {
  const platform = source && typeof source === 'object' && !Array.isArray(source) ? source : {}
  return {
    title: cleanText(platform.title, VLOG_LIMITS.title, `${label}标题`),
    description: cleanText(platform.description, VLOG_LIMITS.description, `${label}正文`),
    tags: cleanTags(platform.tags, label),
  }
}

function cleanShots(shots, status) {
  if (!Array.isArray(shots)) fail('分镜列表无效')
  if (shots.length > VLOG_MAX_SHOTS) fail(`一条 vlog 最多 ${VLOG_MAX_SHOTS} 个分镜`)

  const seen = new Set()
  const cleaned = shots.map((shot) => {
    if (!shot || typeof shot !== 'object' || Array.isArray(shot)) fail('分镜无效')
    const id = String(shot.id || '').trim()
    if (!ID_PATTERN.test(id) || seen.has(id)) fail('分镜编号无效或重复')
    seen.add(id)

    const seconds = Number(shot.seconds)
    if (!Number.isInteger(seconds) || seconds < SHOT_MIN_SECONDS || seconds > SHOT_MAX_SECONDS) {
      fail(`每个分镜是 ${SHOT_MIN_SECONDS} 到 ${SHOT_MAX_SECONDS} 秒`)
    }

    const saved = {
      id,
      angle: cleanText(shot.angle, VLOG_LIMITS.angle, '机位', { required: true }),
      seconds,
    }
    const line = cleanText(shot.line, VLOG_LIMITS.line, '这一镜的话')
    if (line) saved.line = line
    const prompt = cleanText(shot.prompt, VLOG_LIMITS.prompt, '分镜提示词')
    if (prompt) saved.prompt = prompt
    const promptZh = cleanText(shot.promptZh, VLOG_LIMITS.promptZh, '分镜提示词中文')
    if (promptZh) saved.promptZh = promptZh
    const video = cleanMedia(shot.video, VIDEO_PATTERN, '分镜视频')
    if (video) saved.video = video
    return saved
  })

  const total = shotSecondsTotal(cleaned)
  if (total > VLOG_MAX_SECONDS) fail(`一条 vlog 不超过 ${VLOG_MAX_SECONDS} 秒`)
  if (status === 'ready' && (cleaned.length === 0 || total < VLOG_MIN_SECONDS)) {
    fail(`完成后的 vlog 要有分镜，并且总长 ${VLOG_MIN_SECONDS} 到 ${VLOG_MAX_SECONDS} 秒`)
  }
  return cleaned
}

function cleanMedia(value, pattern, label) {
  const media = String(value ?? '').replace(/\\/g, '/').trim()
  if (!media) return ''
  if (!pattern.test(media)) fail(`${label}路径无效，请放在该人物目录的 vlog/日期目录/文件名 下`)
  return media
}

export function createVlogId() {
  return `vlog-${Date.now().toString(36)}`
}

export function createShotId() {
  return `shot-${Date.now().toString(36)}-${Math.floor(Math.random() * 36).toString(36)}`
}

export function shotSecondsTotal(shots) {
  return (Array.isArray(shots) ? shots : []).reduce((sum, shot) => sum + Number(shot?.seconds || 0), 0)
}

export function parseTags(value) {
  return String(value || '')
    .split(/[,，\s]+/)
    .map((tag) => tag.replace(/^#/, '').trim())
    .filter(Boolean)
}

export function platformPostText(platform) {
  const title = String(platform?.title || '').trim()
  const description = String(platform?.description || '').trim()
  const tags = (Array.isArray(platform?.tags) ? platform.tags : [])
    .map((tag) => String(tag).replace(/^#/, '').trim())
    .filter(Boolean)
  const lines = []
  if (title) lines.push(title)
  if (description) {
    if (lines.length) lines.push('')
    lines.push(description)
  }
  if (tags.length) {
    if (lines.length) lines.push('')
    lines.push(tags.map((tag) => `#${tag}`).join(' '))
  }
  return lines.join('\n')
}

export function accountPostText(account) {
  return [account?.handle, account?.bio]
    .map((line) => String(line || '').trim())
    .filter(Boolean)
    .join('\n\n')
}

export function normalizeVlog(vlog) {
  if (!vlog || typeof vlog !== 'object' || Array.isArray(vlog)) fail('vlog 档案无效')
  if (!Array.isArray(vlog.entries)) fail('视频列表无效')
  if (vlog.entries.length > VLOG_MAX_ENTRIES) fail(`一个人物最多保留 ${VLOG_MAX_ENTRIES} 条视频`)

  const seen = new Set()
  const entries = vlog.entries.map((item) => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) fail('视频条目无效')
    const id = String(item.id || '').trim()
    if (!ID_PATTERN.test(id) || seen.has(id)) fail('视频编号无效或重复')
    seen.add(id)

    const status = item.status === 'ready' ? 'ready' : 'draft'
    const completedAt = String(item.completedAt || '').trim()
    if (completedAt && !isIsoDate(completedAt)) fail('完成时间用 YYYY-MM-DD')
    if (status === 'ready' && !completedAt) fail('完成后要填写完成时间')

    const saved = {
      id,
      title: cleanText(item.title, VLOG_LIMITS.title, '标题', { required: true }),
      theme: cleanText(item.theme, VLOG_LIMITS.theme, '拍摄主题', { required: true }),
      status,
      shots: cleanShots(item.shots, status),
      douyin: cleanPlatform(item.douyin, '抖音'),
      youtube: cleanPlatform(item.youtube, 'YouTube'),
    }
    const monologue = cleanText(item.monologue, VLOG_LIMITS.monologue, '独白')
    if (monologue) saved.monologue = monologue
    if (completedAt) saved.completedAt = completedAt
    const video = cleanMedia(item.video, VIDEO_PATTERN, '合成视频')
    if (video) saved.video = video
    return saved
  })

  return {
    douyin: cleanAccount(vlog.douyin, '抖音'),
    youtube: cleanAccount(vlog.youtube, 'YouTube'),
    entries,
  }
}
