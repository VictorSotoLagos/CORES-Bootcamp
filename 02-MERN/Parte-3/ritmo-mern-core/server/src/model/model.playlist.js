import {model, Schema} from "mongoose";

const playListSchema = new Schema({
    playListName: {
        type: String,
        required: [true, 'Se debe incluir un título'],
        minlength: 3, // Limitar a un mínimo de 3 caracteres
        maxlength: 100, // Limitar a un máximo de 100 caracteres
    },
    songs: [{  // Array de strings con los IDs de las canciones
        type: String,
        required: [true, 'Se debe incluir un ID de canción'],
    }],
}, { timestamps: true });

const Playlist = model("Playlist", playListSchema); // Crear el modelo basado en el esquema
export { Playlist }; // Exportar el modelo