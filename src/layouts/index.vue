<!--
 * @Author: yosong
 * @Date: 2023-11-10 10:46:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 16:36:26
 * @FilePath: \yo-vue-admin\src\layouts\index.vue
-->
<template>
  <component :is="layoutClassical" />
</template>

<script setup lang="ts">
import layoutClassical from '@/layouts/layoutClassical/index.vue'
</script>

<style lang="scss" scoped></style>
