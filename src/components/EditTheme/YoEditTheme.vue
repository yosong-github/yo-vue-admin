<!--
 * @Author: yosong
 * @Date: 2023-11-16 10:18:27
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 15:44:02
 * @FilePath: \yo-vue-admin\src\components\EditTheme\YoEditTheme.vue
-->
<template>
  <div class="yoEditTheme">
    <el-drawer
      v-model="editThemeState"
      :size="300"
      :title="$t('layout.edit.Page_configuration')"
    >
      <el-divider>
        <el-icon><star-filled /></el-icon>
        {{ $t('layout.edit.Layout_style') }}
      </el-divider>
      <div class="layoutList">
        <div
          class="item"
          :class="{ active: layoutType == 'classical' }"
          @click="layoutType = 'classical'"
        >
          <IconClassicallayout />
          <span>{{ $t('layout.edit.Classical_layout') }}</span>
        </div>
        <div
          class="item"
          :class="{ active: layoutType == 'colum' }"
          @click="layoutType = 'colum'"
        >
          <IconColumnarlayout />
          <span>{{ $t('layout.edit.Columnar_layout') }}</span>
        </div>
      </div>

      <el-divider>
        <el-icon><star-filled /></el-icon>
        {{ $t('layout.edit.Color_configuration') }}
      </el-divider>
      <div class="colorEdit">
        <div class="itme">
          <span>{{ $t('layout.edit.Subject_color') }}</span>
          <el-color-picker v-model="primaryColor" />
        </div>
        <div class="itme">
          <span>{{ $t('layout.edit.Night_pattern') }}</span>
          <el-switch
            v-model="theme"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
            inactive-value="light"
            active-value="dark"
            :active-icon="IconThemeLight"
            :inactive-icon="IconThemeDark"
          />
        </div>
        <div class="itme">
          <span>{{ $t('layout.edit.Grey_pattern') }}</span>
          <el-switch
            v-model="grayscale"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
          />
        </div>
      </div>

      <el-divider>
        <el-icon><star-filled /></el-icon>
        {{ $t('layout.edit.Interface_configuration') }}
      </el-divider>
      <div class="colorEdit">
        <div class="itme">
          <span>{{ $t('layout.edit.Menu_folding') }}</span>
          <el-switch
            v-model="isCollapse"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
          />
        </div>
        <div class="itme">
          <span>{{ $t('layout.edit.Accordion_menu') }}</span>
          <el-switch
            v-model="uniaueOpened"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
          />
        </div>
        <div class="itme">
          <span>{{ $t('layout.edit.Show_crumbs') }}</span>
          <el-switch
            v-model="isbreadcumb"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
          />
        </div>
        <div class="itme">
          <span>{{ $t('layout.edit.The_breadcrumb_icon_is_displayed') }}</span>
          <el-switch
            v-model="isbreadcumbIcon"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
          />
        </div>
        <div class="itme">
          <span>{{ $t('layout.edit.Display_label') }}</span>
          <el-switch
            v-model="isTabs"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
          />
        </div>
        <div class="itme">
          <span>{{ $t('layout.edit.Show_footer') }}</span>
          <el-switch
            v-model="isFooter"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
          />
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'
import IconThemeDark from '../icons/IconThemeDark.vue'
import IconThemeLight from '../icons/IconThemeLight.vue'

const {
  editThemeState,
  layoutType,
  theme,
  primaryColor,
  grayscale,
  isCollapse,
  uniaueOpened,
  isbreadcumb,
  isbreadcumbIcon,
  isTabs,
  isFooter
} = storeToRefs(useGlobalStore())
</script>

<style lang="scss" scoped>
.yoEditTheme {
  font-size: small;
  :deep(.el-drawer__header) {
    /* background-color: red !important; */
    margin: 0;
    padding-top: 10px;
  }
  .layoutList {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item {
      svg {
        margin-bottom: 20px;
      }
      border: 1px solid var(--el-menu-border-color);
      margin-bottom: 20px;
      cursor: pointer;
      text-align: center;
      padding: 10px;
      width: 40%;
      height: 120px;
    }
    .active {
      border: 2px solid var(--el-color-primary);
    }
  }
  .colorEdit {
    width: 100%;
    .itme {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
  }
}
</style>
