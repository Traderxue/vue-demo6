<script setup>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";

const input = ref("");

const goodsData = ref([
    {
        type:"USDT",
        url:"https://static.okx.com/cdn/oksupport/asset/currency/icon/usdt20230419113051.png",
        parcent:"10.00%",
        term:"限期",
    },
    {
        type:"USDC",
        url:"https://static.okx.com/cdn/oksupport/asset/currency/icon/usdc20230419113033.png",
        parcent:"10.00%",
        term:"限期",
    },
    {
        type:"BTC",
        url:"https://static.okx.com/cdn/oksupport/asset/currency/icon/btc20230419112752.png",
        parcent:"10.00%",
        term:"限期",
    },
    {
        type:"ETH",
        url:"https://static.okx.com/cdn/oksupport/asset/currency/icon/eth20230419112854.png",
        parcent:"10.00%",
        term:"限期",
    },
    {
        type:"TRB",
        url:"https://static.okx.com/cdn/assets/imgs/221/38DF5BB6AB9CDBF7.png",
        parcent:"10.00%",
        term:"限期",
    },
    {
        type:"SHIB",
        url:"https://static.okx.com/cdn/oksupport/asset/currency/icon/shib.png",
        parcent:"10.00%",
        term:"限期",
    },
])
</script>

<template>
  <div class="lock">
    <div class="top">
      <h3>简单赚币：高效、省时、省力</h3>
      <p>高安全性交易平台，让您的数字资产安全无虞，收益更加可观</p>
      <button>开始赚币</button>
      <img src="@/assets/img/img_7.png" alt="" />
    </div>
    <div class="box">
      <div class="title">
        <h3>全部产品</h3>
        <el-input
          v-model="input"
          placeholder="请输入内容"
          :prefix-icon="Search"
        />
      </div>
      <div class="goods">
        <div class="goods_title">
          <span>币种</span>
          <span>参考年化</span>
          <span>期限</span>
          <span>操作</span>
        </div>
        <div class="goods_list">
          <div class="per" v-for="(item,index) in goodsData" :key="index">
            <div>
              <img
                :src="item.url"
                alt=""
              />
              <span class="goods_type">{{item.type}}</span>
            </div>
            <div>
              <span style="color: #08d9d6;">{{item.parcent}}</span>
            </div>
            <div>
              <span>{{item.term}}</span>
            </div>
            <div>
              <button>申购</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lock {
  width: auto;
  height: auto;
  .top {
    padding: 40px 20%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    h3 {
      font-size: 34px;
    }
    p {
      color: #ccc;
    }
    img {
      position: absolute;
      right: 20%;
      width: 450px;
      height: 300px;
    }
    button {
      width: 30%;
      height: 45px;
      border-radius: 5px;
      font-weight: 600;
      font-size: 18px;
      border: 0;
    }
  }
  .box {
    width: auto;
    height: 800px;
    background: #fff;
    padding: 40px 20%;
    color: #000;
    .title {
      height: 35px;
      width: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 40px;
      h3 {
        font-size: 24px;
      }
      .el-input {
        width: 300px;
        height: 45px;
      }
    }
    .goods {
      width: auto;
      height: auto;
      .goods_title {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 15px;
        span{
            width: 25%;
        }
      }
      .goods_list {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        .per{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 20px 0px;
            padding: 10px 0px;
            .goods_type{
                font-weight: 600;
            }
            div{
                display: flex;
                align-items: center;
                width: 25%;
                img{
                    width: 35px;
                    height: 35px;
                    padding-right: 10px;
                }
                button{
                    width: 70px;
                    height: 35px;
                    border: 0;
                    background: #0172f5;
                    color: #fff;
                    border-radius: 3px;
                    cursor: pointer;
                }
            }
        }
      }
    }
  }
}
</style>
