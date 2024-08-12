import { userGetInfoService } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'big-user',
  () => {
    // 定义鉴权码
    const token = ref()
    const setToken = (tokenValue) => {
      token.value = tokenValue
    }

    // 获取从存储用户信息
    const user = ref({})
    const getUser = async () => {
      const res = await userGetInfoService() // 请求获取数据
      user.value = res.data.data
    }

    // 存储用户信息
    const setUser = (userValue) => {
      user.value = userValue
    }
    // 删除用户信息
    const deleteUser = () => {
      user.value = {}
    }
    return {
      token,
      setToken,
      user,
      getUser,
      deleteUser,
      setUser
    }
  },
  {
    persist: true
  }
)
