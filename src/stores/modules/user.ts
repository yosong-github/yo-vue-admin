/*
 * @Author: yosong
 * @Date: 2023-11-13 10:00:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-27 10:49:56
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
          path: '/home',
          name: 'Home',
          redirect: '/home/index',
          meta: {
            title: 'layout.sider.dashboard',
            icon: 'IconDashboard'
          },
          children: [
            {
              path: '/home/index',
              name: 'HomeIndex',
              component: '/home/index/index',
              meta: {
                icon: 'IconHome',
                title: 'layout.sider.home'
              }
            },
            {
              path: '/home/work',
              name: 'Homework',
              component: '/home/work/work',
              meta: {
                icon: 'IconWork',
                title: 'layout.sider.work',
                isNoPadding: true
              }
            }
          ]
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
        },
        {
          path: '/table',
          name: 'Table',
          redirect: '/table/basics',
          meta: {
            title: 'layout.sider.table',
            icon: 'Grid'
          },
          children: [
            {
              path: '/table/basics',
              name: 'TableBasics',
              component: '/table/basics/index',
              meta: {
                icon: 'Operation',
                title: 'layout.sider.TableBasics'
              }
            }
          ]
        },
        {
          path: '/form',
          name: 'Form',
          redirect: '/form/basics',
          meta: {
            title: 'layout.sider.form',
            icon: 'Memo'
          },
          children: [
            {
              path: '/form/basics',
              name: 'FormBasics',
              component: '/form/basics/index',
              meta: {
                icon: 'Tickets',
                title: 'layout.sider.FormBasics'
              }
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
    const historyTabs = ref<historyTabs[]>([])

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
      // 默认第一项为首页，tabs不可删除
      console.log()
      if (
        historyTabs.value.length === 0 ||
        historyTabs.value[0].path !=
          (authMenuList.value[0]?.redirect || authMenuList.value[0]?.path) ||
        (authMenuList.value[0].redirect &&
          historyTabs.value[0].title !=
            authMenuList.value[0].children![0].meta.title)
      ) {
        historyTabs.value = []
        historyTabs.value.unshift({
          path: authMenuList.value[0]?.redirect || authMenuList.value[0]?.path,
          title: authMenuList.value[0]?.redirect
            ? authMenuList.value[0].children![0].meta.title
            : authMenuList.value[0]?.meta.title,
          noDel: true
        })
      }
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
        historyTabs.value = historyTabs.value.filter(
          (it, idx) => idx >= index || it.noDel
        )
      }
    }
    // 删除历史右边tabs
    const deleteHistoryTabsR = (path: string) => {
      const index = historyTabs.value.findIndex(it => it.path === path)
      if (index !== -1) {
        historyTabs.value = historyTabs.value.filter(
          (it, idx) => idx <= index || it.noDel
        )
      }
    }
    // 删除其他tabs
    const deleteOtherTabs = (path: string) => {
      const index = historyTabs.value.findIndex(it => it.path === path)
      if (index !== -1) {
        historyTabs.value = historyTabs.value.filter(
          it => it.path === path || it.noDel
        )
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
