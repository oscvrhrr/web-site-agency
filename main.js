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

let next = Array.from(document.getElementsByClassName('next'));
let prev = Array.from(document.getElementsByClassName('prev'));
let projects = document.getElementsByClassName('dynamic-project');
let first = document.getElementsByClassName('first')[0];
let second = document.getElementsByClassName('second')[0];
let third = document.getElementsByClassName('third')[0];
let currentState = 1;

prev.forEach((button) => {
    button.addEventListener('click', () => {
  
        if (currentState === 3) {
            third.classList.add('hidden');
            second.classList.remove('hidden')
            currentState = 2;
        } else if (currentState === 2) {
            second.classList.add('hidden');
            first.classList.remove('hidden');
            currentState = 1;
        } 
        console.log(currentState)
    });
})

next.forEach((button) => {
    button.addEventListener('click', () => {
  
        if (currentState === 1) {
            first.classList.add('hidden');
            second.classList.remove('hidden')
            currentState = 2;
        } else if (currentState === 2) {
            second.classList.add('hidden')
            third.classList.remove('hidden');
            currentState = 3;
        } 
    });
})





