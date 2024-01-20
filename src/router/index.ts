import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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

// 全局前置守卫
// router.beforeEach(async (to) => {
//   // 判断是否需要身份认证
//   if (to.meta.requireAuth) {
//     // 如果需要进行身份验证
//     try {
//       // await auth()
//       return true
//     } catch {
//       // 没有通过验证则跳转到登录页
//       router.push('/login')
//     }
//   } else {
//     // 不需要则放行
//     return true
//   }
// })

export default router
