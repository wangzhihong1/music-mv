export function timeToSeconds(value) {
  if (typeof value !== 'string' || !/^\d{2,}:\d{2}(\.\d)?$/.test(value)) return null
  const [minutes, seconds] = value.split(':').map(Number)
  if (Number.isNaN(minutes) || Number.isNaN(seconds) || seconds >= 60) return null
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

export function formatTimecode(totalSeconds) {
  const safe = Math.max(0, Math.round((Number(totalSeconds) || 0) * 10) / 10)
  const minutes = Math.floor(safe / 60)
  const remainder = Math.round((safe - minutes * 60) * 10) / 10
  if (remainder >= 60) return formatTimecode((minutes + 1) * 60)
  const whole = Math.floor(remainder)
  const tenth = Math.round((remainder - whole) * 10)
  const base = `${String(minutes).padStart(2, '0')}:${String(whole).padStart(2, '0')}`
  return tenth ? `${base}.${tenth}` : base
}

export function shotDuration(shot) {
  return Math.max(0, parseDisplayTime(shot?.end) - parseDisplayTime(shot?.start))
}
