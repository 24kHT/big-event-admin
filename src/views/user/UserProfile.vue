<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { userUpdateInfoService } from '@/api/user'

const {
  user: { username, nickname, email, id },
  getUser
} = useUserStore()
const userInfo = ref({ username, nickname, email, id })

const rules = {
  nickname: [
    { required: true, message: '昵称不能为空', trigger: 'blur' },
    {
      min: 2,
      max: 10,
      message: '昵称长度在2到10个字符之间',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    {
      type: 'email',
      message: '邮箱格式不正确',
      trigger: ['blur', 'change']
    }
  ]
}

// 提交表单
const formRef = ref()
const onSubmit = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    await userUpdateInfoService(userInfo.value)
    await getUser()
    ElMessage({
      type: 'success',
      message: '修改成功'
    })
  }
}
</script>
<template>
  <el-row>
    <el-col :span="12">
      <el-form
        :model="userInfo"
        :rules="rules"
        ref="formRef"
        label-width="120px"
      >
        <el-form-item label="登录名称">
          <el-input v-model="userInfo.username" disabled></el-input>
        </el-form-item>

        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="userInfo.nickname"></el-input>
        </el-form-item>

        <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="userInfo.email"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交修改</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style scoped>
/* 可以在此处添加样式 */
</style>
