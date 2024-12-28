import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { putCancion } from "../../api/songServices";
import { validateSong } from "../../helpers/songvalidations";
import "./ActualizarCancion.css";

const ActualizarCancion = ({ canciones, setCanciones, actualizarCancion }) => {
  const parametros = useParams();
  const navegacion = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [cancionActual, setCancionActual] = useState(null);

  useEffect(() => {
    const detalleCancion = canciones.find(
      (cancion) => cancion._id === parametros._id
    );
    if (detalleCancion) {
      setCancionActual(detalleCancion);
    }
  }, [canciones, parametros._id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCancionActual((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateSong(cancionActual);
    console.log("cancion actual es:", cancionActual);
    if (error) {
      setErrorMessage(error);
      return;
    }
    setErrorMessage("");
    const response = await putCancion(cancionActual);
    console.log("response body es:", response.cuerpo);
    actualizarCancion(response.cuerpo);

    navegacion("/songs");
  };

  if (!cancionActual) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="actualizar-cancion">
      <h2>Actualizar Canción</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="songTitle">Título de la Canción:</label>
        <input
          type="text"
          id="songTitle"
          name="songTitle"
          value={cancionActual.songTitle}
          onChange={handleChange}
        />

        <label htmlFor="artist">Artista:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={cancionActual.artist}
          onChange={handleChange}
        />

        <label htmlFor="yearOfRelease">Año de Lanzamiento:</label>
        <input
          type="number"
          id="yearOfRelease"
          name="yearOfRelease"
          value={cancionActual.yearOfRelease}
          onChange={handleChange}
        />

        <label htmlFor="genre">Género:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={cancionActual.genre}
          onChange={handleChange}
        />

        <button className="boton-guardar" type="submit">
          Actualizar Canción
        </button>
      </form>
    </div>
  );
};

export default ActualizarCancion;
