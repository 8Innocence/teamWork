<template>

  <div class="main">
     <div class="title">
       <a v-for="a in pData" @click="doindex()">{{a}}></a>
     </div>
    <div class="body">
      <h>{{bodyData.hDa}}</h>

      <div class="intro">
       <p>
         <span>{{bodyData.introData.title}}</span>
         <span>作者：{{bodyData.introData.author}} 来源：{{bodyData.introData.sour}} 阅读：{{bodyData.introData.read}}</span>
       </p>
        <!--listen部分固定不变-->
       <p class="listen">
         <a href="">
           <img src="../../static/images/s1.png" alt="" style="width:30px ;">
           听声音
         </a>
       </p>
     </div>

      <div class="link">
        <div class="link-l">
          <img :src="bodyData.linkData.pic" style="width:30px ;">
          <p class="huin">
            <span>{{bodyData.linkData.tit}}</span>
            <span>{{bodyData.linkData.lit}}</span>
          </p>
        </div>
        <a href="">{{bodyData.linkData.but}}</a>
      </div>

      <p class="lit">{{bodyData.norData}}</p>
      <p class="mor">{{bodyData.norData}}</p>
      <img :src="bodyData.imgDa"  style="width:100% ;">
      <table>
        <tr>
          <th>分类名称</th>
          <th>品种名称</th>
          <th>平均价格</th>
          <th>单位</th>
          <th>地址</th>
        </tr>
        <tr v-for="p in bodyData.tableData">
          <td>{{p.cla}}</td>
          <td>{{p.breed}}</td>
          <td>{{p.avera}}</td>
          <td>{{p.unit}}</td>
          <td>{{p.addr}}</td>
        </tr>
      </table>
      <img :src="bodyData.imgDa1"  style="width:100% ;">
      <div class="upDown">
        <p v-for="p in bodyData.upDoData.pData">{{p}}</p>
        <img :src="bodyData.upDoData.pic" style="width:100% ;">

        <p>
          {{bodyData.upDoData.A}}<span style="color:#ff8000">{{bodyData.upDoData.B}}</span>{{bodyData.upDoData.C}}
        </p>
        <h3>备注：以上<span style="color:#ff8000">{{bodyData.clas}}</span>价格信息来源于<span style="color:#ff8000">{{bodyData.from}}</span>用户产地大宗批发报价（非市场零售价），数据仅供参考。</h3>
      </div>


    </div>

  </div>

</template>

