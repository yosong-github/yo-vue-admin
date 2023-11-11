/*
 * @Author: yosong
 * @Date: 2023-11-10 17:22:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-11 19:10:01
 * @FilePath: \yo-vue-admin\src\hooks\useElementStyle.ts
 */
import { watchEffect } from 'vue'
import { menuTheme } from '@/styles/style/menu'
import { commonTheme } from '@/styles/style/common'
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'

export const useTheme = () => {
  const { theme } = storeToRefs(useGlobalStore())

  const initTheme = () => {
    watchEffect(() => {
      const html = document.documentElement as HTMLElement
      if (theme.value == 'dark') html.setAttribute('class', 'dark')
      else html.setAttribute('class', '')

      // 循环设置颜色
      for (const [key, value] of Object.entries(menuTheme[theme.value])) {
        document.documentElement.style.setProperty(key, value)
      }
      for (const [key, value] of Object.entries(commonTheme[theme.value])) {
        document.documentElement.style.setProperty(key, value)
      }
    })
  }

  return {
    initTheme
  }
}
