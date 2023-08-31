const x = document.querySelector('button');
const y = document.querySelectorAll('input');
function reset(){
   const answer=  confirm("Are you sure?");
    answer ? y.forEach(input => input.value = '') : alert('ntg changed');
}
x.addEventListener('click', reset);