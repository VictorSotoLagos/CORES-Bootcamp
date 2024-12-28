import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../contexts/DataContext";
const Menu = () => {
  const [input, setInput] = useState(""); // Estado para el input numérico
  const { requestedResource, setRequestedResource } = useContext(DataContext);
  const { resource, setResource } = useContext(DataContext);

  const handleSelect = (e) => {
    setResource(e.target.value);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const apiCall = () => {
    axios
      .get(`https://rickandmortyapi.com/api/${resource}/${input}`)
      .then((response) => {
        setRequestedResource(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setRequestedResource({
          error: "No se encuentra el recurso solicitado",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiCall();
  };

  useEffect(() => {
    apiCall();
  }, [resource, input]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="select">Recurso:</label>
      <select id="select" value={resource} onChange={handleSelect}>
        <option value="character">Personaje</option>
        <option value="location">Locación</option>
        <option value="episode">Episodio</option>
      </select>

      <label htmlFor="id">ID:</label>
      <input
        type="number"
        id="id"
        value={input}
        placeholder="Ingrese un ID"
        onChange={handleInput}
      />

      <button type="submit">Consultar</button>
    </form>
  );
};

export default Menu;
