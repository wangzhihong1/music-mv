<script setup>
import { shotDuration } from '@/lib/time.js'
import { sectionForShot } from '@/utils/song-content.js'

const props = defineProps({
  shots: {
    type: Array,
    default: () => [],
  },
  sections: {
    type: Array,
    default: () => [],
  },
  activeShotId: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['select-shot'])

function relatedSection(shot) {
  return sectionForShot(props.sections, shot)
}
</script>

<template>
  <section class="panel align-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">Lyrics × MV Script</span>
        <h2>歌词与画面对齐</h2>
      </div>
      <span class="panel-count">按歌曲时间线检查</span>
    </div>
    <div class="align-table">
      <div class="align-head">
        <span>时间与段落</span>
        <span>歌词</span>
        <span>画面与执行</span>
      </div>
      <button
        v-for="shot in shots"
        :key="shot.id"
        class="align-row"
        :class="{ 'is-active': activeShotId === shot.id }"
        type="button"
        @click="emit('select-shot', shot)"
      >
        <span class="align-time">
          <time>{{ shot.start }}–{{ shot.end }}</time>
          <b>{{ relatedSection(shot).label }} · {{ shotDuration(shot) }} 秒</b>
        </span>
        <span class="align-lyrics">
          <span v-for="line in relatedSection(shot).lyrics" :key="line">{{ line }}</span>
        </span>
        <span class="align-visual">
          <b>{{ shot.shot }} · {{ shot.action }}</b>
          <span>{{ shot.visual }}</span>
          <small>{{ shot.camera }}</small>
        </span>
      </button>
    </div>
  </section>
</template>
