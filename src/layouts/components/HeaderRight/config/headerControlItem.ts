/*
 * @Author: yosong
 * @Date: 2023-11-13 15:06:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-13 17:29:52
 * @FilePath: \yo-vue-admin\src\layouts\components\HeaderRight\config\headerControlItem.ts
 */
import type { yoDropdwonType } from '@/components/Dropdown/type'
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'
import screenfull from 'screenfull'
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'

interface headerControlItemType extends yoDropdwonType {
  cb: (id: string) => void
}

const { changeLanguage } = useGlobalStore()
// 语言
const { language } = storeToRefs(useGlobalStore())

// 是否是全屏
const isFullscreen = ref(screenfull.isFullscreen)

// 顶部导航栏右侧按钮对象
export const headerItem = ref<headerControlItemType[]>([
  {
    headerCpn: computed(() => {
      if (isFullscreen.value) {
        return 'IconOutFullScreen'
      }
      return 'FullScreen'
    }),
    cb: () => {
      if (!screenfull.isEnabled) ElMessage.warning('当前您的浏览器不支持全屏 ❌')
      screenfull.toggle()
      isFullscreen.value = screenfull.isFullscreen ? false : true
    },
    items: []
  },
  {
    headerCpn: 'IconLanguages',
    cb: (language: string) => {
      changeLanguage(language)
    },
    items: [
      { command: 'zh', title: '中文', disabled: computed(() => language.value == 'zh') },
      { command: 'en', title: '英文', disabled: computed(() => language.value == 'en') }
    ]
  },
  {
    title: 'yosong',
    cb: (id: string) => {
      console.log(id)
    },
    items: []
  },
  {
    headerCpn: 'IconUser',
    cb: (id: string) => {
      console.log(id)
    },
    bindObj: {
      url: '../../src/assets/images/yosong.png'
    },
    items: [{ command: 'out', title: '退出登录' }]
  }
])
