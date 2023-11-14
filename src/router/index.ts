/*
 * @Author: yosong
 * @Date: 2023-11-07 14:48:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-14 17:50:54
 * @FilePath: \yo-vue-admin\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import { useUserStore } from '@/stores/modules/user'
import { storeToRefs } from 'pinia'
import { staticRouter, errorRouter } from './modules/staticRouter'
import { initDynamicRouter } from './modules/dynamicRouter'
import { useGlobalStore } from '@/stores/modules/global'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...staticRouter, ...errorRouter]
})

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
  const { currentRouteName } = storeToRefs(useGlobalStore())
  const { userInfo, authMenuList } = storeToRefs(useUserStore())
  const { addHistoryTabs } = useUserStore()

  // 1.NProgress 开始
  NProgress.start()

  // 2.动态设置标题
  const title = import.meta.env.VITE_GLOB_APP_TITLE
  document.title = to.meta.title ?? title

  // 3.判断是否登录,已经登陆返回上一级菜单，没有登录清除所有动态路由（用于判断登录后手动返回登录页面不允许的情况）
  if (to.path.toLocaleLowerCase() == import.meta.env.VITE_DEFAULT_LOGIN_PATH) {
    if (userInfo.value.token) return next(from.fullPath)
    resetRouter()
    return next()
  }

  // 4.判断是否有 Token，没有重定向到 login 页面
  if (!userInfo.value.token) return next({ path: import.meta.env.VITE_DEFAULT_LOGIN_PATH, replace: true })

  // 6.如果没有菜单列表，就重新请求菜单列表并添加动态路由
  if (!authMenuList.value.length) {
    await initDynamicRouter()
    return next({ ...to, replace: true })
  }

  // 7.设置当前路由（用户刷新当前page）
  currentRouteName.value = to.name as string

  // 8.添加历史tabs
  addHistoryTabs({
    title: to.meta.title as string,
    path: to.path
  })

  // 9.正常访问页面
  next()
})

/**
 * @description 重置路由
 * */
export const resetRouter = () => {
  const { authMenuList } = storeToRefs(useUserStore())

  authMenuList.value.forEach(route => {
    const { name } = route
    if (name && router.hasRoute(name)) router.removeRoute(name)
  })
}

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
  NProgress.done()
  console.warn('路由错误', error.message)
})

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
  NProgress.done()
})

export default router
