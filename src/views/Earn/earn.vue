<script setup>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";

const listData = ref([
    {
        logo:"https://static.okx.com/cdn/assets/imgs/2012/CC3825464672C7DD.png",
        type:"1INCH",
        parcent:"1.00%",
        term:"活期"
    },
    {
        logo:"https://static.okx.com/cdn/assets/imgs/221/C7C799C98C90D285.png",
        type:"AAVE",
        parcent:"2.00%",
        term:"活期"
    },
    {
        logo:"https://static.okx.com/cdn/assets/imgs/221/5FFE6AFD21B40243.png",
        type:"ADA",
        parcent:"3.00%",
        term:"定期"
    },
    {
        logo:"https://static.okx.com/cdn/oksupport/asset/currency/icon/agld.png",
        type:"AGLD",
        parcent:"2.00%",
        term:"活期"
    },
    {
        logo:"https://static.okx.com/cdn/oksupport/asset/currency/icon/aidoge20230421183705.png",
        type:"AIDOGE",
        parcent:"3.00%",
        term:"活期"
    },
    {
        logo:"https://static.okx.com/cdn/assets/imgs/221/2841EB7EDCA32F8D.png",
        type:"ANT",
        parcent:"1.00%",
        term:"活期"
    },
])

const input = ref("");
</script>

<template>
  <div class="earn">
    <div class="top">
      <h3>持币生息，安全无忧</h3>
      <span
        >加入欧易赚币新变革，超过100+种不同代币，让您的数字资产获得最大收益！</span
      >
      <img src="@/assets/img/img_8.png" alt="" />
    </div>
    <div class="banner">
      <div class="title">
        <h3>全部产品</h3>
        <el-input
          v-model="input"
          placeholder="请输入内容"
          :prefix-icon="Search"
        />
      </div>
      <div class="box">
        <div class="top_box">
          <span>币种</span>
          <span>参考年化</span>
          <span>期限</span>
          <span>操作</span>
        </div>
        <div class="top_con">
          <div class="per" v-for="(item,index) in listData" :key="index">
            <div>
              <img
                :src="item.logo"
                alt=""
              />
              <span>{{item.type}}</span>
            </div>
            <div>
              <span style="color: #e23e57;">{{item.parcent}}</span>
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
.earn {
  width: auto;
  height: auto;
  background: #000000;
  .top {
    padding: 40px 20%;
    width: auto;
    height: 400px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    h3 {
      font-size: 34px;
    }
    span {
      font-size: 16px;
    }
    img {
      width: 400px;
      height: 300px;
      position: absolute;
      right: 20%;
    }
  }
  .banner {
    width: auto;
    height: 600px;
    background: #fff;
    padding: 80px 20%;
    color: #000000;
    .title {
      display: flex;
      justify-content: space-between;
      h3 {
        font-size: 26px;
      }
      .el-input {
        height: 40px;
        width: 30%;
      }
    }
    .box {
      width: auto;
      height: auto;
      .top_box {
        display: flex;
        justify-content: space-around;
        margin: 25px 0px;
        span {
          width: 25%;
        }
      }
      .top_con {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        .per{
            display: flex;
            justify-content: space-around;
            div{
                width: 25%;
                display: flex;
                align-items: center;
                padding: 10px 0px;
                margin: 15px 0px;
                img{
                    width: 35px;
                    height: 35px;
                }
                button{
                    width: 70px;
                    height: 35px;
                    border: 0;
                    background: #0172F5;
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