'use strict';

(function () {
  let nav = document.querySelector('.page-header__nav-wrapper');
  let burger = nav.querySelector('.page-header__burger');

  function burgerClickHandler() {
    nav.classList.toggle('page-header__nav-wrapper--show');
    burger.classList.toggle('page-header__burger--open');
  }

  burger.addEventListener('click', burgerClickHandler);
})();
