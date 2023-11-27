<!--
 * @Author: yosong
 * @Date: 2023-11-27 11:10:53
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-27 17:29:53
 * @FilePath: \yo-vue-admin\src\components\YoForm\YoForm.vue
-->
<template>
  <el-form ref="elFormRef" v-bind="$attrs" :model="form">
    <el-row v-for="row in formRow" v-bind="row.rowAttr" :key="row">
      <el-col
        v-for="it in row.item"
        v-bind="it.colAttr || row.colAttr"
        :key="it"
      >
        <el-form-item
          :key="it.id"
          :label="it.label"
          :rules="it.rules"
          :prop="it.id"
        >
          <component
            v-bind="it.attr"
            :is="it.formType"
            v-if="it.formType.name == 'ElUpload'"
            v-model:file-list="form[it.id]"
          >
            <template v-for="c in it.children" :key="c">
              <component
                v-bind="c.attr"
                :is="c.formType"
                v-if="c.attr.content"
                >{{ c.attr.content ?? null }}</component
              >
              <component v-bind="c.attr" :is="c.formType" v-else></component>
            </template>
          </component>
          <component
            v-bind="it.attr"
            :is="it.formType"
            v-else
            v-model="form[it.id]"
          >
            <template v-for="c in it.children" :key="c">
              <component
                v-bind="c.attr"
                :is="c.formType"
                v-if="c.attr.content"
                >{{ c.attr.content ?? null }}</component
              >
              <component v-bind="c.attr" :is="c.formType" v-else></component>
            </template>
          </component>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Props } from './type'

// el-form表单dom对象
const elFormRef = ref()
// 定义传入的属性
const props = withDefaults(defineProps<Props>(), {})

// 需要向外部暴露的表单对象
const form = reactive<any>({})
// 通过传入参数的formItem属性，初始化表单对象
props.formRow.forEach(it => {
  it.item.forEach(item => {
    form[item.id] = item.value
  })
})

// 向外暴露form对象
defineExpose({
  form,
  elFormRef
})
</script>

<style lang="scss" scoped></style>
