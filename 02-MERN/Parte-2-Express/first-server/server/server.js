import express from 'express';
import personRoutes from "./src/routes/personas.routes.js"
import {config} from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import conectarDB from "./src/config/config.mongo.js";
config();


// Creamos una instancia de la aplicación express
const app = express();

app.use(helmet()); 
app.use(morgan('tiny'));
app.use(express.json()); 
app.use(cors());

// Definimos el puerto en el que el servidor escuchará las solicitudes
// Usar una variable de entorno es una buena práctica para definir el puerto
const port = process.env.PORT || 8080;
const url_bd = "mongodb+srv://vesotolagos:<db_aLRXHxjZkrVvn0Y5>@cluster0.boe9e.mongodb.net/db_personas?retryWrites=true&w=majority&appName=Cluster0" 
conectarDB();

const password = process.env.PASSWORD || "1234";


app.use(personRoutes);
//Podría ser también app.use("/api/usuarios",personRoutes); y evitamos usar "/usuarios" en el archivo routes

// Configuramos el servidor para que escuche en el puerto especificado
// y ejecutamos una función callback que muestra un mensaje en la consola
/*
app.listen(port, () => {
  console.log(`El servidor está activo en el puerto: ${port}`);
});
*/

const server = app.listen(port, () => {
  console.log(`El servidor está activo en el puerto: ${port}`);
});

export { app, server } ;
