<!--
 * @Author: yosong
 * @Date: 2023-11-10 11:35:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-17 17:42:33
 * @FilePath: \yo-vue-admin\src\views\home\index.vue
-->
<template>
  <div class="home">
    <el-row :gutter="10">
      <el-col :sm="24" :md="12" :lg="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>访问数</span>
              <el-tag class="ml-2" type="success">月</el-tag>
            </div>
          </template>
          <div style="height: 100px">
            <el-skeleton animated>
              <template #template>
                <div style="display: flex; justify-content: space-between">
                  <el-skeleton-item variant="p" style="width: 45%; height: 70px" />
                  <el-skeleton-item variant="p" style="width: 45%; height: 70px" />
                </div>
                <div style="display: flex; justify-content: space-between">
                  <el-skeleton-item variant="p" style="width: 45%; height: 20px; margin-top: 10px" />
                  <el-skeleton-item variant="p" style="width: 45%; height: 20px; margin-top: 10px" />
                </div>
              </template>
            </el-skeleton>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="12" :lg="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>访问数</span>
              <el-tag class="ml-2" type="success">月</el-tag>
            </div>
          </template>
          <div style="height: 100px">
            <el-skeleton animated>
              <template #template>
                <div style="display: flex; justify-content: space-between">
                  <el-skeleton-item variant="p" style="width: 45%; height: 70px" />
                  <el-skeleton-item variant="p" style="width: 45%; height: 70px" />
                </div>
                <div style="display: flex; justify-content: space-between">
                  <el-skeleton-item variant="p" style="width: 45%; height: 20px; margin-top: 10px" />
                  <el-skeleton-item variant="p" style="width: 45%; height: 20px; margin-top: 10px" />
                </div>
              </template>
            </el-skeleton>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="12" :lg="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>访问数</span>
              <el-tag class="ml-2" type="success">月</el-tag>
            </div>
          </template>
          <div style="height: 100px">
            <el-skeleton animated>
              <template #template>
                <div style="display: flex; justify-content: space-between">
                  <el-skeleton-item variant="p" style="width: 45%; height: 70px" />
                  <el-skeleton-item variant="p" style="width: 45%; height: 70px" />
                </div>
                <div style="display: flex; justify-content: space-between">
                  <el-skeleton-item variant="p" style="width: 45%; height: 20px; margin-top: 10px" />
                  <el-skeleton-item variant="p" style="width: 45%; height: 20px; margin-top: 10px" />
                </div>
              </template>
            </el-skeleton>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="12" :lg="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>访问数</span>
              <el-tag class="ml-2" type="success">月</el-tag>
            </div>
          </template>
          <div style="height: 100px">
            <el-skeleton animated>
              <template #template>
                <div style="display: flex; justify-content: space-between">
                  <el-skeleton-item variant="p" style="width: 45%; height: 70px" />
                  <el-skeleton-item variant="p" style="width: 45%; height: 70px" />
                </div>
                <div style="display: flex; justify-content: space-between">
                  <el-skeleton-item variant="p" style="width: 45%; height: 20px; margin-top: 10px" />
                  <el-skeleton-item variant="p" style="width: 45%; height: 20px; margin-top: 10px" />
                </div>
              </template>
            </el-skeleton>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-tabs type="border-card">
          <el-tab-pane label="用户">
            <ECharts ref="echarts1" :option="option" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <el-row :gutter="10" style="margin-top: 10px">
      <el-col :sm="24" :md="8" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>访问数</span>
            </div>
          </template>
          <div style="height: 400px">
            <ECharts ref="echarts2" :option="option2" />
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
            <ECharts ref="echarts2" :option="option4" />
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
            <ECharts ref="echarts2" :option="option3" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import ECharts from '@/components/ECharts/index.vue'
import type { ECOption } from '@/components/ECharts/config'
// import type { ECElementEvent } from 'echarts/core'

