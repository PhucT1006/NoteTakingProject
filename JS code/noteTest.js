var L = document.getElementById('Load');



L.addEventListener('click', ()=>{
    pop();
})

async function pop(){
    var box = document.getElementById('popUp');
    try{
        let response = await fetch('../HTML code/cornell.html')
        box.innerHTML = await response.text();
    }
    catch (err) {
        console.log('Fetch error:' + err); //Error handling
      }
}
    