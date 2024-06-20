AOS.init();

const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  closeOverlay = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

function closeMenu(elem) {
  elem.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

closeMenu(closeElem);
closeMenu(closeOverlay);

const skillsNum = document.querySelectorAll(".skills-card__num"),
  skillsLine = document.querySelectorAll(".skills-card__line_full");

skillsNum.forEach((item, i) => {
  skillsLine[i].style.width = item.textContent;
});
