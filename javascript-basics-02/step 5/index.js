const i1=document.getElementById('image1');
const i2=document.getElementById('image2');
const i3=document.getElementById('image3');
const i4=document.getElementById('image4');
const i5=document.getElementById('image5');

function changeImage(){
    i1.src="images/image1_2.jpg";
    i2.src="images/image2_2.jpg";
    i3.src="images/image3_2.jpg";
    i4.src="images/image4_2.jpg";
    i5.src="images/image5_2.jpg";
}
function revertImage(){
    i1.src="images/image1.jpg";
    i2.src="images/image2.jpg";
    i3.src="images/image3.jpg";
    i4.src="images/image4.jpg";
    i5.src="images/image5.jpg";
}

i1.addEventListener('mouseover', changeImage);
i1.addEventListener('mouseout', revertImage);
i2.addEventListener('mouseover', changeImage);
i2.addEventListener('mouseout', revertImage);
i3.addEventListener('mouseover', changeImage);
i3.addEventListener('mouseout', revertImage);
i4.addEventListener('mouseover', changeImage);
i4.addEventListener('mouseout', revertImage);
i5.addEventListener('mouseover', changeImage);
i5.addEventListener('mouseout', revertImage);