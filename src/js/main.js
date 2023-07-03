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
const choices1 = new Choices(element1, {
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

const swiper1 = new Swiper(".hero1__swiper",{
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    }
});

const swiper2 = new Swiper(".promo__swiper",{
    // slidesPerView: "auto",
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        800: {
            slidesPerView: "auto",  
        },
        584: {
            slidesPerView: 2,  
        },
        300: {
            slidesPerView: 1,  
        },
        
    }
});

const swiper3 = new Swiper(".helpful__swiper",{
    // slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1025: {
            slidesPerView: 2,  
        },
        971: {
            slidesPerView: 3,  
        },
        500: {
            slidesPerView: 2,  
        },
        300: {
            slidesPerView: 1,  
        }
    }
});

tippy('#tooltip', {
    maxWidth: 165,
    content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
  });

const feadbackValidation = new JustValidate('.feadback__form', {
errorLabelStyle: {
    color:'#FF6972'
},
});

document.addEventListener("DOMContentLoaded", function () {
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);
feadbackValidation
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
    .addField('.input-mail', [{
        rule: 'required',
        errorMessage: 'Недопустимый формат',
    },
    {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
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


let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    burgerMenu.classList.toggle('burger-menu--active');
})


