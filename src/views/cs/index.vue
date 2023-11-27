<!--
 * @Author: yosong
 * @Date: 2023-11-08 16:22:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-11 20:43:04
 * @FilePath: \yo-vue-admin\src\views\cs\index.vue
-->
<template>
  <div class="box">
    {{ $t('home.welcome') }}
    <el-button @click="changeLanguage">切换语言</el-button>
    <el-button @click="changeSize">切换按钮大小</el-button>
    <el-button @click="go">去仪表盘</el-button>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
    <el-time-picker
      v-model="value2"
      is-range
      range-separator="To"
      start-placeholder="Start time"
      end-placeholder="End time"
    />
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Start date"
      end-placeholder="End date"
      format="YYYY-MM-DD HH:mm:ss"
      date-format="YYYY/MM/DD ddd"
      time-format="A hh:mm:ss"
    />
    <div style="width: 100000px; background-color: red">111</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGlobalStore } from '@/stores/modules/global'

import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const value2 = ref<[Date, Date]>([
  new Date(2016, 9, 10, 8, 40),
  new Date(2016, 9, 10, 9, 40)
])

const router = useRouter()

const go = () => {
  router.push('/dashboard')
}

// 全局状态
const globalConfig = storeToRefs(useGlobalStore())

const value1 = ref(new Date())

const changeLanguage = () => {
  console.log('changeLanguage')

  globalConfig.language.value == 'en'
    ? (globalConfig.language.value = 'zh')
    : (globalConfig.language.value = 'en')
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
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  background-color: var(--el-bg-color-page);
}
</style>
