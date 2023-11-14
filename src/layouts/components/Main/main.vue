<!--
 * @Author: yosong
 * @Date: 2023-11-10 22:38:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-14 14:30:35
 * @FilePath: \yo-vue-admin\src\layouts\components\Main\main.vue
-->
<template>
  <div class="main">
    <router-view v-slot="{ Component, route }">
      <Transition name="fade-transform" mode="out-in">
        <keep-alive :include="caches">
          <component :is="Component" v-if="refresh" :key="route.fullPath" />
        </keep-alive>
      </Transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { caches } from '@/hooks/useRouteCache'
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'

// 控制刷新功能
const { refresh } = storeToRefs(useGlobalStore())
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
