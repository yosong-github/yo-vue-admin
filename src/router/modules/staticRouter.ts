/*
 * @Author: yosong
 * @Date: 2023-11-10 10:43:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 13:25:54
 * @FilePath: \yo-vue-admin\src\router\modules\staticRouter.ts
 */
import type { RouteRecordRaw } from 'vue-router'
/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: import.meta.env.VITE_DEFAULT_HOPME_PATH
  },
  {
    path: import.meta.env.VITE_DEFAULT_LOGIN_PATH,
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/layouts/index.vue'),
    redirect: import.meta.env.VITE_DEFAULT_HOPME_PATH,
    children: []
  }
]

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/components/ErrorPage/403.vue'),
    meta: {
      title: '403页面'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/ErrorPage/404.vue'),
    meta: {
      title: '404页面'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/components/ErrorPage/500.vue'),
    meta: {
      title: '500页面'
    }
  },
  // Resolve refresh page, route warnings
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/components/ErrorPage/404.vue')
  }
]
