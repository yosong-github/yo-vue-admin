<!--
 * @Author: yosong
 * @Date: 2023-11-10 10:46:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 14:46:15
 * @FilePath: \yo-vue-admin\src\layouts\index.vue
-->
<template>
  <div class="layout">
    layout
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="caches">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
      <!-- <transition appear name="fade-transform" mode="out-in">
      </transition> -->
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { caches } from '@/hooks/useRouteCache'
import { watchEffect } from 'vue'

watchEffect(() => {
  console.log(caches.value, 'layout')
})
</script>

<style lang="scss" scoped></style>
