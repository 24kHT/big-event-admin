import { userGetInfoService } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref()
    const setToken = (tokenValue) => {
      token.value = tokenValue
    }

    const user = ref({})
    const getUser = async () => {
      const res = await userGetInfoService() // 请求获取数据
      user.value = res.data.data
    }
    return {
      token,
      setToken,
      user,
      getUser
    }
  },
  {
    persist: true
  }
)
