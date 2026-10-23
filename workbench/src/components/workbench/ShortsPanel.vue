<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { ClipboardCheck, Copy } from '@lucide/vue'
import CopyFeedback from '@/components/common/CopyFeedback.vue'
import { formatDuration, timeToSeconds } from '@/lib/time.js'
import { clampEnd, shortDuration, shortIssue, youtubeShortText } from '@/lib/shorts.js'

const props = defineProps({
  song: {
    type: Object,
    required: true,
  },
  copiedTarget: {
    type: String,
    default: '',
  },
  saveShorts: {
    type: Function,
    required: true,
  },
})

const emit = defineEmits(['copy'])

const emptyForm = () => ({
  title: '',
  start: '',
  end: '',
  sectionId: '',
  lyricCue: '',
  note: '',
  status: 'draft',
})

const form = reactive(emptyForm())
const editingId = ref('')
const formError = ref('')
const saving = ref(false)

const sections = computed(() => props.song.sections || [])
const shots = computed(() => props.song.shots || [])
const shorts = computed(() => (Array.isArray(props.song.shorts) ? props.song.shorts : []))
const previewDuration = computed(() => shortDuration(form))
const previewLabel = computed(() => (
  previewDuration.value === null ? '填写起止时间' : formatDuration(previewDuration.value)
))

watch(() => props.song.id, resetForm)

function resetForm() {
  Object.assign(form, emptyForm())
  editingId.value = ''
  formError.value = ''
}

function sectionLines(section) {
  return (section.lyrics || []).map((line) => line.trim()).filter(Boolean)
}

function sectionShots(section) {
  return shots.value.filter((shot) => shot.sectionId === section.id && shot.start && shot.end)
}

function useSection(section) {
  const lines = sectionLines(section)
  form.sectionId = section.id
  form.lyricCue = lines[0] || ''
  if (!form.title.trim()) form.title = `${props.song.title || '歌曲'} · ${section.label}`
  const related = sectionShots(section)
  if (related.length > 0) {
    form.start = related[0].start
    form.end = clampEnd(related[0].start, related.at(-1).end)
  }
  formError.value = ''
}

function editShort(item) {
  editingId.value = item.id
  Object.assign(form, {
    title: item.title || '',
    start: item.start || '',
    end: item.end || '',
    sectionId: item.sectionId || '',
    lyricCue: item.lyricCue || '',
    note: item.note || '',
    status: item.status === 'ready' ? 'ready' : 'draft',
  })
  formError.value = ''
}

function buildItem() {
  const current = shorts.value.find((entry) => entry.id === editingId.value)
  const item = {
    id: editingId.value || `short-${Date.now().toString(36)}`,
    title: form.title.trim(),
    start: form.start.trim(),
    end: form.end.trim(),
    sectionId: form.sectionId,
    lyricCue: form.lyricCue.trim(),
    note: form.note.trim(),
    status: form.status === 'ready' ? 'ready' : 'draft',
  }
  if (current?.output) item.output = current.output
  return item
}

async function persist(next) {
  saving.value = true
  formError.value = ''
  try {
    await props.saveShorts(next)
    return true
  } catch (error) {
    formError.value = error.message || '短视频保存失败'
    return false
  } finally {
    saving.value = false
  }
}

async function submit() {
  const item = buildItem()
  const takenIds = shorts.value
    .map((entry) => entry.id)
    .filter((id) => id !== editingId.value)
  const issue = shortIssue(item, { takenIds })
  if (issue) {
    formError.value = issue
    return
  }
  if (!editingId.value && shorts.value.length >= 12) {
    formError.value = '一首歌最多保留 12 条 Shorts'
    return
  }
  const next = editingId.value
    ? shorts.value.map((entry) => (entry.id === editingId.value ? item : entry))
    : [...shorts.value, item]
  if (await persist(next)) resetForm()
}

async function removeShort(item) {
  await persist(shorts.value.filter((entry) => entry.id !== item.id))
}

async function toggleReady(item) {
  const next = shorts.value.map((entry) => (
    entry.id === item.id
      ? { ...entry, status: entry.status === 'ready' ? 'draft' : 'ready' }
      : entry
  ))
  await persist(next)
}

function copyShort(item) {
  emit('copy', youtubeShortText(props.song, item), item.id)
}

function rangesOverlap(leftStart, leftEnd, rightStart, rightEnd) {
  return leftStart < rightEnd && rightStart < leftEnd
}

function finalFor(item) {
  const name = String(item.output || '').split('/').pop()
  if (!name) return null
  const finals = (props.song.production?.groups || [])
    .find((group) => group.id === 'final')?.items || []
  const media = finals.find((entry) => entry.name === name && entry.url && !entry.missing)
  if (!media) return null
  return {
    url: media.url,
    caption: `成片 ${item.start}–${item.end}`,
  }
}

function clipsFor(item) {
  const start = timeToSeconds(item.start)
  const end = timeToSeconds(item.end)
  if (start === null || end === null) return []
  const rawItems = (props.song.production?.groups || [])
    .find((group) => group.id === 'raw')?.items || []
  return (props.song.shots || [])
    .filter((shot) => {
      const shotStart = timeToSeconds(shot.start)
      const shotEnd = timeToSeconds(shot.end)
      return shotStart !== null && shotEnd !== null && rangesOverlap(start, end, shotStart, shotEnd)
    })
    .map((shot) => {
      const name = String(shot.output || '').split('/').pop()
      const media = rawItems.find((entry) => entry.name === name && entry.url && !entry.missing && !entry.voided)
      return {
        id: shot.id,
        name,
        url: media?.url || '',
        caption: media
          ? `${shot.start}–${shot.end} ${shot.shot || name}`
          : `${shot.start}–${shot.end} 还没有新的测试视频`,
      }
    })
}
</script>

