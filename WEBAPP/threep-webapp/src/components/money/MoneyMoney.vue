<template>
  <div class="money">
    <p><img src="../../../static/img/sev5.gif" alt=""><span>不使用</span></p>
    <p>红包抵扣￥3<span>查看详情</span><el-switch v-model="value3" active-color="#13ce66">
    </el-switch></p>
    <p>匿名购买<el-switch class="ee" style="display: block" v-model="value4" active-color="#13ce66"  >
    </el-switch></p>
    <p>送至：陕西省西安市雁塔区南窑头国际 </p>
  </div>
</template>

<script>
    export default {
        name: "MoneyMoney",
      data() {
        return {
          value3: true,
          value4: true
        }
      }
    }
</script>

<style scoped>
  .money{
    width:100%;
    height:2.06rem;
    background:white;
  }
  .money p{
    width:95%;
    height:0.5rem;
    margin:0 auto;
    display:flex;
    -webkit-align-items: center;
    font-size:0.12rem;
    border-bottom:1px solid #9a9a9a;
  }
  .money p:nth-child(1) span{
    margin-left:2rem;
  }
  .money p:nth-child(2) span{
    color:#999999;
    margin-left:0.1rem;
    margin-right:1.8rem;
  }
  .ee{
    margin-left:2.57rem;
  }
  .money p:nth-child(1) img{
    width:0.9rem;
    height:0.16rem;
  }


  .money p:nth-child(4){
    color:#13ce66;
  }
</style>
