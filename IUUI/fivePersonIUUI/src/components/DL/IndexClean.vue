<template>
  <div class="cont">
    <div class="mouse"></div>
    <div class="app">
      <div class="app__bgimg">
        <div class="app__bgimg-image app__bgimg-image--1"> </div>
        <div class="app__bgimg-image app__bgimg-image--2"> </div>
      </div>
      <div class="app__img"> <img onMouseDown="return false" src="../../../static/images/whiteTest4.png" alt="city" /> </div>
      <div class="app__text app__text--1">
        <div class="app__text-line app__text-line--4">IUUI</div>
        <div class="app__text-line app__text-line--3">Efficient</div>
        <div class="app__text-line app__text-line--2">excellent </div>
        <div class="app__text-line app__text-line--1"><img src="../../../static/images/opus-attachment.png" alt="" /></div>
      </div>
      <div class="app__text app__text--2">
        <div class="app__text-line app__text-line--4">IUUI</div>
        <div class="app__text-line app__text-line--3">profession</div>
        <div class="app__text-line app__text-line--2">excellent</div>
        <div class="app__text-line app__text-line--1"><img src="../../../static/images/opus-attachment.png" alt="" /></div>
      </div>
    </div>
    <div class="pages">
      <ul class='pages__list'>
        <li data-target='1' class='pages__item pages__item--1 page__item-active'></li>
        <li data-target='2' class='pages__item pages__item--2'></li>
      </ul>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery'
    export default {
        name: "IndexClean",
      mounted(){$(document).ready(function () {
        var $app = $('.app');
        var $img = $('.app__img');
        var $pageNav1 = $('.pages__item--1');
        var $pageNav2 = $('.pages__item--2');
        var animation = true;
        var curSlide = 1;
        var scrolledUp = void 0,
          nextSlide = void 0;

        var pagination = function pagination(slide, target) {
          animation = true;
          if (target === undefined) {
            nextSlide = scrolledUp ? slide - 1 : slide + 1;
          } else {
            nextSlide = target;
          }

          $('.pages__item--' + nextSlide).addClass('page__item-active');
          $('.pages__item--' + slide).removeClass('page__item-active');

          $app.toggleClass('active');
          setTimeout(function () {
            animation = false;
          }, 3000);
        };

        var navigateDown = function navigateDown() {
          if (curSlide > 1) return;
          scrolledUp = false;
          pagination(curSlide);
          curSlide++;
        };

        var navigateUp = function navigateUp() {
          if (curSlide === 1) return;
          scrolledUp = true;
          pagination(curSlide);
          curSlide--;
        };

        setTimeout(function () {
          $app.addClass('initial');
        }, 1500);

        setTimeout(function () {
          animation = false;
        }, 4500);

        $(document).on('mousewheel DOMMouseScroll', function (e) {
          var delta = e.originalEvent.wheelDelta;
          if (animation) return;
          if (delta > 0 || e.originalEvent.detail < 0) {
            navigateUp();
          } else {
            navigateDown();
          }
        });

        $(document).on("click", ".pages__item:not(.page__item-active)", function () {
          if (animation) return;
          var target = +$(this).attr('data-target');
          pagination(curSlide, target);
          curSlide = target;
        });
      });}
    }

</script>

