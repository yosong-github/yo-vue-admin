export interface MetaProps {
  icon: string
  title: string
  activeMenu?: string
  isLink?: string
  isHide?: boolean
  isFull?: boolean
  isAffix?: boolean
  isKeepAlive?: boolean
}

export interface menuList {
  path: string
  name: string
  component?: string | (() => Promise<unknown>)
  redirect?: string
  meta: MetaProps
  children?: menuList[]
}
