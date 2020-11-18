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