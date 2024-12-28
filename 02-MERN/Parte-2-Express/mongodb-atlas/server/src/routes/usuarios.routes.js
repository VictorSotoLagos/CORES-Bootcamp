import { Router } from "express";
import { getUsuarios, getUsuarioID, postUsuarios, putUsuarios, deleteUsuario, deleteAllUsuarios } from "../controllers/usuarios.controller.js";
import { validarUsuarios } from "../config/middlewares/middlewares.js";

const router = Router();

router.get('/', getUsuarios);             // Ruta específica para obtener todos los usuarios
router.post('/add', validarUsuarios, postUsuarios);        // Ruta específica para añadir un usuario
router.delete('/deleteall', deleteAllUsuarios);  // Ruta específica para eliminar todos los usuarios

router.get('/:id', getUsuarioID);         // Ruta dinámica para obtener un usuario por ID
router.put('/:id', validarUsuarios, putUsuarios);          // Ruta dinámica para actualizar un usuario por ID
router.delete('/:id', deleteUsuario);     // Ruta dinámica para eliminar un usuario por ID
  
export default router;
