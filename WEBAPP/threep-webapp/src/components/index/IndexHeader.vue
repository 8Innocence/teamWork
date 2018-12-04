<template>
  <header>
    <a href="javascript:;"><i class="iconfont icon-icon-test"></i><span>全部分类</span></a>
    <div class="aa">
        <a href="javascript:;">
          <input type="text" placeholder="搜索商品 品牌">
          <!--<p>搜索商品 品牌</p>-->
        </a>
    </div>
    <a href="javascript:;" @click="toggle()"><i class="iconfont icon-more"></i></a>

    <ul v-if="show">
      <li></li>
      <li><a href="javascript:;">供应大厅</a></li>
      <li><a href="javascript:;">采购大厅</a></li>
      <li><a href="javascript:;">行情大厅</a></li>
      <li><a href="javascript:;" @click="gozhu()">惠农咨询</a></li>
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
          },
          gozhu(){
            this.$router.push({
              path:"/Information"
            })
          }
      }
    }
</script>

<style scoped>
.aa a{
    width:100%;
    height:0.35rem;
    background:white;
    display:flex;
    -webkit-align-items: center;
  }
.aa a input{
  outline:none;
}
  header a input{
    border:0;
    line-height:.25rem;
    text-indent:0.1rem;
    font-size:0.12rem;
    color:#a6a6a6;
    margin-right:1.3rem;
  }
header{
  height:.43rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background:#ac0;
  padding: .03rem 0;
}
  header a{
    font-size:.08rem;
    color: white;
    text-align: center;
    line-height: .16rem;
  }
  header a i{
    color: white;
    margin-top:.05rem;
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
    color:#ac0;
    background-color:#f7f7f7;
  }
  span{
    display:block;
    margin-top:.05rem;
  }
  header ul li:last-child a{
    border-bottom:0;
  }
.iconfont{
  font-size:.25rem;
}
  .icon-more{
    font-size:.2rem;
    margin-right:.04rem;
  }


</style>
