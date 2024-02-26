import supabase from "./configClient.mjs" // importing the supabase client 

var sub = document.getElementById("button"); // value of the button element on form 


// live reloading - once changes are made in the code this will refresh the page to implement the new code 
//https://bobbyhadz.com/blog/a-listener-indicated-asynchronous-response-by-returning-true
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  return true 
})

// function to call the signUp function
sub.addEventListener( 'submit', ()=>{
  signUp();
}) 

//signUp function to call the auth.signUp() from supabase to sign up a user 
async function signUp(){
// get value from the email and password input box 
var em = document.getElementById("Email"); 
var pas = document.getElementById("Password");

let { data, error } = await supabase.auth.signUp({
  //get values and then pass into the email and password box to create a user 
  email:em.value,
  password: pas.value,
})
if (error) console.log('Signup error', error); // console.log the error
}



/*
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const formData = new FormData(form);

  fetch('https://httpbin.org/post',{
    medthod: "POST",
    body: formData,
  })
  .then(res => res.json());
  .then(console.log(res)); 
  console.log(formData.get('Email'));
}) 
 */
/* const signUp = async ()=>{
  const { data, error } = await supabase.auth.signUp({
    email: '',
    password: '',
      options: {
      redirectTo: 'NoteTakingProject\HTML code\HomePage.html'
    }  
  });
  if (error) console.log('Signup error', error);
} */



   
      
       
   
  