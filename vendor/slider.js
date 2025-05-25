const slider = () => {
  const slideContainer = document.querySelector(".slider-container");
  
  const nextBtn = document.querySelector("#next-btn");
  const prevBtn = document.querySelector("#prev-btn");
  const sliders = document.querySelectorAll(".slider");
//   console.log("sliders", sliders);

  let currentSlide = 0;
  const showSlide = (i) => {
    currentSlide = (i + sliders.length) % sliders.length;
    sliders.forEach((el) => {
      el.style.display = "none";
    });
    sliders[currentSlide].style.display = "block";
  };

  showSlide(currentSlide);

  nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    // console.log("clicked next btn");
  });
  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    //   console.log('clicked prev btn')
  });

//  setInterval(() => {
//   showSlide(currentSlide + 1);
// }, 1500);
};
slider();
