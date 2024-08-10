import router from '@/router'
import { useUserStore } from '@/stores'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  baseURL,
  timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const useStore = useUserStore()
    if (useStore.token) config.headers.Authorization = useStore.token

    return config
  },
  function (err) {
    // 对请求错误做些什么
    return Promise.reject(err)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (res) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (res.data.code === 0) return res
    ElMessage({
      type: 'error',
      message: res.data.message
    })
    return Promise.reject(res.data)
  },
  function (err) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage({
      type: 'error',
      message: err.response.data.message || '响应失败'
    })
    if (err.response.status === 401) {
      router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
