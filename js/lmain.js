

const name_id = document.getElementById('name');
const form = document.getElementById('form');
const password_id = document.getElementById('password');
const input_error = document.getElementById('input_error');
const cf_password = document.getElementById('cf_password');
const message_cf_password = document.getElementById('message_cf_password');

form.addEventListener('submit', (e) => {
    let message= []
    if(name_id.value === '' || name_id.value == null){
        message.push('Dien Ten Vao Day')
    }

    if(password_id.value.length <= 6){
        message.push('Password must be longer than 6 characters')
    }

    if(password_id.value.length >= 15){
        message.push('Password must be less than 15 characters')
    }

    if(message.length > 0){
        e.preventDefault()
        input_error.innerText = message.join(', ')
    }
});


//alert
document.querySelector('.button').onclick =function(){

    var cl_pass = document.querySelector('.cl_pass').value,
        cl_cf_pass = document.querySelector('.cl_cf_pass').value;

    if(cl_pass == ""){
        alert("Field cannot be empty.");
    }
    else if(cl_pass != cl_cf_pass){
        alert("Password didn't match try again.");
        return false
    }
    return true;
};




document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const resetPass = document.querySelector("#resetPass");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        createAccountForm.classList.remove("hidden");
        resetPass.classList.add("hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("hidden");
        createAccountForm.classList.add("hidden");
        resetPass.classList.add("hidden");
    });

    document.querySelector("#linkResetPass").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        createAccountForm.classList.add("hidden");
        resetPass.classList.remove("hidden");
    });

    document.querySelector("#linkGoback").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("hidden");
        createAccountForm.classList.add("hidden");
        resetPass.classList.add("hidden");
    });


    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Username or password is invalid.");
    });

});


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message--success", "form_message--error");
    messageElement.classList.add(`form_message--${type}`);
}