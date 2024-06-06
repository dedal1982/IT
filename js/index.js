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

menuBurger.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
menuDesc.addEventListener("mouseleave", closeMenu);

function openMenu() {
  menuDesc.classList.add("active");
  menuBurger.classList.add("active");
}
function closeMenu() {
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
  if (document.documentElement.scrollTop > 500) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

//эффект при клике на инпут
// Получаем все элементы с классом "communicate__container"
const inputContainers = document.querySelectorAll(".communicate__container");

// Добавляем обработчик события click на каждый из них
inputContainers.forEach((container) => {
  container.addEventListener("click", () => {
    // Находим дочерний элемент label внутри контейнера
    const label = container.querySelector("label");
    // Добавляем класс "active" к label
    label.classList.add("active");
  });
});

// Получаем элемент с классом "communicate__textarea"
const textareaContainer = document.querySelector(".communicate__textarea");

// Добавляем обработчик события click на него
textareaContainer.addEventListener("click", () => {
  // Находим дочерний элемент label внутри контейнера
  const label = textareaContainer.querySelector("label");
  // Добавляем класс "active" к label
  label.classList.add("active");
});
