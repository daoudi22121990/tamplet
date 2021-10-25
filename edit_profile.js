
let user=localStorage.getItem("username")
let email=localStorage.getItem("email")
let len=JSON.parse(localStorage.getItem("stokage")).length
let titel = document.getElementById("titele");
let des = document.getElementById("des");
let sizeoption = document.getElementById("select");
let add = document.getElementById("add");
let upload = document.getElementById("upload_image");
let Url_image;
titel.value=user
des.value=email

upload.addEventListener("change",upload_img)
add.addEventListener("click",function edit(e){
    e.preventDefault()
    
   if (titel.value=="" || des.value=="" || upload.value==""){
       alert("please full all fields")
   }

    else{
        localStorage.setItem("username",titel.value)
        localStorage.setItem("email",des.value)
        localStorage.setItem("img_profyle",Url_image)
        setTimeout(() => {
            window.location="notes.html"
            
        }, 500);
    }
   

})
function upload_img(){
   
    let file=this.files[0]
    if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
       
        url_64(file)
        
        
        return;


    } else {
        alert("this file not image")
    }
}
function url_64(file){
    
    let reader= new FileReader
    reader.readAsDataURL(file)
    reader.onload=function(){
        Url_image=reader.result
        
        //console.log(reader.result)
    }
    
    
    
    reader.onerror=function(){
        alert("errrrrrrrror")
    }
}
