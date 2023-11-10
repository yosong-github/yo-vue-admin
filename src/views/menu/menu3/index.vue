<!--
 * @Author: yosong
 * @Date: 2023-11-10 13:47:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 14:57:26
 * @FilePath: \yo-vue-admin\src\views\menu\menu3\index.vue
-->
<template>
  <div class="box">
    menu3
    <el-button @click="$router.go(-1)">返回</el-button>
    <el-input v-model="value" placeholder="测试缓存"></el-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'Menu3'
})

const value = ref<string>('')
</script>

<style lang="scss" scoped></style>
