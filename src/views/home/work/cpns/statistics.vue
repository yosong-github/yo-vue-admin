<template>
  <el-card class="statistics">
    <template #header>
      <div class="header">
        <span>统计</span>
      </div>
    </template>
    <el-skeleton :rows="5" animated />
    <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
  </el-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
