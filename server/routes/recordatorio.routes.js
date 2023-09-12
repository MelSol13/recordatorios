const RecordatorioController = require ("../controllers/recordatorio.controller");

module.exports = app => {
    //recordar que recordatorios es el nombre de nuestra base en mongo
    app.get('/api/recordatorios', RecordatorioController.get_all);
    app.post('/api/recordatorios', RecordatorioController.create_recordatorio);
    app.get('/api/recordatorios/:id', RecordatorioController.get_recordatorio);
    app.put('/api/recordatorios/:id', RecordatorioController.update_recordatorio);
    app.delete('/api/recordatorios/:id', RecordatorioController.delete_recordatorio);
}

//en postman verificamos estos errores
//error.titulo.message -> Mensaje de error
//error.contenido.message
//error.prioridad.message