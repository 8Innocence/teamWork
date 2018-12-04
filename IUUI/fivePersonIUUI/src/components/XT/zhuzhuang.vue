<template>
  <div class="bar">
    <div id="bar-first"></div>
    <code-editor :code="selfCode12"></code-editor>
    <div id="bar-second"></div>
    <code-editor :code="selfCode13"></code-editor>
  </div>
</template>

<script>
  import echarts from "../../../node_modules/echarts/dist/echarts"
  import CodeEditor from "../ZDS/codeEditor";
    export default {
        name: "zhuzhuang",
      components: {echarts,CodeEditor},
      data(){
        return{
          selfCode12:
            '          var dataAxis = [\'点\', \'击\', \'柱\', \'子\', \'或\', \'者\', \'两\', \'指\', \'在\', \'触\', \'屏\', \'上\', \'滑\', \'动\', \'能\', \'够\', \'自\', \'动\', \'缩\', \'放\'];\n' +
            '          var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];\n' +
            '          var yMax = 500;\n' +
            '          var dataShadow = [];\n' +
            '\n' +
            '          for (var i = 0; i < data.length; i++) {\n' +
            '            dataShadow.push(yMax);\n' +
            '          }\n' +
            '\n' +
            '          let option12 = {\n' +
            '            title: {\n' +
            '              text: \'特性示例：渐变色 阴影 点击缩放\',\n' +
            '              subtext: \'Feature Sample: Gradient Color, Shadow, Click Zoom\'\n' +
            '            },\n' +
            '            xAxis: {\n' +
            '              data: dataAxis,\n' +
            '              axisLabel: {\n' +
            '                inside: true,\n' +
            '                textStyle: {\n' +
            '                  color: \'#fff\'\n' +
            '                }\n' +
            '              },\n' +
            '              axisTick: {\n' +
            '                show: false\n' +
            '              },\n' +
            '              axisLine: {\n' +
            '                show: false\n' +
            '              },\n' +
            '              z: 10\n' +
            '            },\n' +
            '            yAxis: {\n' +
            '              axisLine: {\n' +
            '                show: false\n' +
            '              },\n' +
            '              axisTick: {\n' +
            '                show: false\n' +
            '              },\n' +
            '              axisLabel: {\n' +
            '                textStyle: {\n' +
            '                  color: \'#999\'\n' +
            '                }\n' +
            '              }\n' +
            '            },\n' +
            '            dataZoom: [\n' +
            '              {\n' +
            '                type: \'inside\'\n' +
            '              }\n' +
            '            ],\n' +
            '            series: [\n' +
            '              { // For shadow\n' +
            '                type: \'bar\',\n' +
            '                itemStyle: {\n' +
            '                  normal: {color: \'rgba(0,0,0,0.05)\'}\n' +
            '                },\n' +
            '                barGap:\'-100%\',\n' +
            '                barCategoryGap:\'40%\',\n' +
            '                data: dataShadow,\n' +
            '                animation: false\n' +
            '              },\n' +
            '              {\n' +
            '                type: \'bar\',\n' +
            '                itemStyle: {\n' +
            '                  normal: {\n' +
            '                    color: new echarts.graphic.LinearGradient(\n' +
            '                      0, 0, 0, 1,\n' +
            '                      [\n' +
            '                        {offset: 0, color: \'#83bff6\'},\n' +
            '                        {offset: 0.5, color: \'#188df0\'},\n' +
            '                        {offset: 1, color: \'#188df0\'}\n' +
            '                      ]\n' +
            '                    )\n' +
            '                  },\n' +
            '                  emphasis: {\n' +
            '                    color: new echarts.graphic.LinearGradient(\n' +
            '                      0, 0, 0, 1,\n' +
            '                      [\n' +
            '                        {offset: 0, color: \'#2378f7\'},\n' +
            '                        {offset: 0.7, color: \'#2378f7\'},\n' +
            '                        {offset: 1, color: \'#83bff6\'}\n' +
            '                      ]\n' +
            '                    )\n' +
            '                  }\n' +
            '                },\n' +
            '                data: data\n' +
            '              }\n' +
            '            ]\n' +
            '          };\n' +
            '\n' +
            '// Enable data zoom when user click bar.\n' +
            '          var zoomSize = 6;\n' +
            '          myChart12.on(\'click\', function (params) {\n' +
            '            console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);\n' +
            '            myChart12.dispatchAction({\n' +
            '              type: \'dataZoom\',\n' +
            '              startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],\n' +
            '              endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]\n' +
            '            });\n' +
            '          });\n' +
            '          myChart12.setOption(option12);\n',
          selfCode13:
            '          let option13 = {\n' +
            '            color: [\'#3398DB\'],\n' +
            '            tooltip : {\n' +
            '              trigger: \'axis\',\n' +
            '              axisPointer : {            // 坐标轴指示器，坐标轴触发有效\n' +
            '                type : \'shadow\'        // 默认为直线，可选为：\'line\' | \'shadow\'\n' +
            '              }\n' +
            '            },\n' +
            '            grid: {\n' +
            '              left: \'3%\',\n' +
            '              right: \'4%\',\n' +
            '              bottom: \'3%\',\n' +
            '              containLabel: true\n' +
            '            },\n' +
            '            xAxis : [\n' +
            '              {\n' +
            '                type : \'category\',\n' +
            '                data : [\'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\', \'Sun\'],\n' +
            '                axisTick: {\n' +
            '                  alignWithLabel: true\n' +
            '                }\n' +
            '              }\n' +
            '            ],\n' +
            '            yAxis : [\n' +
            '              {\n' +
            '                type : \'value\'\n' +
            '              }\n' +
            '            ],\n' +
            '            series : [\n' +
            '              {\n' +
            '                name:\'直接访问\',\n' +
            '                type:\'bar\',\n' +
            '                barWidth: \'60%\',\n' +
            '                data:[10, 52, 200, 334, 390, 330, 220]\n' +
            '              }\n' +
            '            ]\n' +
            '          };\n' +
            '          myChart13.setOption(option13);',
        }
      },
      mounted(){
        this.show()
      },
      methods:{
        show(){
          let myChart12 = echarts.init(document.getElementById('bar-first'));
          var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
          var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
          var yMax = 500;
          var dataShadow = [];

          for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
          }

          let option12 = {
            title: {
              text: '特性示例：渐变色 阴影 点击缩放',
              subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
            },
            xAxis: {
              data: dataAxis,
              axisLabel: {
                inside: true,
                textStyle: {
                  color: '#fff'
                }
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              z: 10
            },
            yAxis: {
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#999'
                }
              }
            },
            dataZoom: [
              {
                type: 'inside'
              }
            ],
            series: [
              { // For shadow
                type: 'bar',
                itemStyle: {
                  normal: {color: 'rgba(0,0,0,0.05)'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                data: dataShadow,
                animation: false
              },
              {
                type: 'bar',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    )
                  },
                  emphasis: {
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#2378f7'},
                        {offset: 0.7, color: '#2378f7'},
                        {offset: 1, color: '#83bff6'}
                      ]
                    )
                  }
                },
                data: data
              }
            ]
          };

// Enable data zoom when user click bar.
          var zoomSize = 6;
          myChart12.on('click', function (params) {
            console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            myChart12.dispatchAction({
              type: 'dataZoom',
              startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
              endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
            });
          });
          myChart12.setOption(option12);


          let myChart13 = echarts.init(document.getElementById('bar-second'));
          let option13 = {
            color: ['#3398DB'],
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series : [
              {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
              }
            ]
          };
          myChart13.setOption(option13);
        }
      }
    }
</script>

<style scoped>
  .bar{
    width: 80%;
    margin:0 auto;
  }
  #bar-first{
    height: 500px;
    background-color: #eeeeee;
  }
  #bar-second{
    height: 500px;
    margin-top:100px;
    background-color: #eeeeee;
  }
</style>
