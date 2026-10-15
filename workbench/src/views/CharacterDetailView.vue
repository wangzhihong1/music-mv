<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Copy, Check } from '@lucide/vue'
import { useWorkspace } from '@/composables/useWorkspace.js'
import { useClipboard } from '@/composables/useClipboard.js'

const props = defineProps({
  characterId: {
    type: String,
    required: true,
  },
})

const router = useRouter()
const { characters, songs, selectNav } = useWorkspace()
const { copiedTarget, copyText } = useClipboard()

// 人物详情路由激活时，同步侧边栏高亮
selectNav('characters')

const character = computed(() =>
  characters.value.find((item) => item.id === props.characterId) || null,
)

const profile = computed(() => character.value?.profile || {})
const personality = computed(() => character.value?.personality || {})
const look = computed(() => character.value?.look || {})
const voice = computed(() => character.value?.voice || {})
const signatures = computed(() => character.value?.signatures || {})
const works = computed(() => character.value?.works || [])
const relations = computed(() => character.value?.relations || [])
const avoid = computed(() => character.value?.avoid || [])

function mediaUrl(relativePath) {
  if (!relativePath || !character.value) return ''
  return `/studio-media/characters/${character.value.folder}/${relativePath}`
}

function occupationText() {
  if (profile.value.occupationLabel) return profile.value.occupationLabel
  return (profile.value.occupation || []).join(' / ')
}

function songTitle(songId) {
  const song = songs.value.find((item) => item.id === songId)
  return song?.title || songId
}

function copyField(text, target) {
  copyText(text || '', target)
}
</script>

