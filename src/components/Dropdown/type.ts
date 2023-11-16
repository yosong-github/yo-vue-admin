import type { ComputedRef } from 'vue'

type yoDropdwonItems = {
  command: string | number
  title: string | number
  disabled?: ComputedRef<boolean> | boolean
  divided?: ComputedRef<boolean> | boolean
  icon?: string
  i18n?: boolean
}

type yoDropdwonType = {
  trigger?: 'click' | 'hover'
  i18n?: boolean
  headerCpn?: ComputedRef<string> | string
  title?: string
  items: yoDropdwonItems[]
  bindObj?: {
    [key: string]: any
  }
}

export type { yoDropdwonType, yoDropdwonItems }
