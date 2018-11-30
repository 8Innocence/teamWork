<template>
  <div class="container ">
    <content-left class="col-sm-2"></content-left>
    <ul class="main col-sm-10">
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


</template>

<script>

  import  commoncss from "../../static/css/common.css"
  import ButFadeInOut from "../components/ZDS/butFadeInOut";
  import ButElRow from "../components/ZDS/butElRow";
  import ButRadioGroup from "../components/ZDS/butRadioGroup";
  import CodeEditor from "../components/ZDS/codeEditor";
  import ContentLeft from "../components/XT/ContentLeft";
  export default {
    components: {ContentLeft, CodeEditor, commoncss,ButRadioGroup, ButElRow, ButFadeInOut},
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
      margin-top:50px;
      height: 100%;
      display: flex;
    .main{
      width: 90%;
      background: #e6e3e3;
      li{
        border-bottom: 1px solid black;
        padding-top: 20px ;

      }

    }
  }


</style>

