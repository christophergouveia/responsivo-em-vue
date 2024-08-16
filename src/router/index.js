import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('@/views/VideosView.vue')
    },
    {
      path: '/imagens',
      name: 'imagens',
      component: () => import('@/views/ImagensView.vue')
    },
    {
      path: '/tabela',
      name: 'tabela',
      component: () => import('@/views/TabelaView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404View.vue')
    }
  ]
})

export default router
