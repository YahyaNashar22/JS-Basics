const images=document.querySelectorAll('img');
images.forEach((i)=>{
    i.addEventListener('mouseover',(e)=>{e.target.setAttribute('src',`images/${i.id}_2.jpg`)})
    i.addEventListener('mouseout',(e)=>{e.target.setAttribute('src',`images/${i.id}.jpg`)})
})

