import { formatTimecode, timeToSeconds } from '@/lib/time.js'

export const SHORTS_MIN_SECONDS = 1
export const SHORTS_MAX_SECONDS = 60
export const SHORTS_MAX_COUNT = 12

export function shortDuration(item) {
  const start = timeToSeconds(item?.start)
  const end = timeToSeconds(item?.end)
  if (start === null || end === null) return null
  return Math.round((end - start) * 10) / 10
}

export function shortIssue(item, { takenIds = [] } = {}) {
  const title = String(item?.title || '').trim()
  if (!title) return '先写一个短视频标题'
  if (title.length > 100) return '标题不能超过 100 字'
  if (timeToSeconds(item?.start) === null || timeToSeconds(item?.end) === null) {
    return '起止时间用 MM:SS，半秒写作 MM:SS.S'
  }
  const duration = shortDuration(item)
  if (duration < SHORTS_MIN_SECONDS) return '精彩片段至少 1 秒'
  if (duration > SHORTS_MAX_SECONDS) return `一条 Shorts 最长 ${SHORTS_MAX_SECONDS} 秒，请缩短这段`
  if (takenIds.includes(item.id)) return '这条短视频已经存在'
  if (String(item?.lyricCue || '').trim().length > 200) return '引用的歌词不能超过 200 字'
  if (String(item?.note || '').trim().length > 300) return '备注不能超过 300 字'
  return ''
}

export function clampEnd(start, end) {
  const startSeconds = timeToSeconds(start)
  const endSeconds = timeToSeconds(end)
  if (startSeconds === null || endSeconds === null) return end
  if (endSeconds - startSeconds <= SHORTS_MAX_SECONDS) return end
  return formatTimecode(startSeconds + SHORTS_MAX_SECONDS)
}

export function youtubeShortText(song, item) {
  const lines = [
    item.title,
    '',
    `《${song.title || '未命名'}》精彩片段 ${item.start}–${item.end}`,
  ]
  if (String(item.lyricCue || '').trim()) lines.push(item.lyricCue.trim())
  if (String(item.note || '').trim()) lines.push(item.note.trim())
  lines.push('', '#Shorts')
  return lines.join('\n')
}
