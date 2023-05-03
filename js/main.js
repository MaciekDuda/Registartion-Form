const clearBtn = document.querySelector('.clear');
const submitBtn = document.querySelector('.submit');
const closeBtn = document.querySelector('.close');

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const repasswordInput = document.querySelector('#repassword');
const emailInput = document.querySelector('#email');

const popup = document.querySelector('form-popup');

const clearForm = (e) => {
	e.preventDefault();

	[usernameInput, passwordInput, repasswordInput, emailInput].forEach((el) => {
		el.value = '';
	});

	console.log('clear clicked');
};

clearBtn.addEventListener('click', clearForm);
