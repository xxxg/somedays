<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane v-for="(tab, index) in data" :key="index" :label="tab.label" :name="'tab'+(index+1)">
       <component v-for="(myCompontnt, index) in tab.componentInfos" :is="myCompontnt.name" :data="myCompontnt.data"/>
    </el-tab-pane >
  </el-tabs>
</template>

<script lang="ts" setup>
const activeName = "tab1"
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
})
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>