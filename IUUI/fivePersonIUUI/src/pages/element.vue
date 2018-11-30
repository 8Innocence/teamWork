<template>
  <div class="container">
    <index-header class="XT"></index-header>
    <div class="elm">
      <content-left class="left"></content-left>
      <ul class="main">
        <!--文本编辑器区域-->
        <!--<textarea id="text">-->
        <!---->
        <!--</textarea>-->
        <li @click="change">
          <but-el-row></but-el-row>
        </li>
        <li>
          <but-radio-group></but-radio-group>
        </li>
        <li>
          <but-fade-in-out></but-fade-in-out>
        </li>



      </ul>
    </div>
  </div>


</template>

<script>

  import  commoncss from "../../static/css/common.css"
  import ButFadeInOut from "../components/ZDS/butFadeInOut";
  import ButElRow from "../components/ZDS/butElRow";
  import ButRadioGroup from "../components/ZDS/butRadioGroup";
  import CodeEditor from "../components/ZDS/codeEditor";
  import ContentLeft from "../components/XT/ContentLeft";
  import ContentHeader from "../components/XT/ContentHeader";
  import IndexHeader from "../components/DL/IndexHeader";
  export default {
    components: {IndexHeader, ContentLeft, CodeEditor, commoncss,ButRadioGroup, ButElRow, ButFadeInOut},
    data(){
      return{

      }
    },
    methods: {
      change(){
      }
    }
  }
</script>

<style lang="scss">
  .container{
     display: flex;
    flex-direction: column;
    .XT{
      width:100%;
      padding:0 8%;
      box-sizing: border-box;
      background:gray;
      float: left;
    }
    .elm{
      display: flex;
      .left{
        /*float: left;*/
      }
      .main{
        width: 90%;
        background: #e6e3e3;
        li{
          border-bottom: 1px solid black;
          padding-top: 20px ;

        }

      }
    }

  }


</style>

