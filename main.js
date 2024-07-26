// Burger menus
document.addEventListener('DOMContentLoaded', function() {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
      for (var i = 0; i < close.length; i++) {
          close[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }
});

// Animaite on Scroll
AOS.init ({ 
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 80, // offset (in px) so that even though we arrive at the original location the element is not scrolling in straight away
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });