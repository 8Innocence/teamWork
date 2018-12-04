<template>
  <div class="gauge">
    <div id="gauge-first"></div>
    <code-editor :code="selfCode10"></code-editor>
    <div id="gauge-second"></div>
    <code-editor :code="selfCode11"></code-editor>
  </div>
</template>

<script>
  import echarts from "../../../node_modules/echarts/dist/echarts"
  import CodeEditor from "../ZDS/codeEditor";
    export default {
        name: "yibiaopan",
      components: {echarts,CodeEditor},
      data(){
        return{
          selfCode10:'option = {\n' +
            '    tooltip : {\n' +
            '        formatter: "{a} <br/>{b} : {c}%"\n' +
            '    },\n' +
            '    toolbox: {\n' +
            '        feature: {\n' +
            '            restore: {},\n' +
            '            saveAsImage: {}\n' +
            '        }\n' +
            '    },\n' +
            '    series: [\n' +
            '        {\n' +
            '            name: \'业务指标\',\n' +
            '            type: \'gauge\',\n' +
            '            detail: {formatter:\'{value}%\'},\n' +
            '            data: [{value: 50, name: \'完成率\'}]\n' +
            '        }\n' +
            '    ]\n' +
            '};\n' +
            '\n' +
            'setInterval(function () {\n' +
            '    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;\n' +
            '    myChart.setOption(option, true);\n' +
            '},2000);\n',
          selfCode11:'option = {\n' +
            '    backgroundColor: \'#1b1b1b\',\n' +
            '    tooltip : {\n' +
            '        formatter: "{a} <br/>{c} {b}"\n' +
            '    },\n' +
            '    toolbox: {\n' +
            '        show : true,\n' +
            '        feature : {\n' +
            '            mark : {show: true},\n' +
            '            restore : {show: true},\n' +
            '            saveAsImage : {show: true}\n' +
            '        }\n' +
            '    },\n' +
            '    series : [\n' +
            '        {\n' +
            '            name:\'速度\',\n' +
            '            type:\'gauge\',\n' +
            '            min:0,\n' +
            '            max:220,\n' +
            '            splitNumber:11,\n' +
            '            radius: \'50%\',\n' +
            '            axisLine: {            // 坐标轴线\n' +
            '                lineStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    color: [[0.09, \'lime\'],[0.82, \'#1e90ff\'],[1, \'#ff4500\']],\n' +
            '                    width: 3,\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            axisLabel: {            // 坐标轴小标记\n' +
            '                textStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    fontWeight: \'bolder\',\n' +
            '                    color: \'#fff\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            axisTick: {            // 坐标轴小标记\n' +
            '                length :15,        // 属性length控制线长\n' +
            '                lineStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    color: \'auto\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            splitLine: {           // 分隔线\n' +
            '                length :25,         // 属性length控制线长\n' +
            '                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式\n' +
            '                    width:3,\n' +
            '                    color: \'#fff\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            pointer: {           // 分隔线\n' +
            '                shadowColor : \'#fff\', //默认透明\n' +
            '                shadowBlur: 5\n' +
            '            },\n' +
            '            title : {\n' +
            '                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE\n' +
            '                    fontWeight: \'bolder\',\n' +
            '                    fontSize: 20,\n' +
            '                    fontStyle: \'italic\',\n' +
            '                    color: \'#fff\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            detail : {\n' +
            '                backgroundColor: \'rgba(30,144,255,0.8)\',\n' +
            '                borderWidth: 1,\n' +
            '                borderColor: \'#fff\',\n' +
            '                shadowColor : \'#fff\', //默认透明\n' +
            '                shadowBlur: 5,\n' +
            '                offsetCenter: [0, \'50%\'],       // x, y，单位px\n' +
            '                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE\n' +
            '                    fontWeight: \'bolder\',\n' +
            '                    color: \'#fff\'\n' +
            '                }\n' +
            '            },\n' +
            '            data:[{value: 40, name: \'km/h\'}]\n' +
            '        },\n' +
            '        {\n' +
            '            name:\'转速\',\n' +
            '            type:\'gauge\',\n' +
            '            center : [\'25%\', \'55%\'],    // 默认全局居中\n' +
            '            radius : \'30%\',\n' +
            '            min:0,\n' +
            '            max:7,\n' +
            '            endAngle:45,\n' +
            '            splitNumber:7,\n' +
            '            axisLine: {            // 坐标轴线\n' +
            '                lineStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    color: [[0.29, \'lime\'],[0.86, \'#1e90ff\'],[1, \'#ff4500\']],\n' +
            '                    width: 2,\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            axisLabel: {            // 坐标轴小标记\n' +
            '                textStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    fontWeight: \'bolder\',\n' +
            '                    color: \'#fff\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            axisTick: {            // 坐标轴小标记\n' +
            '                length :12,        // 属性length控制线长\n' +
            '                lineStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    color: \'auto\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            splitLine: {           // 分隔线\n' +
            '                length :20,         // 属性length控制线长\n' +
            '                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式\n' +
            '                    width:3,\n' +
            '                    color: \'#fff\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            pointer: {\n' +
            '                width:5,\n' +
            '                shadowColor : \'#fff\', //默认透明\n' +
            '                shadowBlur: 5\n' +
            '            },\n' +
            '            title : {\n' +
            '                offsetCenter: [0, \'-30%\'],       // x, y，单位px\n' +
            '                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE\n' +
            '                    fontWeight: \'bolder\',\n' +
            '                    fontStyle: \'italic\',\n' +
            '                    color: \'#fff\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            detail : {\n' +
            '                //backgroundColor: \'rgba(30,144,255,0.8)\',\n' +
            '               // borderWidth: 1,\n' +
            '                borderColor: \'#fff\',\n' +
            '                shadowColor : \'#fff\', //默认透明\n' +
            '                shadowBlur: 5,\n' +
            '                width: 80,\n' +
            '                height:30,\n' +
            '                offsetCenter: [25, \'20%\'],       // x, y，单位px\n' +
            '                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE\n' +
            '                    fontWeight: \'bolder\',\n' +
            '                    color: \'#fff\'\n' +
            '                }\n' +
            '            },\n' +
            '            data:[{value: 1.5, name: \'x1000 r/min\'}]\n' +
            '        },\n' +
            '        {\n' +
            '            name:\'油表\',\n' +
            '            type:\'gauge\',\n' +
            '            center : [\'75%\', \'50%\'],    // 默认全局居中\n' +
            '            radius : \'30%\',\n' +
            '            min:0,\n' +
            '            max:2,\n' +
            '            startAngle:135,\n' +
            '            endAngle:45,\n' +
            '            splitNumber:2,\n' +
            '            axisLine: {            // 坐标轴线\n' +
            '                lineStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    color: [[0.2, \'lime\'],[0.8, \'#1e90ff\'],[1, \'#ff4500\']],\n' +
            '                    width: 2,\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            axisTick: {            // 坐标轴小标记\n' +
            '                length :12,        // 属性length控制线长\n' +
            '                lineStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    color: \'auto\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            axisLabel: {\n' +
            '                textStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    fontWeight: \'bolder\',\n' +
            '                    color: \'#fff\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                },\n' +
            '                formatter:function(v){\n' +
            '                    switch (v + \'\') {\n' +
            '                        case \'0\' : return \'E\';\n' +
            '                        case \'1\' : return \'Gas\';\n' +
            '                        case \'2\' : return \'F\';\n' +
            '                    }\n' +
            '                }\n' +
            '            },\n' +
            '            splitLine: {           // 分隔线\n' +
            '                length :15,         // 属性length控制线长\n' +
            '                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式\n' +
            '                    width:3,\n' +
            '                    color: \'#fff\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            pointer: {\n' +
            '                width:2,\n' +
            '                shadowColor : \'#fff\', //默认透明\n' +
            '                shadowBlur: 5\n' +
            '            },\n' +
            '            title : {\n' +
            '                show: false\n' +
            '            },\n' +
            '            detail : {\n' +
            '                show: false\n' +
            '            },\n' +
            '            data:[{value: 0.5, name: \'gas\'}]\n' +
            '        },\n' +
            '        {\n' +
            '            name:\'水表\',\n' +
            '            type:\'gauge\',\n' +
            '            center : [\'75%\', \'50%\'],    // 默认全局居中\n' +
            '            radius : \'30%\',\n' +
            '            min:0,\n' +
            '            max:2,\n' +
            '            startAngle:315,\n' +
            '            endAngle:225,\n' +
            '            splitNumber:2,\n' +
            '            axisLine: {            // 坐标轴线\n' +
            '                lineStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    color: [[0.2, \'lime\'],[0.8, \'#1e90ff\'],[1, \'#ff4500\']],\n' +
            '                    width: 2,\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            axisTick: {            // 坐标轴小标记\n' +
            '                show: false\n' +
            '            },\n' +
            '            axisLabel: {\n' +
            '                textStyle: {       // 属性lineStyle控制线条样式\n' +
            '                    fontWeight: \'bolder\',\n' +
            '                    color: \'#fff\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                },\n' +
            '                formatter:function(v){\n' +
            '                    switch (v + \'\') {\n' +
            '                        case \'0\' : return \'H\';\n' +
            '                        case \'1\' : return \'Water\';\n' +
            '                        case \'2\' : return \'C\';\n' +
            '                    }\n' +
            '                }\n' +
            '            },\n' +
            '            splitLine: {           // 分隔线\n' +
            '                length :15,         // 属性length控制线长\n' +
            '                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式\n' +
            '                    width:3,\n' +
            '                    color: \'#fff\',\n' +
            '                    shadowColor : \'#fff\', //默认透明\n' +
            '                    shadowBlur: 10\n' +
            '                }\n' +
            '            },\n' +
            '            pointer: {\n' +
            '                width:2,\n' +
            '                shadowColor : \'#fff\', //默认透明\n' +
            '                shadowBlur: 5\n' +
            '            },\n' +
            '            title : {\n' +
            '                show: false\n' +
            '            },\n' +
            '            detail : {\n' +
            '                show: false\n' +
            '            },\n' +
            '            data:[{value: 0.5, name: \'gas\'}]\n' +
            '        }\n' +
            '    ]\n' +
            '};\n' +
            '\n' +
            'setInterval(function (){\n' +
            '    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;\n' +
            '    option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;\n' +
            '    option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;\n' +
            '    option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;\n' +
            '    myChart.setOption(option);\n' +
            '},2000)\n',
        }
      },
      mounted(){
        this.show()
      },
      methods:{
        show(){
          let myChart10 = echarts.init(document.getElementById('gauge-first'));
          let option10 = {
            tooltip : {
              formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
              feature: {
                restore: {},
                saveAsImage: {}
              }
            },
            series: [
              {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: [{value: 50, name: '完成率'}]
              }
            ]
          };
          setInterval(function () {
            option10.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            myChart10.setOption(option10, true);
          },2000);

          let myChart11 = echarts.init(document.getElementById('gauge-second'));
          let option11 = {
            backgroundColor: '#1b1b1b',
            tooltip : {
              formatter: "{a} <br/>{c} {b}"
            },
            toolbox: {
              show : true,
              feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            series : [
              {
                name:'速度',
                type:'gauge',
                min:0,
                max:220,
                splitNumber:11,
                radius: '50%',
                axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                    width: 3,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                axisLabel: {            // 坐标轴小标记
                  textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                axisTick: {            // 坐标轴小标记
                  length :15,        // 属性length控制线长
                  lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                splitLine: {           // 分隔线
                  length :25,         // 属性length控制线长
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                pointer: {           // 分隔线
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 5
                },
                title : {
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                detail : {
                  backgroundColor: 'rgba(30,144,255,0.8)',
                  borderWidth: 1,
                  borderColor: '#fff',
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 5,
                  offsetCenter: [0, '50%'],       // x, y，单位px
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                  }
                },
                data:[{value: 40, name: 'km/h'}]
              },
              {
                name:'转速',
                type:'gauge',
                center : ['25%', '55%'],    // 默认全局居中
                radius : '30%',
                min:0,
                max:7,
                endAngle:45,
                splitNumber:7,
                axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                axisLabel: {            // 坐标轴小标记
                  textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                axisTick: {            // 坐标轴小标记
                  length :12,        // 属性length控制线长
                  lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                splitLine: {           // 分隔线
                  length :20,         // 属性length控制线长
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                pointer: {
                  width:5,
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 5
                },
                title : {
                  offsetCenter: [0, '-30%'],       // x, y，单位px
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                detail : {
                  //backgroundColor: 'rgba(30,144,255,0.8)',
                  // borderWidth: 1,
                  borderColor: '#fff',
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 5,
                  width: 80,
                  height:30,
                  offsetCenter: [25, '20%'],       // x, y，单位px
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                  }
                },
                data:[{value: 1.5, name: 'x1000 r/min'}]
              },
              {
                name:'油表',
                type:'gauge',
                center : ['75%', '50%'],    // 默认全局居中
                radius : '30%',
                min:0,
                max:2,
                startAngle:135,
                endAngle:45,
                splitNumber:2,
                axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                axisTick: {            // 坐标轴小标记
                  length :12,        // 属性length控制线长
                  lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                axisLabel: {
                  textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  },
                  formatter:function(v){
                    switch (v + '') {
                      case '0' : return 'E';
                      case '1' : return 'Gas';
                      case '2' : return 'F';
                    }
                  }
                },
                splitLine: {           // 分隔线
                  length :15,         // 属性length控制线长
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                pointer: {
                  width:2,
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 5
                },
                title : {
                  show: false
                },
                detail : {
                  show: false
                },
                data:[{value: 0.5, name: 'gas'}]
              },
              {
                name:'水表',
                type:'gauge',
                center : ['75%', '50%'],    // 默认全局居中
                radius : '30%',
                min:0,
                max:2,
                startAngle:315,
                endAngle:225,
                splitNumber:2,
                axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                axisTick: {            // 坐标轴小标记
                  show: false
                },
                axisLabel: {
                  textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  },
                  formatter:function(v){
                    switch (v + '') {
                      case '0' : return 'H';
                      case '1' : return 'Water';
                      case '2' : return 'C';
                    }
                  }
                },
                splitLine: {           // 分隔线
                  length :15,         // 属性length控制线长
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                  }
                },
                pointer: {
                  width:2,
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 5
                },
                title : {
                  show: false
                },
                detail : {
                  show: false
                },
                data:[{value: 0.5, name: 'gas'}]
              }
            ]
          };
          setInterval(function (){
            option11.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
            option11.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
            option11.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
            option11.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
            myChart11.setOption(option11);
          },2000)
        }
      }
    }
</script>

<style scoped>
  .gauge{
    width: 80%;
    margin:0 auto;
  }
  #gauge-first{
    height: 500px;
    background-color: #eeeeee;
  }
  #gauge-second{
    height: 500px;
    margin-top:100px;
    background-color: #eeeeee;
  }
</style>
