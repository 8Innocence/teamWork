<template>
    <div class="information-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../static/images/swi1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/images/swi2.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/images/swi3.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/images/swi4.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/images/swi5.jpg" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper';
    export default {
        name: "InformationSwiper",
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
.information-swiper{
  height: 1.87rem;
  border-bottom:.1rem solid #f5f5f5;
}
.swiper-container {
  width: 100%;
  height: 100%;

}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

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
  .information-swiper img{
  width:100%;
  height:100%;
}
</style>
