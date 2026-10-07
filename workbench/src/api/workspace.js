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

export async function deleteSceneImage(folder, fileName) {
  const response = await fetch(
    `/api/songs/${encodeURIComponent(folder)}/scenes/${encodeURIComponent(fileName)}`,
    { method: 'DELETE', cache: 'no-store' },
  )
  return readJson(response, `场景图片删除失败（${response.status}）`)
}

export async function deleteVoidedShot(folder, fileName) {
  const response = await fetch(
    `/api/songs/${encodeURIComponent(folder)}/raw-shots/${encodeURIComponent(fileName)}`,
    { method: 'DELETE', cache: 'no-store' },
  )
  return readJson(response, `作废分镜视频删除失败（${response.status}）`)
}

export async function setRawShotStatus(folder, fileName, action) {
  const response = await fetch(
    `/api/songs/${encodeURIComponent(folder)}/raw-shots/${encodeURIComponent(fileName)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      body: JSON.stringify({ action }),
    },
  )
  const fallback = action === 'restore'
    ? `分镜视频恢复失败（${response.status}）`
    : `分镜视频作废失败（${response.status}）`
  return readJson(response, fallback)
}

export async function deleteUpscaleVideo(folder, fileName) {
  const response = await fetch(
    `/api/songs/${encodeURIComponent(folder)}/intermediate/${encodeURIComponent(fileName)}`,
    { method: 'DELETE', cache: 'no-store' },
  )
  return readJson(response, `超分视频删除失败（${response.status}）`)
}

export async function confirmSceneReference(folder, payload) {
  const response = await fetch(
    `/api/songs/${encodeURIComponent(folder)}/scenes/confirm`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      body: JSON.stringify(payload),
    },
  )
  return readJson(response, `场景基准确认失败（${response.status}）`)
}
