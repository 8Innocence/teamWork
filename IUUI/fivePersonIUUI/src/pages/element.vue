<template>
  <div class="all">
  <index-header class="XT"></index-header>
    <div class="elm">
      <cc-nav :list="lists"></cc-nav>
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
  import IndexHeader from "../components/DL/IndexHeader";
  import CcNav from "../components/CC/ccNav";
  export default {
    components: {CcNav, IndexHeader, ContentLeft, CodeEditor, commoncss,ButRadioGroup, ButElRow, ButFadeInOut},
    data() {
      return {

      }
    },
    methods: {
      change(){
      }
    }
  }
</script>

<style lang="scss">
  .all{
    display:flex;
    flex-direction: column;
    .XT{
      width:100%;
      box-sizing: border-box;
      background:#7dc499;
    }
    .elm{
      display: flex;
      width:100%;
      .main{
        flex:1;
        background: #e6e3e3;
        li{
          border-bottom: 1px solid black;
          padding-top: 20px ;

        }

      }
    }

  }


</style>

