import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ListaCanciones from "./components/ListaCanciones/ListaCanciones";
import CancionDetalle from "./components/CancionDetalle/CancionDetalle";
import FormularioCancion from "./components/FormularioCancion/FormularioCancion";
import FormularioPlaylist from "./components/FormularioPlaylist/FormularioPlaylist";
import PlaylistDetalle from "./components/PlaylistDetalle/PlaylistDetalle";
import ActualizarCancion from "./components/ActualizarCancion/ActualizarCancion";
import Menu from "./components/Menu/Menu";
import ActualizarPlaylist from "./components/ActualizarPlaylist/ActualizarPlaylist";
import {
  agregarCancion,
  agregarPlaylist,
  eliminarCancion,
  actualizarCancion,
  actualizacionPlaylist,
  cargarDatosIniciales,
} from "./helpers/statehandlers";

const App = () => {
  const [canciones, setCanciones] = useState([]);
  const [totalPlaylists, setTotalPlaylists] = useState([]);

  useEffect(() => {
    cargarDatosIniciales(setCanciones, setTotalPlaylists);
  }, []);

  return (
    <Router>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <h2 style={{ textAlign: "center" }}>
              Bienvenido a la App de Música
            </h2>
          }
        />
        <Route
          path="/songs"
          element={<ListaCanciones canciones={canciones} />}
        />
        <Route
          path="/songs/detail/:_id"
          element={
            <CancionDetalle
              canciones={canciones}
              eliminarCancion={(cancionAEliminar) =>
                eliminarCancion(canciones, setCanciones, cancionAEliminar)
              }
            />
          }
        />
        <Route
          path="/songs/update/:_id"
          element={
            <ActualizarCancion
              canciones={canciones}
              actualizarCancion={(cancionActualizada) =>
                actualizarCancion(canciones, setCanciones, cancionActualizada)
              }
            />
          }
        />
        <Route
          path="/songs/addSongForm"
          element={
            <FormularioCancion
              agregarCancion={(nuevaCancion) =>
                agregarCancion(canciones, setCanciones, nuevaCancion)
              }
            />
          }
        />
        <Route
          path="/songs/addPlaylistForm"
          element={
            <FormularioPlaylist
              canciones={canciones}
              agregarPlaylist={() =>
                agregarPlaylist(totalPlaylists, setTotalPlaylists)
              }
            />
          }
        />
        <Route
          path="/songs/allplaylists"
          element={
            <PlaylistDetalle
              canciones={canciones}
              totalPlaylists={totalPlaylists}
            />
          }
        />
        <Route
          path="/playlists/:_id"
          element={
            <ActualizarPlaylist
              playlists={totalPlaylists}
              canciones={canciones}
              actualizarPlaylist={(nuevaPlaylist) =>
                actualizacionPlaylist(
                  totalPlaylists,
                  setTotalPlaylists,
                  nuevaPlaylist
                )
              }
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
