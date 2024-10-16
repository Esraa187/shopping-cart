let container = document.getElementById("container")
let loaderContainer = document.getElementById("loaderContainer")
let signupBtn = document.getElementById("signUp");
let nameInput = document.getElementById("nameInp");
let emailInput = document.getElementById("emailInp");
let passInput = document.getElementById("passwordInp");


let users = JSON.parse(localStorage.getItem('users')) || [];

let validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
let isEmailUnique = (email) => {
    return !users.some(user => user.email === email);
};

let showError = (input, message) => {
    const parent = input.parentElement;
    const errorSpan = parent.querySelector('.error-message');
    if (!errorSpan) {
        const span = document.createElement('span');
        span.className = 'error-message';
        span.style.color = 'red';
        span.textContent = message;
        parent.appendChild(span);
    }
};

let removeError = (input) => {
    const parent = input.parentElement;
    const errorSpan = parent.querySelector('.error-message');
    if (errorSpan) {
        parent.removeChild(errorSpan);
    }
};

let addNewUser = () => {
    let valid = true;

    if (!nameInput.value.trim()) {
        showError(nameInput, 'Name is required *');
        valid = false;
    } else {
        removeError(nameInput);
    }

    if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Invalid email format *');
        valid = false;
    }
    else if (!isEmailUnique(emailInput.value.trim())) {
        showError(emailInput, 'Email is already registered');
        valid = false;
    } 
    else {
        removeError(emailInput);
    }

    if (!passInput.value.trim()) {
        showError(passInput, 'Password is required *');
        valid = false;
    } else {
        removeError(passInput);
    }

    if (valid) {
        users.push({
            id: Date.now(),
            name: nameInput.value.trim(),
            password: passInput.value.trim(),
            email: emailInput.value.trim(),
            cart:[],
            items:0
        });
        localStorage.setItem('users', JSON.stringify(users));
        console.log(users);
        nameInput.value = "";
        emailInput.value = "";
        passInput.value = "";

        container.style.display="none"
        loaderContainer.classList.add('show');
        console.log(loaderContainer)
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 2000);
    }
};
signupBtn.onclick = (e) => {
    e.preventDefault();
    addNewUser();
};
