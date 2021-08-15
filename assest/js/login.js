const loginEmail = document.getElementById('login-email');
const loginPass =  document.getElementById('login-pass');
const loginButton =  document.getElementById('login-btn');
const warningText =  document.getElementById('warning');

loginButton.addEventListener('click', function(){

    if(loginEmail.value == 'abc@gmail.com' && loginPass.value == 'tom26'){
        window.location.href = 'banking.html';
    }
    else{
        warningText.innerText = 'email or password is wrong'
    }  
})