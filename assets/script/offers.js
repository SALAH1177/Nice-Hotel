// quick-offer slider
new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 2500, pauseOnMouseEnter: true },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});
