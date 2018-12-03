<template>
  <div class="content-right">
      <h1 class="explain">开始使用 --  使用指南</h1>
      <p class="intr">iuui是由精英团队Innocence打造的优秀的webapp前端框架，结合element，拿来即用，外在及简。无需涉足负载的配置，组件丰盈，是快速开发的利器，我们的目的是信手拈来，是让你们选择我们。
      </p>
      <div class="have-code">
        <h6>1.官网首页下载</h6>
        <p>我们无需下载    <a href=""></a>只需您的复制粘贴</p>
        <div class="show-code">
          <h5>code</h5>
          <ol>
            <li> ├─css //css目录</li>
            <li> │  │─modules //模块css目录（一般如果模块相对较大，我们会单独提取，比如下面三个：）</li>
            <li> │  │  ├─iuuidate</li>
            <li> │  │  ├─iuui</li>
            <li> │  │  └─iuui</li>
            <li> │  └─iuui.css //核心样式文件</li>
            <li> ├─font  //字体图标目录</li>
            <li> ├─images //图片资源目录（目前只有layim和编辑器用到的GIF表情）</li>
            <li> │─lay //模块核心目录</li>
            <li> │  └─modules //各模块组件</li>
            <li> │─iuui.js //基础核心库</li>
            <li> └─iuui.all.js //包含iuui.js和所有模块的合并文件</li>
            <li></li>
          </ol>
        </div>
        <h6>2.Git仓库下载</h6>
        <p class="show-butt">你也可以通过<a href="">github仓库</a>下载，以便于您进行第二次开发</p>

        <div class="title-window" v-if="show">
          <h4>目录<span @click="hidd()">X</span></h4>
          <ul>
            <li><a href="">快速上手</a></li>

          </ul>
        </div>

        <div class="show-code">
          <h5>code</h5>
          <ol>
            <li> ├─css //css目录</li>
            <li> │  │─modules //模块css目录（一般如果模块相对较大，我们会单独提取，比如下面三个：）</li>
            <li> │  │  ├─iuuidate</li>
            <li> │  │  ├─iuuiyer</li>
            <li> │  │  └─iuui</li>
            <li> │  └─iuui.css //核心样式文件</li>
            <li> ├─font  //字体图标目录</li>
            <li> ├─images //图片资源目录（目前只有layim和编辑器用到的GIF表情）</li>
            <li> │─lay //模块核心目录</li>
            <li> │  └─modules //各模块组件</li>
            <li> │─iuui.js //基础核心库</li>
            <li> └─iuui.all.js //包含iuui.js和所有模块的合并文件</li>
            <li></li>
          </ol>
        </div>
        <div class="show-code">
          <h5>code</h5>
          <ol>
            <li> ├─css //css目录</li>
            <li> │  │─modules //模块css目录（一般如果模块相对较大，我们会单独提取，比如下面三个：）</li>
            <li> │  │  ├─iuuidate</li>
            <li> │  │  ├─iuuier</li>
            <li> │  │  └─iuui</li>
            <li> │  └─iuui.css //核心样式文件</li>
            <li> ├─font  //字体图标目录</li>
            <li> ├─images //图片资源目录（目前只有layim和编辑器用到的GIF表情）</li>
            <li> │─iuui //模块核心目录</li>
            <li> │  └─modules //各模块组件</li>
            <li> │─iuui.js //基础核心库</li>
            <li> └─iuui.all.js //包含iuui.js和所有模块的合并文件</li>
            <li></li>
          </ol>
        </div>
        <div class="show-code">
          <h5>code</h5>
          <ol>
            <li> ├─css //css目录</li>
            <li> │  │─modules //模块css目录（一般如果模块相对较大，我们会单独提取，比如下面三个：）</li>
            <li> │  │  ├─iuuidate</li>
            <li> │  │  ├─iuuier</li>
            <li> │  │  └─iuui</li>
            <li> │  └─iuui.css //核心样式文件</li>
            <li> ├─font  //字体图标目录</li>
            <li> ├─images //图片资源目录（目前只有layim和编辑器用到的GIF表情）</li>
            <li> │─iuui //模块核心目录</li>
            <li> │  └─modules //各模块组件</li>
            <li> │─iuui.js //基础核心库</li>
            <li> └─iuui.all.js //包含iuui.js和所有模块的合并文件</li>
            <li></li>
          </ol>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "ContentRight",
      data(){
          return{
            show:true,
          }
      },
      methods:{
          hidd:function(){
            this.show=!this.show
          }
      }
    }
</script>

<style scoped>
  .content-right{
    padding-left:50px;
    width: 70%;
    height: 100%;
    margin:0 20px;
    /*margin:10px 20px;*/
    /*box-sizing: border-box;*/
    overflow-y:auto;
  }
  .content-right::-webkit-scrollbar {
    width:0px;
    height:0px;
  }
  .content-right .explain{
    font-size:24px;
    color: #393d49;
    line-height:80px;
    font-weight:100;
    border-bottom:1px solid #f2f2f2;
    margin-bottom:20px;
  }
  .content-right .intr{
    font-size:14px;
    line-height: 30px;
    color: #000000;
    padding:0 15px;
    border-left:5px solid #009688;
    background-color:#eeeeee;
  }
  .content-right .have-code h6{
    font-size: 12px;
    line-height: 42px;
    font-weight:100;
    color: #000;
  }
  .content-right .have-code p{
    font-size:12px;
    line-height:52px;
    border:1px solid #e6e6e6;
    border-left-width:5px;
    padding-left:15px;
  }
  .have-code p a{
    color: #01aaed;
  }
  .have-code .show-code{
    border:1px solid #e2e2e2;
    border-left-width:6px;
    margin-top:10px;
    background-color:#f2f2f2;
  }
  .show-code h5{
    font-weight:100;
    font-size:14px;
    line-height:32px;
    padding-left:10px;
    border-bottom:1px solid #e2e2e2;
  }
  .show-code ol li{
    font-size:12px;
    height:20px;
    line-height:20px;
    color: #333;
    margin-left: 45px;
    padding:0 5px;
    background-color: white;
    border-left:1px solid #e2e2e2;
    list-style-type: decimal-leading-zero;
  }
  .have-code .show-img{
    height: 94px;
    background-color: black;
  }
  .content-right .title-window{
    width:152px;
    border:1px solid #d2d2d2;
    position: fixed;
    right:15px;
    top:50%;
    background-color:white;
  }
  .title-window h4{
    height: 42px;
    font-size:12px;
    padding:0 18px;
    background-color: #eeeeee;
    color: #333333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #d2d2d2;
  }
  .title-window h4 span{
    cursor: pointer;
  }
  .title-window ul{
    height:130px;
    padding:10px 30px;
    overflow-y: auto;
  }
  .title-window ul li{
    height:26px;
    line-height: 26px;
    list-style-type:disc;
  }
  .title-window ul li a{
    font-size:12px;
    color: #000;
  }
</style>
