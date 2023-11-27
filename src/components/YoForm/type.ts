/*
 * @Author: yosong
 * @Date: 2023-11-27 15:43:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-27 16:45:24
 * @FilePath: \yo-vue-admin\src\components\YoForm\type.ts
 */
import type { FormItemRule } from 'element-plus'
import type { Arrayable } from 'element-plus/lib/utils/typescript.js'

export type FormItem = {
  // 表单的label
  label: string
  // id唯一的而且是用于form的key
  id: number | string
  // 默认值
  value?: any
  // 表单项验证规则
  rules?: Arrayable<FormItemRule>
  // 表单类型
  formType: any
  // 表单项的子选项
  children?: Omit<FormItem, 'label' | 'id'>[]
  // 表单项的属性
  attr?: any
  // 单独的响应式布局
  colAttr?: any
}

export type formRow = { item: FormItem[]; colAttr?: any; rowAttr?: any }[]

export interface Props {
  // 表单项
  // formItem: FormItem[]
  formRow: formRow
}
