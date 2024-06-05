const videoPreviews = document.querySelectorAll(".video-preview");
const videoPlayers = document.querySelectorAll(".video-player");
const videoImages = document.querySelectorAll(".video-img");
const videoText = document.querySelectorAll(".video-text");

videoPreviews.forEach((videoPreview, index) => {
  videoPreview.addEventListener("click", function () {
    videoPreview.style.display = "none";
    videoImages[index].style.display = "none";
    videoText[index].style.display = "none";
    videoPlayers[index].play();
  });
});
window.onload = function () {
  window.scrollTo(0, 0);
};
document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector("textarea");
  textarea.blur();
});

//открытие-закрытие меню
const menuBurger = document.querySelector(".menu-container__burger");
const menuDesc = document.querySelector(".menu-container__button_desc");
const menuClose = document.querySelector(".menu-container__close");

menuBurger.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
menuDesc.addEventListener("mouseleave", clickleMenu);

function toggleMenu() {
  menuDesc.classList.toggle("active");
  menuBurger.classList.toggle("active");
}
function clickleMenu() {
  menuDesc.classList.remove("active");
  menuBurger.classList.remove("active");
}

const menuBurgerMobile = document.querySelector(
  ".menu-container__burger-mobile"
);
const menuMob = document.querySelector(".menu-container__mobile-wrapper");
const menuCloseMobile = document.querySelector(".menu-container__close-mobile");

menuBurgerMobile.addEventListener("click", () => {
  menuMob.classList.add("active");
  menuBurgerMobile.classList.add("active");
  menuCloseMobile.classList.add("active");
});

menuCloseMobile.addEventListener("click", () => {
  menuMob.classList.remove("active");
  menuBurgerMobile.classList.remove("active");
  menuCloseMobile.classList.remove("active");
});

//появление кнопки "ВВЕРХ"
window.onscroll = function () {
  var button = document.querySelector(".button-up");
  if (document.documentElement.scrollTop > 1580) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
