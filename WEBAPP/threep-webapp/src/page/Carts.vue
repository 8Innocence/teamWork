<template>
<div class="app">
      <carts-header></carts-header>
      <carts-section @add="addQal"  @minus="minQal"  :list="cars"></carts-section>
      <carts-nav :tm="totalMoney" :tn="totalNum"></carts-nav>
      <carts-footer></carts-footer>
</div>
</template>

<script>
    import Public from "../assets/css/public.css";
    import Iconfont from "../assets/css/iconfont.css";
    import CartsHeader from "../components/carts/CartsHeader";
    import CartsSection from "../components/carts/CartsSection";
    import CartsNav from "../components/carts/CartsNav";
    import CartsFooter from "../components/carts/CartsFooter";
    import carsApi from "../api/carsApi";

    export default {
        name: "Carts",
      data(){
        return{
          /**
           * 总件数
           */
          totalNum: 0,

          /**
           * 总金额
           */
          totalMoney: 0,

          /**
           * 商品列表
           */
          cars:[]
        }
      },
      methods:{
        /**
         * 统计出总价格和总数量
         * @param cars
         * @private
         */
        _countCarts(cars) {
          this.totalMoney = 0
          this.totalNum = 0
          cars.forEach((item,idx)=>{
            this.totalNum += item.qal
            this.totalMoney += item.qal * item.price
          })
        },
        /**
         * 加载页面的数据
         * @private
         */
        _initPageData(){
          carsApi.getCarsData(data=>{
            this._countCarts(data)
            this.cars = data;
            console.log(this.cars)
          })
        },
        /**
         * 给每个商品增加件数
         * @param i
         */
        addQal(i) {
          this.cars[i].qal++
        },

        /**
         * 给每个商品减少件数
         * @param i
         */
        minQal(i) {
          if( this.cars[i].qal <=1){
            this.cars[i].qal =1
          }else{
            this.cars[i].qal--
          }
        }
      },
      created(){
        //首页加载数据
        this._initPageData()
      },
      watch:{
          cars:{
            handler:function(n,o){
              this._countCarts(this.cars)
            },
            deep:true
          }
      },
      components: {CartsFooter, CartsNav, CartsSection, CartsHeader,Iconfont,Public}
    }
</script>

<style scoped>
.app{
  height:100%;
  display:flex;
  flex-direction:column;
}
</style>
