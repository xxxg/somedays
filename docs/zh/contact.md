---

layout: doc
#editLink: false

---
<script setup>
import { ref } from 'vue'
import data from './contact/index.ts'
const contactsData = ref(data)
</script>
<br/>
<ClientOnly>
  <Breadcrumb />
  <br/>
  <center>

  # 联系我们
  </center>
  <ContactInfo :data="contactsData">
  </ContactInfo>
</ClientOnly>

