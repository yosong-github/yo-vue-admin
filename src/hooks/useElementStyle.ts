/*
 * @Author: yosong
 * @Date: 2023-11-10 17:22:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 17:28:45
 * @FilePath: \yo-vue-admin\src\hooks\useElementStyle.ts
 */
import { onMounted } from 'vue'
import { menuTheme } from '@/styles/style/menu'

export const useSetStyle = (theme: 'light' | 'dark' = 'light') => {
  onMounted(() => {
    for (const [key, value] of Object.entries(menuTheme[theme])) {
      console.log(key, value)

      document.documentElement.style.setProperty(key, value)
    }
  })
}
