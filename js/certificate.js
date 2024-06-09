const containerElement = document.querySelector(".certificate-page__items");
const buttonElement = document.querySelector(".certificate-page__button");
const contElemHidden = document.querySelector(
  ".certificate-page__items_hidden"
);

if (containerElement) {
  if (containerElement.children.length < 12) {
    buttonElement.style.display = "none";
  } else {
    buttonElement.style.display = "block";
  }
}

if (buttonElement) {
  buttonElement.addEventListener("click", () => {
    if (contElemHidden) {
      contElemHidden.style.display = "grid";
      buttonElement.style.display = "none";
    }
  });
}

const projectsContainerElement = document.querySelector(".projects__items");
const projectsButtonElement = document.querySelector(
  ".certificate-page__button_cases"
);
const projectsContElemHidden = document.querySelector(
  ".projects__items_hidden"
);

if (projectsContainerElement) {
  if (projectsContainerElement.children.length < 12) {
    projectsButtonElement.style.display = "none";
  } else {
    projectsButtonElement.style.display = "block";
  }
}

if (projectsButtonElement) {
  projectsButtonElement.addEventListener("click", () => {
    if (projectsContElemHidden) {
      projectsContElemHidden.style.display = "grid";
      projectsButtonElement.style.display = "none";
    }
  });
}
