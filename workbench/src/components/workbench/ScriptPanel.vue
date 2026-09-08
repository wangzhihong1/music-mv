<script setup>
import { ClipboardCheck, Copy, Film } from '@lucide/vue'
import CopyFeedback from '@/components/common/CopyFeedback.vue'
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
  copiedTarget: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['select-shot', 'copy-prompt'])
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
      <article
        v-for="shot in shots"
        :key="shot.id"
        class="script-shot"
        :class="{ 'is-active': activeShotId === shot.id }"
      >
        <button
          class="script-row"
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
        <div v-if="shot.prompt" class="script-prompt">
          <div class="script-prompt-head">
            <span>文生视频提示词</span>
            <div class="script-prompt-copy">
              <CopyFeedback :visible="copiedTarget === `shot-${shot.id}`" />
              <button
                class="inline-copy"
                type="button"
                :aria-label="`复制${shot.shot}提示词`"
                :data-tooltip="`复制提示词`"
                @click="emit('copy-prompt', shot)"
              >
                <ClipboardCheck v-if="copiedTarget === `shot-${shot.id}`" :size="14" />
                <Copy v-else :size="14" />
              </button>
            </div>
          </div>
          <p>{{ shot.prompt }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
