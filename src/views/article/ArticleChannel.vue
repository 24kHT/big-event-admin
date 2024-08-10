<script setup>
import { artGetChannelsService } from '@/api/article'
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'

const artList = ref([])
// 请求文章分类列表
const getArtList = async () => {
  const res = await artGetChannelsService()
  artList.value = res.data.data
}
getArtList()
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra><el-button type="primary">添加分类</el-button></template>
    文章内容+内容
  </PageContainer>
</template>
