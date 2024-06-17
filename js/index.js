const videoPreviews = document.querySelectorAll(".video-preview");
const videoPlayers = document.querySelectorAll(".video-player");
const videoImages = document.querySelectorAll(".video-img");
const videoText = document.querySelectorAll(".video-text");

videoPreviews.forEach((videoPreview, index) => {
  videoPreview.addEventListener("click", function () {
    videoPreview.style.display = "none";
    videoImages[index].style.display = "none";
    videoText[index].style.display = "none";
  });
});

window.onload = function () {
  window.scrollTo(0, 0);
};

//открытие-закрытие меню
const menuDescOpen = document.getElementById("menuDescOpen");
const menuBurger = document.querySelector(".menu-container__burger");
const menuDesc = document.querySelector(".menu-container__button_desc");
const menuClose = document.querySelector(".menu-container__close");

menuDescOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

function openMenu() {
  menuDesc.classList.add("active");
  menuBurger.classList.add("active");
  menuDescOpen.classList.add("active");
}
function closeMenu() {
  menuDesc.classList.remove("active");
  menuBurger.classList.remove("active");
  menuDescOpen.classList.remove("active");
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});

document.addEventListener("click", function (event) {
  if (
    !menuDescOpen.contains(event.target) &&
    menuDescOpen.classList.contains("active")
  ) {
    closeMenu();
  }
});

const menuMobileOpen = document.getElementById("menuMobileOpen");
const menuBurgerMobile = document.querySelector(
  ".menu-container__burger-mobile"
);
const menuMob = document.querySelector(".menu-container__mobile-wrapper");
const menuCloseMobile = document.querySelector(".menu-container__close-mobile");
const menuListItem = document.querySelectorAll(
  ".menu-container__mobile-list li"
);

for (let i = 0; i < menuListItem.length; i++) {
  menuListItem[i].addEventListener("click", () => {
    if (menuMob.classList.contains("active")) {
      menuMob.classList.remove("active");
    }
  });
}

if (menuMobileOpen) {
  menuMobileOpen.addEventListener("click", openMobMenu);
}

function openMobMenu() {
  menuMob.classList.toggle("active");
  menuBurgerMobile.classList.toggle("active");
  menuCloseMobile.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  if (
    !menuMob.contains(event.target) &&
    !menuMobileOpen.contains(event.target)
  ) {
    if (menuMob.classList.contains("active")) {
      menuMob.classList.remove("active");
      menuBurgerMobile.classList.remove("active");
      menuCloseMobile.classList.remove("active");
    }
  }
});

//открытие-закрытие форм заявки
function initFormEvents() {
  const btnFormOpen = document.getElementById("buttonFormMobile");
  const btnFormClose = document.querySelector(".menu-container__close-form");
  const mobileForm = document.querySelector(".menu-form");
  const buttonUp = document.querySelector(".button-up");
  const btnAppl = document.querySelector(".menu-container__button");

  if (btnFormOpen) {
    btnFormOpen.addEventListener("click", () => {
      mobileForm.classList.toggle("active");
      btnAppl.classList.toggle("active");
      buttonUp.classList.toggle("active");
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      btnFormClose.classList.toggle("active");
    });
  }
}

document.addEventListener("DOMContentLoaded", initFormEvents);

//появление кнопки "ВВЕРХ"
window.onscroll = function () {
  var button = document.querySelector(".button-up");
  if (document.documentElement.scrollTop > 2500) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

//эффект при клике на инпут + textarea
const inputContainers = document.querySelectorAll(
  ".communicate__container,.menu-form__container,.communicate__textarea,.popup-overlay__container,.popup-overlay__textarea"
);
const inputField = document.querySelectorAll(".menu-input");
const inputTextarea = document.querySelectorAll("textarea");

inputContainers.forEach((container) => {
  container.addEventListener("click", () => {
    const label = container.querySelector("label");
    label.classList.add("active");
  });
});

inputField.forEach((input) => {
  input.addEventListener("focus", () => {
    const label = input.parentElement.querySelector("label");
    label.classList.add("active");
  });
});

inputTextarea.forEach((textarea) => {
  textarea.addEventListener("focus", () => {
    const label = textarea.parentElement.querySelector("label");
    label.classList.add("active");
  });
});

const textareaContainer = document.querySelector(".communicate__textarea");

if (textareaContainer) {
  textareaContainer.addEventListener("click", () => {
    const label = textareaContainer.querySelector("label");
    label.classList.add("active");
  });
}

// открытие - закрытие формы десктоп
const popupOverlay = document.querySelector(".popup-overlay");
const popupOpenButton = document.querySelector(".menu-container__button-form");
const popupCloseButton = document.querySelector(".popup-overlay__close");

if (popupOpenButton) {
  popupOpenButton.addEventListener("click", () => {
    if (popupOverlay) {
      popupOverlay.classList.add("active");
    }
  });
}
if (popupCloseButton) {
  popupCloseButton.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
  });
}

// Добавляем проверку ширины экрана
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    popupOverlay.classList.remove("active");
  }
});

//кнопка отправки мобильной формы,после отправки становится зеленой
const buttonFormMobile = document.querySelector(".menu-form__button");
const buttonFormMobileGreen = document.querySelector(
  ".menu-form__button_green"
);

if (buttonFormMobile) {
  buttonFormMobile.addEventListener("click", () => {
    buttonFormMobile.classList.add("menu-form__button_hidden");
    buttonFormMobileGreen.classList.add("menu-form__button_open");
  });
}
