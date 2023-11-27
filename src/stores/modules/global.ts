/*
 * @Author: yosong
 * @Date: 2023-11-08 15:20:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 14:44:03
 * @FilePath: \yo-vue-admin\src\stores\modules\global.ts
 */
import { defineStore } from 'pinia'
import piniaPersistConfig from '@/stores/helper/persist'
import { ref } from 'vue'

export const useGlobalStore = defineStore(
  'global',
  () => {
    // 语言
    const language = ref('en')
    // 按钮大小
    const assemblySize = ref<'large' | 'default' | 'small'>(
      import.meta.env.VITE_DEFAULT_SIZE
    )
    // 主题
    const theme = ref<'light' | 'dark'>('light')
    // 主题色
    const primaryColor = ref('#117376')
    // 全局灰色
    const grayscale = ref(false)
    // 菜单是否折叠
    const isCollapse = ref(false)
    // 菜单手风琴
    const uniaueOpened = ref(true)
    // 显示面包屑
    const isbreadcumb = ref(true)
    // 显示面包屑图标
    const isbreadcumbIcon = ref(true)
    // 显示标签页
    const isTabs = ref(true)
    // 显示页脚
    const isFooter = ref(true)
    // 当前路由名称
    const currentRouteName = ref<string>('')
    // 刷新
    const refresh = ref(true)
    // 布局方式
    const layoutType = ref<'colum' | 'classical'>('classical')
    // 主题设置弹窗状态
    const editThemeState = ref(false)

    // 切换主题
    const setTheme = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    // 切换语言
    const changeLanguage = (setlanguage: string) => {
      if (language.value == setlanguage) return
      language.value = setlanguage
    }

    return {
      language,
      assemblySize,
      theme,
      setTheme,
      isCollapse,
      changeLanguage,
      currentRouteName,
      refresh,
      editThemeState,
      layoutType,
      primaryColor,
      grayscale,
      uniaueOpened,
      isbreadcumb,
      isbreadcumbIcon,
      isTabs,
      isFooter
    }
  },
  {
    persist: piniaPersistConfig('global', [
      'language',
      'assemblySize',
      'theme',
      'isCollapse',
      'currentRouteName',
      'refresh',
      'layoutType',
      'primaryColor',
      'grayscale',
      'uniaueOpened',
      'isbreadcumb',
      'isbreadcumbIcon',
      'isTabs',
      'isFooter'
    ])
  }
)
