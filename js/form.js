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