<template>
  <el-table :data="tableData" border style="width: 100%;">
    <el-table-column prop="key" label="key"  />
    <el-table-column label="value">
      <template #default="{ row }">
        <template v-for="(value, index) in urlTranse(row.value)" :key="index">
          <template v-if="isURL(value)">
            <a v-if="isURL(value)" :href="value" target="_blank">{{ value }}</a>
          </template>
          <template v-else>
            <span>{{ value }}</span>
          </template> 
        </template> 
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const props = defineProps({
  tableData: {
      type: Object,
      required: true
  }
})

function isURL(value) {
  const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
  return pattern.test(value);
}

function urlTranse(inputString){
  //const groups = inputString.split(/(<a.*?<\/a>)/g).filter(Boolean);
  const groups = inputString.split(/(<a.*?<\/a>)/g).filter(Boolean).map(group => {
    if (group.startsWith('<a') && group.endsWith('>')) {
      // 匹配到<a>标签，去除<a>和</a>标签并返回内部内容
      return group.substring(group.indexOf('>') + 1, group.lastIndexOf('<'));
    } else {
      // 普通文本，直接返回
      return group;
    }
  });
  return groups;
}
</script>