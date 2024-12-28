import Mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const URI_MONGODB = process.env.MONGODB_URI;
const BASE_DATOS = process.env.BASE_DATOS;

async function conectarDB() {
    try {
        await Mongoose.connect(URI_MONGODB, {dbName: BASE_DATOS})  
        console.log("Conexión Exitosa a MongoDB")
    } catch (error) {
        console.log("Error al conectar a MongoDB", error);
        throw error ; 
    };

} 
export default conectarDB;

 
/*
dotenv.config();
const BASE_DE_DATOS = process.env.BASE_DE_DATOS;

const conectarDB = async () => {
    try { 
        await connect(BASE_DE_DATOS);
        console.log("Conexión Exitosa a la Base de Datos MongoDB Atlas");
    } catch (error) {
        console.log("Error al conectar a la Base de Datos MongoDB Atlas", error);
    }
}

export default conectarDB;
*/