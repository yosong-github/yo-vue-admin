<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <template v-for="it in list" :key="it.path">
      <el-breadcrumb-item :to="{ path: it.redirect ?? it.path }">
        <div>
          <el-icon>
            <component :is="it.meta.icon"></component>
          </el-icon>
          <span>{{ it.meta.title }}</span>
        </div>
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/modules/user'
import type { menuList } from '@/stores/interface'
import { watchEffect } from 'vue'

const route = useRoute()
const { authMenuList } = storeToRefs(useUserStore())

const list = ref<menuList[]>([])

// 获取所有的面包屑
const getAllBreadcrumbList = (menuList: menuList[], parent = [], result: { [key: string]: any } = {}) => {
  for (const item of menuList) {
    result[item.path] = [...parent, item]

    if (item.children) getAllBreadcrumbList(item.children, result[item.path], result)
  }
  return result
}

watchEffect(() => {
  const allList = getAllBreadcrumbList(authMenuList.value)
  list.value = allList[route.matched[route.matched.length - 1].path]
  if (route.fullPath != import.meta.env.VITE_DEFAULT_HOPME_PATH) list.value.unshift(...allList[import.meta.env.VITE_DEFAULT_HOPME_PATH])
})
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
}
</style>
