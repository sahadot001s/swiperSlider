var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
        slidesPerView: 4,
        spaceBetweenSlides: 0
    },
    992: {
        slidesPerView: 3,
        spaceBetweenSlides: 20
    },
    668: {
      slidesPerView: 2,
      spaceBetweenSlides: 20
  },
  0: {
    slidesPerView: 1,
    spaceBetweenSlides: 20
}
}
});