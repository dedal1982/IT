// Координаты офисов//тут замените на реальные координаты
const moscowOffice = [55.751244, 37.618423];
const novosibirskOffice = [55.030199, 82.92043];

// Инициализация карты
ymaps.ready(function () {
  const map = new ymaps.Map("map", {
    center: moscowOffice,
    zoom: 10,
  });

  // Создание маркера
  const marker = new ymaps.Placemark(moscowOffice, {
    hintContent: "Офис в Москве",
  });
  map.geoObjects.add(marker);

  // Обработчики кликов на кнопках
  document.getElementById("moscow-btn").addEventListener("click", () => {
    map.setCenter(moscowOffice, 10);
    marker.geometry.setCoordinates(moscowOffice);
  });

  document.getElementById("novosibirsk-btn").addEventListener("click", () => {
    map.setCenter(novosibirskOffice, 10);
    marker.geometry.setCoordinates(novosibirskOffice);
  });
});
