let signinBtn = document.getElementById("signIn");
let emailLogin = document.getElementById("emailLogin");
let passwordLogin = document.getElementById("passwordLogin");

let users = JSON.parse(localStorage.getItem('users')) || [];


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
let signIn = ()=>{
    let valid = true;

    if (!emailLogin.value.trim()) {
        showError(emailLogin, 'E-mail is required *');
        valid = false;
    }
    else {
        removeError(emailLogin);
    }

    if (!passwordLogin.value.trim()) {
        showError(passwordLogin, 'Password is required *');
        valid = false;
    } else {
        removeError(passwordLogin);
    }
    if(valid){
        let user = users.find(us => us.email === emailLogin.value.trim() && us.password === passwordLogin.value.trim())
        if(user){
            alert("Login successful! Welcome, " + user.name);
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = "homePage.html";

        }else {
            // Login failed
            showError(emailLogin, 'Email or password is incorrect *');
            showError(passwordLogin, 'Email or password is incorrect *');
        }
    }
}

signinBtn.onclick = (e) => {
    e.preventDefault();
    signIn();
};
