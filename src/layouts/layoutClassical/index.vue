<!--
 * @Author: yosong
 * @Date: 2023-11-10 16:25:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 15:04:16
 * @FilePath: \yo-vue-admin\src\layouts\layoutClassical\index.vue
-->
<!-- 经典布局 -->
<template>
  <el-container class="layout">
    <el-aside class="aside" :width="isCollapse ? '64px' : '200px'">
      <div class="logo flx-center">
        <img src="@/assets/images/logo.svg" alt="logo" />
        <span v-show="!isCollapse" class="logo-text">yo-admin</span>
      </div>
      <el-scrollbar>
        <el-menu :router="false" :default-active="$route.path" :collapse="isCollapse" :unique-opened="uniaueOpened">
          <SubMenu :menu-list="menuList" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <div class="minAside" :style="{ left: isCollapse ? '-100vw' : '0px' }" @click.stop="isCollapse = !isCollapse">
      <el-aside :width="'200px'" @click.stop="() => {}">
        <div class="logo flx-center">
          <img src="@/assets/images/logo.svg" alt="logo" />
          <span class="logo-text">yo-admin</span>
        </div>
        <el-scrollbar>
          <el-menu :router="false" :default-active="$route.path" :unique-opened="uniaueOpened">
            <SubMenu :menu-list="menuList" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
    </div>
    <el-container>
      <el-header>
        <header-left></header-left>
        <header-right></header-right>
      </el-header>
      <yo-tabs v-if="isTabs" />
      <yo-full-screen></yo-full-screen>
      <el-main :class="{ full: $route.meta.isNoPadding }">
        <Main></Main>
      </el-main>
      <el-footer v-if="isFooter">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Main from '@/layouts/components/Main/main.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import { useUserStore } from '@/stores/modules/user'
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'
import headerLeft from '../components/HeaderLeft/index.vue'
import headerRight from '../components/HeaderRight/index.vue'
import YoFullScreen from '../components/FullScreen/YoFullScreen.vue'
import YoTabs from '../components/Tabs/YoTabs.vue'

const { getMenuList } = useUserStore()
const { isCollapse, uniaueOpened, isTabs, isFooter } = storeToRefs(useGlobalStore())

const menuList = computed(() => getMenuList())
</script>

<style scoped lang="scss">
@media screen and (max-width: 550px) {
  .minAside {
    display: block;
  }
  .aside {
    display: none;
  }
}
@media screen and (min-width: 550px) {
  .minAside {
    display: none;
  }
  .aside {
    display: block;
  }
}
.minAside {
  z-index: 999;
  background-color: var(--el-menu-bg-min-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: left 0.2s ease-in-out;
  > .el-aside {
    height: 100%;
  }
}
.layout {
  width: 100%;
  height: 100%;
  .el-aside {
    transition: width 0.3s;
    -webkit-transition: width 0.3s;
    -moz-transition: width 0.3s;
    -webkit-transition: width 0.3s;
    -o-transition: width 0.3s;
    .logo {
      height: 55px;
      display: flex;
      align-items: center;
      border-right: solid 1px var(--el-menu-border-color);
      background-color: var(--el-menu-bg-color);
      > img {
        width: 28px;
      }
      > span {
        margin-left: 10px;
        font-size: 21.5px;
        font-weight: bold;
        color: var(--el-menu-text-color);
        white-space: nowrap;
      }
    }
    .el-scrollbar {
      height: calc(100% - 55px);
      border-right: 1px solid var(--el-menu-border-color);
      :deep(.el-scrollbar__wrap > .el-scrollbar__view) {
        height: 100%;
      }
      .el-menu {
        height: 100%;
        border: 0 !important;
      }
    }
  }
  .el-container {
    .el-header {
      height: 55px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 1px var(--el-menu-border-color);
      background-color: var(--el-menu-bg-color);
      color: var(--el-menu-text-color);
      padding: 10px 12px;
    }
    .el-main {
      background-color: var(--el-bg-color-page);
      padding: 10px 12px;
    }
    .el-footer {
      height: 30px;
      border-top: solid 1px var(--el-menu-border-color);
      background-color: var(--el-menu-bg-color);
      color: var(--el-menu-text-color);
    }
  }
}
</style>
