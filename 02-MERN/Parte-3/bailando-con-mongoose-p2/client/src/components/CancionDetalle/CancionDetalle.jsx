import { useNavigate, useParams } from "react-router-dom";
import { deleteCancion } from "../../api/songServices";
import "./CancionDetalle.css";

const CancionDetalle = ({ canciones, eliminarCancion }) => {
  const parametros = useParams();
  const navigate = useNavigate();

  const detalleCancion = canciones.find(
    (cancion) => cancion._id === parametros._id
  );
  console.log("detalleCancion en Canción Detalle es: ", detalleCancion);

  const eliminarCancionDelServidor = async () => {
    const response = await deleteCancion(detalleCancion._id);
    eliminarCancion(detalleCancion._id);
    console.log("Canción eliminada con éxito");
    navigate("/songs");
  };

  return (
    <div className="detalleCancion">
      <p>
        <span style={{ fontWeight: "bold" }}>Nombre de la Canción: </span>
        <span>{detalleCancion.songTitle}</span>
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Artista: </span>
        <span>{detalleCancion.artist}</span>
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Género: </span>
        <span>{detalleCancion.genre}</span>
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Año de Lanzamiento: </span>
        <span>{detalleCancion.yearOfRelease}</span>
      </p>
      <button className="botonEliminar" onClick={eliminarCancionDelServidor}>
        Eliminar Canción
      </button>
    </div>
  );
};

export default CancionDetalle;
