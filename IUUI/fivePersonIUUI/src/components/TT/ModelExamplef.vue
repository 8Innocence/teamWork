<template>
  <div class="ModelExamplef">
    <div v-for="i in Example">
      <h2>{{i.name}}</h2>
      <div class="line"></div>
      <div class="single">
        <dl v-for="j in i.arr">
          <dt><a :href="j.url"><img :src="j.pic"></a></dt>
          <dd>{{j.text}}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ModelExamplef",
    data(){
      return{
        Example:[
          {
            name:"后台模板",arr:[
              {url:"https://w17612939306.github.io/Back-Stage/",pic:"../../../static/images/tt1.png",text:"Purple"},
              {url:"https://w17612939306.github.io/Back-Stage/",pic:"../../../static/images/hx.png",text:"Dream"},
              {url:"https://w17612939306.github.io/Back-Stage/",pic:"../../../static/images/hw.jpg",text:"Visual"},
              {url:"https://w17612939306.github.io/Back-Stage/",pic:"../../../static/images/hd.jpg",text:"Arise"},
            ]
          },
          // {
          //   name:"更多模板",arr:[
          //     {pic:"../../../static/images/tt-hot1.jpg",text:"京东webapp模板"},
          //     {pic:"../../../static/images/tt-hot2.jpg",text:"京东webapp模板"},
          //     {pic:"../../../static/images/tt-hot3.jpg",text:"京东webapp模板"},
          //     {pic:"../../../static/images/tt-hot4.jpg",text:"京东webapp模板"},
          //     {pic:"../../../static/images/tt-hot5.jpg",text:"京东webapp模板"},
          //   ]
          // },

        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ModelExamplef{
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
      padding:10px 20px;
      display: flex;
      flex-wrap: wrap;
      dl{
        width:33%;
        display: flex;
        padding:10px;
        flex-direction: column;
        border:5px solid white;
        dt{
          width:100%;
          height:auto;
          overflow: hidden;
          img{
            width:100%;
            height:230px;
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
