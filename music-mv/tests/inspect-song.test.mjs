import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const inspectScript = path.join(projectRoot, 'scripts', 'inspect-song.mjs')
const slug = '20261014-the-promise'

function inspect(...args) {
  return spawnSync(process.execPath, [inspectScript, '--slug', slug, ...args], {
    cwd: projectRoot,
    encoding: 'utf8',
  })
}

test('limits shot output to explicitly requested fields', () => {
  const output = inspect('--shot', '01', '--only', 'id,start,end')
  assert.equal(output.status, 0, output.stderr)
  const result = JSON.parse(output.stdout)

  assert.deepEqual(Object.keys(result), ['id', 'start', 'end'])
  assert.equal(result.id, '01')
})

test('omits prompts unless requested and rejects unknown selected fields', () => {
  const output = inspect('--shot', '01')
  assert.equal(output.status, 0, output.stderr)
  const shot = JSON.parse(output.stdout)
  assert.equal('prompt' in shot, false)
  assert.equal('promptZh' in shot, false)

  const invalid = inspect('--shot', '01', '--only', 'missingField')
  assert.equal(invalid.status, 1)
  assert.match(invalid.stderr, /未找到字段/)
})
