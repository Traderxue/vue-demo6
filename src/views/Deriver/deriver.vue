<script setup>
import { ref } from "vue";

const shopList = ref([
    {
        title:"王者商行",
        url:"http://127.0.0.1:5173/zfb.png",
        unit:"7706",
        parent:"99.97%",
        cny:"7.35",
        p_usdt:"2730.00",
        p_cny:"5000.00-6000.00",
        type:"支付宝"
    },
    {
        title:"正度币行",
        url:"http://127.0.0.1:5173/zfb.png",
        unit:"7706",
        parent:"99.97%",
        cny:"7.35",
        p_usdt:"2730.00",
        p_cny:"5000.00-6000.00",
        type:"支付宝"
    },
    {
        title:"顺丰U商",
        url:"http://127.0.0.1:5173/yhk.png",
        unit:"7706",
        parent:"99.97%",
        cny:"7.35",
        p_usdt:"2730.00",
        p_cny:"5000.00-6000.00",
        type:"银行卡"
    },
    {
        title:"鼎峰U商",
        url:"http://127.0.0.1:5173/wx.png",
        unit:"7706",
        parent:"99.97%",
        cny:"7.35",
        p_usdt:"2730.00",
        p_cny:"5000.00-6000.00",
        type:"微信"
    },
    {
        title:"鼎峰U商",
        url:"http://127.0.0.1:5173/wx.png",
        unit:"7706",
        parent:"99.97%",
        cny:"7.35",
        p_usdt:"2730.00",
        p_cny:"5000.00-6000.00",
        type:"微信"
    },
    {
        title:"鼎峰U商",
        url:"http://127.0.0.1:5173/yhk.png",
        unit:"7706",
        parent:"99.97%",
        cny:"7.35",
        p_usdt:"2730.00",
        p_cny:"5000.00-6000.00",
        type:"银行卡"
    },
])
</script>

<template>
  <div class="deriver">
    <h3>购买</h3>
    <div class="title">
      <span>商家</span>
      <span>单价</span>
      <span>数量/限额</span>
      <span>支付方式</span>
      <span>交易0手续费</span>
    </div>
    <div class="box">
      <div class="per" v-for="(item,index) in  shopList" :key="index">
        <div>
            <span class="shop">
                <p>{{item.title}}</p>
                <img src="@/assets/img/shoucang.png" alt="" />
            </span>
          <span>{{item.unit}}单 {{item.parent}}</span>
        </div>
        <div>
            <span style="font-weight: 600;">{{item.cny}} CNY</span>
        </div>
        <div style="color: #00b8a9;">
            <p>{{item.p_usdt}} USDT</p>
            <p>{{item.p_cny}} CNY</p>
        </div>
        <div>
            <span class="pay">
                <img :src="item.url" alt="">
                <span>{{item.type}}</span>
            </span>
        </div>
        <div>
            <button>购买</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.deriver {
  width: auto;
  height: auto;
  padding: 40px 20%;
  box-sizing: border-box;
  h3 {
    font-size: 24px;
    padding: 20px 0px;
  }
  .title {
    display: flex;
    justify-content: space-around;
    margin: 10px 0px;
    span {
      width: 20%;
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .per {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px 0px;
      margin: 10px 0px;
      p{
        padding: 3px 0px;
      }
      div {
        width: 20%;
        display: flex;
        flex-direction: column;
        img {
          width: 20px;
          height: 20px;
        }
        .pay{
            display: flex;
            align-items: center;
            img{
                padding-right: 5px;
            }
        }
        button{
            width: 80px;
            height: 35px;
            background: #0172f5;
            border: 0;
            border-radius: 2px;
            color: #FFF;
            cursor: pointer;
        }
      }
      .shop{
        display: flex;
        padding: 5px 0px;
      }
    }
  }
}
</style>