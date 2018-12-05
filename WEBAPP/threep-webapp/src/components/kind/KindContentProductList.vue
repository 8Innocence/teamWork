<template>
  <ul class="right">
    <li class="list" v-show="num == i" v-for="(r,i) in thisDa">
      <div class="list_title">
        <h2>{{r.title}} >></h2>
      </div>
      <div class="list_cot">
        <a href="" v-for="p in r.row2"><img :src="p.pic"><p>{{p.title}}</p></a>
      </div>
    </li>
  </ul>


</template>

<script>
    export default {
        name: "KindContentProductList",
        props:['num','thisDa'],
        components: {},
        data(){
            return{

            }
         }
    }
</script>

<style scoped>
  .list {
    padding:0 .15rem;
  }
  .right{
    flex:1;
    overflow-y:auto;
  }
  .list_title{
    display:flex;
    height:.40rem;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: .1rem;

  }
  .list_title h2{
    height:.25rem;
    font-size:.16rem;
    line-height:.25rem;
    color:#1c1c1c;
    font-family: "微软雅黑", Arial;
  }
  .list_title img{
    width:.09rem;
    height:.09rem;
    margin-right:.05rem;
    border:1px solid #eee;
  }
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
