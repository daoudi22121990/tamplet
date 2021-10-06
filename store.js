let log_in=localStorage.getItem("username");
let password=localStorage.getItem("password");
let profile_h3=document.getElementById("profile_h3");
let welcomUser=document.getElementById("profile");
let hidenElement=document.getElementById("hide")
let Shopi=document.getElementById("shopi")
let allitem=document.getElementById("allitem")
let span=document.querySelector("span")


if(log_in){
    hidenElement.style.display="none";
    profile_h3.style.display="flex";
    welcomUser.innerHTML="welcome "+log_in

}
var dataStokage=JSON.parse(localStorage.getItem("stokage"))



function showstore(){
  bay=0
  dataStokage.forEach(function(e){
    bay+=e.counter
    
  })
 
  document.querySelector(".cart").innerHTML=""
  allitem.innerHTML=""
  dataStokage.forEach(function(ele){
      

      document.querySelector(".cart").innerHTML+=
      `
      <div class="container">
      <img src="${ele.img}" alt="">
      <div class="info-shopping">
        <h3>${ele.h3}</h3>
        <p>${ele.p}</p>
        <p>Quantity:${ele.counter}</p>

      </div>
      <div class="action">
        <button id="add" onclick="removeCart(${ele.id})">remove to cart</button>
        
      </div>

    </div>
    ` 
      allitem.innerHTML+=`<p>${ele.h3} ${ele.counter}</p>`
      
      
  })
  span.innerHTML=dataStokage.length
}
showstore()  
allitem.style.display="none"

Shopi.addEventListener("click",hideshoping)
function hideshoping(){
    if(allitem.style.display==="none"){
        allitem.style.display="block"
    }else{
        allitem.style.display="none"
    }


}

function removeCart(id){
  
  let obj=dataStokage.find(item=>item.id===id)
  
  

  if (obj.counter>1){
  
    obj.counter-=1
    
    localStorage.setItem("stokage",JSON.stringify(dataStokage))
    showstore()

  }else{
    console.log("hi")
    dataStokage=dataStokage.filter(item=>item.id!==id)
    localStorage.setItem("stokage",JSON.stringify(dataStokage))
    showstore()

  }
  
  
 
  
  /*
  dataStokage=dataStokage.filter((item)=> item.id!==id);
  localStorage.setItem("stokage",JSON.stringify(dataStokage))
  dataStokage=JSON.parse(localStorage.getItem("stokage"))
  if(dataStokage.length===0){
    allitem.style.display="none"
    span.innerHTML=0
  }
  */
  //showstore()
 
  
  

  
  

}
//console.log(data)

