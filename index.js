const btnSubmit = document.querySelector('button');
const usernameInputField = document.querySelector('#username');
const userPasswordInputField = document.querySelector('#password');
const loginMessage = document.querySelector('.login-message');

btnSubmit.addEventListener('click', () => {
 const usernameInput = usernameInputField.value;
 const userPasswordInput = userPasswordInputField.value;

if(usernameInput === 'Jay' && userPasswordInput === 'DFdeath_DamienLSAm_RtyrianpurpleC_sheepFleecia.p'){
    console.log('You passed!');
    loginMessage.textContent = 'YOU PASSED :D!';
    loginMessage.style.color = 'green'; 
} else {
    console.log('BEEP. WRONG!');
    loginMessage.textContent = 'BEEP.WRONG. I am offended >:[.';
    loginMessage.style.color = 'red';
}



});