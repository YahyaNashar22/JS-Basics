let makeGreen = document.querySelector('.green');
let makeRed = document.querySelector('.red');
let makeBlue = document.querySelector('.blue');
let texty = document.querySelector('#text');

makeGreen.addEventListener('click',()=>texty.style.color="green");
makeRed.addEventListener('click',()=> texty.style.color="red");
makeBlue.addEventListener('click',()=> texty.style.color="blue");
