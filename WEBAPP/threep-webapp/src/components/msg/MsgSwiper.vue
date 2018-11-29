<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../../assets/img/msg1.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/img/msg2.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/img/msg3.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/img/msg4.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/img/msg5.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/img/msg1.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/img/msg2.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/img/msg3.jpg" alt=""></div>
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
    height:3.735rem;
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
