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
                  {pic:"../../../static/images/ww.jpg",text:"兲猫"},
                  {pic:"../../../static/images/tt-hot2.jpg",text:"壹号店"},
                  {pic:"../../../static/images/xw.png",text:"交易猫"},
                  {pic:"../../../static/images/tt-hot4.jpg",text:"憨豆二手车"},
                  {pic:"../../../static/images/tt2.png",text:"琥牙直播"},
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
      margin-top:10px;

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
      /*justify-content: space-between;*/
      dl{
        width: 20%;
        padding:0 20px;
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
