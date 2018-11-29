<template>
  <footer>
    <div class="tab-item" @click="jingxuan()">
      <i class="iconfont icon-jingxuan-"></i>
      <span>精选</span>
    </div>
    <div class="tab-item" @click="liebiao()">
      <i class="iconfont icon-tianmaobao"></i>
      <span>种草猫</span>
    </div>
    <div class="tab-item" @click="shuangquan()">
      <i class="iconfont icon-ziyuan1"></i>
      <span>逛商圈</span>
    </div>
    <div class="tab-item" @click="gouwuche()">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </div>
    <div class="tab-item" @click="wode()">
      <i class="iconfont icon-wode"></i>
      <span>我</span>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "CartsFooter",
        methods:{
          jingxuan(){
            this.$router.push({
              path:"/"
            })
          },
          gouwuche(){
            this.$router.push({
              path:"/Carts"
            })
          },
          liebiao(){
            this.$router.push({
              path:"/List"
            })
          },
          shuangquan(){
            this.$router.push({
              path:"/Market"
            })
          },
          wode(){
            this.$router.push({
              path:"/Mine"
            })
          },
        }
    }
</script>

<style scoped>
  footer{
    width:100%;
    height:0.49rem;
    background:white;
    border-top:1px solid #b2b2b2;
    display:flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
  }
  .tab-item{
    width:20%;
    height:0.49rem;
    display:flex;
    flex-direction:column;
  }
  .tab-item span{
    dispaly:block;
    font-size:0.09rem;
    color:#b2b2b2;
    text-align:center;
  }
  .tab-item .iconfont{
    font-size:0.2rem;
    color:#5f646e;
    text-align:center;
    margin-top:0.04rem;
  }
</style>
