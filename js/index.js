const videoPreviews = document.querySelectorAll(".video-preview");
const videoPlayers = document.querySelectorAll(".video-player");
const videoImages = document.querySelectorAll(".video-img");

videoPreviews.forEach((videoPreview, index) => {
  videoPreview.addEventListener("click", function () {
    videoPreview.style.display = "none";
    videoImages[index].style.display = "none";
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

//////////////////////
// const videoPreview = document.querySelector(".video-preview");
// const videoPlayer = document.querySelector(".video-player");

// videoPreview.addEventListener("click", function () {
//   videoPreview.style.display = "none";
//   videoPlayer.play();
// });

// const inputField = document.getElementById("input-field");

// inputField.addEventListener("focus", function () {
//   inputField.classList.add("input-focus");
// });

// //инпут плейсхолдер при фокусе
// const inputs = document.querySelectorAll(".communicate__input");

// inputs.forEach((input) => {
//   const label = input.nextElementSibling;

//   input.addEventListener("focus", function () {
//     label.classList.add("active");
//   });

//   input.addEventListener("blur", function () {
//     if (input.value === "") {
//       label.classList.remove("active");
//     }
//   });

//   if (input.value !== "") {
//     label.classList.add("active");
//   }
// });

//текстарея плейсхолдер при фокусе
// const textarea = document.querySelector(".communicate__textarea");
// const label = textarea.nextElementSibling;

// textarea.addEventListener("focus", function () {
//   label.classList.add("active");
// });

// textarea.addEventListener("blur", function () {
//   if (textarea.value === "") {
//     label.classList.remove("active");
//   }
// });

// if (textarea.value !== "") {
//   label.classList.add("active");
// }
///////////////////////////////////////////////////////
// const textarea = document.querySelector(".communicate__textarea");
// const label = document.querySelector(".communicate__label");

// textarea.addEventListener("click", () => {
//   label.classList.add("active");
// });
// textarea.addEventListener("blur", function () {
//   if (textarea.value === "") {
//     label.classList.remove("active");
//   }
// });
///////////////////////////
// document.querySelectorAll("input, textarea").forEach((input) => {
//   input.addEventListener("focus", () => {
//     input.style.fontSize = "14px";
//     input.style.paddingTop = "20px";
//   });
//   input.addEventListener("blur", () => {
//     input.style.fontSize = "16px";
//     input.style.paddingTop = "10px";
//   });
// });
////////////////////////
const menuBurger = document.querySelector(".menu-container__burger");
const menuDesc = document.querySelector(".menu-container__button_desc");
const menuClose = document.querySelector(".menu-container__close");

menuBurger.addEventListener("click", () => {
  menuDesc.classList.add("active");
  menuBurger.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menuDesc.classList.remove("active");
  menuBurger.classList.remove("active");
});
