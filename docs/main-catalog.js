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
var rangeSlider = document.getElementById('rangeSlider');
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
    margin: 1000,
    connect: true,
    step: 10,
    range: {
      'min': [500],
      'max': [200000]
    }
  });
}
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var inputs = [input1, input2];
rangeSlider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = Math.round(values[handle]);
});
var setRangeSlider = function setRangeSlider(i, value) {
  var arr = [null, null];
  arr[i] = value;
  rangeSlider.noUiSlider.set(arr);
};
inputs.forEach(function (el, index) {
  el.addEventListener("change", function (e) {
    setRangeSlider(index, e.currentTarget.value);
  });
});
var tabsBtn = document.querySelectorAll('.catalog__btn');
var tabsItem = document.querySelectorAll('.catalog__grid');
tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    var path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function (btn) {
      btn.classList.remove('catalog__btn--active');
    });
    e.currentTarget.classList.add('catalog__btn--active');
    tabsItem.forEach(function (element) {
      element.classList.remove('catalog__grid--active');
    });
    document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('catalog__grid--active');
  });
});
var btn1 = document.querySelector('.checkbox__btn-1');
var list1 = document.querySelector('.checkbox__list-1');
btn1.addEventListener('click', function () {
  btn1.classList.toggle('checkbox__btn--active');
  list1.classList.toggle('checkbox__list--active');
});
var btn2 = document.querySelector('.checkbox__btn-2');
var list2 = document.querySelector('.checkbox__list-2');
btn2.addEventListener('click', function () {
  btn2.classList.toggle('checkbox__btn--active');
  list2.classList.toggle('checkbox__list--active');
});
var btn3 = document.querySelector('.radio__btn');
var list3 = document.querySelector('.radio__list');
btn3.addEventListener('click', function () {
  btn3.classList.toggle('radio__btn--active');
  list3.classList.toggle('radio__list--active');
});
var btn4 = document.querySelector('.range__btn');
var list4 = document.querySelector('.range__inputs');
btn4.addEventListener('click', function () {
  btn4.classList.toggle('range__btn--active');
  list4.classList.toggle('range__inputs--active');
});
var burger = document.querySelector('.burger');
var burgerMenu = document.querySelector('.burger-menu');
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  burgerMenu.classList.toggle('burger-menu--active');
});