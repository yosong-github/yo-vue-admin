<!--
 * @Author: yosong
 * @Date: 2023-11-13 11:06:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-13 17:31:18
 * @FilePath: \yo-vue-admin\src\components\Dropdown\yoDropdown.vue
-->
<template>
  <template v-if="items.length != 0">
    <el-dropdown :trigger="trigger" @command="emit('handleCommand', $event)">
      <span v-if="!title" class="el-dropdown-link">
        <el-icon v-if="!bindObj">
          <component :is="headerCpn"></component>
        </el-icon>
        <component :is="headerCpn" v-else v-bind="bindObj"></component>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <template v-for="item in items" :key="item.command">
            <el-dropdown-item :command="item.command" :disabled="item.disabled">{{ item.title }} {{ item.disabled }}</el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </template>
  <template v-else>
    <span v-if="!title" class="el-dropdown" @click="emit('handleCommand', '')">
      <el-icon>
        <component :is="headerCpn"></component>
      </el-icon>
    </span>

    <span v-else class="title">{{ title }}</span>
  </template>
</template>

<script setup lang="ts">
import type { yoDropdwonType } from './type'

withDefaults(defineProps<yoDropdwonType>(), {
  trigger: 'click'
})

const emit = defineEmits<{
  handleCommand: [id: any] // 具名元组语法
}>()
</script>

<style lang="scss" scoped>
.el-dropdown {
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;
}
.title {
  margin-left: 10px;
}
</style>
