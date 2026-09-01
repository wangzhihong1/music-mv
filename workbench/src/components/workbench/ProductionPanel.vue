<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { Film, Image as ImageIcon, Music2, X } from '@lucide/vue'
import { PRODUCTION_FOCUS } from '@/constants/navigation.js'

const props = defineProps({
  song: {
    type: Object,
    required: true,
  },
  focusStage: {
    type: String,
    default: '',
  },
})

const selectedImage = ref(null)
const production = computed(() => props.song.production || {})
const groups = computed(() => production.value.groups || [])
const featured = computed(() => groups.value.find((group) => group.id === 'final'))
const restGroups = computed(() => groups.value.filter((group) => group.id !== 'final'))
const itemCount = computed(() =>
  groups.value.reduce((total, group) => total + (group.items?.length || 0), 0),
)
const focusGroups = computed(() => PRODUCTION_FOCUS[props.focusStage] || [])

function isFocused(groupId) {
  return focusGroups.value.includes(groupId)
}

watch(
  () => [props.focusStage, groups.value.length],
  async () => {
    const targetId = focusGroups.value.find((groupId) =>
      groups.value.some((group) => group.id === groupId),
    )
    if (!targetId) return
    await nextTick()
    document.getElementById(`production-${targetId}`)?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  },
  { immediate: true },
)

function openImage(item) {
  selectedImage.value = item
}

function closeImage() {
  selectedImage.value = null
}
</script>

<template>
  <section class="panel production-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">Local Production</span>
        <h2>本机成片</h2>
      </div>
      <span class="panel-count">
        {{ production.mvDirectory || '尚未绑定 mvs 目录' }}
        · {{ itemCount }} 个文件
      </span>
    </div>

    <div v-if="groups.length === 0" class="production-empty">
      <p>尚未进入本机生成。确认脚本后，将音频、定妆图、镜头和成片放入 <code>mvs/YYYYMMDD-slug/</code>。</p>
    </div>

    <div v-else class="production-body">
      <section
        v-if="featured?.items?.length"
        id="production-final"
        class="production-group"
        :class="{ 'is-focused': isFocused('final') }"
      >
        <header>
          <Film :size="15" />
          <h3>{{ featured.label }}</h3>
          <small>{{ featured.items.length }}</small>
        </header>
        <div class="production-grid is-final">
          <article v-for="item in featured.items" :key="item.path" class="media-card is-featured">
            <video :src="item.url" controls preload="metadata"></video>
            <div class="media-meta">
              <strong>{{ item.name }}</strong>
              <small>{{ item.sizeLabel }}</small>
            </div>
          </article>
        </div>
      </section>

      <section
        v-for="group in restGroups"
        :id="`production-${group.id}`"
        :key="group.id"
        class="production-group"
        :class="{ 'is-focused': isFocused(group.id) }"
      >
        <header>
          <Film v-if="group.kind === 'video'" :size="15" />
          <ImageIcon v-else-if="group.kind === 'image'" :size="15" />
          <Music2 v-else :size="15" />
          <h3>{{ group.label }}</h3>
          <small>{{ group.items.length }}</small>
        </header>

        <div v-if="group.kind === 'image'" class="production-grid is-image">
          <button
            v-for="item in group.items"
            :key="item.path"
            class="media-card is-image"
            type="button"
            :aria-label="`查看 ${item.name}`"
            @click="openImage(item)"
          >
            <img :src="item.url" :alt="item.name">
            <span class="media-meta">
              <strong>{{ item.name }}</strong>
              <small>{{ item.sizeLabel }}</small>
            </span>
          </button>
        </div>

        <div v-else-if="group.kind === 'video'" class="production-grid is-video">
          <article v-for="item in group.items" :key="item.path" class="media-card">
            <video :src="item.url" controls preload="metadata"></video>
            <div class="media-meta">
              <strong>{{ item.name }}</strong>
              <small>{{ item.sizeLabel }}</small>
            </div>
          </article>
        </div>

        <div v-else class="production-audio-list">
          <article v-for="item in group.items" :key="item.path" class="audio-card">
            <div class="media-meta">
              <strong>{{ item.name }}</strong>
              <small>{{ item.sizeLabel }}</small>
            </div>
            <audio :src="item.url" controls preload="metadata"></audio>
          </article>
        </div>
      </section>
    </div>
  </section>

  <div
    v-if="selectedImage"
    class="image-lightbox"
    role="dialog"
    aria-modal="true"
    :aria-label="selectedImage.name"
    @click="closeImage"
  >
    <button class="lightbox-close" type="button" aria-label="关闭预览" @click="closeImage">
      <X :size="18" />
    </button>
    <img :src="selectedImage.url" :alt="selectedImage.name" @click.stop>
    <p>{{ selectedImage.name }}</p>
  </div>
</template>
