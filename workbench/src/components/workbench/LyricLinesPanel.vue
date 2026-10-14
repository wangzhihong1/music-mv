<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'

const props = defineProps({
  lines: {
    type: Array,
    default: () => [],
  },
  saveLine: {
    type: Function,
    required: true,
  },
  removeLine: {
    type: Function,
    required: true,
  },
  setRefreshPaused: {
    type: Function,
    required: true,
  },
})

const MAX_TEXT = 400
const MAX_NOTE = 200

const form = reactive({ text: '', note: '' })
const query = ref('')
const editingId = ref('')
const pendingDeleteId = ref('')
const formError = ref('')
const saving = ref(false)

const needle = computed(() => query.value.trim().toLowerCase())
const visibleLines = computed(() => {
  if (!needle.value) return props.lines
  return props.lines.filter((line) =>
    `${line.text}\n${line.note || ''}`.toLowerCase().includes(needle.value),
  )
})
const countLabel = computed(() => {
  if (!needle.value) return `${props.lines.length} 句`
  return `${visibleLines.value.length} / ${props.lines.length} 句`
})

watch(
  [() => form.text, () => form.note, editingId],
  () => {
    const dirty = Boolean(form.text.trim() || form.note.trim() || editingId.value)
    props.setRefreshPaused(dirty)
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  props.setRefreshPaused(false)
})

function resetForm() {
  form.text = ''
  form.note = ''
  editingId.value = ''
  formError.value = ''
}

function formatDay(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

function dayLabel(line) {
  const created = formatDay(line.createdAt)
  const updated = formatDay(line.updatedAt)
  if (!created) return ''
  if (updated && line.updatedAt !== line.createdAt) return `${created} 记下 · 已修改`
  return `${created} 记下`
}

function issue() {
  const text = form.text.trim()
  const note = form.note.trim()
  if (!text) return '先写下一句'
  if (text.length > MAX_TEXT) return `句子请控制在 ${MAX_TEXT} 字以内`
  if (note.length > MAX_NOTE) return `备忘请控制在 ${MAX_NOTE} 字以内`
  const duplicate = props.lines.some((line) => line.id !== editingId.value && line.text === text)
  if (duplicate) return '这句已经记下了'
  return ''
}

function editLine(line) {
  editingId.value = line.id
  form.text = line.text
  form.note = line.note || ''
  formError.value = ''
  pendingDeleteId.value = ''
}

async function submit() {
  const problem = issue()
  if (problem) {
    formError.value = problem
    return
  }
  saving.value = true
  formError.value = ''
  try {
    await props.saveLine({
      id: editingId.value,
      text: form.text.trim(),
      note: form.note.trim(),
    })
    resetForm()
  } catch (error) {
    formError.value = error.message || '保存失败'
  } finally {
    saving.value = false
  }
}

async function remove(line) {
  if (pendingDeleteId.value !== line.id) {
    pendingDeleteId.value = line.id
    return
  }
  saving.value = true
  formError.value = ''
  try {
    await props.removeLine(line.id)
    pendingDeleteId.value = ''
    if (editingId.value === line.id) resetForm()
  } catch (error) {
    formError.value = error.message || '删除失败'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <section class="panel lyric-lines-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">Lines</span>
        <h2>佳句</h2>
      </div>
      <span class="panel-count">{{ countLabel }}</span>
    </div>

    <div class="lyric-lines-layout">
      <form class="lyric-lines-form" @submit.prevent="submit">
        <p>想到一句就记在这里。以后写歌词时，可以借鉴它的写法，也可以直接用原句。</p>
        <label>
          句子
          <textarea
            v-model="form.text"
            rows="4"
            maxlength="400"
            placeholder="写下那一句"
            :disabled="saving"
          />
        </label>
        <label>
          备忘
          <textarea
            v-model="form.note"
            rows="2"
            maxlength="200"
            placeholder="可选。这句好在哪，或写词时想怎么用"
            :disabled="saving"
          />
        </label>
        <p v-if="formError" class="lyric-lines-error" role="alert">{{ formError }}</p>
        <div class="lyric-lines-actions">
          <button class="text-button is-primary" type="submit" :disabled="saving">
            {{ editingId ? '保存修改' : '记下' }}
          </button>
          <button
            v-if="editingId || form.text || form.note"
            class="text-button"
            type="button"
            :disabled="saving"
            @click="resetForm"
          >
            取消
          </button>
        </div>
      </form>

      <div class="lyric-lines-list">
        <label class="lyric-lines-search">
          查找
          <input v-model="query" type="search" placeholder="句子或备忘" />
        </label>

        <ul v-if="visibleLines.length">
          <li v-for="line in visibleLines" :key="line.id" :class="{ 'is-editing': line.id === editingId }">
            <p class="lyric-lines-text">{{ line.text }}</p>
            <p v-if="line.note" class="lyric-lines-note">{{ line.note }}</p>
            <footer>
              <span>{{ dayLabel(line) }}</span>
              <div>
                <button class="text-button" type="button" :disabled="saving" @click="editLine(line)">修改</button>
                <button class="text-button" type="button" :disabled="saving" @click="remove(line)">
                  {{ pendingDeleteId === line.id ? '确认删除' : '删除' }}
                </button>
              </div>
            </footer>
          </li>
        </ul>
        <p v-else class="archive-empty">
          {{ lines.length && needle ? '没有符合的句子。' : '还没有记下的句子。' }}
        </p>
      </div>
    </div>
  </section>
</template>
