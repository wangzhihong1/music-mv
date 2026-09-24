<script setup>
import { ClipboardCheck, Copy } from '@lucide/vue'
import CopyFeedback from '@/components/common/CopyFeedback.vue'

const SUBJECT_LABELS = {
  femaleLead: '女主',
  maleLead: '男主',
  childLead: '儿童角色',
}

defineProps({
  shot: {
    type: Object,
    required: true,
  },
  copiedTarget: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['copy-prompt'])

function subjectLabel(subject) {
  return SUBJECT_LABELS[subject] || subject
}

function copyTarget(shot, language) {
  return `shot-${shot.id}-${language}`
}
</script>

<template>
  <div v-if="shot.prompt || shot.promptZh" class="script-prompt">
    <div v-if="shot.subjects?.length || shot.genMode || shot.output" class="script-generation-meta">
      <span v-if="shot.subjects?.length">参考角色：{{ shot.subjects.map(subjectLabel).join('、') }}</span>
      <span v-if="shot.genMode">{{ shot.genMode === 'composite' ? '剪辑合成' : 'H3 角色参考视频' }}</span>
      <span v-if="shot.output">输出：{{ shot.output }}</span>
    </div>

    <section v-if="shot.promptZh" class="script-prompt-language">
      <div class="script-prompt-head">
        <span>{{ shot.genMode === 'composite' ? '中文剪辑说明' : '中文提示词（供审阅）' }}</span>
        <div class="script-prompt-copy">
          <CopyFeedback :visible="copiedTarget === copyTarget(shot, 'zh')" />
          <button
            class="inline-copy"
            type="button"
            :aria-label="`复制${shot.shot}中文提示词`"
            data-tooltip="复制中文提示词"
            @click="emit('copy-prompt', shot, 'zh')"
          >
            <ClipboardCheck v-if="copiedTarget === copyTarget(shot, 'zh')" :size="14" />
            <Copy v-else :size="14" />
          </button>
        </div>
      </div>
      <p>{{ shot.promptZh }}</p>
    </section>

    <section v-if="shot.prompt" class="script-prompt-language script-prompt-language-zh">
      <div class="script-prompt-head">
        <span>{{ shot.genMode === 'composite' ? '英文剪辑说明' : 'H3 英文提示词（粘贴到 H3）' }}</span>
        <div class="script-prompt-copy">
          <CopyFeedback :visible="copiedTarget === copyTarget(shot, 'en')" />
          <button
            class="inline-copy"
            type="button"
            :aria-label="`复制${shot.shot}英文提示词`"
            data-tooltip="复制英文提示词"
            @click="emit('copy-prompt', shot, 'en')"
          >
            <ClipboardCheck v-if="copiedTarget === copyTarget(shot, 'en')" :size="14" />
            <Copy v-else :size="14" />
          </button>
        </div>
      </div>
      <p>{{ shot.prompt }}</p>
    </section>
  </div>
</template>
