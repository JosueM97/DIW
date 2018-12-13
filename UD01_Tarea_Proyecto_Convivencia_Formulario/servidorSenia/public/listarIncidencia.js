//document.addEventListener("DOMContentLoaded", cargar, false);

var arraySubDivs=[];
var arrayFlechas=[];

function cargar() {
    console.log("EEEE");
    arrayFlechas = document.getElementsByClassName("flecha");
    arraySubDivs = document.getElementsByClassName("subDiv");


    console.log(arrayFlechas.length);

    for (var i = 0; i < arrayFlechas.length; i++){
        console.log(i);
        arrayFlechas[i].addEventListener("click",desplegar.bind(this,i));
        
    }
}

function desplegar(cambiar){
    console.log(cambiar);

    var estiloActual = arraySubDivs[cambiar].style.display;

    if(estiloActual == "none"){
        arraySubDivs[cambiar].style.display="block";
    }else{
        arraySubDivs[cambiar].style.display="none";
    }
}