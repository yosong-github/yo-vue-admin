/*
 * @Author: yosong
 * @Date: 2023-11-10 13:59:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 13:59:41
 * @FilePath: \yo-vue-admin\src\hooks\useRouteCache.ts
 */
import { ref, nextTick } from 'vue'

const caches = ref<string[]>([])
export { caches }
export default function useRouteCache() {
  // 添加缓存的路由组件
  function addCache(componentName: string | string[]) {
    if (Array.isArray(componentName)) {
      componentName.forEach(addCache)
      return
    }

    if (!componentName || caches.value.includes(componentName)) return

    caches.value.push(componentName)
  }

  // 移除缓存的路由组件
  function removeCache(componentName: string) {
    const index = caches.value.indexOf(componentName)
    if (index > -1) {
      return caches.value.splice(index, 1)
    }
  }

  // 移除缓存的路由组件的实例
  async function removeCacheEntry(componentName: string) {
    if (removeCache(componentName)) {
      await nextTick()
      addCache(componentName)
    }
  }

  return {
    caches,
    addCache,
    removeCache,
    removeCacheEntry
  }
}
