<template>
    <div>{{cars}}</div>
</template>

<script>
import apis from "../apis/apis"
  export default {
    name: "test",
    components: {},
    data:function(){
      return{
        cars:[]
      }
    },
    methods:{
      /**
       * 加载页面数据  可以在此处理数据
       * @private
       */
      _initPageData() {
        apis.getData(data=>{
          this.cars = data;
          // console.log(this.cars)
        })
      },


    },
    created(){
      this._initPageData()
    }

  }
</script>

<style scoped>

</style>
