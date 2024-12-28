import { Router } from "express";
import { getSong, getSongID, postSong, putSong, deleteSong, deleteAllSongs } from "../controllers/albums.controller.js";
import { getPlaylists, getPlaylistID, postPlaylist, putPlaylist } from "../controllers/playlists.controller.js";
import { validarUsuarios } from "../config/middlewares/middlewares.js";

const router = Router();

router.get('/', getSong);             // Ruta específica para obtener todos los usuarios
router.post('/add', postSong);        // Ruta específica para añadir un usuario
router.delete('/deleteall', deleteAllSongs);  // Ruta específica para eliminar todos los usuarios

router.get('/playlists', getPlaylists);
router.post('/playlists/add', postPlaylist);
router.put('/playlists/:id', putPlaylist);

router.get('/:id', getSongID);         // Ruta dinámica para obtener un usuario por ID
router.get('/playlists/:id', getPlaylistID);
router.put('/:id', putSong);          // Ruta dinámica para actualizar un usuario por ID
router.delete('/:id', deleteSong);     // Ruta dinámica para eliminar un usuario por ID

//Playlists

             // Ruta específica para obtener todos los usuarios
export default router;
