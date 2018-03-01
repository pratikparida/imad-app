//counter code
var button = document.getElementById("counter");
var counter = 0;
button.onclick = function(){
    //create a request object
   var request = new XMLHttpRequest(); 
   
   //capture the response and store it in a variable
   request.onreadystatecange = function(){
     if(request.readyState ===XMLHttpRequest.DONE){
         //take some action
         if(request.status === 200){
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
         //to render the variable in correct span
         counter = counter+1;
         var span = document.getElementById('count');
         span.innerHTML=counter.toString();
         }
     }  
   };
    request.open('GET','http://pratikkumarparida1112.imad.hasura-app.io/counter',true);
    request.send(null);
};