import {createRouter, createWebHistory} from 'vue-router'

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
        },
        {
            path: '/questionnaire',
            name: 'questionnaire',
            component: () => import('@/views/QuestionnaireView.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('@/views/AdminView.vue')
        },
        {
            path: '/admin/ateliers',
            name: 'admin-ateliers',
            component: () => import('@/views/AdminAteliersView.vue')
        },
        {
            path: '/admin/ateliers/:id',
            name: 'admin-atelier',
            component: () => import('@/views/AdminAtelierView.vue')
        },
        {
            path: '/admin/ateliers/nouveau',
            name: 'admin-nouveau-atelier',
            component: () => import('@/views/AdminNouveauAtelierView.vue')
        }
    ]
})

export default router
