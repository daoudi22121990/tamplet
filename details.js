let log_in = localStorage.getItem("username");
let password = localStorage.getItem("password");
let profile_h3 = document.getElementById("profile_h3");
let welcomUser = document.getElementById("profile");
let hidenElement = document.getElementById("hide");
let show = document.querySelector(".containe")
let dataStokage = JSON.parse(localStorage.getItem("data"))




if (log_in) {
    hidenElement.style.display = "none";
    profile_h3.style.display = "flex";
    welcomUser.innerHTML = "welcome " + log_in
}

function showDetails() {
    if (localStorage.getItem("detail")) {
        let item = dataStokage.find(item => item.id == localStorage.getItem("detail"))

        console.log(item)

        show.innerHTML = `
        <img src=${item.img} alt="" id ="imgd">
        <div>
        <h3>${item.h3}</h3>
        <span>descrption: ${item.p}</span><br>
        <span>size: ${item.size}</span><br>
        <h4>Qouantity:${item.counter}</h4>

        </div> 
        `


    }
}
showDetails()