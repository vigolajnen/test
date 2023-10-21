const OPTIONS = {
  promo: {
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
  },
  gallery: {
    loop: true,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  },
  services: {
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        freeMode: true,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1.75,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  },
  tariffs: {
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        freeMode: true,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 2.7,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  },
};

const carouselPromo = new Swiper('#carousel-promo', OPTIONS.promo);

const carouselClubsMain = new Swiper('#carousel-clubs-main', OPTIONS.gallery);

const carouselClubsPool = new Swiper('#carousel-clubs-pool', OPTIONS.gallery);

const carouselClubsGym = new Swiper('#carousel-clubs-gym', OPTIONS.gallery);

const carouselClubsSpa = new Swiper('#carousel-clubs-spa', OPTIONS.gallery);

const carouselClubsGroup = new Swiper('#carousel-clubs-group', OPTIONS.gallery);

const carouselClubsServices = new Swiper(
  '#carousel-services',
  OPTIONS.services,
);

const carouselTariffs = new Swiper('#carousel-tariffs', OPTIONS.tariffs);
