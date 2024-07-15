---

layout: home
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

  # お問い合わせ
  </center>
  <ContactInfo :data="contactsData">
  </ContactInfo>
</ClientOnly>

