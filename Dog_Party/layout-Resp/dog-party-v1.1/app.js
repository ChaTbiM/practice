

var menu = document.querySelector('.menu');
var resp = document.querySelector('.resp');

var submit = document.querySelector('#submit');
var change = document.querySelector('#change');

submit.addEventListener('click',changeName)
submit.addEventListener('keypress',changeName)


menu.addEventListener('click', function(){
	console.log(e.target);
	
	menu.classList.toggle('pos');
	resp.classList.toggle('show');
})


function changeName(e){
	e.preventDefault();
	var value = document.querySelector('#name').value;
	change.textContent = value;
}