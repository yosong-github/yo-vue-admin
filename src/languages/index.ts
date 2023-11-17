/*
 * @Author: yosong
 * @Date: 2023-11-08 14:39:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 22:17:48
 * @FilePath: \yo-vue-admin\src\languages\index.ts
 */
import { createI18n } from 'vue-i18n'
import { getBrowserLang } from '@/utils'

import zh from './modules/zh'
import en from './modules/en'

const i18n = createI18n({
  // Use Composition API, Set to false
  allowComposition: true,
  legacy: false,
  locale: getBrowserLang(),
  messages: {
    zh,
    en
  }
})

export default i18n
