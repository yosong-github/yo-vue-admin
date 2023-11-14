/*
 * @Author: yosong
 * @Date: 2023-11-13 15:06:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-14 13:17:37
 * @FilePath: \yo-vue-admin\src\layouts\components\HeaderRight\config\headerControlItem.ts
 */
import type { yoDropdwonType } from '@/components/Dropdown/type'
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'
import screenfull from 'screenfull'
import { ref, computed, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
import useRouteCache from '@/hooks/useRouteCache'

interface headerControlItemType extends yoDropdwonType {
  cb: (id: string) => void
}

// 全局配置
const { changeLanguage, setTheme } = useGlobalStore()
// 语言
const { language, assemblySize, theme, currentRouteName, refresh } = storeToRefs(useGlobalStore())
// 刷新缓存
const { removeCacheEntry } = useRouteCache()

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
    headerCpn: 'IconRefresh',
    cb: () => {
      refresh.value = false
      removeCacheEntry(currentRouteName.value)
      nextTick(() => {
        refresh.value = true
      })
    },
    items: []
  },
  {
    headerCpn: computed(() => {
      return theme.value == 'dark' ? 'IconThemeDark' : 'IconThemeLight'
    }),
    cb: () => {
      setTheme()
    },
    items: []
  },
  {
    headerCpn: 'IconSize',
    cb: () => {
      assemblySize.value == 'default'
        ? (assemblySize.value = 'small')
        : assemblySize.value == 'small'
        ? (assemblySize.value = 'large')
        : (assemblySize.value = 'default')
    },
    items: []
  },
  {
    headerCpn: computed(() => {
      if (isFullscreen.value) {
        return 'IconOutFullScreen'
      }
      return 'FullScreen'
    }),
    cb: () => {
      if (!screenfull.isEnabled) {
        ElMessage.warning('当前您的浏览器不支持全屏')
        return
      }
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
