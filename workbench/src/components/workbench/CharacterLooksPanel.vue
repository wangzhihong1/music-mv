<script setup>
import { ClipboardCheck, Copy } from '@lucide/vue'
import CopyFeedback from '@/components/common/CopyFeedback.vue'
import IconButton from '@/components/common/IconButton.vue'

defineProps({
  looks: {
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

function promptText(look, language) {
  return look[language] || ''
}

function negativeText(look, language) {
  return language === 'en' ? look.negativeEn || '' : look.negativeZh || ''
}
</script>

<template>
  <section class="character-looks">
    <div class="panel-header prompt-header">
      <div>
        <span class="panel-kicker">Character Looks</span>
        <h2>主角形象提示词</h2>
      </div>
      <div class="prompt-controls">
        <div class="language-toggle" aria-label="形象提示词语言">
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
        <CopyFeedback :visible="copiedTarget === 'look-all'" />
        <IconButton label="复制全部形象提示词" @click="emit('copy', 'all')">
          <Copy :size="17" />
        </IconButton>
      </div>
    </div>

    <p class="look-hint">
      英文可直接粘贴到 ComfyUI <code>01_人物三视图</code> 左上角 Shared Character Prompt。不要写正面、侧面或背面，工作流会自动拼接三视图。
    </p>

    <p v-if="looks.length === 0" class="stage-empty">尚未填写男/女主角形象提示词。</p>
    <div v-else class="look-grid">
      <article v-for="look in looks" :key="look.id" class="look-card">
        <div class="prompt-label-row">
          <span>{{ look.label }}</span>
          <button
            class="inline-copy"
            type="button"
            :aria-label="`复制${look.label}`"
            :data-tooltip="`复制${look.label}`"
            @click="emit('copy', look.id)"
          >
            <ClipboardCheck v-if="copiedTarget === `look-${look.id}`" :size="14" />
            <Copy v-else :size="14" />
          </button>
        </div>
        <p>{{ promptText(look, language) }}</p>
        <div v-if="negativeText(look, language)" class="look-negative">
          <div class="prompt-label-row">
            <span>负向提示词</span>
            <button
              class="inline-copy"
              type="button"
              :aria-label="`复制${look.label}负向提示词`"
              :data-tooltip="`复制负向提示词`"
              @click="emit('copy', `${look.id}-negative`)"
            >
              <ClipboardCheck v-if="copiedTarget === `look-${look.id}-negative`" :size="14" />
              <Copy v-else :size="14" />
            </button>
          </div>
          <p>{{ negativeText(look, language) }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
