<script setup>
import { ref } from "vue";
import hot_coins from "@/components/hot_coins.vue";

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
        <hot_coins />
      </div>
    </div>
    <div class="change">
      <div>
        <h3>为改变而来 让Web3瞬息而至</h3>
        <span>加入BIB&Meta,感受中心文化交易所融合Web3生态所来的多元文化数字体验，一键开启Web3未来之旅</span
        >
      </div>
      <div>
        <img src="@/assets/img/img_2.png" alt="" />
      </div>
      <div>
        <img src="@/assets/img/img_3.png" alt="">
      </div>
      <div>
        <h3>为改变而来 让Web3瞬息而至</h3>
        <span>加入BIB&Meta,感受中心文化交易所融合Web3生态所来的多元文化数字体验，一键开启Web3未来之旅</span
        >
      </div>
      <div>
        <h3>为改变而来 让Web3瞬息而至</h3>
        <span>加入BIB&Meta,感受中心文化交易所融合Web3生态所来的多元文化数字体验，一键开启Web3未来之旅</span
        >
      </div>
      <div>
        <img src="@/assets/img/img_5.png" alt="">
      </div>
    </div>
    <div class="product">
      <h3>产品生态与服务</h3>
      <div class="goods">
        <div class="first">
          <h4>现货</h4>                  
          <span>覆盖主流币种与时下热门币种，平台持续在全球范围内配置优秀数字资产</span>
          <img src="@/assets/img/goods_1.png" alt="">
        </div>
        <div>
          <h4>合约</h4>    
          <img src="@/assets/img/goods_2.png" alt="">      
        </div>
        <div>
          <h4>合约跟单</h4>
          <img src="@/assets/img/goods_3.png" alt="">
        </div>
        <div>
          <h4>期权</h4>
          <img src="@/assets/img/goods_2.png" alt="">
        </div>
        <div>
          <h4>双币理财</h4>
          <img src="@/assets/img/goods_3.png" alt="">
        </div>
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
      background: linear-gradient(to right, #e23e57, #14ffec);
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
    height: auto;
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
  .change {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: auto;
    height: auto;
    padding: 20px 20%;
    background: #16191f;
    div {
      width: 50%;
      height: 300px;
      box-sizing: border-box;
      padding: 40px 0px;
      text-align: center;
      h3 {
        font-size: 24px;
        background: linear-gradient(to right, #e23e57, #14ffec);
        -webkit-background-clip: text;
        color: transparent;
        padding: 35px 0px;
      }
      img {
        width: 260px;
        height: 260px;
      }
      span{
        font-size: 14px;
      }
    }
  }
  .product{
    width: auto;
    height: 600px;
    background: #131418;
    padding: 30px 20%;
    h3{
      text-align: center;
      font-size: 34px;
      background: linear-gradient(to right, #e23e57, #14ffec);
        -webkit-background-clip: text;
        color: transparent;
        padding: 35px 0px;
    }
    .goods{
      height: 220px;
      display: flex;
      justify-content: space-around;
      .first{
        width: 25%;
      }
      div{
        width: 13%;
        background: #16191F;
        border-radius: 15px;
        box-sizing: border-box;
        padding: 15px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        h4{
          font-weight: 600;
          font-size: 16px;
          padding: 20px 0px;
        }
        span{
          font-size: 14px;
        }
        img{
          width: 60px;
          height: 60px;
        }
      }
    }
  }
}
</style>