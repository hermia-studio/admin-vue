import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home/HomeIndex.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/LoginIndex.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register/RegisterIndex.vue')
    }
  ]
})

export default router
