<template>
    <div class="ModelList">
      <ul class="">
        <li class="first" @mousrover="Slip"><a class="first" href="#">模板分类</a></li>
        <li><a href="#">webapp</a></li>
        <li><a href="#">后台管理</a></li>
        <li><a href="#">更多</a></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ModelList",
        methods:{
          Slip(){
            this.style.background="white"
          }
        }
    }
</script>

<style lang="scss" scoped>
  .ModelList{
    ul{
      width:200px;
      background:white;
      li{
        line-height:50px;
        text-align: center;
        border-bottom: 1px solid #eeeeee;
        border-right: 1px solid #eeeeee;

        a{
          color:black;
          text-decoration-line: none;
        }


      }
      :not(.first):hover{
        background:#eee;
      }
      .first{
        background:#7dc499;
        a{
          color:white;
        }
      }
    }
  }
</style>
