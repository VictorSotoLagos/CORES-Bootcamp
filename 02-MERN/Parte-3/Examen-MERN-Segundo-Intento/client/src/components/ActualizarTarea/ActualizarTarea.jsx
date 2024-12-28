import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ActualizarTarea.css";
import { putTarea, deleteTarea } from "../../api/tareasServices";
import { validateTarea } from "../../helpers/tareavalidations";
import { useEffect } from "react";
import PropTypes from "prop-types";

const ActualizarTarea = ({ tareas, actualizarTareaEstado, eliminarTarea }) => {
  const parametros = useParams();
  console.log(parametros);
  const navigate = useNavigate();
  const [tareaAEditar, setTareaAEditar] = useState({
    descripcion_tarea: "",
    tiempo_estimado: "",
    fecha_limite: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const tareaActual = tareas.find((tarea) => tarea._id === parametros._id);
    console.log("tarea actual es:", tareaActual);
    if (tareaActual) {
      setTareaAEditar(tareaActual);
      console.log("detalle tarea es:", tareaActual);
    }
  }, [tareas]);

  console.log("tarea a editar es:", tareaAEditar);

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setTareaAEditar({ ...tareaAEditar, [name]: value });
    console.log(tareaAEditar);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(tareaAEditar);
    const error = validateTarea(tareaAEditar);
    if (error) {
      setErrorMessage(error);
      return;
    }

    const response = await putTarea(tareaAEditar._id, tareaAEditar);
    console.log("respuesta data + body es:", response);
    actualizarTareaEstado(response.cuerpo);

    setErrorMessage("Tarea actualizada exitosamente");
    navigate("/tareas");
  };

  const formatearFechaDeBD = (fecha) => {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const borrarTarea = async (e) => {
    e.preventDefault();
    const response = await deleteTarea(tareaAEditar._id);
    console.log("respuesta data + body es:", response);
    eliminarTarea(tareaAEditar._id);
    console.log("tarea eliminada es:", response.cuerpo);
    setErrorMessage("Tarea eliminada exitosamente");
    navigate("/tareas");
  };

  return (
    <div className="actualizar">
      <h2>Actualizar Tarea</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <form className="actualizar-form" onSubmit={handleSubmit}>
        <div>
          <label>Descripción:</label>
          <textarea
            style={{
              width: "380px",
              height: "120px",
              border: "2px solid green",
            }}
            name="descripcion_tarea"
            value={tareaAEditar.descripcion_tarea}
            placeholder="Ingresar descripción de la tarea"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tiempo Estimado</label>
          <input
            type="Number"
            name="tiempo_estimado"
            value={tareaAEditar.tiempo_estimado}
            placeholder="Ingresar número de días como tiempo estimado"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha Límite</label>
          <input
            type="date"
            name="fecha_limite"
            value={formatearFechaDeBD(tareaAEditar.fecha_limite)}
            placeholder="Ingresar la fecha límite"
            onChange={handleChange}
            disabled
          />
        </div>

        <button className="boton-guardar" type="submit">
          Editar Tarea
        </button>
        <button className="boton-guardar" type="submit" onClick={borrarTarea}>
          Eliminar Tarea
        </button>
      </form>
    </div>
  );
};

export default ActualizarTarea;

ActualizarTarea.propTypes = {
  tareas: PropTypes.array.isRequired,
  actualizarTareaEstado: PropTypes.func.isRequired,
  eliminarTarea: PropTypes.func.isRequired,
};
