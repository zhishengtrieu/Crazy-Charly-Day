import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/ateliers',
      name: 'ateliers',
      component: () => import('@/views/AteliersView.vue')
    }
  ]
})

export default router
