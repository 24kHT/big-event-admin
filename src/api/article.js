// 获取文章分类列表
import request from '@/utils/request'
export const artGetChannelsService = () => request.get('/my/cate/list')

// 增加文章分类
export const artAddChanenelService = (data) => {
  return request.post('/my/cate/add', data)
}

// 编辑文章分类
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)

// 删除文章分类
export const artDelChannelService = (id) =>
  request.delete('/my/cate/del', { params: { id } })

// 获取文章列表
export const artGetListService = (params) =>
  request.get('/my/article/list', { params })
