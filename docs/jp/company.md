---

layout: home
editLink: false

---
<script setup>
import { ref } from 'vue'
import data from './company/index'
const companyData = ref(data)
</script>
<br/>

<ClientOnly>
  <Breadcrumb />
</ClientOnly>

<br/>
<center>

# 会社概要
</center>
<br />

<Tabs :data="companyData">
</Tabs>