<script setup>
import { computed, ref } from 'vue'
import { Film, Image as ImageIcon, Music2, Trash2, X } from '@lucide/vue'
import CharacterLooksPanel from '@/components/workbench/CharacterLooksPanel.vue'
import SceneReferenceAudit from '@/components/workbench/SceneReferenceAudit.vue'
import ReleaseCopyPanel from '@/components/workbench/ReleaseCopyPanel.vue'
import { PRODUCTION_FOCUS } from '@/constants/navigation.js'

const STAGE_COPY = {
  'visual-references': { kicker: 'Visual References', title: '人物与场景基准图' },
  'shot-videos': { kicker: 'H3 Shots', title: '分镜视频' },
  post: { kicker: 'Post', title: '修复超分' },
  delivery: { kicker: 'Delivery', title: '成片' },
}

const EMPTY_COPY = {
  'visual-references': '人物三视图放入 assets/characters/，确认的场景基准图放入 assets/scenes/。两类图片会共同显示在这里。',
  'shot-videos': '尚未生成分镜视频。确认主角参考图后，将 H3 输出放入 generated/video/raw/。',
  post: '尚未生成修复超分。合格分镜视频修复后放入 generated/video/intermediate/。',
  delivery: '尚未导出成片。剪辑完成后放入 generated/video/final/。',
}

const props = defineProps({
  song: {
    type: Object,
    required: true,
  },
  focusStage: {
    type: String,
    default: '',
  },
  promptLanguage: {
    type: String,
    default: 'zh',
  },
  copiedTarget: {
    type: String,
    default: '',
  },
  deleteSceneImage: {
    type: Function,
    default: null,
  },
  deleteVoidedShot: {
    type: Function,
    default: null,
  },
  setRawShotStatus: {
    type: Function,
    default: null,
  },
  deleteUpscaleVideo: {
    type: Function,
    default: null,
  },
  confirmSceneReference: {
    type: Function,
    default: null,
  },
})

const emit = defineEmits(['update:promptLanguage', 'copy-look', 'copy-release'])
const releaseCopy = computed(() => props.song.releaseCopy || {})
const showingRelease = computed(() => props.focusStage === 'delivery')

const selectedImage = ref(null)
const pendingDelete = ref(null)
const deleting = ref(false)
const deleteError = ref('')
const shotBusy = ref('')
const shotActionError = ref('')
const production = computed(() => props.song.production || {})
const groups = computed(() => production.value.groups || [])
const characterLooks = computed(() => props.song.characterLooks || [])
const sceneItems = computed(() => groups.value.find((group) => group.id === 'scenes')?.items || [])
const characterItems = computed(() => groups.value.find((group) => group.id === 'characters')?.items || [])
const showingLooks = computed(() => props.focusStage === 'visual-references')
const stageCopy = computed(() => STAGE_COPY[props.focusStage] || {
  kicker: 'Local Production',
  title: '本机成片',
})
const focusGroups = computed(() => PRODUCTION_FOCUS[props.focusStage] || [])
const visibleGroups = computed(() => {
  if (!focusGroups.value.length) return groups.value
  return groups.value.filter((group) => focusGroups.value.includes(group.id) && !(showingLooks.value && ['characters', 'scenes'].includes(group.id)))
})
const featured = computed(() => visibleGroups.value.find((group) => group.id === 'final'))
const restGroups = computed(() => visibleGroups.value.filter((group) => group.id !== 'final'))
const itemCount = computed(() =>
  visibleGroups.value.reduce((total, group) => total + (group.items?.length || 0), 0),
)
const fileCount = computed(() =>
  visibleGroups.value.reduce(
    (total, group) => total + (group.items || []).filter((item) => !item.missing).length,
    0,
  ),
)
const hasVisibleMedia = computed(() => itemCount.value > 0)

function isFocused(groupId) {
  return focusGroups.value.includes(groupId)
}

function itemLabel(item) {
  return item.title || item.name
}

function itemCaption(item) {
  if (item.missing) return item.sizeLabel
  if (item.title && item.title !== item.name) return `${item.name} · ${item.sizeLabel}`
  return item.sizeLabel
}

function openImage(item) {
  selectedImage.value = item
}

function closeImage() {
  selectedImage.value = null
}

function askDelete(item, kind = 'scene') {
  pendingDelete.value = { item, kind }
  deleteError.value = ''
}

function cancelDelete() {
  if (deleting.value) return
  pendingDelete.value = null
  deleteError.value = ''
}

function deleteKindLabel(kind) {
  if (kind === 'shot') return '作废分镜视频'
  if (kind === 'upscale') return '超分视频'
  return '场景图'
}

async function updateShotStatus(item, action) {
  if (!props.setRawShotStatus || shotBusy.value || deleting.value || item.missing) return
  shotBusy.value = item.name
  shotActionError.value = ''
  try {
    await props.setRawShotStatus(props.song.folder, item.name, action)
  } catch (error) {
    shotActionError.value = error.message
  } finally {
    shotBusy.value = ''
  }
}

