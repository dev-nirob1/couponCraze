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

const getCodeButton = document.querySelectorAll(".coupon-card button");
const closeModal = document.querySelectorAll(".modal .close-btn");
const modal = document.querySelector('.modal')

getCodeButton.forEach(open => {
  open.addEventListener("click", () => {
    modal.style.display = 'flex'
    console.log("modal open ");
  });
})

closeModal.forEach(close => {
  close.addEventListener("click", () => {
    modal.style.display = 'none'
    console.log("modal closed ");
  });
  
})

// console.log(getCodeButton);
// const getCode = () => {
//   getBtn.addEventListener("click", () => {
//     isModalOpen = true;
//   });
//   closeModal.addEventListener("click", () => {
//     isModalOpen = false;
//     console.log(isModalOpen);
//   });
// };
// getCode();

navbarAnimation();
