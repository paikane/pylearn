
// import Swiper styles

const swiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
