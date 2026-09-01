<script setup>
import { computed } from 'vue'
import { STORY_FIELDS } from '@/constants/song.js'

const props = defineProps({
  story: {
    type: Object,
    default: () => ({}),
  },
})

const beats = computed(() =>
  STORY_FIELDS
    .map(([key, label]) => [key, label, String(props.story?.[key] || '').trim()])
    .filter(([, , value]) => value),
)
</script>

<template>
  <section class="panel stage-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">06 · Story</span>
        <h2>MV 故事</h2>
      </div>
      <span class="panel-count">{{ beats.length ? `${beats.length} 段` : '未开始' }}</span>
    </div>
    <div v-if="beats.length" class="story-list">
      <article v-for="([key, label, value]) in beats" :key="key" class="story-beat">
        <h3>{{ label }}</h3>
        <p>{{ value }}</p>
      </article>
    </div>
    <p v-else class="stage-empty">尚未创作 MV 故事。</p>
  </section>
</template>
