<!--
 * @Author: yosong
 * @Date: 2023-11-11 18:17:58
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-21 15:02:39
 * @FilePath: \yo-vue-admin\src\layouts\components\HeaderLeft\index.vue
-->
<template>
  <div class="headerl">
    <el-icon v-show="isCollapse" @click="check"><Expand /></el-icon>
    <el-icon v-show="!isCollapse" @click="check"><Fold /></el-icon>
    <breadcumb v-show="isbreadcumb" />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { onUnmounted } from 'vue'
import breadcumb from './cpns/breadcrumb.vue'
import { useDebounceFn } from '@vueuse/core'

const { isCollapse, isbreadcumb } = storeToRefs(useGlobalStore())

const check = () => {
  isCollapse.value = !isCollapse.value
}

const listener = () => {
  const w = document.documentElement.clientWidth
  if (w < 768) {
    isCollapse.value = true
  } else {
    isCollapse.value = false
  }
}
// 防抖
const debouncedResize = useDebounceFn(listener, 300, { maxWait: 800 })

onMounted(() => {
  window.addEventListener('resize', debouncedResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', debouncedResize)
})
</script>

<style lang="scss" scoped>
.headerl {
  font-size: 24px;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  min-width: 90px;
  > .el-icon {
    cursor: pointer;
    margin-right: 20px;
  }
}
</style>
