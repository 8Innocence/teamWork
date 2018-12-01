<template>
    <footer>
      <ul>
        <li  @click="goindex()"><i class="iconfont icon-shinonggongban-"></i><span>首页</span></li>
        <li  @click="gocc()"><i class="iconfont icon-nongchanpinjiagechaxun"></i><span>分类</span></li>
        <li  @click="golist()"><i class="iconfont icon-classification_icon_"></i><span>列表</span></li>
        <li  @click="gocarts()"><i class="iconfont icon-pinpainongchanpin"></i><span>购物车</span></li>
        <li  @click="gomine()"><i class="iconfont icon-nongchanpinxiaoshouxinxi"></i><span>我的</span></li>
      </ul>
    </footer>
</template>

<script>
    export default {
        name: "IndexFooter",
        methods:{
          golist(){
            this.$router.push({
              path:"/List"
            })
          },
          goindex(){
            this.$router.push({
              path:"/"
            })
          },
          gocarts(){
            this.$router.push({
              path:"/Carts"
            })
          },
          gomine(){
            this.$router.push({
              path:"/RingUp"
            })
          },
          gocc(){
            this.$router.push({
              path:"/Kind"
            })
          },
        }
    }
</script>

<style scoped>
  .iconfont{
    color:#ac0;
  }
  footer ul{
    display: flex;
    height: .5rem;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border-top:1px solid #ababab;
  }
  footer ul li span{
    font-size:.12rem;
    color: #333333;
  }
</style>
