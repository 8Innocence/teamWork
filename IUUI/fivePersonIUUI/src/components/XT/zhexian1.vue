<template>
    <div class="graph">
      <div id="zhexian"></div>
      <code-editor :code="selfCode"></code-editor>
      <div id="zhexian2"></div>
      <code-editor :code="selfCode2"></code-editor>
    </div>
</template>

<script>
  import echarts from "../../../node_modules/echarts/dist/echarts"
  import CodeEditor from "../ZDS/codeEditor"
    export default {
        name: "zhexian1",
      components:{CodeEditor,echarts},
      data(){
        return{
          selfCode:' var myChart = echarts.init(document.getElementById(\'zhexian\'));\n' +
            '            var option = {\n' +
            '              title:{\n' +
            '                text:\'实时车流量\',\n' +
            '                x:\'center\',\n' +
            '                y:10,\n' +
            '                textStyle:{\n' +
            '                  color:"#fff",\n' +
            '                  fontSize:15\n' +
            '                }\n' +
            '              },\n' +
            '              legend: {\n' +
            '                data:[{name:\'常住人口\',\n' +
            '                  textStyle:{\n' +
            '                    color:\'#fff\'\n' +
            '                  }}\n' +
            '                ],\n' +
            '                x:"300",\n' +
            '                y:"30",\n' +
            '                itemWidth:20,//图例的宽度\n' +
            '                itemHeight:5,//图例的高度\n' +
            '              },\n' +
            '              xAxis: {\n' +
            '                type: \'category\',\n' +
            '                data: [\'01\', \'02\', \'03\', \'04\', \'05\', \'06\', \'07\', \'08\', \'09\', \'10\', \'11\', \'12\'],\n' +
            '                boundaryGap: false,\n' +
            '                axisLabel: { //坐标轴刻度标签的相关设置\n' +
            '                  textStyle: {\n' +
            '                    color: \'#6a9cd5\',\n' +
            '                    margin:15,\n' +
            '                  },\n' +
            '                },\n' +
            '\n' +
            '                splitLine:{\n' +
            '                  show:false\n' +
            '                },\n' +
            '                axisLine:{\n' +
            '                  lineStyle:{\n' +
            '                    width:1,   //这里是坐标轴的宽度,可以去掉\n' +
            '                    color:\'#353b51\'\n' +
            '                  }\n' +
            '                }\n' +
            '              },\n' +
            '              yAxis: {\n' +
            '                name:\'单位:万人\',\n' +
            '                nameTextStyle:{\n' +
            '                  color:"#2b757e",\n' +
            '                },\n' +
            '                type: \'value\',\n' +
            '                min:200,\n' +
            '                max:1200,\n' +
            '                axisLabel: { //坐标轴刻度标签的相关设置\n' +
            '                  textStyle: {\n' +
            '                    color: \'#6a9cd5\',\n' +
            '                    margin:15,\n' +
            '                  },\n' +
            '                },\n' +
            '                splitLine: {\n' +
            '                  lineStyle: {\n' +
            '                    color: [\'#1c2238\']\n' +
            '                  }\n' +
            '                },\n' +
            '                axisLine:{\n' +
            '                  lineStyle:{\n' +
            '                    width:1,   //这里是坐标轴的宽度,可以去掉\n' +
            '                    color:\'#353b51\'\n' +
            '                  }\n' +
            '                }\n' +
            '              },\n' +
            '              grid:{\n' +
            '                x:38,\n' +
            '                x2:10,\n' +
            '                y2:30\n' +
            '              },\n' +
            '              series: [{\n' +
            '                name:\'常住人口\',\n' +
            '                data: [400, 300, 320, 500, 600, 600, 700,800,900,880,700,600],\n' +
            '                type: \'line\',\n' +
            '                smooth:true,\n' +
            '                symbolSize:3,\n' +
            '                itemStyle : {\n' +
            '                  normal : {\n' +
            '                    color:\'#34e2d9\',\n' +
            '                    lineStyle:{\n' +
            '                      color:\'#18c2c1\'\n' +
            '                    }\n' +
            '                  }\n' +
            '                },\n' +
            '                areaStyle: { //区域填充样式\n' +
            '                  normal: {\n' +
            '                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。\n' +
            '                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [\n' +
            '                      { offset: 0,  color: \'rgba(61,234,255, 0.4)\'},\n' +
            '                      { offset: 1,  color: \'rgba(61,234,255, 0)\'},\n' +
            '                    ], false),\n' +
            '                    shadowColor: \'rgba(53,142,215, 0.9)\', //阴影颜色\n' +
            '                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。\n' +
            '                  }\n' +
            '                }\n' +
            '              }]\n' +
            '            };\n' +
            '            myChart.setOption(option);',
          selfCode2:' var myChart2 = echarts.init(document.getElementById(\'zhexian2\'));\n' +
            '            option = {\n' +
            '              xAxis: {\n' +
            '                type: \'category\',\n' +
            '                data: [\'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\', \'Sun\']\n' +
            '              },\n' +
            '              yAxis: {\n' +
            '                type: \'value\'\n' +
            '              },\n' +
            '              series: [{\n' +
            '                data: [820, 932, 901, 934, 1290, 1330, 1320],\n' +
            '                type: \'line\'\n' +
            '              }]\n' +
            '            };\n' +
            '            myChart2.setOption(option);'
        }
      },
      mounted(){
          this.show()
      },
      methods:{
          show(){
            let myChart = echarts.init(document.getElementById('zhexian'));
            let option = {
              title:{
                text:'实时车流量',
                x:'center',
                y:10,
                textStyle:{
                  color:"#fff",
                  fontSize:15
                }
              },
              legend: {
                data:[{name:'常住人口',
                  textStyle:{
                    color:'#fff'
                  }}
                ],
                x:"300",
                y:"30",
                itemWidth:20,//图例的宽度
                itemHeight:5,//图例的高度
              },
              xAxis: {
                type: 'category',
                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                boundaryGap: false,
                axisLabel: { //坐标轴刻度标签的相关设置
                  textStyle: {
                    color: '#6a9cd5',
                    margin:15,
                  },
                },

                splitLine:{
                  show:false
                },
                axisLine:{
                  lineStyle:{
                    width:1,   //这里是坐标轴的宽度,可以去掉
                    color:'#353b51'
                  }
                }
              },
              yAxis: {
                name:'单位:万人',
                nameTextStyle:{
                  color:"#2b757e",
                },
                type: 'value',
                min:200,
                max:1200,
                axisLabel: { //坐标轴刻度标签的相关设置
                  textStyle: {
                    color: '#6a9cd5',
                    margin:15,
                  },
                },
                splitLine: {
                  lineStyle: {
                    color: ['#1c2238']
                  }
                },
                axisLine:{
                  lineStyle:{
                    width:1,   //这里是坐标轴的宽度,可以去掉
                    color:'#353b51'
                  }
                }
              },
              grid:{
                x:38,
                x2:10,
                y2:30
              },
              series: [{
                name:'常住人口',
                data: [400, 300, 320, 500, 600, 600, 700,800,900,880,700,600],
                type: 'line',
                smooth:true,
                symbolSize:3,
                itemStyle : {
                  normal : {
                    color:'#34e2d9',
                    lineStyle:{
                      color:'#18c2c1'
                    }
                  }
                },
                areaStyle: { //区域填充样式
                  normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0,  color: 'rgba(61,234,255, 0.4)'},
                      { offset: 1,  color: 'rgba(61,234,255, 0)'},
                    ], false),
                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                  }
                }
              }]
            };
            myChart.setOption(option);

            let myChart2 = echarts.init(document.getElementById('zhexian2'));
            let option2 = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
              }]
            };
            myChart2.setOption(option2);
          }
      }
    }
</script>

<style scoped>
  .graph{
    width: 80%;
    margin:0 auto;
  }
#zhexian{
  height: 500px;
  background-color: #eeeeee;
}
#zhexian2{
  height: 500px;
  margin-top:100px;
  background-color: #eeeeee;
}
</style>
