<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import LocalCache from '@/utils/cache'
const router = useRouter()
const ruleForm = reactive({
  name: LocalCache.getCache('name') ?? '',
  password: LocalCache.getCache('password') ?? ''
})
const USERNAME_REG = /^[A-Za-z0-9]{6,18}$/
const PWD_REG = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%&*?.]).{8,16}$/
const checked = ref(false)
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      pattern: USERNAME_REG,
      message: '请输入6-10个字母和数字的组合',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入正确密码', trigger: 'blur' },
    {
      pattern: PWD_REG,
      message: '请输入8-16位字母和符号的组合',
      trigger: 'blur'
    }
  ]
})
const ruleFormRef = ref<FormInstance>()
const submitForm = (checked: boolean) => {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      if (checked) {
        LocalCache.setCache('name', ruleForm.name)
        LocalCache.setCache('password', ruleForm.password)
        console.log(ruleForm.name)
        console.log(ruleForm.password)
      }
      router.push('/home')
    }
  })
}
</script>
<template>
  <div class="loginPage">
    <div class="loginWrap">
      <h2 class="title">欢迎来到admin-vue</h2>
      <div class="loginPanel">
        <el-form :rules="rules" :model="ruleForm" status-icon ref="ruleFormRef">
          <el-form-item prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="用户名"
              class="inputBtn"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
              placeholder="密码"
              class="inputBtn"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <template class="select">
              <el-checkbox v-model="checked" label="记住我" size="small" />
              <el-link class="forgive" href="#" target="_blank"
                >忘记密码了？</el-link
              >
            </template>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="inputBtn"
              @click="submitForm(checked)"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="register">
        <p>还没有账号？<a href="/register">创建新账号</a></p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.loginPage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  //   background-color: #f2f3f2;
  background: linear-gradient(to left, #f2fcfe, #1c92d2);
  .loginWrap {
    padding: 20px;
    margin-top: -50px;
    background-color: rgb(255, 255, 255);
    .loginPanel {
      display: flex;
      padding-top: 18px;
      justify-content: center;
      .inputBtn {
        width: 312px;
        height: 40px;
      }
      .select {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 15px;
        .el-link {
          font-size: 12px;
        }
        .el-link.is-underline:hover:after {
          border-bottom: none;
        }
      }
    }
  }

  a {
    color: #409eff;
  }
}
</style>
