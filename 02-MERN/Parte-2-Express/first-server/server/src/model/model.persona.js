import {model, Schema} from "mongoose";

const personaSchema = new Schema({
    nombre: {
    type: String,
    required: true,
    },
    edad: {
    type: Number,
    required: true,
    },
    país: {
    type: String,
    required: true,
    },
    email: {
    type: String,
    required: true,
    },
}, { timestamps: true});
 
const Persona = model("Persona", personaSchema);
export { Persona };

