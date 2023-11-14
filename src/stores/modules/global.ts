/*
 * @Author: yosong
 * @Date: 2023-11-08 15:20:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-14 11:38:46
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
    const assemblySize = ref<'large' | 'default' | 'small'>(import.meta.env.VITE_DEFAULT_SIZE)
    // 主题颜色
    const theme = ref<'light' | 'dark'>('light')
    // 菜单是否折叠
    const isCollapse = ref(false)
    // 当前路由名称
    const currentRouteName = ref<string>('')
    // 刷新
    const refresh = ref(true)

    // 切换主题
    const setTheme = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    // 切换语言
    const changeLanguage = (setlanguage: string) => {
      if (language.value == setlanguage) return
      language.value = setlanguage
    }

    return { language, assemblySize, theme, setTheme, isCollapse, changeLanguage, currentRouteName, refresh }
  },
  {
    persist: piniaPersistConfig('global')
  }
)
