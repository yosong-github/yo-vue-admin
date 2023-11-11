/*
 * @Author: yosong
 * @Date: 2023-11-07 14:48:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-11 00:25:22
 * @FilePath: \yo-vue-admin\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'

// 样式
import 'normalize.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css' // 黑暗主题
import './styles/common.scss' // 公共样式

// 组件库
// import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons-vue'

// 工具包
import router from './router'
import I18n from '@/languages/index'
import pinia from '@/stores/index'

// errorHandler
import errorHandler from '@/utils/errorHandler'

const app = createApp(App)
app.config.errorHandler = errorHandler

// 注册图标
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})

// 全部导入样式组件
// app.use(ElementPlus)

app.use(router).use(pinia).use(I18n)

app.mount('#app')
