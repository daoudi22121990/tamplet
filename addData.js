let titel = document.getElementById("titele");
let des = document.getElementById("des");
let sizeoption = document.getElementById("select");
let add = document.getElementById("add");
add.addEventListener("click", function(e) {
    e.preventDefault();
    let newdata = JSON.parse(localStorage.getItem("data"))
    let new_obj = {
        id: newdata.length + 1,
        h3: titel.value,
        p: des.value,
        size: sizeoption.value,
        counter: 1
    }
    newdata.push(new_obj);
    localStorage.setItem("data", JSON.stringify(newdata));





})