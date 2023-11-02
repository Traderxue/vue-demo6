<script setup>
import { init, dispose } from "klinecharts";
import { onMounted, ref } from "vue";

const option = {
  grid: {
    show: false,
    horizontal: {
      show: true,
      size: 1,
      color: "#EDEDED",
      style: "dashed",
      dashedValue: [2, 2],
    },
    vertical: {
      show: true,
      size: 1,
      color: "#EDEDED",
      style: "dashed",
      dashedValue: [2, 2],
    },
  },
};

const timeList = ref([
  {
    time: "1M",
  },
  {
    time: "5M",
  },
  {
    time: "15M",
  },
  {
    time: "30M",
  },
  {
    time: "1H",
  },
  {
    time: "4H",
  },
]);

const active = ref("1M");

const input1 = ref("");
const input2 = ref("");

const timeTab = (item) => {
  active.value = item.time;
};

onMounted(() => {
  const chart = init("kline");
  chart.applyNewData([
    {
      close: 4976.16,
      high: 4977.99,
      low: 4970.12,
      open: 4972.89,
      timestamp: 1587660000000,
      volume: 204,
    },
    {
      close: 4977.33,
      high: 4979.94,
      low: 4971.34,
      open: 4973.2,
      timestamp: 1587660060000,
      volume: 194,
    },
    {
      close: 4977.93,
      high: 4977.93,
      low: 4974.2,
      open: 4976.53,
      timestamp: 1587660120000,
      volume: 197,
    },
    {
      close: 4966.77,
      high: 4968.53,
      low: 4962.2,
      open: 4963.88,
      timestamp: 1587660180000,
      volume: 28,
    },
    {
      close: 4961.56,
      high: 4972.61,
      low: 4961.28,
      open: 4961.28,
      timestamp: 1587660240000,
      volume: 184,
    },
    {
      close: 4964.19,
      high: 4964.74,
      low: 4961.42,
      open: 4961.64,
      timestamp: 1587660300000,
      volume: 191,
    },
    {
      close: 4968.93,
      high: 4972.7,
      low: 4964.55,
      open: 4966.96,
      timestamp: 1587660360000,
      volume: 105,
    },
    {
      close: 4979.31,
      high: 4979.61,
      low: 4973.99,
      open: 4977.06,
      timestamp: 1587660420000,
      volume: 35,
    },
    {
      close: 4977.02,
      high: 4981.66,
      low: 4975.14,
      open: 4981.66,
      timestamp: 1587660480000,
      volume: 135,
    },
    {
      close: 4985.09,
      high: 4988.62,
      low: 4980.3,
      open: 4986.72,
      timestamp: 1587660540000,
      volume: 76,
    },
  ]);

  chart.setStyles(option);

  chart.createIndicator("VOL");
});

const options = [
  {
    value: "1x",
    label: "1x",
  },
  {
    value: "10x",
    label: "10x",
  },
  {
    value: "50x",
    label: "50x",
  },
  {
    value: "100x",
    label: "100x",
  },
  {
    value: "125x",
    label: "125x",
  },
];
</script>

<template>
  <div class="title">
    <span
      v-for="(item, index) in timeList"
      :key="index"
      @click="timeTab(item)"
      :class="active == item.time ? 'active' : ''"
      >{{ item.time }}</span
    >
  </div>
  <div class="kline" id="kline" style="width: 100%; height: 400px"></div>
  <div class="btn">
    <el-cascader :options="options" clearable placeholder="请选择杠杆" />
    <el-input v-model="input1" placeholder="请输入数量" />
    <el-button style="background: #25a750; color: #fff; border: 0"
      >买入做多</el-button
    >
    <el-button style="background: #ca3f64; color: #fff; border: 0"
      >卖出做空</el-button
    >
  </div>
</template>

<style lang="scss" scoped>
.title {
  width: auto;
  height: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  span {
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
  }
  .active {
    color: #00adb5;
  }
}
.btn {
  width: 70%;
  height: 360px;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  .el-input {
    margin: 0 auto;
  }
  .el-tooltip__trigger {
    margin: 0 auto;
  }
  .el-button {
    margin: 0 auto;
    width: 60%;
    height: 40px;
  }
}
</style>
