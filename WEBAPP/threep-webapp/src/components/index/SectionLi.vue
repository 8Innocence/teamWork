<template>
  <div>
    <li  v-for="p in shops" class = "lilist">
    <img :src="p.pic" alt="">
    <p>{{p.title}}</p>
    </li>
  </div>
  <!--<li class = "lilist">-->
    <!--<img src="../../assets/img/ul1.gif" alt="">-->
    <!--<p>苏宁易购</p>-->
  <!--</li>-->
</template>

<script>
    import shopsApi from '../../api/shopsApi'
    export default {
        name: "SectionLi",
      data(){
          return {
            shops:[]
          }
      },
      methods:{
        _initPageData(){
          shopsApi.getShopsData(data=>{
            this.shops = data;
            console.log(this.shops)
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
  .lilist{
    width:20%;
    height:0.6rem;
    float:left;
    display:flex;
    flex-direction:column;
    box-sizing: border-box;
    margin-bottom:0.1rem;
  }
  .lilist img{
    width:0.28rem;
    height:0.3rem;
    margin:0.1rem auto;
  }
  .lilist p{
    font-size:0.11rem;
    color:white;
    text-align:center;
  }
</style>
