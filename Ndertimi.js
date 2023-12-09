function validatelogin_forma{
    var username = 
    document.getElementById("fname")
    .value;
    var password =
    document.getElementById("lname").value;

   if(username ===""|| password === ""){
    alert("Please fill in all fields");
    return false;

   }
   return true;

}

  function validateregister_form(){
    var username =
    document.getElementById("register1")value;
    var email =
    document.getElementById("register2")value;
    var password = 
    document.getElementById("register3")value;

    if(username === ""|| email === ""|| password === ""){
    alert("Please fill in all fields");
       return false;
   }
       return true;
  }
      
// var attempt = 3;

// attempt --; 

// document.getElementsByClassName("login_forma").disabled = true;
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// function validate(){
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if ( username == "Formget" && password == "formget#123"){
//     alert ("Login successfully");
//     window.location = "success.html"; 
//     return false;
//     }
//     else{
//     attempt --;
//     alert("You have left "+attempt+" attempt;");
    
//     if( attempt == 0){
//     document.getElementById("username").disabled = true;
//     document.getElementById("password").disabled = true;
//     document.getElementById("submit").disabled = true;
//     return false;
//     }
//     }
//     }

//     function registration()
//     {

//     var passid = document.registration.password;
//     var uname = document.registration.username;
//     var uemail = document.registration.email;
    
   
//     {
//     if(passid_validation(password,7,12))
//     {
//     if(allLetter(username))
//     {
    
    
   
//     if(ValidateEmail(email))
//     {
   
//     } 
    
    
    
//     }
//     }
//     }
//     return false;
//     }
