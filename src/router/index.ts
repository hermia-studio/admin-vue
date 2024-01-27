import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/LayoutIndex.vue')
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
    },
    // 基础信息
    {
      path: '/baseMsg/supplier',
      name: 'supplier',
      component: () => import('@/views/baseMsg/supplierIndex.vue')
    },
    {
      path: '/baseMsg/goods',
      name: 'goods',
      component: () => import('@/views/baseMsg/goodsIndex.vue')
    },
    {
      path: '/baseMsg/custom',
      name: 'custom',
      component: () => import('@/views/baseMsg/customIndex.vue')
    },
    // 进货
    {
      path: '/Input/back',
      name: 'back',
      component: () => import('@/views/Input/backIndex.vue')
    },
    {
      path: '/Input/stock',
      name: 'stock',
      component: () => import('@/views/Input/stockIndex.vue')
    },
    // 销售
    {
      path: '/output/sale',
      name: 'sale',
      component: () => import('@/views/output/saleIndex.vue')
    },
    {
      path: '/output/saleBack',
      name: 'saleBack',
      component: () => import('@/views/output/saleBack.vue')
    },
    // 系统管理
    {
      path: '/system/user',
      name: 'user',
      component: () => import('@/views/system/userIndex.vue')
    },
    {
      path: '/system/role',
      name: 'role',
      component: () => import('@/views/system/roleIndex.vue')
    },
    {
      path: '/system/menu',
      name: 'menu',
      component: () => import('@/views/system/menuIndex.vue')
    },
    {
      path: '/system/dict',
      name: 'dict',
      component: () => import('@/views/system/dictIndex.vue')
    },
    {
      path: '/system/dept',
      name: 'dept',
      component: () => import('@/views/system/deptIndex.vue')
    },
    {
      path: '/system/notice',
      name: 'notice',
      component: () => import('@/views/system/noticeIndex.vue')
    },
    {
      path: '/system/log',
      name: 'log',
      component: () => import('@/views/system/logIndex.vue')
    },
    // 系统工具
    {
      path: '/component/editor',
      name: 'editor',
      component: () => import('@/views/component/editorIndex.vue')
    },
    {
      path: '/component/upload',
      name: 'upload',
      component: () => import('@/views/component/uploadIndex.vue')
    },
    {
      path: '/component/signature',
      name: 'signature',
      component: () => import('@/views/component/signatureIndex.vue')
    }
  ]
})

export default router
