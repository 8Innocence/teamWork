<template>
  <section id="app1">
    <ul>
       <carts-li  @minus="minNum"  @add="addNum" :item="p" :key="i"  :idx="i"  v-for="(p,i) in list"></carts-li>
    </ul>
  </section>
</template>

<script>
    import CartsLi from "./CartsLi";

    export default {
        name: "CartsSection",
        components: {CartsLi},
        props:["list"],
        methods:{
            addNum(i){
                console.log(i)
             this.$emit("add",i)
            },
            minNum(i){
                console.log(i)
              this.$emit("minus",i)
            }
        }
    }
</script>

<style scoped>
  section{
    width:95%;
    margin:0 auto;
    flex:1;
    overflow-y: auto;
  }
  section ul{
    width:100%;
  }
</style>
