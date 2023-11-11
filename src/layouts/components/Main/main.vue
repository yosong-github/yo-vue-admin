<!--
 * @Author: yosong
 * @Date: 2023-11-10 22:38:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-11 00:51:17
 * @FilePath: \yo-vue-admin\src\layouts\components\Main\main.vue
-->
<template>
  <div class="main">
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="caches">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { caches } from '@/hooks/useRouteCache'
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
