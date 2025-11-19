//your JS code here. If required.
// Run when page loads
window.onload = function () {
    const existingBtn = document.getElementById("existing");

    // Check if credentials exist in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        // Show "Login as existing user" button
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }

    // Existing user login
    existingBtn.onclick = function () {
        const savedUser = localStorage.getItem("username");
        if (savedUser) {
            alert("Logged in as " + savedUser);
        }
    };
};

// Submit button logic
document.getElementById("submit").onclick = function (e) {
    e.preventDefault(); // Prevent page reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("checkbox").checked;

    alert("Logged in as " + username);

    if (remember) {
        // Save credentials
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        // Remove old saved credentials
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    // Update visibility of existing user button
    const existingBtn = document.getElementById("existing");
    if (localStorage.getItem("username")) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
};
