<script setup>
import { computed, nextTick, ref, watch } from 'vue'
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
import StoryPanel from '@/components/workbench/StoryPanel.vue'
import StylePanel from '@/components/workbench/StylePanel.vue'
import ReleaseCopyPanel from '@/components/workbench/ReleaseCopyPanel.vue'
import IconButton from '@/components/common/IconButton.vue'
import { useClipboard } from '@/composables/useClipboard.js'
import { useLyricsEditor } from '@/composables/useLyricsEditor.js'
import { useWorkspace } from '@/composables/useWorkspace.js'
import { METADATA_FIELDS } from '@/constants/song.js'
import { HEADER_STAGE, SONG_NAVS, STAGE_VIEW_MODES } from '@/constants/navigation.js'
import { joinCharacterLooks, joinLyrics, joinPrompts, metadataFacts, scriptSummary } from '@/utils/song-content.js'

const {
  songs,
  archives,
  currentSong,
  collectionSongs,
  activeNav,
  loadError,
  selectNav,
  selectSong,
  setRefreshPaused,
  saveSongLyrics,
} = useWorkspace()
const { copiedTarget, copyText } = useClipboard()
const {
  editing: editingLyrics,
  saving: savingLyrics,
  saveError: lyricsSaveError,
  drafts: lyricsDrafts,
  editable: lyricsEditable,
  isDirty: lyricsDirty,
  startEdit: startLyricsEdit,
  cancelEdit: cancelLyricsEdit,
  saveEdit: saveLyricsEdit,
  updateDraft: updateLyricsDraft,
} = useLyricsEditor({
  currentSong,
  setRefreshPaused,
  saveSongLyrics,
})

const viewMode = ref('brief')
const selectedStage = ref('brief')
const promptLanguage = ref('zh')
const activeSection = ref('')
const activeShotId = ref('')
const sidebarOpen = ref(false)
const stageScroller = ref(null)
const showingArchive = computed(() => ['inspiration', 'library'].includes(activeNav.value))
const headerViewMode = computed(() => (
  ['overview', 'align', 'production'].includes(viewMode.value) ? viewMode.value : ''
))

const prompts = computed(() => currentSong.value.prompts || [])
const characterLooks = computed(() => currentSong.value.characterLooks || [])
const sections = computed(() => currentSong.value.sections || [])
const shots = computed(() => currentSong.value.shots || [])
const facts = computed(() => metadataFacts(currentSong.value, METADATA_FIELDS))
const musicTracks = computed(() => {
  const groups = currentSong.value.production?.groups || []
  return (groups.find((group) => group.id === 'music')?.items || []).filter((item) => item.url)
})
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

watch(
  [viewMode, selectedStage, () => currentSong.value.id],
  async () => {
    await nextTick()
    stageScroller.value?.scrollTo({ top: 0 })
  },
)

function onSelectNav(navId) {
  selectNav(navId)
  sidebarOpen.value = false
  if (SONG_NAVS.includes(navId)) {
    viewMode.value = 'brief'
    selectedStage.value = 'brief'
  }
}

function onSelectSong(songId) {
  selectSong(songId)
  sidebarOpen.value = false
  viewMode.value = 'brief'
  selectedStage.value = 'brief'
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

function copyShotPrompt(shot, language = 'en') {
  const fallback = [shot.action, shot.visual, shot.camera].filter(Boolean).join('\n')
  const prompt = language === 'zh' ? shot.promptZh : shot.prompt
  copyText(prompt || fallback, `shot-${shot.id}-${language}`)
}

function lookText(look, kind) {
  if (kind === 'negative') {
    return promptLanguage.value === 'en' ? look.negativeEn || '' : look.negativeZh || ''
  }
  return look[promptLanguage.value] || ''
}

function copyCharacterLook(target) {
  if (target === 'all') {
    copyText(joinCharacterLooks(characterLooks.value, promptLanguage.value), 'look-all')
    return
  }
  const negative = target.endsWith('-negative')
  const id = negative ? target.slice(0, -'-negative'.length) : target
  const look = characterLooks.value.find((item) => item.id === id)
  copyText(lookText(look || {}, negative ? 'negative' : 'positive'), `look-${target}`)
}

function copyRelease(target) {
  const [platformId, field] = String(target).split('-')
  const platform = currentSong.value.releaseCopy?.[platformId] || {}
  const text = field === 'all'
    ? [platform.title, platform.description].filter(Boolean).join('\n\n')
    : platform[field] || ''
  copyText(text, `release-${platformId}-${field}`)
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
      <div v-if="showingArchive" ref="stageScroller" class="main-stage">
        <ArchivePanel
          :nav-id="activeNav"
          :files="archives[activeNav]"
        />
      </div>

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

        <div ref="stageScroller" class="main-stage">
          <div v-if="viewMode === 'overview'" class="workbench-grid">
            <LyricsPanel
              :sections="sections"
              :active-section="activeSection"
              :copied="copiedTarget === 'lyrics'"
              :editing="editingLyrics"
              :saving="savingLyrics"
              :save-error="lyricsSaveError"
              :drafts="lyricsDrafts"
              :dirty="lyricsDirty"
              :editable="lyricsEditable"
              @copy="copyText(allLyrics, 'lyrics')"
              @select-section="selectSection"
              @start-edit="startLyricsEdit"
              @cancel-edit="cancelLyricsEdit"
              @save-edit="saveLyricsEdit"
              @update-draft="updateLyricsDraft"
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
              <ReleaseCopyPanel
                :release-copy="currentSong.releaseCopy"
                :copied-target="copiedTarget"
                @copy="copyRelease"
              />
            </div>
          </div>

          <BriefPanel v-else-if="viewMode === 'brief'" :song="currentSong" />
          <StylePanel v-else-if="viewMode === 'style'" :facts="facts" :tracks="musicTracks" />
          <LyricsPanel
            v-else-if="viewMode === 'lyrics'"
            class="stage-panel"
            :sections="sections"
            :active-section="activeSection"
            :copied="copiedTarget === 'lyrics'"
            :editing="editingLyrics"
            :saving="savingLyrics"
            :save-error="lyricsSaveError"
            :drafts="lyricsDrafts"
            :dirty="lyricsDirty"
            :editable="lyricsEditable"
            @copy="copyText(allLyrics, 'lyrics')"
            @select-section="selectSection"
            @start-edit="startLyricsEdit"
            @cancel-edit="cancelLyricsEdit"
            @save-edit="saveLyricsEdit"
            @update-draft="updateLyricsDraft"
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
            outline
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
            :prompt-language="promptLanguage"
            :copied-target="copiedTarget"
            @update:prompt-language="promptLanguage = $event"
            @copy-look="copyCharacterLook"
            @copy-release="copyRelease"
          />
        </div>
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
