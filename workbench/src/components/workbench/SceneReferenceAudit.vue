<script setup>
import { computed, ref } from 'vue'
import { Upload } from '@lucide/vue'

const props = defineProps({
  song: { type: Object, required: true },
  scenes: { type: Array, default: () => [] },
  deleteSceneImage: { type: Function, default: null },
  uploadSceneImage: { type: Function, default: null },
  confirmSceneReference: { type: Function, default: null },
})

const registered = computed(() => props.song.sceneReferences || [])
const planned = computed(() => (
  Array.isArray(props.song.sceneReferencePlans)
    ? props.song.sceneReferencePlans
    : registered.value
))
const sceneItems = computed(() => props.scenes || [])
const shots = computed(() => props.song.shots || [])
const pendingDelete = ref(null)
const busyKey = ref('')
const actionError = ref('')
const selectedImage = ref(null)

function normalizedPath(value) { return String(value || '').replace(/\\/g, '/') }
function referenceText(reference) { return [reference.id, reference.name, reference.path, reference.description].filter(Boolean).join(' ') }
function matchesReferencePath(item, referencePath) {
  const itemPath = normalizedPath(item.path || item.name)
  const targetPath = normalizedPath(referencePath)
  if (!targetPath) return false
  return itemPath === targetPath
    || itemPath.endsWith('/' + targetPath)
    || normalizedPath(item.name) === targetPath.split('/').pop()
}
function belongsToPlan(plan, item) {
  const planPath = normalizedPath(plan.path)
  if (registeredFor(plan).some((reference) => matchesReferencePath(item, reference.path))) return true
  if (planPath && matchesReferencePath(item, planPath)) return true
  return referenceText(item).toLowerCase().includes(String(plan.id || '').toLowerCase())
}
function registeredFor(plan) {
  return registered.value.filter((reference) => {
    const text = referenceText(reference)
    return text.toLowerCase().includes(String(plan.id || '').toLowerCase())
  })
}
function confirmedFor(plan) {
  return registeredFor(plan).filter((reference) => !reference.status || reference.status === 'confirmed')
}
function candidatesFor(plan) { return sceneItems.value.filter((item) => belongsToPlan(plan, item)) }
function isConfirmed(plan, item) {
  return confirmedFor(plan).some((reference) => matchesReferencePath(item, reference.path))
}
function mappedShots(plan) {
  const ids = new Set(registeredFor(plan).flatMap((reference) => [reference.id, reference.name, reference.path]))
  return shots.value.filter((shot) => (shot.sceneReferenceIds || []).some((id) => ids.has(id))).length
}
const plans = computed(() => planned.value.map((source, index) => {
  const plan = {
    ...source,
    id: source.id || `scene-${index + 1}`,
    label: source.name || source.label || `场景 ${index + 1}`,
    shortLabel: source.shortLabel || source.name || source.label || `场景 ${index + 1}`,
    description: source.description || '尚未填写场景基准说明。',
  }
  const candidates = candidatesFor(plan)
  const active = candidates.filter((item) => !item.voided)
  const references = registeredFor(plan)
  const confirmed = confirmedFor(plan)
  return { ...plan, candidates, activeCount: active.length, voidedCount: candidates.length - active.length, registeredCount: confirmed.length, mappedCount: mappedShots(plan), status: confirmed.length ? 'registered' : active.length || references.length ? 'candidate' : 'missing' }
}))
const registeredCount = computed(() => registered.value.filter((reference) => !reference.status || reference.status === 'confirmed').length)
const mappedCount = computed(() => shots.value.filter((shot) => (shot.sceneReferenceIds || []).length > 0).length)
const activeImageCount = computed(() => sceneItems.value.filter((item) => !item.voided).length)
const voidedImageCount = computed(() => sceneItems.value.filter((item) => item.voided).length)
function statusLabel(status) { return { registered: '已确认', candidate: '待确认', missing: '缺少有效图' }[status] }

async function confirmCandidate(plan, item) {
  if (!props.confirmSceneReference || item.voided || busyKey.value) return
  busyKey.value = 'confirm:' + plan.id + ':' + item.name
  actionError.value = ''
  try {
    await props.confirmSceneReference(props.song.folder, { planId: plan.id, fileName: item.name, name: plan.label, description: plan.description })
  } catch (error) { actionError.value = error.message } finally { busyKey.value = '' }
}
async function uploadCandidate(plan, event) {
  const input = event.currentTarget
  const file = input.files?.[0]
  input.value = ''
  if (!file || !props.uploadSceneImage || busyKey.value) return
  busyKey.value = 'upload:' + plan.id
  actionError.value = ''
  try {
    await props.uploadSceneImage(props.song.folder, plan.id, file)
  } catch (error) {
    actionError.value = error.message
  } finally {
    busyKey.value = ''
  }
}
function askDelete(plan, item) { pendingDelete.value = { plan, item }; actionError.value = '' }
function cancelDelete() { if (!busyKey.value) pendingDelete.value = null }
function openImage(item) { selectedImage.value = item }
function closeImage() { selectedImage.value = null }
async function deleteCandidate() {
  if (!pendingDelete.value || !props.deleteSceneImage || busyKey.value) return
  const { item } = pendingDelete.value
  busyKey.value = 'delete:' + item.name
  actionError.value = ''
  try { await props.deleteSceneImage(props.song.folder, item.name); pendingDelete.value = null } catch (error) { actionError.value = error.message } finally { busyKey.value = '' }
}
</script>

