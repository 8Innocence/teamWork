<template>
    <footer>
      <ul>
          <router-link :to="t.path"  tag="li"  :key="index" v-for="(t,index) in thisD" @click="gos(index)" exact><i :class="t.ifont" style="font-size: 25px;"></i><span>{{t.Datas}}</span>
          </router-link>


      </ul>
    </footer>
</template>

<script>
    export default {
      name: "IndexFooter",
      data(){
        return{
          changeRed:-1,
          thisD:[
            {"Datas":"首页","ifont":"iconfont icon-shinonggongban-","path":"/"},
            {"Datas":"分类","ifont":"iconfont icon-nongchanpinjiagechaxun","path":"/Kind"},
            {"Datas":"列表","ifont":"iconfont icon-classification_icon_","path":"/List"},
            {"Datas":"购物车","ifont":"iconfont icon-pinpainongchanpin","path":"/Carts"},
            {"Datas":"我的","ifont":"iconfont icon-nongchanpinxiaoshouxinxi","path":"/RingUp"}
          ]
        }
      },
        methods:{
          gos(index){
             alert(index)
             // console.log(index)
          }
        }
    }
</script>

<style scoped>
  .aa{

  }
  .red{
    color:red
  }

  footer ul{
    display: flex;
    height: .5rem;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border-top:1px solid #ababab;
    background:white;
  }
  footer ul li{
    font-size:.12rem;
    color: #333333;
  }
  footer ul .router-link-exact-active{
    color: #ac0;
  }
</style>
