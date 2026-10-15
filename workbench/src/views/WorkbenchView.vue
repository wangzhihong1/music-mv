<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { formatDuration, shotDuration } from '@/lib/time.js'
import ArchivePanel from '@/components/workbench/ArchivePanel.vue'
import LyricLinesPanel from '@/components/workbench/LyricLinesPanel.vue'
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
import ShortsPanel from '@/components/workbench/ShortsPanel.vue'
import { useClipboard } from '@/composables/useClipboard.js'
import { useLyricsEditor } from '@/composables/useLyricsEditor.js'
import { useWorkspace } from '@/composables/useWorkspace.js'
import SongHeader from '@/components/layout/SongHeader.vue'
import { METADATA_FIELDS } from '@/constants/song.js'
import { HEADER_STAGE, ARCHIVE_NAVS, SONG_NAVS, STAGE_VIEW_MODES } from '@/constants/navigation.js'
import { joinLyrics, joinPrompts, metadataFacts, scriptSummary } from '@/utils/song-content.js'

const props = defineProps({
  collectionId: {
    type: String,
    default: '',
  },
  archiveId: {
    type: String,
    default: '',
  },
})

const {
  archives,
  characters,
  lyricLines,
  currentSong,
  activeNav,
  loadError,
  selectNav,
  setRefreshPaused,
  saveSongLyrics,
  saveSongShorts,
  deleteSceneImage,
  deleteVoidedShot,
  setRawShotStatus,
  deleteUpscaleVideo,
  confirmSceneReference,
  saveLyricLine,
  deleteLyricLine,
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

const viewMode = ref('brief-style')
const selectedStage = ref('brief-style')
const promptLanguage = ref('zh')
const activeSection = ref('')
const activeShotId = ref('')
const stageScroller = ref(null)
// 仅当 activeNav 确属档案集合时才渲染档案面板，避免"人物"等非档案导航
// 在路由切换的过渡瞬间落入 ArchivePanel 分支而崩溃
const showingArchive = computed(() => ARCHIVE_NAVS.includes(activeNav.value))
const headerViewMode = computed(() => (
  ['overview', 'align', 'production', 'shorts'].includes(viewMode.value) ? viewMode.value : ''
))

const prompts = computed(() => currentSong.value.prompts || [])
const linkedCharacters = computed(() => characters.value.flatMap((character) => {
  const linkedWork = (character.works || []).find((work) => work.songId === currentSong.value.id)
  return linkedWork ? [{ ...character, linkedWork }] : []
}))
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

watch(
  () => props.collectionId,
  (id) => {
    if (id && SONG_NAVS.includes(id)) {
      selectNav(id)
      viewMode.value = 'brief-style'
      selectedStage.value = 'brief-style'
    }
  },
  { immediate: true },
)

watch(
  () => props.archiveId,
  (id) => {
    if (id) {
      selectNav(id)
      viewMode.value = 'brief-style'
      selectedStage.value = 'brief-style'
    }
  },
  { immediate: true },
)

function onSelectStage(stageId) {
  selectedStage.value = stageId
  viewMode.value = STAGE_VIEW_MODES[stageId] || 'overview'
}

function onUpdateViewMode(mode) {
  viewMode.value = mode
  selectedStage.value = mode === 'shorts' ? 'shorts' : (HEADER_STAGE[mode] ?? '')
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

function copyRelease(target) {
  const [platformId, field] = String(target).split('-')
  const platform = currentSong.value.releaseCopy?.[platformId] || {}
  const text = field === 'all'
    ? [platform.title, platform.description].filter(Boolean).join('\n\n')
    : platform[field] || ''
  copyText(text, `release-${platformId}-${field}`)
}

function saveCurrentShorts(shorts) {
  return saveSongShorts(currentSong.value.folder, shorts)
}
</script>

<template>
  <div class="workbench-view">
    <div v-if="showingArchive" ref="stageScroller" class="main-stage">
      <LyricLinesPanel
        v-if="activeNav === 'lyric-lines'"
        :lines="lyricLines"
        :save-line="saveLyricLine"
        :remove-line="deleteLyricLine"
        :set-refresh-paused="setRefreshPaused"
      />
      <ArchivePanel
        v-else
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
        :has-character-references="linkedCharacters.length > 0"
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

        <div v-else-if="viewMode === 'brief-style'" class="brief-style-stack">
          <BriefPanel :song="currentSong" />
          <StylePanel :facts="facts" :tracks="musicTracks" />
        </div>
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
        <ScriptPanel
          v-else-if="viewMode === 'shot-prompts'"
          class="stage-panel"
          outline
          show-prompts
          kicker="08 · H3 Prompts"
          title="最终分镜提示词"
          empty-copy="人物与场景基准图确认后，才能生成最终分镜提示词。"
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
        <ShortsPanel
          v-else-if="viewMode === 'shorts'"
          :song="currentSong"
          :copied-target="copiedTarget"
          :save-shorts="saveCurrentShorts"
          @copy="(text, id) => copyText(text, `short-${id}`)"
        />
        <ProductionPanel
          v-else
          :song="currentSong"
          :characters="linkedCharacters"
          :focus-stage="selectedStage"
          :copied-target="copiedTarget"
          :delete-scene-image="deleteSceneImage"
          :delete-voided-shot="deleteVoidedShot"
          :set-raw-shot-status="setRawShotStatus"
          :delete-upscale-video="deleteUpscaleVideo"
          :confirm-scene-reference="confirmSceneReference"
          @copy-release="copyRelease"
        />
      </div>
    </template>
  </div>
</template>
