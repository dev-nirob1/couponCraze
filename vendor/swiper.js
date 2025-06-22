let swiper = new Swiper(".mySwiper", {
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

// testimonials slider 
let swiperTestimonials = new Swiper('.swiper-testimonials', {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev"
  }
})
