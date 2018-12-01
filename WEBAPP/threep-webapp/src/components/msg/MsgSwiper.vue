<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../../../static/images/cf171c02808d4b69ae74079b99c7f3c4.png" alt=""></div>
      <div class="swiper-slide"><img src="../../../static/images/cd3167ab-0a2e-4017-b7bb-8e9990674c23.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../../static/images/dl3.jpeg" alt=""></div>
      <div class="swiper-slide"><img src="../../../static/images/79453a2dbea242c486075f00122ec9f2.png" alt=""></div>
      <div class="swiper-slide"><img src="../../../static/images/1718EES12CChRkRlvScQeADsLZAAjPFqPAijs855.png" alt=""></div>
      <div class="swiper-slide"><img src="../../../static/images/0d96a659-263a-428a-95a4-ae7c13fc2f6a.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../../static/images/6fdd8a07c1ba469481446c2124402c57.jpeg" alt=""></div>
      <div class="swiper-slide"><img src="../../../static/images/15c34877-7bfa-454e-8fa9-184fa0835bc4.jpg" alt=""></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper';
  export default {
    name: "MsgSwiper",
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      new Swiper('.swiper-container', {
        loop:true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  }
</script>

<style scoped>
  @import'../../assets/css/swiper.min.css';
  .swiper-container {
    width: 100%;
    height:3rem;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img{
    width:100%;
    height:100%;
  }
</style>
