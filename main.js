const navMenu = document.querySelector(".nav-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossMenu = document.querySelector(".cross-menu");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
  crossMenu.style.visibility = "visible";
  hamburgerMenu.style.visibility = "hidden";
});

crossMenu.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
  crossMenu.style.visibility = "hidden";
  hamburgerMenu.style.visibility = "visible";
});

let designSection = document.getElementsByClassName("design-section")[0];
let aboutTitle = document.getElementsByClassName("design-section__title")[0];
let aboutDesc = document.getElementsByClassName("design-section__desc")[0];
let aboutBtn = document.getElementsByClassName("underlined-btn")[0];

window.addEventListener("scroll", () => {
  if (designSection.getBoundingClientRect().top <= 0) {
    aboutTitle.classList.add("design-section__title--active");
    aboutDesc.classList.add("design-section__desc--active");
    aboutBtn.classList.add("underlined_btn--active");
  }
});

let approachSection = document.getElementsByClassName("approach-section")[0];
let approachTitle = document.getElementsByClassName(
  "approach-section__title"
)[0];
let liOne = document.getElementsByClassName("li-one")[0];
let liTwo = document.getElementsByClassName("li-two")[0];
let liThree = document.getElementsByClassName("li-three")[0];

window.addEventListener("scroll", () => {
  if (approachSection.getBoundingClientRect().top <= 0) {
    approachTitle.classList.add("approach-section__title--active");
    liOne.classList.add("li-one--active");
    liTwo.classList.add("li-two--active");
    liThree.classList.add("li-three--active");
  }
});

let next = Array.from(document.getElementsByClassName("next"));
let prev = Array.from(document.getElementsByClassName("prev"));
let projects = document.getElementsByClassName("dynamic-project");
let first = document.getElementsByClassName("first")[0];
let second = document.getElementsByClassName("second")[0];
let third = document.getElementsByClassName("third")[0];
let currentState = 1;

prev.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentState === 3) {
      third.classList.add("hidden");
      second.classList.remove("hidden");
      currentState = 2;
    } else if (currentState === 2) {
      second.classList.add("hidden");
      first.classList.remove("hidden");
      first.classList.add("active--state");
      currentState = 1;
    }
    console.log(currentState);
  });
});

next.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentState === 1) {
      first.classList.add("hidden");
      first.classList.add("initial--state");
      second.classList.remove("hidden");
      second.classList.add("active--state");
      currentState = 2;
    } else if (currentState === 2) {
      second.classList.add("hidden");
      third.classList.remove("hidden");
      third.classList.add("active--state");
      currentState = 3;
    }
  });
});
