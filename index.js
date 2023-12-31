const textE1 = document.getElementById("text")
const total =document.getElementById("counter")
const ledtcounter = document.getElementById("left-counter")

textE1.addEventListener("keyup",()=>{
    upcounter()
})

function upcounter(){
   total.innerText = textE1.Value.length
   ledtcounter.innerText = textE1.getAttribute("maxlength") - textE1.value.length


}