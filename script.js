let log_in = localStorage.getItem("username");
let password = localStorage.getItem("password");
let profile_h3 = document.getElementById("profile_h3");
let welcomUser = document.getElementById("profile");
let hidenElement = document.getElementById("hide")
let Shopi = document.getElementById("shopi")
let allitem = document.getElementById("allitem")
let span = document.querySelector("span")

let dataStokage = JSON.parse(localStorage.getItem("stokage"));

let bay = 0

let arrid = [];
let itemsNorepet;
let arrid_2;
if (dataStokage != null) {
    arrid_2 = JSON.parse(localStorage.getItem("stokage"));
    itemsNorepet = JSON.parse(localStorage.getItem("stokage"));

    allitem.innerHTML = `<a href="store.html">view all aitem</a>`
    itemsNorepet.forEach(function(w) {
        allitem.innerHTML += `<p>${w.h3} ${w.counter}</p>`
    })

    span.innerHTML = ""
    span.innerHTML = dataStokage.length


} else {
    arrid_2 = []

    itemsNorepet = []
}


/*  
if(dataStokage!=null ){
    dataStokage.forEach(function(ele){
        allitem.innerHTML+=`<p>${ele.h3}</p>`
        span.innerHTML=dataStokage.length
        bay=dataStokage.length
        arrid.push(ele.id)
    })
}
*/
if (log_in) {
    hidenElement.style.display = "none";
    profile_h3.style.display = "flex";
    welcomUser.innerHTML = "welcome " + log_in

}
let data = [{
        id: 1,
        h3: "micro-portable",
        p: "infomation: pc ordinator i3 ram 4g batrie 6 houre prix:99$",
        img: "1.jpg",
        size: "large",
        author:"web",
        counter: 1
    },
    {
        id: 2,
        h3: "phon",
        p: "infomation pc ordinator i3 ram 4g batrie 6 houre prix:99$",
        img: "pc.jpeg",
        size: "large",
        author:"web",
        counter: 1



    },
    {
        id: 3,
        h3: "music-mix",
        p: "infomation pc ordinator i3 ram 4g batrie 6 houre prix:99$",
        img: "05-iphone-11-pro-and-iphone-11-max.jpg",
        size: "large",
        author:"web",
        counter: 1
    },
    {
        id: 4,
        h3: "micro-daoudi",
        p: "infomation pc ordinator i3 ram 4g batrie 6 houre prix:99$",
        img: "nadart.jpg",
        size: "large",
        author:"web",
        counter: 1
    }
]
let dataS;
if (localStorage.getItem("data")) {

    dataS = JSON.parse(localStorage.getItem("data"))

} else {
    dataS = data;
    localStorage.setItem("data", JSON.stringify(dataS))
}

function show(data) {
    data.forEach(function(ele) {
        document.querySelector(".cart").innerHTML +=
            `
        <div class="container" style="border:${ele.author==="me" ? "4px solid tomato":""}">
        <img src="${ele.img}" alt="">
        <div class="info-shopping">
        <h3 onclick="iddetails(${ele.id})">${ele.h3}</h3>
        <p>${ele.p}</p>
        <p>${ele.size}</p>
        ${ele.author==="me" ? `<button id="edit" onclick="editCart(${ele.id})">EDIT TO CART</button>` :""}

        </div>
        <div class="action">
        <button id="add" onclick="addcart(${ele.id})">add to cart</button>
        <i class="fas fa-heart" id=${ele.h3} onclick="addfavo(${ele.id})"></i>
        </div>

    </div>
    `

    });

}
show(dataS)
let favority = JSON.parse(localStorage.getItem("favority"));
if (favority != null)
    favority.forEach(function(e) {
        let stiil = document.getElementById(e.h3)
        stiil.style.color = "red";

    })


function addcart(id) {
    if (log_in) {
        let add;

        dataS.forEach(function(ele) {
            if (ele.id == id) {
                add = ele


            }

        })

        let item = itemsNorepet.find((i) => i.id === id)
        if (item) {
            item.counter += 1

        } else {
            itemsNorepet.push(add)
        }


        arrid_2.push(add)
        console.log(itemsNorepet)
        console.log(arrid_2)
        let dSt = no_repet(arrid_2, id);



        if (arrid.indexOf(add.id) != -2) {
            let strStokage = JSON.stringify(itemsNorepet)
            localStorage.setItem("stokage", strStokage)

            /*
                if(localStorage.getItem("stokage")){
                    arr=JSON.parse(localStorage.getItem("stokage"));
                    
                    arr.push(add)
                    localStorage.setItem("stokage",JSON.stringify(arr))
                    
                    
                }else{
                    arr=[];
                    arr.push(add)
                    localStorage.setItem("stokage",JSON.stringify(arr))
                }
            */
            allitem.innerHTML = `<a href="store.html">view all aitem</a>`
            itemsNorepet.forEach(function(w) {
                allitem.innerHTML += `<p>${w.h3} ${w.counter}</p>`
            })
            bay++
            span.innerHTML = ""
            span.innerHTML = itemsNorepet.length



        } else {
            alert("the item to add befor")
        }
    } else {
        alert("please rgeister new account or login your account")
    }

}

allitem.style.display = "none"
Shopi.addEventListener("click", hideshoping)

function hideshoping() {
    if (allitem.style.display === "none") {
        allitem.style.display = "block"
    } else {
        allitem.style.display = "none"
    }
}

function iddetails(id) {
    localStorage.setItem("detail", id)
    window.location = "details.html"
}

function sea(titel, data) {
    let obj = data.filter(item => item.h3.indexOf(titel) != -1)
    if (obj.length != 0) {
        document.querySelector(".cart").innerHTML = ""
        show(obj)
    } else {
        document.querySelector(".cart").innerHTML = `<h2>no thing</h2>`

    }
}
let hearch = document.getElementById("search");
hearch.addEventListener("keyup", function(e) {
    if (e.target.value.trim() === "") {
        document.querySelector(".cart").innerHTML = ""
        show(dataS)
    } else {
        sea(e.target.value, dataS)
    }
})

function no_repet(arr, id) {
    let new_arr = arr.map((ele) => ele.id).map((ele, i, arr) => arr.indexOf(ele) == i && i)
        .filter(ele => ele !== false).map(ele => arr[ele])
    return new_arr


}



function addfavo(id) {
    if (log_in) {
        let add;

        dataS.forEach(function(ele) {
            if (ele.id == id) {
                add = ele


            }

        })
        if (localStorage.getItem("favority")) {
            console.log("hi")
            let arr = JSON.parse(localStorage.getItem("favority"));

            let item = arr.find(ele => ele.id === id)
            if (item == null) {
                arr.push(add)
                let stiil = document.getElementById(add.h3)
                stiil.style.color = "red";

            } else {
                console.log("hi")
                let stiil = document.getElementById(add.h3)
                stiil.style.color = "red";

            }
            localStorage.setItem("favority", JSON.stringify(arr))



        } else {
            let arr = [];
            arr.push(add);
            localStorage.setItem("favority", JSON.stringify(arr))
            let stiil = document.getElementById(add.h3)
            stiil.style.color = "red";
        }








    }
}
let select = document.getElementById("select");
select.addEventListener("change", filterF);

function filterF() {
    let filter = this.value
    let filterData = JSON.parse(localStorage.getItem("data")).filter(ele => ele.size == filter);
    document.querySelector(".cart").innerHTML = ""
    show(filterData)
    this.value = ""

}
function editCart(id){
    let item=dataS.find(i => i.id==id)
    localStorage.setItem("edit",id)
    setTimeout(()=>{
        window.location="edit.html"
    },1500)
}