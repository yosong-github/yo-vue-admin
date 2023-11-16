/*
 * @Author: yosong
 * @Date: 2023-11-13 10:00:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 15:23:56
 * @FilePath: \yo-vue-admin\src\stores\modules\user.ts
 */
import { defineStore } from 'pinia'
import piniaPersistConfig from '@/stores/helper/persist'
import { ref } from 'vue'
import type { menuList, historyTabs } from '../interface/index'
import { getFlatMenuList, getShowMenuList } from '@/utils'

// 模拟请求路由
const getAuthMenuListApi = (): Promise<menuList[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          path: '/dashboard',
          name: 'dashboard',
          component: '/dashboard/index',
          meta: {
            // title: '首页',
            title: 'layout.sider.dashboard',
            icon: 'Odometer'
          }
        },
        {
          path: '/test',
          name: 'test',
          component: '/cs/index',
          meta: {
            title: 'layout.sider.test',
            icon: 'Sugar'
          }
        },
        {
          path: '/menu',
          name: 'Menu',
          redirect: '/menu/menu1',
          meta: {
            icon: 'List',
            title: 'layout.sider.meunnesting',
            isLink: '',
            isHide: false,
            isFull: false,
            isAffix: false,
            isKeepAlive: true
          },
          children: [
            {
              path: '/menu/menu1',
              name: 'Menu1',
              component: '/menu/menu1/index',
              meta: {
                icon: 'Menu',
                title: 'layout.sider.menu1',
                isLink: '',
                isHide: false,
                isFull: false,
                isAffix: false,
                isKeepAlive: true
              }
            },
            {
              path: '/menu/menu2',
              name: 'Menu2',
              redirect: '/menu/menu2/menu21',
              meta: {
                icon: 'Menu',
                title: 'layout.sider.menu2',
                isLink: '',
                isHide: false,
                isFull: false,
                isAffix: false,
                isKeepAlive: true
              },
              children: [
                {
                  path: '/menu/menu2/menu21',
                  name: 'Menu21',
                  component: '/menu/menu2/menu21/index',
                  meta: {
                    icon: 'Menu',
                    title: 'layout.sider.menu2-1',
                    isLink: '',
                    isHide: false,
                    isFull: false,
                    isAffix: false,
                    isKeepAlive: true
                  }
                }
              ]
            }
          ]
        }
      ])
    }, 500)
  })
}

export const useUserStore = defineStore(
  'user',
  () => {
    // 用户信息
    const userInfo = ref({
      name: 'yosong',
      token: 'xxxx',
      roles: ['admin']
    })
    //菜单列表
    const authMenuList = ref<menuList[]>([])

    // tabs标签
    const historyTabs = ref<historyTabs[]>([{ path: '/dashboard', title: 'layout.sider.dashboard', noDel: true }])

    // 清除用户信息
    const resetUser = () => {
      userInfo.value = {
        name: '',
        token: '',
        roles: []
      }
      authMenuList.value = []
    }

    // 获取用户路由
    const getAuthMenuList = async () => {
      const menuList = await getAuthMenuListApi()
      authMenuList.value = menuList
    }

    // 获取router要添加的路由
    const getAuthmenuListForRoute = () => {
      return getFlatMenuList(authMenuList.value).map(it => {
        delete it.children
        return it
      })
    }

    // 获取用户菜单
    const getMenuList = () => getShowMenuList(authMenuList.value)

    // 添加历史tabs
    const addHistoryTabs = (tab: historyTabs) => {
      const index = historyTabs.value.findIndex(it => it.path === tab.path)
      if (index === -1) {
        historyTabs.value.push(tab)
      }
    }
    // 删除历史tabs
    const deleteHistoryTabs = (path: string) => {
      const index = historyTabs.value.findIndex(it => it.path === path)
      if (index !== -1) {
        historyTabs.value.splice(index, 1)
      }
    }
    // 删除历史左右tabs
    const deleteHistoryTabsL = (path: string) => {
      const index = historyTabs.value.findIndex(it => it.path === path)
      if (index !== -1) {
        historyTabs.value = historyTabs.value.filter((it, idx) => idx >= index || it.noDel)
      }
    }
    // 删除历史右边tabs
    const deleteHistoryTabsR = (path: string) => {
      const index = historyTabs.value.findIndex(it => it.path === path)
      if (index !== -1) {
        historyTabs.value = historyTabs.value.filter((it, idx) => idx <= index || it.noDel)
      }
    }
    // 删除其他tabs
    const deleteOtherTabs = (path: string) => {
      const index = historyTabs.value.findIndex(it => it.path === path)
      if (index !== -1) {
        historyTabs.value = historyTabs.value.filter(it => it.path === path || it.noDel)
      }
    }
    // 删除所有tabs
    const deleteAllTabs = () => {
      historyTabs.value = historyTabs.value.filter(it => it.noDel)
    }

    return {
      userInfo,
      authMenuList,
      resetUser,
      getAuthMenuList,
      getAuthmenuListForRoute,
      getMenuList,
      historyTabs,
      addHistoryTabs,
      deleteHistoryTabs,
      deleteHistoryTabsL,
      deleteHistoryTabsR,
      deleteOtherTabs,
      deleteAllTabs
    }
  },
  {
    persist: piniaPersistConfig('user', ['userInfo', 'historyTabs']) // 排除用户路由的持久化，做到刷新路由重置
  }
)
