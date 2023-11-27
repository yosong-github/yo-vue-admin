<!--
 * @Author: yosong
 * @Date: 2023-11-17 10:55:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-21 10:18:17
 * @FilePath: \yo-vue-admin\src\components\ECharts\index.vue
-->
<template>
  <div ref="myEcharts" class="echarts" :style="echartsStyle"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { EChartsType, ECElementEvent } from 'echarts/core'
import echarts, { type ECOption } from './config'
import {
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  markRaw
} from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'

const {
  theme,
  isCollapse,
  uniaueOpened,
  isbreadcumb,
  isbreadcumbIcon,
  isTabs,
  isFooter
} = storeToRefs(useGlobalStore())

// 组件传参与默认值
const props = withDefaults(
  defineProps<{
    option: ECOption
    renderer?: 'canvas' | 'svg'
    resize?: boolean
    width?: number | string | null
    height?: number | string | null
    onClick?: (event: ECElementEvent) => any
  }>(),
  {
    renderer: 'canvas',
    resize: true,
    width: null,
    height: null,
    onClick: () => {}
  }
)
// 可接受自定义样式|默认百分比宽高比
const echartsStyle = computed(() => {
  return props.width || props.height
    ? { height: props.height + 'px', width: props.width + 'px' }
    : { height: '100%', width: '100%' }
})

// 要挂载的dom对象
const myEcharts = ref<HTMLDivElement | HTMLCanvasElement>()
// 图表的实例对象
const chartInstance = ref<EChartsType>()
// 画图
const draw = () => {
  if (chartInstance.value) {
    chartInstance.value.setOption(props.option, { notMerge: true })
  }
}
// 当props第二次改变后，需要从小set
watch(props, () => {
  draw()
})

// 初始化
const init = () => {
  if (!myEcharts.value) return
  chartInstance.value = echarts.getInstanceByDom(myEcharts.value)

  if (!chartInstance.value) {
    // 将数据不适用响应性
    chartInstance.value = markRaw(
      echarts.init(myEcharts.value, '', {
        renderer: props.renderer
      })
    )
    // 图表点击事件
    chartInstance.value.on(
      'click',
      (event: ECElementEvent) => props.onClick && props.onClick(event)
    )
    draw()
  }
}

// 屏幕大小改变需要重新刷新图标
const resize = () => {
  if (chartInstance.value && props.resize) {
    chartInstance.value.resize({ animation: { duration: 300 } })
  }
}
// 防抖
const debouncedResize = useDebounceFn(resize, 300, { maxWait: 800 })

// 页面布局改变，也需要刷新
watch(
  () => [
    theme.value,
    isCollapse.value,
    uniaueOpened.value,
    isbreadcumb.value,
    isbreadcumbIcon.value,
    isTabs.value,
    isFooter.value
  ],
  () => {
    debouncedResize()
  },
  { deep: true }
)

onMounted(() => {
  nextTick(() => init())
  window.addEventListener('resize', debouncedResize)
})

onBeforeUnmount(() => {
  chartInstance.value?.dispose()
  window.removeEventListener('resize', debouncedResize)
})

// 向外抛出指定对象
defineExpose({
  getInstance: () => chartInstance.value,
  resize,
  draw
})
</script>

<style lang="scss" scoped></style>
