import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { putPlaylist } from "../../api/playlistServices";
import { validatePlaylist } from "../../helpers/playlistvalidations";
import { set } from "mongoose";

const ActualizarPlaylist = ({
  totalPlaylists,
  canciones,
  actualizacionPlaylist,
}) => {
  const parametros = useParams();
  const navigate = useNavigate();

  const detallePlaylist = totalPlaylists.find(
    (playlist) => playlist._id === parametros._id
  );
  console.log("parametros en ActualizarPlaylist son:", parametros);
  console.log("detallePlaylist en ActualizarPlaylist es:", detallePlaylist);

  const [playlistName, setPlaylistName] = useState("");
  const [cancionesElegidas, setCancionesElegidas] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (detallePlaylist) {
      setPlaylistName(detallePlaylist.playListName);
      setCancionesElegidas(detallePlaylist.songs.map((song) => song));
      console.log(
        "cancionesElegidas fuera del useEffect son:",
        cancionesElegidas
      );
      console.log("ID del playlist es: ", detallePlaylist._id);
    }
  }, [detallePlaylist]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCancionesElegidas([...cancionesElegidas, value]);
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
    const error = validatePlaylist(playlistName, cancionesElegidas);
    if (error) {
      setErrorMessage(error);
      return;
    }
    setErrorMessage("");

    const updatedPlaylist = {
      playListName: playlistName,
      songs: cancionesElegidas,
    };

    console.log("updated playlist es:", updatedPlaylist);
    console.log("updated playlist ID es:", detallePlaylist._id);
    const response = await putPlaylist(updatedPlaylist, detallePlaylist._id);
    console.log("response.cuerpo es:", response.cuerpo);
    actualizacionPlaylist(response.cuerpo);
    navigate("/songs/allplaylists");
  };

  if (!detallePlaylist) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="crearPlaylist">
      <h2>Actualizar Playlist</h2>

      <form onSubmit={handleSubmit}>
        <div className="nombre-playlist">
          <label htmlFor="playlistName">Nombre de la Playlist:</label>
          <input
            type="text"
            id="playlistName"
            placeholder="Elige tus canciones y ponle nombre a tu playlist"
            value={playlistName}
            onChange={handlePlaylistName}
          />
        </div>
        {errorMessage && (
          <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
        )}
        {canciones.map((song, index) => (
          <div className="listado-canciones" key={index}>
            <input
              type="checkbox"
              id={song._id}
              name={song.songTitle}
              value={song._id}
              onChange={handleCheckboxChange}
              checked={cancionesElegidas.includes(song._id)}
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
          Actualizar Playlist
        </button>
      </form>
    </div>
  );
};

export default ActualizarPlaylist;
