/* signup page - JS */


// 변수 선언하기기
const idInput = document.getElementById("id");
const pwInput = document.getElementById("password");
const pwCheckInput = document.getElementById("password-check");
const signupBtn = document.getElementById("signup-btn");
const pwMismatchMsg = document.getElementById("pw-mismatch-msg");


// 비밀번호 검사
function checkPassword(password) {
    const minLength = /.{8,}/;           
    const upper = /[A-Z]/;               
    const lower = /[a-z]/;             
    const number = /[0-9]/;              
    const symbol = /[@!?_-]/;  
    
    return (
        minLength.test(password) &&
        upper.test(password) &&
        lower.test(password) &&
        number.test(password) &&
        symbol.test(password) 
    );

}


// 전체 검사사
function checkForm() {
    const id = idInput.value;
    const pw = pwInput.value;
    const pwCheck = pwCheckInput.value;
    const bottomBox = document.querySelector(".bottom");


    if (pwCheck !== "" && pw !== pwCheck) {
        pwMismatchMsg.style.display = "block";
    } else {
        pwMismatchMsg.style.display = "none";
    }

    const isValid =
        id !== "" &&
        pw !== "" &&
        pw === pwCheck &&
        checkPassword(pw);

    signupBtn.disabled = !isValid;
    // signupBtn.style.backgroundColor = isValid ? "#000" : "#5E0080";
    // signupBtn.style.color = isValid ? "#fff" : "#999";
    
    if (isValid) {
        signupBtn.style.background = "var(--point-main, #5E0080)";
        signupBtn.style.color = "#FFF";
        bottomBox.style.background = "var(--point-main, #5E0080)"; 
    } else {
        signupBtn.style.background = "var(--stroke-stroke-2, #E2E2E2)";
        signupBtn.style.color = "var(--font-font2, #999)";
        bottomBox.style.background = "var(--stroke-stroke-2, #E2E2E2)"; 
    }

}


idInput.addEventListener("input", checkForm);
pwInput.addEventListener("input", checkForm);
pwCheckInput.addEventListener("input", checkForm);

