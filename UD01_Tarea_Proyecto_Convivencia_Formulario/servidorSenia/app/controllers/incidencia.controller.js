const Incidencia = require('../models/incidencia.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el incidencia
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Incidencia Vacia..." 
        });
    }

    const incidencia = new Incidencia({
        grupo: req.body.grupo || "Sin grupo",
        nombreAlumno: req.body.nombreAlumno || "Sin Nombre Alumno",
        nombreProfesor: req.body.nombreProfesor || "Sin Nombre Profesor",
        horario: req.body.horario|| "Sin horario",
        fecha: req.body.fecha || "Sin fecha",
        horaAccidente: req.body.horaAccidente || "Sin hora accidente",
        lugarAccidente: req.body.lugarAccidente || "Sin lugar accidente",
        descripcion: req.body.descripcion || "Sin descripcion",
        mesura1: req.body.mesura1 || "Sin mesura1",
        mesura2: req.body.mesura2 || "Sin mesura2",
        mesura3: req.body.mesura3 || "Sin mesura3",
        tasques: req.body.tasques || "Sin tasques",
        dias: req.body.dias || "Sin dias",
        horas: req.body.horas || "Sin horas",
        mesura4: req.body.mesura4 || "Sin mesura4",
        diaInicio: req.body.diaInicio || "Sin dia inicio",
        diaFin: req.body.diaFin || "Sin dia fin",
        tipificacion: req.body.tipificacion || "Sin tipificacion",
        tipificacion2: req.body.tipificacion2 || "Sin tipificacion2",
    })

    incidencia.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating incidencia"
        });
    });
};



// Obtener todos los incidenciaes
exports.findAll = (req,res) => {

        Incidencia.find().then(incidencias=>{
            res.send(incidencias);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener una incidencia por Id
exports.findOne = (req,res) => {
    Incidencia.findById(req.params.incidenciaId)
    .then(incidencia=>{
        if (!icidencia){
            return res.status(404).send({
                message: "Incidencia NOT FOUND con ID " +req.params.incidenciaId
            });
            }
            res.send(incidencia);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Incidencia no encontrado con ese id :" +req.params.incidenciaId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.incidenciaId
             });
        });
    };




// Actualizar una incidencia
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Incidencia vacia"
        });
    }

    // Find note and update it with the request body
    Incidencia.findByIdAndUpdate(req.params.incidenciaId, {
        nombre: req.body.nombre|| "Sin nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.puntosVida || 0,
        puntosCordura: req.body.puntosCordura || 0
    }, {new: true})
    .then(incidencia => {
        if(!incidencia) {
            return res.status(404).send({
                message: "incidencia not found with id " + req.params.incidenciaId
            });
        }
        res.send(incidencia);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "incidencia not found with id " + req.params.incidenciaId
            });                
        }
        return res.status(500).send({
            message: "Error updating incidencia with id " + req.params.incidenciaId
        });
    });
};

// Borrar un incidencia 
exports.delete = (req,res)=>{
    Incidencia.findByIdAndRemove(req.params.incidenciaId)
    .then(incidencia => {
        if(!incidencia) {
            return res.status(404).send({
                message: "incidencia no encontrado " + req.params.incidenciaId
            });
        }
        res.send({message: "Cthulhu ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "incidencia not found with id " + req.params.incidenciaId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese incidencia with id " + req.params.incidenciaId
        });
    });
};