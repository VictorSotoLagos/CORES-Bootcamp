import { Router } from "express";
import { getSong, getSongID, postSong, putSong, deleteSong, deleteAllSongs } from "../controllers/albums.controller.js";
import { getPlaylists, getPlaylistID, postPlaylist, putPlaylist } from "../controllers/playlists.controller.js";
import { getUsers, getUserID, createUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import autenticarJWT from "../middlewares/jwt.middleware.js";

const router = Router();

// Rutas para canciones
router.get('/', getSong);             // Ruta para obtener todas las canciones
router.post('/add', postSong);       // Ruta para añadir una canción
router.delete('/deleteall', deleteAllSongs);  // Ruta para eliminar todas las canciones
router.get('/playlists', getPlaylists);             // Ruta para obtener todas las playlists
router.post('/playlists/add', postPlaylist);        // Ruta para añadir una playlist
router.post('/user/register', autenticarJWT, createUser);          // Ruta para registrar un usuario
router.get('/users', getUsers);                      // Ruta para obtener todos los usuarios

router.get('/playlists/:id', getPlaylistID);        // Ruta para obtener una playlist por ID
router.put('/playlists/:id', putPlaylist);          // Ruta para actualizar una playlist por ID
router.get('/:id', getSongID);       // Ruta para obtener una canción por ID
router.put('/:id', putSong);         // Ruta para actualizar una canción por ID
router.delete('/:id', deleteSong);   // Ruta para eliminar una canción por ID
router.get('/user/:id', autenticarJWT, getUserID);                 // Ruta para obtener un usuario por ID
router.put('/user/:id', autenticarJWT, updateUser);                // Ruta para actualizar un usuario por ID
router.delete('/user/:id', autenticarJWT, deleteUser); 

export default router;
