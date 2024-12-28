import api from "./axiosConfig";

const fetchCanciones = async () => {
    const response = await api.get("/songs"); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

const addCanciones = async (nuevaCancion) => {
    const response = await api.post("/songs/add", nuevaCancion); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

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

export { fetchCanciones, addCanciones, deleteCancion, actualizarCancion }; 