<script>
    export default {
        name: "detail",
      components:{},
      methods:{
          doindex(){
            this.$router.push({
              path:"/"
            })
          }
      },
      data(){
          return{
            pData:["首页","资讯首页","致富经"],
            bodyData:{
              hDa:"今日生猪多少钱一斤？2018全国生猪价格行情走势分析",
              introData:{
                title:"2018-10-30 20:50:08 行情资讯",
                author:"惠农网小香香",
                sour:"猪讯网",
                read:"46"
              },
              linkData:{
                "pic":" ../../static/images/p1.jpeg",
                "tit":"掌上农资",
                "lit":"买卖农产品就上掌上农资",
                "but":"查看"
              },
              norData: "今日生猪多少钱一斤?今日全国生猪市场整体继续上涨态势，局地小幅震荡。其中华中及华南地区涨势整体还在持续，但局地涨幅已经开始明显减小。全国屠企结算价整体稳定，部分上涨地区屠企有下调动作，如河南、山东、黑龙江、四川地区。接下来请看惠农网小编整理的生猪价格行情。",
              imgDa:"../../static/images/pig.jpg",
              tableData:[
                {"cla":"猪","breed":"外三元","avera":"12","unit":"斤","addr":"河北石家庄市平山县"},
                {"cla":"猪","breed":"外三元","avera":"8","unit":"斤","addr":"山东省临沂市沂水县"},
                {"cla":"猪","breed":"外三元","avera":"7","unit":"斤","addr":"广西玉林市博白县"},
                {"cla":"猪","breed":"外三元","avera":"6","unit":"斤","addr":"江苏宿迁市沐阳县"},
                {"cla":"猪","breed":"外三元","avera":"10","unit":"斤","addr":"河北承德市隆化县"},
                {"cla":"猪","breed":"外三元","avera":"12","unit":"斤","addr":"河北石家庄市平山县"},
                {"cla":"猪","breed":"外三元","avera":"12","unit":"斤","addr":"河北石家庄市平山县"},
                {"cla":"猪","breed":"外三元","avera":"8","unit":"斤","addr":"山东省临沂市沂水县"},
                {"cla":"猪","breed":"外三元","avera":"7","unit":"斤","addr":"广西玉林市博白县"},
                {"cla":"猪","breed":"外三元","avera":"6","unit":"斤","addr":"江苏宿迁市沐阳县"},
                {"cla":"猪","breed":"外三元","avera":"10","unit":"斤","addr":"河北承德市隆化县"},
                {"cla":"猪","breed":"外三元","avera":"12","unit":"斤","addr":"河北石家庄市平山县"}
              ],
              imgDa1:"../../static/images/pig2.jpg",
              upDoData:{
                pData:[
                  "涨跌情况：",
                  "东北地区：整体稳定，黑龙江以稳为主，局地小幅调整，吉林、辽宁持稳。东北地区主流价为4.4-5.5。",
                  "华北地区：稳中上涨，河北因局地上涨，整体涨0.1，北京、天津、山西持稳，华北地区主流价为4.7-6.7元。",
                  "华东地区：稳中有涨，江苏涨0.1,其他省市稳定，其中山东个别屠企有压价动作。华东地区主流价5.6-8.6元。",
                  "华南地区：上涨为主，广东、广西地区需求持续，猪价继续上涨，但当前养殖户出栏积极，涨势已经减弱，有消失止涨迹象。广东涨0.05，广西涨0.1，华南地区主流价为6.0-8.4",
                  "华中地区：稳中上涨，河南省内白条肉外调持续，猪价继续上涨，但涨幅已明显缩小，局地屠企有压价下调动作，整体涨0.05，江西涨0.05，湖北省内价格混乱持续，各销产地区涨跌不一，整体涨0.05，湖南稳定，华中地区主流价为5.5-8.0。",
                  "西南地区：稳中有涨，四川腌腊支撑，白条肉流通增加，局部销产地区涨跌不一，整体涨0.1，云南、重庆、贵州稳定，西南地区主流价为6.2-9.0 。",
                  "西北地区：稳中震荡，新疆跌0.05，甘肃涨0.15，西北地区主流价为6.2-8.5。"
                  ],
                pic:"../../static/images/pig3.jpg",
                A:"当前全国生猪市场虽然震荡持续，整体来看还是以稳定为主，由于南方腌制腊肉活动的陆续启动，南方市场需求好转，支撑或带动了与之成功对接的部分主产区生猪价格的持续上涨。但由于当前未到冬至 ",
                B:"腊肉",
                C:"制作高峰期，短时需求提升并不足以强力的支持涨势的持续，部分外调产区猪价涨势已见乏力，预计短时其上涨空间将继续缩小，或有触顶回调风险。目前疫情发展较为稳定，市场向好，综合预计短期全国猪价将继续稳中震荡上涨走势，涨势继续减弱，局地会再次出现下跌震荡态势。",
                },
              clas:"农产品",
              from:"惠农网"
            }
          }
      }
    }
</script>

<style lang="scss" scoped>

  .main{
    font-size: .12rem;
    display: flex;
    flex-direction: column;
    background: white;
    .title{
      background: #f5f5f5;
      display: flex;
      padding: .12rem;
      a{
       font-size: .12rem;
     }
    }
    .body{
      padding: 18px 14px;
      h{
        font-size: .18rem;
        padding-top: .09rem ;
      }
      .intro{
        display: flex;
        justify-content: space-between;
        padding: .1rem 0 .15rem 0;
        p{
          display: flex;
          flex-direction: column;
          font-size: .08rem;
          color: #999999;
        }
        .listen{
          /*color: darkgreen;*/
          a{
            display: flex;
            align-items: center;
            color: #66bb47;
            img{
              padding-right: 6px;
            }
          }
        }
      }
      .link{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: .16rem;
        .link-l{
          display: flex;
          align-items: center;

          img{
            border: 1px solid #f0f0f0;
            border-radius: 50%;
            margin-right: 10px;
          }
          .huin{
            display: flex;
            font-size: .06rem;
            flex-direction: column;
            span:first-of-type{
              font-size: .08rem;
            }
          }
        }
        a{
          padding: 5px 10px;
          background: #3897f0;
          border-radius: 2px;
          color: white;
        }
      }
      .lit{
        background: #f5f5f5;
        color: #666666;
        border-radius: 4px;
        padding: .08rem .07rem;
        font-size: 14px;
        line-height: 20px;
      }
      .mor{
        text-indent: 2em;
        font-size: 16px;
        color: #000;
        margin-top: .1rem;
        line-height: 28px;
      }
      table{
        width: 100%;
        font-size: 16px;
        tr{
          th,td{
            width: 20%;
            display: table-cell;
            text-align: center;
          }

        }
      }
      .upDown{
        p,h3{
          text-indent: 2em;
          font-size: .17rem;
          line-height: .26rem;
        }
        h3{
          color: #e53333;
        }
      }
    }


  }


</style>
