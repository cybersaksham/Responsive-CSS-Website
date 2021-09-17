// Getting Elements
const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navbar.style.maxHeight = navbar.style.maxHeight === "100%" ? "45px" : "100%";
});
