<script setup>
import { computed, ref, watch } from 'vue'
import { FileText } from '@lucide/vue'
import MarkdownIt from 'markdown-it'
import { ARCHIVE_COPY } from '@/constants/navigation.js'

const props = defineProps({
  navId: {
    type: String,
    required: true,
  },
  files: {
    type: Array,
    default: () => [],
  },
})

const selectedPath = ref('')
const markdown = new MarkdownIt({
  html: false,
  linkify: true,
})
const defaultLinkOpen = markdown.renderer.rules.link_open
  || ((tokens, index, options, env, renderer) => renderer.renderToken(tokens, index, options))

markdown.renderer.rules.link_open = (tokens, index, options, env, renderer) => {
  tokens[index].attrSet('target', '_blank')
  tokens[index].attrSet('rel', 'noopener noreferrer')
  return defaultLinkOpen(tokens, index, options, env, renderer)
}

const selectedFile = computed(() =>
  props.files.find((file) => file.path === selectedPath.value) || props.files[0] || null,
)
const renderedMarkdown = computed(() => markdown.render(selectedFile.value?.content || ''))

watch(
  () => props.files,
  (files) => {
    if (!files.some((file) => file.path === selectedPath.value)) {
      selectedPath.value = files[0]?.path || ''
    }
  },
  { immediate: true },
)

function documentTitle(file) {
  return file.content?.match(/^#\s+(.+)$/m)?.[1]?.trim() || file.name.replace(/\.md$/i, '')
}
</script>

<template>
  <section class="panel archive-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">{{ ARCHIVE_COPY[navId].kicker }}</span>
        <h2>{{ ARCHIVE_COPY[navId].title }}</h2>
      </div>
      <span class="panel-count">{{ files.length }} 份文档</span>
    </div>
    <div class="archive-body">
      <p class="archive-description">{{ ARCHIVE_COPY[navId].description }}</p>
      <div v-if="files.length" class="archive-workspace">
        <nav class="archive-document-list" aria-label="公共素材文档">
          <button
            v-for="file in files"
            :key="file.path"
            class="archive-document-button"
            :class="{ 'is-active': file.path === selectedFile?.path }"
            type="button"
            @click="selectedPath = file.path"
          >
            <FileText :size="16" />
            <span>
              <strong>{{ documentTitle(file) }}</strong>
              <small>{{ file.name }}</small>
            </span>
          </button>
        </nav>
        <article class="archive-preview">
          <div class="archive-preview-meta">{{ selectedFile.path }}</div>
          <!-- MarkdownIt runs with raw HTML disabled and rejects unsafe link protocols. -->
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="markdown-preview" v-html="renderedMarkdown"></div>
        </article>
      </div>
      <p v-else class="archive-empty">此目录还没有 Markdown 文档。</p>
    </div>
  </section>
</template>
