import request from '@/utils/request'

// 提交注册信息
export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', {
    username,
    password,
    repassword
  })
}

// 提交登录信息
export const userLoginService = ({ username, password }) =>
  request.post('api/login', { username, password })
