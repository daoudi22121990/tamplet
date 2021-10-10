let titel = document.getElementById("titele");
let des = document.getElementById("des");
let sizeoption = document.getElementById("select");
let add = document.getElementById("add");
let upload = document.getElementById("upload_image");
let Url_image;

upload.addEventListener("change", imageUpload);
add.addEventListener("click", function(e) {
    e.preventDefault();
    let newdata = JSON.parse(localStorage.getItem("data"))
    let new_obj = {
        id: newdata.length + 1,
        h3: titel.value,
        p: des.value,
        img: Url_image,
        size: sizeoption.value,
        counter: 1
    }
    newdata.push(new_obj);
    localStorage.setItem("data", JSON.stringify(newdata));
    setTimeout(() => {
        window.location = "notes.html"
    }, 1500)

    titel.value = "";
    des.value = ""
    sizeoption.value = ""
    upload.value = ""





})

function imageUpload() {
    let file = this.files[0]


    if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {

        url_64(file)

        return;


    } else {
        alert("this file not image")
    }

}

function url_64(file) {
    let reader = new FileReader
    reader.readAsDataURL(file)
    reader.onload = function() {
        Url_image = reader.result
    }
    reader.onerror = function() {
        alert("error")
    }
}