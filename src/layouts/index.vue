<!--
 * @Author: yosong
 * @Date: 2023-11-10 10:46:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 10:20:33
 * @FilePath: \yo-vue-admin\src\layouts\index.vue
-->
<template>
  <component :is="layOuts[layoutType]" />
  <yoEditTheme />
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'

import layoutClassical from '@/layouts/layoutClassical/index.vue'
import LayoutColumns from '@/layouts/LayoutColumns/index.vue'
import yoEditTheme from '@/components/EditTheme/YoEditTheme.vue'

// 所有布局
const layOuts = {
  classical: layoutClassical,
  colum: LayoutColumns
}

const { layoutType } = storeToRefs(useGlobalStore())
</script>

<style lang="scss" scoped></style>