<template>
  <section class="panel shorts-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">YouTube Shorts</span>
        <h2>短视频</h2>
      </div>
      <p class="shorts-lead">从这首歌里挑一段精彩，做成竖屏短视频。不是整支 MV。一条最长 60 秒。</p>
    </div>

    <div class="shorts-layout">
      <div class="shorts-sources">
        <h3>歌曲里的段落</h3>
        <p v-if="sections.length === 0" class="shorts-empty">这首歌还没有段落。</p>
        <article v-for="section in sections" :key="section.id" class="shorts-source">
          <header>
            <strong>{{ section.label }}</strong>
            <button class="text-button" type="button" :disabled="saving" @click="useSection(section)">
              用这段
            </button>
          </header>
          <p v-if="sectionLines(section).length === 0" class="shorts-muted">这一段没有歌词。</p>
          <p v-for="line in sectionLines(section).slice(0, 4)" :key="line">{{ line }}</p>
          <p v-if="sectionShots(section).length" class="shorts-muted">
            分镜 {{ sectionShots(section)[0].start }}–{{ sectionShots(section).at(-1).end }}
          </p>
        </article>
      </div>

      <form class="shorts-form" @submit.prevent="submit">
        <h3>{{ editingId ? '修改这条短视频' : '圈一段精彩' }}</h3>
        <label>
          标题
          <input v-model="form.title" type="text" maxlength="100" placeholder="例如：失去了你 · 副歌">
        </label>
        <div class="shorts-times">
          <label>
            开始
            <input v-model="form.start" type="text" inputmode="numeric" placeholder="01:12" spellcheck="false">
          </label>
          <label>
            结束
            <input v-model="form.end" type="text" inputmode="numeric" placeholder="01:42" spellcheck="false">
          </label>
          <p>{{ previewLabel }}</p>
        </div>
        <label>
          被唱到的句子
          <input v-model="form.lyricCue" type="text" maxlength="200" placeholder="这一小段最想让人记住的一句">
        </label>
        <label>
          为什么选这里
          <textarea v-model="form.note" rows="3" maxlength="300" placeholder="例如：副歌第一次把钩子唱开"></textarea>
        </label>
        <p v-if="formError" class="shorts-error" role="alert">{{ formError }}</p>
        <div class="shorts-form-actions">
          <button class="text-button is-primary" type="submit" :disabled="saving">
            {{ editingId ? '保存修改' : '加入这条 Shorts' }}
          </button>
          <button v-if="editingId" class="text-button" type="button" :disabled="saving" @click="resetForm">
            取消
          </button>
        </div>
      </form>
    </div>

    <div class="shorts-saved">
      <h3>已挑选 {{ shorts.length }} 条</h3>
      <p v-if="shorts.length === 0" class="shorts-empty">还没有短视频。从左边选一段，填上歌曲里的起止时间。</p>
      <article v-for="item in shorts" :key="item.id" class="shorts-card">
        <header>
          <div>
            <strong>{{ item.title }}</strong>
            <span>{{ item.start }}–{{ item.end }} · {{ formatDuration(shortDuration(item)) }}</span>
          </div>
          <em :class="{ 'is-ready': item.status === 'ready' }">
            {{ item.status === 'ready' ? '可发布' : '草稿' }}
          </em>
        </header>
        <p v-if="item.lyricCue">{{ item.lyricCue }}</p>
        <p v-if="item.note" class="shorts-muted">{{ item.note }}</p>
        <figure v-if="finalFor(item)" class="shorts-final">
          <video :src="finalFor(item).url" controls playsinline preload="metadata"></video>
          <figcaption>{{ finalFor(item).caption }}</figcaption>
        </figure>
        <div v-if="clipsFor(item).some((clip) => clip.url)" class="shorts-clips">
          <figure v-for="clip in clipsFor(item).filter((clip) => clip.url)" :key="clip.id">
            <video :src="clip.url" controls playsinline preload="metadata"></video>
            <figcaption>{{ clip.caption }}</figcaption>
          </figure>
        </div>
        <p v-if="clipsFor(item).some((clip) => !clip.url)" class="shorts-muted">
          {{
            clipsFor(item).some((clip) => clip.url)
              ? `${clipsFor(item).filter((clip) => clip.url).length} 镜已能播放，其余镜头还没有新的测试视频。`
              : '测试视频生成后会出现在这里。'
          }}
        </p>
        <div class="shorts-card-actions">
          <button class="text-button" type="button" :disabled="saving" @click="editShort(item)">编辑</button>
          <button class="text-button" type="button" :disabled="saving" @click="toggleReady(item)">
            {{ item.status === 'ready' ? '改回草稿' : '标为可发布' }}
          </button>
          <button class="text-button" type="button" :disabled="saving" @click="copyShort(item)">
            <ClipboardCheck v-if="copiedTarget === `short-${item.id}`" :size="14" />
            <Copy v-else :size="14" />
            复制发布文案
          </button>
          <CopyFeedback :visible="copiedTarget === `short-${item.id}`" />
          <button class="text-button" type="button" :disabled="saving" @click="removeShort(item)">删除</button>
        </div>
      </article>
    </div>
  </section>
</template>
