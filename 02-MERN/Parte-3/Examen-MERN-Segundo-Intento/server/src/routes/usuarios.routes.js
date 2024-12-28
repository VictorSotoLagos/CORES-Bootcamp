import { Router } from "express";
import { getUsers, getUserID, createUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import autenticarJWT from "../middlewares/jwt.middleware.js";

const router = Router();

// Rutas para canciones


router.post('/add', createUser);          // Ruta para registrar un usuario
router.get('/', getUsers);                      // Ruta para obtener todos los usuarios
router.put('/:id', autenticarJWT, updateUser);  
//router.get('/:id', autenticarJWT, getUserID);                 // Ruta para obtener un usuario por ID
              // Ruta para actualizar un usuario por ID
router.delete('/:id', autenticarJWT, deleteUser); 

export default router;
