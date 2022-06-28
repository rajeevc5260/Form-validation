const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	if(phoneValue ===''){

		setErrorFor(phone,'Phone number cannot be blank');
	}
	else if (phoneValue.length < 10  ) {

		setErrorFor(phone, 'Not valid');
	}
	else{
		setSuccessFor(phone);
	}
	var phone_input = document.getElementById("phone");

	phone_input.addEventListener('input', () => {
	phone_input.setCustomValidity('');
	phone_input.checkValidity();
	});

	phone_input.addEventListener('invalid', () => {
	if(phone_input.value === '') {
		phone_input.setCustomValidity('Enter phone number!');
		setErrorFor(phone, 'Not valid');
	} else {
		phone_input.setCustomValidity('Enter phone number in this format: 123-456-7890');
	}
	});

    if(passwordValue === '') {
        setErrorFor(password, 'Password is required');
    }
     else if (passwordValue.length < 8 ) {
        setErrorFor(password, 'Password must be at least 8 character.');
    } 
    else {
        setSuccessFor(password);
    }
	if (passwordValue.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\<\>\.\,]/)){
        setErrorFor(password, 'Password must contain lowercase, Uppercase and special characters');
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, "Passwords doesn't match");
    } else {
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


