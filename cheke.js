let log_in =localStorage.getItem("username");
let profile_h3 = document.getElementById("profile_h3");
let welcomUser = document.getElementById("profile");
let hidenElement = document.getElementById("hide")


if (log_in) {
    hidenElement.style.display = "none";
    profile_h3.style.display = "flex";
    welcomUser.innerHTML = "welcome " + log_in

}