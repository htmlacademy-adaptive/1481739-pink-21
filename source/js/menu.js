const menu = document.querySelector('.main-nav__list');
const openMenu = document.querySelector('.toggle');
const background = document.querySelector('.page-header__container');
const openButton = document.querySelector('.toggle');
const picture = document.querySelector('.page-header');

openMenu.addEventListener('click', function () {
  menu.classList.toggle('main-nav__list--open');
  background.classList.toggle('page-header__container--bg');
  openButton.classList.toggle('toggle--close');
  openButton.classList.toggle('toggle--open');
  picture.classList.toggle('page-header--bg');
});
