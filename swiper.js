var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
    },
    centeredSlides: true,
    mousewheel: true,
    keyboard: true,
  });
 
 