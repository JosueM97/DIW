$.getJSON("http://localhost:3000/incidencias", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    console.log(key + val.nombreAlumno);

    items.push("<div class=divAzul>");
      
      items.push("<div class=tituloAlumno>");
      items.push("Alumno:");
      items.push("</div>");

      items.push("<br/>");

      items.push("<div class=tituloProfesor>");
      items.push("Profesor:");
      items.push("</div>");

      items.push("<br/>");
      
      items.push("<div class=tituloFecha>");
      items.push("Fecha:");
      items.push("</div>");

      items.push("<br/>");
    
      items.push("<div class=divAlumno>");
      items.push(val.nombreAlumno);
      items.push("</div>");

      items.push("<br/>");

      items.push("<div class=divProfesor>");
      items.push(val.nombreProfesor);
      items.push("</div>");

      items.push("<br/>");

      items.push("<div class=divFecha>");
      items.push(val.fecha);
      items.push("</div>");

      items.push("<br/>");

      items.push("<img class=flecha src=flecha.jpg>");
    items.push("</div>");

  });


  $("<div/>", {
    "class": "div",
    html: items.join("")
  }).appendTo("#divListarTodo");
});
