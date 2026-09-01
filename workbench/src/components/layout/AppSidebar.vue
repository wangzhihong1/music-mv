<script setup>
import {
  Check,
  Clapperboard,
  FileMusic,
  Library,
  ListMusic,
  Music2,
  Search,
  Sparkles,
} from '@lucide/vue'
import { NAV_ITEMS } from '@/constants/navigation.js'

const props = defineProps({
  songs: {
    type: Array,
    default: () => [],
  },
  visibleSongs: {
    type: Array,
    default: () => [],
  },
  currentSongId: {
    type: String,
    default: '',
  },
  activeNav: {
    type: String,
    default: 'in-progress',
  },
  collectionLabel: {
    type: String,
    default: '本地歌曲库',
  },
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['select-nav', 'select-song'])

const iconMap = {
  'in-progress': ListMusic,
  completed: Check,
  production: Clapperboard,
  inspiration: Sparkles,
  library: Library,
}

const listHeading = {
  completed: '已完成歌曲',
  production: '本机生成项目',
}

const emptyCopy = {
  production: '此分类暂无本机生成项目',
}

function countFor(item) {
  if (item.kind !== 'collection') return ''
  return props.songs.filter((song) => song.collectionId === item.id).length
}
</script>

<template>
  <aside class="sidebar" :class="{ 'is-open': open }">
    <div class="brand">
      <div class="brand-mark"><Music2 :size="18" /></div>
      <div>
        <strong>声场</strong>
        <span>音乐创作项目</span>
      </div>
    </div>

    <nav class="primary-nav" aria-label="主导航">
      <button
        v-for="item in NAV_ITEMS"
        :key="item.id"
        class="nav-item"
        :class="{ 'is-active': activeNav === item.id }"
        type="button"
        @click="emit('select-nav', item.id)"
      >
        <component :is="iconMap[item.id]" :size="17" />
        <span>{{ item.label }}</span>
        <b v-if="item.kind === 'collection'">{{ countFor(item) }}</b>
      </button>
    </nav>

    <div class="song-list-heading">
      <span>{{ listHeading[activeNav] || '最近歌曲' }}</span>
      <button class="icon-button" type="button" aria-label="搜索歌曲" data-tooltip="搜索歌曲">
        <Search :size="16" />
      </button>
    </div>

    <div class="song-list">
      <button
        v-for="song in visibleSongs"
        :key="song.id"
        class="song-item"
        :class="{ 'is-active': song.id === currentSongId }"
        type="button"
        @click="emit('select-song', song.id)"
      >
        <span class="song-cover-mini"><FileMusic :size="15" /></span>
        <span class="song-item-copy">
          <strong>{{ song.title }}</strong>
          <small>{{ song.status }}</small>
        </span>
      </button>
      <p v-if="visibleSongs.length === 0" class="song-list-empty">{{ emptyCopy[activeNav] || '此分类暂无歌曲' }}</p>
    </div>

    <div class="sidebar-footer">
      <span>{{ collectionLabel }}</span>
    </div>
  </aside>
</template>
