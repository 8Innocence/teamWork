<template>
  <div class="listone">
    <ul>
      <li v-for="p in list">
        <img :src="p.pic" alt="">
        <p>{{p.title}}</p>
        <div class="alist">
          <span>{{p.price}}</span>
          <a href="">{{p.msg}}</a>
        </div>
        <h6>{{p.qal}}</h6>
      </li>
    </ul>
  </div>
</template>

<script>
  import listApi from "../../api/listApi";
    export default {
        name: "MarketLastone",
        data(){
          return{
            list:[]
          }
        },
      methods:{
        _initPageData(){
          listApi.getListData(data=>{
            this.list = data;
            console.log(this.list)
          })
        }
      },
      created(){
        //首页加载数据
        this._initPageData()
      }


    }
</script>

<style scoped>
  .listone{
    width:100%;
  }
  .lisione ul{
    width:90%;
    margin:0 auto;
    display:flex;
    -webkit-justify-content: space-between;
    flex-wrap: wrap;
  }
  .listone ul li{
    width:49%;
    height:2.97rem;
    float:left;
    margin-right:0.02rem;
    background:#f8f8f8;
    margin-bottom:0.1rem;
  }
  .listone ul li img{
    width:100%;
    height:1.825rem;
  }
  .listone ul li p{
    font-size:.13rem;
    color:#4b4b4b;
  }
  .listone ul li div{
    display:flex;
    -webkit-justify-content: space-between;
    margin:0.1rem 0;
  }
  .listone ul li span{
    display:block;
    font-size:.15rem;
    color:#ff0036;
    margin-left:0.1rem;
  }
  .listone ul li a{
    float:left;
    display:block;
    width:0.49rem;
    height:0.23rem;
    font-size:0.11rem;
    color:#ff0036;
    background:#ffe6eb;
    border-radius:0.5rem;
    text-align:center;
    line-height:0.23rem;
    margin-right:0.1rem;
  }
  .listone ul li h6{
    font-size:0.11rem;
    color:#828282;
    height:0.3rem;
    text-indent:0.1rem;
    line-height:0.3rem;
    border-top:1px solid #828282;
  }
</style>
