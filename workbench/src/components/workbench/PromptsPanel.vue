<script setup>
import { ClipboardCheck, Copy } from '@lucide/vue'
import CopyFeedback from '@/components/common/CopyFeedback.vue'
import IconButton from '@/components/common/IconButton.vue'

defineProps({
  prompts: {
    type: Array,
    default: () => [],
  },
  language: {
    type: String,
    default: 'zh',
  },
  copiedTarget: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:language', 'copy'])
</script>

<template>
  <section class="panel prompt-panel">
    <div class="panel-header prompt-header">
      <div>
        <span class="panel-kicker">04 · Style Prompt</span>
        <h2>风格提示词</h2>
      </div>
      <div class="prompt-controls">
        <div class="language-toggle" aria-label="提示词语言">
          <button
            type="button"
            :aria-pressed="language === 'zh'"
            @click="emit('update:language', 'zh')"
          >中文</button>
          <button
            type="button"
            :aria-pressed="language === 'en'"
            @click="emit('update:language', 'en')"
          >EN</button>
        </div>
        <CopyFeedback :visible="copiedTarget === 'prompt-all'" />
        <IconButton label="复制完整提示词" @click="emit('copy', 'all')">
          <Copy :size="17" />
        </IconButton>
      </div>
    </div>

    <div class="prompt-grid">
      <article v-for="prompt in prompts" :key="prompt.key" class="prompt-item">
        <div class="prompt-label-row">
          <span>{{ prompt.label }}</span>
          <button
            class="inline-copy"
            type="button"
            :aria-label="`复制${prompt.label}`"
            :data-tooltip="`复制${prompt.label}`"
            @click="emit('copy', prompt.key)"
          >
            <ClipboardCheck v-if="copiedTarget === `prompt-${prompt.key}`" :size="14" />
            <Copy v-else :size="14" />
          </button>
        </div>
        <p>{{ prompt[language] }}</p>
      </article>
    </div>
  </section>
</template>
