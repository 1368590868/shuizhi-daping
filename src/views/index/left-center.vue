<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";
import { graphic } from "echarts/core";
import { countUserNum } from "@/api";
import {ElMessage} from "element-plus"
import  * as echarts from "echarts";
import {useRequest} from "@/stores/index"

const {times}  = useRequest()
const option = ref({});



watchEffect(()=>{
  const setOption = () => {
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
    data: ['进水1号', '进水2号'],
    textStyle: {
      color: '#fff'
    }
  },
  toolbox: {
    feature: {
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: times.jsllTime
    }
  ],
  yAxis: [
    {
      type: 'value'
    },
  ],
  axisLabel: {
        color: "#7EB7FD",
        fontWeight: "500",
      },
  series: [
    {
      name: '进水1号',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: times.jsll,
      markPoint: {
          data: [
            {
              name: "最大值",
              type: "max",
              valueDim: "y",
              symbol: "rect",
              symbolSize: [60, 26],
              symbolOffset: [0, -20],
              itemStyle: {
                color: "rgba(0,0,0,0)",
              },
              label: {
                color: "#FC9010",
                backgroundColor: "#80FFA5",
                borderRadius: 6,
                padding: [7, 14],
                borderWidth: 0.5,
                borderColor: "#80FFA5",
                formatter: "最大进水1号：{c}",
              },
            },
            {
              name: "最大值",
              type: "max",
              valueDim: "y",
              symbol: "circle",
              symbolSize: 6,
              itemStyle: {
                color: "#FC9010",
                shadowColor: "#FC9010",
                shadowBlur: 8,
              },
              label: {
                formatter: "",
              },
            },
          ],
        },
    },


    {
      name: '进水2号',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: times.csll,
      markPoint: {
          data: [
            {
              name: "最大值",
              type: "max",
              valueDim: "y",
              symbol: "rect",
              symbolSize: [60, 26],
              symbolOffset: [0, -20],
              itemStyle: {
                color: "rgba(0,0,0,0)",
              },
              label: {
                color: "#fff",
                backgroundColor: "#FF0087",
                borderRadius: 6,
                padding: [7, 14],
                borderWidth: 0.5,
                borderColor: "#FF0087",
                formatter: "最大进水2号：{c}",
              },
            },

          ],
        },
    },

  ]
};
};
  setOption();

})


</script>

<template>
  <v-chart class="chart" :option="option" />
</template>

<style scoped lang="scss"></style>
