<template>
  <div class="what" @click="gopq()">
    <h4><img src="../../../static/images/fire.png">热点资讯</h4>
    <div class="information-massage" v-for="w in goods">
      <p><span>{{w.title}}</span></p>
      <ul>
        <li v-for="G in w.pic"><img :src="G" ></li>
      </ul>
      <p><span v-for="r in w.indus">{{r}}</span></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Massage",
      methods:{
          gopq(){
            this.$router.push({
              path:"/detail"
            })
          }
      },
      data(){
          return{
            goods:[
              {
                "title":"今日生猪多少钱一斤？2018全国生猪价格行情走势分析",
                "pic":[
                  "../../../static/images/pig1.jpg",
                  "../../../static/images/pig2.png",
                  "../../../static/images/pig3.jpg",
                ],
                "indus":["畜牧水产.","5小时前"]
              },
              {
                "title":"自2019年起，农民种地要注意了，污染土壤严重的话最高罚款10万",
                "pic":[
                  "../../../static/images/ground1.jpg",
                  "../../../static/images/ground2.jpg",
                  "../../../static/images/ground3.jpg",
                ],
                "indus":["政策动态.","7小时前"]
              },
              {
                "title":"今日生猪多少钱一斤？局地腌腊活动对生猪价格的影响",
                "pic":[
                  "../../../static/images/pig1.jpg",
                  "../../../static/images/pig4.jpg",
                  "../../../static/images/pig3.jpg",
                ],
                "indus":["畜牧水产.","2018-11-29"]
              },
              {
                "title":"今日淘汰鸡多少钱一斤？2018全国最新淘汰鸡价格行情",
                "pic":[
                  "../../../static/images/egg2.jpg",
                  "../../../static/images/egg1.jpg",
                  "../../../static/images/egg3.jpg",
                ],
                "indus":["畜牧水产.","8小时前"]
              },
              {
                "title":"现在白菜收购价格多少？白菜集中上市，供大于求行情弱",
                "pic":[
                  "../../../static/images/ver1.jpg",
                  "../../../static/images/ver2.png",
                  "../../../static/images/ver3.jpg",
                ],
                "indus":["生菜蔬鲜.","10小时前"]
              },
              {
                "title":"水稻多少钱一斤？2018各个地区水稻收购价格行情",
                "pic":[
                  "../../../static/images/foo1.jpg",
                  "../../../static/images/foo2.jpg",
                  "../../../static/images/foo3.jpg",
                ],
                "indus":["粮油米面.","7小时前"]
              },
            ]
          }


          }

    }
</script>

<style scoped>

.what{
  margin:0 .14rem;
  border-bottom:1px solid #dddddd;
}
  .what h4{
    font-weight:100;
    font-size:.13rem;
    color: #444444;
    line-height:.19rem;
    margin-top:.1rem;
    margin-bottom:.17rem;
    display: flex;
  }
  .what h4 img{
    width:.15rem;
    height:.19rem;
    margin-right:0.07rem;
  }
  .information-massage p:nth-of-type(1) span{
    font-size:.16rem;
    color: #333333;
    line-height:.24rem;
  }
  .information-massage ul{
    display: flex;
    margin:0.1rem 0;
  }
  .information-massage ul li{
    margin-right:.1rem;
  }
  .information-massage ul li:last-child{
    margin-right:0;
  }
  .information-massage ul li img{
    width:1.09rem;
    height:.88rem;
  }
  .information-massage p{
    display: flex;
  }
  .information-massage p:nth-last-of-type(1) span{
    font-size:.11rem;
    color: #999999;
    height:.39rem;
    align-items: center;
  }
</style>
