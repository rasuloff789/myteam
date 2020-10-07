var openButton =document.querySelector('.hamburger');
var openNav = document.querySelector('.site-header__sitenav')

var openHeader = document.querySelector('.site-header__container')
openButton.addEventListener('click',function(){
  openHeader.classList.toggle('open-btn');
  openNav.classList.toggle('site-header__sitenav--open');
  openButton.classList.toggle('is-active') ;
  
});

var directorButton = document.querySelector('.director__button');

var frontBox = document.querySelector('.director__front');

var backBox = document.querySelector('.director__back');

directorButton.addEventListener('click' , function(){
  directorButton.classList.toggle('director__button--open');
  frontBox.classList.toggle('director__front--open');
  backBox.classList.toggle('director__back--open');
})