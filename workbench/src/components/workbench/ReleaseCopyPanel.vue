<script setup>
import { computed } from 'vue'
import { ClipboardCheck, Copy } from '@lucide/vue'
import CopyFeedback from '@/components/common/CopyFeedback.vue'
import IconButton from '@/components/common/IconButton.vue'

const props = defineProps({
  releaseCopy: {
    type: Object,
    default: () => ({}),
  },
  copiedTarget: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['copy'])

const platforms = computed(() => ([
  { id: 'youtube', label: 'YouTube' },
  { id: 'douyin', label: '抖音' },
].filter((platform) => {
  const item = props.releaseCopy?.[platform.id] || {}
  return Boolean(item.title || item.description)
})))

const hasCopy = computed(() => platforms.value.length > 0)

function fieldCopied(platformId, field) {
  return props.copiedTarget === `release-${platformId}-${field}`
}
</script>

<template>
  <section class="panel release-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">Release Copy</span>
        <h2>发布文案</h2>
      </div>
    </div>

    <p v-if="!hasCopy" class="stage-empty">尚未填写 YouTube 与抖音的标题和描述。</p>

    <div v-else class="release-grid">
      <article v-for="platform in platforms" :key="platform.id" class="release-card">
        <div class="prompt-label-row">
          <span>{{ platform.label }}</span>
          <div class="release-copy-actions">
            <CopyFeedback :visible="fieldCopied(platform.id, 'all')" />
            <IconButton
              :label="`复制${platform.label}标题和描述`"
              @click="emit('copy', `${platform.id}-all`)"
            >
              <ClipboardCheck v-if="fieldCopied(platform.id, 'all')" :size="15" />
              <Copy v-else :size="15" />
            </IconButton>
          </div>
        </div>

        <div class="release-field">
          <div class="prompt-label-row">
            <span>标题</span>
            <button
              class="inline-copy"
              type="button"
              :aria-label="`复制${platform.label}标题`"
              :data-tooltip="`复制标题`"
              @click="emit('copy', `${platform.id}-title`)"
            >
              <ClipboardCheck v-if="fieldCopied(platform.id, 'title')" :size="14" />
              <Copy v-else :size="14" />
            </button>
          </div>
          <p>{{ releaseCopy[platform.id].title }}</p>
        </div>

        <div class="release-field">
          <div class="prompt-label-row">
            <span>描述</span>
            <button
              class="inline-copy"
              type="button"
              :aria-label="`复制${platform.label}描述`"
              :data-tooltip="`复制描述`"
              @click="emit('copy', `${platform.id}-description`)"
            >
              <ClipboardCheck v-if="fieldCopied(platform.id, 'description')" :size="14" />
              <Copy v-else :size="14" />
            </button>
          </div>
          <p class="release-description">{{ releaseCopy[platform.id].description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
