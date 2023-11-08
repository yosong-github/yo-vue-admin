/*
 * @Author: yosong
 * @Date: 2023-11-08 15:20:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-08 16:21:01
 * @FilePath: \yo-vue-admin\src\stores\modules\global.ts
 */
import { defineStore } from 'pinia'
import piniaPersistConfig from '@/stores/helper/persist'
import { ref } from 'vue'

export const useGlobalStore = defineStore(
  'global',
  () => {
    const language = ref('en') // 语言
    const assemblySize = ref<'large' | 'default' | 'small'>(import.meta.env.VITE_DEFAULT_SIZE) // 按钮大小
    return { language, assemblySize }
  },
  {
    persist: piniaPersistConfig('global')
  }
)
