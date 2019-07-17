
var menu = document.querySelector(".hamburger");
var target = document.querySelector('#target');
menu.addEventListener('click',action);

function action(){
    menu.classList.toggle('is-active');
   
    target.classList.toggle('show');
    
}

