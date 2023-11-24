<!--
 * @Author: yosong
 * @Date: 2023-11-23 11:09:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-24 15:08:48
 * @FilePath: \yo-vue-admin\src\views\home\work\cpns\statistics.vue
-->
<template>
  <el-card :body-style="{ height: '350px' }" class="statistics">
    <template #header>
      <div class="header">
        <span>统计</span>
      </div>
    </template>

    <el-skeleton :loading="!option" :rows="5" animated />
    <ECharts v-if="option" :option="option" />
  </el-card>
</template>

<script setup lang="ts">
import type { ECOption } from '@/components/ECharts/config'
import { onMounted } from 'vue'
import { ref } from 'vue'
const option = ref<ECOption>()

onMounted(() => {
  setTimeout(() => {
    option.value = {
      polar: {
        radius: ['10%', '50%']
      },
      angleAxis: {
        min: 0, //最小刻度
        max: 4, //最大刻度
        startAngle: 90,
        show: true
      },
      radiusAxis: {
        type: 'category',
        show: false
      },
      tooltip: {
        show: true
      },
      series: [
        {
          type: 'bar',
          name: '其他',
          data: [2],
          coordinateSystem: 'polar',
          roundCap: false,
          label: {
            show: true,
            position: 'middle'
            //   formatter: '{b}: {c}',
          }
        },
        {
          type: 'bar',
          name: '机械电子制造业',
          data: [1],
          coordinateSystem: 'polar',
          roundCap: false,
          label: {
            show: true,
            position: 'middle'
            //   formatter: '{b}: {c}',
          }
        },
        {
          type: 'bar',
          name: '资源加工工业',
          data: [3],
          coordinateSystem: 'polar',
          roundCap: false,
          label: {
            show: true,
            position: 'middle'
            //   formatter: '{b}: {c}',
          }
        },
        {
          type: 'bar',
          name: '轻纺工业',
          data: [4],
          coordinateSystem: 'polar',
          roundCap: false,
          label: {
            show: true,
            position: 'middle'
            //   formatter: '{b}: {c}',
          }
        }
      ],
      legend: {
        bottom: 6,
        icon: 'circle',
        itemHeight: 10,
        show: true,
        data: ['机械电子制造业', '轻纺工业', '资源加工工业', '其他'],

        textStyle: {
          color: 'var(--color-text-primary)'
        }
      }
    }
  }, 2000)
})
</script>

<style lang="scss" scoped></style>
