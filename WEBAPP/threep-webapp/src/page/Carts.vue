<template>
  <div class="app">
    <carts-header></carts-header>
    <carts-section @add="addQal"  @minus="minQal"  :list="cars"></carts-section>
    <carts-nav :tm="totalMoney" :tn="totalNum"></carts-nav>
    <index-footer></index-footer>
  </div>
</template>

<script>
  // import Public from "../assets/css/public.css";
  // import Iconfont from "../assets/css/iconfont.css";
  import CartsHeader from "../components/carts/CartsHeader";
  import CartsSection from "../components/carts/CartsSection";
  import CartsNav from "../components/carts/CartsNav";
  import carsApi from "../api/carsApi";
  import IndexFooter from "../components/index/IndexFooter";

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
        cars:[
          {
            "shopname":"王家村直销店",
            "pic":"../../../static/images/110CDAHDB7ChRkRlvScHuAKv0VAAkBehgjeS4300.png",
            "title":"作为理科生的我实在想不出词啦",
            "msg":"一袋装",
            "price":"10",
            "qal":1
          },
          {
            "shopname":"小沟沟专卖店",
            "pic":"../../../static/images/1718EES12CChRkRlvScQeADsLZAAjPFqPAijs855.png",
            "title":"很好吃 很营养 很新鲜",
            "msg":"一只鸡",
            "price":"10",
            "qal":1
          },
          {
            "shopname":"农产品直销店",
            "pic":"../../../static/images/79453a2dbea242c486075f00122ec9f2.png",
            "title":"美味的东西就应该好好被珍惜",
            "msg":"喜欢的是好的",
            "price":"10",
            "qal":1
          },
          {
            "shopname":"农产品直销店",
            "pic":"../../../static/images/f30a876a-b7be-4240-9c95-e89c330576f4.jpg",
            "title":"美味的东西就应该好好被珍惜",
            "msg":"喜欢的是好的",
            "price":"10",
            "qal":1
          },
          {
            "shopname":"农产品直销店",
            "pic":"../../../static/images/AB5471CCF1ChRkRlvScKuAfh3DAAmeQ8tVYQU264.png",
            "title":"美味的东西就应该好好被珍惜",
            "msg":"喜欢的是好的",
            "price":"10",
            "qal":1
          },
          {
            "shopname":"农产品直销店",
            "pic":"../../../static/images/dl1.jpeg",
            "title":"美味的东西就应该好好被珍惜",
            "msg":"喜欢的是好的",
            "price":"10",
            "qal":1
          }
        ]
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
          console.log(this.totalMoney)
          // this.totalMoney = (this.totalMoney).toFixed(2)
        })
      },
      /**
       * 加载页面的数据
       * @private
       */
      // _initPageData(){
      //   carsApi.getCarsData(data=>{
      //     this._countCarts(data)
      //     this.cars = data;
      //     console.log(this.cars)
      //   })
      // },
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
    // created(){
    //   //首页加载数据
    //   this._initPageData()
    // },

    watch:{
      cars:{
        handler:function(n,o){
          this._countCarts(this.cars)
        },
        deep:true
      }
    },
    components: {IndexFooter, CartsNav, CartsSection, CartsHeader}
  }
</script>

<style scoped>
  .app{
    height:100%;
    display:flex;
    flex-direction:column;
  }
</style>
