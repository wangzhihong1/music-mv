<script setup>
import { ClipboardCheck } from '@lucide/vue'

defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <span v-if="visible" class="copy-feedback" role="status">
    <ClipboardCheck :size="14" />已复制
  </span>
</template>
