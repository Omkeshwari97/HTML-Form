//uc1 name validation
const name = document.querySelector('#name');
const textError = document.querySelector('.text-error');

name.addEventListener('input', function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(name.value))
    {
        textError.textContent="";
    }
    else
    {
        textError.textContent="Name is incorrect";
    }
});

//uc2 email validation
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function(){
    let emailregex = RegExp('^($|[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+)$');
    if(emailregex.test(email.value))
    {
        emailError.textContent="";
    }
    else
    {
        emailError.textContent="Email is incorrect";
    }
});

//uc3 mobile validation
const mobile = document.querySelector("#tel");
const mobileError = document.querySelector('.mobile-error');
mobile.addEventListener('input', function(){
    let phoneregex = RegExp('^[0-9]{2}[ ][789]{1}[0-9]{9}$');
    if(phoneregex.test(mobile.value))
    {
        mobileError.textContent="";
    }
    else
    {
        mobileError.textContent="Mobile Number is incorrect";
    }
});

//uc4 uc5 password validation
const password = document.querySelector("#pwd");
const passwordError = document.querySelector('.password-error');
password.addEventListener('input', function(){
    let passwordRegex = RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');
    if(passwordRegex.test(password.value))
    {
        passwordError.textContent="";
    }
    else
    {
        passwordError.textContent="Password is incorrect";
    }
});