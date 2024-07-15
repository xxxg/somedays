<template>
    <div v-if="data" class="entry-body">
      <p v-if="data.maintext" >{{ data.maintext }}</p>
      <div v-for="(serviceInfo, index) in data.service">
        <h2>
          <g-symbol class="title_icon">{{ serviceInfo.title_icon }}</g-symbol>
          <span>{{ serviceInfo.title }}</span>
        </h2>
        <p>{{ serviceInfo.text }}</p>
        <div class="row">
          <div class="col-sm-4" v-for="(child, index) in serviceInfo.children">
            <div class="vk_prBlocks_item_icon_outer" style="background-color:#0693e3;border:1px solid #0693e3">
              <g-symbol class="icon" style="color:#fff">{{ child.title_icon }}</g-symbol>
            </div>
            <h3 class="vk_prBlocks_item_title vk_prBlocks_item_title-1">{{ child.title }}</h3>
            <p class="vk_prBlocks_item_summary vk_prBlocks_item_summary-1">{{ child.text }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  data: {
      type: Object,
      required: true
  }
})
</script>

<style scoped>
h2{
  font-size: 1.75rem;
  color: #324e9b;
  display: flex;
  align-items: center; /* 垂直居中 */
}
h3{
  text-align: center;
}
.title_icon{
  display: inline-block;
  margin-right: .4em;
  font-size: 3rem;
}
.row{
  display: flex;
  flex-wrap: wrap;
}
@media (min-width: 576px) {
  .col-sm-4{
    flex: 33.333333%;
    max-width: 33.333333%;
  }
}
.col-sm-4{
  padding:0 15px 0 15px;
}
.vk_prBlocks_item_icon_outer{
    display: block;
    position: relative;
    margin: 0 auto;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}
.icon{
    width:5rem;
    height:5rem;
    font-size:3rem;
    display: inline-block;
    border-radius: 50%; 
    text-align: center;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    /* padding: 10px 0 0 15px; */
    padding:0.9rem;

}
</style>