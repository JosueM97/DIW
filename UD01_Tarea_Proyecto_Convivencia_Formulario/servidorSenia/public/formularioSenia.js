function onSubmit( form ){
    
    var data = JSON.stringify( $(form).serializeArray() ); //  <-----------
    console.log("Saluda");
    console.log( data );
    return false; //don't submit
  }


  function mostrarLleu(){

    document.getElementById("formulario1").style.visibility="visible";
    document.getElementById("formulario2").style.visibility="hidden";
  }

  function mostrarGreu(){
    document.getElementById("formulario2").style.visibility="visible";
    document.getElementById("formulario1").style.visibility="hidden";
  }
