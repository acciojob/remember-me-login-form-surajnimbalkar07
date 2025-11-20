const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");

// Hide existing button initially
existingBtn.style.display = "none";

// On page load: show existing button if data exists
document.addEventListener("DOMContentLoaded", () => {
  username.value = "";
  password.value = "";
  checkbox.checked = false;

  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "inline-block";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = username.value.trim();
  const pass = password.value;

  if (checkbox.checked) {
    // store credentials
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Credentials are stored in localStorage");
    existingBtn.style.display = "inline-block";
  } else {
    // remove credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    alert("Credentials are not stored");
    existingBtn.style.display = "none";
  }
});

existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");
  alert(`Logged in as ${savedUser}`);
});
