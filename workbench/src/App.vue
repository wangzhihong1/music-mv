<script setup>
import { computed, ref, watch } from 'vue'
import { PanelLeftClose, PanelLeftOpen } from '@lucide/vue'
import { formatDuration, shotDuration } from '@/lib/time.js'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import SongHeader from '@/components/layout/SongHeader.vue'
import ArchivePanel from '@/components/workbench/ArchivePanel.vue'
import AlignPanel from '@/components/workbench/AlignPanel.vue'
import LyricsPanel from '@/components/workbench/LyricsPanel.vue'
import PipelineBoard from '@/components/workbench/PipelineBoard.vue'
import PromptsPanel from '@/components/workbench/PromptsPanel.vue'
import ScriptPanel from '@/components/workbench/ScriptPanel.vue'
import SongFacts from '@/components/workbench/SongFacts.vue'
import IconButton from '@/components/common/IconButton.vue'
import { useClipboard } from '@/composables/useClipboard.js'
import { useWorkspace } from '@/composables/useWorkspace.js'
import { METADATA_FIELDS } from '@/constants/song.js'
import { joinLyrics, joinPrompts, metadataFacts, scriptSummary } from '@/utils/song-content.js'

const {
  songs,
  archives,
  currentSong,
  collectionSongs,
  activeNav,
  loadError,
  selectNav,
  selectSong,
} = useWorkspace()
const { copiedTarget, copyText } = useClipboard()

const viewMode = ref('overview')
const promptLanguage = ref('zh')
const activeSection = ref('')
const activeShotId = ref('')
const sidebarOpen = ref(false)
const showingArchive = computed(() => ['inspiration', 'library'].includes(activeNav.value))

const prompts = computed(() => currentSong.value.prompts || [])
const sections = computed(() => currentSong.value.sections || [])
const shots = computed(() => currentSong.value.shots || [])
const facts = computed(() => metadataFacts(currentSong.value, METADATA_FIELDS))
const allLyrics = computed(() => joinLyrics(sections.value))
const fullPrompt = computed(() => joinPrompts(prompts.value, promptLanguage.value))
const totalShotDuration = computed(() =>
  shots.value.reduce((total, shot) => total + shotDuration(shot), 0),
)
const currentScriptSummary = computed(() =>
  scriptSummary(currentSong.value, shots.value.length, formatDuration(totalShotDuration.value)),
)

watch(
  () => currentSong.value.id,
  () => {
    activeSection.value = sections.value[0]?.id || ''
    activeShotId.value = shots.value[0]?.id || ''
  },
  { immediate: true },
)

function onSelectNav(navId) {
  selectNav(navId)
  sidebarOpen.value = false
}

function onSelectSong(songId) {
  selectSong(songId)
  sidebarOpen.value = false
}

function selectSection(sectionId) {
  activeSection.value = sectionId
  activeShotId.value = shots.value.find((shot) => shot.sectionId === sectionId)?.id || ''
}

function selectShot(shot) {
  activeShotId.value = shot.id
  activeSection.value = shot.sectionId
}

function copyPrompt(target) {
  if (target === 'all') {
    copyText(fullPrompt.value, 'prompt-all')
    return
  }
  const prompt = prompts.value.find((item) => item.key === target)
  copyText(prompt?.[promptLanguage.value] || '', `prompt-${target}`)
}
</script>

<template>
  <div class="app-shell">
    <IconButton
      class="mobile-sidebar-toggle"
      :label="sidebarOpen ? '关闭歌曲列表' : '打开歌曲列表'"
      @click="sidebarOpen = !sidebarOpen"
    >
      <PanelLeftClose v-if="sidebarOpen" :size="18" />
      <PanelLeftOpen v-else :size="18" />
    </IconButton>

    <AppSidebar
      :songs="songs"
      :visible-songs="collectionSongs"
      :current-song-id="currentSong.id"
      :active-nav="activeNav"
      :collection-label="currentSong.collection || '本地歌曲库'"
      :open="sidebarOpen"
      @select-nav="onSelectNav"
      @select-song="onSelectSong"
    />

    <main class="main-content">
      <ArchivePanel
        v-if="showingArchive"
        :nav-id="activeNav"
        :files="archives[activeNav]"
      />

      <template v-else>
        <SongHeader
          :song="currentSong"
          :view-mode="viewMode"
          @update:view-mode="viewMode = $event"
        />

        <p v-if="loadError" class="sync-error" role="alert">{{ loadError }}</p>

        <PipelineBoard :song="currentSong" />
        <SongFacts :facts="facts" />

        <div v-if="viewMode === 'overview'" class="workbench-grid">
          <LyricsPanel
            :sections="sections"
            :active-section="activeSection"
            :copied="copiedTarget === 'lyrics'"
            @copy="copyText(allLyrics, 'lyrics')"
            @select-section="selectSection"
          />

          <div class="right-column">
            <PromptsPanel
              :prompts="prompts"
              :language="promptLanguage"
              :copied-target="copiedTarget"
              @update:language="promptLanguage = $event"
              @copy="copyPrompt"
            />
            <ScriptPanel
              :shots="shots"
              :active-shot-id="activeShotId"
              :summary="currentScriptSummary"
              @select-shot="selectShot"
            />
          </div>
        </div>

        <AlignPanel
          v-else
          :shots="shots"
          :sections="sections"
          :active-shot-id="activeShotId"
          @select-shot="selectShot"
        />
      </template>
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
