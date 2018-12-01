<template>
  <!--<div>-->
    <li>
      <h2><input type="checkbox">{{item.shopname}}</h2>
      <img :src="item.pic"  alt="">
      <div class="ww">
        <p>{{item.title}}</p>
        <a href="" class="one">{{item.msg}}</a>
        <a href="" class="two">
          <img src="../../../static/images/shop2.gif" alt="">
          <p>天猫无忧购</p>
        </a>
        <p class="price">￥{{item.price}}</p>
        <p class="box">
          <span @click="minus(idx)">-</span>
          <input type="number" v-model="item.qal">
          <span @click="add(idx)">+</span>
        </p>
      </div>
    </li>
  <!--</div>-->
</template>

<script>
    export default {
        name: "CartsLi",
        props:["item","idx"],
        methods:{
            minus(i){
              this.$emit("minus",i)
            },
            add(i){
              this.$emit("add",i)
            },
        }

    }

</script>

<style scoped>
  section ul li{
    width:100%;
    height:1.77rem;
    background:white;
    margin-bottom:0.1rem;
    border-bottom:1px solid #ebebeb;
  }
  section ul li h2{
    width:100%;
    height:0.44rem;
    line-height:0.44rem;
    font-size:0.13rem;
    color:#4f4f4f;
    text-indent: 0.1rem;
    /*border-bottom:1px solid #ababab;*/
  }
  .one{
    margin-top:0;
  }

  section ul li h2 input{
    margin-right:0.1rem;
  }
  section ul li img{
    width:0.925rem;
    height:0.93rem;
    margin:0.15rem 0.15rem 0 0.15rem;
    float:left;
  }
  section ul li p{
    float:left;
    font-size:0.12rem;
    color:black;
    line-height:0.19rem;
    margin-top:0.13rem;
  }
  section ul li a{
    float:left;
    margin-top:0.1rem;
    width:1.31rem;
    height:0.25rem;
    background:#f9f9f9;
    font-size:0.11rem;
    color:#999999;
    text-align:center;
    line-height:0.25rem;
  }
.two{
    display:block;
    float:left;
    font-size:0.11rem;
    background:white;
    margin-top:0rem;
  }
  section ul li .two img{
    width:0.105rem;
    height:0.12rem;
    margin-right:0.01rem;
    margin-top:0.02rem;
  }
  section ul li .two p{
    margin-top:0;
    color:#ff0036;
  }
  .price {
    float:left;
    color:#ff0036;
  }
  .box{
    height:0.19rem;
    border:1px solid #ababab;
    border-radius:0.05rem;
    margin-top:0.01rem;
    display:flex;
  }
  .box span{
    display:block;
    width:0.2rem;
    height:0.19rem;
    text-align: center;
  }
  .box input{
    width:0.35rem;
    height:0.18rem;
    border-top:none;
    border-bottom:none;
    outline: none;
    text-align: center;
  }
</style>