<template>
  <div v-if="character" class="character-detail">
    <button class="back-button" type="button" @click="router.push('/characters')">
      <ArrowLeft :size="16" />
      返回人物列表
    </button>

    <header class="detail-hero">
      <div class="hero-cover">
        <img
          v-if="character.cover || look.cover"
          :src="mediaUrl(character.cover || look.cover)"
          :alt="character.name"
        />
      </div>
      <div class="hero-info">
        <h1>{{ character.name }}</h1>
        <p class="hero-occupation">{{ occupationText() }}</p>
        <p v-if="character.bio" class="hero-bio">{{ character.bio }}</p>
      </div>
    </header>

    <div class="detail-sections">
      <section class="detail-section">
        <h3>基本信息</h3>
        <dl class="info-list">
          <div v-if="profile.age"><dt>年龄</dt><dd>{{ profile.age }} 岁</dd></div>
          <div v-if="profile.gender"><dt>性别</dt><dd>{{ profile.gender === 'female' ? '女' : profile.gender === 'male' ? '男' : profile.gender }}</dd></div>
          <div v-if="occupationText()"><dt>职业</dt><dd>{{ occupationText() }}</dd></div>
          <div v-if="profile.region"><dt>所在地</dt><dd>{{ profile.region }}</dd></div>
          <div v-if="profile.nationality"><dt>国籍</dt><dd>{{ profile.nationality }}</dd></div>
          <div v-if="profile.language?.length"><dt>语言</dt><dd>{{ profile.language.join('、') }}</dd></div>
          <div v-if="profile.height"><dt>身高</dt><dd>{{ profile.height }}</dd></div>
          <div v-if="profile.bloodType"><dt>血型</dt><dd>{{ profile.bloodType }}</dd></div>
        </dl>
      </section>

      <section class="detail-section">
        <h3>性格</h3>
        <dl class="info-list">
          <div v-if="personality.core"><dt>核心性格</dt><dd>{{ personality.core }}</dd></div>
          <div v-if="personality.mbti"><dt>MBTI</dt><dd>{{ personality.mbti }}</dd></div>
          <div v-if="personality.values"><dt>价值观</dt><dd>{{ personality.values }}</dd></div>
          <div v-if="personality.catchphrases?.length"><dt>口头禅</dt><dd>{{ personality.catchphrases.join('、') }}</dd></div>
          <div v-if="personality.habits?.length"><dt>习惯动作</dt><dd>{{ personality.habits.join('、') }}</dd></div>
          <div v-if="personality.strengths?.length"><dt>优点</dt><dd>{{ personality.strengths.join('、') }}</dd></div>
          <div v-if="personality.weaknesses?.length"><dt>弱点</dt><dd>{{ personality.weaknesses.join('、') }}</dd></div>
        </dl>
      </section>

      <section class="detail-section">
        <div class="section-header">
          <h3>视觉定妆</h3>
          <div class="copy-actions">
            <button class="copy-button" type="button" @click="copyField(look.zh, 'look-zh')">
              <component :is="copiedTarget === 'look-zh' ? Check : Copy" :size="14" />
              中文
            </button>
            <button class="copy-button" type="button" @click="copyField(look.en, 'look-en')">
              <component :is="copiedTarget === 'look-en' ? Check : Copy" :size="14" />
              英文
            </button>
          </div>
        </div>
        <div v-if="look.zh" class="prompt-block">
          <p class="prompt-label">中文定妆词</p>
          <pre>{{ look.zh }}</pre>
        </div>
        <div v-if="look.en" class="prompt-block">
          <p class="prompt-label">英文定妆词</p>
          <pre>{{ look.en }}</pre>
        </div>
        <div v-if="look.negativeZh" class="prompt-block prompt-negative">
          <p class="prompt-label">负向提示词（中）</p>
          <pre>{{ look.negativeZh }}</pre>
        </div>
        <div v-if="look.negativeEn" class="prompt-block prompt-negative">
          <p class="prompt-label">负向提示词（英）</p>
          <pre>{{ look.negativeEn }}</pre>
        </div>
        <div v-if="look.threeView" class="reference-image">
          <p class="prompt-label">三视图</p>
          <img :src="mediaUrl(look.threeView)" alt="三视图" />
        </div>
      </section>

      <section class="detail-section">
        <div class="section-header">
          <h3>声音身份</h3>
          <button v-if="voice.murekaPrompt" class="copy-button" type="button" @click="copyField(voice.murekaPrompt, 'voice-mureka')">
            <component :is="copiedTarget === 'voice-mureka' ? Check : Copy" :size="14" />
            复制 Mureka 提示词
          </button>
        </div>
        <dl class="info-list">
          <div v-if="voice.timbre"><dt>音色</dt><dd>{{ voice.timbre }}</dd></div>
          <div v-if="voice.range"><dt>音域</dt><dd>{{ voice.range }}</dd></div>
          <div v-if="voice.style"><dt>演唱风格</dt><dd>{{ voice.style }}</dd></div>
          <div v-if="voice.signatureTraits?.length"><dt>标志性特征</dt><dd>{{ voice.signatureTraits.join('、') }}</dd></div>
        </dl>
        <div v-if="voice.murekaPrompt" class="prompt-block">
          <p class="prompt-label">Mureka 风格提示词</p>
          <pre>{{ voice.murekaPrompt }}</pre>
        </div>
      </section>

      <section v-if="Object.keys(signatures).length" class="detail-section">
        <h3>标志性意象</h3>
        <dl class="info-list">
          <div v-if="signatures.objects?.length"><dt>标志性物件</dt><dd>{{ signatures.objects.join('、') }}</dd></div>
          <div v-if="signatures.scenes?.length"><dt>标志性场景</dt><dd>{{ signatures.scenes.join('、') }}</dd></div>
          <div v-if="signatures.actions?.length"><dt>标志性动作</dt><dd>{{ signatures.actions.join('、') }}</dd></div>
          <div v-if="signatures.colors?.length"><dt>标志性配色</dt><dd>{{ signatures.colors.join('、') }}</dd></div>
          <div v-if="signatures.styleKeywords?.length"><dt>风格关键词</dt><dd>{{ signatures.styleKeywords.join('、') }}</dd></div>
        </dl>
      </section>

      <section v-if="works.length" class="detail-section">
        <h3>作品</h3>
        <ul class="work-list">
          <li v-for="work in works" :key="work.songId">
            <strong>{{ songTitle(work.songId) }}</strong>
            <span v-if="work.roleLabel" class="work-role">{{ work.roleLabel }}</span>
            <p v-if="work.note">{{ work.note }}</p>
          </li>
        </ul>
      </section>

      <section v-if="relations.length" class="detail-section">
        <h3>人物关系</h3>
        <ul class="relation-list">
          <li v-for="relation in relations" :key="relation.characterId">
            <strong>{{ relation.characterId }}</strong>
            <span class="relation-type">{{ relation.type }}</span>
            <p v-if="relation.note">{{ relation.note }}</p>
          </li>
        </ul>
      </section>

      <section v-if="avoid.length" class="detail-section">
        <h3>禁忌 / 避免项</h3>
        <ul class="avoid-list">
          <li v-for="item in avoid" :key="item">{{ item }}</li>
        </ul>
      </section>
    </div>
  </div>

  <div v-else class="character-not-found">
    <p>没有找到这个人物。</p>
    <button class="back-button" type="button" @click="router.push('/characters')">
      <ArrowLeft :size="16" />
      返回人物列表
    </button>
  </div>
