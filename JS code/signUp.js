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

//checks the value of the email to see if it matches the email format required 
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

//checks to see if the focus in on the password field and will display the requirement for password 
passIn.onfocus = function(){
    passError.style.display = 'block';
    charCount.style.display = 'block';
    upper.style.display = 'block';
    lower.style.display = 'block';
    num.style.display = 'block';

}

//will not show the requirement list if focus not on password field 
passIn.onblur = function() {
    passError.style.display = 'none';
    charCount.style.display = 'none';
    upper.style.display = 'none';
    lower.style.display = 'none';
    num.style.display = 'none';
  }

// checks content of password once a key is lifted up
passIn.onkeyup = function(){
    //checks length of password 
    if(passIn.value.length >= 8){
        charCheck = true;
        charCount.style.color = 'blue';
    }
    else{
        charCheck= false;
        charCount.style.color = 'black';
    }

    //checks uppercase letters in password 
    if(passIn.value.match(/[A-Z]/g)){
        upperCheck = true;
        upper.style.color = 'blue';
    }
    else{
        upperCheck = false;
        upper.style.color = 'black';
    }
    
    //checks lowercase letters in password 
    if(passIn.value.match(/[a-z]/g)){
        lowerCheck = true;
        lower.style.color = 'blue';
    }
    else{
        lowerCheck = false;
        lower.style.color = 'black';
    }

    //checks number in password 
    if(passIn.value.match(/[0-9]/g)){
        numCheck = true;
        num.style.color = 'blue';
    }
    else{
        numCheck = false;
        num.style.color = 'black';
    }
}




  //if(passIn)
/* function emailCheck(){
   
} */