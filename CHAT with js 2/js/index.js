
document.getElementsByClassName("send")[0].onclick = () => add()
       
const add = () => {
   // Write or update data to Firebase
const newData = {
    username: localStorage.getItem("name"),
    text: document.getElementById("inp").value
  };
  
  firebase.database().ref('/sms').push().set(newData)
    .then(() => {
      console.log('Data successfully written!');
    })
    .catch((error) => {
      console.error('Error writing data: ', error);
    });
   
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


const setMassages = (value, username) => {
    let btn = document.createElement("BUTTON")
    let btn_edit = document.createElement("BUTTON")
    let name = document.createElement("p")
    btn_edit.innerText = "edit"
    btn_edit.classList.add("edit")
    btn.innerText = "delete"
    btn.classList.add("delete")
    btn.onclick = () => delete_element(event)
    btn_edit.onclick = () => edit(event)
   let new_ms = value;
   let new_el = document.createElement("div")
   
   new_el.classList.add("box")
   name.innerText = username
   new_el.appendChild(name)
   new_el.innerHTML = new_el.innerHTML +  `<p> ${new_ms} </p>`
   
   new_el.appendChild(btn)
   new_el.appendChild(btn_edit)
   document.getElementById("list").appendChild(new_el);
   document.getElementById("inp").value = ""

   
}


const firebaseConfig = {
    apiKey: "AIzaSyCrRXr3NRukXFOoOcVITSo-LrkwLjLnXE8",
    authDomain: "students-7d105.firebaseapp.com",
    projectId: "students-7d105",
    storageBucket: "students-7d105.appspot.com",
    messagingSenderId: "874521299674",
    appId: "1:874521299674:web:a203f351014d5acee8b3e3",
    measurementId: "G-GV2VNNC9FT"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  const database = firebase.database();


  const databaseRef = firebase.database().ref('/sms');
    databaseRef.once('value')
    .then((snapshot) => {
    const data = snapshot.val();
    console.log(data); 
    
    // setMassages(data.text, data.username)// Use your data here
    })
  .catch((error) => {
    console.error(error);
  });