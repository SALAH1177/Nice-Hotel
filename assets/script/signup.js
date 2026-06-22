let form = document.getElementById("form-signup");
// console.log(form);
let nameInput = document.getElementById("nameInput");
// console.log(nameInput);
let nameError = document.getElementById("error-name");
// console.log(nameError);
let emailInput = document.getElementById("emailInput");
// console.log(emailInput);
let emailError = document.getElementById("error-email");
// console.log(emailError);
let passwordInput = document.getElementById("passwordInput");
// console.log(passwordInput);
let passwordError = document.getElementById("error-password");
// console.log(passwordError);
let confirmPasswordInput = document.getElementById("passwordConfirmInput");
// console.log(confirmPasswordInput);
let confirmPasswordError = document.getElementById("error-passwordConfirm");
// console.log(confirmPasswordError);
let submitBtn = document.getElementById("submitBtn");
// console.log(submitBtn);
let inputs =[nameInput,emailInput,passwordInput,confirmPasswordInput];

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let isNameValid = regexName.test(nameInput.value);
    let isEmailValid = regexEmail.test(emailInput.value);
    let isPasswordValid = regexPassword.test(passwordInput.value);
    let isMatch = passwordInput.value === confirmPasswordInput.value;

    if (isNameValid && isEmailValid && isPasswordValid && isMatch) {
        userData={
            name:nameInput.value,
            email:emailInput.value,
            password:passwordInput.value
        }
        localStorage.setItem("user",JSON.stringify(userData));
        window.location.href = "login.html";
    } else {
        inputs.forEach((input) => {
            input.classList.add("is-invalid");
        });
        if (!isNameValid) nameError.innerHTML = "Enter your name";
        if (!isEmailValid) emailError.innerHTML = "Enter your email";
        if (!isPasswordValid) passwordError.innerHTML = "Enter your Password";
        if (confirmPasswordInput.value === "") confirmPasswordError.innerHTML = "Enter your Password";
    }
});

nameInput.addEventListener("input", () => {
    if (regexName.test(nameInput.value)) {
        nameError.classList.remove("text-danger");
        nameError.classList.add("text-success");
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
        nameError.innerHTML = "this is correct";
    } else {
        nameError.classList.add("text-danger");
        nameError.classList.remove("text-success");
        nameInput.classList.remove("is-valid");
        nameInput.classList.add("is-invalid");
        nameError.innerHTML = "Enter the triple name";
    }
});

emailInput.addEventListener("input", () => {
    if (regexEmail.test(emailInput.value)) {
        emailError.classList.remove("text-danger");
        emailError.classList.add("text-success");
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
        emailError.innerHTML = "this is correct";
    } else {
        emailError.classList.add("text-danger");
        emailError.classList.remove("text-success");
        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");
        emailError.innerHTML = "this is not correct";
    }
});

passwordInput.addEventListener("input", () => {
    if (regexPassword.test(passwordInput.value)) {
        passwordError.classList.remove("text-danger");
        passwordError.classList.add("text-success");
        passwordInput.classList.remove("is-invalid");
        passwordInput.classList.add("is-valid");
        passwordError.innerHTML = "this is powerful";
    } else {
        passwordError.classList.add("text-danger");
        passwordError.classList.remove("text-success");
        passwordInput.classList.remove("is-valid");
        passwordInput.classList.add("is-invalid");
        passwordError.innerHTML = "You must use letters,numbers,and symbols.";
    }
});

confirmPasswordInput.addEventListener("input", () => {
    if (passwordInput.value === confirmPasswordInput.value) {
        confirmPasswordError.classList.remove("text-danger");
        confirmPasswordError.classList.add("text-success");
        confirmPasswordInput.classList.remove("is-invalid");
        confirmPasswordInput.classList.add("is-valid");
        confirmPasswordError.innerHTML = "matching";
    } else {
        confirmPasswordError.classList.add("text-danger");
        confirmPasswordError.classList.remove("text-success");
        confirmPasswordInput.classList.remove("is-valid");
        confirmPasswordInput.classList.add("is-invalid");
        confirmPasswordError.innerHTML = "not matching";
    }
});

let regexName = /^[a-zA-Z ]{3,30} [a-zA-Z ]{3,30} [a-zA-Z ]{3,30}$/;
let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/;
let regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
