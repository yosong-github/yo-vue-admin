<!--
 * @Author: yosong
 * @Date: 2023-11-13 10:00:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 14:51:59
 * @FilePath: \yo-vue-admin\src\layouts\components\HeaderLeft\cpns\breadcrumb.vue
-->
<template>
  <div class="breadcrumbBox">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="it in list" :key="it.path">
        <el-breadcrumb-item :to="{ path: it.redirect ?? it.path }">
          <div>
            <el-icon v-if="isbreadcumbIcon">
              <component :is="it.meta.icon"></component>
            </el-icon>
            <span>{{ $t(it.meta.title) }}</span>
          </div>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/modules/user'
import { useGlobalStore } from '@/stores/modules/global'
import type { menuList } from '@/stores/interface'
import { watchEffect } from 'vue'

const route = useRoute()
const { authMenuList } = storeToRefs(useUserStore())
const { isbreadcumbIcon } = storeToRefs(useGlobalStore())

const list = ref<menuList[]>([])

// 获取所有的面包屑
const getAllBreadcrumbList = (
  menuList: menuList[],
  parent = [],
  result: { [key: string]: any } = {}
) => {
  for (const item of menuList) {
    result[item.path] = [...parent, item]

    if (item.children)
      getAllBreadcrumbList(item.children, result[item.path], result)
  }
  return result
}

watchEffect(() => {
  const allList = getAllBreadcrumbList(authMenuList.value)
  list.value = allList[route.matched[route.matched.length - 1].path]
  // if (route.fullPath != import.meta.env.VITE_DEFAULT_HOPME_PATH) list.value.unshift(allList[import.meta.env.VITE_DEFAULT_HOPME_PATH][1])
})
</script>

<style lang="scss" scoped>
.breadcrumbBox {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  padding-right: 50px;
  mask-image: linear-gradient(
    90deg,
    #000000 0%,
    #000000 calc(100% - 50px),
    transparent
  );
  .el-breadcrumb {
    display: flex;
    div {
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
