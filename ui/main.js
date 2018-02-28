console.log('Loaded!');
//to change the content of the webpage
var element = document.getElementById('main-text');
element.innerHTML="New value";
//to move the image on clicking on it
var img = document.getElementbyId('madi');
img.onclick=function (){
    img.style.marginLeft='100px';
}
