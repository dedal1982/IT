const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 44,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    374: {
      slidesPerView: 1.05,
      spaceBetween: 8,
    },
    479: {
      slidesPerView: 1.44,
      spaceBetween: 8,
    },
    639: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    767: {
      slidesPerView: 1.8,
      spaceBetween: 16,
    },
    1023: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
