<!--
 * @Author: yosong
 * @Date: 2023-11-11 18:17:58
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-15 16:07:39
 * @FilePath: \yo-vue-admin\src\layouts\components\HeaderRight\index.vue
-->
<template>
  <div class="headerR">
    <template v-for="it in headerItem" :key="it.title">
      <yo-dropdown :title="it.title" :header-cpn="it.headerCpn" :items="it.items" :bind-obj="it.bindObj" @handle-command="it.cb" />
    </template>
  </div>
</template>

<script setup lang="ts">
import yoDropdown from '@/components/Dropdown/yoDropdown.vue'
import { headerItem } from './config/headerControlItem'
</script>

<style lang="scss" scoped>
.headerR {
  display: flex;
  align-items: center;
  .user-p,
  .user-name {
    margin-left: 10px;
  }
  .user-p {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>
