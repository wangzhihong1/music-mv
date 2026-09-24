<script setup>
defineProps({
  facts: {
    type: Array,
    default: () => [],
  },
  tracks: {
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
    <div class="style-player">
      <div v-if="tracks.length" class="production-audio-list">
        <article v-for="track in tracks" :key="track.path || track.name" class="audio-card">
          <div class="media-meta">
            <strong>{{ track.name }}</strong>
            <small>{{ track.sizeLabel }}</small>
          </div>
          <audio :src="track.url" controls preload="metadata"></audio>
        </article>
      </div>
      <p v-else class="stage-empty">尚未放入原曲。把音频放到歌曲目录的 music/ 后即可播放。</p>
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
