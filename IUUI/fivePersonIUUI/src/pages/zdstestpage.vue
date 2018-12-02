<template>
  <div>
    <list></list>
    <calendarplus></calendarplus>
  </div>

</template>

<script>
    import List from "../components/ZDS/List";
    import Calendarplus from "../components/ZDS/calendarplus";
    export default {
        name: "zdstestpage",
      components: {Calendarplus, List}
    }
</script>

<style scoped>

</style>
