$(window).load(function () {
  $(".loading").fadeOut();
});
$(function () {
  echarts_1();
  echarts_4();
  echarts_31();
  function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart1"));
    var data = [
      {
        title: "**省",
      },
      ["人员"],
      [
        {
          name: "直接聘用",
          max: 2341,
        },
        {
          name: "劳务派遣",
          max: 2341,
        },
        {
          name: "购买服务",
          max: 2341,
        },
        {
          name: "其他",
          max: 2341,
        },
      ],
      [43, 2189, 52, 57],
    ];
    option = {
      color: ["#9DD060", "#35C96E", "#4DCEF8"],

      tooltip: {},

      radar: {
        center: ["50%", "50%"],
        radius: ["25%", "70%"],

        name: {
          textStyle: {
            color: "#72ACD1",
          },
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.0",

            width: 2,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.2)",
            width: 1,
            type: "dotted",
          },
        },
        splitArea: {
          areaStyle: {
            color: ["rgba(255,255,255,.1)", "rgba(255,255,255,0)"],
          },
        },
        indicator: data[2],
      },
      series: [
        {
          name: "",
          type: "radar",
          data: [
            {
              areaStyle: {
                normal: {
                  opacity: 0.3,
                },
              },
              value: data[3],
              name: data[1][0],
            },
            {
              areaStyle: {
                normal: {
                  opacity: 0.3,
                },
              },
              value: data[4],
              name: data[1][1],
            },
            {
              areaStyle: {
                normal: {
                  opacity: 0.3,
                },
              },
              value: data[5],
              name: data[1][2],
            },
          ],
          label: {
            formatter: "{c}人",
            show: true,
            position: "outside",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
        
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart4"));
    var myChart2 = echarts.init(document.getElementById("echart3"));
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["文本1"],

        top: "2%",
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 35,
      },
      grid: {
        left: "0%",
        top: "40px",
        right: "0%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["3k以下", "3k~4k", "4k~5k", "5k~6k", "6k~7k", "7k~8k", "8k~9k", "10k+"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },

          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "10",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "14",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "人均月应发工资数额(人数)",
          type: "bar",
          data: [768, 809, 472, 187, 56, 13, 44, 5],
          barWidth: "20%", //柱子宽度
          // barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,
              barBorderRadius: 5,
            },
          },
          label: {
            formatter: "{c}人",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
      ],
    };
    option2 = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["岗位类别"],
        top: "5%",
        textStyle: {
          color: "#fff",
          fontSize: "12",
        },

        itemGap: 35,
      },
      grid: {
        left: "0%",
        top: "40px",
        right: "0%",
        bottom: "0",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "执法辅助",
            "行政",
            "驾驶员",
            "技术工",
            "管理人员",
            "车库收费员",
            "内勤",
            "服务员",
            "普通辅助",
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 5,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "人数",
          type: "line",
          smooth: true,
          data: [1057, 326, 158, 118, 74, 55, 50, 49, 48],

          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,

              barBorderRadius: 5,
            },
          },
          label: {
            formatter: "{c}人",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option2);
    myChart2.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_31() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("fb01"));
    var myChart2 = echarts.init(document.getElementById("fb02"));
    var myChart3 = echarts.init(document.getElementById("fb03"));
    var myChart4 = echarts.init(document.getElementById("fb04"));
    var myChart5 = echarts.init(document.getElementById("myd1"));

    var myChart7 = echarts.init(document.getElementById("sysx"));
    option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical",
        top: "25%",
        right: 0,
        itemWidth: 10,
        itemHeight: 10,
        data: [
          "18-25岁",
          "26-30岁",
          "31-35岁",
          "36-40岁",
          "41-45岁",
          "46-50岁",
          "51-55岁",
          "56-59岁",
          "60岁以上",
        ],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "年龄分布",
          type: "pie",
          center: ["35%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#62c98d",
            "#2f89cf",
            "#4cb9cf",
            "#e0c828",
            "#e58c00",
            "#eb295b",
            "#FFB6C1",
            "#FF8C00",
            "#FFF5EE",
          ],
          label: {
            formatter: "{c}",
            show: true,
            position: "outside",  // Keep labels outside but adjust distance
            distance: 4,  // Reduce distance from the pie chart
            textStyle: {
              fontSize: 8,
              color: "rgba(255,255,255,.6)",
            },
          },
          labelLine: { show: true },
          data: [
            { value: 98, name: "18-25岁" },
            { value: 186, name: "26-30岁" },
            { value: 297, name: "31-35岁" },
            { value: 458, name: "36-40岁" },
            { value: 264, name: "41-45岁" },
            { value: 468, name: "46-50岁" },
            { value: 491, name: "51-55岁" },
            { value: 61, name: "56-59岁" },
            { value: 18, name: "60岁以上" },
          ],
        },
      ],
    };
    option2 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical", // Vertical layout for the legend
    left: "75%", // Move legend to the right
    top: "center", // Vertically center the legend
        itemWidth: 10,
        itemHeight: 10,
        data: ["硕士研究生", "本科", "大专", "高中、中专、技校", "初中及以下"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "10",
        },
      },
      series: [
        {
          name: "学历构成",
          type: "pie",
          center: ["40%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#62c98d",
            "#2f89cf",
            "#4cb9cf",
            "#e0c828",
            "#e58c00",
            "#eb295b",
          ],
          label: {
            formatter: "{c}",
            show: true,
            position: "outside",  // Keep labels outside but adjust distance
            distance: 4,  // Reduce distance from the pie chart
            textStyle: {
              fontSize: 8,
              color: "rgba(255,255,255,.6)",
            },
          },
          labelLine: { show: true },
          data: [
            { value: 3, name: "硕士研究生" },
            { value: 639, name: "本科" },
            { value: 732, name: "大专" },
            { value: 564, name: "高中、中专、技校" },
            { value: 403, name: "初中及以下" },
          ],
        },
      ],
    };
    option3 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical",
        top: "center",
        right: "-3%",
        itemWidth: 10,
        itemHeight: 10,
        data: [
          "残疾人数"
        ],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "14",
        },
      },
      series: [
        {
          name: "人数",
          type: "pie",
          center: ["35%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#62c98d",
            "#2f89cf",
            "#4cb9cf",
            "#e0c828",
            "#e58c00",
            "#eb295b",
          ],
        label: {
            formatter: "{c}",
            show: true,
            position: "outside",  // Keep labels outside but adjust distance
            distance: 4,  // Reduce distance from the pie chart
            textStyle: {
              fontSize: 20,
              color: "rgba(255,255,255,.6)",
            },
          },
          labelLine: { show: true },
          data: [{ value: 10, name: "残疾人数" }],
        },
      ],
    };
    option4 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical",
        top: "center",
        right: "0%",
        itemWidth: 10,
        itemHeight: 10,
        data: [
          "壹级伤残",
          "肆级伤残",
          "六级伤残",
          "七级伤残",
          "八级伤残",
          "九级伤残",
          "拾级伤残",
        ],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "10",
        },
      },
      series: [
        {
          name: "伤残等级",
          type: "pie",
          center: ["40%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#62c98d",
            "#2f89cf",
            "#4cb9cf",
            "#559c35",
            "#e0c828",
            "#e58c00",
            "#eb295b",
          ],
          label: {
            formatter: "{c}",
            show: true,
            position: "outside",  // Keep labels outside but adjust distance
            distance: 4,  // Reduce distance from the pie chart
            textStyle: {
              fontSize: 8,
              color: "rgba(255,255,255,.6)",
            },
          },
          labelLine: { show: true },
          data: [
            { value: 1, name: "壹级伤残" },
            { value: 2, name: "肆级伤残" },
            { value: 1, name: "六级伤残" },
            { value: 1, name: "七级伤残" },
            { value: 1, name: "八级伤残" },
            { value: 3, name: "九级伤残" },
            { value: 1, name: "拾级伤残" },
          ],
        },
      ],
    };
    option5 = {
      grid: {
        left: "0",
        right: "0",
        top: "10%",
        bottom: "24%",
        //containLabel: true
      },
      legend: {
        data: ["无", "初级", "中级", "副高", "正高"],
        bottom: 0,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "#fff",
          fontSize: "10",
        },

        itemGap: 5,
      },
      tooltip: {
        show: "true",
        trigger: "item",
      },
      yAxis: {
        type: "value",
        show: false,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#363e83",
            },
          },
          axisLabel: {
            show: false,
            //   inside: true,
            textStyle: {
              color: "rgba(255,255,255,1)",
              fontWeight: "normal",
              fontSize: "12",
            },
            // formatter:function(val){
            //     return val.split("").join("\n")
            // },
          },
          data: [""],
        },
      ],
      series: [
        {
          name: "无",
          type: "bar",
          barWidth: "20",

          itemStyle: {
            normal: {
              show: true,
              color: "#20aa92",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barGap: "100%",
          data: [2302],
          label: {
            formatter: "{c}人",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
        {
          name: "初级",
          type: "bar",
          itemStyle: {
            normal: {
              show: true,
              color: "#f4664e",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: "20",
          data: [19],
          label: {
            formatter: "{c}人",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
        {
          name: "中级",
          type: "bar",
          itemStyle: {
            normal: {
              show: true,
              color: "#0c93dc",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: "20",
          data: [13],
          label: {
            formatter: "{c}人",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
        {
          name: "副高",
          type: "bar",
          itemStyle: {
            normal: {
              show: true,
              color: "#0c93dc",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: "20",
          data: [2],
          label: {
            formatter: "{c}人",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
        {
          name: "正高",
          type: "bar",
          itemStyle: {
            normal: {
              show: true,
              color: "#0c93dc",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: "20",
          data: [5],
          label: {
            formatter: "{c}人",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
      ],
    };

    option7 = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "0",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "1年以下",
            "1年(含)~5年",
            "5年(含)~10年",
            "10年(含)~15年",
            "15年以上",
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 5,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "10",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "人数",
          type: "line",
          //smooth: true,
          data: [146, 519, 285, 104, 1287],

          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,

              barBorderRadius: 5,
            },
          },
          label: {
            formatter: "{c}人",
            show: true,
            position: "outside",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
    myChart5.setOption(option5);

    myChart7.setOption(option7);
    window.addEventListener("resize", function () {
      myChart.resize();
      myChart7.resize();
      myChart2.resize();
      myChart3.resize();
      myChart4.resize();
      myChart5.resize();
    });
  }
});
