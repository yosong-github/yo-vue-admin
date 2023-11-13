<!--
 * @Author: yosong
 * @Date: 2023-11-10 22:38:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-13 10:14:37
 * @FilePath: \yo-vue-admin\src\layouts\components\Menu\SubMenu.vue
-->
<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children?.length" :index="subItem.path">
      <template #title>
        <el-icon v-if="subItem.meta.icon">
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <span class="title">{{ subItem.meta.title }}</span>
        <!-- <span class="title">{{ $t(subItem.meta.title) }}</span> -->
      </template>
      <SubMenu :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="subItem.path" @click="handleClickMenu(subItem)">
      <el-icon v-if="subItem.meta.icon">
        <component :is="subItem.meta.icon"></component>
      </el-icon>
      <template #title>
        <span class="title">{{ subItem.meta.title }}</span>
        <!-- <span class="title">{{ $t(subItem.meta.title) }}</span> -->
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { menuList as menuListType } from '@/stores/interface'

defineProps<{ menuList: menuListType[] }>()

const router = useRouter()
const handleClickMenu = (subItem: menuListType) => {
  if (subItem.meta.isLink) return window.open(subItem.meta.isLink, '_blank')
  router.push(subItem.path)
}
</script>

<style lang="scss">
.el-menu-item {
  color: var(--el-menu-text-color);
}
.el-menu-item.is-active {
  background-color: var(--el-menu-active-bg-color);
  color: var(--el-menu-active-text-color);
  position: relative;
  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 4px;
    background-color: var(--el-menu-active-after-color);
    position: absolute;
    left: 0;
  }
}
</style>
