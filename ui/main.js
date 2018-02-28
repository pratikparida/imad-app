console.log('Loaded!');
//to change the content of the webpage
var element = document.getElementById('main-text');
element.innerHTML="New value";
//to move the image on clicking on it
var img = document.getElementById('madi');
marginleft=0;
function moveright(){
    marginleft=marginleft+1;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function (){
    
    var interval= setInterval(moveright,50);
}
