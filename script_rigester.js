let user=document.getElementById("user");
let password=document.getElementById("password");
let email=document.getElementById("email");
let rigester=document.getElementById("reg");
rigester.addEventListener("click",function(e){
    e.preventDefault();
    if(user.value===""||password.value===""||email.value===""){
        alert("There are empty fields that you must fill in")
    }else{
        localStorage.setItem("username",user.value);
        localStorage.setItem("password",password.value);
        localStorage.setItem("email",email.value)
        setTimeout(()=>{
            window.location="notes.html"
        },1500)
    }   
});