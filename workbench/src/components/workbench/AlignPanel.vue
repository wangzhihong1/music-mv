<script setup>
import { ClipboardCheck, Copy } from '@lucide/vue'
import CopyFeedback from '@/components/common/CopyFeedback.vue'
import { shotDuration } from '@/lib/time.js'
import { sectionForShot } from '@/utils/song-content.js'

const SUBJECT_LABELS = {
  femaleLead: '女主',
  maleLead: '男主',
}

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
  copiedTarget: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['select-shot', 'copy-prompt'])

function relatedSection(shot) {
  return sectionForShot(props.sections, shot)
}

function subjectLabel(subject) {
  return SUBJECT_LABELS[subject] || subject
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
      <article
        v-for="shot in shots"
        :key="shot.id"
        class="align-shot"
        :class="{ 'is-active': activeShotId === shot.id }"
      >
        <button
          class="align-row"
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
        <div v-if="shot.prompt" class="script-prompt align-prompt">
          <div class="script-prompt-head">
            <span>{{ shot.genMode === 'composite' ? '剪辑说明（不要粘贴到 H3）' : 'H3 reference contract' }}</span>
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
          <div v-if="shot.subjects?.length || shot.output" class="script-generation-meta">
            <span v-if="shot.subjects?.length">参考角色：{{ shot.subjects.map(subjectLabel).join('、') }}</span>
            <span v-if="shot.genMode">{{ shot.genMode === 'composite' ? '剪辑合成' : 'H3 角色参考视频' }}</span>
            <span v-if="shot.output">输出：{{ shot.output }}</span>
          </div>
          <p>{{ shot.prompt }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
