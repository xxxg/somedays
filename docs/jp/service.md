---
layout: home
---
<script setup>
import { ref } from 'vue'
import data from './service/index'
const serviceData = ref(data)
</script>
<br/>

<ClientOnly>
  <Breadcrumb />
  <br/>
  <center>

  # 事業内容
  </center>
  <ServiceInfo :data="serviceData">
  </ServiceInfo>
</ClientOnly>

