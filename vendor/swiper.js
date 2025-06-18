var swiper = new Swiper(".mySwiper", {
  loop: true,
  
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 600,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
