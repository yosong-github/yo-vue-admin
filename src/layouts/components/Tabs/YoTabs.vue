<!--
 * @Author: yosong
 * @Date: 2023-11-14 14:20:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-17 21:50:08
 * @FilePath: \yo-vue-admin\src\layouts\components\Tabs\YoTabs.vue
-->
<template>
  <div class="yoTabs">
    <yo-dropdown
      v-if="showArrow"
      class="arrow"
      header-cpn="ArrowLeft"
      :items="[]"
      :bind-obj="{}"
      @handle-command="right"
    />
    <div ref="tabsList" class="list">
      <div class="listContent">
        <template v-for="it in historyTabs" :key="it.path">
          <div class="item" @click="$router.push(it.path)">
            <span :class="{ active: it.path === $route.path }">{{
              $t(it.title)
            }}</span>
            <el-icon v-if="!it.noDel" type="delete" @click.stop="del(it)"
              ><Close
            /></el-icon>
          </div>
        </template>
      </div>
    </div>
    <yo-dropdown
      v-if="showArrow"
      class="arrow"
      header-cpn="ArrowRight"
      :items="[]"
      :bind-obj="{}"
      @handle-command="left"
    />
    <div class="edit">
      <!-- trigger="hover" -->
      <yo-dropdown
        header-cpn="Grid"
        :items="[
          {
            title: $t('layout.tabs.full'),
            command: 'FullScreen',
            icon: 'FullScreen'
          },
          {
            title: $t('layout.tabs.c_current'),
            command: 'RemoveCurrent',
            divided: true,
            icon: 'CloseBold'
          },
          {
            title: $t('layout.tabs.c_l'),
            command: 'RemoveLeft',
            icon: 'DArrowLeft'
          },
          {
            title: $t('layout.tabs.c_r'),
            command: 'RemoveRight',
            icon: 'DArrowRight'
          },
          {
            title: $t('layout.tabs.c_other'),
            command: 'RemoveOther',
            divided: true,
            icon: 'Remove'
          },
          {
            title: $t('layout.tabs.c_all'),
            command: 'RemoveAll',
            icon: 'CircleCloseFilled'
          }
        ]"
        @handle-command="tabsEvn"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import yoDropdown from '@/components/Dropdown/yoDropdown.vue'
import { onMounted } from 'vue'
import { onUnmounted } from 'vue'
import { useUserStore } from '@/stores/modules/user'
import { storeToRefs } from 'pinia'
import type { historyTabs as historyTabsType } from '@/stores/interface/index'
import { useRoute, useRouter } from 'vue-router'

const { historyTabs } = storeToRefs(useUserStore())
const {
  deleteHistoryTabs,
  deleteHistoryTabsL,
  deleteHistoryTabsR,
  deleteOtherTabs,
  deleteAllTabs
} = useUserStore()

const route = useRoute()
const router = useRouter()

// tabsdom对象
const tabsList = ref<HTMLDivElement | null>(null)

// 判断箭头是否可用
const showArrow = ref(false)

// 删除item
const del = (it: historyTabsType) => {
  deleteHistoryTabs(it.path)
  if (it.path === route.path) {
    router.push(historyTabs.value[historyTabs.value.length - 1].path)
  }
}

// 移动的距离
const x = ref(0)

// 监听最外层元素大小变化
const resizeObserver = new ResizeObserver(entries => {
  if (!(tabsList.value?.lastChild as HTMLDivElement)) return
  if (!tabsList.value) return

  // 改变屏幕大小时，重置移动位置
  if (x.value != 0) {
    x.value = 0
    ;(
      tabsList.value.lastChild! as HTMLDivElement
    ).style.transform = `translateX(-${x.value}px)`
  }

  if (
    entries[0].contentRect.width <
    (tabsList.value?.lastChild as HTMLDivElement).offsetWidth
  ) {
    showArrow.value = true
  } else {
    showArrow.value = false
  }
})
// 箭头itme列表长度的变化
const resizeObserverForItem = new ResizeObserver(entries => {
  if (!(tabsList.value as HTMLDivElement)) return
  if (
    entries[0].contentRect.width >
    (tabsList.value as HTMLDivElement).offsetWidth
  ) {
    showArrow.value = true
  } else {
    showArrow.value = false
  }
})
// 判断是否需要显示箭头
onMounted(() => {
  if (tabsList.value) {
    resizeObserver.observe(tabsList.value! as HTMLDivElement)
    resizeObserverForItem.observe(tabsList.value?.lastChild as HTMLDivElement)
  }
})

// 销毁时取消监听
onUnmounted(() => {
  if (!tabsList.value) return
  if (!tabsList.value.lastChild) return
  resizeObserver.unobserve(tabsList.value! as HTMLDivElement)
  resizeObserverForItem.unobserve(tabsList.value!.lastChild! as HTMLDivElement)
})

// 箭头点击移动
const left = () => {
  if (!tabsList.value) return
  if (
    x.value + tabsList.value.offsetWidth! >=
    (tabsList.value.lastChild! as HTMLDivElement).offsetWidth -
      tabsList.value.offsetWidth
  ) {
    x.value =
      (tabsList.value.lastChild! as HTMLDivElement).offsetWidth -
      tabsList.value.offsetWidth
  } else {
    x.value += tabsList.value.offsetWidth
  }
  ;(
    tabsList.value.lastChild! as HTMLDivElement
  ).style.transform = `translateX(-${x.value}px)`
}

// 箭头点击移动
const right = () => {
  if (!tabsList.value) return
  if (x.value <= 0 || x.value - tabsList.value.offsetWidth <= 0) {
    x.value = 0
  } else {
    x.value -= tabsList.value.offsetWidth
  }
  ;(
    tabsList.value.lastChild! as HTMLDivElement
  ).style.transform = `translateX(-${x.value}px)`
}

// tbs功能事件
const tabsEvn = (type: string) => {
  switch (type) {
    case 'FullScreen':
      document.querySelector('#app')!.setAttribute('class', 'fullScreen')
      break
    case 'RemoveCurrent':
      deleteHistoryTabs(route.path)
      router.push(historyTabs.value[historyTabs.value.length - 1].path)
      break
    case 'RemoveLeft':
      deleteHistoryTabsL(route.path)
      break
    case 'RemoveRight':
      deleteHistoryTabsR(route.path)
      break
    case 'RemoveOther':
      deleteOtherTabs(route.path)
      break
    case 'RemoveAll':
      deleteAllTabs()
      router.push(historyTabs.value[historyTabs.value.length - 1].path)
      break
    default:
      break
  }
}
</script>

<style lang="scss" scoped>
.yoTabs {
  border-bottom: 1px solid var(--el-menu-border-color);
  background-color: var(--el-menu-bg-color);
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :deep(.el-dropdown) {
    font-size: 16px;
  }
  .list {
    padding: 5px 0;
    display: flex;
    height: 100%;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    .listContent {
      display: flex;
      width: max-content;
      transition: transform 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
      .item {
        display: flex;
        justify-content: space-between;
        height: 100%;
        align-items: center;
        border-right: 1px solid var(--el-menu-border-color);
        padding: 0 10px;
        text-align: center;
        cursor: pointer;
        font-size: small;
        &:hover {
          background-color: var(--el-menu-hover-bg-color);
        }
        .active {
          color: var(--el-color-primary);
        }
        .el-icon {
          padding: 2px;
          margin-left: 10px;
          &:hover {
            border-radius: 50%;
            background-color: var(--el-tabs-close-hover-bg-color);
          }
        }
      }
    }
  }
  .edit {
    width: 50px;
    text-align: center;
  }
}
</style>
