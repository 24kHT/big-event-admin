<script setup>
import zh from 'element-plus/es/locale/lang/zh-cn.mjs'
// import en from 'element-plus/dist/locale/en.mjs'
</script>

<template>
  <el-config-provider :locale="zh">
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
