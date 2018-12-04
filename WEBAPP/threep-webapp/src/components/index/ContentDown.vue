<template>
  <div class="IndexContent">
    <div class="content-massage">
      <h6>掌上农资</h6>
      <ul>
        <li><span>资讯</span><a href="">芝麻认证操作指南</a></li>
        <li><span>资讯</span><a href="">冬季果园想要稳产，做好这些综合防冻措施，减少自然环境破坏</a></li>
      </ul>
    </div>
    <!--<div class="product-search">-->
      <!--<input type="text" placeholder="请输入关键字">-->
      <!--<a href="##">搜索</a>-->
    <!--</div>-->
    <div class="product-intr">
      <p><span>惠农优选</span>一手货源 一件代发<a href="##">更多</a></p>
      <ul>
        <li><img src="../../../static/images/xtshow1.png"></li>
        <li><img src="../../../static/images/xtshow2.png"></li>
        <li><img src="../../../static/images/xtshow3.png"></li>
        <li><img src="../../../static/images/xtshow4.png"></li>
        <li><img src="../../../static/images/xtshow5.jpg"></li>
      </ul>
      <p>向你推荐</p>
    </div>

    <div v-for="(p,index) in produce" class="product-show">
      <img :src="p.pic">
      <div class="show-right">
        <ul>
          <li>{{p.title}}</li>
          <li>{{p.num}}</li>
          <li><span>基地直供</span><span>协助找车</span></li>
          <li><img src="../../../static/images/personal-yes_big.png">{{p.text}}<span>{{p.name}}</span></li>
        </ul>
        <span>刚刚</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ContentDown",
      data(){
          return{
            produce:[
               {title:"青铜火鸡",pic:"../../../static/images/xt-recommend1.jpg",num:"30.00元/斤",text:"福建省南平市光泽县",name:"胡小妹"},
               {title:"红富士苹果",pic:"../../static/images/xt-recommend2.jpg",num:"5.00元/斤",text:"陕西省渭南市富平县",name:"陈静"},
               {title:"金定土鸡蛋 食用 礼盒装","pic":"../../static/images/xt-recommend3.jpg",num:"13.00元/斤",text:"黑龙江省佳木斯市汤原县",name:"晏鸣"},
               {title:"黄果柑",pic:"../../static/images/xt-recommend4.jpg",num:"1.50元/斤",text:"四川省雅安市汉源县",name:"李春田"},
               {title:"桂林沙糖桔",pic:"../../static/images/xt-recommend5.jpg",num:"116元/箱",text:"广西壮族自治区桂林灵川县",name:"钟得保"},
               {title:"紫红色百香果",pic:"../../static/images/xt-recommend6.jpg",num:"5.00元/斤",text:"广西壮族自治区柳州市柳北区",name:"李利宇"},
               {title:"长白大葱",pic:"../../static/images/xt-recommend7.jpg",num:"0.35元/斤",text:"山东省青岛市平度市",name:"张磊"},
               {title:"临潼石榴",pic:"../../static/images/xt-recommend8.jpg",num:"35元/箱",text:"陕西省西安市临潼区",name:"张小红"},
               {title:"牛肉卷 生肉",pic:"../../static/images/xt-recommend9.jpg",num:"33元/斤",text:"浙江省嘉兴市海宁市",name:"徐风"},
               {title:"草桑苗",pic:"../../static/images/xt-recommend10.jpg",num:"0.4元/株",text:"浙江省嘉兴市海宁市",name:"王晓斌"},
               {title:"波尔山羊",pic:"../../static/images/xt-recommend11.jpg",num:"900元/只",text:"山东省菏泽市郡城",name:"宁春霞"},
               {title:"莲花白包菜",pic:"../../static/images/xt-recommend12.jpg",num:"0.60元/斤",text:"重庆荣昌县",name:"刘学斌"},
      ]
          }
      }
    }
</script>

<style scoped>
  .product-search{
    height: .4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:white;
    padding:.1rem 0;
  }
  .product-search input{
    width:3rem;
    height:.32rem;
    border:1px solid #dddddd;
    font-size:.12rem;
    color: #727272;
    text-indent:.15rem;
  }
  .product-search a{
    width:.6rem;
    height:.32rem;
    text-align: center;
    line-height:.32rem;
    background-color:#3897f0;
    color:white;
    font-size:.12rem;
    border-radius:0.03rem;
  }

  .content-massage{
    padding:0.04rem 0;
    display: flex;
    border-top:1px solid #ababab;
    background-color:white;
  }
  .content-massage h6{
    font-weight:100;
    font-size:.18rem;
    color: #55bb22;
    line-height:.2rem;
    width:.4rem;
    padding:.1rem;
    border-right:1px solid #d3d3d3;
  }
  .content-massage ul li{
    display: flex;
  }
  .content-massage ul li span{
    width:.28rem;
    height:.16rem;
    font-size:.12rem;
    color:#ff8822;
    border:1px solid #ffc390;
    text-align: center;
    line-height: .15rem;
    margin:0.06rem 0.07rem 0.06rem 0.14rem;
  }
  .content-massage ul li a{
    font-size:.12rem;
    color: #888888;
    width:2.4rem;
    white-space:nowrap;
    overflow: hidden;
    line-height: .28rem;
    text-overflow:ellipsis;
  }

  .product-intr{
    margin-top:.1rem;
  }
  .product-intr p{
    display: flex;
    height:.39rem;
    font-size:.12rem;
    color: #888888;
    align-items: center;
    padding-left:.1rem;
    background-color:white;
  }
  .product-intr p span{
    font-size:.16rem;
    color: #404040;
    margin-right:.16rem;
  }
  .product-intr p a{
    color: #888888;
    margin-left:1.32rem;
  }
  .product-intr ul{
    display: flex;
    flex: 1;
    overflow: auto;
    border-top:1px solid #c8c7cc;
    background-color:white;
  }
  .product-intr ul li img{
    width:.82rem;
    height:.82rem;
    margin:.1rem 0 .2rem .1rem;
  }
  .product-intr p:nth-of-type(2){
    font-size:.16rem;
    color: #404040;
    margin-top:.1rem;
  }

  .product-show{
    display: flex;
    align-items: center;
    padding:.05rem 0 .06rem .08rem;
    background-color:white;
  }
  .product-show img{
    width:1rem;
    height:1rem;
  }
  .show-right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top:1px solid #c8c7cc;
    margin-left: .1rem;
    width:2.57rem;
  }
  .product-show .show-right ul li{
    font-size:.14rem;
    color: #404040;
    display: flex;
    align-items: center;
    line-height: .33rem;
  }
  .show-right ul li:nth-of-type(2){
    font-size:.16rem;
    color: #ff8822;
    line-height: .16rem;
  }
  .show-right ul li:nth-of-type(3) span{
    font-size:.11rem;
    color: #8f8f94;
    width:.58rem;
    height:.14rem;
    background-color:#fff9f4;
    border:1px solid #ffcca0;
    margin:.1rem .06rem .1rem 0;
    line-height:.15rem;
    text-align: center;
  }
  .show-right ul li:nth-of-type(4){
    font-size:.12rem;
    color: #888888;
    line-height: .25rem;
  }
  .show-right ul li img{
    width:.15rem;
    height:.15rem;
    margin-right: .08rem;
  }
  .show-right ul li span{
    font-size:.12rem;
    color: #888888;
    line-height: .25rem;
    margin-left:.1rem;
  }
  .product-show span{
    font-size:.12rem;
    color: #888888;
    margin-right:.08rem;
  }
</style>
