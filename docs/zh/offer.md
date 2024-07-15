---

layout: doc
#editLink: false

---
<script setup>
import { ref } from 'vue'
import sericedata from './offer/service'
import tabledata from './offer/index'
const serviceData = ref(sericedata)
const tableData = ref(tabledata)
</script>
<br/>
<ClientOnly>
  <Breadcrumb />
  <br />
</ClientOnly>

<center>

# 招聘信息
</center>

  <ServiceInfo :data="serviceData">
  </ServiceInfo>

---

  <h1>人才募集</h1>
  <br/>

  <TableComponent :tableData="tableData">
  </TableComponent>

