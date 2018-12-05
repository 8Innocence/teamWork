<template>
  <div class="ul">
    <li v-for="p in list" @click="msg()">
      <img :src="p.pic" alt="">
      <p>{{p.title}}</p>
      <div class="alist">
        <span>{{p.price}}</span>
        <a href="">{{p.msg}}</a>
      </div>
      <h6>{{p.qal}}</h6>
    </li>
  </div>
</template>

<script>
  import listApi from "../../api/listApi";
    export default {
      name: "ListLi",
      data(){
          return{
            list:[
              {
                "pic":"../../../static/images/0d96a659-263a-428a-95a4-ae7c13fc2f6a.jpg",
                "title":"好看又营养的新鲜水果...",
                "price":"29.99",
                "msg":"好吃到爆",
                "qal":"哇哈哈哈 好好吃"
              },
              {
                "pic":"../../../static/images/1718EES12CChRkRlvScQeADsLZAAjPFqPAijs855.png",
                "title":"好看又营养的新鲜水果...",
                "price":"30",
                "msg":"好吃到爆",
                "qal":"哇哈哈哈 好好吃"
              },
              {
                "pic":"../../../static/images/19602fda-25ec-4f15-8312-4877d013db4a.jpg",
                "title":"好看又营养的新鲜水果...",
                "price":"50.88",
                "msg":"好吃到爆",
                "qal":"哇哈哈哈 好好吃"
              },
              {
                "pic":"../../../static/images/79453a2dbea242c486075f00122ec9f2.png",
                "title":"好看又营养的新鲜水果....",
                "price":"47.99",
                "msg":"好吃到爆",
                "qal":"哇哈哈哈 好好吃"
              },
              {
                "pic":"../../../static/images/6fdd8a07c1ba469481446c2124402c57.jpeg",
                "title":"好看又营养的新鲜水果....",
                "price":"99.99",
                "msg":"好吃到爆",
                "qal":"哇哈哈哈 好好吃"
              },
              {
                "pic":"../../../static/images/110CDAHDB7ChRkRlvScHuAKv0VAAkBehgjeS4300.png",
                "title":"好看又营养的新鲜水果...",
                "price":"88.88",
                "msg":"好吃到爆",
                "qal":"哇哈哈哈 好好吃"
              },
              {
                "pic":"../../../static/images/f30a876a-b7be-4240-9c95-e89c330576f4.jpg",
                "title":"好看又营养的新鲜水果...",
                "price":"100",
                "msg":"好吃到爆",
                "qal":"哇哈哈哈 好好吃"
              },
              {
                "pic":"../../../static/images/f30a876a-b7be-4240-9c95-e89c330576f4.jpg",
                "title":"好看又营养的新鲜水果...",
                "price":"46.66",
                "msg":"好吃到爆",
                "qal":"哇哈哈哈 好好吃"
              },
              {
                "pic":"../../../static/images/f30a876a-b7be-4240-9c95-e89c330576f4.jpg",
                "title":"好看又营养的新鲜水果...",
                "price":"27.7",
                "msg":"好吃到爆",
                "qal":"哇哈哈哈 好好吃"
              },
              {
                "pic":"../../../static/images/f30a876a-b7be-4240-9c95-e89c330576f4.jpg",
                "title":"好看又营养的新鲜水果...",
                "price":"9.00",
                "msg":"好吃到爆",
                "qal":"哇哈哈哈 好好吃"
              }
            ]
          }
      },
      methods:{
        msg(){
          this.$router.push({
            path:"/Msg"
          })
        },
        _initPageData(){
          listApi.getListData(data=>{
            this.list = data;
            console.log(this.list)
          })
        }
      },
      created(){
        //首页加载数据
        // this._initPageData()
      }
    }
</script>

<style scoped>
  .ul{
    width:95%;
    margin:0 auto;
    display:flex;
    -webkit-justify-content: space-between;
    flex-wrap: wrap;
  }
 li{
    width:49%;
    height:2.97rem;
    float:left;
    background:#f8f8f8;
    margin-bottom:0.1rem;
  }
   li img{
    width:100%;
    height:1.825rem;

  }
 li p{
    font-size:.13rem;
    color:#4b4b4b;
  }
 li div{
    display:flex;
    -webkit-justify-content: space-between;
    margin:0.1rem 0;
  }
 li span{
    display:block;
    font-size:.15rem;
    color:#13ce66;
    margin-left:0.1rem;
  }
 li a{
    float:left;
    display:block;
    width:0.5rem;
    height:0.23rem;
    font-size:0.11rem;
    color:#13ce66;
    /*background:#ffe6eb;*/
    border-radius:0.5rem;
    text-align:center;
    line-height:0.23rem;
    margin-right:0.1rem;
  }
 li h6{
    font-size:0.11rem;
    color:#828282;
    height:0.3rem;
    text-indent:0.1rem;
    line-height:0.3rem;
    border-top:1px solid #828282;
  }
</style>
