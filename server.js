const express = require ("express");
const app = express();

const cors = require("cors")

app.use(express.json(), express.urlencoded({extended:true}));

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

//inicializar Base Datos
require("./server/config/mongoose.config");

//importar rutas
const misRutas = require("./server/routes/recordatorio.routes");
misRutas(app);

//Ejecutamos el server
app.listen(8000, ()=>console.log("Servidor listo !"));
