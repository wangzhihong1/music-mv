<script setup>
defineProps({
  song: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="panel stage-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">01 · Brief</span>
        <h2>企划</h2>
      </div>
    </div>
    <div class="stage-body">
      <p v-if="song.coreStatement" class="brief-statement">{{ song.coreStatement }}</p>
      <p v-else class="stage-empty">尚未填写企划核心陈述。</p>
    </div>
  </section>
</template>
