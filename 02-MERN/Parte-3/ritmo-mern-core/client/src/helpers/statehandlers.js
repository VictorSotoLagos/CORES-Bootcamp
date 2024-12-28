  //Funciones actualizadoras de estado
import { fetchCanciones } from "../api/songServices";
import { fetchPlaylists } from "../api/playlistServices";
  export const agregarCancion = (canciones, setCanciones, nuevaCancion) => {
    setCanciones([...canciones, nuevaCancion]);
    console.log("canciones es:", canciones);
  };

export const agregarPlaylist = (totalPlaylists, setTotalPlaylists, nuevaPlaylist) => {
    setTotalPlaylists([...totalPlaylists, nuevaPlaylist]);
    console.log("totalPlaylists es:", totalPlaylists);
  };

export const eliminarCancion = (canciones, setCanciones, id) => {
    const indice = canciones.findIndex((cancion) => cancion._id === id);
    const nuevaListadeCanciones = [...canciones];
    nuevaListadeCanciones.splice(indice, 1);
    setCanciones(nuevaListadeCanciones);
  };

export const actualizarCancion = (canciones, setCanciones, cancionActualizada) => {
    const indice = canciones.findIndex((cancion) => cancion._id === cancionActualizada._id
    );
    console.log("canciones es:", canciones);
    const nuevaListaDeCanciones = [...canciones];
    nuevaListaDeCanciones[indice] = cancionActualizada;
    setCanciones(nuevaListaDeCanciones);
  };

export const actualizacionPlaylist = (playlistActualizada, setTotalPlaylists, totalPlaylists) => {
    console.log("playlistActualizada es:", playlistActualizada);
    const indice = totalPlaylists.findIndex(
      (playlist) => playlist._id === playlistActualizada._id
    );
    const nuevaListaDePlaylists = [...totalPlaylists];
    nuevaListaDePlaylists[indice] = playlistActualizada;
    setTotalPlaylists(nuevaListaDePlaylists);
  };


  export const cargarDatosIniciales = async (setCanciones, setTotalPlaylists) => {
    const datosCanciones = async () => {
      const response = await fetchCanciones();
      console.log("response.ok es:", response);
      setCanciones(response);
    };
    const datosPlaylists = async () => {
      const response = await fetchPlaylists();
      console.log("Playlists desde el servidor:", response);
      setTotalPlaylists(response);
    };
    await datosCanciones();
    await datosPlaylists();
  };