<!--
 * @Author: yosong
 * @Date: 2023-11-07 14:48:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-08 17:14:37
 * @FilePath: \yo-vue-admin\src\App.vue
-->
<template>
  <el-config-provider :locale="locale" :size="assemblySize" :button="buttonConfig">
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
import { useSetStyle } from '@/hooks/useElementStyle'

// ElementPlus 语言模式
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { watchEffect } from 'vue'

// 修改element样式
useSetStyle()

// 全局状态
const globalConfig = storeToRefs(useGlobalStore())

// 初始化语言
const i18n = useI18n()
onMounted(() => {
  const language = globalConfig.language.value ?? getBrowserLang()
  globalConfig.language.value = language
})
watchEffect(() => {
  i18n.locale.value = globalConfig.language.value
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
