import { defineConfig } from 'vitepress'
import { zh } from './zh'
import { jp } from './jp'

export default defineConfig({
  //...shared,

  rewrites: {
    'zh/:rest*': ':rest*'
  },
  cleanUrls: true,
  // 当设置为 true 时，VitePress 不会因为死链而导致构建失败。
  ignoreDeadLinks: true,
  // 切换黑夜模式
  appearance: false,
  metaChunk: true,
  lastUpdated: true,
//   cleanUrls: true,
//   metaChunk: true,

//   markdown: {
//     math: true,
//     codeTransformers: [
//       // We use `[!!code` in demo to prevent transformation, here we revert it back.
//       {
//         postprocess(code) {
//           return code.replace(/\[\!\!code/g, '[!code')
//         }
//       }
//     ]
//   },

//   sitemap: {
//     hostname: 'https://vitepress.dev',
//     transformItems(items) {
//       return items.filter((item) => !item.url.includes('migration'))
//     }
//   },

  locales: {
    root: { label: '简体中文', ...zh },
    //jp: { label: '日本語', ...jp },
  },
  vite: {
    // Vite 的配置
    resolve: {
      alias: {
        '@': '../theme/components',
        '@element-plus/icons-vue': '@element-plus/icons-vue'
      },
    },
    css: {
      preprocessorOptions: {
        // css: {
        //   additionalData: `@import "../theme/styles.css";`,
        //   modules: {
        //     scopeBehaviour: 'local'
        //   }
        // }
      }
    }
  },
})