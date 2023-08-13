"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var swiper1 = new Swiper(".reference__swiper", {
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1025: {
      slidesPerView: 4
    },
    971: {
      slidesPerView: 3
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 16
    }
  }
});
var img1 = document.querySelector('.product__img-big');
var img2 = document.querySelector('.product__img-small');
var overlayImgClose = document.querySelector('.overlay__close-1');
var overlayImg = document.querySelector('.product__overlay-img');
img1.addEventListener('click', function () {
  overlayImg.classList.add('product__overlay-img--active');
});
img2.addEventListener('click', function () {
  overlayImg.classList.add('product__overlay-img--active');
});
overlayImgClose.addEventListener('click', function () {
  overlayImg.classList.remove('product__overlay-img--active');
});
var swiper2 = new Swiper(".overlay__swiper", {
  spaceBetween: 78,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1280: {
      slidesPerView: 4
    },
    971: {
      slidesPerView: 3
    },
    500: {
      slidesPerView: 3
    },
    300: {
      slidesPerView: 1
    }
  }
});
var overlayShopOpen1 = document.querySelector('.product__btn-1');
var overlayShopOpen2 = document.querySelector('.product__btn-2');
var overlayShopClose = document.querySelector('.overlay__close-2');
var overlayShop = document.querySelector('.product__overlay-shop');
var overlayEnd = document.querySelector('.overlay__end');
var overlayBuy = document.querySelector('.overlay__buy');
var overlayEndBtn = document.querySelector('.overlay__btn');
overlayShopOpen1.addEventListener('click', function () {
  overlayShop.classList.add('product__overlay-shop--active');
});
overlayShopOpen2.addEventListener('click', function () {
  overlayShop.classList.add('product__overlay-shop--active');
});
overlayShopClose.addEventListener('click', function () {
  overlayShop.classList.remove('product__overlay-shop--active');
  overlayEnd.classList.remove('overlay__end--active');
  overlayBuy.classList.remove('overlay__buy--active');
});
overlayEndBtn.addEventListener('click', function () {
  overlayEnd.classList.add('overlay__end--active');
  overlayBuy.classList.add('overlay__buy--active');
});
var overlayValidation = new JustValidate('.overlay__form', {
  errorLabelStyle: {
    color: '#FF6972'
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var _ref;
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);
  overlayValidation.addField('.input-name', [{
    rule: 'required',
    errorMessage: "Недопустимый формат"
  }, {
    rule: 'customRegexp',
    value: /[а-я]/gi,
    errorMessage: "Недопустимый формат"
  }]).addField('.input-number', [(_ref = {
    rule: 'required'
  }, _defineProperty(_ref, "rule", "function"), _defineProperty(_ref, "validator", function validator(name, value) {
    var phone = selector.inputmask.unmaskedvalue();
    return phone.length === 10;
  }), _defineProperty(_ref, "errorMessage", 'Недопустимый формат'), _ref)]).addField('.check', [{
    rule: 'required',
    errorMessage: '↑'
  }]);
});