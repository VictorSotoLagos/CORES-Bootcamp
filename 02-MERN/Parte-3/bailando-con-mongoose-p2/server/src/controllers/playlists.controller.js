import { Playlist } from "../model/model.playlist.js";

// Listar Usuarios en BD
const getPlaylists = async (req, res) => {
    //const query = req.query;
    //console.log(query);
    try {
        const playlistDB = await Playlist.find();
        return res.status(200).json(playlistDB);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener lista de usuarios',
            error: error.message,
        });
    }
}

/*
const getSongID = async (req, res) => {
    try {
        const songsDB = await Songs.findOne({ _id: req.params.id });
        return res.status(200).json(songsDB);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Id incorrecto o no existe',
            error: error.message,
        });
    }
}
*/

// Agregar Canción
const postPlaylist = async (req, res) => {
    //const { nombre, email } = req.body;

    const opciones = {
        new: true, //devuelve el documento actualizado
        runValidators: true, //Ejecutar validaciones de esquema en al actualización
    }

    try {
        const newPlaylist = await Playlist.create(req.body);
        return res.status(201).json({ mensaje: 'Playlist creado', cuerpo: newPlaylist, opciones });

    } catch (error) {
        return res.status(500).json({
            message: "Error al crear playlist",
            error: error.message,
        });
    }
};

/*
const putSong = async (req, res) => {
    const id = req.params.id;
    const cuerpo = req.body;

    const opciones = {
        new: true, //devuelve el documento actualizado
        runValidators: true, //Ejecutar validaciones de esquema en al actualización
    }

    try {
        const songsActualizado = await Songs.findByIdAndUpdate(id, cuerpo, opciones);

        if (!songsActualizado) {
            return res.status(400).json({ error: 'No existe la canción' });
        }

        return res.status(200).json({ mensaje: 'Canción actualizada', cuerpo: songsActualizado });

    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar la canción',
            error: error.message,
        });
    }   
}

// Eliminar usuario por ID usando BD real
const deleteSong = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Songs.findByIdAndDelete(id);
        if (!result) {
            return res.status(400).json({ error: 'No existe la canción' });
        }

        res.json({
            mensaje: 'Canción eliminada',
            cuerpo: result,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la canción',
            error: error.message,
        });
    }
};

// Eliminar TODOS los usuarios
const deleteAllSongs = async (req, res) => {
    try {
        await Songs.deleteMany({});
        res.json({
            mensaje: "Todos las canciones han sido eliminadas",
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar todas las canciones',
            error: error.message,
        });
    }
}*/
export {
    getPlaylists,
    postPlaylist,
};