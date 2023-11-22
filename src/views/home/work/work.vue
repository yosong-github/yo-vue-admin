<!--
 * @Author: yosong
 * @Date: 2023-11-22 11:44:29
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 16:10:39
 * @FilePath: \yo-vue-admin\src\views\home\work\work.vue
-->
<template>
  <div class="work">
    <el-row>
      <welcome />
    </el-row>
    <el-row style="padding: 10px 12px">
      <el-col :sm="24" :md="16" :lg="18">
        <div>项目</div>
        <div>列表</div>
      </el-col>
      <el-col :sm="24" :md="8" :lg="6">
        <div>快捷导航</div>
        <div>用户统计</div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import welcome from './cpns/welcome.vue'
</script>

<style lang="scss" scoped></style>
