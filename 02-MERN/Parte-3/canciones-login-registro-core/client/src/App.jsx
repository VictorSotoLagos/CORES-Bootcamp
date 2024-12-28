import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ListaCanciones from "./components/ListaCanciones/ListaCanciones";
import CancionDetalle from "./components/CancionDetalle/CancionDetalle";
import FormularioCancion from "./components/FormularioCancion/FormularioCancion";
import FormularioPlaylist from "./components/FormularioPlaylist/FormularioPlaylist";
import PlaylistDetalle from "./components/PlaylistDetalle/PlaylistDetalle";
import ActualizarCancion from "./components/ActualizarCancion/ActualizarCancion";
import NuevoUsuario from "./components/NuevoUsuario/NuevoUsuario";
import ListaUsuarios from "./components/ListadoUsuarios/ListaUsuarios";
import UsuarioDetalle from "./components/UsuarioDetalle/UsuarioDetalle";
import Menu from "./components/Menu/Menu";
import { fetchCanciones } from "./api/songServices";
import { fetchPlaylists } from "./api/playlistServices";
import { fetchUsers } from "./api/userServices";
import ActualizarPlaylist from "./components/ActualizarPlaylist/ActualizarPlaylist";

const App = () => {
  const [canciones, setCanciones] = useState([]);
  const [totalPlaylists, setTotalPlaylists] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

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
    const datosUsers = async () => {
      const response = await fetchUsers(); // Llama a tu función para obtener playlists
      console.log("Usuarios desde el servidor:", response);
      setAllUsers(response); // Actualiza el estado de totalPlaylists
    };

    datosCanciones();
    datosPlaylists(); // Llama a la función para obtener playlists
    datosUsers();
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

  const actualizarCancion = (cancionActualizada) => {
    const indice = canciones.findIndex(
      (cancion) => cancion._id === cancionActualizada._id
    );
    const nuevaListaDeCanciones = [...canciones];
    nuevaListaDeCanciones[indice] = cancionActualizada;
    setCanciones(nuevaListaDeCanciones);
  };

  const actualizacionPlaylist = (playlistActualizada) => {
    console.log("playlistActualizada es:", playlistActualizada);
    const indice = totalPlaylists.findIndex(
      (playlist) => playlist._id === playlistActualizada._id
    );
    const nuevaListaDePlaylists = [...totalPlaylists];
    nuevaListaDePlaylists[indice] = playlistActualizada;
    setTotalPlaylists(nuevaListaDePlaylists);
  };

  const deleteUserFromState = (id) => {
    const indice = allUsers.findIndex((user) => user._id === id);
    const newUserList = [...allUsers];
    newUserList.splice(indice, 1);
    setAllUsers(newUserList);
  };

  const agregarUsuario = (newUser) => {
    setAllUsers([...allUsers, newUser]);
    console.log("New User es:", newUser);
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
          path="/newuser"
          element={<NuevoUsuario agregarUsuario={agregarUsuario} />}
        />
        <Route
          path="/mostrarUsuarios"
          element={<ListaUsuarios allUsers={allUsers} />}
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
              actualizarCancion={actualizarCancion}
            />
          }
        />
        <Route
          path="/songs/update/:_id"
          element={
            <ActualizarCancion
              canciones={canciones}
              actualizarCancion={actualizarCancion}
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
        <Route
          path="/playlists/:_id"
          element={
            <ActualizarPlaylist
              totalPlaylists={totalPlaylists}
              canciones={canciones}
              actualizacionPlaylist={actualizacionPlaylist}
            />
          }
        />
        <Route
          path="/user/:_id"
          element={
            <UsuarioDetalle
              allUsers={allUsers}
              setAllUsers={setAllUsers}
              deleteUserFromState={deleteUserFromState}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
