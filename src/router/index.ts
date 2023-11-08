/*
 * @Author: yosong
 * @Date: 2023-11-07 14:48:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-08 16:23:11
 * @FilePath: \yo-vue-admin\src\router\index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import textVue from '@/views/text.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'text',
      component: textVue
    }
  ]
})

export default router
