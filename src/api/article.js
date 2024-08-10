// 获取文章分类列表
import request from '@/utils/request'
export const artGetChannelsService = () => request.get('/my/cate/list')
