var mySwiper = new Swiper(".swiper-container1", {
  direction: "horizontal",
  // height: 300,
  // width: 600,
  loop: true,
  autoplay: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true
    // hideOnClick: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

var mySwiper2 = new Swiper(".swiper-container2", {
  slidesPerViews: 4,
  direction: "horizontal",
  spaceBewteen: 10,
  slidesPerGroup: 5,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
