


let input=document.getElementById("input1")
let searchbtn=document.querySelector("#search1")
searchbtn.addEventListener("click",()=>{
    console.log("button pressed")
    sendapirequest()
    
}) 

async function sendapirequest(){
    
    let response=await fetch(`https://official-joke-api.appspot.com/random_joke`)

console.log(response)
let data=await response.json();
console.log(data)
useapidata(data)
}





  function useapidata(data)
  {       document.querySelector("#content").innerHTML=`
     
     

  <div class="jumbotron">
  
  <p class="lead" style="font-family: 'Hachi Maru Pop', cursive;">${data.setup}</p>
  <hr class="my-4">
  <p  style="font-family: 'Hachi Maru Pop', cursive;">${data.punchline}</p>
 
</div>
    
    

    
     `

     
  }  