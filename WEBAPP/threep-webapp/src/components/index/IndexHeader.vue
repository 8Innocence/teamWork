<template>
  <header>
    <a href="javascript:;"><i class="iconfont icon-icon-test"></i><span></span>全部分类</a>
    <div></div>
    <a href="javascript:;" @click="toggle()"><i class="iconfont icon-more"></i></a>

    <ul v-if="show">
      <li></li>
      <li><a href="javascript:;">供应大厅</a></li>
      <li><a href="javascript:;">采购大厅</a></li>
      <li><a href="javascript:;">行情大厅</a></li>
      <li><a href="javascript:;">惠农咨询</a></li>
      <li><a href="javascript:;">惠农学堂</a></li>
    </ul>
  </header>
</template>

<script>
    export default {
        name: "IndexHeader",
      data(){
          return{
            show:false
          }
      },
      methods:{
          toggle(){
            this.show=!this.show
          }
      }
    }
</script>

<style scoped>
header{
  height:.43rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
  header a{
    font-size:.12rem;
    color: #ababab;
    text-align: center;
    line-height: .16rem;
  }
  header a i{
    color: #ac0;
  }
  header div{
    width: 2.45rem;
  }
  header ul{
    width:1rem;
    top: .3rem;
    right: .1rem;
    position: absolute;
    z-index: 2;
  }
  header ul li a{
    border-bottom:1px solid #c8c7cc;
    line-height:.4rem;
    height:.4rem;
    background-color:#f7f7f7;
  }
  header ul li:last-child a{
    border-bottom:0;
  }



</style>
