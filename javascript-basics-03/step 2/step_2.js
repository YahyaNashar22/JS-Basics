let show = document.querySelector('#show');
let hide = document.querySelector('#hide');
let para = document.querySelector('#texte');

function showHide(e){
    if (e.target==hide){para.style.display="none"}
    else if (e.target==show){para.style.display="initial"}
}
show.addEventListener('click', showHide);
hide.addEventListener('click', showHide);

