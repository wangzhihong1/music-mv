<script setup>
import { computed } from 'vue'
import { derivePipeline } from '@/lib/pipeline.js'

const props = defineProps({
  song: {
    type: Object,
    required: true,
  },
})

const STATUS_LABEL = {
  complete: '已完成',
  in_progress: '进行中',
  paused: '暂停',
  skipped: '跳过',
  not_started: '未开始',
}

const pipeline = computed(() => derivePipeline(props.song))
</script>

<template>
  <section class="pipeline-board" aria-label="创作与制作流程">
    <article
      v-for="stage in pipeline.stages"
      :key="stage.id"
      class="pipeline-step"
      :class="[
        `is-${stage.status.replace('_', '-')}`,
        { 'is-current': stage.id === pipeline.currentStage },
      ]"
    >
      <span>{{ stage.kicker }}</span>
      <strong>{{ stage.label }}</strong>
      <small>{{ STATUS_LABEL[stage.status] }}</small>
    </article>
  </section>
</template>
