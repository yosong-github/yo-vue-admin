<!--
 * @Author: yosong
 * @Date: 2023-11-23 11:06:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-24 15:09:38
 * @FilePath: \yo-vue-admin\src\views\home\work\cpns\workList.vue
-->
<template>
  <el-card
    :body-style="{
      paddingBottom: 0,
      paddingTop: 0
    }"
    class="workList"
  >
    <template #header>
      <div class="header">
        <span>工作列表</span>
      </div>
    </template>
    <el-skeleton :rows="5" animated :loading="loading" />
    <!-- <div v-for="o in 50" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
    <div v-show="!loading" class="item">{{ 'List item ' }}</div>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<style lang="scss" scoped>
.workList {
  .item {
    background-color: var(--el-card-bg-color);
    border-bottom: 1px solid var(--el-card-border-color);
    padding: 20px 10px;
    &:last-child {
      border: 0;
    }
  }
}
</style>
