
function cargar() {
    document.getElementById("content").addEventListener("dragover", allowDrop);
    document.getElementById("content").addEventListener("drop", drop);



    var vectorJugadores = document.getElementsByClassName("drags");

    for (let index = 0; index < vectorJugadores.length; index++) {
        vectorJugadores[index].addEventListener("dragstart", drag);
    }

    var vectorEquipos = document.getElementsByClassName("contenedor");

    for (let index = 0; index < vectorEquipos.length; index++) {
        vectorEquipos[index].addEventListener("dragover",allowDrop);
        vectorEquipos[index].addEventListener("drop",drop);
        
    }

}

function allowDrop(ev) {
 console.log("probando");
    //Permitir que reciba algún elemento
    if(ev.target.getAttribute("draggable") == "true")
        ev.dataTransfer.dropEffect = "none";
    else{
        ev.dataTransfer.dropEffect = "all";
    }


    ev.preventDefault();

}

function drag(ev) {

    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {

    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();

    //Guardamos el elemento, llamado "text" en una variable.
    var data = ev.dataTransfer.getData("text");

    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    ev.target.appendChild(document.getElementById(data));

}
window.addEventListener("load", cargar);