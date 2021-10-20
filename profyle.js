let informe=document.querySelector(".informe")
/*
let img=document.getElementById("img_profile")
let username=document.getElementById("user_name_profile")
let email=document.getElementById("email_profile")
let shopping_length=document.getElementById("length")
let edit=document.getElementById("edit");
*/
let user=localStorage.getItem("username")
let email=localStorage.getItem("email")
let len=JSON.parse(localStorage.getItem("stokage")).length
console.log(len)
function show_information_profile(){
    informe.innerHTML=
    `
        <img src="daoudi.JPG" alt="" id="img_profile">
        <p id="user_name_profile">${user}</p>
        <p id="email_profile">${email}</p>
        <p id="length" >${len}</p>
        <button id="edite" onclick="edite()">edit profile</button>
    `


}
show_information_profile()
function edite(){
    setTimeout(()=>{
        window.location="edit_profile.html"
    },500)
}