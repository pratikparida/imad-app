//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    //create a request object
   var request = new XMLHttpRequest(); 
   
   //captuer the response and store it in a variable
   request.onreadystatecange = function(){
     if(request.readyState ===XMLHttpRequest.DONE){
         //take some action
         if(Request.status === 200){
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
         }
     }  
   };
    request.open('GET','http://pratikkumarparida.imad.hasura-app.io/counter',true);
    request.send(null);
};