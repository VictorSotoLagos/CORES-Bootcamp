import { Usuario } from '../model/model.usuario.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();



const getUsers = async (req, res) => {
    try {

        console.log ("--------FBS---------")
        console.log ("req.usuario es:", req.usuario)
        console.log ("req.nombre es:", req.nombre_usuario)
        console.log ("req.apelludo es:", req.apellido_usuario)
        console.log ("req.email es", req.email_usuario)
        console.log ("req.tipo es", req.tipo_usuario)
        console.log ("--------FBS---------")
        const userDB = await Usuario.find();
        return res.status(200).json(userDB);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener lista de usuarios',
            error: error.message,
        });
    }
}


const getUserID = async (req, res) => {
    try {
        const playlistDB = await Usuario.findOne({ _id: req.params.id });
        return res.status(200).json(playlistDB);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Id incorrecto o no existe',
            error: error.message,
        });
    }
}



    const createUser = async (req, res) => {
        const opciones = {
            new: true, // devuelve el documento actualizado
            runValidators: true, // Ejecutar validaciones de esquema en la actualización
        };
    
        try {
            console.log ("--------FBS---------")
            console.log ("req.usuario es:", req.usuario)
            console.log ("req.nombre es:", req.nombre_usuario)
            console.log ("req.apelludo es:", req.apellido_usuario)
            console.log ("req.email es", req.email_usuario)
            console.log ("req.tipo es", req.tipo_usuario)
            console.log ("--------FBS---------")

            const newUser = await Usuario.create(req.body);
            // Configuración para el token
            const LLAVE_SECRETA = process.env.LLAVE_SECRETA || 'llave';
            const datosToken = {
                id: newUser._id,
                nombre: newUser.nombre,
                apellido: newUser.apellido,
                email: newUser.email,
                tipo: newUser.tipo_usuario,
            };
    
            // Crear el token
            const token = jwt.sign({ user: datosToken }, LLAVE_SECRETA, { expiresIn: '15m' });

            
        
            // Enviar la respuesta con el token
        return res.status(201).json({ mensaje: 'Usuario creado', token, cuerpo: newUser, opciones });
        } catch (error) {
            return res.status(500).json({
                message: "Error al crear usuario",
                error: error.message,
            });
        }
    }




const updateUser = async (req, res) => {
    const id = req.params.id;
    const cuerpo = req.body;
    const { password } = req.body;
    console.log("password", password);

    const opciones = {
        new: true, //devuelve el documento actualizado
        runValidators: true, //Ejecutar validaciones de esquema en al actualización
    }

    try {
        
        console.log(id);
        const updatedUser = await Usuario.findByIdAndUpdate(id, cuerpo, opciones);

        if (!updatedUser) {
            return res.status(400).json({ error: 'No existe el usuario' });
        }

        //EXPERIMENTO: Comparamos CLAVES
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            res.status(400).json({ error: 'Usuario o contraseña incorrectos' });
            return;
        }

        return res.status(200).json({ mensaje: 'Usuario actualizado', cuerpo: updatedUser });

    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el usuario',
            error: error.message,
        });
    }   
}

const deleteUser = async (req, res) => {
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

const loginUser = async (req, res) => {

    try { 
        const LLAVE_SECRETA = process.env.LLAVE_SECRETA || 'llave';
        const { email, password } = req.body;
        //const user = await Usuario.findOne({email});
        const user = await Usuario.findOne({ email });
        console.log(user); 
        if (!user) {
             res.status(400).json({ error: 'Usuario o contraseña incorrectos' });
             return;
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            res.status(400).json({ error: 'Usuario o contraseña incorrectos' });
            return;
        }

        const datosToken = {
            id: user._id,
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email,
            tipo: user.tipo_usuario,    
        }

        const token = jwt.sign(datosToken, LLAVE_SECRETA, {expiresIn:'15m'});

        res.cookie('authToken', token, { httpOnly: true, secure: true }).json(
            {
            token, 
            datosToken,
            });

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
 
    }
}

const logoutUser = async (req, res) => {
    res.clearCookie('authToken').json({ mensaje: 'Sesión de usuario cerrada' });
}

export { getUsers, getUserID, createUser, updateUser, deleteUser, loginUser, logoutUser };