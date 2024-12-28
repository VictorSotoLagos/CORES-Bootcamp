import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import estilos from "./FormularioTarea.module.css";
import { addTarea } from "../../api/tareasServices";
import { validateTarea } from "../../helpers/tareavalidations";
import { useContext } from "react";
import { UsuarioContext } from "../../contexts/UsuarioContext";
import PropTypes from "prop-types";

const FormularioTarea = ({ agregarTarea }) => {
  const { usuario } = useContext(UsuarioContext);
  console.log(usuario);

  const valoresIniciales = {
    descripcion_tarea: "",
    tiempo_estimado: "",
    fecha_limite: "",
    creadaPor: "",
  };

  const [nuevaTarea, SetNuevaTarea] = useState(valoresIniciales);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    SetNuevaTarea({ ...nuevaTarea, [name]: value });
    console.log(nuevaTarea);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(nuevaTarea);
    const error = validateTarea(nuevaTarea);
    if (error) {
      setErrorMessage(error);
      return;
    }

    const tareaParaEnviar = {
      descripcion_tarea: nuevaTarea.descripcion_tarea,
      tiempo_estimado: nuevaTarea.tiempo_estimado,
      // Asegúrate de que fecha_limite sea una fecha válida
      fecha_limite: new Date(nuevaTarea.fecha_limite).toISOString(),
      creadaPor: usuario.id,
    };
    console.log("tarea para enviar es", tareaParaEnviar);

    const response = await addTarea(tareaParaEnviar);
    console.log("respuesta data + body es:", response);
    agregarTarea(response.cuerpo);
    SetNuevaTarea(valoresIniciales);
    setErrorMessage("Tarea agregada exitosamente");
    navigate("/tareas");
  };

  return (
    <div className={estilos.contenedorFormulario}>
      <h2 className={estilos.tituloFormulario}>Agregar Tarea</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className={estilos.grupoFormulario}>
          <label>Descripción:</label>
          <textarea
            style={{
              width: "380px",
              height: "120px",
              border: "2px solid green",
            }}
            name="descripcion_tarea"
            value={nuevaTarea.descripcion_tarea}
            placeholder="Ingresar descripción de la tarea"
            onChange={handleChange}
          />
        </div>
        <div className={estilos.grupoFormulario}>
          <label>Tiempo Estimado</label>
          <input
            type="Number"
            name="tiempo_estimado"
            value={nuevaTarea.tiempo_estimado}
            placeholder="Ingresar número de días como tiempo estimado"
            onChange={handleChange}
          />
        </div>
        <div className={estilos.grupoFormulario}>
          <label>Fecha Límite</label>
          <input
            type="date"
            name="fecha_limite"
            value={nuevaTarea.fecha_limite}
            placeholder="Ingresar la fecha límite"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={estilos.botonEnviar}>
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};

export default FormularioTarea;

FormularioTarea.propTypes = {
  agregarTarea: PropTypes.func.isRequired,
};
