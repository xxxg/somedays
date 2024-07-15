---
# https://vitepress.dev/reference/default-theme-home-page
layout: home 
#head:
#  meta:
  
#hero:
#  title: a
#  image:
#    src: assets/images/icon/icon.png
#    alt: "天津桑姆戴斯科技有限公司"
#  name: "天津桑姆戴斯科技有限公司"
#  text: "天津桑姆戴斯科技有限公司"
#  tagline: My great project tagline
#  actions:
#    - theme: brand
#      text: Markdown Examples
#      link: /markdown-examples
#    - theme: alt
#      text: API Examples
#      link: /api-examples

#features:
#  - title: Feature A
#    icon: /assets/images/icon/icon.png
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#    link: https://baidu.com
#    linkText: "百度一下"
#  - title: Feature B
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#  - title: Feature C
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<script setup>
import { ref } from 'vue'
import data from './index/index'
const serviceData = ref(data)
</script>

<br/>
<center>

![主页](../public/assets/images/main_1.jpeg)
</center>

<ClientOnly>
  <ServiceInfo :data="serviceData">
  </ServiceInfo>
</ClientOnly>