async function confirmDelete() {
  if (!pendingDelete.value || deleting.value) return
  const remove = pendingDelete.value.kind === 'shot'
    ? props.deleteVoidedShot
    : pendingDelete.value.kind === 'upscale'
      ? props.deleteUpscaleVideo
      : props.deleteSceneImage
  if (!remove) return
  deleting.value = true
  deleteError.value = ''
  try {
    await remove(props.song.folder, pendingDelete.value.item.name)
    pendingDelete.value = null
    selectedImage.value = null
  } catch (error) {
    deleteError.value = error.message
  } finally {
    deleting.value = false
  }
}
</script>

<template>
  <section class="panel production-panel">
    <div class="panel-header">
      <div>
        <span class="panel-kicker">{{ stageCopy.kicker }}</span>
        <h2>{{ stageCopy.title }}</h2>
      </div>
      <span class="panel-count">
        {{ production.directory || '歌曲目录' }}
        · {{ fileCount }} 个文件
      </span>
    </div>

    <ReleaseCopyPanel
      v-if="showingRelease"
      :release-copy="releaseCopy"
      :copied-target="copiedTarget"
      @copy="emit('copy-release', $event)"
    />

    <section v-if="showingLooks" class="visual-reference-modules">
      <div class="visual-reference-module character-module">
        <div class="visual-reference-module-heading">
          <div>
            <span class="panel-kicker">Character References</span>
            <h3>人物主角图</h3>
          </div>
          <span>{{ characterItems.length }} 张</span>
        </div>
        <CharacterLooksPanel
          :looks="characterLooks"
          :language="promptLanguage"
          :copied-target="copiedTarget"
          @update:language="emit('update:promptLanguage', $event)"
          @copy="emit('copy-look', $event)"
        />
        <div v-if="characterItems.length" class="character-image-grid">
          <button
            v-for="item in characterItems"
            :key="item.path"
            class="media-card is-image"
            type="button"
            :aria-label="`查看 ${itemLabel(item)}`"
            @click="openImage(item)"
          >
            <img :src="item.url" :alt="itemLabel(item)">
            <span class="media-meta">
              <strong>{{ itemLabel(item) }}</strong>
              <small>{{ itemCaption(item) }}</small>
            </span>
          </button>
        </div>
      </div>

      <div class="visual-reference-module scene-module">
        <div class="visual-reference-module-heading scene-module-heading">
          <div>
            <span class="panel-kicker">Scene References</span>
            <h3>场景基准图</h3>
          </div>
          <span>{{ sceneItems.length }} 张候选图</span>
        </div>
        <SceneReferenceAudit
          :song="song"
          :scenes="sceneItems"
          :delete-scene-image="deleteSceneImage"
          :confirm-scene-reference="confirmSceneReference"
        />
      </div>
    </section>

    <div v-if="!hasVisibleMedia && !showingLooks" class="production-empty">
      <p>{{ EMPTY_COPY[focusStage] || '当前步骤还没有可预览的文件。音频放入 music/，人物图片放入 assets/characters/，场景基准图放入 assets/scenes/，分镜视频放入 generated/video/raw/，成片放入 generated/video/final/。' }}</p>
    </div>

    <p v-else-if="!hasVisibleMedia && showingLooks" class="production-empty">
      人物三视图放入 <code>assets/characters/</code>，确认的场景基准图放入 <code>assets/scenes/</code>。
    </p>

    <p v-if="shotActionError" class="confirm-error production-action-error" role="alert">{{ shotActionError }}</p>

    <div v-if="hasVisibleMedia" class="production-body">
      <section
        v-if="featured?.items?.length"
        id="production-final"
        class="production-group"
        :class="{ 'is-focused': isFocused('final') }"
      >
        <header>
          <Film :size="15" />
          <h3>{{ featured.label }}</h3>
          <small>{{ featured.items.length }}</small>
        </header>
        <div class="production-grid is-final">
          <article v-for="item in featured.items" :key="item.path" class="media-card is-featured">
            <video :src="item.url" controls preload="metadata"></video>
            <div class="media-meta">
              <strong>{{ itemLabel(item) }}</strong>
              <small>{{ itemCaption(item) }}</small>
            </div>
          </article>
        </div>
      </section>

      <section
        v-for="group in restGroups"
        :id="`production-${group.id}`"
        :key="group.id"
        class="production-group"
        :class="[`is-${group.id}`, { 'is-focused': isFocused(group.id) }]"
      >
        <header>
          <Film v-if="group.kind === 'video'" :size="15" />
          <ImageIcon v-else-if="group.kind === 'image'" :size="15" />
          <Music2 v-else :size="15" />
          <h3>{{ group.id === 'characters' ? '人物主角图' : group.id === 'scenes' ? '场景基准图' : group.label }}</h3>
          <small>{{ group.items.length }}</small>
        </header>

        <div v-if="group.kind === 'image'" class="production-grid is-image">
          <button
            v-for="item in group.items"
            :key="item.path"
            class="media-card is-image"
            :class="{ 'is-scene-image': group.id === 'scenes', 'is-voided': item.voided }"
            type="button"
            :aria-label="`查看 ${itemLabel(item)}`"
            @click="openImage(item)"
          >
            <img :src="item.url" :alt="itemLabel(item)">
            <span class="media-meta">
              <strong :class="{ 'is-voided-name': item.voided }">{{ itemLabel(item) }}</strong>
              <small>{{ itemCaption(item) }}</small>
            </span>
            <span v-if="group.id === 'scenes'" class="scene-card-actions">
              <span v-if="item.voided" class="scene-voided-label">作废</span>
              <span
                class="scene-delete-button"
                role="button"
                tabindex="0"
                aria-label="删除场景图"
                @click.stop="askDelete(item)"
                @keydown.enter.stop="askDelete(item)"
                @keydown.space.prevent.stop="askDelete(item)"
              ><Trash2 :size="14" /></span>
            </span>
          </button>
        </div>

        <div v-else-if="group.kind === 'video'" class="production-grid is-video">
          <article
            v-for="item in group.items"
            :key="item.path || item.name"
            class="media-card"
            :class="{ 'is-voided': item.voided, 'is-missing': item.missing }"
          >
            <video v-if="item.url" :src="item.url" controls preload="metadata"></video>
            <div v-else class="media-placeholder">{{ item.sizeLabel }}</div>
            <div class="media-meta">
              <strong>{{ itemLabel(item) }}</strong>
              <small>{{ itemCaption(item) }}</small>
            </div>
            <div v-if="group.id === 'raw' && !item.missing && item.shotNumber" class="voided-media-actions">
              <template v-if="item.voided">
                <span class="scene-voided-label">作废</span>
                <button
                  type="button"
                  class="shot-restore-button"
                  :disabled="Boolean(shotBusy) || deleting"
                  @click="updateShotStatus(item, 'restore')"
                >
                  {{ shotBusy === item.name ? '恢复中…' : '恢复' }}
                </button>
                <button
                  type="button"
                  class="scene-delete-button"
                  aria-label="删除作废分镜视频"
                  :disabled="Boolean(shotBusy) || deleting"
                  @click="askDelete(item, 'shot')"
                >
                  <Trash2 :size="14" />
                </button>
              </template>
              <button
                v-else
                type="button"
                class="upscale-delete-button"
                :disabled="Boolean(shotBusy) || deleting"
                @click="updateShotStatus(item, 'void')"
              >
                {{ shotBusy === item.name ? '作废中…' : '作废' }}
              </button>
            </div>
            <div v-else-if="group.id === 'intermediate' && item.url" class="voided-media-actions">
              <button
                type="button"
                class="upscale-delete-button"
                :aria-label="`删除 ${itemLabel(item)}`"
                @click="askDelete(item, 'upscale')"
              >
                删除
              </button>
            </div>
          </article>
        </div>

        <div v-else class="production-audio-list">
          <article v-for="item in group.items" :key="item.path" class="audio-card">
            <div class="media-meta">
              <strong>{{ itemLabel(item) }}</strong>
              <small>{{ itemCaption(item) }}</small>
            </div>
            <audio :src="item.url" controls preload="metadata"></audio>
          </article>
        </div>
      </section>
    </div>
  </section>

  <div
    v-if="selectedImage"
    class="image-lightbox"
    role="dialog"
    aria-modal="true"
    :aria-label="selectedImage.name"
    @click="closeImage"
  >
    <button class="lightbox-close" type="button" aria-label="关闭预览" @click="closeImage">
      <X :size="18" />
    </button>
    <img :src="selectedImage.url" :alt="selectedImage.name" @click.stop>
    <p>{{ selectedImage.name }}</p>
  </div>

  <div v-if="pendingDelete" class="confirm-backdrop" role="presentation" @click.self="cancelDelete">
    <section class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="delete-media-title">
      <h3 id="delete-media-title">确认删除{{ deleteKindLabel(pendingDelete.kind) }}？</h3>
      <p>将永久删除“{{ pendingDelete.item.name }}”，此操作无法撤销。</p>
      <p v-if="deleteError" class="confirm-error" role="alert">{{ deleteError }}</p>
      <div class="confirm-actions">
        <button type="button" class="button-secondary" :disabled="deleting" @click="cancelDelete">取消</button>
        <button type="button" class="button-danger" :disabled="deleting" @click="confirmDelete">{{ deleting ? '删除中…' : '确认删除' }}</button>
      </div>
    </section>
  </div>
</template>
