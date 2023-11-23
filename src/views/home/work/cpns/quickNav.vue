<!--
 * @Author: yosong
 * @Date: 2023-11-23 11:08:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-23 11:25:48
 * @FilePath: \yo-vue-admin\src\views\home\work\cpns\quickNav.vue
-->
<template>
  <el-card class="quickNav">
    <template #header>
      <div class="header">
        <span>快捷导航</span>
      </div>
    </template>
    <el-skeleton :rows="5" animated />
    <!-- <div v-for="o in 10" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
  </el-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
