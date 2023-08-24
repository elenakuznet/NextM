/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__icon');
const body = document.body;
if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });
  menu.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    });
  });
}
new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  // centeredSlides: true,

  navigation: {
    nextEl: '.button-right',
    prevEl: '.button-left'
  },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    220: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    560: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 38
    }
  }
});
/******/ })()
;