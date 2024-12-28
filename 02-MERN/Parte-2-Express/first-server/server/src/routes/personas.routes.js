import { Router } from "express";
import { getPersonas, getPersonaID, postPersonas, putPersonas, deletePersona, deleteAllPersona } from "../controllers/personas.controller.js";
import { validarUsuarios } from "../config/middlewares/middlewares.js";

const router = Router();

router.get('/personas', getPersonas);             // Ruta específica para obtener todas las personas
router.post('/personas/add', validarUsuarios, postPersonas);        // Ruta específica para añadir una persona
router.delete('/personas/deleteall', deleteAllPersona);  // Ruta específica para eliminar todas las personas

router.get('/personas/:id', getPersonaID);         // Ruta dinámica para obtener una persona por ID
router.put('/personas/:id', validarUsuarios, putPersonas);          // Ruta dinámica para actualizar una persona por ID
router.delete('/personas/:id', deletePersona);     // Ruta dinámica para eliminar una persona por ID
  
export default router;
