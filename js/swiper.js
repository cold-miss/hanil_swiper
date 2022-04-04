// swiper js

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     autoplay: {
//         delay:5000,
//     },
//     speed: 2000, // 전환효과시간
//     direction: 'horizontal',
//     effect: 'fade',
//     loop: true,
  
//     // If we need pagination
//     // 하단 버튼 UI
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

  // });


  // var swiper2 = new Swiper(".swiper2", {
  //     autoplay: {
  //       delay:5000,
  //   },
  //   speed: 4000, // 전환효과시간
  //   slidesPerView: 5,
  //   spaceBetween: 30,
  //   slidesPerGroup: 1,
  //   loop: true,
  //   loopFillGroupWithBlank: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
  
  
$(function(){

  $('#gnb > ul > li').hover  
  
})




var ww = $(window).width();
var swiper3 = undefined; // swiper 변수 초기화!
const breakpoint = 768;

function initSwiper() {

  // 작은 화면이면 스와이퍼 실행
  
  if (ww < breakpoint && swiper3 == undefined) {
    var swiper3 = new Swiper(".swiper3", {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    
  } else if (ww >= breakpoint && swiper3 != undefined) {
    console.log('스와이퍼끄기')
    swiper3.destroy();  // 스와이퍼 끄기
    swiper3 = undefined;  // 스와이퍼 변수 다시 초기화
  }
}

initSwiper(); // swiper 실행 (초기화) 함수

// 화면의 폭이 바뀔 때 스와이퍼 설정 변경

$(window).on('resize', function () {
  ww = $(window).width();
  initSwiper();
  console.log(ww)
});