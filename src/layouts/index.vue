<!--
 * @Author: yosong
 * @Date: 2023-11-10 10:46:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-15 16:56:28
 * @FilePath: \yo-vue-admin\src\layouts\index.vue
-->
<template>
  <component :is="LayoutColumns" />
</template>

<script setup lang="ts">
// import layoutClassical from '@/layouts/layoutClassical/index.vue'
import LayoutColumns from '@/layouts/LayoutColumns/index.vue'
</script>

<style lang="scss" scoped></style>
