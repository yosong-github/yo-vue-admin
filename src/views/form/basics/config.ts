/*
 * @Author: yosong
 * @Date: 2023-11-27 15:42:53
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-27 17:45:49
 * @FilePath: \yo-vue-admin\src\views\form\basics\config.ts
 */
import type { FormItem } from '@/components/YoForm/type'
import {
  ElButton,
  ElCheckbox,
  ElCheckboxGroup,
  ElDatePicker,
  ElInput,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElRate,
  ElSelect,
  ElSlider,
  ElSwitch,
  ElUpload
} from 'element-plus'

export const item: { item: FormItem[]; colAttr?: any; rowAttr?: any }[] = [
  {
    colAttr: { lg: 8 },
    item: [
      {
        id: 'user',
        label: '字段1',
        value: '1',
        formType: ElInput,
        rules: [
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change']
          }
        ]
      },
      {
        id: 'pwd',
        label: '字段2',
        value: '111',
        formType: ElInput,
        attr: { class: { w50: false } }
      },
      {
        id: 'type',
        label: '字段3',
        value: '2',
        formType: ElSelect,
        attr: { clearable: true, placeholder: '请选择' },
        children: [
          { formType: ElOption, attr: { label: '选项1', value: '1' } },
          { formType: ElOption, attr: { label: '选项2', value: '2' } },
          { formType: ElOption, attr: { label: '选项3', value: '3' } }
        ]
      },
      {
        id: 'ra',
        label: '字段4',
        value: '2',
        formType: ElRadioGroup,
        children: [
          { formType: ElRadio, attr: { label: '单选1' } },
          { formType: ElRadio, attr: { label: '单选2' } },
          { formType: ElRadio, attr: { label: '单选3' } }
        ]
      },
      { id: 'sl', label: '字段5', value: 11, formType: ElSlider },
      {
        id: 'date',
        label: '字段6',
        value: '',
        attr: { placeholder: '请选择', type: 'date' },
        formType: ElDatePicker
      },
      {
        id: 'delivery',
        label: '字段7',
        value: '',
        attr: { placeholder: '请选择', type: 'date' },
        formType: ElSwitch
      },
      {
        id: 'checkBox',
        label: '字段8',
        value: [],
        attr: { placeholder: '请选择', type: 'date' },
        formType: ElCheckboxGroup,
        children: [
          { formType: ElCheckbox, attr: { label: '多选1' } },
          { formType: ElCheckbox, attr: { label: '多选2' } },
          { formType: ElCheckbox, attr: { label: '多选3' } }
        ]
      },
      { id: 'rate', label: '字段10', value: 0, formType: ElRate },
      {
        colAttr: { xl: 24 },
        id: 'file-list',
        label: '上传',
        value: [],
        formType: ElUpload,
        attr: { 'auto-upload': false, action: '/' },
        children: [
          {
            formType: ElButton,
            attr: { content: '上传文件', 'auto-upload': false, action: '/' }
          }
        ]
      },
      {
        id: 'are',
        label: '字段9',
        value: '',
        colAttr: { xl: 24 },
        formType: ElInput,
        attr: { type: 'textarea', rows: 15 }
      }
    ]
  }
]
