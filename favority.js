let log_in = localStorage.getItem("username");
let password = localStorage.getItem("password");
let profile_h3 = document.getElementById("profile_h3");
let welcomUser = document.getElementById("profile");
let hidenElement = document.getElementById("hide")
let Shopi = document.getElementById("shopi")
let allitem = document.getElementById("allitem")
let span = document.querySelector("span")


if (log_in) {
    hidenElement.style.display = "none";
    profile_h3.style.display = "flex";
    welcomUser.innerHTML = "welcome " + log_in

}
var dataStokage = JSON.parse(localStorage.getItem("favority"));
if (dataStokage != null) {
    dataStokage.forEach(function(ele) {
        document.querySelector(".cart").innerHTML +=
            `
        <div class="container">
        <img src="${ele.img}" alt="">
        <div class="info-shopping">
        <h3 onclick="iddetails(${ele.id})">${ele.h3}</h3>
        <p>${ele.p}</p>
        <p>${ele.size}</p>

        </div>
        <div class="action">
       
        </div>

    </div>
    `
    })
}