/*
 * @Author: yosong
 * @Date: 2023-11-21 10:16:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 15:06:37
 * @FilePath: \yo-vue-admin\src\stores\interface\index.ts
 */
export interface MetaProps {
  // 图标
  icon: string
  // 标题
  title: string
  // 外部链接
  isLink?: string
  // 是否隐藏
  isHide?: boolean
  // 全屏
  isFull?: boolean
  //
  isAffix?: boolean
  // 缓存
  isKeepAlive?: boolean
  // 内容无边距
  isNoPadding?: boolean
}

export interface menuList {
  path: string
  name: string
  component?: string | (() => Promise<unknown>)
  redirect?: string
  meta: MetaProps
  children?: menuList[]
}

export interface historyTabs {
  path: string
  title: string
  noDel?: boolean
}
