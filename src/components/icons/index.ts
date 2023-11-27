/*
 * @Author: yosong
 * @Date: 2023-11-13 15:02:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-13 15:03:33
 * @FilePath: \yo-vue-admin\src\components\icons\index.ts
 */
import { defineAsyncComponent, type AsyncComponentLoader, type App } from 'vue'
/**
 * 快速注册自定义图标
 * @param app
 */
const customIcons = import.meta.glob('@/components/icons/**/*.vue')
export const install = (app: App) => {
  for (const [key, component] of Object.entries(customIcons)) {
    app.component(
      key.match(/[^\/]+(?=\.vue)/)![0],
      defineAsyncComponent(component as AsyncComponentLoader)
    )
  }
}
