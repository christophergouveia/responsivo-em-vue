import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import VideosPage from '@/views/VideosView.vue'
import ImagensView from '@/views/ImagensView.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideosPage
    },
    {
      path: '/imagens',
      name: 'imagens',
      component: ImagensView
    },
    {
      path: '/tabela',
      name: 'tabela',
      component: import('@/views/TabelaView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404View.vue')
    }
  ]
})

export default router
