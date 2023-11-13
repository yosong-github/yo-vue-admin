<!--
 * @Author: yosong
 * @Date: 2023-11-11 18:17:58
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-13 10:19:35
 * @FilePath: \yo-vue-admin\src\layouts\components\HeaderLeft\index.vue
-->
<template>
  <div class="headerl">
    <el-icon v-show="isCollapse" @click="check"><Expand /></el-icon>
    <el-icon v-show="!isCollapse" @click="check"><Fold /></el-icon>
    <breadcumb />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { onUnmounted } from 'vue'
import breadcumb from './cpns/breadcrumb.vue'

const { isCollapse } = storeToRefs(useGlobalStore())

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

onMounted(() => {
  window.addEventListener('resize', listener)
})

onUnmounted(() => {
  window.removeEventListener('resize', listener)
})
</script>

<style lang="scss" scoped>
.headerl {
  font-size: 24px;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  > .el-icon {
    cursor: pointer;
    margin-right: 20px;
  }
}
</style>