<template>
  <section class="scene-audit" aria-labelledby="scene-audit-title">
    <div class="scene-audit-header">
      <div><span class="panel-kicker">Reference Audit</span><h3 id="scene-audit-title">场景基准审核</h3><p>每个场景类型单独确认；确认后的图片会登记到 sceneReferences[]。</p></div>
      <span class="scene-audit-state" :class="'is-' + (song.mvWorkflow?.visualReferencesStatus || 'not_started')">{{ song.mvWorkflow?.visualReferencesStatus === 'confirmed' ? '全部场景已确认' : '场景仍在整理' }}</span>
    </div>
    <div class="scene-audit-metrics" aria-label="场景基准统计"><div><strong>{{ plans.length }}</strong><span>计划场景</span></div><div><strong>{{ registeredCount }}</strong><span>已确认</span></div><div><strong>{{ activeImageCount }}</strong><span>有效候选图</span></div><div><strong>{{ voidedImageCount }}</strong><span>作废图</span></div><div><strong>{{ mappedCount }}/{{ shots.length }}</strong><span>镜头已映射</span></div></div>
    <div v-if="plans.length" class="scene-audit-list">
      <article v-for="plan in plans" :key="plan.id" class="scene-audit-card" :class="'is-' + plan.status">
        <div class="scene-audit-card-head">
          <div><strong>{{ plan.shortLabel }}</strong><small>{{ plan.label }}</small></div>
          <div class="scene-audit-card-tools">
            <label class="scene-upload-button" :class="{ 'is-disabled': Boolean(busyKey) }" :title="`上传${plan.shortLabel}候选图`">
              <Upload :size="14" aria-hidden="true" />
              <span>{{ busyKey === ('upload:' + plan.id) ? '上传中…' : '上传图片' }}</span>
              <input type="file" accept="image/png,image/jpeg,image/webp" :disabled="Boolean(busyKey)" @change="uploadCandidate(plan, $event)">
            </label>
            <span class="scene-audit-badge">{{ statusLabel(plan.status) }}</span>
          </div>
        </div>
        <p>{{ plan.description }}</p>
        <div class="scene-audit-facts"><span>候选 {{ plan.activeCount }}</span><span v-if="plan.voidedCount">作废 {{ plan.voidedCount }}</span><span>确认 {{ plan.registeredCount }}</span><span>映射镜头 {{ plan.mappedCount }}</span></div>
        <div v-if="plan.candidates.length" class="scene-candidate-list">
          <article v-for="item in plan.candidates" :key="item.path" class="scene-candidate" :class="{ 'is-voided': item.voided, 'is-confirmed': isConfirmed(plan, item) }">
            <button type="button" class="scene-candidate-preview" :aria-label="'放大查看' + plan.shortLabel + '：' + item.name" @click="openImage(item)"><img :src="item.url" :alt="plan.shortLabel + '：' + item.name"></button><div class="scene-candidate-meta"><strong>{{ item.name }}</strong><small>{{ item.voided ? '已作废' : isConfirmed(plan, item) ? '当前确认图' : '候选图' }}</small></div>
            <div class="scene-candidate-actions"><button v-if="!item.voided && !isConfirmed(plan, item)" type="button" class="scene-confirm-button" :disabled="Boolean(busyKey)" @click="confirmCandidate(plan, item)">{{ busyKey === ('confirm:' + plan.id + ':' + item.name) ? '确认中…' : '确认' }}</button><span v-else-if="isConfirmed(plan, item)" class="scene-confirmed-label">已确认</span><button type="button" class="scene-delete-link" :disabled="Boolean(busyKey)" @click="askDelete(plan, item)">删除</button></div>
          </article>
        </div>
        <div v-else class="scene-audit-missing">需要补做有效场景基准图</div>
      </article>
    </div>
    <div v-else class="scene-audit-missing">尚未制定场景基准计划</div>
    <p v-if="actionError" class="scene-audit-error" role="alert">{{ actionError }}</p><p class="scene-audit-note">支持上传 PNG、JPG、WebP，单张不超过 20 MB；上传后先作为候选图，确认会写入 sceneReferences[]，删除会同步移除对应登记。</p>
  </section>
  <div v-if="pendingDelete" class="confirm-backdrop" role="presentation" @click.self="cancelDelete"><section class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="scene-delete-title"><h3 id="scene-delete-title">确认删除场景图？</h3><p>将删除“{{ pendingDelete.item.name }}”，并移除它的场景登记。</p><div class="confirm-actions"><button type="button" class="button-secondary" :disabled="Boolean(busyKey)" @click="cancelDelete">取消</button><button type="button" class="button-danger" :disabled="Boolean(busyKey)" @click="deleteCandidate">{{ busyKey ? '删除中…' : '确认删除' }}</button></div></section></div>
  <div v-if="selectedImage" class="image-lightbox" role="dialog" aria-modal="true" :aria-label="selectedImage.name" @click="closeImage"><button class="lightbox-close" type="button" aria-label="关闭预览" @click="closeImage">×</button><img :src="selectedImage.url" :alt="selectedImage.name" @click.stop><p>{{ selectedImage.name }}</p></div>
</template>
