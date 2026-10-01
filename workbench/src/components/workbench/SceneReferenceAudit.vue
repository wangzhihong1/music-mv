<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  song: { type: Object, required: true },
  scenes: { type: Array, default: () => [] },
  deleteSceneImage: { type: Function, default: null },
  confirmSceneReference: { type: Function, default: null },
})

const PLAN = [
  { id: 'valley', label: '整体山谷与地理关系', shortLabel: '山谷总览', description: '锁定院子、向东土路、田地和远山的相对位置。', pattern: /homeland_aerial/i },
  { id: 'house', label: '堂屋门槛与院子', shortLabel: '堂屋门槛', description: '锁定朝南堂屋、压实土院、东侧窄门，以及门内灶和木钉的左右关系。', pattern: /house_threshold/i },
  { id: 'road', label: '东门外向东土路', shortLabel: '东门土路', description: '锁定家到菜地的唯一土路、向东行进方向和路边环境。', pattern: /road_west_gate/i },
  { id: 'field', label: '菜地西头与两行豆架', shortLabel: '菜地西头', description: '锁定靠路留种行、靠田饱豆行、种盆、圆竹匾和地头空土。', pattern: /field_west_end/i },
]

const registered = computed(() => props.song.sceneReferences || [])
const sceneItems = computed(() => props.scenes || [])
const shots = computed(() => props.song.shots || [])
const pendingDelete = ref(null)
const busyKey = ref('')
const actionError = ref('')
const selectedImage = ref(null)

function referenceText(reference) { return [reference.id, reference.name, reference.path, reference.description].filter(Boolean).join(' ') }
function registeredFor(plan) {
  return registered.value.filter((reference) => {
    const text = referenceText(reference)
    return text.toLowerCase().includes(plan.id) || plan.pattern.test(text)
  })
}
function candidatesFor(plan) { return sceneItems.value.filter((item) => plan.pattern.test(item.name || item.path || '')) }
function isConfirmed(plan, item) {
  return registeredFor(plan).some((reference) => {
    const referencePath = String(reference.path || '').replace(/\\/g, '/')
    return referencePath === item.path || referencePath.endsWith('/' + item.name)
  })
}
function mappedShots(plan) {
  const ids = new Set(registeredFor(plan).flatMap((reference) => [reference.id, reference.name, reference.path]))
  return shots.value.filter((shot) => (shot.sceneReferenceIds || []).some((id) => ids.has(id))).length
}
const plans = computed(() => PLAN.map((plan) => {
  const candidates = candidatesFor(plan)
  const active = candidates.filter((item) => !item.voided)
  const references = registeredFor(plan)
  return { ...plan, candidates, activeCount: active.length, voidedCount: candidates.length - active.length, registeredCount: references.length, mappedCount: mappedShots(plan), status: references.length ? 'registered' : active.length ? 'candidate' : 'missing' }
}))
const registeredCount = computed(() => registered.value.length)
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
    <div class="scene-audit-list">
      <article v-for="plan in plans" :key="plan.id" class="scene-audit-card" :class="'is-' + plan.status">
        <div class="scene-audit-card-head"><div><strong>{{ plan.shortLabel }}</strong><small>{{ plan.label }}</small></div><span class="scene-audit-badge">{{ statusLabel(plan.status) }}</span></div>
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
    <p v-if="actionError" class="scene-audit-error" role="alert">{{ actionError }}</p><p class="scene-audit-note">场景图片只在这里按类型管理；确认会写入 sceneReferences[]，删除会同步移除对应登记。</p>
  </section>
  <div v-if="pendingDelete" class="confirm-backdrop" role="presentation" @click.self="cancelDelete"><section class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="scene-delete-title"><h3 id="scene-delete-title">确认删除场景图？</h3><p>将删除“{{ pendingDelete.item.name }}”，并移除它的场景登记。</p><div class="confirm-actions"><button type="button" class="button-secondary" :disabled="Boolean(busyKey)" @click="cancelDelete">取消</button><button type="button" class="button-danger" :disabled="Boolean(busyKey)" @click="deleteCandidate">{{ busyKey ? '删除中…' : '确认删除' }}</button></div></section></div>
  <div v-if="selectedImage" class="image-lightbox" role="dialog" aria-modal="true" :aria-label="selectedImage.name" @click="closeImage"><button class="lightbox-close" type="button" aria-label="关闭预览" @click="closeImage">×</button><img :src="selectedImage.url" :alt="selectedImage.name" @click.stop><p>{{ selectedImage.name }}</p></div>
</template>
