import { computed, ref, watch } from 'vue'
import { lyricsToText, textToLyrics } from '@/utils/song-content.js'

export function useLyricsEditor({ currentSong, setRefreshPaused, saveSongLyrics }) {
  const editing = ref(false)
  const saving = ref(false)
  const saveError = ref('')
  const drafts = ref({})
  const originals = ref({})

  const sections = computed(() => currentSong.value.sections || [])
  const editable = computed(() => Boolean(currentSong.value.folder && sections.value.length))
  const isDirty = computed(() =>
    Object.keys(drafts.value).some((id) => drafts.value[id] !== originals.value[id]),
  )

  function startEdit() {
    if (!editable.value) return
    originals.value = Object.fromEntries(
      sections.value.map((section) => [section.id, lyricsToText(section.lyrics)]),
    )
    drafts.value = { ...originals.value }
    saveError.value = ''
    editing.value = true
    setRefreshPaused(true)
  }

  function cancelEdit() {
    editing.value = false
    saving.value = false
    saveError.value = ''
    drafts.value = {}
    originals.value = {}
    setRefreshPaused(false)
  }

  function updateDraft(sectionId, value) {
    drafts.value = { ...drafts.value, [sectionId]: value }
  }

  async function saveEdit() {
    if (!editing.value || saving.value || !currentSong.value.folder) return
    if (!isDirty.value) {
      cancelEdit()
      return
    }

    saving.value = true
    saveError.value = ''

    try {
      const payload = sections.value
        .filter((section) => drafts.value[section.id] !== originals.value[section.id])
        .map((section) => ({
          id: section.id,
          lyrics: textToLyrics(drafts.value[section.id] ?? ''),
        }))
      await saveSongLyrics(currentSong.value.folder, payload)
      cancelEdit()
    } catch (error) {
      saveError.value = error.message || '歌词保存失败'
      saving.value = false
    }
  }

  watch(
    () => currentSong.value.id,
    () => {
      if (editing.value) cancelEdit()
    },
  )

  return {
    editing,
    saving,
    saveError,
    drafts,
    editable,
    isDirty,
    startEdit,
    cancelEdit,
    saveEdit,
    updateDraft,
  }
}
