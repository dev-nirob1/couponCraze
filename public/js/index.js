const navbarAnimation = () => {
  const body = document.body;
  // console.log(body);
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll === 0) {
      body.classList.remove("scroll-down", "scroll-up");
      return;
    }
    if (currentScroll > lastScroll) {
      body.classList.add("scroll-down");
      body.classList.remove("scroll-up");
    } else {
      body.classList.add("scroll-up");
      body.classList.remove("scroll-down");
    }
    lastScroll = currentScroll;
  });
};

const navbar = document.querySelector(".navbar");
const toggleMenu = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links");

// navbar toggle
toggleMenu.addEventListener("click", () => {
  if (nav_links.classList.contains("active")) {
    nav_links.classList.remove("active");
  } else {
    nav_links.classList.add("active");
  }
});

// modal toggle
const modal = document.querySelector(".modal");
const getCodeButton = document.querySelectorAll(".coupon-card button");
const closeModal = document.querySelectorAll(".modal .close-btn");

getCodeButton.forEach((open) => {
  open.addEventListener("click", () => {
    modal.style.display = "flex";
    // console.log("modal open ");
  });
});

closeModal.forEach((close) => {
  close.addEventListener("click", () => {
    modal.style.display = "none";
    // console.log("modal closed ");
  });
});
navbarAnimation();