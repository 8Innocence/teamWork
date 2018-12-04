<template>
  <ul>
    <li v-for="(p,i) in navLi" @click='post(i)'>{{p.title}}</li>
  </ul>
</template>

<script>
    export default {
        name: "KindContentLi",
        data(){
          return {
            navLi:[
              {"title":"为您推荐"},
              {"title":"干货食品"},
              {"title":"生鲜食品"},
              {"title":"乳品饮料"},
              {"title":"中外名酒"},
              {"title":"厨卫清洁"},
              {"title":"母婴童装"},
              {"title":"玩具乐器"},
              {"title":"美容护理"},
              {"title":"宠物生活"},
              {"title":"家居家纺"},
            ]
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
