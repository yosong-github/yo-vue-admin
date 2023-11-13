<!--
 * @Author: yosong
 * @Date: 2023-11-13 14:25:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-13 16:35:44
 * @FilePath: \yo-vue-admin\src\components\icons\IconUser.vue
-->
<template>
  <img class="user-p" :src="url" alt="" />
</template>
<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>

<style lang="scss" scoped>
.user-p {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
