const clearBtn = document.querySelector('.clear');
const submitBtn = document.querySelector('.submit');
const closeBtn = document.querySelector('.close');

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const repasswordInput = document.querySelector('#repassword');
const emailInput = document.querySelector('#email');

const popup = document.querySelector('form-popup');

const inputs = [usernameInput, passwordInput, repasswordInput, emailInput];

const showError = (input, msg) => { 

 }


const checkForm = (input) => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			console.log('ok');
		}
	})
};

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();

	inputs.forEach((el) => {
		el.value = '';
	});
});

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm(inputs);
});
