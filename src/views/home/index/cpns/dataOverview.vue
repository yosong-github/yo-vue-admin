<template>
  <el-row :gutter="10">
    <template v-for="(it, index) in 4" :key="it">
      <el-col :sm="24" :md="12" :lg="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>{{ dataOverview[index] ? dataOverview[index].title : 'xxx' }}</span>
              <el-tag class="ml-2" type="success">月</el-tag>
            </div>
          </template>
          <div class="card-content">
            <el-skeleton v-if="!dataOverview[index]" animated>
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
            <div v-else>
              <div class="current">
                <span>{{ dataOverview[index].current }}</span>
                <component :is="dataOverview[index].cpn" />
              </div>
              <div class="all">
                <span>总访问数</span>
                <span>{{ dataOverview[index].all }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </template>
  </el-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const dataOverview = ref<
  {
    current: string
    cpn: string
    all: string
    title: string
  }[]
>([])

onMounted(() => {
  setTimeout(
    () => {
      dataOverview.value = [
        { current: '$100.200', cpn: 'IconVisitCount', all: '$2341200.200', title: '访问数' },
        { current: '$120.200', cpn: 'IconTotalSales', all: '$143200.200', title: '成交额' },
        { current: '$13420.200', cpn: 'IconDow', all: '$231200.200', title: '下载数' },
        { current: '$234200.200', cpn: 'IconTransaction', all: '$1223400.200', title: '成交数' }
      ]
    },
    Math.floor(Math.random() * 2001) + 1000
  )
})
</script>

<style lang="scss" scoped>
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
  .card-content {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > div {
        width: 90%;
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .current {
      height: 70%;
      font-size: 24px;
      > svg {
        width: 40px;
      }
    }
    .all {
      font-size: small;
    }
  }
}
</style>
