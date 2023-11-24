<!--
 * @Author: yosong
 * @Date: 2023-11-22 11:44:29
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-23 11:19:24
 * @FilePath: \yo-vue-admin\src\views\home\work\work.vue
-->
<template>
  <div class="work">
    <el-row>
      <welcome />
    </el-row>
    <el-row :gutter="10" style="padding: 10px 12px">
      <el-col :sm="24" :md="16" :lg="18">
        <el-row style="margin-bottom: 10px">
          <el-col><project /></el-col>
        </el-row>
        <el-row style="margin-bottom: 10px">
          <el-col><workList /></el-col>
        </el-row>
      </el-col>
      <el-col :sm="24" :md="8" :lg="6">
        <el-row style="margin-bottom: 10px">
          <el-col><quickNav /></el-col>
        </el-row>
        <el-row style="margin-bottom: 10px">
          <el-col><statistics /></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import welcome from './cpns/welcome.vue'
import project from './cpns/project.vue'
import workList from './cpns/workList.vue'
import quickNav from './cpns/quickNav.vue'
import statistics from './cpns/statistics.vue'
</script>

<style lang="scss" scoped></style>
