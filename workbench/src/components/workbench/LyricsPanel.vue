<script setup>
import { Copy } from '@lucide/vue'
import CopyFeedback from '@/components/common/CopyFeedback.vue'
import IconButton from '@/components/common/IconButton.vue'

defineProps({
  sections: {
    type: Array,
    default: () => [],
  },
  activeSection: {
    type: String,
    default: '',
  },
  copied: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['copy', 'select-section'])
</script>

<template>
  <section class="panel lyrics-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">03 · Lyrics</span>
        <h2>歌词</h2>
      </div>
      <div class="panel-actions">
        <CopyFeedback :visible="copied" />
        <IconButton label="复制完整歌词" @click="emit('copy')">
          <Copy :size="17" />
        </IconButton>
      </div>
    </div>

    <div class="lyrics-content">
      <p v-if="sections.length === 0" class="stage-empty">尚未填写歌词。</p>
      <button
        v-for="section in sections"
        :key="section.id"
        class="lyric-section"
        :class="{ 'is-active': activeSection === section.id }"
        type="button"
        :aria-pressed="activeSection === section.id"
        @click="emit('select-section', section.id)"
      >
        <span class="section-meta">
          <b>{{ section.label }}</b>
          <time>{{ section.time }}</time>
        </span>
        <span v-for="line in section.lyrics" :key="line" class="lyric-line">{{ line }}</span>
      </button>
    </div>
  </section>
</template>
