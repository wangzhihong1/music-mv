<script setup>
defineProps({
  facts: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section v-if="facts.length" class="song-facts" aria-label="歌曲参数">
    <span v-for="([label, value]) in facts" :key="label"><b>{{ label }}</b>{{ value }}</span>
  </section>
</template>
