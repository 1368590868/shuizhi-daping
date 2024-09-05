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
    data: ['进水PH', '出水PH'],
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
      name: '进水PH',
      type: 'line',
   
      showSymbol: false,
      
      emphasis: {
        focus: 'series'
      },
      data: times.jsph,
 
    },


    {
      name: '出水PH',
      type: 'line',
     
    
      showSymbol: false,
  
      emphasis: {
        focus: 'series'
      },
      data: times.csph,
    
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

<style scoped lang="scss">

</style>
