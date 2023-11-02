<script setup>
import { ref } from "vue";

const phone = ref('')
</script>

<template>
  <div class="home">
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
        <span
          >加入BIB&Meta,感受中心文化交易所融合Web3生态所来的多元文化数字体验，一键开启Web3未来之旅</span
        >
      </div>
      <div>
        <img src="@/assets/img/img_2.png" alt="" />
      </div>
      <div>
        <img src="@/assets/img/img_3.png" alt="" />
      </div>
      <div>
        <h3>为改变而来 让Web3瞬息而至</h3>
        <span
          >加入BIB&Meta,感受中心文化交易所融合Web3生态所来的多元文化数字体验，一键开启Web3未来之旅</span
        >
      </div>
      <div>
        <h3>为改变而来 让Web3瞬息而至</h3>
        <span
          >加入BIB&Meta,感受中心文化交易所融合Web3生态所来的多元文化数字体验，一键开启Web3未来之旅</span
        >
      </div>
      <div>
        <img src="@/assets/img/img_5.png" alt="" />
      </div>
    </div>
    <div class="product">
      <h3>产品生态与服务</h3>
      <div class="goods">
        <div class="first">
          <h4>现货</h4>
          <span
            >覆盖主流币种与时下热门币种，平台持续在全球范围内配置优秀数字资产</span
          >
          <img src="@/assets/img/goods_1.png" alt="" />
        </div>
        <div>
          <h4>合约</h4>
          <img src="@/assets/img/goods_2.png" alt="" />
        </div>
        <div>
          <h4>合约跟单</h4>
          <img src="@/assets/img/goods_3.png" alt="" />
        </div>
        <div>
          <h4>期权</h4>
          <img src="@/assets/img/goods_2.png" alt="" />
        </div>
        <div>
          <h4>双币理财</h4>
          <img src="@/assets/img/goods_3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="invite">
      <h3>成为BIB推荐人 赚取丰厚收益</h3>
      <div>
        <span>了解更多</span>
        <span class="material-symbols-outlined"> chevron_right </span>
      </div>
      <el-button type="primary">即刻开启Web3旅程</el-button>
      <img src="@/assets/img/img_4.png" alt="" class="img_invite" />
    </div>
    <div class="bottom">
      <div class="crypto">
        <div>关于BIB</div>
        <div>产品</div>
        <div>服务</div>
        <div>交易</div>
      </div>
      <div class="con">
        <div>
          <span>关于我们</span>
          <span>职业机会</span>
          <span>联系我们</span>
          <span>免费声明</span>
        </div>
        <div>
          <span>快捷买币</span>
          <span>C2C交易</span>
          <span>闪兑</span>
          <span>交易</span>
          <span>OKTC</span>
        </div>
        <div>
          <span>节点计划</span>
          <span>帮助中心</span>
          <span>公告</span>
          <span>加入社群</span>
        </div>
        <div>
          <span>BTC USDT</span>
          <span>ETH USDT</span>
          <span>MATIC USDT</span>
          <span>LTC USDT</span>
          <span>XRP USDT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
      span {
        font-size: 14px;
      }
    }
  }
  .product {
    width: auto;
    height: 400px;
    background: #131418;
    padding: 30px 20%;
    h3 {
      text-align: center;
      font-size: 34px;
      background: linear-gradient(to right, #e23e57, #14ffec);
      -webkit-background-clip: text;
      color: transparent;
      padding: 35px 0px;
    }
    .goods {
      height: 220px;
      display: flex;
      justify-content: space-around;
      .first {
        width: 25%;
      }
      div {
        width: 13%;
        background: #16191f;
        border-radius: 15px;
        box-sizing: border-box;
        padding: 15px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        h4 {
          font-weight: 600;
          font-size: 16px;
          padding: 20px 0px;
        }
        span {
          font-size: 14px;
        }
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
  .invite {
    width: auto;
    height: 300px;
    padding: 50px 20%;
    background: #13171a;
    display: flex;    
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    h3{
      padding: 35px 0px;
      font-size: 34px;
      background: linear-gradient(to right, #e23e57, #14ffec);
      -webkit-background-clip: text;
      color: transparent;
    }
    div{
      display: flex;
      align-items: center;
      span{
        cursor: pointer;
      }
    }
    .el-button{
      width: 30%;
      height: 45px;
    }
    .img_invite{
      position: absolute;
      right: 20%;      
      width: 300px;
      height: 300px;
    }
  }
  .bottom{
    padding: 40px 20%;
    width: auto;
    height: 300px;
    background: #131418;
    .crypto{
      display: flex;
      justify-content: space-around;
      font-weight: 600;
      div{
        width: 25%;
        text-align: center;
        font-size: 18px;
      }
    }
    .con{
      display: flex;
      justify-content: space-around;
      div{
        width: 25%;
        text-align: center;
        padding: 10px 0px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        span{
          margin: 10px 0px;
          cursor: pointer;
          font-size: 14px;
        }
        span:hover{
          color: #3fc1c9;
        }
      }
    }
  }
</style>