import {model, Schema} from "mongoose";

const songSchema = new Schema({
    songTitle: {
    type: String,
    required: [true, 'Se debe incluir un título'],
    minlength: 6, // Limitar a un mínimo de 2 caracteres
    maxlength: 255, // Limitar a un máximo de 50 caracteres

    },
    artist: {
    type: String,
    required: [true, 'Se debe incluir un artista'],
    minlength: 10, // Limitar a un mínimo de 2 caracteres
    maxlength: 255, // Limitar a un máximo de 50 caracteres
    },
    yearOfRelease: {
    type: Number,
    required:[true, 'Se debe incluir un año de lanzamiento'],
    min: [2010, 'El año de lanzamiento no puede ser anterior a 2010'],
    max: [2024, 'El año de lanzamiento no puede ser posterior a 2024'],
    validate: {
        validator: (valor) => {
            // Acá se verifica que el año tenga 4 digitos
            return valor.toString().length === 4;
        },
        message: props => `${props.value} --Error: El año debe tener 4 dígitos`,
},
    },
    genre: {
        type: String,
        required: true,
        minlength: 0, // Limitar a un mínimo de 2 caracteres
        maxlength: 30, // Limitar a un máximo de 50 caracteres
        },
}, { timestamps: true});
 
const Songs = model("Songs", songSchema);
export { Songs };

