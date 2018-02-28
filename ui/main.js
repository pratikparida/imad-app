console.log('Loaded!');
//to change the content of the webpage
var element = document.getElementById('main-text');
element.innerHTML="New value";


//to move the image on clicking on it
var img = document.getElementById('madi');
var marginleft=0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginleft + 'px' ;
}
img.onclick = function () {
      var interval = setInterval(moveRight, 50);
};
