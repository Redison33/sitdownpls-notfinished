"use strict";

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