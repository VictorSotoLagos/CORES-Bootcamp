import express from 'express';
import userRoutes from "./src/routes/usuarios.routes.js"; // Importar las nuevas rutas
import routerAuth from "./src/routes/auth.routes.js";
import tareasRoutes from "./src/routes/tareas.routes.js";
import { config } from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import conectarDB from "./src/config/config.mongo.js";
config();

// Creamos una instancia de la aplicación express
const app = express();
app.use(cookieParser());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))
/*app.use(cors({
origin: "http://localhost:5173"
}));*/

// Definimos el puerto en el que el servidor escuchará las solicitudes
const port = process.env.PORT || 8080;
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error('MONGODB_URI no está definida en el archivo.env');
  process.exit(1);
}

conectarDB();

app.use('/api/user', userRoutes); // Usar las nuevas rutas
app.use('/api/auth', routerAuth);
app.use('/api/tareas', tareasRoutes);

const server = app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
});

export { app, server };
