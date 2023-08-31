let pass = document.querySelector('#password');
let conf = document.querySelector('#confirmation');
let btn = document.querySelector('button');
let borders = document.querySelectorAll('input')
function noMatch(){
    if (pass.value != conf.value){borders[0].style.borderColor="red";
    borders[1].style.borderColor="red"
}
    else {borders[0].style.borderColor="green";borders[1].style.borderColor="green"}
}
btn.addEventListener('click', noMatch);