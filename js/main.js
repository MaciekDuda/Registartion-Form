const clearBtn = document.querySelector('.clear');
const submitBtn = document.querySelector('.submit');
const closeBtn = document.querySelector('.close');

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const repasswordInput = document.querySelector('#repassword');
const emailInput = document.querySelector('#email');

const popup = document.querySelector('.form__popup');

const inputs = [usernameInput, passwordInput, repasswordInput, emailInput];

const showError = (input, msg) => {
	const formBox = input.parentElement;
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
		clearError(email);
	} else {
		showError(email, 'Błędny format email');
	}
};

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();

	inputs.forEach((el) => {
		el.value = '';
		clearError(el);
	});
});

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form__box');
	let errorCount = 0;

	allInputs.forEach((el) => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		popup.classList.add('show');
	}

	console.log(errorCount);
};

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	checkForm(inputs);
	checkLength(usernameInput, 3);
	checkLength(passwordInput, 8);
	checkPassword(passwordInput, repasswordInput);
	checkMail(emailInput);
	checkErrors();
});