<style scoped>
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  .cont {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    padding:30px;
  }

  .app {
    position: relative;
    min-width: 850px;
    height: 540px;
    box-shadow:10px 0px 20px #eee;
    overflow: hidden;
    border-radius:10px;

  }
  .app__bgimg {
    position: absolute;
    top: 0;
    left: -2.5%;
    width: 105%;
    height: 100%;
    transition: -webkit-transform 3.5s 770ms;
    transition: transform 3.5s 770ms;
    transition: transform 3.5s 770ms, -webkit-transform 3.5s 770ms;
  }
  .app__bgimg-image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .app__bgimg-image--1 {
    background-repeat: no-repeat;
    background-position: center center no-repeat;
    background-image: url("../../../static/images/a1.png");
    background-size: cover;
  }
  .app__bgimg-image--2 {
    background: url("../../../static/images/a2.png") center center no-repeat;
    background-size: cover;
    opacity: 0;
    transition: opacity 0ms 1300ms;
    will-change: opacity;
  }
  .app__text {
    position: absolute;
    right: 165px;
    top: 150px;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    z-index: 1;
  }
  .app__text-line {
    transition: opacity 750ms 500ms, -webkit-transform 1500ms 400ms;
    transition: transform 1500ms 400ms, opacity 750ms 500ms;
    transition: transform 1500ms 400ms, opacity 750ms 500ms, -webkit-transform 1500ms 400ms;
    will-change: transform, opacity;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .app__text-line--4 {
    transition: opacity 1500ms 1500ms, -webkit-transform 1500ms 1500ms;
    transition: transform 1500ms 1500ms, opacity 1500ms 1500ms;
    transition: transform 1500ms 1500ms, opacity 1500ms 1500ms, -webkit-transform 1500ms 1500ms;
  }
  .app__text-line--3 {
    transition: opacity 1500ms 1750ms, -webkit-transform 1500ms 1600ms;
    transition: transform 1500ms 1600ms, opacity 1500ms 1750ms;
    transition: transform 1500ms 1600ms, opacity 1500ms 1750ms, -webkit-transform 1500ms 1600ms;
  }
  .app__text-line--2 {
    transition: opacity 1500ms 2000ms, -webkit-transform 1500ms 1700ms;
    transition: transform 1500ms 1700ms, opacity 1500ms 2000ms;
    transition: transform 1500ms 1700ms, opacity 1500ms 2000ms, -webkit-transform 1500ms 1700ms;
  }
  .app__text-line--1 {
    transition: opacity 1500ms 2250ms, -webkit-transform 1500ms 1800ms;
    transition: transform 1500ms 1800ms, opacity 1500ms 2250ms;
    transition: transform 1500ms 1800ms, opacity 1500ms 2250ms, -webkit-transform 1500ms 1800ms;
  }
  .app__text-line--4 {
    font-size: 50px;
    font-weight: 700;
    color: #0A101D;
  }
  .app__text-line--3 {
    font-size: 40px;
    font-weight: 300;
  }
  .app__text-line--2 {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #0099CC;
  }
  .app__text-line--1 {
    /*margin-top: 15px;*/
  }
  .app__text-line--1 img {
    width: 50px;
  }
  .app__text--1 .app__text-line {
    -webkit-transform: translate3d(0, -125px, 0);
    transform: translate3d(0, -125px, 0);
    opacity: 0;
  }
  .app__text--2 {
    right: initial;
    top: 250px;
    left: 80px;
    z-index: -1;
    transition: z-index 1500ms;
  }
  .app__text--2 .app__text-line--4 {
    opacity: 0;
    transition: opacity 400ms 125ms, -webkit-transform 1500ms -75ms;
    transition: transform 1500ms -75ms, opacity 400ms 125ms;
    transition: transform 1500ms -75ms, opacity 400ms 125ms, -webkit-transform 1500ms -75ms;
  }
  .app__text--2 .app__text-line--3 {
    opacity: 0;
    transition: opacity 400ms 200ms, -webkit-transform 1500ms 0ms;
    transition: transform 1500ms 0ms, opacity 400ms 200ms;
    transition: transform 1500ms 0ms, opacity 400ms 200ms, -webkit-transform 1500ms 0ms;
  }
  .app__text--2 .app__text-line--2 {
    opacity: 0;
    transition: opacity 400ms 275ms, -webkit-transform 1500ms 75ms;
    transition: transform 1500ms 75ms, opacity 400ms 275ms;
    transition: transform 1500ms 75ms, opacity 400ms 275ms, -webkit-transform 1500ms 75ms;
  }
  .app__text--2 .app__text-line--1 {
    opacity: 0;
    transition: opacity 400ms 350ms, -webkit-transform 1500ms 150ms;
    transition: transform 1500ms 150ms, opacity 400ms 350ms;
    transition: transform 1500ms 150ms, opacity 400ms 350ms, -webkit-transform 1500ms 150ms;
  }
  .app__img {
    position: absolute;
    -webkit-transform: translate3d(0, -750px, 0);
    transform: translate3d(0, -750px, 0);
    width: 850px;
    height: 100%;
    transition: -webkit-transform 3s cubic-bezier(0.6, 0.13, 0.31, 1.02);
    transition: transform 3s cubic-bezier(0.6, 0.13, 0.31, 1.02);
    transition: transform 3s cubic-bezier(0.6, 0.13, 0.31, 1.02), -webkit-transform 3s cubic-bezier(0.6, 0.13, 0.31, 1.02);
    will-change: transform;
  }
  .app__img img {
    min-width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .initial .app__img {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .initial .app__text--1 .app__text-line--1 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    transition: opacity 400ms 1600ms, -webkit-transform 1500ms 1400ms;
    transition: transform 1500ms 1400ms, opacity 400ms 1600ms;
    transition: transform 1500ms 1400ms, opacity 400ms 1600ms, -webkit-transform 1500ms 1400ms;
    opacity: 1;
  }
  .initial .app__text--1 .app__text-line--2 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    transition: opacity 400ms 1675ms, -webkit-transform 1500ms 1475ms;
    transition: transform 1500ms 1475ms, opacity 400ms 1675ms;
    transition: transform 1500ms 1475ms, opacity 400ms 1675ms, -webkit-transform 1500ms 1475ms;
    opacity: 1;
  }
  .initial .app__text--1 .app__text-line--3 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    transition: opacity 400ms 1750ms, -webkit-transform 1500ms 1550ms;
    transition: transform 1500ms 1550ms, opacity 400ms 1750ms;
    transition: transform 1500ms 1550ms, opacity 400ms 1750ms, -webkit-transform 1500ms 1550ms;
    opacity: 1;
  }
  .initial .app__text--1 .app__text-line--4 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    transition: opacity 400ms 1825ms, -webkit-transform 1500ms 1625ms;
    transition: transform 1500ms 1625ms, opacity 400ms 1825ms;
    transition: transform 1500ms 1625ms, opacity 400ms 1825ms, -webkit-transform 1500ms 1625ms;
    opacity: 1;
  }

  .active .app__bgimg {
    -webkit-transform: translate3d(10px, 0, 0) scale(1.05);
    transform: translate3d(10px, 0, 0) scale(1.05);
    transition: -webkit-transform 5s 850ms ease-in-out;
    transition: transform 5s 850ms ease-in-out;
    transition: transform 5s 850ms ease-in-out, -webkit-transform 5s 850ms ease-in-out;
  }
  .active .app__bgimg .app__bgimg-image--2 {
    opacity: 1;
    transition: opacity 0ms 1500ms;
  }
  .active .app__img {
    transition: -webkit-transform 3s cubic-bezier(0.6, 0.13, 0.31, 1.02);
    transition: transform 3s cubic-bezier(0.6, 0.13, 0.31, 1.02);
    transition: transform 3s cubic-bezier(0.6, 0.13, 0.31, 1.02), -webkit-transform 3s cubic-bezier(0.6, 0.13, 0.31, 1.02);
    -webkit-transform: translate3d(0, -1410px, 0);
    transform: translate3d(0, -1410px, 0);
  }
  .active .app__text--1 {
    z-index: -1;
    transition: z-index 0ms 1500ms;
  }
  .active .app__text--1 .app__text-line--1 {
    -webkit-transform: translate3d(0, -125px, 0);
    transform: translate3d(0, -125px, 0);
    transition: opacity 400ms 500ms, -webkit-transform 1500ms 300ms;
    transition: transform 1500ms 300ms, opacity 400ms 500ms;
    transition: transform 1500ms 300ms, opacity 400ms 500ms, -webkit-transform 1500ms 300ms;
    opacity: 0;
  }
  .active .app__text--1 .app__text-line--2 {
    -webkit-transform: translate3d(0, -125px, 0);
    transform: translate3d(0, -125px, 0);
    transition: opacity 400ms 575ms, -webkit-transform 1500ms 375ms;
    transition: transform 1500ms 375ms, opacity 400ms 575ms;
    transition: transform 1500ms 375ms, opacity 400ms 575ms, -webkit-transform 1500ms 375ms;
    opacity: 0;
  }
  .active .app__text--1 .app__text-line--3 {
    -webkit-transform: translate3d(0, -125px, 0);
    transform: translate3d(0, -125px, 0);
    transition: opacity 400ms 650ms, -webkit-transform 1500ms 450ms;
    transition: transform 1500ms 450ms, opacity 400ms 650ms;
    transition: transform 1500ms 450ms, opacity 400ms 650ms, -webkit-transform 1500ms 450ms;
    opacity: 0;
  }
  .active .app__text--1 .app__text-line--4 {
    -webkit-transform: translate3d(0, -125px, 0);
    transform: translate3d(0, -125px, 0);
    transition: opacity 400ms 725ms, -webkit-transform 1500ms 525ms;
    transition: transform 1500ms 525ms, opacity 400ms 725ms;
    transition: transform 1500ms 525ms, opacity 400ms 725ms, -webkit-transform 1500ms 525ms;
    opacity: 0;
  }
  .active .app__text--2 {
    z-index: 1;
  }
  .active .app__text--2 .app__text-line--1 {
    -webkit-transform: translate3d(0, -125px, 0);
    transform: translate3d(0, -125px, 0);
    transition: opacity 1300ms 1300ms, -webkit-transform 2500ms 1100ms;
    transition: transform 2500ms 1100ms, opacity 1300ms 1300ms;
    transition: transform 2500ms 1100ms, opacity 1300ms 1300ms, -webkit-transform 2500ms 1100ms;
    opacity: 1;
  }
  .active .app__text--2 .app__text-line--2 {
    -webkit-transform: translate3d(0, -125px, 0);
    transform: translate3d(0, -125px, 0);
    transition: opacity 1300ms 1575ms, -webkit-transform 2500ms 1175ms;
    transition: transform 2500ms 1175ms, opacity 1300ms 1575ms;
    transition: transform 2500ms 1175ms, opacity 1300ms 1575ms, -webkit-transform 2500ms 1175ms;
    opacity: 1;
  }
  .active .app__text--2 .app__text-line--3 {
    -webkit-transform: translate3d(0, -125px, 0);
    transform: translate3d(0, -125px, 0);
    transition: opacity 1300ms 1850ms, -webkit-transform 2500ms 1250ms;
    transition: transform 2500ms 1250ms, opacity 1300ms 1850ms;
    transition: transform 2500ms 1250ms, opacity 1300ms 1850ms, -webkit-transform 2500ms 1250ms;
    opacity: 1;
  }
  .active .app__text--2 .app__text-line--4 {
    -webkit-transform: translate3d(0, -125px, 0);
    transform: translate3d(0, -125px, 0);
    transition: opacity 1300ms 2125ms, -webkit-transform 2500ms 1325ms;
    transition: transform 2500ms 1325ms, opacity 1300ms 2125ms;
    transition: transform 2500ms 1325ms, opacity 1300ms 2125ms, -webkit-transform 2500ms 1325ms;
    opacity: 1;
  }

  /*.mouse {*/
    /*position: relative;*/
    /*margin-right: 20px;*/
    /*min-width: 50px;*/
    /*height: 80px;*/
    /*border-radius: 30px;*/
    /*border: 5px solid rgba(255, 255, 255, 0.8);*/
  /*}*/
  .mouse:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    -webkit-animation: scroll 1s infinite alternate;
    animation: scroll 1s infinite alternate;
  }
  @-webkit-keyframes scroll {
    100% {
      -webkit-transform: translate(-50%, 15px);
      transform: translate(-50%, 15px);
    }
  }
  @keyframes scroll {
    100% {
      -webkit-transform: translate(-50%, 15px);
      transform: translate(-50%, 15px);
    }
  }
  .pages {
    margin-left: 20px;
  }
  .pages__list {
    list-style-type: none;
  }
  /*.pages__item {*/
    /*position: relative;*/
    /*margin-bottom: 10px;*/
    /*width: 30px;*/
    /*height: 30px;*/
    /*border-radius: 50%;*/
    /*border: 3px solid #fff;*/
    /*cursor: pointer;*/
  /*}*/
  /*.pages__item:after {*/
    /*content: '';*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*-webkit-transform: translate(-50%, -50%) scale(0, 0);*/
    /*transform: translate(-50%, -50%) scale(0, 0);*/
    /*width: 75%;*/
    /*height: 75%;*/
    /*border-radius: 50%;*/
    /*background-color: #fff;*/
    /*opacity: 0;*/
    /*transition: 500ms;*/
  /*}*/
  /*.pages__item:hover:after {*/
    /*-webkit-transform: translate(-50%, -50%) scale(1, 1);*/
    /*transform: translate(-50%, -50%) scale(1, 1);*/
    /*opacity: 1;*/
  /*}*/

  /*.page__item-active:after {*/
    /*-webkit-transform: translate(-50%, -50%) scale(1, 1);*/
    /*transform: translate(-50%, -50%) scale(1, 1);*/
    /*opacity: 1;*/
  /*}*/

  /*.icon-link {*/
    /*position: absolute;*/
    /*left: 5px;*/
    /*bottom: 5px;*/
    /*width: 50px;*/
  /*}*/
  /*.icon-link img {*/
    /*width: 100%;*/
    /*vertical-align: top;*/
  /*}*/
  /*.icon-link--twitter {*/
    /*left: auto;*/
    /*right: 5px;*/
  /*}*/
</style>
