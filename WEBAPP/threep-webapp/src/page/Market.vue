<template>
    <div class="run">
      <market-header></market-header>
      <market-nav></market-nav>
      <market-go></market-go>
      <carts-footer></carts-footer>
    </div>
</template>

<script>
    import Public from "../assets/css/public.css";
    import Iconfont from "../assets/css/iconfont.css";
    import MarketHeader from "../components/market/MarketHeader";
    import MarketNav from "../components/market/MarketNav";
    import MarketGo from "../components/market/MarketGo";
    import CartsFooter from "../components/carts/CartsFooter";
    export default {
        name: "Market",
      components: {CartsFooter, MarketGo, MarketNav, MarketHeader,Public,Iconfont}
    }
</script>

<style scoped>
  .run{
    width:100%;
    display:flex;
    background:white;
    height:100%;
    flex-direction: column;
  }
</style>
