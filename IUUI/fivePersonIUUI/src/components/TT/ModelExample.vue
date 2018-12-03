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
                name:"WebApp模板",arr:[
                  {pic:"../../../static/images/tt-hot1.jpg",text:"天猫"},
                  {pic:"../../../static/images/tt-hot2.jpg",text:"壹号店"},
                  {pic:"../../../static/images/tt-hot3.jpg",text:"交易猫"},
                  {pic:"../../../static/images/tt-hot4.jpg",text:"瓜子二手车"},
                  {pic:"../../../static/images/tt2.png",text:"虎牙直播"},
                ]
              },
              {
                name:"后台模板",arr:[
                  {pic:"../../../static/images/tt1.png",text:"Purple"},
                  {pic:"../../../static/images/tt-hot2.jpg",text:"京东webapp模板"},
                  {pic:"../../../static/images/tt-hot3.jpg",text:"京东webapp模板"},
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
      line-height:80px;
      background:white;
      /*position:absolute;*/
      margin:0 auto;
      text-align: center;
      margin-top:30px;

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
        flex:1;
        height:300px;
        margin:0 25px;
        display: flex;
        flex-direction: column;
        border:5px solid white;
         dt{
           width:100%;
           height:auto;
           overflow: hidden;
           img{
             width:100%;
             height:auto;
           }
         }
         dd{
           height:50px;
           line-height:50px;
           text-align: center;
           font-weight:600;
           font-size:16px;
           border-top:1px solid #eee;
         }
       }
      dl:hover{
        box-shadow: 5px 5px 5px #ccc;
      }
    }
  }
</style>
