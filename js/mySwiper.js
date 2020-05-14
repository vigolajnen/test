(function () {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,

    breakpoints: {
      993: {
        slidesPerView: 2,
        spaceBetween: 60,
        slidesPerGroup: 2,
      },
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

})();