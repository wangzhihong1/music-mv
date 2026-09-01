<script setup>
import { Film } from '@lucide/vue'
import { shotDuration } from '@/lib/time.js'

defineProps({
  shots: {
    type: Array,
    default: () => [],
  },
  activeShotId: {
    type: String,
    default: '',
  },
  summary: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['select-shot'])
</script>

<template>
  <section class="panel script-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">07 · MV Script</span>
        <h2>MV 脚本</h2>
      </div>
      <span class="panel-count"><Film :size="14" />{{ summary }}</span>
    </div>

    <p v-if="shots.length === 0" class="stage-empty">尚未编写 MV 脚本。</p>
    <div v-else class="script-table" role="table" aria-label="MV脚本列表">
      <div class="script-table-head" role="row">
        <span role="columnheader">时间</span>
        <span role="columnheader">景别</span>
        <span role="columnheader">画面与动作</span>
        <span role="columnheader">运镜</span>
      </div>
      <button
        v-for="shot in shots"
        :key="shot.id"
        class="script-row"
        :class="{ 'is-active': activeShotId === shot.id }"
        type="button"
        role="row"
        @click="emit('select-shot', shot)"
      >
        <time role="cell">{{ shot.start }}–{{ shot.end }}<small>{{ shotDuration(shot) }} 秒</small></time>
        <strong role="cell">{{ shot.shot }}</strong>
        <span class="script-action" role="cell">
          <b>{{ shot.action }}</b>
          <small>{{ shot.visual }}</small>
        </span>
        <span role="cell">{{ shot.camera }}</span>
      </button>
    </div>
  </section>
</template>
