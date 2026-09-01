<script setup>
import { AlignJustify, Check, SlidersHorizontal } from '@lucide/vue'
import { VIEW_MODES } from '@/constants/navigation.js'

defineProps({
  song: {
    type: Object,
    required: true,
  },
  viewMode: {
    type: String,
    default: 'overview',
  },
})

const emit = defineEmits(['update:viewMode'])

const viewIcons = {
  overview: SlidersHorizontal,
  align: AlignJustify,
}
</script>

<template>
  <header class="page-header">
    <div class="song-identity">
      <div class="cover-art" :aria-label="`${song.title}封面`">
        <span class="cover-road"></span>
        <span class="cover-light"></span>
      </div>
      <div class="song-title-copy">
        <div class="eyebrow">{{ song.date || '本地项目' }} · 单曲工作台</div>
        <div class="title-row">
          <h1>{{ song.title }}</h1>
          <span class="status-badge"><Check :size="13" />{{ song.status }}</span>
        </div>
        <p>{{ song.coreStatement }}</p>
      </div>
    </div>

    <div class="header-actions">
      <div class="segmented-control" aria-label="视图模式">
        <button
          v-for="mode in VIEW_MODES"
          :key="mode.id"
          type="button"
          :aria-pressed="viewMode === mode.id"
          @click="emit('update:viewMode', mode.id)"
        >
          <component :is="viewIcons[mode.id]" :size="15" />
          {{ mode.label }}
        </button>
      </div>
    </div>
  </header>
</template>
