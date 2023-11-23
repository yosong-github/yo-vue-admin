<!--
 * @Author: yosong
 * @Date: 2023-11-23 11:06:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-23 17:53:36
 * @FilePath: \yo-vue-admin\src\views\home\work\cpns\workList.vue
-->
<template>
  <el-card class="workList">
    <template #header>
      <div class="header">
        <span>工作列表</span>
      </div>
    </template>
    <el-skeleton :rows="5" animated />
    <!-- <div v-for="o in 50" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
  </el-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
