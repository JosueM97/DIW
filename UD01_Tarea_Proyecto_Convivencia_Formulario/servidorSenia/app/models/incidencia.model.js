const mongoose= require('mongoose');

const IncidenciaSchema = mongoose.Schema({
    nombreAlumno:String,
    nombreProfesor:String,
    horario:String,
    fecha:String,
    horaAccidente:String,
    lugarAccidente:String,
    descripcion:String,
    mesura1:String,
    mesura2:String,
    mesura3:String,
    tasques:String,
    dias:String,
    horas:String,
    mesura4:String,
    diaInicio:String,
    diaFin:String,
    tipificacion:String,
    tipificacion2: String,
    
},{
    timestamps:true
});


module.exports = mongoose.model('Incidencia',IncidenciaSchema);