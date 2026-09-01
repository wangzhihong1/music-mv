<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  AlignJustify,
  Check,
  ChevronDown,
  ClipboardCheck,
  Copy,
  FileMusic,
  Film,
  Library,
  ListMusic,
  Music2,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  SlidersHorizontal,
  Sparkles,
} from '@lucide/vue'

const viewMode = ref('overview')
const promptLanguage = ref('zh')
const activeSection = ref('verse1')
const activeShotId = ref('')
const copiedTarget = ref('')
const sidebarOpen = ref(false)
const songs = ref([])
const selectedSongId = ref('')
const loadError = ref('')
let refreshTimer
let librarySnapshot = ''

const emptySong = {
  id: '',
  title: '暂无歌曲',
  date: '',
  status: '等待创建',
  coreStatement: '使用新建歌曲入口后，作品会显示在这里。',
  metadata: {},
  prompts: [],
  sections: [],
  shots: [],
}

const currentSong = computed(() =>
  songs.value.find((song) => song.id === selectedSongId.value) || songs.value[0] || emptySong,
)
const prompts = computed(() => currentSong.value.prompts || [])
const sections = computed(() => currentSong.value.sections || [])
const shots = computed(() => currentSong.value.shots || [])
const metadataFacts = computed(() => [
  ['风格', currentSong.value.metadata?.genre],
  ['情绪', currentSong.value.metadata?.mood],
  ['速度', currentSong.value.metadata?.tempo],
  ['调性', currentSong.value.metadata?.key],
  ['演唱', currentSong.value.metadata?.vocal],
  ['时长', currentSong.value.metadata?.duration],
].filter(([, value]) => value))

const allLyrics = computed(() =>
  sections.value.map((section) => `[${section.label}]\n${section.lyrics.join('\n')}`).join('\n\n'),
)

const fullPrompt = computed(() =>
  prompts.value
    .map((item) => `${item.label}：${item[promptLanguage.value]}`)
    .join('\n\n'),
)

function timeToSeconds(value) {
  const [minutes = 0, seconds = 0] = String(value || '0:00').split(':').map(Number)
  return minutes * 60 + seconds
}

function shotDuration(shot) {
  return Math.max(0, timeToSeconds(shot.end) - timeToSeconds(shot.start))
}

const totalShotDuration = computed(() =>
  shots.value.reduce((total, shot) => total + shotDuration(shot), 0),
)
const scriptSummary = computed(() => {
  if (currentSong.value.mvWorkflow?.scriptStatus === 'complete') {
    return `${shots.value.length} 镜 · 完整覆盖 ${currentSong.value.metadata?.duration || ''}`
  }
  if (!currentSong.value.mvWorkflow?.durationConfirmed) {
    return `${shots.value.length} 镜 · 示例草稿 · 时长待确认`
  }
  return `${shots.value.length} 镜 · 草稿累计 ${formatDuration(totalShotDuration.value)}`
})

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function sectionForShot(shot) {
  return sections.value.find((section) => section.id === shot.sectionId) || {
    id: shot.sectionId,
    label: shot.sectionId || '未关联段落',
    lyrics: [],
  }
}

async function loadSongs({ silent = false } = {}) {
  try {
    const response = await fetch('/api/songs', { cache: 'no-store' })
    if (!response.ok) throw new Error(`歌曲数据读取失败（${response.status}）`)
    const payload = await response.json()
    const nextSnapshot = JSON.stringify(payload.songs)

    if (nextSnapshot !== librarySnapshot) {
      songs.value = payload.songs
      librarySnapshot = nextSnapshot

      if (!songs.value.some((song) => song.id === selectedSongId.value)) {
        selectedSongId.value = songs.value[0]?.id || ''
      }

      const sectionIds = currentSong.value.sections?.map((section) => section.id) || []
      if (!sectionIds.includes(activeSection.value)) {
        activeSection.value = sectionIds[0] || ''
      }

      const shotIds = currentSong.value.shots?.map((shot) => shot.id) || []
      if (!shotIds.includes(activeShotId.value)) {
        activeShotId.value = shotIds[0] || ''
      }
    }

    loadError.value = ''
  } catch (error) {
    if (!silent) loadError.value = error.message
  }
}

function selectSong(songId) {
  selectedSongId.value = songId
  activeSection.value = currentSong.value.sections?.[0]?.id || ''
  activeShotId.value = currentSong.value.shots?.[0]?.id || ''
  sidebarOpen.value = false
}

async function copyText(text, target) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
  }

  copiedTarget.value = target
  window.setTimeout(() => {
    if (copiedTarget.value === target) copiedTarget.value = ''
  }, 1800)
}

function selectSection(sectionId) {
  activeSection.value = sectionId
  activeShotId.value = shots.value.find((shot) => shot.sectionId === sectionId)?.id || ''
}

