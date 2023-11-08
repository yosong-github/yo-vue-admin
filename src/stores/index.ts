/*
 * @Author: yosong
 * @Date: 2023-11-08 17:10:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-08 17:11:59
 * @FilePath: \yo-vue-admin\src\stores\index.ts
 */

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// pinia persist
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
