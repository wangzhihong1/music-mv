<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { Copy } from '@lucide/vue'
import CopyFeedback from '@/components/common/CopyFeedback.vue'
import IconButton from '@/components/common/IconButton.vue'

const props = defineProps({
  sections: {
    type: Array,
    default: () => [],
  },
  activeSection: {
    type: String,
    default: '',
  },
  copied: {
    type: Boolean,
    default: false,
  },
  editing: {
    type: Boolean,
    default: false,
  },
  saving: {
    type: Boolean,
    default: false,
  },
  saveError: {
    type: String,
    default: '',
  },
  drafts: {
    type: Object,
    default: () => ({}),
  },
  dirty: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'copy',
  'select-section',
  'start-edit',
  'cancel-edit',
  'save-edit',
  'update-draft',
])

function editorRows(text) {
  return Math.min(24, Math.max(4, String(text ?? '').split('\n').length + 1))
}

function onKeydown(event) {
  if (!props.editing || props.saving) return
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 's') {
    event.preventDefault()
    if (props.dirty) emit('save-edit')
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <section class="panel lyrics-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">03 · Lyrics</span>
        <h2>歌词</h2>
      </div>
      <div class="panel-actions">
        <span v-if="editing && dirty" class="lyrics-dirty">未保存</span>
        <CopyFeedback v-if="!editing" :visible="copied" />
        <IconButton v-if="!editing" label="复制完整歌词" @click="emit('copy')">
          <Copy :size="17" />
        </IconButton>
        <button
          v-if="editable && !editing"
          class="text-button"
          type="button"
          @click="emit('start-edit')"
        >编辑</button>
        <template v-else-if="editing">
          <button
            class="text-button"
            type="button"
            :disabled="saving"
            @click="emit('cancel-edit')"
          >取消</button>
          <button
            class="text-button is-primary"
            type="button"
            :disabled="saving || !dirty"
            @click="emit('save-edit')"
          >{{ saving ? '保存中' : '保存' }}</button>
        </template>
      </div>
    </div>

    <p v-if="saveError" class="lyrics-save-error" role="alert">{{ saveError }}</p>

    <div class="lyrics-content">
      <p v-if="sections.length === 0" class="stage-empty">尚未填写歌词。</p>
      <template v-else-if="!editing">
        <button
          v-for="section in sections"
          :key="section.id"
          class="lyric-section"
          :class="{ 'is-active': activeSection === section.id }"
          type="button"
          :aria-pressed="activeSection === section.id"
          @click="emit('select-section', section.id)"
        >
          <span class="section-meta">
            <b>{{ section.label }}</b>
            <time>{{ section.time }}</time>
          </span>
          <span
            v-for="(line, lineIndex) in section.lyrics"
            :key="`${section.id}-${lineIndex}`"
            class="lyric-line"
          >{{ line }}</span>
        </button>
      </template>
      <template v-else>
        <article
          v-for="section in sections"
          :key="section.id"
          class="lyric-section is-editing"
          :class="{ 'is-active': activeSection === section.id }"
        >
          <span class="section-meta">
            <b>{{ section.label }}</b>
            <time>{{ section.time }}</time>
          </span>
          <textarea
            class="lyric-editor"
            :value="drafts[section.id] ?? ''"
            :rows="editorRows(drafts[section.id])"
            :disabled="saving"
            :aria-label="`${section.label} 歌词`"
            @input="emit('update-draft', section.id, $event.target.value)"
          ></textarea>
        </article>
      </template>
    </div>
  </section>
</template>
