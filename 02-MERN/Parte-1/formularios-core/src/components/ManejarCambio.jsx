import React from "react";
import FormularioUsuario from "./FormularioUsuario";

const ManejarCambio = (evento, setFormularioEnviado, setFormularioAnterior) => { 
    const { name, value } = evento.target;  // Extraemos el "nombre" y el "value" del campo que dispara el evento
    setFormularioEnviado(false); 
    setFormularioAnterior((prevState) => ({
      ...prevState,  // Mantenemos todos los valores actuales del formulario
      [name]: value, // Actualizamos el campo que coincide con el at    ributo "name"
    }));
    

  };

  export default ManejarCambio;
  