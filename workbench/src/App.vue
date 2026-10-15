<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import { useWorkspace } from '@/composables/useWorkspace.js'
import { ARCHIVE_NAVS, CHARACTER_NAV, SONG_NAVS } from '@/constants/navigation.js'

const router = useRouter()
const { songs, currentSong, activeNav, selectSong } = useWorkspace()

const collectionLabel = computed(() => currentSong.value.collection || '本地歌曲库')

const visibleSongs = computed(() => {
  if (SONG_NAVS.includes(activeNav.value)) {
    return songs.value.filter((song) => song.collectionId === activeNav.value)
  }
  return songs.value
})

function onSelectNav(navId) {
  // activeNav 由各路由视图根据当前路由同步（WorkbenchView/CharactersView），此处只负责跳转，
  // 避免在路由尚未切换时先改 activeNav，导致 WorkbenchView 渲染出错误的档案分支并崩溃。
  if (SONG_NAVS.includes(navId)) {
    router.push(`/songs/${navId}`)
  } else if (navId === CHARACTER_NAV) {
    router.push('/characters')
  } else if (ARCHIVE_NAVS.includes(navId)) {
    router.push(`/archives/${navId}`)
  }
}

function onSelectSong(songId) {
  selectSong(songId)
}
</script>

<template>
  <div class="app-shell">
    <AppSidebar
      :songs="songs"
      :visible-songs="visibleSongs"
      :current-song-id="currentSong.id"
      :active-nav="activeNav"
      :collection-label="collectionLabel"
      @select-nav="onSelectNav"
      @select-song="onSelectSong"
    />

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>