const option: ECOption = {
  title: {
    text: '用户数量',
    textStyle: { color: '#666', fontSize: 14, fontWeight: 'normal' },
    padding: [5, 0, 0, 0]
  },
  legend: {
    type: 'plain',
    top: 0,
    right: 20,
    itemGap: 64,
    itemWidth: 10,
    icon: 'circle',
    selectedMode: false,
    textStyle: { padding: [0, 0, 0, 4] },
    data: ['新增登记', '完成服务']
  },
  grid: { left: 0, top: 40, bottom: 0, right: 0, containLabel: true },
  xAxis: {
    type: 'category',
    data: [
      '12-26',
      '12-27',
      '12-28',
      '12-29',
      '12-30',
      '12-31',
      '01-01',
      '01-02',
      '01-03',
      '01-04',
      '01-05',
      '01-06',
      '01-07',
      '01-08',
      '01-09'
    ],
    axisLine: { lineStyle: { color: '#ccc' } },
    axisTick: { length: 3 },
    axisLabel: { color: '#999' }
  },
  yAxis: {
    type: 'value',
    axisLine: { show: true, lineStyle: { color: '#ccc' } },
    axisLabel: { color: '#999' },
    splitLine: { show: false }
  },
  tooltip: {
    trigger: 'axis',
    padding: [12, 17, 20, 23],
    textStyle: { color: '#424242' },
    renderMode: 'html',
    className: 'tooltip'
  },
  series: [
    {
      name: '新增登记',
      type: 'line',
      data: [0, 10, 2, 4, 4, 7, 0, 0, 0, 3, 0, 9, 6, 0, 0],
      smooth: true, // 平滑曲线
      showSymbol: false,
      itemStyle: { color: '#126EFC' },
      lineStyle: { width: 3, color: '#126EFC' },
      areaStyle: { color: 'rgba(0, 110, 254, 0.1)' }
    },
    {
      name: '完成服务',
      type: 'line',
      data: [0, 0, 0, 5, 0, 2, 0, 0, 0, 2, 0, 4, 1, 0, 0],
      smooth: true,
      showSymbol: false,
      itemStyle: { color: '#1BB389' },
      lineStyle: { width: 3, color: '#1BB389' },
      areaStyle: { color: 'rgba(27, 179, 137, 0.1)' }
    }
  ]
}
const option2: ECOption = {
  color: [
    '#C1232B',
    '#FF6347',
    '#E87C25',
    '#60C0DD',
    '#27727B',
    '#FE8463',
    '#228B22',
    '#6A5ACD',
    '#8A2BE2',
    '#D7504B',
    '#EE3A8C',
    '#FF4500',
    '#F0805A',
    '#26C0C0'
  ],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  toolbox: {
    show: true
  },
  legend: {
    orient: 'horizontal',
    y: 'bottom',
    top: 'bottom',
    textStyle: {
      color: '#8C8C8C'
    },
    height: 150
  },
  series: [
    {
      name: '在线巡查问题',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '40%'],
      data: [
        { value: 23, name: '戴口罩问题' },
        { value: 25, name: '存在安全隐患' },
        { value: 27, name: '看手机行为' },
        { value: 55, name: '有外来人员' },
        { value: 70, name: '看护不到位' },
        { value: 55, name: '着装和操作不规范' },
        { value: 35, name: '活动设施不足' }
      ]
    }
  ]
}
const option3: ECOption = {
  legend: {
    top: 'bottom'
  },
  series: [
    {
      name: '年龄段分析',
      type: 'pie',
      radius: [50, 110],
      center: ['50%', '40%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: '40岁' },
        { value: 38, name: '50岁' },
        { value: 32, name: '60岁' },
        { value: 30, name: '70岁' },
        { value: 28, name: '80岁' },
        { value: 26, name: '90岁' },
        { value: 22, name: '100岁' },
        { value: 18, name: '100岁以上' }
      ]
    }
  ]
}
const option4: ECOption = {
  tooltip: {
    show: false
  },
  legend: {
    show: false
  },
  toolbox: {
    show: false
  },
  series: {
    name: '',
    type: 'pie',
    radius: [120, 130],
    itemStyle: {
      color: '#00ffff'
    },
    data: [
      { value: 10, name: '金', itemStyle: { borderWidth: 10, color: 'rgba(51, 67, 190, 1)' } },
      {
        value: 1,
        name: '',
        itemStyle: {
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      },
      { value: 15, name: '木', itemStyle: { borderWidth: 10, color: 'rgba(129, 213, 250, 1)' } },
      {
        value: 1,
        name: '',
        itemStyle: {
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      },
      { value: 50, name: '水', itemStyle: { borderWidth: 10, color: 'rgba(56, 164, 252, 1)' } },
      {
        value: 1,
        name: '',
        itemStyle: {
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      },
      { value: 46, name: '火', itemStyle: { borderWidth: 10, color: 'rgba(46, 201, 163, 1)' } },
      {
        value: 1,
        name: '',
        itemStyle: {
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      },
      { value: 10, name: '土', itemStyle: { borderWidth: 10, color: 'rgba(72, 203, 82, 1)' } },
      {
        value: 1,
        name: '',
        itemStyle: {
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      },
      { value: 10, name: '德', itemStyle: { borderWidth: 10, color: 'rgba(208,210,202,1)' } },
      {
        value: 1,
        name: '',
        itemStyle: {
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
    ]
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  .el-card {
    margin-bottom: 10px;
    :deep(.el-card__header) {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      > span {
        font-weight: 600;
        font-size: small;
      }
    }
  }
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
