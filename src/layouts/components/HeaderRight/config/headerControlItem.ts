/*
 * @Author: yosong
 * @Date: 2023-11-13 15:06:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 16:00:08
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
const {
  language,
  assemblySize,
  theme,
  currentRouteName,
  refresh,
  editThemeState
} = storeToRefs(useGlobalStore())
// 刷新缓存
const { removeCacheEntry } = useRouteCache()

// 是否是全屏
const isFullscreen = ref(screenfull.isFullscreen)

// 解决esc/刷新退出全屏的问题
// 苹果浏览器的手机没有这个事件
if (screenfull.on) {
  screenfull.on('change', () => {
    if (screenfull.isFullscreen) isFullscreen.value = true
    else isFullscreen.value = false
  })
}

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
      {
        command: 'zh',
        title: '中文',
        disabled: computed(() => language.value == 'zh')
      },
      {
        command: 'en',
        title: 'English',
        disabled: computed(() => language.value == 'en')
      }
    ]
  },
  {
    headerCpn: 'Tools',
    cb: () => {
      editThemeState.value = true
    },
    items: []
  },
  {
    headerCpn: 'IconUser',
    cb: (id: string) => {
      console.log(id)
    },
    i18n: true,
    bindObj: {
      url:
        import.meta.env.MODE == 'development'
          ? '../../src/assets/images/yosong.png'
          : './assets/yosong.png'
    },
    items: [
      { command: 'yosong', title: 'yosong' },
      { command: 'out', title: 'layout.user.logout', i18n: true }
    ]
  }
])
