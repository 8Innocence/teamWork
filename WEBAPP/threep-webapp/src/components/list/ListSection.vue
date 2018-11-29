<template>
  <section>
    <ul>
     <list-li></list-li>
    </ul>
  </section>
</template>

<script>
    import ListLi from "./ListLi";
    export default {
        name: "ListSection",
      components: {ListLi}
    }
</script>

<style scoped>
  section{
    width:100%;
    flex:1;
    overflow-y: auto;
  }
  section ul{
    width:95%;
    margin:0 auto;
    display:flex;
    -webkit-justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
