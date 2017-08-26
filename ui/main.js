//counter code
var button= document.getElementById('counter');


button.onclick = function(){
   // create a request
   var request = new XMLHttpRequest();
   
   //capture the response and store it in a variable
   
   request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE){
           if(request.status ===200){
               var counter=request.responseText;
               var span = document.getElementById('count');
               span.innerHTML=counter.toString();
               
           }
       }
   };
   
   request.open('GET','http://samalashivaprasad68.imad.hasura-app.io/counter',true);
   request.send=(null);
};
 var nameinput = document.getElementById('name');
 var name = nameinput.value;
 var submit = document.getElementById('submitbtn');
 submit.onclick = function(){
     //amkes the request to the server 
     
     //and renders the list of names
     var names = ['name1','name2','name3','name4'];
     var list ='';
     for(var i=0;i<names.Length;i++)
     {
         list += '<li>' + names[i] + '</li>';
     }
     
 }
 var ul = document.getElementById('namelist');
 