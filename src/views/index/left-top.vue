<script setup lang="ts">
import { ref, reactive, onMounted, watchEffect } from "vue";
import { graphic } from "echarts/core";
import { countUserNum } from "@/api";
import { ElMessage } from "element-plus";
import * as echarts from "echarts";
import { useRequest } from "@/stores";

const { times } = useRequest();
let colors = ["#0BFC7F", "#A0A0A0", "#F48C02", "#F4023C"];
const option = ref({});
const state = reactive({
  lockNum: 0,
  offlineNum: 0,
  onlineNum: 0,
  alarmNum: 0,
  totalNum: 0,
});


watchEffect(()=>{
  const setOption = () => {
  option.value = {
    legend: {
      show: true,
      orient: "horizontal",
      bottom: 0,
      left: "center",
      textStyle: {
        color: "#fff", // 确保文字颜色设置为白色
      },
    },
    grid: {
      left: "30%",
      right: "3%",
      bottom: "10%",
      containLabel: true,
    },
    series: [
      {
        type: "gauge",
        anchor: {
          show: true,
          showAbove: true,
          size: 14,
          itemStyle: {
            color: "#FAC858",
          },
        },

        pointer: {
          icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
          width: 6,
          length: "80%",
          offsetCenter: [0, "8%"],
        },
        progress: {
          show: true,
          overlap: true,
          roundCap: true,
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
                color: [[1, '#fff']], // 修改刻度表颜色为白色
              },
        },
        axisLabel: {
              color: '#fff', // 修改刻度标签颜色为白色
              distance: 10,
              fontSize: 10,
            },
            axisTick: {
              lineStyle: {
                color: '#fff', // 修改刻度线颜色为白色
              },
              length: 8,
            },
            splitLine: {
              lineStyle: {
                color: '#fff', // 修改分割线颜色为白色
              },
              length: 12,
            },
        min: 0, // 设置最小值
        max: 14, // 设置最大值
        splitNumber: 28, // 分割段数
        data: gaugeData.value,
        title: {
          fontSize: 12,
          textStyle: {
            color: "#fff", // 确保文字颜色设置为白色
          },
        },
        detail: {
          width: 30,
          height: 12,
          fontSize: 12,
          color: "#fff",
          backgroundColor: "inherit",
          borderRadius: 3,
          formatter: "{value}",
          // offsetCenter: [0, 0],
        },
      },
    ],
  };
};
const gaugeData = ref([
  {
    value: times.jsph,
    name: "进水PH",
    title: {
      offsetCenter: ["-30%", "80%"],
      textStyle: {
        color: "#fff",
      },
    },
    detail: {
      offsetCenter: ["-30%", "95%"],
      color: "#fff",
    },
  },
  {
    value: times.csph,
    name: "出水PH",
    title: {
      offsetCenter: ["20%", "80%"],
    },
    detail: {
      offsetCenter: ["20%", "95%"],
      color: "#fff",
    },
  },
]);
const getData = () => {
  setOption();
};
getData();
})
</script>

<template>
  <v-chart class="chart" :option="option" />
</template>

<style scoped lang="scss">
.chart {
  width: 100%;
  height: 400px;
  margin-top: -30px;
}
</style>
