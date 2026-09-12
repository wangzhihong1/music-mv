<script setup>
import { computed, ref } from 'vue'
import { Film, Image as ImageIcon, Music2, X } from '@lucide/vue'
import CharacterLooksPanel from '@/components/workbench/CharacterLooksPanel.vue'
import { PRODUCTION_FOCUS } from '@/constants/navigation.js'

const STAGE_COPY = {
  'character-references': { kicker: 'Character References', title: '主角图片' },
  'shot-videos': { kicker: 'H3 Shots', title: '分镜视频' },
  post: { kicker: 'Post', title: '修复超分' },
  delivery: { kicker: 'Delivery', title: '成片' },
}

const EMPTY_COPY = {
  'character-references': '形象提示词按 ComfyUI 01_character_three_views 书写。复制英文到工作流左上角 Shared Character Prompt 后排队；确认的正面、侧面、背面放入 mvs/YYYYMMDD-slug/assets/characters/。',
  'shot-videos': '尚未生成分镜视频。确认主角参考图后，将 H3 输出放入 generated/video/raw/。',
  post: '尚未生成修复超分。合格分镜视频修复后放入 generated/video/intermediate/。',
  delivery: '尚未导出成片。剪辑完成后放入 generated/video/final/。',
}

const props = defineProps({
  song: {
    type: Object,
    required: true,
  },
  focusStage: {
    type: String,
    default: '',
  },
  promptLanguage: {
    type: String,
    default: 'zh',
  },
  copiedTarget: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:promptLanguage', 'copy-look'])

const selectedImage = ref(null)
const production = computed(() => props.song.production || {})
const groups = computed(() => production.value.groups || [])
const characterLooks = computed(() => props.song.characterLooks || [])
const showingLooks = computed(() => props.focusStage === 'character-references')
const stageCopy = computed(() => STAGE_COPY[props.focusStage] || {
  kicker: 'Local Production',
  title: '本机成片',
})
const focusGroups = computed(() => PRODUCTION_FOCUS[props.focusStage] || [])
const visibleGroups = computed(() => {
  if (!focusGroups.value.length) return groups.value
  return groups.value.filter((group) => focusGroups.value.includes(group.id))
})
const featured = computed(() => visibleGroups.value.find((group) => group.id === 'final'))
const restGroups = computed(() => visibleGroups.value.filter((group) => group.id !== 'final'))
const itemCount = computed(() =>
  visibleGroups.value.reduce((total, group) => total + (group.items?.length || 0), 0),
)
const fileCount = computed(() =>
  visibleGroups.value.reduce(
    (total, group) => total + (group.items || []).filter((item) => !item.missing).length,
    0,
  ),
)
const hasVisibleMedia = computed(() => itemCount.value > 0)

function isFocused(groupId) {
  return focusGroups.value.includes(groupId)
}

function itemLabel(item) {
  return item.title || item.name
}

function itemCaption(item) {
  if (item.missing) return item.sizeLabel
  if (item.title && item.title !== item.name) return `${item.name} · ${item.sizeLabel}`
  return item.sizeLabel
}

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
        <span class="panel-kicker">{{ stageCopy.kicker }}</span>
        <h2>{{ stageCopy.title }}</h2>
      </div>
      <span class="panel-count">
        {{ production.mvDirectory || '尚未绑定 mvs 目录' }}
        · {{ fileCount }} 个文件
      </span>
    </div>

    <CharacterLooksPanel
      v-if="showingLooks"
      :looks="characterLooks"
      :language="promptLanguage"
      :copied-target="copiedTarget"
      @update:language="emit('update:promptLanguage', $event)"
      @copy="emit('copy-look', $event)"
    />

    <div v-if="!hasVisibleMedia && !showingLooks" class="production-empty">
      <p v-if="!production.mvDirectory">尚未进入本机生成。确认脚本后，将音频、主角图片、分镜视频和成片放入 <code>mvs/YYYYMMDD-slug/</code>。</p>
      <p v-else>{{ EMPTY_COPY[focusStage] || '当前步骤还没有可预览的文件。' }}</p>
    </div>

    <p v-else-if="!hasVisibleMedia && showingLooks" class="production-empty">
      形象提示词按 ComfyUI <code>01_character_three_views</code> 书写。复制英文到工作流左上角 Shared Character Prompt 后排队；确认的正面、侧面、背面放入 <code>mvs/YYYYMMDD-slug/assets/characters/</code>。
    </p>

    <div v-if="hasVisibleMedia" class="production-body">
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
              <strong>{{ itemLabel(item) }}</strong>
              <small>{{ itemCaption(item) }}</small>
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
            :aria-label="`查看 ${itemLabel(item)}`"
            @click="openImage(item)"
          >
            <img :src="item.url" :alt="itemLabel(item)">
            <span class="media-meta">
              <strong>{{ itemLabel(item) }}</strong>
              <small>{{ itemCaption(item) }}</small>
            </span>
          </button>
        </div>

        <div v-else-if="group.kind === 'video'" class="production-grid is-video">
          <article
            v-for="item in group.items"
            :key="item.path || item.name"
            class="media-card"
            :class="{ 'is-voided': item.voided, 'is-missing': item.missing }"
          >
            <video v-if="item.url" :src="item.url" controls preload="metadata"></video>
            <div v-else class="media-placeholder">{{ item.sizeLabel }}</div>
            <div class="media-meta">
              <strong>{{ itemLabel(item) }}</strong>
              <small>{{ itemCaption(item) }}</small>
            </div>
          </article>
        </div>

        <div v-else class="production-audio-list">
          <article v-for="item in group.items" :key="item.path" class="audio-card">
            <div class="media-meta">
              <strong>{{ itemLabel(item) }}</strong>
              <small>{{ itemCaption(item) }}</small>
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
