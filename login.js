let user=document.getElementById("user");
let password=document.getElementById("password");
let btnLogin=document.getElementById("login");
let getUser=localStorage.getItem("username");
let getPassword=localStorage.getItem("password")
btnLogin.addEventListener("click",function(e){

    e.preventDefault()
    console.log(user.value);
    console.log(password.value);
    console.log(getUser);
    console.log(getPassword);
    
    if(user.value==="" || password.value===""){
        alert("user name or password is worng");
    }else if(getUser===user.value && getPassword===password.value){
        
        setTimeout(() => {
            window.location="notes.html"
        },1500);
    }else{
        alert(" no account in information")
        
    }
})
