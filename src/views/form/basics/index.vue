<!--
 * @Author: yosong
 * @Date: 2023-11-27 10:48:33
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-27 17:26:16
 * @FilePath: \yo-vue-admin\src\views\form\basics\index.vue
-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>基础表单</span>
      </div>
    </template>
    <YoForm ref="yoForm" label-width="100px" :form-row="item" />

    {{ yoForm ? yoForm.form : '' }}
    <!-- <el-button @click="sss">提交</el-button> -->
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import YoForm from '@/components/YoForm/YoForm.vue'
import { item } from './config'

const yoForm = ref()

onMounted(() => {})
</script>

<style lang="scss" scoped></style>
