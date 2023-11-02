<script setup>
import { onMounted, ref } from "vue";

const coinList = ref([
  {
    type:"BIB",
    price:"0.134163",
    volume:"3464463",
    parcent:"+3.35",
  },
  {
    type:"BTC",
    price:"24677",
    volume:"3463",
    parcent:"+1.35",
  },
  {
    type:"ETH",
    price:"1678",
    volume:"3463",
    parcent:"+0.05",
  },
  {
    type:"SOL",
    price:"32.16",
    volume:"34463",
    parcent:"+5.35",
  },
]);


onMounted(() => {
});
</script>

<template>
  <div class="coins">
    <div class="tabs">
      <span>热门</span>
      <span>涨幅榜</span>
      <span>成交额榜</span>
    </div>
    <div class="box">
      <div class="title">
        <span>币对</span>
        <span>最新价</span>
        <span>交易量</span>
        <span>24H涨跌</span>
        <span>操作</span>
      </div>
      <div class="main">
        <div class="per" v-for="(item,index) in coinList" :key="index">
          <div>
            <span>{{item.type}}/USDT</span>
          </div>
          <div style="color: #08d9d6;"><span>{{item.price}}</span></div>
          <div style="color: #e23e57;"><span>{{item.volume}}</span></div>
          <div style="color: #e23e57;">{{item.parcent}}</div>
          <div>
            <button>交易</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coins {
  width: auto;
  height: auto;
  margin-top: 100px;
  padding-bottom: 100px;
  .tabs {
    display: flex;
    justify-content: space-around;
    padding: 0px 20%;
    align-items: center;
    margin: 30px 0px;
    font-weight: 600;
    font-size: 22px;
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-size: 14px;
    .title {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 20px;
      span {
        width: 15%;
        text-align: center;
        color: #f5f5f5;
      }
    }
    .main {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .per {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 15px 0px;
        cursor: pointer;
        div {
          width: 15%;
          text-align: center;
          button {
            width: 70px;
            height: 35px;
            background: #0072f8;
            color: #fff;
            border: 0;
            border-radius: 3px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>