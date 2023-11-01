<script setup>
import { ref } from "vue";

const phone = ref("");
</script>

<template>
  <div class="index">
    <div class="header">
      <div class="left">
        <div>
          <span>现货交易</span>
        </div>
        <div>
          <span>衍生品</span>
        </div>
        <div>
          <span class="material-symbols-outlined hot_icon">
            local_fire_department
          </span>
          <span>矿池</span>
        </div>
        <div>
          <span class="material-symbols-outlined hot_icon">
            local_fire_department
          </span>
          <span>锁仓交易</span>
        </div>
      </div>
      <div class="right">
        <span>注册</span>
        <button>登录</button>
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
    <div class="box">
      <h3>BIB</h3>
      <h3 class="web3">启动Web3快捷键</h3>
      <div class="lanuch">
        <img src="@/assets/img/huojian.png" alt="" />
        <span>Lanuchpad</span>
        <span class="material-symbols-outlined"> chevron_right </span>
      </div>
      <el-input v-model="phone" placeholder="请输入邮箱/手机号">
        <template #append>
          <el-button type="primary">立即注册</el-button>
        </template>
      </el-input>
      <img src="@/assets/img/img_1.png" alt="" class="right_png" />
    </div>
    <div class="banner">
      <div class="top">
        <div class="left">
          <img src="@/assets/img/rebot.png" alt="" />
          <span>【热门币常新交易】 活动公告</span>
        </div>
        <div class="right">
          <span>更多</span>
          <span class="material-symbols-outlined"> chevron_right </span>
        </div>
      </div>
      <div class="card">
        <div><img src="http://127.0.0.1:5173/banner1.png" alt="" /></div>
        <div><img src="http://127.0.0.1:5173/banner2.png" alt="" /></div>
        <div><img src="http://127.0.0.1:5173/banner3.png" alt="" /></div>
        <div><img src="http://127.0.0.1:5173/banner4.png" alt="" /></div>
      </div>
      <div class="hot_coin">
        
      </div>
    </div>
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
  .box {
    width: auto;
    height: 400px;
    padding: 20px 20%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    h3 {
      font-size: 45px;
    }
    .web3 {
      background: linear-gradient(to right, #00adb5, #95e1d3);
      -webkit-background-clip: text;
      color: transparent;
    }
    .el-input {
      width: 40%;
      height: 45px;
      border: 1px solid #0172f5;
    }
    ::v-deep(.el-input-group__append) {
      background: #0172f5;
      border: 0;
      span {
        color: #fff;
      }
    }
    .right_png {
      position: absolute;
      right: 25%;
      height: 20px;
      width: 300px;
      height: 300px;
    }
    .lanuch {
      display: flex;
      align-items: center;
      img {
        width: 35px;
        height: 35px;
      }
    }
  }
  .banner {
    width: auto;
    height: 600px;
    background: #131418;
    padding: 20px 20%;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .right {
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
      }
    }
    .card {
      margin: 25px 0px;
      display: flex;
      justify-content: space-around;
      div {
        width: 20%;
        height: auto;
        margin: 0px 5px;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>