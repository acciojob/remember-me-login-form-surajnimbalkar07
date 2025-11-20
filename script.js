const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");


// PAGE LOAD → Check if credentials saved
window.onload = function () {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block";  // Show button
  }
};


// SUBMIT FORM
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  // Alert always
  alert(`Logged in as ${user}`);

  if (checkbox.checked) {
    // Save to localStorage
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
  } else {
    // Remove any stored credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});


// EXISTING USER LOGIN
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");
  alert(`Logged in as ${savedUser}`);
});
