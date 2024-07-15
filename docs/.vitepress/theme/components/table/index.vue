<template>
  <el-table :data="tableData" border style="width: 100%;">
    <el-table-column prop="key" label="key"  />
    <el-table-column prop="value" label="value" />
  </el-table>
</template>

<script lang="ts" setup>
const props = defineProps({
  tableData: {
      type: Object,
      required: true
  }
})
</script>

<style scoped>
.el-table__header-wrapper{
  display:none;
}
.vp-doc .el-table__body{
  margin:0px;
}
.el-table__row .cell{
  white-space: pre-wrap; 
}
</style>