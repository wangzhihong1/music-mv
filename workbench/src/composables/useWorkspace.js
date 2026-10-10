import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { confirmSceneReference as persistSceneReference, deleteSceneImage as removeSceneImage, deleteUpscaleVideo as removeUpscaleVideo, deleteVoidedShot as removeVoidedShot, fetchWorkspace, saveSongLyrics as persistSongLyrics, saveSongShorts as persistSongShorts, setRawShotStatus as persistRawShotStatus } from '@/api/workspace'
import { EMPTY_SONG } from '@/constants/song'
import { SONG_NAVS } from '@/constants/navigation.js'
import { WORKSPACE_CHANGED_EVENT } from '@/constants/workspace.js'

export function useWorkspace() {
  const songs = ref([])
  const archives = ref({ inspiration: [], library: [] })
  const lyricReferences = ref([])
  const selectedSongId = ref('')
  const activeNav = ref('in-progress')
  const loadError = ref('')
  const refreshPaused = ref(false)
  let snapshot = ''

  const collectionSongs = computed(() =>
    songs.value.filter((song) => song.collectionId === activeNav.value),
  )

  const currentSong = computed(() => {
    const pool = SONG_NAVS.includes(activeNav.value)
      ? collectionSongs.value
      : songs.value
    return pool.find((song) => song.id === selectedSongId.value) || pool[0] || EMPTY_SONG
  })

  async function loadWorkspace({ silent = false } = {}) {
    try {
      const payload = await fetchWorkspace()
      const nextSnapshot = JSON.stringify(payload)

      if (nextSnapshot !== snapshot) {
        songs.value = payload.songs || []
        archives.value = {
          inspiration: payload.inspiration || [],
          library: payload.library || [],
        }
        lyricReferences.value = payload.lyricReferences || []
        snapshot = nextSnapshot
        ensureSelection()
      }

      loadError.value = ''
    } catch (error) {
      if (!silent) loadError.value = error.message
    }
  }

  function ensureSelection() {
    const visible = SONG_NAVS.includes(activeNav.value)
      ? songs.value.filter((song) => song.collectionId === activeNav.value)
      : songs.value

    if (!visible.some((song) => song.id === selectedSongId.value)) {
      selectedSongId.value = visible[0]?.id || ''
    }
  }

  function selectNav(navId) {
    activeNav.value = navId
    ensureSelection()
  }

  function selectSong(songId) {
    selectedSongId.value = songId
  }

  function setRefreshPaused(paused) {
    refreshPaused.value = paused
  }

  function onWorkspaceChanged() {
    if (!refreshPaused.value) {
      loadWorkspace({ silent: true })
    }
  }

  async function saveSongLyrics(folder, sectionUpdates) {
    await persistSongLyrics(folder, sectionUpdates)
    await loadWorkspace({ silent: true })
  }

  async function saveSongShorts(folder, shorts) {
    await persistSongShorts(folder, shorts)
    await loadWorkspace({ silent: true })
  }

  async function deleteSceneImage(folder, fileName) {
    await removeSceneImage(folder, fileName)
    await loadWorkspace({ silent: true })
  }

  async function deleteVoidedShot(folder, fileName) {
    await removeVoidedShot(folder, fileName)
    await loadWorkspace({ silent: true })
  }

  async function setRawShotStatus(folder, fileName, action) {
    await persistRawShotStatus(folder, fileName, action)
    await loadWorkspace({ silent: true })
  }

  async function deleteUpscaleVideo(folder, fileName) {
    await removeUpscaleVideo(folder, fileName)
    await loadWorkspace({ silent: true })
  }

  async function confirmSceneReference(folder, payload) {
    await persistSceneReference(folder, payload)
    await loadWorkspace({ silent: true })
  }

  onMounted(() => {
    loadWorkspace()
    if (import.meta.hot) {
      import.meta.hot.on(WORKSPACE_CHANGED_EVENT, onWorkspaceChanged)
    }
  })

  onBeforeUnmount(() => {
    if (import.meta.hot) {
      import.meta.hot.off(WORKSPACE_CHANGED_EVENT, onWorkspaceChanged)
    }
  })

  return {
    songs,
    archives,
    lyricReferences,
    selectedSongId,
    activeNav,
    loadError,
    collectionSongs,
    currentSong,
    selectNav,
    selectSong,
    setRefreshPaused,
    saveSongLyrics,
    saveSongShorts,
    deleteSceneImage,
    deleteVoidedShot,
    setRawShotStatus,
    deleteUpscaleVideo,
    confirmSceneReference,
    loadWorkspace,
  }
}
