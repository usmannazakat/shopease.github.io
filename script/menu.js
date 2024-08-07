const navBar = document.querySelector('.js-nav');
const navSide = document.querySelector('.nav-side');
const leftBtn = document.querySelector('.l-btn');
const rightBtn = document.querySelector('.r-btn');
const slider = document.querySelector(".slider");
const slideBtn = document.querySelector(".slide-btn");
const cartPrice = document.querySelector('.cart-items-price');


function showNav()
{
    navBar.style.left = '0';
    navSide.style.display = '';
    document.body.style.overflow = 'hidden';
    leftBtn.style.display = 'none';
    rightBtn.style.display = 'none';
    slider.style.display = "none";
    slideBtn.style.display = "none";
    cartPrice.style.display = 'none';
}
function hideNav()
{
    navBar.style.left = '-320px';
    document.body.style.overflow = 'auto';
    navSide.style.display = 'none';
    leftBtn.style.display = '';
    rightBtn.style.display = '';
    slider.style.display = "";
    slideBtn.style.display = "";
    cartPrice.style.display = '';
}


