import { Router } from "express";
import { getTarea, getTareaID, postTarea, putTarea, deleteTareas, deleteAllTareas } from "../controllers/tareas.controller.js";
import autenticarJWT from "../middlewares/jwt.middleware.js";

const router = Router();

router.get('/', autenticarJWT, getTarea);            
router.post('/add', autenticarJWT, postTarea);      
router.delete('/deleteall', autenticarJWT, deleteAllTareas);  
router.get('/:id', autenticarJWT, getTareaID);      
router.put('/actualizar/:id', autenticarJWT, putTarea);         
router.delete('/delete/:id',autenticarJWT, deleteTareas);   

export default router;
