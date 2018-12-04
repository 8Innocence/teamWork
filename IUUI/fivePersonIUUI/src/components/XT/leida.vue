<template>
  <div class="radar">
    <div id="radar-first"></div>
    <code-editor :code="selfCode5"></code-editor>
    <div id="radar-second"></div>
    <code-editor :code="selfCode6"></code-editor>
  </div>
</template>

<script>
    import echarts from "../../../node_modules/echarts/dist/echarts"
    import CodeEditor from "../ZDS/codeEditor";
    export default {
        name: "leida",
      components: {echarts,CodeEditor},
      data(){
        return{
          selfCode5:' let myChart5 = echarts.init(document.getElementById(\'radar-first\'));\n' +
            '          let option5 = {\n' +
            '            title: {\n' +
            '              text: \'基础雷达图\'\n' +
            '            },\n' +
            '            tooltip: {},\n' +
            '            legend: {\n' +
            '              data: [\'预算分配（Allocated Budget）\', \'实际开销（Actual Spending）\']\n' +
            '            },\n' +
            '            radar: {\n' +
            '              // shape: \'circle\',\n' +
            '              name: {\n' +
            '                textStyle: {\n' +
            '                  color: \'#fff\',\n' +
            '                  backgroundColor: \'#999\',\n' +
            '                  borderRadius: 3,\n' +
            '                  padding: [3, 5]\n' +
            '                }\n' +
            '              },\n' +
            '              indicator: [\n' +
            '                { name: \'销售（sales）\', max: 6500},\n' +
            '                { name: \'管理（Administration）\', max: 16000},\n' +
            '                { name: \'信息技术（Information Techology）\', max: 30000},\n' +
            '                { name: \'客服（Customer Support）\', max: 38000},\n' +
            '                { name: \'研发（Development）\', max: 52000},\n' +
            '                { name: \'市场（Marketing）\', max: 25000}\n' +
            '              ]\n' +
            '            },\n' +
            '            series: [{\n' +
            '              name: \'预算 vs 开销（Budget vs spending）\',\n' +
            '              type: \'radar\',\n' +
            '              // areaStyle: {normal: {}},\n' +
            '              data : [\n' +
            '                {\n' +
            '                  value : [4300, 10000, 28000, 35000, 50000, 19000],\n' +
            '                  name : \'预算分配（Allocated Budget）\'\n' +
            '                },\n' +
            '                {\n' +
            '                  value : [5000, 14000, 28000, 31000, 42000, 21000],\n' +
            '                  name : \'实际开销（Actual Spending）\'\n' +
            '                }\n' +
            '              ]\n' +
            '            }]\n' +
            '          };\n' +
            '          myChart5.setOption(option5);',
          selfCode6:'let myChart6 = echarts.init(document.getElementById(\'radar-second\'));\n' +
            '          let option6 = {\n' +
            '            title: {\n' +
            '              text: \'浏览器占比变化\',\n' +
            '              subtext: \'纯属虚构\',\n' +
            '              top: 10,\n' +
            '              left: 10\n' +
            '            },\n' +
            '            tooltip: {\n' +
            '              trigger: \'item\',\n' +
            '              backgroundColor : \'rgba(0,0,250,0.2)\'\n' +
            '            },\n' +
            '            legend: {\n' +
            '              type: \'scroll\',\n' +
            '              bottom: 10,\n' +
            '              data: (function (){\n' +
            '                var list = [];\n' +
            '                for (var i = 1; i <=28; i++) {\n' +
            '                  list.push(i + 2000 + \'\');\n' +
            '                }\n' +
            '                return list;\n' +
            '              })()\n' +
            '            },\n' +
            '            visualMap: {\n' +
            '              top: \'middle\',\n' +
            '              right: 10,\n' +
            '              color: [\'red\', \'yellow\'],\n' +
            '              calculable: true\n' +
            '            },\n' +
            '            radar: {\n' +
            '              indicator : [\n' +
            '                { text: \'IE8-\', max: 400},\n' +
            '                { text: \'IE9+\', max: 400},\n' +
            '                { text: \'Safari\', max: 400},\n' +
            '                { text: \'Firefox\', max: 400},\n' +
            '                { text: \'Chrome\', max: 400}\n' +
            '              ]\n' +
            '            },\n' +
            '            series : (function (){\n' +
            '              var series = [];\n' +
            '              for (var i = 1; i <= 28; i++) {\n' +
            '                series.push({\n' +
            '                  name:\'浏览器（数据纯属虚构）\',\n' +
            '                  type: \'radar\',\n' +
            '                  symbol: \'none\',\n' +
            '                  lineStyle: {\n' +
            '                    width: 1\n' +
            '                  },\n' +
            '                  emphasis: {\n' +
            '                    areaStyle: {\n' +
            '                      color: \'rgba(0,250,0,0.3)\'\n' +
            '                    }\n' +
            '                  },\n' +
            '                  data:[\n' +
            '                    {\n' +
            '                      value:[\n' +
            '                        (40 - i) * 10,\n' +
            '                        (38 - i) * 4 + 60,\n' +
            '                        i * 5 + 10,\n' +
            '                        i * 9,\n' +
            '                        i * i /2\n' +
            '                      ],\n' +
            '                      name: i + 2000 + \'\'\n' +
            '                    }\n' +
            '                  ]\n' +
            '                });\n' +
            '              }\n' +
            '              return series;\n' +
            '            })()\n' +
            '          };\n' +
            '          myChart6.setOption(option6);'
        }
      },
      mounted(){
        this.show()
      },
     methods:{
        show(){
          let myChart5 = echarts.init(document.getElementById('radar-first'));
          let option5 = {
            title: {
              text: '基础雷达图'
            },
            tooltip: {},
            legend: {
              data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
              // shape: 'circle',
              name: {
                textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
                }
              },
              indicator: [
                { name: '销售（sales）', max: 6500},
                { name: '管理（Administration）', max: 16000},
                { name: '信息技术（Information Techology）', max: 30000},
                { name: '客服（Customer Support）', max: 38000},
                { name: '研发（Development）', max: 52000},
                { name: '市场（Marketing）', max: 25000}
              ]
            },
            series: [{
              name: '预算 vs 开销（Budget vs spending）',
              type: 'radar',
              // areaStyle: {normal: {}},
              data : [
                {
                  value : [4300, 10000, 28000, 35000, 50000, 19000],
                  name : '预算分配（Allocated Budget）'
                },
                {
                  value : [5000, 14000, 28000, 31000, 42000, 21000],
                  name : '实际开销（Actual Spending）'
                }
              ]
            }]
          };
          myChart5.setOption(option5);

          let myChart6 = echarts.init(document.getElementById('radar-second'));
          let option6 = {
            title: {
              text: '浏览器占比变化',
              subtext: '纯属虚构',
              top: 10,
              left: 10
            },
            tooltip: {
              trigger: 'item',
              backgroundColor : 'rgba(0,0,250,0.2)'
            },
            legend: {
              type: 'scroll',
              bottom: 10,
              data: (function (){
                var list = [];
                for (var i = 1; i <=28; i++) {
                  list.push(i + 2000 + '');
                }
                return list;
              })()
            },
            visualMap: {
              top: 'middle',
              right: 10,
              color: ['red', 'yellow'],
              calculable: true
            },
            radar: {
              indicator : [
                { text: 'IE8-', max: 400},
                { text: 'IE9+', max: 400},
                { text: 'Safari', max: 400},
                { text: 'Firefox', max: 400},
                { text: 'Chrome', max: 400}
              ]
            },
            series : (function (){
              var series = [];
              for (var i = 1; i <= 28; i++) {
                series.push({
                  name:'浏览器（数据纯属虚构）',
                  type: 'radar',
                  symbol: 'none',
                  lineStyle: {
                    width: 1
                  },
                  emphasis: {
                    areaStyle: {
                      color: 'rgba(0,250,0,0.3)'
                    }
                  },
                  data:[
                    {
                      value:[
                        (40 - i) * 10,
                        (38 - i) * 4 + 60,
                        i * 5 + 10,
                        i * 9,
                        i * i /2
                      ],
                      name: i + 2000 + ''
                    }
                  ]
                });
              }
              return series;
            })()
          };
          myChart6.setOption(option6);

        }
     }
    }
</script>

<style scoped>
  .radar{
    width: 80%;
    margin:0 auto;
  }
  #radar-first{
    height: 500px;
    background-color: #eeeeee;
  }
  #radar-second{
    height: 500px;
    margin-top:100px;
    background-color: #eeeeee;
  }
</style>
