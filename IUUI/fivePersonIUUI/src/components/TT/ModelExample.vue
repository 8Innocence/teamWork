<template>
    <div class="ModelExample">
      <div v-for="i in Example">
        <h2>{{i.name}}</h2>
        <div class="line"></div>
      <div class="single">
        <dl  v-for="j in i.arr">
          <dt><img :src="j.pic"></dt>
          <dd>{{j.text}}</dd>
        </dl>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ModelExample",
        data(){
          return{
            Example:[
              {
                name:"更多模板",arr:[
                  {pic:"../../../static/images/tt-hot1.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot2.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot3.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot4.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot5.jpg",text:"京东webapp模板"},
                ]
              },
              {
                name:"更多模板",arr:[
                  {pic:"../../../static/images/tt-hot1.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot2.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot3.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot4.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot5.jpg",text:"京东webapp模板"},
                ]
              },
              {
                name:"更多模板",arr:[
                  {pic:"../../../static/images/tt-hot1.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot2.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot3.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot4.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot5.jpg",text:"京东webapp模板"},
                ]
              },
            ]
          }
        }
    }
</script>

<style lang="scss" scoped>
  .ModelExample{
    h2{
      width:200px;
      line-height:70px;
      background:white;
      /*position:absolute;*/
      margin:0 auto;
      text-align: center;

    }
    .line{
      height:0px;
      border-top:2px solid black;
      width:200px;
      margin:0 auto;
    }
    .single{
      padding:30px 20px;
      display: flex;
      flex-wrap: wrap;
      dl{
        flex:15%;
        margin:0 25px;
        display: flex;
        flex-direction: column;
        border:5px solid white;
         dt{
           flex:1;
           width:100%;
           img{
             width:100%;
             height:auto;
           }
         }
         dd{
           height:50px;
           line-height:50px;
           text-align: center;

         }
       }
    }
  }
</style>
