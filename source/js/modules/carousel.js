const carouselPromo = new Swiper('#carousel-promo', {
  loop: true,
  freeMode: true,
  effect: 'fade',
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
