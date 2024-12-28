import {model, Schema} from "mongoose";

const tareasSchema = new Schema({
    descripcion_tarea: {
    type: String,
    required: [true, 'Se debe incluir un título'],
    minlength: 1, // Limitar a un mínimo de 2 caracteres
    maxlength: 255, // Limitar a un máximo de 50 caracteres
    
    },
    tiempo_estimado: {
    type: String,
    required: [true, 'Se debe incluir un tiempo estimado'],
    minlength: 1, // Limitar a un mínimo de 2 caracteres
    maxlength: 255, // Limitar a un máximo de 50 caracteres
    },
    
    fecha_limite: {
        type: Date,
        required: [true, 'Se debe incluir una fecha límite'],
        validate: {
            validator: (valor) => valor >= new Date(),
            message: props => `La fecha límite no puede ser anterior a la fecha actual`
        }
    },
    estado: {
        type: String,
        enum: ['pendiente', 'enproceso', 'completa'],
        default: 'pendiente',
        required: [true, 'Se debe incluir un estado de la tarea'],
        minlength: 1, // Limitar a un mínimo de 2 caracteres
        maxlength: 255, // Limitar a un máximo de 50 caracteres
        },
    creadaPor: {
        type: String,
        required: true
    }
}, { timestamps: true});


const Tareas = model("Tareas", tareasSchema);
export { Tareas };

