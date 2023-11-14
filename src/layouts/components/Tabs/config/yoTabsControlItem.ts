/*
 * @Author: yosong
 * @Date: 2023-11-13 15:06:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-14 18:06:17
 * @FilePath: \yo-vue-admin\src\layouts\components\Tabs\config\yoTabsControlItem.ts
 */
import type { yoDropdwonType } from '@/components/Dropdown/type'
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'
import screenfull from 'screenfull'
import { ref, computed } from 'vue'

interface headerControlItemType extends yoDropdwonType {
  cb: (id: string) => void
}

// 全局配置
const { changeLanguage } = useGlobalStore()
// 语言
const { language } = storeToRefs(useGlobalStore())

// 是否是全屏
const isFullscreen = ref(screenfull.isFullscreen)
console.log(screenfull)

// 解决esc/刷新退出全屏的问题
screenfull.onchange(() => {
  if (screenfull.isFullscreen) isFullscreen.value = true
  else isFullscreen.value = false
})

// 顶部导航栏右侧按钮对象
export const headerItem = ref<headerControlItemType[]>([
  {
    headerCpn: 'Grid',
    cb: (language: string) => {
      changeLanguage(language)
    },
    items: [
      { command: 'zh', title: '中文', disabled: computed(() => language.value == 'zh') },
      { command: 'en', title: '英文', disabled: computed(() => language.value == 'en') }
    ]
  }
])
