import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref()
    const setToken = (tokenValue) => {
      token.value = tokenValue
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
