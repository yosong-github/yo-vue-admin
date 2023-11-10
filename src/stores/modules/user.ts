/*
 * @Author: yosong
 * @Date: 2023-11-10 10:25:53
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 17:46:32
 * @FilePath: \yo-vue-admin\src\stores\modules\user.ts
 */
import { defineStore } from 'pinia'
import piniaPersistConfig from '@/stores/helper/persist'
import { ref } from 'vue'
import type { menuList } from '../interface/index'
import { getFlatMenuList, getShowMenuList } from '@/utils'

const getAuthMenuListApi = (): Promise<menuList[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          path: '/dashboard',
          name: 'dashboard',
          component: '/dashboard/index',
          meta: {
            title: '仪表盘',
            icon: 'el-icon-s-data'
          }
        },
        {
          path: '/test',
          name: 'test',
          component: '/cs/index',
          meta: {
            title: '测试',
            icon: 'el-icon-s-data'
          }
        },
        {
          path: '/menu',
          name: 'Menu',
          redirect: '/menu/menu1',
          meta: { icon: 'List', title: '菜单嵌套', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
          children: [
            {
              path: '/menu/menu1',
              name: 'Menu1',
              component: '/menu/menu1/index',
              meta: { icon: 'Menu', title: '菜单1', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true }
            },
            {
              path: '/menu/menu2',
              name: 'Menu2',
              redirect: '/menu/menu2/menu21',
              meta: { icon: 'Menu', title: '菜单2', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
              children: [
                {
                  path: '/menu/menu2/menu21',
                  name: 'Menu21',
                  component: '/menu/menu2/menu21/index',
                  meta: { icon: 'Menu', title: '菜单2-1', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true }
                },
                {
                  path: '/menu/menu2/menu22',
                  name: 'Menu22',
                  redirect: '/menu/menu2/menu22/menu221',
                  meta: { icon: 'Menu', title: '菜单2-2', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
                  children: [
                    {
                      path: '/menu/menu2/menu22/menu221',
                      name: 'Menu221',
                      component: '/menu/menu2/menu22/menu221/index',
                      meta: {
                        icon: 'Menu',
                        title: '菜单2-2-1',
                        isLink: '',
                        isHide: false,
                        isFull: false,
                        isAffix: false,
                        isKeepAlive: true
                      }
                    },
                    {
                      path: '/menu/menu2/menu22/menu222',
                      name: 'Menu222',
                      component: '/menu/menu2/menu22/menu222/index',
                      meta: {
                        icon: 'Menu',
                        title: '菜单2-2-2',
                        isLink: '',
                        isHide: false,
                        isFull: false,
                        isAffix: false,
                        isKeepAlive: true
                      }
                    }
                  ]
                },
                {
                  path: '/menu/menu2/menu23',
                  name: 'Menu23',
                  component: '/menu/menu2/menu23/index',
                  meta: { icon: 'Menu', title: '菜单2-3', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: false }
                }
              ]
            },
            {
              path: '/menu/menu3',
              name: 'Menu3',
              component: '/menu/menu3/index',
              meta: { icon: 'Menu', title: '菜单3', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: false }
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

    const getMenuList = () => getShowMenuList(authMenuList.value)

    return { userInfo, authMenuList, resetUser, getAuthMenuList, getAuthmenuListForRoute, getMenuList }
  },
  {
    persist: piniaPersistConfig('user', ['userInfo']) // 排除用户路由的持久化，做到刷新路由重置
  }
)
