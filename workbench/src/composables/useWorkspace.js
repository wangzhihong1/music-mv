import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { fetchWorkspace } from '@/api/workspace'
import { EMPTY_SONG } from '@/constants/song'
import { SONG_NAVS } from '@/constants/navigation.js'

export function useWorkspace() {
  const songs = ref([])
  const archives = ref({ inspiration: [], library: [] })
  const selectedSongId = ref('')
  const activeNav = ref('in-progress')
  const loadError = ref('')
  let refreshTimer
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

  onMounted(() => {
    loadWorkspace()
    refreshTimer = window.setInterval(() => loadWorkspace({ silent: true }), 4000)
  })

  onBeforeUnmount(() => {
    window.clearInterval(refreshTimer)
  })

  return {
    songs,
    archives,
    selectedSongId,
    activeNav,
    loadError,
    collectionSongs,
    currentSong,
    selectNav,
    selectSong,
  }
}
