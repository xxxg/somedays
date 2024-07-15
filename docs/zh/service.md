---
layout: doc
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

  # 营业内容
  </center>
  <ServiceInfo :data="serviceData">
  </ServiceInfo>
</ClientOnly>

