document.addEventListener("DOMContentLoaded", cargar, false);
function cargar() {

    var arrayFlechas = document.getElementsByClassName("flecha");

    var i;
    
    for (i = 0; i < arrayFlechas.length; i++){
        arrayFlechas[i].addEventListener("click",desplegar);
    }
}

function desplegar(){
    
}