/*
 * @Author: yosong
 * @Date: 2023-11-10 17:26:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 17:51:19
 * @FilePath: \yo-vue-admin\src\styles\style\menu.ts
 */
export const menuTheme: {
  light: { [string: string]: string }
  dark: { [string: string]: string }
} = {
  // 白天
  light: {
    '--el-menu-bg-color': '#ffffff', // 背景
    '--el-menu-hover-bg-color': '#dddddd', // 鼠标悬浮背景
    '--el-menu-border-color': '#dcdfe6' // 边框
  },
  // 黑暗
  dark: {
    '--el-menu-bg-color': '#141414',
    '--el-menu-hover-bg-color': '#000000',
    '--el-menu-active-bg-color': '#000000',
    '--el-menu-text-color': '#bdbdc0',
    '--el-menu-active-color': '#ffffff',
    '--el-menu-hover-text-color': '#ffffff',
    '--el-menu-horizontal-sub-item-height': '50px'
  }
}
