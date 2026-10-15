<script setup>
import { computed } from 'vue'
import { Image as ImageIcon } from '@lucide/vue'

const props = defineProps({
  characters: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['preview'])

const references = computed(() => props.characters.map((character) => {
  const path = character.look?.threeView
    || character.look?.references?.find((reference) => reference.id === 'three-view')?.path
    || ''
  const work = character.linkedWork || {}
  return {
    id: character.id,
    name: character.name,
    role: work.roleLabel || work.role || '出镜人物',
    path,
    url: path ? `/studio-media/characters/${character.folder}/${path}` : '',
  }
}))

function preview(reference) {
  if (!reference.url) return
  emit('preview', {
    name: `${reference.name}三视图`,
    title: reference.name,
    sizeLabel: `${reference.role} · 来自人物档案`,
    url: reference.url,
  })
}
</script>

<template>
  <div v-if="references.length" class="character-reference-grid">
    <button
      v-for="reference in references"
      :key="reference.id"
      class="character-reference-card"
      :class="{ 'is-missing': !reference.url }"
      type="button"
      :disabled="!reference.url"
      :aria-label="reference.url ? `查看${reference.name}三视图` : `${reference.name}尚未设置三视图`"
      @click="preview(reference)"
    >
      <img v-if="reference.url" :src="reference.url" :alt="`${reference.name}三视图`">
      <span v-else class="character-reference-placeholder">
        <ImageIcon :size="24" />
        尚未设置三视图
      </span>
      <span class="media-meta">
        <strong>{{ reference.name }}</strong>
        <small>{{ reference.role }} · 人物档案</small>
      </span>
    </button>
  </div>
  <p v-else class="character-reference-empty">尚未从人物档案关联出镜人物。</p>
</template>
