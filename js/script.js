// ! Sign Up Processing

var signUpUserName = document.getElementById("signUpUserName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var signUpBtn = document.getElementById("signUpBtn");

var usersData = [];

if (localStorage.getItem("usersData")) {
  usersData = JSON.parse(localStorage.getItem("usersData"));
} else {
  usersData = [];
}

function clearInputs() {
  signUpUserName.value = "";
  signUpEmail.value = "";
  signUpPassword.value = "";
}

function addUserData() {
  var signUpUserData = {
    name: signUpUserName.value,
    email: signUpEmail.value,
    password: signUpPassword.value,
  };

  signUpValidation(signUpUserData);
  if (signUpValidation(signUpUserData)) {
    usersData.push(signUpUserData);
    localStorage.setItem("usersData", JSON.stringify(usersData));
    document.getElementById("successContainer").classList.remove("d-none");
    document.getElementById("errorContainer").classList.add("d-none");
  } else {
    document.getElementById("errorContainer").classList.remove("d-none");
    document.getElementById("successContainer").classList.add("d-none");
  }

  // clearInputs()
}

function signUpValidation(signUpUserData) {
  // ? user Name validation
  var nameRegex = /^[a-zA-Z\-]+$/;
  var emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var nameResult = nameRegex.test(signUpUserData.name);
  var emailResult = emailRegex.test(signUpUserData.email);

  if (nameResult == true && emailResult == true) {
    return true;
  } else {
    return false;
  }
}

// ! Sign In Processing
var signInButton = document.getElementById("signInButton");
var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");
function checkSignIn() {
  console.log(usersData);

  for (var i = 0; i < usersData.length; i++) {
    if (
      usersData[i].email == signInEmail.value &&
      usersData[i].password == signInPassword.value
    ) {
      window.location.href = "home.html";
      document.querySelector(
        ".home_title"
      ).innerHTML = `Welcome ${usersData[i].name} `;
    } else {
      document.querySelector("#signInError").classList.remove("d-none");
    }
  }
}

//! Log out btn

var logOutBtn = document.getElementById("logOutButton");

function logOut() {
  window.location.href = "index.html";
}

// logOutBtn.addEventListener("click", logOut);
