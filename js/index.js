//запуск видео
function showVideo() {
  document.querySelector(".video-text").style.display = "none";
  document.querySelector(".video-img").style.display = "none";
  document.querySelector(".video-preview").style.display = "none";
  document.querySelector(".video-player").style.display = "block";
  document
    .querySelector(".video-player")
    .setAttribute(
      "src",
      document.querySelector(".video-player").getAttribute("src") +
        "&autoplay=1"
    );
}

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
      const inputFields = document.querySelectorAll(
        ".form-group input,.textarea"
      );
      inputFields.forEach((input) => {
        input.value = "";
      });
      const labelActive = document.querySelectorAll(".label");
      labelActive.forEach((label) => {
        label.classList.remove("active");
      });
      btnAppl.classList.toggle("active");
      buttonUp.classList.toggle("active");
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      btnFormClose.classList.toggle("active");
    });
  }
  // Добавляем проверку ширины экрана
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      mobileForm.classList.remove("active");
      btnAppl.classList.remove("active");
      buttonUp.classList.remove("active");
      btnFormClose.classList.remove("active");
    }
  });
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
  ".form-group,.input,.form-group-textarea"
);
const inputField = document.querySelectorAll(".input,.textarea");

if (inputContainers) {
  inputContainers.forEach((container) => {
    container.addEventListener("click", () => {
      const label = container.querySelector(".label");
      if (label) {
        label.classList.add("active");
        const input = container.querySelector("input, textarea");
        if (input) {
          input.focus();
        }
      }
    });
  });
}

inputField.forEach((input) => {
  input.addEventListener("focus", () => {
    const label = input.parentElement.querySelector(".label");
    label.classList.add("active");
  });
});
// const inputContainers = document.querySelectorAll(
//   ".form-group,.input,.form-group-textarea"
// );
// const inputField = document.querySelectorAll(".input,.textarea");

// if (inputContainers) {
//   inputContainers.forEach((container) => {
//     container.addEventListener("click", () => {
//       const label = container.querySelector(".label");
//       if (label) {
//         label.classList.add("active");
//       }
//     });
//   });
// }

// inputField.forEach((input) => {
//   input.addEventListener("focus", () => {
//     const label = input.parentElement.querySelector(".label");
//     label.classList.add("active");
//   });
// });

// открытие - закрытие формы десктоп
const popupOverlay = document.querySelector(".popup-overlay");
const popupOpenButton = document.querySelector(".menu-container__button-form");
const popupCloseButton = document.querySelector(".popup-overlay__close");

if (popupOpenButton) {
  popupOpenButton.addEventListener("click", () => {
    if (popupOverlay) {
      popupOverlay.classList.add("active");
    }
    const inputFields = document.querySelectorAll(
      ".form-group input,.textarea"
    );
    inputFields.forEach((input) => {
      input.value = "";
    });
    const labelActive = document.querySelectorAll(".label");
    labelActive.forEach((label) => {
      label.classList.remove("active");
    });
  });
}

if (popupCloseButton) {
  popupCloseButton.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
  });
}

// Закрытие формы по нажатию на клавишу Esc
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popupOverlay.classList.remove("active");
  }
});

// Закрытие формы по клику вне формы
document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".popup-overlay__wrapper") &&
    !event.target.closest(".menu-container__button-form") &&
    !event.target.closest(".form-group") &&
    !event.target.closest(".form-group-textarea")
  ) {
    popupOverlay.classList.remove("active");
  }
});

// Добавляем проверку ширины экрана
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    popupOverlay.classList.remove("active");
  }
});

// "отправка" формы
const sendButton = document.querySelector(".communicate__button");
const sentButton = document.querySelector(".menu-form__button_green");

sendButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (validateForm()) {
    sendButton.style.display = "none";
    sentButton.style.display = "flex";

    setTimeout(() => {
      const form = sendButton.closest("form");
      form.submit();
    }, 3000);
  }
});

function validateForm() {
  const form = sendButton.closest("form");
  const inputs = form.querySelectorAll("input[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      return;
    }
  });

  return isValid;
}

//маска ввода телефона в инпут
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(
    document.querySelectorAll('input[type="tel"]'),
    function (input) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        var reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        ) {
          this.value = new_value;
        }
        if (event.type == "blur" && this.value.length < 5) {
          this.value = "";
        }
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    }
  );
});
