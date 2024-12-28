import express from 'express';
import { faker } from '@faker-js/faker';
//import cancionesRoutes from "./src/routes/canciones.routes.js"; // Importar las nuevas rutas

const port = process.env.PORT || 8000;
const app = express();

// Base de datos local (array de objetos)
const canciones = [];
const playlists = [];

// Función para generar una canción
const generarCancion = () => {
    return {
        id: faker.number.int(),
        titulo: faker.music.songName(),
        artista: faker.music.artist(),
        album: faker.music.album(),
        duracion: `${faker.number.int({ min: 1, max: 5 })} minutos ${faker.number.int({ min: 1, max: 59 })} segs`, // duración en minutos y segundos
        genero: faker.music.genre(),
        fechaLanzamiento: faker.date.past(10).toISOString().split('T')[0] // fecha en formato YYYY-MM-DD
    };
};

// Función para generar una playlist
const generarPlaylist = () => {
    const numCanciones = faker.number.int({ min: 1, max: 10 });
    const cancionesPlaylist = Array.from({ length: numCanciones }, generarCancion);

    return {
        idPlaylist: faker.number.int(),
        nombre: faker.lorem.words(3),
        descripcion: faker.lorem.sentence(),
        canciones: cancionesPlaylist,
        creador: faker.person.fullName(),
        fechaCreacion: faker.date.past(2).toISOString().split('T')[0] // fecha en formato YYYY-MM-DD
    };
};


//Ver Canciones
app.get('/api/canciones', (req, res) => {
    res.json(canciones);
});

//Ver Playlist
app.get('/api/playlist', (req, res) => {
    res.json(playlists);
});

//Obtener Nuevas Canciones Según Parámetros
app.post('/api/canciones/:num', (req, res) => {
    const numCanciones = parseInt(req.params.num) || 5;
    const nuevasCanciones = Array.from({ length: numCanciones }, generarCancion);
    canciones.push(...nuevasCanciones);
    res.json(nuevasCanciones);
});

//Obtener Nuevas Playlists Según Parámetros
app.post('/api/playlist/:num', (req, res) => {
    const numPlaylists = parseInt(req.params.num) || 1;
    const nuevasPlaylists = Array.from({ length: numPlaylists }, generarPlaylist);
    playlists.push(...nuevasPlaylists);
    res.json(nuevasPlaylists);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});