import ManejarEnvio from "./ManejarEnvio";
import React from "react";
import App from "../App";

const GuardarDatos = (registros) => {
    // Simulamos guardar los datos (puedes hacer una llamada a una API aquí)
    return (
        <div>
            <h2>Datos Guardados</h2>
            <p>Nombre: {registros.nombre}</p>
            <p>Apellido: {registros.apellido}</p>
            <p>Email: {registros.email}</p>
        </div>
    );

};

export default GuardarDatos;