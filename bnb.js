const navSlide = () => {
  const burger = document.querySelector(".burger")
  const navList = document.querySelector(".logo-bar-nav");
  burger.addEventListener("click", () => {
    navList.classList.toggle("logo-bar-active");
    burger.classList.toggle("toggler");
  });
}
navSlide();
