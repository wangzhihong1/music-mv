<script setup>
import { useRouter } from 'vue-router'
import { Music2 } from '@lucide/vue'
import { useWorkspace } from '@/composables/useWorkspace.js'

const router = useRouter()
const { characters, selectNav } = useWorkspace()

// 人物列表路由激活时，同步侧边栏高亮
selectNav('characters')

function mediaUrl(character, relativePath) {
  if (!relativePath) return ''
  return `/studio-media/characters/${character.folder}/${relativePath}`
}

function characterAge(character) {
  return character.profile?.age || ''
}

function characterOccupation(character) {
  return character.profile?.occupationLabel || (character.profile?.occupation || []).join(' / ')
}
</script>

<template>
  <div class="characters-view">
    <header class="view-header">
      <div>
        <span class="panel-kicker">Characters</span>
        <h2>人物</h2>
      </div>
      <span class="panel-count">{{ characters.length }} 位艺人</span>
    </header>

    <p class="view-description">
      虚拟艺人与角色库。每位人物拥有独立的性格、职业、视觉定妆、声音身份与作品集，可跨歌曲复用。
    </p>

    <div v-if="characters.length" class="character-grid">
      <button
        v-for="character in characters"
        :key="character.id"
        class="character-card"
        type="button"
        @click="router.push(`/characters/${encodeURIComponent(character.id)}`)"
      >
        <div class="character-cover">
          <img
            v-if="character.cover"
            :src="mediaUrl(character, character.cover)"
            :alt="character.name"
            loading="lazy"
          />
          <div v-else class="character-cover-placeholder">
            <Music2 :size="32" />
          </div>
        </div>
        <div class="character-card-body">
          <h3>{{ character.name }}</h3>
          <p class="character-meta">
            <span v-if="characterAge(character)">{{ characterAge(character) }} 岁</span>
            <span v-if="characterAge(character) && characterOccupation(character)"> · </span>
            <span>{{ characterOccupation(character) }}</span>
          </p>
          <p v-if="character.bio" class="character-bio">{{ character.bio }}</p>
        </div>
      </button>
    </div>

    <p v-else class="empty-state">还没有人物档案。</p>
  </div>
</template>

<style scoped>
.characters-view {
  padding: 32px 40px;
  overflow-y: auto;
  height: 100%;
}

.view-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 8px;
}

.view-header h2 {
  margin: 4px 0 0;
  font-size: 24px;
  font-weight: 600;
}

.view-description {
  margin: 0 0 28px;
  color: #70776f;
  font-size: 14px;
  line-height: 1.6;
}

.panel-kicker {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8a908a;
}

.panel-count {
  color: #8a908a;
  font-size: 13px;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.character-card {
  display: flex;
  flex-direction: column;
  padding: 0;
  border: 1px solid #dce0d9;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.character-card:hover {
  border-color: #b8c0b5;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.character-cover {
  aspect-ratio: 3 / 4;
  background: #e9ece6;
  overflow: hidden;
}

.character-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.character-cover-placeholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: #b8c0b5;
}

.character-card-body {
  padding: 14px 16px 16px;
}

.character-card-body h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.character-meta {
  margin: 4px 0 0;
  color: #70776f;
  font-size: 12px;
}

.character-bio {
  margin: 8px 0 0;
  color: #515851;
  font-size: 13px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.empty-state {
  color: #8a908a;
  font-size: 14px;
}
</style>
