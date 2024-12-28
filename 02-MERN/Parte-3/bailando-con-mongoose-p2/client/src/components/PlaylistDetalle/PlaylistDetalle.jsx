import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./PlaylistDetalle.css";
//import { deleteCancion } from "../../api/songServices";

const PlaylistDetalle = ({ canciones, totalPlaylists }) => {
  const parametros = useParams();
  const navigate = useNavigate();
  const [filteredPlaylist, setFilteredPlaylist] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("totalPlaylists en useEffect es:", totalPlaylists);
    console.log("canciones en useEffect es:", canciones);
  }, [totalPlaylists, canciones]);

  if (!totalPlaylists || !canciones) {
    return <p>Cargando datos...</p>;
  }

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  useEffect(() => {
    setFilteredPlaylist(
      totalPlaylists.filter((playlist) =>
        playlist.playListName.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input, totalPlaylists, canciones]);

  return (
    <div className="playlists">
      <h2>Lista de Playlists</h2>
      <div className="playlistfinder">
        <label htmlFor="input">Buscar Playlist:</label>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Buscar Playlist..."
        />
      </div>
      <div className="playlist-space">
        {totalPlaylists.length > 0 ? ( // Si hay playlists
          filteredPlaylist.map((playlist) => (
            <div className="fichaPlaylist" key={playlist._id}>
              <h2>{playlist.playListName}</h2>
              {playlist.songs.length === 0 ? (
                <p>No hay canciones en esta playlist</p>
              ) : (
                playlist.songs.map((songId) => {
                  // Aseguramos de que songId sea una cadena
                  const songIdStr = songId.toString();
                  // Busca el nombre de la canción usando el ID
                  const canción = canciones.find(
                    (c) => c._id.toString() === songIdStr
                  );
                  return (
                    <p key={songIdStr}>
                      {canción ? canción.songTitle : "Canción no encontrada"}
                    </p>
                  );
                })
              )}
            </div>
          ))
        ) : (
          <p style={{ color: "red" }}>No hay playlists disponibles</p>
        )}
      </div>
    </div>
  );
};

export default PlaylistDetalle;
