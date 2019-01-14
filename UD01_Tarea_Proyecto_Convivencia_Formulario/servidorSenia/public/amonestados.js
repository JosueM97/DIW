document.addEventListener("DOMContentLoaded", cargar, false);

function cargar() {

    //EL ID SIEEEEEEEEMPREE ENTRE COMILLAS 
    document.getElementById("selector").addEventListener("change", cambio);
}

function cambio() {
    
    var array = document.getElementsByClassName("alumno");

    for(let i = 0; i < array.length; i++){
        array[i].style.order = 0;
    }
    //EL getElementByID de dentro crea una id a partir de el valor del selector
    //El getElementByID de fuera 
    document.getElementById(document.getElementById("selector").value).style.order = -1;
}