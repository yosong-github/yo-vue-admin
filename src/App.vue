<!--
 * @Author: yosong
 * @Date: 2023-11-07 14:48:15
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-04-12 11:20:26
 * @FilePath: \yo-vue-admin\src\App.vue
-->
<template>
  <el-config-provider
    :locale="locale"
    :size="assemblySize"
    :button="buttonConfig"
  >
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores/modules/global'
import { getBrowserLang } from '@/utils/index'
import { storeToRefs } from 'pinia'
import { ElConfigProvider } from 'element-plus'
import { useTheme } from '@/hooks/useElementStyle'

import { userAge } from '@/utils/test'
import { onUserInfo } from '@/utils/test2'

console.log(userAge, 'userAge')

userAge.value++

const userage = onUserInfo()
console.log(userage, 'userage')

const route = useRouter()
// ElementPlus 语言模式
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

// 初始化主题
const { initTheme } = useTheme()
initTheme()

// 全局状态
const globalConfig = storeToRefs(useGlobalStore())

// 初始化语言
const i18n = useI18n()
onMounted(() => {
  const language = globalConfig.language.value ?? getBrowserLang()
  globalConfig.language.value = language
  console.log('1111111111111111111')
})
watchEffect(() => {
  i18n.locale.value = globalConfig.language.value

  // 动态设置标题
  const title = import.meta.env.VITE_GLOB_APP_TITLE
  document.title = title
  let currentTitle
  if (route.currentRoute.value.meta.title) {
    currentTitle = i18n.t(route.currentRoute.value.meta.title as string)
  }
  document.title = currentTitle ? currentTitle + ' - ' + title : title
})

// ElementPlus组件语言
const locale = computed(() => {
  if (globalConfig.language.value == 'zh') return zhCn
  if (globalConfig.language.value == 'en') return en
  return getBrowserLang() == 'zh' ? zhCn : en
})
// ElementPlus组件大小
const assemblySize = computed(() => globalConfig.assemblySize.value)
// ElementPlus按钮样式(两边是否需要空格)
const buttonConfig = reactive({ autoInsertSpace: false })
</script>

<style lang="scss" scoped></style>
