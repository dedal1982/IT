// const containerElement = document.querySelector(".certificate-page__items");
// const buttonElement = document.querySelector(".certificate-page__button");
// const contElemHidden = document.querySelector(
//   ".certificate-page__items_hidden"
// );

// if (containerElement.children.length < 12) {
//   buttonElement.style.display = "none";
// } else {
//   buttonElement.style.display = "block";
// }

// buttonElement.addEventListener("click", () => {
//   contElemHidden.style.display = "flex";
//   buttonElement.style.display = "none";
// });
// Получаем элементы для первого блока
const containerElement = document.querySelector(".certificate-page__items");
const buttonElement = document.querySelector(".certificate-page__button");
const contElemHidden = document.querySelector(
  ".certificate-page__items_hidden"
);

// Проверяем количество элементов в первом блоке
if (containerElement) {
  if (containerElement.children.length < 12) {
    buttonElement.style.display = "none";
  } else {
    buttonElement.style.display = "block";
  }
}

// Добавляем обработчик клика на кнопку первого блока
buttonElement.addEventListener("click", () => {
  contElemHidden.style.display = "flex";
  buttonElement.style.display = "none";
});

// Получаем элементы для второго блока
const projectsContainerElement = document.querySelector(".projects__items");
const projectsButtonElement = document.querySelector(
  ".certificate-page__button_cases"
);
const projectsContElemHidden = document.querySelector(
  ".projects__items_hidden"
);

// Проверяем количество элементов во втором блоке
if (projectsContainerElement) {
  if (projectsContainerElement.children.length < 12) {
    projectsButtonElement.style.display = "none";
  } else {
    projectsButtonElement.style.display = "block";
  }
}

// Добавляем обработчик клика на кнопку второго блока
projectsButtonElement.addEventListener("click", () => {
  projectsContElemHidden.style.display = "flex";
  projectsButtonElement.style.display = "none";
});
