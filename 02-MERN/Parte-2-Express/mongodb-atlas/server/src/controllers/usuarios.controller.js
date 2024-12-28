import { Usuario } from "../model/model.usuario.js";

// Listar Usuarios en BD
const getUsuarios = async (req, res) => {
    const query = req.query;
    console.log(query);
    try {
        const usuariosDB = await Usuario.find();
        return res.status(200).json(usuariosDB);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener lista de usuarios',
            error: error.message,
        });
    }
}

// Buscar usuario por ID en BD
const getUsuarioID = async (req, res) => {
    try {
        const usuarioDB = await Usuario.findOne({ _id: req.params.id });
        return res.status(200).json(usuarioDB);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Id incorrecto o no existe',
            error: error.message,
        });
    }
}

// Agregar Usuario
const postUsuarios = async (req, res) => {
    const { nombre, email } = req.body;

    try {
        const yaExiste = await Usuario.findOne({
            $or: [
                { nombre },
                { email },
            ]
        });

        if (yaExiste) {
            const errorDuplicado = [];
            if (yaExiste.nombre === nombre) errorDuplicado.push('Ya existe el usuario con ese nombre');
            if (yaExiste.email === email) errorDuplicado.push('Ya existe el usuario con ese email');

            return res.status(400).json({ error: errorDuplicado });
        }

        const nuevoUsuario = await Usuario.create(req.body);
        return res.status(201).json({ mensaje: 'Usuario creado', cuerpo: nuevoUsuario });

    } catch (error) {
        return res.status(500).json({
            message: "Error al crear el usuario",
            error: error.message,
        });
    }
};

// Actualizar usuario en BD
const putUsuarios = async (req, res) => {
    const id = req.params.id;
    const cuerpo = req.body;

    const opciones = {
        new: true, //devuelve el documento actualizado
        runValidators: true, //Ejecutar validaciones de esquema en al actualización
    }

    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(id, cuerpo, opciones);

        if (!usuarioActualizado) {
            return res.status(400).json({ error: 'No existe el usuario' });
        }

        return res.status(200).json({ mensaje: 'Usuario actualizado', cuerpo: usuarioActualizado });

    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el usuario',
            error: error.message,
        });
    }   
}

// Eliminar usuario por ID usando BD real
const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Usuario.findByIdAndDelete(id);
        if (!result) {
            return res.status(400).json({ error: 'No existe el usuario' });
        }

        res.json({
            mensaje: 'Usuario eliminado',
            cuerpo: result,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el usuario',
            error: error.message,
        });
    }
};

// Eliminar TODOS los usuarios
const deleteAllUsuarios = async (req, res) => {
    try {
        await Usuario.deleteMany({});
        res.json({
            mensaje: "Todos los usuarios han sido eliminados",
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar todos los usuarios',
            error: error.message,
        });
    }
}

export {
    getUsuarios,
    getUsuarioID,
    postUsuarios,
    putUsuarios,
    deleteUsuario,
    deleteAllUsuarios
};