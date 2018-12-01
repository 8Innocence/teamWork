<template>
    <header>
      <i class="iconfont icon-fanhui"></i>
      <span>惠农资讯</span>
      <i @click="toggle()" class="iconfont icon-caidan"></i>
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
        name: "InformationHeader",
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
  height:.53rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  padding:0 .17rem;
}
  header span{
    font-size:.16rem;
    color:#555555;
  }
header ul{
  width:1rem;
  top: .4rem;
  right: .1rem;
  position: absolute;
  z-index: 2;
}
header ul li a{
  border-bottom:1px solid #c8c7cc;
  line-height:.4rem;
  height:.4rem;
  font-size:.12rem;
  color: #ac0;
  background-color:gray;
}
header ul li:last-child a{
  border-bottom:0;
}

</style>
