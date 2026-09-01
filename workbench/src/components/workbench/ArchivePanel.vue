<script setup>
import { ARCHIVE_COPY } from '@/constants/navigation.js'

defineProps({
  navId: {
    type: String,
    required: true,
  },
  files: {
    type: Array,
    default: () => [],
  },
})
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
      <p>{{ ARCHIVE_COPY[navId].description }}</p>
      <ul v-if="files.length" class="archive-list">
        <li v-for="file in files" :key="file.path">
          <strong>{{ file.name }}</strong>
          <small>{{ file.path }}</small>
        </li>
      </ul>
      <p v-else class="archive-empty">此目录还没有 Markdown 文档。</p>
    </div>
  </section>
</template>