</template>

<style scoped>
.character-detail {
  padding: 24px 40px 60px;
  overflow-y: auto;
  height: 100%;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  padding: 6px 12px;
  border: 1px solid #dce0d9;
  border-radius: 6px;
  background: #fff;
  color: #515851;
  font-size: 13px;
  cursor: pointer;
}

.back-button:hover {
  background: #f3f4f1;
}

.detail-hero {
  display: flex;
  gap: 28px;
  margin-bottom: 36px;
  padding-bottom: 28px;
  border-bottom: 1px solid #e5e8e2;
}

.hero-cover {
  width: 200px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  background: #e9ece6;
}

.hero-cover img {
  width: 100%;
  display: block;
}

.hero-info {
  flex: 1;
  min-width: 0;
}

.hero-info h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.hero-occupation {
  margin: 6px 0 0;
  color: #3e7b58;
  font-size: 14px;
  font-weight: 500;
}

.hero-bio {
  margin: 14px 0 0;
  color: #515851;
  font-size: 14px;
  line-height: 1.7;
}

.detail-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 28px;
}

.detail-section {
  padding: 20px 22px;
  border: 1px solid #e5e8e2;
  border-radius: 10px;
  background: #fff;
}

.detail-section h3 {
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 600;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.section-header h3 {
  margin: 0;
}

.copy-actions {
  display: flex;
  gap: 8px;
}

.copy-button {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border: 1px solid #dce0d9;
  border-radius: 5px;
  background: #fff;
  color: #515851;
  font-size: 12px;
  cursor: pointer;
}

.copy-button:hover {
  background: #f3f4f1;
}

.info-list {
  margin: 0;
  display: grid;
  gap: 10px;
}

.info-list > div {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
}

.info-list dt {
  color: #8a908a;
  font-size: 13px;
}

.info-list dd {
  margin: 0;
  color: #20241f;
  font-size: 13px;
  line-height: 1.5;
}

.prompt-block {
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 6px;
  background: #f3f4f1;
}

.prompt-block.prompt-negative {
  background: #faf0f0;
}

.prompt-label {
  margin: 0 0 6px;
  color: #8a908a;
  font-size: 11px;
}

.prompt-block pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.6;
  color: #20241f;
}

.reference-image {
  margin-top: 14px;
}

.reference-image img {
  width: 100%;
  border-radius: 6px;
  display: block;
}

.work-list,
.relation-list,
.avoid-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.work-list li,
.relation-list li {
  padding: 10px 12px;
  border-radius: 6px;
  background: #f3f4f1;
}

.work-list strong,
.relation-list strong {
  font-size: 13px;
}

.work-role,
.relation-type {
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 4px;
  background: #e9ece6;
  color: #515851;
  font-size: 11px;
}

.work-list p,
.relation-list p {
  margin: 6px 0 0;
  color: #70776f;
  font-size: 12px;
  line-height: 1.5;
}

.avoid-list li {
  padding: 6px 10px;
  border-left: 3px solid #d98b8b;
  background: #faf5f5;
  color: #8a5a5a;
  font-size: 13px;
}

.character-not-found {
  padding: 60px 40px;
  text-align: center;
  color: #8a908a;
}
</style>
