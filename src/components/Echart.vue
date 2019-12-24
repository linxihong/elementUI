<template>
  <!--  封装echart组件 -->
  <div style="height: 100%" ref="echart">
    echart
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    chartData: {
      type: Object,
      // 设置默认值
      default() {
        return {
          xData: [], // x轴
          series: []
        }
      }
    },
    isAxisChart: {
      // 是否有坐标轴
      type: Boolean,
      default: true
    }
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    }
  },
  watch: {
    chartData: {
      handler: function() {
        this.initChart()
      },
      deep: true
    },
    isCollapse() {
      setTimeout(() => {
        this.resizeChart()
      }, 300)
    }
  },
  data() {
    return {
      // 初始化echart
      echart: null,
      axisOption: {
        legend: {
          // 配置顶部文字color 并显示出来
          textStyle: {
            color: '#333'
          }
        },
        grid: {
          // 偏移量
          left: '20%'
        },
        tooltip: {
          // 提示框组件
          trigger: 'axis'
        },
        xAxis: {
          // x轴数据
          type: 'category',
          data: [],
          axisLine: {
            // 坐标轴配置
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            // 坐标轴文字颜色
            color: '#333'
          }
        },
        yAxis: [
          // y轴的值
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        // echart 图表颜色
        color: [
          '#2ec7c9',
          '#b6a2de',
          '#5ab1ef',
          '#ffb980',
          '#d87a80',
          '#8d98b3',
          '#e5cf0d',
          '#97b552',
          '#95706d',
          '#dc69aa',
          '#07a2a4',
          '#9a7fd1',
          '#588dd5',
          '#f5994e',
          '#c05050',
          '#59678c',
          '#c9ab00',
          '#7eb00a',
          '#6f5553',
          '#c14089'
        ],
        series: [] // 每个图片要渲染的数据
      }, // 有坐标轴的
      normalOption: {
        tooltip: {
          trigger: 'item'
        },
        color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
        series: []
      } //没坐标轴的
    }
  },
  methods: {
    // 初始化echart
    initChart() {
      this.initChartData()
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData() {
      // 初始化列表数据
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        this.normalOption.series = this.chartData.series
      }
    },
    // echart-resize() 改变图表尺寸时 调用的方法
    resizeChart() {
      this.echart ? this.echart.resize() : ''
    }
  },
  mounted() {
    // 浏览器窗口发生变化
    window.addEventListener('resize', this.resizeChart)
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeChart)
  }
}
</script>

<style scoped></style>
