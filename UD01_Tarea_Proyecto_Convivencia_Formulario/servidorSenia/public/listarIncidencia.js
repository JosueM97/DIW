//document.addEventListener("DOMContentLoaded", cargar, false);

var arraySubDivs=[];
var arrayFlechas=[];

function cargar() {
    console.log("EEEE");
    arrayFlechas = document.getElementsByClassName("");
    arraySubDivs = document.getElementsByClassName("subDiv");


    console.log(arrayFlechas.length);

    for (var i = 0; i < arrayFlechas.length; i++){
        console.log(i);
        arrayFlechas[i].addEventListener("click",desplegar());
        
    }
}

function desplegar(){
    console.log("AAA");

    var estiloActual = arraySubDivs[cambiar].style.display;

    if(estiloActual == "none"){
        arraySubDivs[cambiar].style.display="block";
    }else{
        arraySubDivs[cambiar].style.display="none";
    }
}