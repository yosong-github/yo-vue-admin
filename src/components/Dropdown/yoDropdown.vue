<!--
 * @Author: yosong
 * @Date: 2023-11-15 17:03:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 16:01:39
 * @FilePath: \yo-vue-admin\src\components\Dropdown\yoDropdown.vue
-->
<!--
 * @Author: yosong
 * @Date: 2023-11-13 11:06:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 15:53:20
 * @FilePath: \yo-vue-admin\src\components\Dropdown\yoDropdown.vue
-->
<template>
  <div>
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
              <el-dropdown-item :icon="item.icon" :command="item.command" :disabled="item.disabled" :divided="item.divided"
                >{{ !item.i18n ? item.title : $t(item.title as string) }}
              </el-dropdown-item>
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

      <span v-else class="title">{{ !i18n ? title : $t(title) }}</span>
    </template>
  </div>
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
