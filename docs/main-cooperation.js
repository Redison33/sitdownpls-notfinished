"use strict";

var serchInput = document.querySelector('.header__search-input');
var serchLens = document.querySelector('.header__search-lens');
serchInput.addEventListener('input', function () {
  if (serchInput.value !== '') {
    serchLens.classList.add('header__search-lens--active');
  } else {
    serchLens.classList.remove('header__search-lens--active');
  }
});
var element1 = document.querySelector('#selectCustom1');
var choices3 = new Choices(element1, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});
var element2 = document.querySelector('#selectCustom2');
var choices2 = new Choices(element2, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});
var burger = document.querySelector('.burger');
var burgerMenu = document.querySelector('.burger-menu');
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  burgerMenu.classList.toggle('burger-menu--active');
});