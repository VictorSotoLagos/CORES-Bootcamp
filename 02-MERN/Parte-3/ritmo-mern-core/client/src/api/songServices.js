import api from "./axiosConfig";

const fetchCanciones = async () => {
    const response = await api.get("/"); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

const addCanciones = async (nuevaCancion) => {
    const response = await api.post("/add", nuevaCancion); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

  const deleteCancion = async (idCancionParaBorrar) => {
    const response = await api.delete(`/${idCancionParaBorrar}`); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
    console.log("response.data es:", response.data)
    return response.data;
  };

  const putCancion = async (CancionParaActualizar) => {
    console.log("CancionParaActualizar es:", CancionParaActualizar);
    const response = await api.put(`/${CancionParaActualizar._id}`, CancionParaActualizar); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
    console.log("response.data es:", response.data)
    return response.data;
  };

export { fetchCanciones, addCanciones, deleteCancion, putCancion }; 