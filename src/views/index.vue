<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const phone = ref("");

const active = ref("首页");

const navData = ref([
  {
    title: "首页",
    path: "/home",
  },
  {
    title: "现货交易",
    path: "/trade",
  },
  {
    title: "法币交易",
    path: "/deriver",
  },
  {
    title: "赚币",
    path: "/earn",
  },
]);

const goTabs = (item) => {
  router.push(item.path);
  active.value = item.title
};

const goMining = () => {
  router.push("/mining");
  active.value = "矿池"
};

const goLock = () => {
  router.push("/lock");
  active.value = "锁仓"
};

const login = () => {
  router.push("/login");
  active.value = "登录"
};

const register = () => {
  router.push("/register");
  active.value = "注册"
};
</script>

<template>
  <div class="index">
    <div class="header">
      <div class="left">
        <div
          v-for="(item, index) in navData"
          :key="index"
          @click="goTabs(item)"
          :class="active==item.title?'active':''"          
        >
          <span>{{ item.title }}</span>
        </div>
        <div @click="goMining" :class="active=='矿池'?'active':''">
          <span class="material-symbols-outlined hot_icon">
            local_fire_department
          </span>
          <span>矿池</span>
        </div>
        <div @click="goLock" :class="active=='锁仓'?'active':''">
          <span class="material-symbols-outlined hot_icon">
            local_fire_department
          </span>
          <span>锁仓交易</span>
        </div>
      </div>
      <div class="right">
        <span @click="register" :class="active=='注册'?'active':''">注册</span>
        <button @click="login" :class="active=='登录'?'active':''">登录</button>
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
    <RouterView />
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
  .active {
    color: #e23e57;
  }
}
:focus {
  outline: none;
}
</style>