import { dayjs } from 'element-plus'
// 时间格式化函数
export const formatTime = (time) => dayjs(time).format('YYYY年MM月DD日')
