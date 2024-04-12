import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Guide from '@/views/Guide.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    }
  ]
})

export default router
