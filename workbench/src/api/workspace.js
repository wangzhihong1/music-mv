export async function fetchWorkspace() {
  const response = await fetch('/api/workspace', { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`工作台数据读取失败（${response.status}）`)
  }

  return response.json()
}
