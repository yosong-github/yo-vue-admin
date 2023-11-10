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
