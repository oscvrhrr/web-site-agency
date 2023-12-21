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
let activeState = document.getElementsByClassName('active--state')[0];
let initialState = document.getElementsByClassName('initial--state')[0];

prev.forEach((button) => {
    button.addEventListener('click', () => {
  
        if (currentState === 3) {
            third.classList.add('hidden');
            second.classList.remove('hidden')
            currentState = 2;
        } else if (currentState === 2) {
            second.classList.add('hidden');
            first.classList.remove('hidden');
            first.classList.add('active--state');
            currentState = 1;
        } 
        console.log(currentState)
    });
})

next.forEach((button) => {
    button.addEventListener('click', () => {
  
        if (currentState === 1) {
            first.classList.add('hidden');
            first.classList.add('initial--state');
            second.classList.remove('hidden')
            second.classList.add('active--state');
            currentState = 2;
        } else if (currentState === 2) {
            second.classList.add('hidden')
            third.classList.remove('hidden');
            third.classList.add('active--state');
            currentState = 3;
        } 
    });
})





