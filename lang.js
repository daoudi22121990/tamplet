let ar=document.getElementById("ar")
let en=document.getElementById("en")
ar.addEventListener("click",function(){
    document.documentElement.setAttribute("dir","rtl")
    localStorage.setItem("lan","rtl")
})
en.addEventListener("click",function(){
    document.documentElement.setAttribute("dir","ltr")
    localStorage.setItem("lan","ltr")
})