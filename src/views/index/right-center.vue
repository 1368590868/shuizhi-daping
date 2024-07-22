<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from "vue";
import { installationPlan } from "@/api";
import { graphic } from "echarts/core";
import { ElMessage } from "element-plus";
import {useRequest} from "@/stores/index"

const {times}  = useRequest()

const option = ref({});
const getData = () => {
  installationPlan()
    .then((res) => {
      console.log("中下--安装计划", res);
      if (res.success) {
        setOption(res.data);
      } else {
        ElMessage({
          message: res.msg,
          type: "warning",
        });
      }
    })
    .catch((err) => {
      ElMessage.error(err);
    });
};
const setOption = async (newData: any) => {
  option.value = {

    color: ['#80FFA5',  '#FF0087'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['1号', '2号']
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
          color: "#956FD4"
        },
        data: newData.barData,
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
        data: newData.lineData,
      },

    ],
  };
};
onMounted(() => {
  getData();
});
</script>

<template>
  <v-chart class="chart" :option="option" v-if="JSON.stringify(option) != '{}'" />
</template>

<style scoped lang="scss"></style>
