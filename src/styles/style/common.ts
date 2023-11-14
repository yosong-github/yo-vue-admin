/*
 * @Author: yosong
 * @Date: 2023-11-10 17:26:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-14 17:38:06
 * @FilePath: \yo-vue-admin\src\styles\style\common.ts
 */
export const commonTheme: {
  light: { [string: string]: string }
  dark: { [string: string]: string }
} = {
  // 白天
  light: {
    // 主要内容边框颜色
    '--el-border-color-light': '#dcdfe6',
    // 主要内容背景色
    '--el-bg-color-page': '#f2f3f5',
    // 主要颜色
    '--el-color-primary': '#117376',
    // 主要颜色的hover效果
    '--el-color-primary-light-3': '#199b9f',
    // 主要背景色
    '--common-bg-color': '#ffffff',
    // 主要边框颜色
    '--common-border-color': '#dcdfe6',
    '--el-tabs-close-hover-bg-color': 'var(--el-color-danger)'
  },
  // 黑暗
  dark: {
    // 主要内容边框颜色
    '--el-border-color-light': '#dcdfe6',
    // 主要内容背景色
    '--el-bg-color-page': '#000000',
    // 主要颜色
    '--el-color-primary': '#117376',
    // 主要颜色的hover效果
    '--el-color-primary-light-3': '#199b9f',
    // 主要背景色
    '--common-bg-color': '#141414',
    // 主要边框颜色
    '--common-border-color': '#414243',
    '--el-tabs-close-hover-bg-color': 'var(--el-color-danger-light-3)'
  }
}