<template>
  <div class="sun">
    <div id="sun-first"></div>
    <code-editor :code="selfCode7"></code-editor>
    <div id="sun-second"></div>
    <code-editor :code="selfCode8"></code-editor>
  </div>
</template>

<script>
  import echarts from "../../../node_modules/echarts/dist/echarts"
import CodeEditor from "../ZDS/codeEditor";
    export default {
        name: "xuri",
      components: {echarts,CodeEditor},
      data(){
        return{
          selfCode7:'  let myChart7 = echarts.init(document.getElementById(\'sun-first\'));\n' +
            '          let option7 = {\n' +
            '            silent: true,\n' +
            '            series: {\n' +
            '              radius: [\'15%\', \'80%\'],\n' +
            '              type: \'sunburst\',\n' +
            '              sort: null,\n' +
            '              highlightPolicy: \'ancestor\',\n' +
            '              data: [{\n' +
            '                value: 8,\n' +
            '                children: [{\n' +
            '                  value: 4,\n' +
            '                  children: [{\n' +
            '                    value: 2\n' +
            '                  }, {\n' +
            '                    value: 1\n' +
            '                  }, {\n' +
            '                    value: 1\n' +
            '                  }, {\n' +
            '                    value: 0.5\n' +
            '                  }]\n' +
            '                }, {\n' +
            '                  value: 2\n' +
            '                }]\n' +
            '              }, {\n' +
            '                value: 4,\n' +
            '                children: [{\n' +
            '                  children: [{\n' +
            '                    value: 2\n' +
            '                  }]\n' +
            '                }]\n' +
            '              }, {\n' +
            '                value: 4,\n' +
            '                children: [{\n' +
            '                  children: [{\n' +
            '                    value: 2\n' +
            '                  }]\n' +
            '                }]\n' +
            '              }, {\n' +
            '                value: 3,\n' +
            '                children: [{\n' +
            '                  children: [{\n' +
            '                    value: 1\n' +
            '                  }]\n' +
            '                }]\n' +
            '              }],\n' +
            '              label: {\n' +
            '                color: \'#fff\',\n' +
            '                textBorderColor: \'#666\',\n' +
            '                textBorderWidth: 2,\n' +
            '                borderColor: \'#999\',\n' +
            '                borderWidth: 1,\n' +
            '                formatter: function (param) {\n' +
            '                  var depth = param.treePathInfo.length;\n' +
            '                  if (depth === 2) {\n' +
            '                    return \'radial\';\n' +
            '                  }\n' +
            '                  else if (depth === 3) {\n' +
            '                    return \'tangential\';\n' +
            '                  }\n' +
            '                  else if (depth === 4) {\n' +
            '                    return \'0\';\n' +
            '                  }\n' +
            '                }\n' +
            '              },\n' +
            '              levels: [{}, {\n' +
            '                itemStyle: {\n' +
            '                  color: \'red\'\n' +
            '                },\n' +
            '                label: {\n' +
            '                  rotate: \'radial\'\n' +
            '                }\n' +
            '              }, {\n' +
            '                itemStyle: {\n' +
            '                  color: \'orange\'\n' +
            '                },\n' +
            '                label: {\n' +
            '                  rotate: \'tangential\'\n' +
            '                }\n' +
            '              }, {\n' +
            '                itemStyle: {\n' +
            '                  color: \'yellow\'\n' +
            '                },\n' +
            '                label: {\n' +
            '                  rotate: 0\n' +
            '                }\n' +
            '              }]\n' +
            '            }\n' +
            '          };\n' +
            '          myChart7.setOption(option7);',
          selfCode8:'var data = [{\n' +
            '    name: \'Flora\',\n' +
            '    itemStyle: {\n' +
            '        color: \'#da0d68\'\n' +
            '    },\n' +
            '    children: [{\n' +
            '        name: \'Black Tea\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#975e6d\'\n' +
            '        }\n' +
            '    }, {\n' +
            '        name: \'Floral\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#e0719c\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Chamomile\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#f99e1c\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Rose\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#ef5a78\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Jasmine\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#f7f1bd\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }]\n' +
            '}, {\n' +
            '    name: \'Fruity\',\n' +
            '    itemStyle: {\n' +
            '        color: \'#da1d23\'\n' +
            '    },\n' +
            '    children: [{\n' +
            '        name: \'Berry\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#dd4c51\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Blackberry\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#3e0317\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Raspberry\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#e62969\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Blueberry\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#6569b0\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Strawberry\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#ef2d36\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }, {\n' +
            '        name: \'Dried Fruit\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#c94a44\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Raisin\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#b53b54\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Prune\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#a5446f\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }, {\n' +
            '        name: \'Other Fruit\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#dd4c51\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Coconut\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#f2684b\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Cherry\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#e73451\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Pomegranate\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#e65656\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Pineapple\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#f89a1c\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Grape\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#aeb92c\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Apple\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#4eb849\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Peach\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#f68a5c\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Pear\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#baa635\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }, {\n' +
            '        name: \'Citrus Fruit\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#f7a128\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Grapefruit\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#f26355\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Orange\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#e2631e\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Lemon\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#fde404\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Lime\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#7eb138\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }]\n' +
            '}, {\n' +
            '    name: \'Sour/\\nFermented\',\n' +
            '    itemStyle: {\n' +
            '        color: \'#ebb40f\'\n' +
            '    },\n' +
            '    children: [{\n' +
            '        name: \'Sour\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#e1c315\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Sour Aromatics\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#9ea718\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Acetic Acid\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#94a76f\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Butyric Acid\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#d0b24f\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Isovaleric Acid\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#8eb646\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Citric Acid\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#faef07\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Malic Acid\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#c1ba07\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }, {\n' +
            '        name: \'Alcohol/\\nFremented\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#b09733\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Winey\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#8f1c53\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Whiskey\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#b34039\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Fremented\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#ba9232\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Overripe\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#8b6439\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }]\n' +
            '}, {\n' +
            '    name: \'Green/\\nVegetative\',\n' +
            '    itemStyle: {\n' +
            '        color: \'#187a2f\'\n' +
            '    },\n' +
            '    children: [{\n' +
            '        name: \'Olive Oil\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#a2b029\'\n' +
            '        }\n' +
            '    }, {\n' +
            '        name: \'Raw\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#718933\'\n' +
            '        }\n' +
            '    }, {\n' +
            '        name: \'Green/\\nVegetative\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#3aa255\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Under-ripe\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#a2bb2b\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Peapod\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#62aa3c\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Fresh\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#03a653\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Dark Green\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#038549\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Vegetative\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#28b44b\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Hay-like\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#a3a830\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Herb-like\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#7ac141\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }, {\n' +
            '        name: \'Beany\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#5e9a80\'\n' +
            '        }\n' +
            '    }]\n' +
            '}, {\n' +
            '    name: \'Other\',\n' +
            '    itemStyle: {\n' +
            '        color: \'#0aa3b5\'\n' +
            '    },\n' +
            '    children: [{\n' +
            '        name: \'Papery/Musty\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#9db2b7\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Stale\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#8b8c90\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Cardboard\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#beb276\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Papery\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#fefef4\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Woody\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#744e03\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Moldy/Damp\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#a3a36f\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Musty/Dusty\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#c9b583\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Musty/Earthy\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#978847\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Animalic\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#9d977f\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Meaty Brothy\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#cc7b6a\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Phenolic\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#db646a\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }, {\n' +
            '        name: \'Chemical\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#76c0cb\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Bitter\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#80a89d\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Salty\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#def2fd\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Medicinal\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#7a9bae\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Petroleum\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#039fb8\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Skunky\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#5e777b\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Rubber\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#120c0c\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }]\n' +
            '}, {\n' +
            '    name: \'Roasted\',\n' +
            '    itemStyle: {\n' +
            '        color: \'#c94930\'\n' +
            '    },\n' +
            '    children: [{\n' +
            '        name: \'Pipe Tobacco\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#caa465\'\n' +
            '        }\n' +
            '    }, {\n' +
            '        name: \'Tobacco\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#dfbd7e\'\n' +
            '        }\n' +
            '    }, {\n' +
            '        name: \'Burnt\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#be8663\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Acrid\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#b9a449\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Ashy\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#899893\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Smoky\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#a1743b\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Brown, Roast\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#894810\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }, {\n' +
            '        name: \'Cereal\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#ddaf61\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Grain\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#b7906f\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Malt\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#eb9d5f\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }]\n' +
            '}, {\n' +
            '    name: \'Spices\',\n' +
            '    itemStyle: {\n' +
            '        color: \'#ad213e\'\n' +
            '    },\n' +
            '    children: [{\n' +
            '        name: \'Pungent\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#794752\'\n' +
            '        }\n' +
            '    }, {\n' +
            '        name: \'Pepper\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#cc3d41\'\n' +
            '        }\n' +
            '    }, {\n' +
            '        name: \'Brown Spice\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#b14d57\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Anise\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#c78936\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Nutmeg\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#8c292c\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Cinnamon\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#e5762e\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Clove\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#a16c5a\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }]\n' +
            '}, {\n' +
            '    name: \'Nutty/\\nCocoa\',\n' +
            '    itemStyle: {\n' +
            '        color: \'#a87b64\'\n' +
            '    },\n' +
            '    children: [{\n' +
            '        name: \'Nutty\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#c78869\'\n' +
            '        },\n' +
            '        children: [ {\n' +
            '            name: \'Peanuts\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#d4ad12\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Hazelnut\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#9d5433\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Almond\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#c89f83\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }, {\n' +
            '        name: \'Cocoa\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#bb764c\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Chocolate\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#692a19\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Dark Chocolate\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#470604\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }]\n' +
            '}, {\n' +
            '    name: \'Sweet\',\n' +
            '    itemStyle: {\n' +
            '        color: \'#e65832\'\n' +
            '    },\n' +
            '    children: [{\n' +
            '        name: \'Brown Sugar\',\n' +
            '        itemStyle: {\n' +
            '            color: \'#d45a59\'\n' +
            '        },\n' +
            '        children: [{\n' +
            '            name: \'Molasses\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#310d0f\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Maple Syrup\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#ae341f\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Caramelized\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#d78823\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            name: \'Honey\',\n' +
            '            value: 1,\n' +
            '            itemStyle: {\n' +
            '                color: \'#da5c1f\'\n' +
            '            }\n' +
            '        }]\n' +
            '    }, {\n' +
            '        name: \'Vanilla\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#f89a80\'\n' +
            '        }\n' +
            '    }, {\n' +
            '        name: \'Vanillin\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#f37674\'\n' +
            '        }\n' +
            '    }, {\n' +
            '        name: \'Overall Sweet\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#e75b68\'\n' +
            '        }\n' +
            '    }, {\n' +
            '        name: \'Sweet Aromatics\',\n' +
            '        value: 1,\n' +
            '        itemStyle: {\n' +
            '            color: \'#d0545f\'\n' +
            '        }\n' +
            '    }]\n' +
            '}];\n' +
            '\n' +
            'option = {\n' +
            '    title: {\n' +
            '        text: \'WORLD COFFEE RESEARCH SENSORY LEXICON\',\n' +
            '        subtext: \'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/\',\n' +
            '        textStyle: {\n' +
            '            fontSize: 14,\n' +
            '            align: \'center\'\n' +
            '        },\n' +
            '        subtextStyle: {\n' +
            '            align: \'center\'\n' +
            '        },\n' +
            '        sublink: \'https://worldcoffeeresearch.org/work/sensory-lexicon/\'\n' +
            '    },\n' +
            '    series: {\n' +
            '        type: \'sunburst\',\n' +
            '        highlightPolicy: \'ancestor\',\n' +
            '        data: data,\n' +
            '        radius: [0, \'95%\'],\n' +
            '        sort: null,\n' +
            '        levels: [{}, {\n' +
            '            r0: \'15%\',\n' +
            '            r: \'35%\',\n' +
            '            itemStyle: {\n' +
            '                borderWidth: 2\n' +
            '            },\n' +
            '            label: {\n' +
            '                rotate: \'tangential\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            r0: \'35%\',\n' +
            '            r: \'70%\',\n' +
            '            label: {\n' +
            '                align: \'right\'\n' +
            '            }\n' +
            '        }, {\n' +
            '            r0: \'70%\',\n' +
            '            r: \'72%\',\n' +
            '            label: {\n' +
            '                position: \'outside\',\n' +
            '                padding: 3,\n' +
            '                silent: false\n' +
            '            },\n' +
            '            itemStyle: {\n' +
            '                borderWidth: 3\n' +
            '            }\n' +
            '        }]\n' +
            '    }\n' +
            '};\n',
        }
      },
      mounted(){
        this.show()
      },
      methods:{
        show(){
          let myChart7 = echarts.init(document.getElementById('sun-first'));
          let option7 = {
            silent: true,
            series: {
              radius: ['15%', '80%'],
              type: 'sunburst',
              sort: null,
              highlightPolicy: 'ancestor',
              data: [{
                value: 8,
                children: [{
                  value: 4,
                  children: [{
                    value: 2
                  }, {
                    value: 1
                  }, {
                    value: 1
                  }, {
                    value: 0.5
                  }]
                }, {
                  value: 2
                }]
              }, {
                value: 4,
                children: [{
                  children: [{
                    value: 2
                  }]
                }]
              }, {
                value: 4,
                children: [{
                  children: [{
                    value: 2
                  }]
                }]
              }, {
                value: 3,
                children: [{
                  children: [{
                    value: 1
                  }]
                }]
              }],
              label: {
                color: '#fff',
                textBorderColor: '#666',
                textBorderWidth: 2,
                borderColor: '#999',
                borderWidth: 1,
                formatter: function (param) {
                  var depth = param.treePathInfo.length;
                  if (depth === 2) {
                    return 'radial';
                  }
                  else if (depth === 3) {
                    return 'tangential';
                  }
                  else if (depth === 4) {
                    return '0';
                  }
                }
              },
              levels: [{}, {
                itemStyle: {
                  color: 'red'
                },
                label: {
                  rotate: 'radial'
                }
              }, {
                itemStyle: {
                  color: 'orange'
                },
                label: {
                  rotate: 'tangential'
                }
              }, {
                itemStyle: {
                  color: 'yellow'
                },
                label: {
                  rotate: 0
                }
              }]
            }
          };
          myChart7.setOption(option7);

          let myChart8 = echarts.init(document.getElementById('sun-second'));
          var data = [{
            name: 'Flora',
            itemStyle: {
              color: '#da0d68'
            },
            children: [{
              name: 'Black Tea',
              value: 1,
              itemStyle: {
                color: '#975e6d'
              }
            }, {
              name: 'Floral',
              itemStyle: {
                color: '#e0719c'
              },
              children: [{
                name: 'Chamomile',
                value: 1,
                itemStyle: {
                  color: '#f99e1c'
                }
              }, {
                name: 'Rose',
                value: 1,
                itemStyle: {
                  color: '#ef5a78'
                }
              }, {
                name: 'Jasmine',
                value: 1,
                itemStyle: {
                  color: '#f7f1bd'
                }
              }]
            }]
          }, {
            name: 'Fruity',
            itemStyle: {
              color: '#da1d23'
            },
            children: [{
              name: 'Berry',
              itemStyle: {
                color: '#dd4c51'
              },
              children: [{
                name: 'Blackberry',
                value: 1,
                itemStyle: {
                  color: '#3e0317'
                }
              }, {
                name: 'Raspberry',
                value: 1,
                itemStyle: {
                  color: '#e62969'
                }
              }, {
                name: 'Blueberry',
                value: 1,
                itemStyle: {
                  color: '#6569b0'
                }
              }, {
                name: 'Strawberry',
                value: 1,
                itemStyle: {
                  color: '#ef2d36'
                }
              }]
            }, {
              name: 'Dried Fruit',
              itemStyle: {
                color: '#c94a44'
              },
              children: [{
                name: 'Raisin',
                value: 1,
                itemStyle: {
                  color: '#b53b54'
                }
              }, {
                name: 'Prune',
                value: 1,
                itemStyle: {
                  color: '#a5446f'
                }
              }]
            }, {
              name: 'Other Fruit',
              itemStyle: {
                color: '#dd4c51'
              },
              children: [{
                name: 'Coconut',
                value: 1,
                itemStyle: {
                  color: '#f2684b'
                }
              }, {
                name: 'Cherry',
                value: 1,
                itemStyle: {
                  color: '#e73451'
                }
              }, {
                name: 'Pomegranate',
                value: 1,
                itemStyle: {
                  color: '#e65656'
                }
              }, {
                name: 'Pineapple',
                value: 1,
                itemStyle: {
                  color: '#f89a1c'
                }
              }, {
                name: 'Grape',
                value: 1,
                itemStyle: {
                  color: '#aeb92c'
                }
              }, {
                name: 'Apple',
                value: 1,
                itemStyle: {
                  color: '#4eb849'
                }
              }, {
                name: 'Peach',
                value: 1,
                itemStyle: {
                  color: '#f68a5c'
                }
              }, {
                name: 'Pear',
                value: 1,
                itemStyle: {
                  color: '#baa635'
                }
              }]
            }, {
              name: 'Citrus Fruit',
              itemStyle: {
                color: '#f7a128'
              },
              children: [{
                name: 'Grapefruit',
                value: 1,
                itemStyle: {
                  color: '#f26355'
                }
              }, {
                name: 'Orange',
                value: 1,
                itemStyle: {
                  color: '#e2631e'
                }
              }, {
                name: 'Lemon',
                value: 1,
                itemStyle: {
                  color: '#fde404'
                }
              }, {
                name: 'Lime',
                value: 1,
                itemStyle: {
                  color: '#7eb138'
                }
              }]
            }]
          }, {
            name: 'Sour/\nFermented',
            itemStyle: {
              color: '#ebb40f'
            },
            children: [{
              name: 'Sour',
              itemStyle: {
                color: '#e1c315'
              },
              children: [{
                name: 'Sour Aromatics',
                value: 1,
                itemStyle: {
                  color: '#9ea718'
                }
              }, {
                name: 'Acetic Acid',
                value: 1,
                itemStyle: {
                  color: '#94a76f'
                }
              }, {
                name: 'Butyric Acid',
                value: 1,
                itemStyle: {
                  color: '#d0b24f'
                }
              }, {
                name: 'Isovaleric Acid',
                value: 1,
                itemStyle: {
                  color: '#8eb646'
                }
              }, {
                name: 'Citric Acid',
                value: 1,
                itemStyle: {
                  color: '#faef07'
                }
              }, {
                name: 'Malic Acid',
                value: 1,
                itemStyle: {
                  color: '#c1ba07'
                }
              }]
            }, {
              name: 'Alcohol/\nFremented',
              itemStyle: {
                color: '#b09733'
              },
              children: [{
                name: 'Winey',
                value: 1,
                itemStyle: {
                  color: '#8f1c53'
                }
              }, {
                name: 'Whiskey',
                value: 1,
                itemStyle: {
                  color: '#b34039'
                }
              }, {
                name: 'Fremented',
                value: 1,
                itemStyle: {
                  color: '#ba9232'
                }
              }, {
                name: 'Overripe',
                value: 1,
                itemStyle: {
                  color: '#8b6439'
                }
              }]
            }]
          }, {
            name: 'Green/\nVegetative',
            itemStyle: {
              color: '#187a2f'
            },
            children: [{
              name: 'Olive Oil',
              value: 1,
              itemStyle: {
                color: '#a2b029'
              }
            }, {
              name: 'Raw',
              value: 1,
              itemStyle: {
                color: '#718933'
              }
            }, {
              name: 'Green/\nVegetative',
              itemStyle: {
                color: '#3aa255'
              },
              children: [{
                name: 'Under-ripe',
                value: 1,
                itemStyle: {
                  color: '#a2bb2b'
                }
              }, {
                name: 'Peapod',
                value: 1,
                itemStyle: {
                  color: '#62aa3c'
                }
              }, {
                name: 'Fresh',
                value: 1,
                itemStyle: {
                  color: '#03a653'
                }
              }, {
                name: 'Dark Green',
                value: 1,
                itemStyle: {
                  color: '#038549'
                }
              }, {
                name: 'Vegetative',
                value: 1,
                itemStyle: {
                  color: '#28b44b'
                }
              }, {
                name: 'Hay-like',
                value: 1,
                itemStyle: {
                  color: '#a3a830'
                }
              }, {
                name: 'Herb-like',
                value: 1,
                itemStyle: {
                  color: '#7ac141'
                }
              }]
            }, {
              name: 'Beany',
              value: 1,
              itemStyle: {
                color: '#5e9a80'
              }
            }]
          }, {
            name: 'Other',
            itemStyle: {
              color: '#0aa3b5'
            },
            children: [{
              name: 'Papery/Musty',
              itemStyle: {
                color: '#9db2b7'
              },
              children: [{
                name: 'Stale',
                value: 1,
                itemStyle: {
                  color: '#8b8c90'
                }
              }, {
                name: 'Cardboard',
                value: 1,
                itemStyle: {
                  color: '#beb276'
                }
              }, {
                name: 'Papery',
                value: 1,
                itemStyle: {
                  color: '#fefef4'
                }
              }, {
                name: 'Woody',
                value: 1,
                itemStyle: {
                  color: '#744e03'
                }
              }, {
                name: 'Moldy/Damp',
                value: 1,
                itemStyle: {
                  color: '#a3a36f'
                }
              }, {
                name: 'Musty/Dusty',
                value: 1,
                itemStyle: {
                  color: '#c9b583'
                }
              }, {
                name: 'Musty/Earthy',
                value: 1,
                itemStyle: {
                  color: '#978847'
                }
              }, {
                name: 'Animalic',
                value: 1,
                itemStyle: {
                  color: '#9d977f'
                }
              }, {
                name: 'Meaty Brothy',
                value: 1,
                itemStyle: {
                  color: '#cc7b6a'
                }
              }, {
                name: 'Phenolic',
                value: 1,
                itemStyle: {
                  color: '#db646a'
                }
              }]
            }, {
              name: 'Chemical',
              itemStyle: {
                color: '#76c0cb'
              },
              children: [{
                name: 'Bitter',
                value: 1,
                itemStyle: {
                  color: '#80a89d'
                }
              }, {
                name: 'Salty',
                value: 1,
                itemStyle: {
                  color: '#def2fd'
                }
              }, {
                name: 'Medicinal',
                value: 1,
                itemStyle: {
                  color: '#7a9bae'
                }
              }, {
                name: 'Petroleum',
                value: 1,
                itemStyle: {
                  color: '#039fb8'
                }
              }, {
                name: 'Skunky',
                value: 1,
                itemStyle: {
                  color: '#5e777b'
                }
              }, {
                name: 'Rubber',
                value: 1,
                itemStyle: {
                  color: '#120c0c'
                }
              }]
            }]
          }, {
            name: 'Roasted',
            itemStyle: {
              color: '#c94930'
            },
            children: [{
              name: 'Pipe Tobacco',
              value: 1,
              itemStyle: {
                color: '#caa465'
              }
            }, {
              name: 'Tobacco',
              value: 1,
              itemStyle: {
                color: '#dfbd7e'
              }
            }, {
              name: 'Burnt',
              itemStyle: {
                color: '#be8663'
              },
              children: [{
                name: 'Acrid',
                value: 1,
                itemStyle: {
                  color: '#b9a449'
                }
              }, {
                name: 'Ashy',
                value: 1,
                itemStyle: {
                  color: '#899893'
                }
              }, {
                name: 'Smoky',
                value: 1,
                itemStyle: {
                  color: '#a1743b'
                }
              }, {
                name: 'Brown, Roast',
                value: 1,
                itemStyle: {
                  color: '#894810'
                }
              }]
            }, {
              name: 'Cereal',
              itemStyle: {
                color: '#ddaf61'
              },
              children: [{
                name: 'Grain',
                value: 1,
                itemStyle: {
                  color: '#b7906f'
                }
              }, {
                name: 'Malt',
                value: 1,
                itemStyle: {
                  color: '#eb9d5f'
                }
              }]
            }]
          }, {
            name: 'Spices',
            itemStyle: {
              color: '#ad213e'
            },
            children: [{
              name: 'Pungent',
              value: 1,
              itemStyle: {
                color: '#794752'
              }
            }, {
              name: 'Pepper',
              value: 1,
              itemStyle: {
                color: '#cc3d41'
              }
            }, {
              name: 'Brown Spice',
              itemStyle: {
                color: '#b14d57'
              },
              children: [{
                name: 'Anise',
                value: 1,
                itemStyle: {
                  color: '#c78936'
                }
              }, {
                name: 'Nutmeg',
                value: 1,
                itemStyle: {
                  color: '#8c292c'
                }
              }, {
                name: 'Cinnamon',
                value: 1,
                itemStyle: {
                  color: '#e5762e'
                }
              }, {
                name: 'Clove',
                value: 1,
                itemStyle: {
                  color: '#a16c5a'
                }
              }]
            }]
          }, {
            name: 'Nutty/\nCocoa',
            itemStyle: {
              color: '#a87b64'
            },
            children: [{
              name: 'Nutty',
              itemStyle: {
                color: '#c78869'
              },
              children: [ {
                name: 'Peanuts',
                value: 1,
                itemStyle: {
                  color: '#d4ad12'
                }
              }, {
                name: 'Hazelnut',
                value: 1,
                itemStyle: {
                  color: '#9d5433'
                }
              }, {
                name: 'Almond',
                value: 1,
                itemStyle: {
                  color: '#c89f83'
                }
              }]
            }, {
              name: 'Cocoa',
              itemStyle: {
                color: '#bb764c'
              },
              children: [{
                name: 'Chocolate',
                value: 1,
                itemStyle: {
                  color: '#692a19'
                }
              }, {
                name: 'Dark Chocolate',
                value: 1,
                itemStyle: {
                  color: '#470604'
                }
              }]
            }]
          }, {
            name: 'Sweet',
            itemStyle: {
              color: '#e65832'
            },
            children: [{
              name: 'Brown Sugar',
              itemStyle: {
                color: '#d45a59'
              },
              children: [{
                name: 'Molasses',
                value: 1,
                itemStyle: {
                  color: '#310d0f'
                }
              }, {
                name: 'Maple Syrup',
                value: 1,
                itemStyle: {
                  color: '#ae341f'
                }
              }, {
                name: 'Caramelized',
                value: 1,
                itemStyle: {
                  color: '#d78823'
                }
              }, {
                name: 'Honey',
                value: 1,
                itemStyle: {
                  color: '#da5c1f'
                }
              }]
            }, {
              name: 'Vanilla',
              value: 1,
              itemStyle: {
                color: '#f89a80'
              }
            }, {
              name: 'Vanillin',
              value: 1,
              itemStyle: {
                color: '#f37674'
              }
            }, {
              name: 'Overall Sweet',
              value: 1,
              itemStyle: {
                color: '#e75b68'
              }
            }, {
              name: 'Sweet Aromatics',
              value: 1,
              itemStyle: {
                color: '#d0545f'
              }
            }]
          }];

          let option8 = {
            title: {
              text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
              subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
              textStyle: {
                fontSize: 14,
                align: 'center'
              },
              subtextStyle: {
                align: 'center'
              },
              sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
            },
            series: {
              type: 'sunburst',
              highlightPolicy: 'ancestor',
              data: data,
              radius: [0, '95%'],
              sort: null,
              levels: [{}, {
                r0: '15%',
                r: '35%',
                itemStyle: {
                  borderWidth: 2
                },
                label: {
                  rotate: 'tangential'
                }
              }, {
                r0: '35%',
                r: '70%',
                label: {
                  align: 'right'
                }
              }, {
                r0: '70%',
                r: '72%',
                label: {
                  position: 'outside',
                  padding: 3,
                  silent: false
                },
                itemStyle: {
                  borderWidth: 3
                }
              }]
            }
          };
          myChart8.setOption(option8);
        }
      }
    }
</script>

<style scoped>
  .sun{
    width: 80%;
    margin:0 auto;
  }
  #sun-first{
    height: 500px;
    background-color: #eeeeee;
  }
  #sun-second{
    height: 500px;
    margin-top:100px;
    background-color: #eeeeee;
  }
</style>
