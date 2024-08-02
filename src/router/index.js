import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import VideosPage from '../views/VideosView.vue'
import ImagensView from '@/views/ImagensView.vue'

const router = createRouter({
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
      component: () => VideosPage
    },
    {
      path: '/imagens',
      name: 'imagens',
      component: () => ImagensView
    },
    {
      path: '/tabela',
      name: 'tabela',
      component: () => import('../views/TabelaView.vue')
    }
  ]
})

export default router
