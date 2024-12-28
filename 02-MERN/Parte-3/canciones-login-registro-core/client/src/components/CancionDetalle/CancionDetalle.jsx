import { useNavigate, useParams } from "react-router-dom";
import { fetchCanciones, deleteCancion } from "../../api/songServices";
import { Link } from "react-router-dom";
import "./CancionDetalle.css";

const CancionDetalle = ({ canciones, eliminarCancion }) => {
  const parametros = useParams();
  const navigate = useNavigate();
  console.log("canciones en Canción Detalle son: ", canciones);

  const detalleCancion = canciones.find(
    (cancion) => cancion._id === parametros._id
  );
  console.log("detalleCancion en Canción Detalle es: ", detalleCancion);
  if (!detalleCancion) {
    return <h2>Cargando...</h2>;
  }

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

      <Link to={`/songs/update/${detalleCancion._id}`}>
        <button className="botonActualizar">Editar Canción</button>
      </Link>
    </div>
  );
};

export default CancionDetalle;
