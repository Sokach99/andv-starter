import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '@/layout/BasicLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: 'Index',
            component: BasicLayout,
            children: [
                {
                    path: '/index',
                    name: 'Index',
                    component: () => import('@/views/HomeView.vue')
                }
            ]
        },
    ]
})

export default router
