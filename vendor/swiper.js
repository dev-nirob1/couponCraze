var swiper = new Swiper(".mySwiper", {
  loop: true,
  cssMode: true,
  autoPlay: {
    duration: 3000
  },
  navigation: {
    nextEl: ".button-prev",
    prevEl: ".button-next",
  },
  mousewheel: true,
  keyboard: true,
});

