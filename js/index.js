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
// document.addEventListener("DOMContentLoaded", function () {
//   const textarea = document.querySelector("textarea");
//   textarea.blur();
// });

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
// const menuBurgerMobile = {
//   element: document.querySelector(".menu-container__burger-mobile"),
//   menuMob: document.querySelector(".menu-container__mobile-wrapper"),
//   menuCloseMobile: document.querySelector(".menu-container__close-mobile"),
//   init: function () {
//     this.element.addEventListener("click", () => {
//       this.menuMob.classList.add("active");
//       this.element.classList.add("active");
//       this.menuCloseMobile.classList.add("active");
//     });

//     this.menuCloseMobile.addEventListener("click", () => {
//       this.menuMob.classList.remove("active");
//       this.element.classList.remove("active");
//       this.menuCloseMobile.classList.remove("active");
//     });
//   },
// };

// const mobileForm = {
//   btnFormOpen: document.querySelector(".menu-container__button"),
//   btnFormClose: document.querySelector(".menu-container__close-form"),
//   form: document.querySelector(".menu-container__form-wrapper"),
//   init: function () {
//     this.btnFormOpen.addEventListener("click", () => {
//       this.form.classList.add("active");
//       this.btnFormClose.classList.add("active");
//     });

//     this.btnFormClose.addEventListener("click", () => {
//       this.form.classList.remove("active");
//       this.btnFormClose.classList.remove("active");
//     });
//   },
// };

// menuBurgerMobile.init();
// mobileForm.init();
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

const btnFormOpen = document.querySelector(".form-mobile");
const btnFormClose = document.querySelector(".menu-container__close-form");
const descForm = document.querySelector(".menu-container__form-wrapper-desc");
const mobileForm = document.querySelector(".menu-container__form-wrapper");
const buttonUp = document.querySelector(".button-up");

btnFormOpen.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    mobileForm.classList.add("active");
  } else {
    descForm.classList.add("active");
  }
  // mobileForm.classList.add("active");
  btnFormClose.classList.add("active");
  buttonUp.style.display = "none";
});

btnFormClose.addEventListener("click", () => {
  mobileForm.classList.remove("active");
  btnFormClose.classList.remove("active");
  buttonUp.style.display = "block";
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

if (textareaContainer) {
  textareaContainer.addEventListener("click", () => {
    // Находим дочерний элемент label внутри контейнера
    const label = textareaContainer.querySelector("label");
    // Добавляем класс "active" к label
    label.classList.add("active");
  });
}
