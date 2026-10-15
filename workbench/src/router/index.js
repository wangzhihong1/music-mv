import { createRouter, createWebHashHistory } from 'vue-router'
import WorkbenchView from '@/views/WorkbenchView.vue'
import CharactersView from '@/views/CharactersView.vue'
import CharacterDetailView from '@/views/CharacterDetailView.vue'

const routes = [
  {
    path: '/',
    redirect: '/songs/in-progress',
  },
  {
    path: '/songs/:collectionId',
    name: 'songs',
    component: WorkbenchView,
    props: true,
  },
  {
    path: '/characters',
    name: 'characters',
    component: CharactersView,
  },
  {
    path: '/characters/:characterId',
    name: 'character-detail',
    component: CharacterDetailView,
    props: true,
  },
  {
    path: '/archives/:archiveId',
    name: 'archives',
    component: WorkbenchView,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/songs/in-progress',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
