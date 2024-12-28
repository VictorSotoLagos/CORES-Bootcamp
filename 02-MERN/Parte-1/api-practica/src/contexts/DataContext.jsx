import PropTypes from "prop-types";
import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext(); //Creamos el contexto

//Es mejor el contexto y el proveedor en el mismo archivo, dice el profe.
//Lo que vamos a exportar será el DataProvider, no el DataContext.

const DataContextComponent = ({ children }) => {
  //Creamos un componente.
  const [requestedResource, setRequestedResource] = useState({});
  const [resource, setResource] = useState("character"); // Estado para el select

  const datosContexto = {
    requestedResource,
    setRequestedResource,
    resource,
    setResource,
  };

  //Creamos el context provider con lo que queremos que se cargue en el contexto.
  return (
    <DataContext.Provider value={datosContexto}>
      {children}
    </DataContext.Provider>
  );
};

DataContextComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataContext, DataContextComponent };
