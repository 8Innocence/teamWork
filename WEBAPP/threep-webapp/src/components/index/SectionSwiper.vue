<template>
  <div class="sliderBox">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/img/sliderbg.gif" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/img/sliderbg2.gif" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/img/sliderbg3.gif" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/img/sliderbg4.gif" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/img/sliderbg5.gif" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/img/sliderbg6.gif" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/img/sliderbg7.gif" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper/dist/js/swiper';
  export default {
    name: "Swiper",
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
  .sliderBox{
    height: 1.5rem;
  }
  .sliderBox img{
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
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
</style>
