var emailError = document.getElementById("emailError");
var passError = document.getElementById("passError");
var emailIn = document.getElementById("Email");
var passIn = document.getElementById("Password");

var charCount = document.getElementById("characters");
var upper = document.getElementById("upper");
var lower = document.getElementById("lower");
var num = document.getElementById("number");

var charCheck = false;
var upperCheck =  false;
var lowerCheck = false;
var numCheck = false;

const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

if(emailIn.value.match(emailReg)){
    emailError.style.display = 'none';
}
else if(emailIn.value == ""){
    emailError.style.display = 'none';
}
else{
    emailError.style.display = 'block';
    passIn.style.marginTop = '4.7rem';
}


// make sure to write js code later to check when the user submits to make sure that the email and pass fits the requirements that we created 

passIn.onfocus = function(){
    passError.style.display = 'block';
    charCount.style.display = 'block';
    upper.style.display = 'block';
    lower.style.display = 'block';
    num.style.display = 'block';

}
passIn.onblur = function() {
    passError.style.display = 'none';
    charCount.style.display = 'none';
    upper.style.display = 'none';
    lower.style.display = 'none';
    num.style.display = 'none';
  }


  //if(passIn)
/* function emailCheck(){
   
} */