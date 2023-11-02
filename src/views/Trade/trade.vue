<script setup>
import { ref } from "vue";
import typeData from "@/data/typeData.js"
import tradeData from "@/data/tradeData.js"
import kline from "../../components/kline.vue";

const listData = ref(typeData);
</script>

<template>
  <div class="trade">
    <div class="left">
      <div class="box">
        <div class="title">
          <span>种类</span><span>价格</span><span>涨跌幅</span>
        </div>
        <div v-for="(item, index) in listData" :key="index">
          <span>{{ item.type }}/USDT</span>
          <span :class="item.up==1?'up':'down'">{{ item.price }}</span>
          <span :class="item.up==0?'down':'up'">{{ item.parcent }}</span>
        </div>
      </div>
    </div>
    <div class="mid"><kline/></div>
    <div class="right">
      <div class="top">
        <div v-for="(item,index) in tradeData" :key="index">
          <span>{{item.price}}</span><span>{{item.num}}</span>
        </div>
      </div>
      <div class="mid">24564</div>
      <div class="bottom">
        <div v-for="(item,index) in tradeData" :key="index">
          <span>{{item.price}}</span><span>{{item.num}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trade {
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .left {
    width: 20%;
    background: #131418;
    box-sizing: border-box;
    padding: 20px;
    .box {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .title {
        font-size: 14px;
        span {
          width: 33%;
          text-align: center;
        }
      }
      div {
        display: flex;
        justify-content: space-around;
        margin: 15px 0px;
        span {
          width: 33%;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }
        .up{
            color: #25A750;
        }
        .down{
            color: #CA3F64;
        }
      }
    }
  }
  .mid {
    width: 50%;
    background: #131418;
    box-sizing: border-box;
    padding: 20px;
  }
  .right {
    width: 20%;
    background: #131418;
    box-sizing: border-box;
    padding: 40px 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .top{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      color: #25A750;
      div{
        display: flex;
        justify-content: space-around;
        padding: 10px 0px;
      }
    }
    .bottom{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      div{
        display: flex;
        justify-content: space-around;
        padding: 10px 0px;
      }
    }
    .mid{
      display: flex;
      justify-content: space-around;
      font-size: 18px;
      color: #CA3F64;
      font-weight: 600;
    }
    .bottom{
      color: #CA3F64;
    }
  }
}
</style>