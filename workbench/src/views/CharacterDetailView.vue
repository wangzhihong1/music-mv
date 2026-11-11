<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft } from '@lucide/vue'
import CharacterProfileDialog from '@/components/workbench/CharacterProfileDialog.vue'
import CharacterVlogPanel from '@/components/workbench/CharacterVlogPanel.vue'
import { useWorkspace } from '@/composables/useWorkspace.js'

const props = defineProps({
  characterId: {
    type: String,
    required: true,
  },
})

const router = useRouter()
const { characters, selectNav } = useWorkspace()
const profileOpen = ref(false)

selectNav('characters')

const character = computed(() =>
  characters.value.find((item) => item.id === props.characterId) || null,
)

const profile = computed(() => character.value?.profile || {})
const look = computed(() => character.value?.look || {})

function mediaUrl(relativePath) {
  if (!relativePath || !character.value) return ''
  return `/studio-media/characters/${character.value.folder}/${relativePath}`
}

function occupationText() {
  if (profile.value.occupationLabel) return profile.value.occupationLabel
  return (profile.value.occupation || []).join(' / ')
}
</script>

<template>
  <div v-if="character" class="character-detail">
    <button class="back-button" type="button" @click="router.push('/characters')">
      <ArrowLeft :size="16" />
      返回人物列表
    </button>

    <header class="detail-hero">
      <div class="hero-cover">
        <img
          v-if="character.cover || look.cover"
          :src="mediaUrl(character.cover || look.cover)"
          :alt="character.name"
        />
      </div>
      <div class="hero-info">
        <h1>{{ character.name }}</h1>
        <p class="hero-occupation">{{ occupationText() }}</p>
        <button class="text-button" type="button" @click="profileOpen = true">人物资料</button>
      </div>
      <figure v-if="look.threeView" class="hero-sheet">
        <img :src="mediaUrl(look.threeView)" alt="三视图" />
        <figcaption>做视频时用这张图锁定长相</figcaption>
      </figure>
    </header>

    <CharacterVlogPanel :character="character" />
    <CharacterProfileDialog
      v-if="profileOpen"
      :character="character"
      @close="profileOpen = false"
    />
  </div>

  <div v-else class="character-not-found">
    <p>没有找到这个人物。</p>
    <button class="back-button" type="button" @click="router.push('/characters')">
      <ArrowLeft :size="16" />
      返回人物列表
    </button>
  </div>
</template>

<style scoped>
.character-detail {
  padding: 24px 40px 60px;
  overflow-y: auto;
  height: 100%;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  padding: 6px 12px;
  border: 1px solid #dce0d9;
  border-radius: 6px;
  background: #fff;
  color: #515851;
  font-size: 13px;
  cursor: pointer;
}

.back-button:hover {
  background: #f3f4f1;
}

.detail-hero {
  display: flex;
  align-items: flex-start;
  gap: 28px;
  margin-bottom: 8px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e8e2;
}

.hero-cover,
.hero-sheet {
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  background: #e9ece6;
}

.hero-cover {
  width: 160px;
}

.hero-sheet {
  width: 220px;
  margin: 0 0 0 auto;
}

.hero-cover img,
.hero-sheet img {
  width: 100%;
  display: block;
}

.hero-sheet img {
  max-height: 240px;
  object-fit: contain;
}

.hero-sheet figcaption {
  margin: 0;
  padding: 6px 8px 8px;
  color: #787f77;
  font-size: 12px;
  line-height: 1.4;
}

.hero-info {
  min-width: 0;
}

.hero-info h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.hero-occupation {
  margin: 6px 0 14px;
  color: #3e7b58;
  font-size: 14px;
  font-weight: 500;
}

.character-not-found {
  padding: 60px 40px;
  text-align: center;
  color: #8a908a;
}

@media (max-width: 860px) {
  .detail-hero {
    flex-wrap: wrap;
  }

  .hero-sheet {
    margin-left: 0;
  }
}
</style>
