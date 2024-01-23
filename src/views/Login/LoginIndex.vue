<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const ruleForm = reactive({
  name: '',
  password: ''
})
const USERNAME_REG = /^[A-Za-z0-9]{6,18}$/
const PWD_REG = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%&*?.]).{8,16}$/
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
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
const checked = ref(false)
</script>
<template>
  <div class="loginPage">
    <div class="loginWrap">
      <h2 class="title">欢迎来到admin-vue</h2>
      <div class="loginPanel">
        <el-form :rules="rules" :model="ruleForm" status-icon>
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
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="inputBtn"
              @click="submitForm(ruleFormRef)"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="select">
        <el-checkbox v-model="checked" label="记住我" size="small" />
        <a class="forgive" href="#">忘记密码了？</a>
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
    }
  }
  .select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  a {
    color: #409eff;
  }
}
</style>
