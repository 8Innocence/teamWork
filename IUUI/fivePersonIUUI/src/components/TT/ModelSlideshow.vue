<template>
    <div class="ModelSlideshow">
      <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../static/images/tt-slide1.png" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/images/tt-slide2.png" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/images/tt-slide3.png" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/images/tt-slide4.png" alt=""></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
    </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import SwiperCss from 'swiper/dist/css/swiper.min.css';

  export default {
        name: "ModelSlideshow",
    components:{Swiper,SwiperCss },
    mounted(){
      new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
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
      });
    }
    }
</script>

<style lang="scss" scoped>
  .ModelSlideshow{
    /*position:relative;*/
    height:400px;
    margin-top:20px;
  }
  .swiper-container {
    width: 100%;
    height:100%;

  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    width:100%;
    img{
      width:100%;
      height:auto;
    }

    /* Center slide text vertically */
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
