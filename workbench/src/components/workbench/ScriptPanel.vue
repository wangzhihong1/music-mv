<script setup>
import { Film } from '@lucide/vue'
import ShotPromptBlock from '@/components/workbench/ShotPromptBlock.vue'
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
  outline: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['select-shot', 'copy-prompt'])

function copyPrompt(shot, language) {
  emit('copy-prompt', shot, language)
}

function shotAnchor(shot) {
  return `script-shot-${shot.id}`
}

let scrollFrame = 0

function scrollToShot(shot) {
  emit('select-shot', shot)
  const node = document.getElementById(shotAnchor(shot))
  const scroller = node?.closest('.main-stage')
  if (!node || !scroller) return
  const top = node.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - 12
  const start = scroller.scrollTop
  const distance = top - start
  cancelAnimationFrame(scrollFrame)
  if (Math.abs(distance) < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    scroller.scrollTop = top
    return
  }
  const duration = 180
  const started = performance.now()
  const step = (now) => {
    const progress = Math.min(1, (now - started) / duration)
    const eased = 1 - (1 - progress) ** 3
    scroller.scrollTop = start + distance * eased
    if (progress < 1) scrollFrame = requestAnimationFrame(step)
  }
  scrollFrame = requestAnimationFrame(step)
}
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
    <div v-else class="script-body" :class="{ 'has-outline': outline }">
    <div class="script-table" aria-label="MV脚本列表">
      <article
        v-for="shot in shots"
        :id="shotAnchor(shot)"
        :key="shot.id"
        class="script-shot"
        :class="{ 'is-active': activeShotId === shot.id }"
      >
        <button
          class="script-row"
          type="button"
          @click="emit('select-shot', shot)"
        >
          <div class="script-shot-head">
            <time>{{ shot.start }}–{{ shot.end }}<small>{{ shotDuration(shot) }} 秒</small></time>
            <strong>{{ shot.shot }}</strong>
          </div>
          <dl class="script-fields">
            <div v-if="shot.action">
              <dt>视频动作</dt>
              <dd>{{ shot.action }}</dd>
            </div>
            <div v-if="shot.visual">
              <dt>画面</dt>
              <dd>{{ shot.visual }}</dd>
            </div>
            <div v-if="shot.camera">
              <dt>运镜</dt>
              <dd>{{ shot.camera }}</dd>
            </div>
          </dl>
        </button>
        <ShotPromptBlock
          :shot="shot"
          :copied-target="copiedTarget"
          @copy-prompt="copyPrompt"
        />
      </article>
    </div>
    <nav v-if="outline" class="script-toc" aria-label="分镜目录">
      <span>目录</span>
      <button
        v-for="shot in shots"
        :key="shot.id"
        type="button"
        :class="{ 'is-active': activeShotId === shot.id }"
        @click="scrollToShot(shot)"
      >
        <time>{{ shot.start }}</time>
        <span>{{ shot.shot }}</span>
      </button>
    </nav>
    </div>
  </section>
</template>
