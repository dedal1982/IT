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

//открытие-закрытие форм заявки
function initFormEvents() {
  const btnFormOpen = document.querySelector(
    ".menu-container__button-form-mobile"
  );
  const btnFormClose = document.querySelector(".menu-container__close-form");
  const mobileForm = document.querySelector(".menu-form");
  const buttonUp = document.querySelector(".button-up");
  const btnAppl = document.querySelector(".menu-container__button");

  if (btnFormOpen) {
    btnFormOpen.addEventListener("click", () => {
      mobileForm.classList.toggle("active");
      btnAppl.classList.add("active");
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      btnFormClose.classList.toggle("active");
    });
  }

  if (btnFormClose) {
    btnFormClose.addEventListener("click", () => {
      mobileForm.classList.remove("active");
      btnFormClose.classList.remove("active");
      buttonUp.style.display = "block";
      buttonUp.style.visibility = "visible";
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

inputContainers.forEach((container) => {
  container.addEventListener("click", () => {
    const label = container.querySelector("label");
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

popupCloseButton.addEventListener("click", () => {
  popupOverlay.classList.remove("active");
});

// Добавляем проверку ширины экрана
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    popupOverlay.classList.remove("active");
  }
});
