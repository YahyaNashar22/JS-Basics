var output = document.createElement('div');
output.style.width="200px";
output.style.height="100px";
output.style.border="solid 1px";
output.style.margin="10px 0 0 10px";
document.body.appendChild(output);
var btn = document.createElement('button');
btn.style.height="50px";
btn.style.width="100px";
btn.innerHTML="press me";
btn.style.color="black";
btn.style.margin="10px";
document.body.appendChild(btn);
const inp = document.querySelector('#name');
function show(){
    output.innerHTML = inp.value;
}
btn.addEventListener('click',show);