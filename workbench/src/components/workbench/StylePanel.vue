<script setup>
defineProps({
  facts: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="panel stage-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">02 · Style</span>
        <h2>风格</h2>
      </div>
    </div>
    <dl v-if="facts.length" class="style-list">
      <div v-for="([label, value]) in facts" :key="label" class="style-row">
        <dt>{{ label }}</dt>
        <dd>{{ value }}</dd>
      </div>
    </dl>
    <p v-else class="stage-empty">尚未填写风格与歌曲参数。</p>
  </section>
</template>
