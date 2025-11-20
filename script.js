const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");

// INITIAL PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
    // Inputs must start empty
    username.value = "";
    password.value = "";

    // Checkbox unchecked initially
    checkbox.checked = false;

    // Check if saved credentials available
    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    // Existing user button only visible if credentials exist
    if (savedUser && savedPass) {
        existingBtn.style.display = "inline-block";
    } else {
        existingBtn.style.display = "none";
    }
});

// HANDLE FORM SUBMIT
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = username.value.trim();
    const pass = password.value;

    // REQUIRED ALERT (same for both cases)
    alert(`Logged in as ${user}`);

    // If Remember Me checked → save credentials
    if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);

        existingBtn.style.display = "inline-block"; // show button
    } 
    // If NOT checked → remove any saved credentials
    else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existingBtn.style.display = "none"; // hide button
    }
});

// EXISTING USER LOGIN
existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");

    alert(`Logged in as ${savedUser}`);
});
