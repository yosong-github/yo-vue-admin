<!--
 * @Author: yosong
 * @Date: 2023-11-23 11:04:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-24 15:11:04
 * @FilePath: \yo-vue-admin\src\views\home\work\cpns\project.vue
-->
<template>
  <el-card class="project">
    <template #header>
      <div class="header">
        <span>项目</span>
        <span class="more">更多</span>
      </div>
    </template>
    <el-skeleton :rows="5" animated :loading="loading" />
    <el-row v-show="!loading">
      <template v-for="it in 6" :key="it">
        <el-col :lg="8" :md="24">
          <el-card class="item" shadow="hover">
            <div class="title">Vue</div>
            <div class="content">即使天无雨天,我亦留此地</div>
            <div class="footer">
              <span>芜湖</span>
              <span>2013.2.4</span>
            </div>
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .more {
    color: var(--el-color-primary);
    font-size: small;
    cursor: pointer;
  }
}
.item {
  border-radius: 0 !important;
  border: 0 !important;
  box-shadow:
    1px 0 0 0 #f0f0f0,
    0 1px 0 0 #f0f0f0,
    1px 1px 0 0 #f0f0f0,
    1px 0 0 0 #f0f0f0 inset,
    0 1px 0 0 #f0f0f0 inset;
  .title,
  .content {
    margin-bottom: 20px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
  }
  .content,
  .footer {
    font-size: small;
    color: var(--el-color-info-light-3);
  }
}
</style>
