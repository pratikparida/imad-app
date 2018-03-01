//counter code
var button = document.getElementById('counter');
 var span = document.getElementById('count');
button.onclick = function(){
  //make a request to counter endpoint
  var request = new XMLHttpRequest(); 
  
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take some action
         if(request.status === 200){
             var counter =request.responseText;
        
             span.innerHTML=counter.toString();
         } 
      }
  };
  
  request.open('GET','http://pratikkumarparida1112.imad.hasura-app.io/counter',true);
  request.send(null);
};
//submit name
