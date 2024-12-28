import { Tareas } from "../model/model.tarea.js";

// Listar Usuarios en BD
const getTarea = async (req, res) => {
    const query = req.query;
    console.log(query);
    try {
        const usuariosDB = await Tareas.find();
        return res.status(200).json(usuariosDB);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener lista de tareas',
            error: error.message,
        });
    }
}

// Buscar usuario por ID en BD
const getTareaID = async (req, res) => {
    try {
        const tareasDB = await Tareas.findOne({ _id: req.params.id });
        return res.status(200).json(songsDB);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Id de tarea incorrecto o no existe',
            error: error.message,
        });
    }
}

// Agregar Canción
const postTarea = async (req, res) => {
    //const { nombre, email } = req.body;

    const opciones = {
        new: true, //devuelve el documento actualizado
        runValidators: true, //Ejecutar validaciones de esquema en al actualización
    }

    try {
        const newTarea = await Tareas.create(req.body);
        return res.status(201).json({ mensaje: 'tarea creada', cuerpo: newTarea, opciones });

    } catch (error) {
        return res.status(500).json({
            message: "Error al crear tarea",
            error: error.message,
        });
    }
};

// Actualizar usuario en BD
const putTarea = async (req, res) => {
    const id = req.params.id;
    const cuerpo = req.body;

    const opciones = {
        new: true, //devuelve el documento actualizado
        runValidators: true, //Ejecutar validaciones de esquema en al actualización
    }

    try {
        const tareasActualizado = await Tareas.findByIdAndUpdate(id, cuerpo, opciones);
        console.log(tareasActualizado);
        if (!tareasActualizado) {
            return res.status(400).json({ error: 'No existe la tarea' });
        }

        return res.status(200).json({ mensaje: 'tarea actualizada', cuerpo: tareasActualizado });

    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar la tarea',
            error: error.message,
        });
    }   
}

const patchTareas = async (req, res) => {
    const id = req.params.id;
    const cuerpo = req.body;

    const opciones = {
        new: true, //devuelve el documento actualizado
        runValidators: true, //Ejecutar validaciones de esquema en al actualización
    }

    try {
        const tareasActualizado = await Tareas.findByIdAndUpdate(id, cuerpo, opciones);

        if (!tareasActualizado) {
            return res.status(400).json({ error: 'No existe la tarea' });
        }

        return res.status(200).json({ mensaje: 'tarea actualizada', cuerpo: tareasActualizado });

    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar la tarea',
            error: error.message,
        });
    }   
}

// Eliminar usuario por ID usando BD real
const deleteTareas = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Tareas.findByIdAndDelete(id);
        if (!result) {
            return res.status(400).json({ error: 'No existe la tarea' });
        }

        res.json({
            mensaje: 'tarea eliminada',
            cuerpo: result,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la tarea',
            error: error.message,
        });
    }
};

// Eliminar TODOS los usuarios
const deleteAllTareas = async (req, res) => {
    try {
        await Tareas.deleteMany({});
        res.json({
            mensaje: "Todos las tareas han sido eliminadas",
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar todas las tareas',
            error: error.message,
        });
    }
}

export {
    getTarea,
    getTareaID,
    postTarea,
    putTarea,
    deleteTareas,
    deleteAllTareas
};