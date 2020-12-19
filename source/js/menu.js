const menu = document.querySelector('.main-nav__list');
const openMenu = document.querySelector('.main-nav__toggle');
const background = document.querySelector('.page-header__container');
const openButton = document.querySelector('.main-nav__toggle');

openMenu.addEventListener('click', function () {
  menu.classList.toggle('main-nav__list--open');
  background.classList.toggle('page-header__container--bg');
  openButton.classList.toggle('main-nav__toggle--close');
  openButton.classList.toggle('main-nav__toggle--open');

});
