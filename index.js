const txtColor = document.getElementById("color");
const btnEnviar = document.getElementById("enviar");
const div = document.getElementById("div");
const parrafo = document.getElementById("parrafo");

txtColor.addEventListener("change", cambiarColor);

function cambiarColor() {
    div.style = "background:"+txtColor.value;
    parrafo.innerText = "El valor hexadecimal del color es: "+txtColor.value;
}