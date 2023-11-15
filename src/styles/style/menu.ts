/*
 * @Author: yosong
 * @Date: 2023-11-10 17:26:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-15 10:46:05
 * @FilePath: \yo-vue-admin\src\styles\style\menu.ts
 */
export const menuTheme: {
  light: { [string: string]: string }
  dark: { [string: string]: string }
} = {
  // 白天
  light: {
    // 菜单背景(包括框架的侧边栏，顶部与底部)
    '--el-menu-bg-color': '#ffffff',
    // 菜单鼠标悬浮背景
    '--el-menu-hover-bg-color': '#dddddd',
    // 边框(包括框架的侧边栏，顶部与底部)
    '--el-menu-border-color': '#dcdfe6',
    // 菜单选中背景
    '--el-menu-active-bg-color': '#a8e1e37d',
    '----el-menu-bg-min-color': '#cdcccc00',
    // 选中菜单字体颜色
    '--el-menu-active-text-color': '#117376',
    // 选中菜单左侧图标颜色
    '--el-menu-active-after-color': '#117376',
    // 菜单字体颜色
    '--el-menu-text-color': '#000000'
  },
  // 黑暗
  dark: {
    // 菜单背景(包括框架的侧边栏，顶部与底部)
    '--el-menu-bg-color': '#141414',
    // 菜单鼠标悬浮背景
    '--el-menu-hover-bg-color': '#000000',
    // 边框(包括框架的侧边栏，顶部与底部)
    '--el-menu-border-color': '#414243',
    // 菜单选中背景
    '--el-menu-active-bg-color': '#000000',
    '--el-menu-bg-min-color': '#cdcccc00',
    // 选中菜单字体颜色
    '--el-menu-active-text-color': '#fff',
    // 选中菜单左侧图标颜色
    '--el-menu-active-after-color': '#117376',
    // 菜单字体颜色
    '--el-menu-text-color': '#fff'
  }
}
