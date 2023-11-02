<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const phone = ref("");

const navData = ref([
  {
    title:"首页",
    path:"/home"
  },
  {
    title:"现货交易",
    path:"/trade"
  },
  {
    title:"衍生品",
    path:"/deriver"
  },
])

const goTabs = (item) =>{
  router.push(item.path)
}

const goMining = ()=>{
  router.push("/mining")
}

const goLock = () =>{
  router.push("/lock")
}

const login = () =>{
  router.push("/login")
}

const register = () =>{
  router.push("/register")
}
</script>

<template>
  <div class="index">
    <div class="header">
      <div class="left">
        <div v-for="(item,index) in navData" :key="index" @click="goTabs(item)">
          <span>{{item.title}}</span>
        </div>
        <div @click="goMining">
          <span class="material-symbols-outlined hot_icon">
            local_fire_department
          </span>
          <span>矿池</span>
        </div>
        <div @click="goLock">
          <span class="material-symbols-outlined hot_icon">
            local_fire_department
          </span>
          <span>锁仓交易</span>
        </div>
      </div>
      <div class="right">
        <span @click="register">注册</span>
        <button @click="login">登录</button>
        <span>下载</span>
        <el-dropdown>
          <div class="lang">
            <span class="material-symbols-outlined"> language </span>简体中文
          </div>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>简体中文</el-dropdown-item>
              <el-dropdown-item>繁体中文</el-dropdown-item>
              <el-dropdown-item>English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <RouterView/>
  </div>
</template>

<style lang="scss" scoped>
.index {
  width: auto;
  height: 100%;
  color: #f5f5f5;
  font-size: 15px;
  background: #16191f;
  .header {
    width: auto;
    height: 60px;
    display: flex;
    padding: 0px 20px;
    justify-content: space-between;
    align-items: center;
    background: #323232;
    .left {
      width: 30%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        .hot_icon {
          color: #e23e57;
          margin-right: 3px;
        }
      }
    }
    .right {
      width: 15%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: relative;
      span {
        cursor: pointer;
      }
      button {
        cursor: pointer;
        border: 0;
        padding: 5px 13px;
        border-radius: 2px;
        background: #0172f5;
        color: #f5f5f5;
      }
      .el-dropdown {
        color: #f5f5f5;
        font-size: 15px;
        line-height: 27px;
        margin-left: 10px;
        .lang {
          display: flex;
          justify-content: space-around;
          align-items: center;
          cursor: pointer;
          span {
            margin: 0px 2px;
          }
        }
      }
    }
  }
}
:focus{
  outline: none;
}
</style>