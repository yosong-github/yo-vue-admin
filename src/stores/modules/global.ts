/*
 * @Author: yosong
 * @Date: 2023-11-08 15:20:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-11 18:24:53
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
    const theme = ref<'light' | 'dark'>('dark')
    // 菜单是否折叠
    const isCollapse = ref(false)

    // 切换主题
    const setTheme = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    return { language, assemblySize, theme, setTheme, isCollapse }
  },
  {
    persist: piniaPersistConfig('global')
  }
)
