const containerElement = document.querySelector(".certificate-page__items");
const buttonElement = document.querySelector(".certificate-page__button");
const contElemHidden = document.querySelector(
  ".certificate-page__items_hidden"
);

if (containerElement.children.length < 12) {
  buttonElement.style.display = "none";
} else {
  buttonElement.style.display = "block";
}

buttonElement.addEventListener("click", () => {
  contElemHidden.style.display = "flex";
  buttonElement.style.display = "none";
});
