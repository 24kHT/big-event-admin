<script setup>
import { artGetChannelsService } from '@/api/article'
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelEdit from './components/ChannelEdit.vue'

const channelList = ref([])
const isLoading = ref(true)

// 请求文章分类列表
const getArtList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  console.log(res)
  isLoading.value = false
}
getArtList()

// 更新分类按钮
const onEditChannel = (row) => {
  console.log(row)
  dialog.value.open(row)
}
// 删除分类按钮
const onDelChannel = (row) => {
  console.log(row)
}
// 添加分类按钮
const dialog = ref()
const onAddChannel = () => {
  dialog.value.open({})
}

// 增删改业务完成,刷新表单
const onSuccess = () => {
  isLoading.value = true
  getArtList()
}
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel">添加分类</el-button>
    </template>
    <el-table v-loading="isLoading" :data="channelList" style="width: 100%">
      <el-table-column label="序号" width="100" type="index"> </el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDelChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="暂时还没有数据" />
      </template>
    </el-table>
    <ChannelEdit ref="dialog" @success="onSuccess"></ChannelEdit>
  </PageContainer>
</template>
