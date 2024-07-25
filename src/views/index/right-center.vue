<script setup lang="ts">
import { ref, reactive, onMounted, nextTick, watchEffect } from "vue";
import { installationPlan } from "@/api";
import { graphic } from "echarts/core";
import { ElMessage } from "element-plus";
import { useRequest } from "@/stores/index";

const { times } = useRequest();

const option = ref({});



watchEffect(()=>{
  const setOption = async () => {
  option.value = {
    color: ["#80FFA5", "#FF0087"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    axisLabel: {
        color: "#7EB7FD",
        fontWeight: "500",
      },
    legend: {
      data: ["1号", "2号"],
      textStyle: {
      color: '#fff'
    }
    },
    grid: {
      left: "50px",
      right: "40px",
      bottom: "30px",
      top: "20px",
    },
    xAxis: {
      data: times.jsllTime,
      axisLine: {
        lineStyle: {
          color: "#B4B4B4",
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [
      {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: "#B4B4B4",
          },
        },

        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: "#B4B4B4",
          },
        },
        axisLabel: {
          formatter: "{value}% ",
        },
      },
    ],
    series: [
      {
        name: "1号",
        type: "line",
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: "#956FD4",
        },
        data: times.zgywa,
      },
      {
        name: "2号",
        type: "line",
        barGap: "-100%",
        barWidth: 10,
        itemStyle: {
          itemStyle: {
            color: "#F02FC2",
          },
        },
        z: -12,
        data: times.zgywb,
      },
    ],
  };
};
setOption();
})
</script>

<template>
  <v-chart
    class="chart"
    :option="option"
    v-if="JSON.stringify(option) != '{}'"
  />
</template>

<style scoped lang="scss"></style>
