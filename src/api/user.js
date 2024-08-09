import request from '@/utils/request'

// 提交注册信息
export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', {
    username,
    password,
    repassword
  })
}
