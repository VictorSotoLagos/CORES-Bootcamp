import { Songs } from "../model/model.songs.js";

// Listar Usuarios en BD
const getSong = async (req, res) => {
    const query = req.query;
    console.log(query);
    try {
        const usuariosDB = await Songs.find();
        return res.status(200).json(usuariosDB);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener lista de usuarios',
            error: error.message,
        });
    }
}

// Buscar usuario por ID en BD
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

// Agregar Canción
const postSong = async (req, res) => {
    //const { nombre, email } = req.body;

    const opciones = {
        new: true, //devuelve el documento actualizado
        runValidators: true, //Ejecutar validaciones de esquema en al actualización
    }

    try {
        const newSong = await Songs.create(req.body);
        return res.status(201).json({ mensaje: 'Canción creada', cuerpo: newSong, opciones });

    } catch (error) {
        return res.status(500).json({
            message: "Error al crear canción",
            error: error.message,
        });
    }
};

// Actualizar usuario en BD
const putSong = async (req, res) => {
    const id = req.params.id;
    const cuerpo = req.body;

    const opciones = {
        new: true, //devuelve el documento actualizado
        runValidators: true, //Ejecutar validaciones de esquema en al actualización
    }

    try {
        const songsActualizado = await Songs.findByIdAndUpdate(id, cuerpo, opciones);
        console.log(songsActualizado);
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

const pathSong = async (req, res) => {
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
}

export {
    getSong,
    getSongID,
    postSong,
    putSong,
    deleteSong,
    deleteAllSongs
};