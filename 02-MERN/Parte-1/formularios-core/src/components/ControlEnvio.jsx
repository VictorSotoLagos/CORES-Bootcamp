import React from "react";
import FormularioUsuario from "./FormularioUsuario";

const ControlEnvio = (formularioEnviado) => {
    return formularioEnviado ? "¡Felicitaciones, tu formulario ha sido enviado!" : "Por favor, completa tus datos:"
};

export default ControlEnvio;
