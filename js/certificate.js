document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(
    ".projects__item,.certificate-page__item"
  );
  const button = document.querySelectorAll(
    ".certificate-page__button_cases,.certificate-page__button"
  );

  for (let i = 12; i < items.length; i++) {
    items[i].style.display = "none";
  }

  if (items.length <= 12) {
    button.style.display = "none";
  }
  button.forEach((btn) => {
    btn.addEventListener("click", function () {
      for (let i = 12; i < items.length; i++) {
        items[i].style.display = "flex";
      }
      btn.style.display = "none";
    });
  });
});

// фильтрация
const topItems = document.querySelectorAll(".projects__top-item");
const items = document.querySelectorAll(".projects__item");

topItems.forEach((topItem) => {
  topItem.addEventListener("click", () => {
    const dataName = topItem.getAttribute("data-name");
    items.forEach((item) => {
      if (item.getAttribute("data-name") !== dataName) {
        item.style.display = "none";
      } else {
        item.style.display = "flex";
        document.querySelector(
          ".certificate-page__button_cases"
        ).style.display = "none";
      }
    });
  });
});
