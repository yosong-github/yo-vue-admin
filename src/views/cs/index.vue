<!--
 * @Author: yosong
 * @Date: 2023-11-08 16:22:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 17:08:19
 * @FilePath: \yo-vue-admin\src\views\cs\index.vue
-->
<template>
  <div class="box">
    {{ $t('home.welcome') }}
    <el-button @click="changeLanguage">切换语言</el-button>
    <el-button @click="changeSize">切换按钮大小</el-button>
    <el-button @click="go">去仪表盘</el-button>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGlobalStore } from '@/stores/modules/global'

import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()

const go = () => {
  router.push('/dashboard')
}

// 全局状态
const globalConfig = storeToRefs(useGlobalStore())

const value1 = ref(new Date())

const changeLanguage = () => {
  console.log('changeLanguage')

  globalConfig.language.value == 'en' ? (globalConfig.language.value = 'zh') : (globalConfig.language.value = 'en')
}
const changeSize = () => {
  console.log('changeSize')

  globalConfig.assemblySize.value == 'default'
    ? (globalConfig.assemblySize.value = 'small')
    : globalConfig.assemblySize.value == 'small'
    ? (globalConfig.assemblySize.value = 'large')
    : (globalConfig.assemblySize.value = 'default')
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
