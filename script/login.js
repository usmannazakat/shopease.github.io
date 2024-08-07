const loginForm = document.querySelector('.login');
const signUpForm = document.querySelector('.sign-up')
function showLogin()
{
    loginForm.style.display = 'block';
    signUpForm.style.display = 'none';
}

function hideLogin()
{
    loginForm.style.display = 'none';
    signUpForm.style.display = 'block';
}