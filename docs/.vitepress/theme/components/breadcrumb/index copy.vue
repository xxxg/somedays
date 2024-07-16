<template>
  <el-breadcrumb :separator-icon="ArrowRight" style="font-size:1.5rem">
    <el-breadcrumb-item >
      <a href="/">
        <g-symbol  align-text family="rounded" fill weight="450" grade="0" size="200">home</g-symbol>
      </a>
    </el-breadcrumb-item>
    <el-breadcrumb-item v-for="(crumb, index) in breadcrumbs" :key="index" :to="crumb.path">
    <router-link :to="crumb.path">{{ crumb.label }}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vitepress'
    const route = useRoute()
    const breadcrumbs = computed(() => {
      const paths = route.path.split('/').filter(p => p)
      return paths.map((path, index) => ({
        path: '/' + paths.slice(0, index + 1).join('/'),
        label: path
      }))
    })
</script>