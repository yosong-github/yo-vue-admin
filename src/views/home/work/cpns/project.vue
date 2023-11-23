<!--
 * @Author: yosong
 * @Date: 2023-11-23 11:04:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-23 16:14:03
 * @FilePath: \yo-vue-admin\src\views\home\work\cpns\project.vue
-->
<template>
  <el-card class="project">
    <template #header>
      <div class="header">
        <span>项目</span>
      </div>
    </template>
    <el-skeleton :rows="5" animated :loading="true" />
    <!-- <div v-for="(it, index) in 4" :key="it">{{ 'List item ' + it }}</div> -->
  </el-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
