<!--
 * @Author: yosong
 * @Date: 2023-11-10 11:35:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-01-03 14:08:20
 * @FilePath: \yo-vue-admin\src\views\home\index\index.vue
-->
<template>
  <div class="home">
    <!-- 数据总览 -->
    <dataOverview />

    <!-- 用户趋势 -->
    <el-row style="margin-bottom: 10px">
      <el-col>
        <el-tabs type="border-card">
          <el-tab-pane label="用户">
            <el-skeleton v-if="!option" :rows="100" animated />
            <ECharts v-else ref="echarts1" :option="option" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <!-- 数据对比 -->
    <el-row :gutter="10">
      <el-col :sm="24" :md="8" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>访问数</span>
            </div>
          </template>
          <div style="height: 400px">
            <el-skeleton v-if="!option2" :rows="50" animated />
            <ECharts v-else ref="echarts2" :option="option2" />
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="8" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>访问数</span>
            </div>
          </template>
          <div style="height: 400px">
            <el-skeleton v-if="!option4" :rows="50" animated />
            <ECharts v-else ref="echarts2" :option="option4!" />
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="8" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>访问数</span>
            </div>
          </template>
          <div style="height: 400px">
            <el-skeleton v-if="!option3" :rows="50" animated />
            <ECharts v-else ref="echarts2" :option="option3!" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="tsx">
import ECharts from '@/components/ECharts/index.vue'
import type { ECOption } from '@/components/ECharts/config'
import { ref, onMounted, type Ref } from 'vue'
import dataOverview from './cpns/dataOverview.vue'
import { option_data, option2_data, option3_data, option4_data } from './data'

// import { ElMessageBox, ElForm, ElFormItem, ElInput } from 'element-plus'

// import type { ECElementEvent } from 'echarts/core'

const option: Ref<ECOption | null> = ref(null)
const option2: Ref<ECOption | null> = ref(null)
const option3: Ref<ECOption | null> = ref(null)
const option4: Ref<ECOption | null> = ref(null)

onMounted(() => {
  // ElMessageBox({
  //   type: 'info',
  //   // message: h('div', { class: 'home' }, '？？？？')
  //   message: () => <div>你好阿</div>
  // })
  setTimeout(
    () => {
      option.value = option_data
      option2.value = option2_data
      option3.value = option3_data
      option4.value = option4_data
    },
    Math.floor(Math.random() * 2001) + 1000
  )
})
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  .el-tabs {
    height: 400px;
    :deep(.el-tabs__content) {
      height: calc(100% - 40px - 30px);
      width: calc(100% - 30px);
      padding: 15px;
    }
    :deep(.el-tab-pane) {
      height: calc(100%);
      width: 100%;
    }
  }
}
</style>
