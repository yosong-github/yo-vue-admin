<!--
 * @Author: yosong
 * @Date: 2023-11-10 11:35:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-11 01:10:18
 * @FilePath: \yo-vue-admin\src\views\dashboard\index.vue
-->
<template>
  <div class="dashboard">
    dashboard

    <el-button @click="$router.push('/test')">去测试页面</el-button>
    <el-button @click="$router.push('/menu/menu1')">menu1</el-button>
    <el-button @click="$router.push('/menu/menu2/menu21')">menu21</el-button>
    <el-button @click="$router.push('/menu/menu2/menu23')">menu23</el-button>
    <el-button @click="$router.push('/menu/menu3')">/menu/menu3</el-button>
    <el-button @click="$router.push('/menu/menu2/menu22/menu221')">/menu/menu2/menu22/menu221</el-button>
    <el-button @click="$router.push('/menu/menu2/menu22/menu222')">/menu/menu2/menu22/menu222</el-button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.dashboard {
  width: calc(100% - 30px - 2px);
  height: calc(100% - 30px - 2px);
  background-color: #fff;
  padding: 15px;
  background-color: var(--common-bg-color);
  border: 1px solid var(--common-border-color);
  border-radius: 6px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
}
</style>
