<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { Check, Copy } from '@lucide/vue'
import { useClipboard } from '@/composables/useClipboard.js'
import { useWorkspace } from '@/composables/useWorkspace.js'

const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

const { songs } = useWorkspace()
const { copiedTarget, copyText } = useClipboard()

const profile = computed(() => props.character.profile || {})
const personality = computed(() => props.character.personality || {})
const look = computed(() => props.character.look || {})
const voice = computed(() => props.character.voice || {})
const signatures = computed(() => props.character.signatures || {})
const works = computed(() => props.character.works || [])
const relations = computed(() => props.character.relations || [])
const avoid = computed(() => props.character.avoid || [])

function occupationText() {
  if (profile.value.occupationLabel) return profile.value.occupationLabel
  return (profile.value.occupation || []).join(' / ')
}

function genderText(value) {
  if (value === 'female') return '女'
  if (value === 'male') return '男'
  return value
}

function songTitle(songId) {
  const song = songs.value.find((item) => item.id === songId)
  return song?.title || songId
}

function onKeydown(event) {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="confirm-backdrop" role="presentation" @click.self="emit('close')">
    <section class="profile-dialog" role="dialog" aria-modal="true" aria-labelledby="character-profile-title">
      <header class="profile-dialog-header">
        <h2 id="character-profile-title">{{ character.name }}的资料</h2>
        <button class="text-button" type="button" @click="emit('close')">关闭</button>
      </header>

      <div class="detail-sections">
        <section v-if="character.bio" class="detail-section">
          <h3>简介</h3>
          <p class="profile-bio">{{ character.bio }}</p>
        </section>

        <section class="detail-section">
          <h3>基本信息</h3>
          <dl class="info-list">
            <div v-if="profile.age"><dt>年龄</dt><dd>{{ profile.age }} 岁</dd></div>
            <div v-if="profile.gender"><dt>性别</dt><dd>{{ genderText(profile.gender) }}</dd></div>
            <div v-if="occupationText()"><dt>职业</dt><dd>{{ occupationText() }}</dd></div>
            <div v-if="profile.region"><dt>所在地</dt><dd>{{ profile.region }}</dd></div>
            <div v-if="profile.nationality"><dt>国籍</dt><dd>{{ profile.nationality }}</dd></div>
            <div v-if="profile.language?.length"><dt>语言</dt><dd>{{ profile.language.join('、') }}</dd></div>
            <div v-if="profile.height"><dt>身高</dt><dd>{{ profile.height }}</dd></div>
            <div v-if="profile.birthday"><dt>生日</dt><dd>{{ profile.birthday }}</dd></div>
            <div v-if="profile.zodiac"><dt>星座</dt><dd>{{ profile.zodiac }}</dd></div>
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
              <button class="copy-button" type="button" @click="copyText(look.zh || '', 'look-zh')">
                <component :is="copiedTarget === 'look-zh' ? Check : Copy" :size="14" />
                中文
              </button>
              <button class="copy-button" type="button" @click="copyText(look.en || '', 'look-en')">
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
        </section>

        <section class="detail-section">
          <div class="section-header">
            <h3>声音身份</h3>
            <button v-if="voice.murekaPrompt" class="copy-button" type="button" @click="copyText(voice.murekaPrompt, 'voice-mureka')">
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
    </section>
  </div>
</template>

<style scoped>
.profile-dialog {
  width: min(920px, 100%);
  max-height: min(84vh, 900px);
  overflow: auto;
  padding: 22px;
  border: 1px solid #dfe4dd;
  border-radius: 12px;
  background: #f7f8f6;
  box-shadow: 0 18px 50px rgba(20, 28, 23, 0.24);
}

.profile-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.profile-dialog-header h2 {
  margin: 0;
  color: #20251f;
  font-size: 18px;
}

.detail-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
}

.detail-section {
  padding: 16px 18px;
  border: 1px solid #e5e8e2;
  border-radius: 10px;
  background: #fff;
}

.detail-section h3 {
  margin: 0 0 14px;
  font-size: 15px;
  font-weight: 600;
}

.profile-bio {
  margin: 0;
  color: #515851;
  font-size: 14px;
  line-height: 1.7;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 14px;
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
</style>
