import api from "./axiosConfig";

const fetchPlaylists = async () => {
    const response = await api.get("/songs/playlists"); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

const addPlaylist = async (nuevaPlaylist) => {
    const response = await api.post("/songs/playlists/add", nuevaPlaylist); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

  /*
  const deleteCancion = async (idCancionParaBorrar) => {
    const response = await api.delete(`/songs/${idCancionParaBorrar}`); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
    console.log("response.data es:", response.data)
    return response.data;
  };

  const actualizarCancion = async (idCancionParaActualizar) => {
    const response = await api.put(`/songs/${idCancionParaActualizar}`); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
    console.log("response.data es:", response.data)
    return response.data;
  };
*/
export { fetchPlaylists, addPlaylist }; 