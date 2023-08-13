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