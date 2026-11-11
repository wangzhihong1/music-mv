<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { ArrowLeft, ClipboardCheck, Copy } from '@lucide/vue'
import CopyFeedback from '@/components/common/CopyFeedback.vue'
import { useClipboard } from '@/composables/useClipboard.js'
import { useWorkspace } from '@/composables/useWorkspace.js'
import {
  VLOG_MIN_SECONDS,
  accountPostText,
  platformPostText,
  shotSecondsTotal,
} from '@/lib/vlog.js'

const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
})

const { deleteVlogShot, setRefreshPaused } = useWorkspace()
const { copiedTarget, copyText } = useClipboard()

const missingMedia = reactive({})
const selectedId = ref('')
const pendingShot = ref(null)
const deleting = ref(false)
const deleteError = ref('')
const copyMessage = ref('')

const accounts = computed(() => ({
  douyin: props.character.vlog?.douyin || {},
  youtube: props.character.vlog?.youtube || {},
}))
const storedEntries = computed(() => (
  Array.isArray(props.character.vlog?.entries) ? props.character.vlog.entries : []
))
const entries = computed(() => [...storedEntries.value].sort((left, right) => (
  String(right.completedAt || '').localeCompare(String(left.completedAt || ''))
  || String(right.id).localeCompare(String(left.id))
)))
const selected = computed(() => entries.value.find((item) => item.id === selectedId.value) || null)
const demotesOnDelete = computed(() => {
  const entry = selected.value
  const shot = pendingShot.value
  if (!entry || !shot || entry.status !== 'ready') return false
  const remaining = shotSecondsTotal(entry.shots) - Number(shot.seconds || 0)
  return remaining < VLOG_MIN_SECONDS
})

watch(() => props.character.folder, () => {
  selectedId.value = ''
  pendingShot.value = null
  deleteError.value = ''
  copyMessage.value = ''
})

function onKeydown(event) {
  if (event.key === 'Escape' && pendingShot.value) cancelDelete()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  setRefreshPaused(false)
})

function mediaUrl(relativePath, updatedAt) {
  if (!relativePath) return ''
  const base = `/studio-media/characters/${props.character.folder}/${relativePath}`
  if (!updatedAt) return base
  return `${base}?v=${encodeURIComponent(updatedAt)}`
}

function videoFileName(item) {
  return String(item?.video || '').split('/').pop()
}

