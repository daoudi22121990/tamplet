let titel = document.getElementById("titele");
let des = document.getElementById("des");
let sizeoption = document.getElementById("select");
let Edit = document.getElementById("add");
let upload = document.getElementById("upload_image");
let Url_image;
let datas=JSON.parse(localStorage.getItem("data"))
let idEdit=JSON.parse(localStorage.getItem("edit"))
let item=datas.find(ele =>ele.id==idEdit)

titel.value=item.h3
des.value=item.p
sizeoption.value=item.size
upload.addEventListener("change", imageUpload);
Edit.addEventListener("click", function(e) {
    e.preventDefault();
    let newdata = JSON.parse(localStorage.getItem("data")).map(function(ele){
        if(ele.id===item.id){
            ele.id=item.id
            ele.h3=titel.value
            ele.img=Url_image
            ele.size=sizeoption.value
            return ele
        
        }else{
            return ele
        }
        
    })
  

  
    localStorage.setItem("data", JSON.stringify(newdata));
    setTimeout(() => {
        window.location = "notes.html"
    }, 1500)




    
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
