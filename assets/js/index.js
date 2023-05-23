function sendMail(){
   
    var params ={
       
      name:document.getElementById("name").value ,
      email:document.getElementById("email").value ,
      subject:document.getElementById("subject").value ,
      message:document.getElementById("message").value ,
  
    };
  
  
   const serviceID = "service_w3n7u4f";
   const templateID = "template_i96j42a"
  
   emailjs.send(serviceID,templateID,params)
   .then(
     res =>{
       document.getElementById("name").value = "";
       document.getElementById("email").value = "";
       document.getElementById("subject").value = "";
       document.getElementById("message").value = "";
       
       console.log(res);
       alert("your message send successfully")
     })
     .catch(err=>console.log(err));
    }
     
  
  