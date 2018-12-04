<template>
  <div class="list_cot">
    <a href="" v-for="p in row2"><img :src="p.pic"><p>{{p.title}}</p></a>
  </div>
</template>

<script>
    export default {
        name: "KindContentProductListLi",
      data(){
        return {

            "row2": [
              {"pic": "../../../static/images/110CDAHDB7ChRkRlvScHuAKv0VAAkBehgjeS4300.png", "title": "石榴"},
              {"pic": "../../../static/images/868a814d-79e3-43c5-be11-16206734cfff.jpg", "title": "脆苹果"},
              {"pic": "../../../static/images/14f4dcfd08ec4bee90171f08352362c2.jpeg", "title": "牡丹花苗"},
              {"pic": "../../../static/images/0663dbdb-322f-4ec0-bf2c-65d83519a5b4.jpg", "title": "新疆红枣"},
              {"pic": "../../../static/images/04770f5239b54b4b86ca529afaace433.jpeg", "title": "银妃三华李树苗"},
              {"pic": "../../../static/images/38e23b136ace445cb91a3d2f90cfadbc.jpeg", "title": "沙糖桔"},
              {"pic": "../../../static/images/84da6b6ebea744e783d38ac1b56bb4a8.jpeg", "title": "七彩山鸡"},
              {"pic": "../../../static/images/4c73a387-fa69-4494-b43d-284d67dcb13d.jpg", "title": "建阳桔柚"},
              {"pic": "../../../static/images/0E15AB-4FAChRkRlllow-AW2XZAACjvQXtVGA084_120X120.jpg", "title": "六鳌红蜜薯"},
              {"pic": "../../../static/images/0663dbdb-322f-4ec0-bf2c-65d83519a5b4.jpg", "title": "新疆红枣"},
              {"pic": "../../../static/images/38e23b136ace445cb91a3d2f90cfadbc.jpeg", "title": "沙糖桔"},
              {"pic": "../../../static/images/04770f5239b54b4b86ca529afaace433.jpeg", "title": "银妃三华李树苗"},
              {"pic": "../../../static/images/110CDAHDB7ChRkRlvScHuAKv0VAAkBehgjeS4300.png", "title": "石榴"},
              {"pic": "../../../static/images/868a814d-79e3-43c5-be11-16206734cfff.jpg", "title": "脆苹果"},
              {"pic": "../../../static/images/14f4dcfd08ec4bee90171f08352362c2.jpeg", "title": "牡丹花苗"},
              {"pic": "../../../static/images/0663dbdb-322f-4ec0-bf2c-65d83519a5b4.jpg", "title": "新疆红枣"},
              {"pic": "../../../static/images/04770f5239b54b4b86ca529afaace433.jpeg", "title": "银妃三华李树苗"},
              {"pic": "../../../static/images/38e23b136ace445cb91a3d2f90cfadbc.jpeg", "title": "沙糖桔"},
              {"pic": "../../../static/images/84da6b6ebea744e783d38ac1b56bb4a8.jpeg", "title": "七彩山鸡"},
              {"pic": "../../../static/images/4c73a387-fa69-4494-b43d-284d67dcb13d.jpg", "title": "建阳桔柚"},
              {"pic": "../../../static/images/0E15AB-4FAChRkRlllow-AW2XZAACjvQXtVGA084_120X120.jpg", "title": "六鳌红蜜薯"},
              {"pic": "../../../static/images/0663dbdb-322f-4ec0-bf2c-65d83519a5b4.jpg", "title": "新疆红枣"},
              {"pic": "../../../static/images/38e23b136ace445cb91a3d2f90cfadbc.jpeg", "title": "沙糖桔"},
              {"pic": "../../../static/images/04770f5239b54b4b86ca529afaace433.jpeg", "title": "银妃三华李树苗"},
              {"pic": "../../../static/images/1718EES12CChRkRlvScQeADsLZAAjPFqPAijs855.png", "title": "皇帝橘"}
            ]
          }
        }
    }
</script>

<style scoped>
  .list_cot{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
  }
  .list_cot a{
    background:white;
    border-radius:.1rem;
    width:45%;
    /*border:2px solid #eee;*/
    margin-bottom: .2rem;
    padding:.1rem .05rem  0  .05rem;
  }
  .list_cot a img{
    width:95%;
    height:1rem;
    margin:0 auto;
  }
  .list_cot a p{
    font-size:.12rem;
    color:#222222;
    line-height:.3rem;
    text-align: center;
    width:100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
