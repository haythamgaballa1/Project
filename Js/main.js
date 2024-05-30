
document.addEventListener("DOMContentLoaded", function () {
  // loader
  let loader = document.querySelector('.loader')
  loader.style.display = 'none';


  // After and Before Cases
  let sliders = document.querySelectorAll('.slider');
  let caseContainers = document.querySelectorAll('.case');
  sliders.forEach((slider, index) => {
    slider.addEventListener('input', (e) => {
      caseContainers[index].style.setProperty('--Left', `${e.target.value}%`);
    });
  });

  // Swiper Slider
  const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'cards',
    grabCursor: true,
    centerdSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.fa-arrow-left-long',
      prevEl: '.fa-arrow-right-long ',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // mobile menu
  let barIcon = document.querySelector('.bar-icon')
  let menuMobile = document.querySelector('.menu-mobile')
  barIcon.addEventListener('click', function () {
    if (menuMobile.style.right == '200%') {
      menuMobile.style.right = '0'
    } else {
      menuMobile.style.right = '200%'
    }
  })

  // 
});