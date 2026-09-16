async function readJson(response, fallbackMessage) {
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(payload.error || fallbackMessage)
  }
  return payload
}

export async function fetchWorkspace() {
  const response = await fetch('/api/workspace', { cache: 'no-store' })
  return readJson(response, `工作台数据读取失败（${response.status}）`)
}

export async function saveSongLyrics(folder, sections) {
  const response = await fetch(`/api/songs/${encodeURIComponent(folder)}/lyrics`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify({ sections }),
  })
  return readJson(response, `歌词保存失败（${response.status}）`)
}
