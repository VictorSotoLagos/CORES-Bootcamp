import api from "./axiosConfig";

const fetchTareas = async () => {
    const response = await api.get("/tareas"); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

const addTarea = async (nuevaTarea) => {
    const response = await api.post("tareas/add", nuevaTarea); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
return response.data;
  };

  const deleteTarea = async (idTareaParaBorrar) => {
    const response = await api.delete(`tareas/delete/${idTareaParaBorrar}`); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
    console.log("response.data es:", response.data)
    return response.data;
  };

  const putTarea = async (id, TareaParaActualizar) => {
    console.log("Tarea Para Actualizar es:", TareaParaActualizar);
    const response = await api.put(`/tareas/actualizar/${id}`, TareaParaActualizar); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
    console.log("response.data es:", response.data)
    return response.data;
  };

export { fetchTareas, addTarea, deleteTarea, putTarea }; 