<template>
  <ul>
    <li v-for="(p,i) in liData" @click='post(i)'>{{p.title}}</li>
  </ul>
</template>

<script>
    export default {
        name: "KindContentLi",
      props:["liData"],
        data(){
          return {

          }
        },
        methods:{
            post(i) {
              console.log(i)
              this.$emit('send',i);
            }
        }
    }

</script>

<style scoped>
  .content ul{
    width:1rem;
    height:100%;
    display:flex;
    flex-direction: column;
    overflow-y:auto;
  }
  .content ul li{
    font-size:.12rem;
    color:black;
    height:.40rem;
    line-height:.40rem;
    border-right:.01rem solid #e2e2e2;
    border-bottom:.01rem solid #e2e2e2;
    text-align:center;
    background:white;

  }
</style>
