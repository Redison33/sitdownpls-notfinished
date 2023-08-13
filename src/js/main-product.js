let serchInput = document.querySelector('.header__search-input');
let serchLens = document.querySelector('.header__search-lens');

serchInput.addEventListener('input', function() {
    if (serchInput.value !== '' ) {
        serchLens.classList.add('header__search-lens--active')
    }
    else {
        serchLens.classList.remove('header__search-lens--active')
    }
})

const element1 = document.querySelector('#selectCustom1');
const choices3 = new Choices(element1, {
  searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
});
const element2 = document.querySelector('#selectCustom2');
const choices2 = new Choices(element2, {
  searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
});

let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    burgerMenu.classList.toggle('burger-menu--active');
})

const swiper1 = new Swiper(".reference__swiper",{
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1025: {
            slidesPerView: 4,  
        },
        971: {
            slidesPerView: 3,  
        },
        500: {
            slidesPerView: 2,  
            spaceBetween: 32,
        },
        300: {
            slidesPerView: 2,  
            spaceBetween: 16,
        }
    }
});

let img1 = document.querySelector('.product__img-big');
let img2 = document.querySelector('.product__img-small');
let overlayImgClose = document.querySelector('.overlay__close-1');
let overlayImg = document.querySelector('.product__overlay-img');

img1.addEventListener('click', function() {
    overlayImg.classList.add('product__overlay-img--active');
})
img2.addEventListener('click', function() {
    overlayImg.classList.add('product__overlay-img--active');
})
overlayImgClose.addEventListener('click', function() {
    overlayImg.classList.remove('product__overlay-img--active');
})
const swiper2 = new Swiper(".overlay__swiper",{
    spaceBetween: 78,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1280: {
            slidesPerView: 4,  
        },
        971: {
            slidesPerView: 3,  
        },
        500: {
            slidesPerView: 3,  
        },
        300: {
            slidesPerView: 1,  
        }
    }
});


let overlayShopOpen1 = document.querySelector('.product__btn-1');
let overlayShopOpen2 = document.querySelector('.product__btn-2');
let overlayShopClose = document.querySelector('.overlay__close-2');
let overlayShop = document.querySelector('.product__overlay-shop');
let overlayEnd = document.querySelector('.overlay__end');
let overlayBuy = document.querySelector('.overlay__buy');
let overlayEndBtn = document.querySelector('.overlay__btn');

overlayShopOpen1.addEventListener('click', function() {
    overlayShop.classList.add('product__overlay-shop--active');
})
overlayShopOpen2.addEventListener('click', function() {
    overlayShop.classList.add('product__overlay-shop--active');
})

overlayShopClose.addEventListener('click', function() {
    overlayShop.classList.remove('product__overlay-shop--active');
    overlayEnd.classList.remove('overlay__end--active');
    overlayBuy.classList.remove('overlay__buy--active');
})
overlayEndBtn.addEventListener('click', function() {
    overlayEnd.classList.add('overlay__end--active');
    overlayBuy.classList.add('overlay__buy--active');
})

const overlayValidation = new JustValidate('.overlay__form', {
    errorLabelStyle: {
        color:'#FF6972'
    },
});
    
document.addEventListener("DOMContentLoaded", function () {
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);
overlayValidation
    .addField('.input-name', [{
        rule: 'required',
        errorMessage: "Недопустимый формат"
    },
    {
        rule: 'customRegexp',
        value: /[а-я]/gi,  
        errorMessage: "Недопустимый формат"
    }
    
    ])   
    .addField('.input-number', [{
        rule: 'required',
        rule: "function",
        validator: function (name, value) {
            const phone = selector.inputmask.unmaskedvalue();
            return phone.length === 10
        },
        errorMessage: 'Недопустимый формат',
    },
    ])

    .addField('.check', [{
        rule: 'required',
        errorMessage: '↑',
    },
    ])
})
