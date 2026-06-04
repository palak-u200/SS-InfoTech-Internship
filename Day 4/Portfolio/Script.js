/* Typing Animation */

const textArray = [
"Frontend Developer",
"Web Developer",
"Computer Engineer",
"Tech Enthusiast"
];

let index = 0;
let charIndex = 0;

function typeText() {

let currentText = textArray[index];

document.getElementById("typing")
.innerHTML = currentText.substring(0,charIndex);

charIndex++;

if(charIndex > currentText.length){

index++;

charIndex = 0;

if(index >= textArray.length){
index = 0;
}
}

setTimeout(typeText,150);
}

typeText();


/* Scroll Reveal */

function reveal(){

let reveals =
document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight;

let elementTop =
reveals[i].getBoundingClientRect().top;

let visible = 100;

if(elementTop < windowHeight - visible){

reveals[i].classList.add("active");
}
}
}

window.addEventListener("scroll", reveal);
reveal();


/* Skill Bar Animation */

window.addEventListener("load", ()=>{

const bars =
document.querySelectorAll(".progress-bar");

bars.forEach(bar=>{

bar.style.width =
bar.getAttribute("data-width");

});
});