import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('45354')
    const setToken = () => {
      token.value = 'kahudfgsiufakfjkasbjd'
    }
    return {
      token,
      setToken
    }
  },
  {
    persist: true
  }
)
