var menu = document.querySelector('.main-nav__list');
var openMenu = document.querySelector('.toggle');
var background = document.querySelector('.page-header__container');
var openButton = document.querySelector('.toggle');
var picture = document.querySelector('.page-header');

openMenu.addEventListener('click', function () {
  menu.classList.toggle('main-nav__list--open');
  background.classList.toggle('page-header__container--bg');
  openButton.classList.toggle('toggle--close');
  openButton.classList.toggle('toggle--open');
  picture.classList.toggle('page-header--bg');
});
