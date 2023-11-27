/*
 * @Author: yosong
 * @Date: 2023-11-10 11:02:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-13 14:37:32
 * @FilePath: \yo-vue-admin\src\router\modules\dynamicRouter.ts
 */
import router from '..'
import type { RouteRecordRaw } from 'vue-router'
import { ElNotification } from 'element-plus'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/modules/user'
import useRouteCache from '@/hooks/useRouteCache'

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue')

/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = async () => {
  const { resetUser, getAuthMenuList, getAuthmenuListForRoute } = useUserStore()
  const { authMenuList } = storeToRefs(useUserStore())
  const { addCache } = useRouteCache()
  try {
    // 1.获取菜单列表
    await getAuthMenuList()
    // 2.判断当前用户有没有菜单权限
    if (!authMenuList.value.length) {
      ElNotification({
        title: '无权限访问',
        message: '当前账号无任何菜单权限，请联系系统管理员！',
        type: 'warning',
        duration: 3000
      })
      resetUser()
      router.replace(import.meta.env.VITE_DEFAULT_LOGIN_PATH)
      return Promise.reject('No permission')
    }
    // 3.添加动态路由
    getAuthmenuListForRoute().forEach(item => {
      if (item.component && typeof item.component == 'string') {
        if (item.meta.isKeepAlive) {
          addCache(item.name)
        }
        const component = modules['/src/views' + item.component + '.vue']
        if (item.meta.isFull) {
          router.addRoute({ ...item, component } as unknown as RouteRecordRaw)
        } else {
          router.addRoute('layout', {
            ...item,
            component
          } as unknown as RouteRecordRaw)
        }
      }
    })
  } catch (error) {
    // 请求出错时，重定向到登陆页
    resetUser()
    router.replace(import.meta.env.VITE_DEFAULT_LOGIN_PATH)
    return Promise.reject(error)
  }
}
