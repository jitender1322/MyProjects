const icon = document.querySelector(".icon");
const icon2 = document.querySelector(".icon2");
const navbar = document.querySelector(".navbar");

icon.addEventListener("click", () => {
  navbar.classList.toggle("shownav");
});
icon2.addEventListener("click", () => {
  navbar.classList.add("shownav");
});
