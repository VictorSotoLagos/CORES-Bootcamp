import api from "./axiosConfig";

const fetchUsers = async () => {
    const response = await api.get("/users"); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

  /*
const addUser = async (nuevoUsuario) => {
    const response = await api.post("/user/register", nuevoUsuario); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };
*/

  const addUser = async (nuevoUsuario) => {
    try {
      const response = await api.post("/user/register", nuevoUsuario);
      return response.data;
    } catch (error) {
      
      // Manejar el error y devolver un objeto con la propiedad error
      return { error: error.response?.data?.error || "Hubo un error al crear el usuario" };
    }
  };


  const deleteUser = async (idUsuarioBorrar) => {
    const response = await api.delete(`/user/${idUsuarioBorrar}`); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
    console.log("response.data es:", response.data)
    return response.data;
  };

  /*
  const putCancion = async (CancionParaActualizar) => {
    console.log("CancionParaActualizar es:", CancionParaActualizar);
    const response = await api.put(`/${CancionParaActualizar._id}`, CancionParaActualizar); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
    console.log("response.data es:", response.data)
    return response.data;
  };
  */

export { fetchUsers, addUser, deleteUser }; 