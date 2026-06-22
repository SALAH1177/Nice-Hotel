let emailInput = document.getElementById("emailInput");
// console.log(emailInput);
let passwordInput = document.getElementById("passwordInput");
// console.log(passwordInput);
let submitBtn = document.getElementById("submitBtn");
// console.log(submitBtn);

let userData = JSON.parse(localStorage.getItem("user"));
// console.log(userData);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    emailInput.value === userData.email &&
    passwordInput.value === userData.password
  ) {
    Swal.fire({
        icon: "success",
        title: `Welcome ${userData.name}`,
        text:"you wil be redirected to the homepage in a few moments",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false
    }).then(() => {
        window.location.href = "index.html";
    })
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
});
