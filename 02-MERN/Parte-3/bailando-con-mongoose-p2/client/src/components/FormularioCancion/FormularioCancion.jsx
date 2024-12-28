import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import estilos from "./FormularioCancion.module.css";
import { addCanciones } from "../../api/songServices";

const FormularioCancion = ({ agregarCancion }) => {
  const valoresIniciales = {
    songTitle: "",
    artist: "",
    yearOfRelease: "",
    genre: "",
  };

  const [nuevaCancion, SetNuevaCancion] = useState(valoresIniciales);
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    SetNuevaCancion({ ...nuevaCancion, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(nuevaCancion);
    const response = await addCanciones(nuevaCancion);
    console.log("respuesta data + body es:", response);
    agregarCancion(response.cuerpo);
    SetNuevaCancion(valoresIniciales);
    navigate("/songs");
  };

  return (
    <div className={estilos.contenedorFormulario}>
      <h2 className={estilos.tituloFormulario}>Agrega una Nueva Canción</h2>
      <form onSubmit={handleSubmit}>
        <div className={estilos.grupoFormulario}>
          <label>Título de la Canción:</label>
          <input
            type="text"
            name="songTitle"
            value={nuevaCancion.songTitle}
            placeholder="Ingresar el título de la canción"
            onChange={handleChange}
            required
          />
        </div>
        <div className={estilos.grupoFormulario}>
          <label>Artista:</label>
          <input
            type="text"
            name="artist"
            value={nuevaCancion.artist}
            placeholder="Ingresar el nombre del artista"
            onChange={handleChange}
            required
          />
        </div>
        <div className={estilos.grupoFormulario}>
          <label>Año de Lanzamiento:</label>
          <input
            type="text"
            name="yearOfRelease"
            value={nuevaCancion.yearOfRelease}
            placeholder="Ingresar año de Lanzamiento"
            onChange={handleChange}
            required
          />
        </div>
        <div className={estilos.grupoFormulario}>
          <label>Género</label>
          <input
            type="text"
            name="genre"
            value={nuevaCancion.genre}
            placeholder="Ingresar el género"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={estilos.botonEnviar}>
          Agregar Canción
        </button>
      </form>
    </div>
  );
};

export default FormularioCancion;