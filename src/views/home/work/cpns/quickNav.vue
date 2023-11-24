<!--
 * @Author: yosong
 * @Date: 2023-11-23 11:08:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-24 15:10:21
 * @FilePath: \yo-vue-admin\src\views\home\work\cpns\quickNav.vue
-->
<template>
  <el-card class="project">
    <template #header>
      <div class="header">
        <span>快捷导航</span>
      </div>
    </template>
    <el-skeleton :rows="5" animated :loading="loading" />
    <el-row v-show="!loading">
      <template v-for="it in 6" :key="it">
        <el-col :lg="8" :md="12" :sm="8">
          <el-card class="item" shadow="hover">
            <IconHome />
            <span>首页</span>
          </el-card>
        </el-col>
      </template>
    </el-row>
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
.item {
  border-radius: 0 !important;
  border: 0 !important;
  box-shadow:
    1px 0 0 0 #f0f0f0,
    0 1px 0 0 #f0f0f0,
    1px 1px 0 0 #f0f0f0,
    1px 0 0 0 #f0f0f0 inset,
    0 1px 0 0 #f0f0f0 inset;
  :deep(.el-card__body) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: small;
    svg {
      height: 40px;
      margin-bottom: 10px;
    }
  }
}
</style>
