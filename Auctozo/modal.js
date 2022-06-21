var modalBtn = document.querySelector('.log-in-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var logInBtn = document.querySelector('.log-in');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active')
});
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active')
});
logInBtn.addEventListener('click', function(){
    modalBg.classList.remove('bg-active')
});
