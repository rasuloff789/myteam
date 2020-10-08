var openButton =document.querySelector('.hamburger');
var openNav = document.querySelector('.site-header__sitenav')

var openHeader = document.querySelector('.site-header__container')
openButton.addEventListener('click',function(){
  openHeader.classList.toggle('open-btn');
  openNav.classList.toggle('site-header__sitenav--open');
  openButton.classList.toggle('is-active') ;
  
});

var directorsButton = document.querySelectorAll('.director__button');

var directorsOpen = document.querySelectorAll('.director')



directorsButton.forEach(function(directorButton, index){
  directorButton.addEventListener('click' , function(){
    directorsOpen[index].classList.toggle("director--open")
})})