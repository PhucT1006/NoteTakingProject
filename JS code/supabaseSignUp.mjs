import supabase from "./configClient.mjs"

var sub = document.getElementById("button");


// live reloading
//https://bobbyhadz.com/blog/a-listener-indicated-asynchronous-response-by-returning-true
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  return true 
})


sub.addEventListener( 'submit', ()=>{
  signUp();
}) 

async function signUp(){
  var em = document.getElementById("Email");
var pas = document.getElementById("Password");

let { data, error } = await supabase.auth.signUp({
  email:em.value,
  password: pas.value,
})
if (error) console.log('Signup error', error);
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



   
      
       
   
  