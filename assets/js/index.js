$(document).ready(function () {
  /* ------------- navbar ------------- */
  $(window).scroll(function () {
    if (this.scrollY > 20)
      $('.navbar').addClass('stciky');
    else
    $('.navbar').removeClass('stciky');
  });
  /* ------------- navbar toggler------------- */
  $('.toogle-img').click(function () {
    $(this).toggleClass('toggler');
    $('.navbar').toggleClass('togle-bg');
    $('.menu-area').toggleClass('menu-area-switch');
  });
  $('.nav-links').click(function () { 
    $('.toogle-img').removeClass('toggler');
    $('.menu-area').removeClass('menu-area-switch');
    $('.navbar').removeClass('togle-bg');
  });
  /* --------------- js --------------- */
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      autoplay: {
        delay: 5000,
      },
    });
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true
    });
});
