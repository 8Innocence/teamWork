<template>
  <section>
    <!--nav-->
    <money-nav></money-nav>
    <!--banner-->
    <money-banner></money-banner>
    <!--foot-->
    <money-foot></money-foot>
    <!--money-->
    <money-money></money-money>
  </section>
</template>

<script>
    import MoneyNav from "./MoneyNav";
    import MoneyBanner from "./MoneyBanner";
    import MoneyFoot from "./MoneyFoot";
    import MoneyMoney from "./MoneyMoney";
    export default {
        name: "MoneySection",
      components: {MoneyMoney, MoneyFoot, MoneyBanner, MoneyNav}
    }
</script>

<style scoped>
  section{
    flex:1;
    height:100%;
    overflow-y:auto;
  }
</style>
