/*
 * @Author: yosong
 * @Date: 2024-03-25 11:03:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-25 11:45:39
 * @FilePath: \yo-vue-admin\farm.config.ts
 */

import { defineConfig } from '@farmfe/core'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// element - plus自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

import sass from '@farmfe/js-plugin-sass'

export default defineConfig({
  root: process.cwd(), // // 编译的根目录
  // 编译选项
  compilation: {
    //...
    resolve: {
      alias: {
        '@': path.join(process.cwd(), 'src'),
        stream$: 'readable-stream'
      }
    }
  },
  // 开发服务器选项
  server: {
    hmr: true,
    open: true
    //...
  },
  // 插件配置
  plugins: [
    sass({
      legacy: true,
      implementation: require('sass')
    }),
    '@farmfe/plugin-sass',
    // postcss(),
    {
      name: 'remove-css-filter-plugin',
      priority: 0,
      transform: {
        filters: {
          resolvedPaths: ['element-plus/dist/index.css']
        },
        async executor({ content }) {
          return {
            content: content.replace(/filter:\s*alpha\(opacity=0\);/g, '')
          }
        }
      }
    }
  ],
  // vite的插件
  vitePlugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
