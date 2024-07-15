// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import BannerComponent from './components/banner/index.vue'
import ElemrntsPlus from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import GSymbol from "./components/GSymbol/index.vue";

import Breadcrumb from './components/breadcrumb/index.vue'
import Tabs from './components/tabs/index.vue'
import ContactInfo from './components/contactInfo/index.vue'
import ServiceInfo from './components/serviceInfo/index.vue'
import TableComponent from './components/table/index.vue'

import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './components/404/index.less'

import SiteFooter from './components/footer/index.vue'
import Container from './components/container/index.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    // return h(Layout, null, {
    //   // https://vitepress.dev/guide/extending-default-theme#layout-slots
    // })
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      //'nav-screen-content-after': () => h(SiteFooter),
      'home-hero-before': () => h(BannerComponent),
      'doc-top': () => h(BannerComponent),
    })
  },
  enhanceApp({ app, router, siteData }) {
  //enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(ElemrntsPlus);
    //app.component('Container',Container);
    app.component('Breadcrumb',Breadcrumb);
    app.component('Tabs', Tabs);
    app.component('ContactInfo', ContactInfo);
    app.component('ServiceInfo', ServiceInfo);
    app.component('GSymbol', GSymbol);
    app.component('TableComponent', TableComponent);
    // 全局注册图标组件
    for (const [key, component] of Object.entries(Icons)) {
      app.component(key, component)
    }
  }
} satisfies Theme
