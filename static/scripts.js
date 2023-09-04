// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const password = form.querySelector("#id_password");
        const confirmPassword = form.querySelector("#id_confirm_password");
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            alert("Passwords do not match.");
        }
    });
});
