import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ListaCanciones.css";

const ListaCanciones = ({ canciones }) => {
  const [input, setInput] = useState("");
  const [cancionesFiltradas, setCancionesFiltradas] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <>
      <div className="titulo-seccion">
        <h2>Lista de Canciones</h2>
      </div>
      <div className="songfinder">
        <label htmlFor="input">Buscar canción:</label>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Buscar canción por título, artista o género..."
        />
      </div>
      <ul>
        {canciones ? (
          cancionesFiltradas.map((cancionFiltrada, index) => {
            return (
              <div className="listado-cancion" key={index}>
                <li>
                  <Link to={`/songs/detail/${cancionFiltrada._id}`}>
                    {cancionFiltrada.songTitle}
                  </Link>
                  <span style={{ color: "green" }}>
                    {" "}
                    por {cancionFiltrada.artist}
                  </span>
                </li>
              </div>
            );
          })
        ) : (
          <li>No hay canciones disponibles</li>
        )}
      </ul>
    </>
  );
};

export default ListaCanciones;
