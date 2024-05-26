const videoPreview = document.querySelector(".video-preview");
const videoPlayer = document.querySelector(".video-player");

videoPreview.addEventListener("click", function () {
  videoPreview.style.display = "none";
  videoPlayer.play();
});

const inputField = document.getElementById("input-field");

inputField.addEventListener("focus", function () {
  inputField.classList.add("input-focus");
});

//инпут плейсхолдер при фокусе
const inputs = document.querySelectorAll(".communicate__input");

inputs.forEach((input) => {
  const label = input.nextElementSibling;

  input.addEventListener("focus", function () {
    label.classList.add("active");
  });

  input.addEventListener("blur", function () {
    if (input.value === "") {
      label.classList.remove("active");
    }
  });

  if (input.value !== "") {
    label.classList.add("active");
  }
});
