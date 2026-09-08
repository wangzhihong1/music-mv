<script setup>
import { computed, ref, watch } from 'vue'
import { PanelLeftClose, PanelLeftOpen } from '@lucide/vue'
import { formatDuration, shotDuration } from '@/lib/time.js'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import SongHeader from '@/components/layout/SongHeader.vue'
import ArchivePanel from '@/components/workbench/ArchivePanel.vue'
import AlignPanel from '@/components/workbench/AlignPanel.vue'
import BriefPanel from '@/components/workbench/BriefPanel.vue'
import LyricsPanel from '@/components/workbench/LyricsPanel.vue'
import PipelineBoard from '@/components/workbench/PipelineBoard.vue'
import ProductionPanel from '@/components/workbench/ProductionPanel.vue'
import PromptsPanel from '@/components/workbench/PromptsPanel.vue'
import ScriptPanel from '@/components/workbench/ScriptPanel.vue'
import SongFacts from '@/components/workbench/SongFacts.vue'
import StoryPanel from '@/components/workbench/StoryPanel.vue'
import StylePanel from '@/components/workbench/StylePanel.vue'
import IconButton from '@/components/common/IconButton.vue'
import { useClipboard } from '@/composables/useClipboard.js'
import { useWorkspace } from '@/composables/useWorkspace.js'
import { METADATA_FIELDS } from '@/constants/song.js'
import { HEADER_STAGE, SONG_NAVS, STAGE_VIEW_MODES } from '@/constants/navigation.js'
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
const selectedStage = ref('')
const promptLanguage = ref('zh')
const activeSection = ref('')
const activeShotId = ref('')
const sidebarOpen = ref(false)
const showingArchive = computed(() => ['inspiration', 'library'].includes(activeNav.value))
const headerViewMode = computed(() => (
  ['overview', 'align', 'production'].includes(viewMode.value) ? viewMode.value : ''
))

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
    if (currentSong.value.collectionId === 'production') {
      viewMode.value = 'production'
      selectedStage.value = 'delivery'
    }
  },
  { immediate: true },
)

function onSelectNav(navId) {
  selectNav(navId)
  sidebarOpen.value = false
  if (navId === 'production') {
    viewMode.value = 'production'
    selectedStage.value = 'delivery'
  } else if (SONG_NAVS.includes(navId)) {
    viewMode.value = 'overview'
    selectedStage.value = ''
  }
}

function onSelectSong(songId) {
  selectSong(songId)
  sidebarOpen.value = false
}

function onSelectStage(stageId) {
  selectedStage.value = stageId
  viewMode.value = STAGE_VIEW_MODES[stageId] || 'overview'
}

function onUpdateViewMode(mode) {
  viewMode.value = mode
  selectedStage.value = HEADER_STAGE[mode] ?? ''
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

function copyShotPrompt(shot) {
  copyText(shot.prompt || [shot.action, shot.visual, shot.camera].filter(Boolean).join('\n'), `shot-${shot.id}`)
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
          :view-mode="headerViewMode"
          @update:view-mode="onUpdateViewMode"
        />

        <p v-if="loadError" class="sync-error" role="alert">{{ loadError }}</p>

        <PipelineBoard
          :song="currentSong"
          :selected-stage="selectedStage"
          @select-stage="onSelectStage"
        />
        <SongFacts v-if="viewMode === 'overview'" :facts="facts" />

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
              :copied-target="copiedTarget"
              @select-shot="selectShot"
              @copy-prompt="copyShotPrompt"
            />
          </div>
        </div>

        <BriefPanel v-else-if="viewMode === 'brief'" :song="currentSong" />
        <StylePanel v-else-if="viewMode === 'style'" :facts="facts" />
        <LyricsPanel
          v-else-if="viewMode === 'lyrics'"
          class="stage-panel"
          :sections="sections"
          :active-section="activeSection"
          :copied="copiedTarget === 'lyrics'"
          @copy="copyText(allLyrics, 'lyrics')"
          @select-section="selectSection"
        />
        <PromptsPanel
          v-else-if="viewMode === 'prompts'"
          class="stage-panel"
          :prompts="prompts"
          :language="promptLanguage"
          :copied-target="copiedTarget"
          @update:language="promptLanguage = $event"
          @copy="copyPrompt"
        />
        <StoryPanel v-else-if="viewMode === 'story'" :story="currentSong.mvStory" />
        <ScriptPanel
          v-else-if="viewMode === 'script'"
          class="stage-panel"
          :shots="shots"
          :active-shot-id="activeShotId"
          :summary="currentScriptSummary"
          :copied-target="copiedTarget"
          @select-shot="selectShot"
          @copy-prompt="copyShotPrompt"
        />
        <AlignPanel
          v-else-if="viewMode === 'align'"
          :shots="shots"
          :sections="sections"
          :active-shot-id="activeShotId"
          :copied-target="copiedTarget"
          @select-shot="selectShot"
          @copy-prompt="copyShotPrompt"
        />
        <ProductionPanel
          v-else
          :song="currentSong"
          :focus-stage="selectedStage"
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
