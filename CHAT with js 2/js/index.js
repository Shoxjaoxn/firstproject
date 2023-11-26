
document.getElementsByClassName("send")[0].onclick = () => add()
       
const add = () => {
   let new_ms = document.getElementById("inp").value;
   let new_el = document.createElement("div")
   new_el.classList.add("box")
   new_el.innerText = new_ms
   document.getElementById("list").appendChild(new_el);
   document.getElementById("inp").value = ""
}



document.body.onload = () => {
    console.log("loaded")
}

document.getElementById("inp").addEventListener("input", (event)=> {
    let text = document.getElementById("inp")

    if(text.value.length > 10){
        document.getElementById("inp").classList.add("error")
    }
    else{
        document.getElementById("inp").classList.remove("error")
    }

})


AOS.init();