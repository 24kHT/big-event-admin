<script setup>
import { useUserStore } from '@/stores/index'

const useStore = useUserStore()
</script>

<template>
  <div>我是app</div>
  <p>{{ useStore.token }}</p>
  <div>
    <el-button type="success" @click="useStore.setToken">登录</el-button>
  </div>
</template>

<style scoped></style>
