<template>
    <div class="public">
      <money-header></money-header>
      <money-section></money-section>
      <money-over></money-over>
    </div>
</template>

<script>
    import MoneyHeader from "../components/money/MoneyHeader";
    import MoneySection from "../components/money/MoneySection";
    import MoneyOver from "../components/money/MoneyOver";
    export default {
        name: "Money",
      components: {MoneyOver, MoneySection, MoneyHeader}
    }
</script>

<style scoped>
  .public{
    height:100%;
    display:flex;
    flex-direction:column;
    background:#eeeeee;
  }
</style>
