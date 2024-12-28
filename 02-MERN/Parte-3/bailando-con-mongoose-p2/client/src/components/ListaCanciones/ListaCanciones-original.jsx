import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ListaCanciones = ({ canciones }) => {
  const parametros = useParams();
  console.log("parámetros dentro de ListaCanciones son:", parametros);
  console.log("canciones dentro de ListaCanciones son:", canciones);
  return (
    <>
      <h2>Lista de Canciones</h2>
      <ul>
        {canciones.length > 0 ? (
          canciones.map((cancion, index) => {
            return (
              <li key={index}>
                <Link to={`/songs/detail/${cancion._id}`}>
                  <h2>{cancion.songTitle}</h2>
                </Link>
              </li>
            );
          })
        ) : (
          <li>No hay canciones disponibles</li>
        )}
      </ul>
    </>
  );
};

export default ListaCanciones;
