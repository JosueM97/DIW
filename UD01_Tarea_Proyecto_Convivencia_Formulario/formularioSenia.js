function onSubmit( form ){
    
    var data = JSON.stringify( $(form).serializeArray() ); //  <-----------
    console.log( data );
    return false; //don't submit
  }


  function mostrarLleu(){

    document.getElementById("formulario1").style.visibility="visible";
    
  }

  function ocultarLleu(){
    document.getElementById("formulario1").style.visibility="hidden";
  }