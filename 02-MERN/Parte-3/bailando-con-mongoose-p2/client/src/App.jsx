import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ListaCanciones from "./components/ListaCanciones/ListaCanciones";
import CancionDetalle from "./components/CancionDetalle/CancionDetalle";
import FormularioCancion from "./components/FormularioCancion/FormularioCancion";
import FormularioPlaylist from "./components/FormularioPlaylist/FormularioPlaylist";
import PlaylistDetalle from "./components/PlaylistDetalle/PlaylistDetalle";
import Menu from "./components/Menu/Menu";
import { fetchCanciones } from "./api/songServices";
import { fetchPlaylists } from "./api/playlistServices";

const App = () => {
  const [canciones, setCanciones] = useState([]);
  const [totalPlaylists, setTotalPlaylists] = useState([]);

  useEffect(() => {
    const datosCanciones = async () => {
      const response = await fetchCanciones(); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
      console.log("response.ok es:", response);
      setCanciones(response);
    };

    const datosPlaylists = async () => {
      const response = await fetchPlaylists(); // Llama a tu función para obtener playlists
      console.log("Playlists desde el servidor:", response);
      setTotalPlaylists(response); // Actualiza el estado de totalPlaylists
    };

    datosCanciones();
    datosPlaylists(); // Llama a la función para obtener playlists
  }, []);

  //Funciones actualizadoras de estado
  const agregarCancion = (nuevaCancion) => {
    setCanciones([...canciones, nuevaCancion]);
    console.log("canciones es:", canciones);
  };

  const agregarPlaylist = (nuevaPlaylist) => {
    setTotalPlaylists([...totalPlaylists, nuevaPlaylist]);
    console.log("totalPlaylists es:", totalPlaylists);
  };

  const eliminarCancion = (id) => {
    const indice = canciones.findIndex((cancion) => cancion._id === id);
    const nuevaListadeCanciones = [...canciones];
    nuevaListadeCanciones.splice(indice, 1);
    setCanciones(nuevaListadeCanciones);
  };

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
              eliminarCancion={eliminarCancion}
            />
          }
        />
        <Route
          path="/songs/addSongForm"
          element={<FormularioCancion agregarCancion={agregarCancion} />}
        />
        <Route
          path="/songs/addPlaylistForm"
          element={
            <FormularioPlaylist
              canciones={canciones}
              agregarPlaylist={agregarPlaylist}
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
      </Routes>
    </Router>
  );
};

export default App;
