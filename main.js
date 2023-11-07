const navMenu = document.querySelector('.nav-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const crossMenu = document.querySelector('.cross-menu');


hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
    crossMenu.style.visibility = 'visible';
    hamburgerMenu.style.visibility = 'hidden';
});


crossMenu.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
    crossMenu.style.visibility = 'hidden';
    hamburgerMenu.style.visibility = 'visible';
});


const projectOne = document.querySelector('.pro-one');
const projectTwo = document.querySelector('.pro-two');
const projectThree = document.querySelector('.pro-three');
const prevBtn = document.querySelector('.prev');
const nxtBtn = document.querySelector('.next');





