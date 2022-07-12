const message = document.querySelector("#msj")
const warning = document.querySelector(".warning")
const btnClick = document.querySelector(".btn")

btnClick.addEventListener("click",()=>{
   if(message.value != ""){
      const createImg = document.createElement("img")
      createImg.src = "twistter.jpg"
      const createTitulo = document.createElement("p")
      const createBold = document.createElement("b")
      createTitulo.appendChild(createBold)
      createBold.textContent = "Usuario escribió:"
      const createMsj = document.createElement("p")
      createMsj.textContent = message.value
      const createDiv1 = document.createElement("div")
      createDiv1.classList.add("cardMsj__img")
      createDiv1.appendChild(createImg)
      const createDiv2 = document.createElement("div")
      createDiv2.classList.add("cardMsj__info")
      createDiv2.appendChild(createTitulo)
      createDiv2.appendChild(createMsj)
      const newMsj = document.createElement("div")
      newMsj.classList.add("cardMsj")
      newMsj.appendChild(createDiv1)
      newMsj.appendChild(createDiv2)
      
      const newCard = document.querySelector(".wrapper")
      newCard.insertBefore(newMsj, newCard.children[1])
   
      message.value = ""
      warning.textContent = ""
   } else{
      warning.textContent = "Ey! no puedes enviar mensajes vacíos."
   }
})