function videoUpdatedLabel(item) {
  const updatedAt = item?.videoUpdatedAt
  if (!updatedAt) return ''
  const date = new Date(updatedAt)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleString('zh-CN', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

function markMissing(url) {
  if (url) missingMedia[url] = true
}

function statusLabel(item) {
  return item?.status === 'ready' ? '已完成' : '制作中'
}

function openEntry(item) {
  selectedId.value = item.id
  copyMessage.value = ''
}

function closeDetail() {
  selectedId.value = ''
  pendingShot.value = null
  deleteError.value = ''
  copyMessage.value = ''
}

function askDelete(shot) {
  pendingShot.value = shot
  deleteError.value = ''
}

function cancelDelete() {
  if (deleting.value) return
  pendingShot.value = null
  deleteError.value = ''
}

async function confirmDelete() {
  if (!selected.value || !pendingShot.value) return
  deleting.value = true
  deleteError.value = ''
  setRefreshPaused(true)
  try {
    await deleteVlogShot(props.character.folder, selected.value.id, pendingShot.value.id)
    pendingShot.value = null
  } catch (error) {
    deleteError.value = error.message || '分镜视频删除失败'
  } finally {
    deleting.value = false
    setRefreshPaused(false)
  }
}

function copyAccount(platform) {
  const text = accountPostText(accounts.value[platform])
  const label = platform === 'douyin' ? '抖音' : 'YouTube'
  if (!text) {
    copyMessage.value = `${label}账号简介还没有写好`
    return
  }
  copyMessage.value = ''
  copyText(text, `vlog-account-${platform}`)
}

function copyPlatform(platform) {
  if (!selected.value) return
  const text = platformPostText(selected.value[platform])
  const label = platform === 'douyin' ? '抖音' : 'YouTube'
  if (!text) {
    copyMessage.value = `${label}文案还没有写好`
    return
  }
  copyMessage.value = ''
  copyText(text, `vlog-${platform}-${selected.value.id}`)
}
</script>

<template>
  <section class="vlog-panel">
    <header class="vlog-header">
      <div>
        <span class="panel-kicker">Vlog</span>
        <h2>日常视频</h2>
      </div>
      <p class="vlog-lead">合成视频列在这里。点开一条，查看这支 vlog 的拍摄主题、分镜和发布文案。</p>
    </header>

    <div v-if="!selected" class="vlog-saved">
      <p v-if="entries.length === 0" class="vlog-empty">还没有合成视频。</p>
      <div v-else class="vlog-list">
        <button
          v-for="item in entries"
          :key="item.id"
          class="vlog-list-item"
          type="button"
          @click="openEntry(item)"
        >
          <video
            v-if="item.video && !missingMedia[mediaUrl(item.video, item.videoUpdatedAt)]"
            :src="mediaUrl(item.video, item.videoUpdatedAt)"
            muted
            playsinline
            preload="metadata"
            @error="markMissing(mediaUrl(item.video, item.videoUpdatedAt))"
          ></video>
          <span v-else class="vlog-list-missing">{{ item.video ? '合成视频还没有放好' : '还没有合成视频' }}</span>
          <span class="vlog-list-copy">
            <strong>{{ item.title }}</strong>
            <em :class="{ 'is-ready': item.status === 'ready' }">{{ statusLabel(item) }} · {{ shotSecondsTotal(item.shots) }} 秒</em>
            <span v-if="item.video" class="vlog-file">{{ videoFileName(item) }}</span>
            <span v-if="videoUpdatedLabel(item)" class="vlog-file-time">{{ videoUpdatedLabel(item) }}</span>
          </span>
        </button>
      </div>
    </div>

    <article v-else class="vlog-detail">
      <button class="text-button vlog-back" type="button" @click="closeDetail">
        <ArrowLeft :size="14" />
        返回列表
      </button>
      <h3>{{ selected.title }}</h3>
      <dl class="vlog-facts">
        <div>
          <dt>拍摄主题</dt>
          <dd>{{ selected.theme }}</dd>
        </div>
        <div v-if="selected.monologue">
          <dt>独白</dt>
          <dd>{{ selected.monologue }}</dd>
        </div>
        <div>
          <dt>状态</dt>
          <dd :class="{ 'is-ready': selected.status === 'ready' }">
            {{ statusLabel(selected) }}{{ selected.completedAt ? ` · 完成于 ${selected.completedAt}` : '' }}
          </dd>
        </div>
      </dl>

      <h3>分镜视频</h3>
      <p v-if="!(selected.shots || []).length" class="vlog-muted">还没有分镜视频。</p>
      <div v-else class="vlog-media">
        <figure v-for="shot in selected.shots" :key="shot.id">
          <video
            v-if="shot.video && !missingMedia[mediaUrl(shot.video, shot.videoUpdatedAt)]"
            :src="mediaUrl(shot.video, shot.videoUpdatedAt)"
            controls
            playsinline
            preload="metadata"
            @error="markMissing(mediaUrl(shot.video, shot.videoUpdatedAt))"
          ></video>
          <figcaption>
            <span>{{ shot.angle }} · {{ shot.seconds }} 秒</span>
            <span v-if="shot.video" class="vlog-file">{{ videoFileName(shot) }}</span>
            <span v-if="videoUpdatedLabel(shot)" class="vlog-file-time">{{ videoUpdatedLabel(shot) }}</span>
            <span v-if="shot.video && missingMedia[mediaUrl(shot.video, shot.videoUpdatedAt)]">文件还没有放好</span>
            <span v-if="shot.line">{{ shot.line }}</span>
          </figcaption>
          <button class="text-button" type="button" :disabled="deleting" @click="askDelete(shot)">删除</button>
        </figure>
      </div>

      <h3>合成视频</h3>
      <div v-if="selected.video" class="vlog-media">
        <figure class="is-final">
          <video
            v-if="!missingMedia[mediaUrl(selected.video, selected.videoUpdatedAt)]"
            :src="mediaUrl(selected.video, selected.videoUpdatedAt)"
            controls
            playsinline
            preload="metadata"
            @error="markMissing(mediaUrl(selected.video, selected.videoUpdatedAt))"
          ></video>
          <figcaption>
            <span class="vlog-file">{{ videoFileName(selected) }}</span>
            <span v-if="videoUpdatedLabel(selected)" class="vlog-file-time">{{ videoUpdatedLabel(selected) }}</span>
            <span v-if="missingMedia[mediaUrl(selected.video, selected.videoUpdatedAt)]">文件还没有放好</span>
          </figcaption>
        </figure>
      </div>
      <p v-else class="vlog-muted">还没有合成视频。</p>

      <h3>发布文案</h3>
      <div class="vlog-accounts">
        <div class="vlog-account">
          <h3>抖音</h3>
          <p>{{ accounts.douyin.handle || '还没有账号名' }}</p>
          <p class="vlog-muted">{{ accounts.douyin.bio || '还没有简介' }}</p>
          <p class="vlog-post">{{ platformPostText(selected.douyin) || '这条还没有抖音文案。' }}</p>
          <div class="vlog-actions">
            <button class="text-button" type="button" @click="copyAccount('douyin')">
              <ClipboardCheck v-if="copiedTarget === 'vlog-account-douyin'" :size="14" />
              <Copy v-else :size="14" />
              复制简介
            </button>
            <CopyFeedback :visible="copiedTarget === 'vlog-account-douyin'" />
            <button class="text-button" type="button" @click="copyPlatform('douyin')">
              <ClipboardCheck v-if="copiedTarget === `vlog-douyin-${selected.id}`" :size="14" />
              <Copy v-else :size="14" />
              复制文案
            </button>
            <CopyFeedback :visible="copiedTarget === `vlog-douyin-${selected.id}`" />
          </div>
        </div>
        <div class="vlog-account">
          <h3>YouTube</h3>
          <p>{{ accounts.youtube.handle || '还没有账号名' }}</p>
          <p class="vlog-muted">{{ accounts.youtube.bio || '还没有简介' }}</p>
          <p class="vlog-post">{{ platformPostText(selected.youtube) || '这条还没有 YouTube 文案。' }}</p>
          <div class="vlog-actions">
            <button class="text-button" type="button" @click="copyAccount('youtube')">
              <ClipboardCheck v-if="copiedTarget === 'vlog-account-youtube'" :size="14" />
              <Copy v-else :size="14" />
              复制简介
            </button>
            <CopyFeedback :visible="copiedTarget === 'vlog-account-youtube'" />
            <button class="text-button" type="button" @click="copyPlatform('youtube')">
              <ClipboardCheck v-if="copiedTarget === `vlog-youtube-${selected.id}`" :size="14" />
              <Copy v-else :size="14" />
              复制文案
            </button>
            <CopyFeedback :visible="copiedTarget === `vlog-youtube-${selected.id}`" />
          </div>
        </div>
      </div>
      <p v-if="copyMessage" class="vlog-error" role="alert">{{ copyMessage }}</p>
    </article>

    <div v-if="pendingShot" class="confirm-backdrop" role="presentation" @click.self="cancelDelete">
      <section class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="vlog-shot-delete-title">
        <h3 id="vlog-shot-delete-title">确认删除这一镜？</h3>
        <p>
          将去掉「{{ pendingShot.angle }}」{{ pendingShot.video ? '，并删除对应的分镜视频' : '' }}。此操作无法撤销。
          <template v-if="demotesOnDelete">删掉后总长不够 {{ VLOG_MIN_SECONDS }} 秒，状态会回到制作中。</template>
        </p>
        <p v-if="deleteError" class="confirm-error" role="alert">{{ deleteError }}</p>
        <div class="confirm-actions">
          <button type="button" class="button-secondary" :disabled="deleting" @click="cancelDelete">取消</button>
          <button type="button" class="button-danger" :disabled="deleting" @click="confirmDelete">
            {{ deleting ? '删除中…' : '确认删除' }}
          </button>
        </div>
      </section>
    </div>
  </section>
</template>
