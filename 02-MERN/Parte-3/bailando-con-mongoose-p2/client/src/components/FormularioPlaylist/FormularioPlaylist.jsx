import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPlaylist } from "../../api/playlistServices";
import "./FormularioPlaylist.css";

const FormularioPlaylist = ({ canciones, agregarPlaylist }) => {
  const [cancionesElegidas, setCancionesElegidas] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    console.log("value es:", value);
    if (checked) {
      setCancionesElegidas([...cancionesElegidas, value]);
      console.log("cancionesElegidas son:", cancionesElegidas);
    } else {
      setCancionesElegidas(cancionesElegidas.filter((song) => song !== value));
    }
  };

  const handlePlaylistName = (e) => {
    const { value } = e.target;
    setPlaylistName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlaylist = {
      playListName: playlistName,
      songs: cancionesElegidas,
    };
    console.log("playlist es:", newPlaylist);
    const response = await addPlaylist(newPlaylist);
    agregarPlaylist(response.cuerpo);
    console.log("response es:", response);
    navigate("/songs/allplaylists");
  };

  return (
    <div className="crearPlaylist">
      <h2>Crea tu Playlist</h2>
      <form onSubmit={handleSubmit}>
        <div className="nombre-playlist">
          <label htmlFor="playlistName">Nombre de la Playlist:</label>
          <input
            type="text"
            id="playlistName"
            placeholder="Elige tus canciones y ponle nombre a tu playlist"
            value={playlistName}
            onChange={handlePlaylistName}
            required
          />
        </div>
        {canciones.map((song, index) => (
          <div className="listado-canciones" key={index}>
            <input
              type="checkbox"
              id={song._id}
              name={song.songTitle}
              value={`${song._id}`}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={song._id}>
              {song.songTitle}{" "}
              <span style={{ color: "green", fontWeight: "300" }}>
                | {song.artist}
              </span>
            </label>
          </div>
        ))}
        <button className="boton-crear-playlist" type="submit">
          Crear Playlist
        </button>
      </form>
    </div>
  );
};

export default FormularioPlaylist;
