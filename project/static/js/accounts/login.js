/* login page - JS */
document.addEventListener("DOMContentLoaded", function () {
    const idInput = document.getElementById("id");
    const pwInput = document.getElementById("password");
    const loginBtn = document.getElementById("login-btn");

    function validateLoginForm() {
        const idFilled = idInput.value.trim() !== "";
        const pwFilled = pwInput.value !== "";

        const isValid = idFilled && pwFilled;

        
        loginBtn.disabled = !isValid;
    }

    
    idInput.addEventListener("input", validateLoginForm);
    pwInput.addEventListener("input", validateLoginForm);
});



console.log("Login page JS loaded");