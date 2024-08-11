// 获取文章分类列表
import request from '@/utils/request'
export const artGetChannelsService = () => request.get('/my/cate/list')

// 增加文章分类
export const artAddChanenelService = (cate_name, cate_alias) => {
  return request.post('/my/cate/add', {
    cate_name,
    cate_alias
  })
}
