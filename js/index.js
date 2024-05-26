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
const textarea = document.querySelector(".communicate__textarea");
const label = document.querySelector(".communicate__label");

textarea.addEventListener("click", () => {
  label.classList.add("active");
});
textarea.addEventListener("blur", function () {
  if (textarea.value === "") {
    label.classList.remove("active");
  }
});
