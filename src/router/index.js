import { createRouter, createWebHistory } from 'vue-router'
import Frontend from '../views/Frontend.vue'
import Controls from '../views/Controls.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Frontend
    },
    {
      path: '/controls',
      name: 'controls',
      component: Controls
    }
  ]
})

export default router
