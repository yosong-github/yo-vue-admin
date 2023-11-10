<!--
 * @Author: yosong
 * @Date: 2023-11-10 16:25:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 17:52:12
 * @FilePath: \yo-vue-admin\src\layouts\layoutClassical\index.vue
-->
<!-- 经典布局 -->
<template>
  <el-container class="layout">
    <el-aside width="200px">
      <div class="logo flx-center">
        <img src="@/assets/images/logo.svg" alt="logo" />
        <span class="logo-text">yo-admin</span>
      </div>
      <el-scrollbar>
        <el-menu :router="false" :collapse="false" :collapse-transition="false" :unique-opened="true">
          <SubMenu :menu-list="menuList" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><Main /></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Main from '@/layouts/components/Main/main.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import { useUserStore } from '@/stores/modules/user'

const { getMenuList } = useUserStore()

const menuList = computed(() => getMenuList())
</script>

<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    .logo {
      height: 55px;
      display: flex;
      align-items: center;
      border-right: solid 1px var(--el-menu-border-color);
      > img {
        width: 28px;
        margin-right: 10px;
      }
      > span {
        font-size: 21.5px;
        font-weight: bold;
        color: var(--el-aside-logo-text-color);
        white-space: nowrap;
      }
    }
    .el-scrollbar {
      height: calc(100% - 55px);
      :deep(.el-scrollbar__wrap > .el-scrollbar__view) {
        height: 100%;
      }
      .el-menu {
        height: 100%;
      }
    }
  }
}
</style>
