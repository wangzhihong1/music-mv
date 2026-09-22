<script setup>
import { computed } from 'vue'
import { derivePipeline } from '@/lib/pipeline.js'

const props = defineProps({
  song: {
    type: Object,
    required: true,
  },
  selectedStage: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['select-stage'])

const STATUS_LABEL = {
  complete: '已完成',
  in_progress: '进行中',
  paused: '暂停',
  skipped: '跳过',
  not_started: '未开始',
}

const pipeline = computed(() => derivePipeline(props.song))
const selectedId = computed(() => props.selectedStage || pipeline.value.currentStage)
</script>

<template>
  <section class="pipeline-board" aria-label="创作与制作流程">
    <button
      v-for="stage in pipeline.stages"
      :key="stage.id"
      class="pipeline-step is-selectable"
      :class="[
        `is-${stage.status.replace('_', '-')}`,
        { 'is-selected': stage.id === selectedId },
      ]"
      type="button"
      :aria-pressed="stage.id === selectedId"
      @click="emit('select-stage', stage.id)"
    >
      <span>{{ stage.kicker }}</span>
      <strong>{{ stage.label }}</strong>
      <small>{{ STATUS_LABEL[stage.status] }}</small>
    </button>
  </section>
</template>
