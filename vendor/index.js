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

