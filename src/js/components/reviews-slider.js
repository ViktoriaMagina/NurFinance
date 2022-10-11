const rewiewsSwiper = new Swiper('.reviews-slider', {
  navigation: {
    nextEl: '.reviews-slider__button-next',
    prevEl: '.reviews-slider__button-prev',
  },
  // slidesPerView: 3,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is >= 480px
    650: {
      slidesPerView: 2,
      spaceBetween: 15,
      // spaceBetween: 30
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 15,
      // spaceBetween: 40
    }
  }
});
