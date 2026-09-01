export function timeToSeconds(value) {
  if (typeof value !== 'string' || !/^\d{2,}:\d{2}$/.test(value)) return null
  const [minutes, seconds] = value.split(':').map(Number)
  if (Number.isNaN(minutes) || Number.isNaN(seconds) || seconds > 59) return null
  return minutes * 60 + seconds
}

export function parseDisplayTime(value) {
  const [minutes = 0, seconds = 0] = String(value || '0:00').split(':').map(Number)
  return minutes * 60 + seconds
}

export function formatDuration(totalSeconds) {
  const safeSeconds = Math.max(0, Number(totalSeconds) || 0)
  const minutes = Math.floor(safeSeconds / 60)
  const seconds = safeSeconds % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

export function shotDuration(shot) {
  return Math.max(0, parseDisplayTime(shot?.end) - parseDisplayTime(shot?.start))
}
