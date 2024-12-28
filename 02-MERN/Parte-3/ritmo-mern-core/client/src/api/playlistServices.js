import api from "./axiosConfig";

//REMEMBER: sShould be api/aongs/playlists/
const fetchPlaylists = async () => {
    const response = await api.get("/playlists"); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

const addPlaylist = async (nuevaPlaylist) => {
    const response = await api.post("/playlists/add", nuevaPlaylist); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

const putPlaylist = async (PlaylistParaActualizar, ID) => {
  console.log("PlaylistParaActualizar es:", PlaylistParaActualizar);
  console.log("PlaylistParaActualizar ID es:", ID);
    const response = await api.put(`/playlists/${ID}`, PlaylistParaActualizar); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
    console.log("response.data de actualización:", response.data)
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
export { fetchPlaylists, addPlaylist, putPlaylist }