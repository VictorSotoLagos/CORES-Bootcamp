import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { putTarea } from "../../api/tareasServices";
import { useNavigate } from "react-router-dom";
import editarIcon from "../../assets/editar-icon.png";
import PropTypes from "prop-types";
import { useContext } from "react";
import { UsuarioContext } from "../../contexts/UsuarioContext";
import "./ListaTareas.css";

const ListaTareas = ({ tareas, actualizarTareaEstado, datosTareas }) => {
  const { usuario } = useContext(UsuarioContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  console.log("tareas en Lista Tareas son:", tareas);

  useEffect(() => {
    datosTareas();
  }, []);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const formatearFecha = (fecha) => {
    const opciones = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(fecha).toLocaleDateString("es-ES", opciones);
    console.log("fecha formateada es:", fecha);
  };

  const estilo = (estado) => {
    if (estado === "pendiente") {
      return { backgroundColor: "purple", color: "white" };
    } else if (estado === "enproceso") {
      return { backgroundColor: "#4bab0b", color: "white" };
    } else if (estado === "completa") {
      return { backgroundColor: "darkgreen", color: "white" };
    }
  };

  const imprimirTitulo = (estado) => {
    if (estado === "pendiente") {
      return <h2 style={{ color: "purple" }}>Tareas Pendientes</h2>;
    } else if (estado === "enproceso") {
      return <h2 style={{ color: "#4bab0b" }}>Tareas en Proceso</h2>;
    } else {
      return <h2 style={{ color: "darkgreen" }}>Tareas Completas</h2>;
    }
  };

  const ordenarTareas = (tareasParaOrdenar) =>
    tareasParaOrdenar.sort(
      (a, b) => new Date(a.fecha_limite) - new Date(b.fecha_limite)
    );

  const imprimirTareas = (estado) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.estado === estado);
    const tareasOrdenadas = ordenarTareas(tareasFiltradas);
    console.log("tareas ordenadas son:", tareasOrdenadas);
    return (
      <div className="listado-pendientes">
        {imprimirTitulo(estado)}
        <div className="lista-tareas">
          {tareasFiltradas.map((tarea, index) => (
            <div className="contenedor" key={index}>
              <ul>
                <li>
                  <div className="tarea-detalle">
                    <div className="desc-icon">
                      <h3>{tarea.descripcion_tarea}</h3>
                      {tarea.creadaPor === usuario.id ? (
                        <Link to={`/tareas/editarTarea/${tarea._id}`}>
                          <img src={editarIcon} alt="editar" />
                        </Link>
                      ) : null}
                    </div>
                    <p>Fecha límite:</p>{" "}
                    {new Date(tarea.fecha_limite) <
                    new Date(tarea.updatedAt) ? (
                      <p style={{ color: "red" }}>
                        {formatearFecha(tarea.fecha_limite)}
                      </p>
                    ) : (
                      <p style={{ color: "black" }}>
                        {formatearFecha(tarea.fecha_limite)}
                      </p>
                    )}
                    {tarea.creadaPor === usuario.id ? (
                      tarea.estado === "pendiente" ||
                      tarea.estado === "enproceso" ? (
                        <button
                          className="boton-cambiarestado1"
                          style={estilo(tarea.estado)}
                          onClick={() => cambiarEstado(tarea)}
                        >
                          {tarea.estado === "pendiente"
                            ? "Comenzar Tarea"
                            : "En Proceso"}
                        </button>
                      ) : null
                    ) : null}
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const cambiarEstado = async (tarea) => {
    console.log("tarea es", tarea);
    if (tarea.estado === "pendiente") {
      const tareaActualizada = { ...tarea, estado: "enproceso" };
      console.log("tarea actualizada es", tareaActualizada);
      const response = await putTarea(tareaActualizada._id, tareaActualizada);
      console.log(tareaActualizada);
      actualizarTareaEstado(response.cuerpo);
      console.log(tareaActualizada);
    } else if (tarea.estado === "enproceso") {
      const tareaActualizada = { ...tarea, estado: "completa" };
      console.log("tarea actualizada es", tareaActualizada);
      const response = await putTarea(tareaActualizada._id, tareaActualizada);
      console.log(tareaActualizada);
      actualizarTareaEstado(response.cuerpo);
      console.log(tareaActualizada);
    }
  };

  return (
    <>
      <main className="contenedor-principal">
        {imprimirTareas("pendiente")}
        {imprimirTareas("enproceso")}
        {imprimirTareas("completa")}
      </main>
    </>
  );
};

export default ListaTareas;

ListaTareas.propTypes = {
  tareas: PropTypes.array.isRequired,
  actualizarTareaEstado: PropTypes.func.isRequired,
};
