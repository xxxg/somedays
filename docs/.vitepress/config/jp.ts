import { defineConfig, type DefaultTheme } from 'vitepress'

export const jp = defineConfig({
  lang: 'ja', 
  title: "天津桑姆戴斯科技有限公司",
  description: "天津桑姆戴斯科技有限公司",
  head: [
    ['link',{ rel: 'icon', href:'assets/images/icon/icon.png'}]
  ],
  themeConfig: {
    logo: './assets/images/logo/home-logo.png',
    nav: nav(),
    footer: {
      message: "2024 Rebebuca All Rights Reserved 天津桑姆戴斯科技有限公司",
      copyright: "Copyright © 2024-present somedays " 
    }, 
    notFound: {
      title: '',
      linkLabel: '../index.md',
      linkText: '返回主页',
      quote: '您访问的页面不存在！',
      //code: '找不到页面！'
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {text: "主页", link: "/jp"},
    {text: "公司概要", link: "/jp/company"},
    {text: "营业内容", link: "/jp/service"},
    {text: "招聘信息", link: "/jp/offer"},
    {text: "联系我们", link: "/jp/contact"}
  ]
}