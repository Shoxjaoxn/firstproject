
document.getElementsByClassName("send")[0].onclick = () => add()
       
const add = () => {
    let btn = document.createElement("BUTTON")
    let btn_edit = document.createElement("BUTTON")
    let name = document.createElement("p")
    btn_edit.innerText = "edit"
    btn_edit.classList.add("edit")
    btn.innerText = "delete"
    btn.classList.add("delete")
    btn.onclick = () => delete_element(event)
    btn_edit.onclick = () => edit(event)
   let new_ms = document.getElementById("inp").value;
   let new_el = document.createElement("div")
   
   new_el.classList.add("box")
   name.innerText = localStorage.getItem("name")
   new_el.appendChild(name)
   new_el.innerHTML = new_el.innerHTML +  `<p> ${new_ms} </p>`
   
   new_el.appendChild(btn)
   new_el.appendChild(btn_edit)
   document.getElementById("list").appendChild(new_el);
   document.getElementById("inp").value = ""

   
}
 
const edit = (event) => {
    console.log(event.target.parentElement.getElementsByTagName("p")[0].setAttribute("contenteditable","true"))
}
 const delete_element = (event) => {
    event.target.parentElement.remove()
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