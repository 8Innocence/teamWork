<template>
    <div class="circle">
      <div id="circle-first"></div>
      <code-editor :code="selfCode3"></code-editor>
      <div id="circle-second"></div>
      <code-editor :code="selfCode4"></code-editor>
    </div>
</template>、

<script>
    import echarts from "../../../node_modules/echarts/dist/echarts"
    import CodeEditor from "../ZDS/codeEditor";
    export default {
        name: "bingxing",
      components: {echarts,CodeEditor},
      data(){
        return{
          selfCode3:' let myChart3 = echarts.init(document.getElementById(\'circle-first\'));\n' +
            '            let option3 = {\n' +
            '              title : {\n' +
            '                text: \'某站点用户访问来源\',\n' +
            '                subtext: \'纯属虚构\',\n' +
            '                x:\'center\'\n' +
            '              },\n' +
            '              tooltip : {\n' +
            '                trigger: \'item\',\n' +
            '                formatter: "{a} <br/>{b} : {c} ({d}%)"\n' +
            '              },\n' +
            '              legend: {\n' +
            '                orient: \'vertical\',\n' +
            '                left: \'left\',\n' +
            '                data: [\'直接访问\',\'邮件营销\',\'联盟广告\',\'视频广告\',\'搜索引擎\']\n' +
            '              },\n' +
            '              series : [\n' +
            '                {\n' +
            '                  name: \'访问来源\',\n' +
            '                  type: \'pie\',\n' +
            '                  radius : \'55%\',\n' +
            '                  center: [\'50%\', \'60%\'],\n' +
            '                  data:[\n' +
            '                    {value:335, name:\'直接访问\'},\n' +
            '                    {value:310, name:\'邮件营销\'},\n' +
            '                    {value:234, name:\'联盟广告\'},\n' +
            '                    {value:135, name:\'视频广告\'},\n' +
            '                    {value:1548, name:\'搜索引擎\'}\n' +
            '                  ],\n' +
            '                  itemStyle: {\n' +
            '                    emphasis: {\n' +
            '                      shadowBlur: 10,\n' +
            '                      shadowOffsetX: 0,\n' +
            '                      shadowColor: \'rgba(0, 0, 0, 0.5)\'\n' +
            '                    }\n' +
            '                  }\n' +
            '                }\n' +
            '              ]\n' +
            '            };\n' +
            '            myChart3.setOption(option3);',
          selfCode4:' let myChart4 = echarts.init(document.getElementById(\'zhexian2\'));\n' +
            '            let option4 = {\n' +
            '              tooltip: {\n' +
            '                trigger: \'item\',\n' +
            '                formatter: "{a} <br/>{b}: {c} ({d}%)"\n' +
            '              },\n' +
            '              legend: {\n' +
            '                orient: \'vertical\',\n' +
            '                x: \'left\',\n' +
            '                data:[\'直接访问\',\'邮件营销\',\'联盟广告\',\'视频广告\',\'搜索引擎\']\n' +
            '              },\n' +
            '              series: [\n' +
            '                {\n' +
            '                  name:\'访问来源\',\n' +
            '                  type:\'pie\',\n' +
            '                  radius: [\'50%\', \'70%\'],\n' +
            '                  avoidLabelOverlap: false,\n' +
            '                  label: {\n' +
            '                    normal: {\n' +
            '                      show: false,\n' +
            '                      position: \'center\'\n' +
            '                    },\n' +
            '                    emphasis: {\n' +
            '                      show: true,\n' +
            '                      textStyle: {\n' +
            '                        fontSize: \'30\',\n' +
            '                        fontWeight: \'bold\'\n' +
            '                      }\n' +
            '                    }\n' +
            '                  },\n' +
            '                  labelLine: {\n' +
            '                    normal: {\n' +
            '                      show: false\n' +
            '                    }\n' +
            '                  },\n' +
            '                  data:[\n' +
            '                    {value:335, name:\'直接访问\'},\n' +
            '                    {value:310, name:\'邮件营销\'},\n' +
            '                    {value:234, name:\'联盟广告\'},\n' +
            '                    {value:135, name:\'视频广告\'},\n' +
            '                    {value:1548, name:\'搜索引擎\'}\n' +
            '                  ]\n' +
            '                }\n' +
            '              ]\n' +
            '            };\n' +
            '            myChart4.setOption(option4);',
        }
      },
      mounted(){
          this.show()
      },
      methods:{
          show(){
            let myChart3 = echarts.init(document.getElementById('circle-first'));
            let option3 = {
              title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center'
              },
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
              },
              series : [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                  ],
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            };
            myChart3.setOption(option3);

            let myChart4 = echarts.init(document.getElementById('circle-second'));
            let option4 = {
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
              },
              series: [
                {
                  name:'访问来源',
                  type:'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      show: true,
                      textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                  ]
                }
              ]
            };
            myChart4.setOption(option4);
          }
      }
    }
</script>

<style scoped>
  .circle{
    width: 80%;
    margin:0 auto;
  }
  #circle-first{
    height: 500px;
    background-color: #eeeeee;
  }
  #circle-second{
    height: 500px;
    margin-top:100px;
    background-color: #eeeeee;
  }
</style>
