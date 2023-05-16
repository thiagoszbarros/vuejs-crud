import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from '../pages/AppLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: AppLogin,
      path: '/login',
      name: 'AppLogin',
    }
  ]
})

export default router
