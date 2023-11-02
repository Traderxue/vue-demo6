<script setup>
import { ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter()

const form = ref({
  username: "",
  password: "",
  password_1: "",
});

const login = () => {
  router.push("/login")
};

const register = () => {
  
};
</script>

<template>
  <div class="login">
    <el-form :model="form">
      <el-form-item>
        <el-input
          v-model="form.username"
          placeholder="Please input username"
          class="input-with-select"
        >
          <template #prepend>
            <el-button :icon="User" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          placeholder="Please input password"
          class="input-with-select"
          type="password"
        >
          <template #prepend>
            <el-button :icon="Lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password_1"
          placeholder="Please input password"
          class="input-with-select"
          type="password"
        >
          <template #prepend>
            <el-button :icon="Lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
    <span class="forget_pwd">忘记密码？</span>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 400px;
  height: 330px;
  margin: 140px auto;
  background: #364f6b;
  padding: 30px;
  border-radius: 5px;
  position: relative;
  .el-input {
    height: 45px;
    margin-bottom: 20px;
  }
  .el-button {
    width: 40%;
    margin: 10px auto;
    height: 40px;
  }
  .forget_pwd {
    position: absolute;
    right: 30px;
    font-size: 14px;
    color: #409eff;
    cursor: pointer;
  }
}
:focus {
  outline: none;
}
</style>