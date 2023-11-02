<script setup>
import { ref } from "vue";

const miningList = ref([
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/1D5DDB035B8182DB.png",
        type:"BTC",
        hash:"SHA256",
        miner:"14",
        power:"467.35",
        amount:"0"
    },
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/AA8BBFD9BC32A2B4.png",
        type:"LTC",
        hash:"SHA256",
        miner:"14",
        power:"467.35",
        amount:"0"
    },
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/8A135610E74EACD8.png",
        type:"ETC",
        hash:"SHA256",
        miner:"14",
        power:"467.35",
        amount:"0"
    },
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/8A135610E74EACD8.png",
        type:"ETC",
        hash:"SHA256",
        miner:"14",
        power:"467.35",
        amount:"0"
    },
])
</script>

<template>
  <div class="mining">
    <div class="top">
      <h3>世界领先的区块链数字资产挖币平台</h3>
      <span>公开透明.安全稳定</span>
      <button>进入矿池</button>
      <img src="@/assets/img/mining_1.png" alt="" />
    </div>
    <div class="main">
      <h3>PoW挖矿</h3>
      <div class="title">
        <span>币种</span>
        <span>挖矿算法</span>
        <span>有效矿工</span>
        <span>全网算力</span>
        <span>起付金额</span>
        <span>操作</span>
      </div>
      <div class="box" v-for="(item,index) in miningList" :key="index">
        <div>
          <img
            :src="item.logo"
            alt=""/>
          <span>{{item.type}}</span>
        </div>
        <div>
          <span>{{item.hash}}</span>
        </div>
        <div>
          <span>{{item.miner}}</span>
        </div>
        <div>
          <span>{{item.power}} TH/s</span>
        </div>
        <div>
          <span>{{item.amount}}</span>
        </div>
        <div>
          <button>申购</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mining {
  width: auto;
  height: auto;
  .top {
    padding: 40px 20%;
    width: auto;
    height: 400px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    h3 {
      font-weight: 600;
      font-size: 34px;
    }
    span {
      color: #ccc;
    }
    button {
      width: 30%;
      height: 45px;
      font-size: 18px;
      font-weight: 600;
      border-radius: 5px;
      border: 0;
      cursor: pointer;
    }
    img {
      position: absolute;
      right: 20%;
      top: 50%;
      transform: translateY(-50%);
      width: 350px;
      height: 350px;
    }
  }
  .main {
    background: #f5f5f5;
    color: #000;
    padding: 40px 20%;
    height: 500px;    
    h3 {
      font-weight: 600;
      font-size: 22px;
    }
    .title{
        display: flex;
        justify-content: space-around;
        margin: 40px 0px;
        span{
            width: 16%;
        }
    }
    .box{
        display: flex;
        justify-content: space-around;
        font-weight: 600;
        div{
            width: 16%;
            display: flex;
            align-items: center;
            font-size: 14px;
            margin: 20px 0px;
            img{
                width: 35px;
                height: 35px;
                margin-right: 5px;
            }
            button{
                width: 70px;
                height: 35px;
                border: 0;
                background: #0172f5;
                border-radius: 3px;
                color: #FFF;
                cursor: pointer;
            }
        }
    }
  }
}
</style>

