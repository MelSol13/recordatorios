const Recordatorio = require("../models/recordatorio.model");

//Regresa una lista de todos los recordatorios. orden por prioridad de mayor a menor prioridad 10-1
module.exports.get_all = (req, res)=>{
    //1 ascendente 1-10, -1 descendente 10-1
    Recordatorio.find().sort({prioridad: -1})
        .then(recordatorios => res.json(recordatorios))
        .catch(err => {res.status(400).json(err)});
}

//Crear un nuevo recordatorio
module.exports.create_recordatorio = (req, res) => {
    Recordatorio.create(req.body)
    .then(recordatorio => res.json(recordatorio))
    .catch(err => {res.status(400).json(err)});
}

//Regrese un recordatorio en base a su ID
module.exports.get_recordatorio = (req, res) => {
    //req.params.id = ej 6jdagakgdg2627648
    Recordatorio.findOne({_id: req.params.id})
        .then(recordatorio => res.json(recordatorio))
        .catch(err => {res.status(400).json(err)});
}

//Actualiza un recordatorio. obtiene el id a traves de la URL, y la actualización en body
module.exports.update_recordatorio = (req, res) => {
    Recordatorio.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
    .then(recordatorio => res.json(recordatorio))
    .catch(err => {res.status(400).json(err)});
}

//Borra recordatorio en base a su ID
module.exports.delete_recordatorio = (req, res) => {
    Recordatorio.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => {res.status(400).json(err)});
}