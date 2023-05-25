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
	const formBox = input.parentElement;
	console.log(formBox);
	const errorMsg = formBox.querySelector('.form__box-error-text');
	errorMsg.textContent = msg;
	formBox.classList.add('error');
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		const labelText = input.previousElementSibling.innerText
			.trim()
			.replace(/:$/, '');
		showError(input, `${labelText} powinna składać się z ${min} znaków.`);
	}
};

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'Podane hasła są różne');
	}
};

const checkMail = (email) => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (re.test(email.value)) {
		clearError(error);
	} else {
		showError(email, 'Błędny format email');
	}
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
	checkLength(usernameInput, 3);
	checkLength(passwordInput, 8);
	checkPassword(passwordInput, repasswordInput);
	checkMail(emailInput);
});