function selectShot(shot) {
  activeShotId.value = shot.id
  activeSection.value = shot.sectionId
}

onMounted(() => {
  loadSongs()
  refreshTimer = window.setInterval(() => loadSongs({ silent: true }), 4000)
})

onBeforeUnmount(() => {
  window.clearInterval(refreshTimer)
})
</script>

<template>
  <div class="app-shell">
    <button
      class="mobile-sidebar-toggle icon-button"
      type="button"
      :aria-label="sidebarOpen ? '关闭歌曲列表' : '打开歌曲列表'"
      :data-tooltip="sidebarOpen ? '关闭歌曲列表' : '打开歌曲列表'"
      @click="sidebarOpen = !sidebarOpen"
    >
      <PanelLeftClose v-if="sidebarOpen" :size="18" />
      <PanelLeftOpen v-else :size="18" />
    </button>

    <aside class="sidebar" :class="{ 'is-open': sidebarOpen }">
      <div class="brand">
        <div class="brand-mark"><Music2 :size="18" /></div>
        <div>
          <strong>声场</strong>
          <span>音乐创作项目</span>
        </div>
      </div>

      <nav class="primary-nav" aria-label="主导航">
        <button class="nav-item is-active" type="button">
          <ListMusic :size="17" />
          <span>创作中</span>
          <b>{{ songs.filter((song) => song.collection === '创作中').length }}</b>
        </button>
        <button class="nav-item" type="button">
          <Sparkles :size="17" />
          <span>灵感池</span>
        </button>
        <button class="nav-item" type="button">
          <Library :size="17" />
          <span>公共素材</span>
        </button>
      </nav>

      <div class="song-list-heading">
        <span>最近歌曲</span>
        <button class="icon-button" type="button" aria-label="搜索歌曲" data-tooltip="搜索歌曲">
          <Search :size="16" />
        </button>
      </div>

      <div class="song-list">
        <button
          v-for="song in songs"
          :key="song.id"
          class="song-item"
          :class="{ 'is-active': song.id === currentSong.id }"
          type="button"
          @click="selectSong(song.id)"
        >
          <span class="song-cover-mini"><FileMusic :size="15" /></span>
          <span class="song-item-copy">
            <strong>{{ song.title }}</strong>
            <small>{{ song.status }}</small>
          </span>
        </button>
      </div>

      <div class="sidebar-footer">
          <span>{{ currentSong.collection || '本地歌曲库' }}</span>
        <ChevronDown :size="15" />
      </div>
    </aside>

    <main class="main-content">
      <header class="page-header">
        <div class="song-identity">
          <div class="cover-art" :aria-label="`${currentSong.title}封面`">
            <span class="cover-road"></span>
            <span class="cover-light"></span>
          </div>
          <div class="song-title-copy">
            <div class="eyebrow">{{ currentSong.date || '本地项目' }} · 单曲工作台</div>
            <div class="title-row">
              <h1>{{ currentSong.title }}</h1>
              <span class="status-badge"><Check :size="13" />{{ currentSong.status }}</span>
            </div>
            <p>{{ currentSong.coreStatement }}</p>
          </div>
        </div>

        <div class="header-actions">
          <div class="segmented-control" aria-label="视图模式">
            <button
              type="button"
              :aria-pressed="viewMode === 'overview'"
              @click="viewMode = 'overview'"
            >
              <SlidersHorizontal :size="15" />
              创作总览
            </button>
            <button
              type="button"
              :aria-pressed="viewMode === 'align'"
              @click="viewMode = 'align'"
            >
              <AlignJustify :size="15" />
              MV 对齐
            </button>
          </div>
        </div>
      </header>

      <p v-if="loadError" class="sync-error" role="alert">{{ loadError }}</p>

      <section v-if="metadataFacts.length" class="song-facts" aria-label="歌曲参数">
        <span v-for="([label, value]) in metadataFacts" :key="label"><b>{{ label }}</b>{{ value }}</span>
      </section>

      <div v-if="viewMode === 'overview'" class="workbench-grid">
        <section class="panel lyrics-panel">
          <div class="panel-header">
            <div>
              <span class="panel-kicker">03 · Lyrics</span>
              <h2>歌词</h2>
            </div>
            <div class="panel-actions">
              <span v-if="copiedTarget === 'lyrics'" class="copy-feedback" role="status">
                <ClipboardCheck :size="14" />已复制
              </span>
              <button
                class="icon-button"
                type="button"
                aria-label="复制完整歌词"
                data-tooltip="复制完整歌词"
                @click="copyText(allLyrics, 'lyrics')"
              >
                <Copy :size="17" />
              </button>
            </div>
          </div>

          <div class="lyrics-content">
            <button
              v-for="section in sections"
              :key="section.id"
              class="lyric-section"
              :class="{ 'is-active': activeSection === section.id }"
              type="button"
              :aria-pressed="activeSection === section.id"
              @click="selectSection(section.id)"
            >
              <span class="section-meta">
                <b>{{ section.label }}</b>
                <time>{{ section.time }}</time>
              </span>
              <span v-for="line in section.lyrics" :key="line" class="lyric-line">{{ line }}</span>
            </button>
          </div>
        </section>

        <div class="right-column">
          <section class="panel prompt-panel">
            <div class="panel-header prompt-header">
              <div>
                <span class="panel-kicker">04 · Style Prompt</span>
                <h2>风格提示词</h2>
              </div>
              <div class="prompt-controls">
                <div class="language-toggle" aria-label="提示词语言">
                  <button
                    type="button"
                    :aria-pressed="promptLanguage === 'zh'"
                    @click="promptLanguage = 'zh'"
                  >中文</button>
                  <button
                    type="button"
                    :aria-pressed="promptLanguage === 'en'"
                    @click="promptLanguage = 'en'"
                  >EN</button>
                </div>
                <span v-if="copiedTarget === 'prompt-all'" class="copy-feedback" role="status">
                  <ClipboardCheck :size="14" />已复制
                </span>
                <button
                  class="icon-button"
                  type="button"
                  aria-label="复制完整提示词"
                  data-tooltip="复制完整提示词"
                  @click="copyText(fullPrompt, 'prompt-all')"
                >
                  <Copy :size="17" />
                </button>
              </div>
            </div>

            <div class="prompt-grid">
              <article v-for="prompt in prompts" :key="prompt.key" class="prompt-item">
                <div class="prompt-label-row">
                  <span>{{ prompt.label }}</span>
                  <button
                    class="inline-copy"
                    type="button"
                    :aria-label="`复制${prompt.label}`"
                    :data-tooltip="`复制${prompt.label}`"
                    @click="copyText(prompt[promptLanguage], `prompt-${prompt.key}`)"
                  >
                    <ClipboardCheck v-if="copiedTarget === `prompt-${prompt.key}`" :size="14" />
                    <Copy v-else :size="14" />
                  </button>
                </div>
                <p>{{ prompt[promptLanguage] }}</p>
              </article>
            </div>
          </section>

          <section class="panel script-panel">
            <div class="panel-header">
              <div>
                <span class="panel-kicker">07 · MV Script</span>
                <h2>MV 脚本</h2>
              </div>
              <span class="panel-count"><Film :size="14" />{{ scriptSummary }}</span>
            </div>

            <div class="script-table" role="table" aria-label="MV脚本列表">
              <div class="script-table-head" role="row">
                <span role="columnheader">时间</span>
                <span role="columnheader">景别</span>
                <span role="columnheader">画面与动作</span>
                <span role="columnheader">运镜</span>
              </div>
              <button
                v-for="shot in shots"
                :key="shot.id"
                class="script-row"
                :class="{ 'is-active': activeShotId === shot.id }"
                type="button"
                role="row"
                @click="selectShot(shot)"
              >
                <time role="cell">{{ shot.start }}–{{ shot.end }}<small>{{ shotDuration(shot) }} 秒</small></time>
                <strong role="cell">{{ shot.shot }}</strong>
                <span class="script-action" role="cell">
                  <b>{{ shot.action }}</b>
                  <small>{{ shot.visual }}</small>
                </span>
                <span role="cell">{{ shot.camera }}</span>
              </button>
            </div>
          </section>
        </div>
      </div>

      <section v-else class="panel align-panel">
        <div class="panel-header">
          <div>
            <span class="panel-kicker">Lyrics × MV Script</span>
            <h2>歌词与画面对齐</h2>
          </div>
          <span class="panel-count">按歌曲时间线检查</span>
        </div>
        <div class="align-table">
          <div class="align-head">
            <span>时间与段落</span>
            <span>歌词</span>
            <span>画面与执行</span>
          </div>
          <button
            v-for="shot in shots"
            :key="shot.id"
            class="align-row"
            :class="{ 'is-active': activeShotId === shot.id }"
            type="button"
            @click="selectShot(shot)"
          >
            <span class="align-time">
              <time>{{ shot.start }}–{{ shot.end }}</time>
              <b>{{ sectionForShot(shot).label }} · {{ shotDuration(shot) }} 秒</b>
            </span>
            <span class="align-lyrics">
              <span v-for="line in sectionForShot(shot).lyrics" :key="line">{{ line }}</span>
            </span>
            <span class="align-visual">
              <b>{{ shot.shot }} · {{ shot.action }}</b>
              <span>{{ shot.visual }}</span>
              <small>{{ shot.camera }}</small>
            </span>
          </button>
        </div>
      </section>
    </main>

    <button
      v-if="sidebarOpen"
      class="sidebar-scrim"
      type="button"
      aria-label="关闭歌曲列表"
      @click="sidebarOpen = false"
    ></button>
  </div>
</template>
