
const indexSwiper = new Swiper('.index-section__slider', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  // longSwipesRatio: .8,
  speed: 800,
  pagination: {
    el: '.index-section__slider-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.index-section__slider-button-next',
    prevEl: '.index-section__slider-button-prev',
  },
});

