<script setup>
defineProps({
  entries: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="panel lyric-bank-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">Lyric Bank</span>
        <h2>词库</h2>
      </div>
      <span class="panel-count">{{ entries.length }} 首</span>
    </div>
    <div class="archive-body">
      <p>按歌名排列的参考歌。只收歌名、演唱者、风格和唱法，用来对照写法，不替代正在写的歌词。</p>
      <ul v-if="entries.length" class="lyric-bank-list">
        <li v-for="entry in entries" :key="entry.id || entry.title">
          <div class="lyric-bank-title">
            <strong>{{ entry.title }}</strong>
            <span>{{ entry.artist }}</span>
          </div>
          <dl>
            <div>
              <dt>风格</dt>
              <dd>{{ entry.style || '—' }}</dd>
            </div>
            <div>
              <dt>唱法</dt>
              <dd>{{ entry.vocal || '—' }}</dd>
            </div>
            <div v-if="entry.album">
              <dt>专辑</dt>
              <dd>{{ entry.album }}<template v-if="entry.year"> · {{ entry.year }}</template></dd>
            </div>
            <div v-if="entry.lyricist || entry.composer">
              <dt>词曲</dt>
              <dd>
                <template v-if="entry.lyricist">词 {{ entry.lyricist }}</template>
                <template v-if="entry.lyricist && entry.composer"> · </template>
                <template v-if="entry.composer">曲 {{ entry.composer }}</template>
              </dd>
            </div>
          </dl>
          <p v-if="entry.note" class="lyric-bank-note">{{ entry.note }}</p>
        </li>
      </ul>
      <p v-else class="archive-empty">词库还没有参考歌。</p>
    </div>
  </section>
</template>
