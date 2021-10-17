let data=JSON.parse(localStorage.getItem("data"))
let meData=data.filter(item=>item.author==="me")
function show(data) {
    document.querySelector(".cart").innerHTML =""
    data.forEach(function(ele) {
        
        document.querySelector(".cart").innerHTML +=
            `
        <div class="container" >
        <img src="${ele.img}" alt="">
        <div class="info-shopping">
        <h3 onclick="iddetails(${ele.id})">${ele.h3}</h3>
        <p>${ele.p}</p>
        <p>${ele.size}</p>
        ${ele.author==="me" ? `<button id="edit" onclick="editCart(${ele.id})">EDIT TO CART</button><br>` :""}
        ${ele.author==="me" ? `<button id="edit" onclick="deletmyCart(${ele.id})"> DELET MY CART</button>`:""}

        </div>
        <div class="action">
       
        
        </div>

    </div>
    `

    });

}
show(meData)
function editCart(id){
    let item=meData.find(i => i.id==id)
    localStorage.setItem("edit",id)
    setTimeout(()=>{
        window.location="edit.html"
    },1500)
}
function deletmyCart(id){
    let item=data.filter(i => i.id!=id)
    localStorage.setItem("data",JSON.stringify(item))
    meData=item.filter(item=>item.author==="me")
    
    
    show(meData)



}