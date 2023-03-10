const form = document.querySelector(".form");
const input = document.querySelector(".form__input");


input.addEventListener('blur', function(){
	form.classList.remove('form--active');
});

input.addEventListener('focus', function(){
	form.classList.add('form--active');
});