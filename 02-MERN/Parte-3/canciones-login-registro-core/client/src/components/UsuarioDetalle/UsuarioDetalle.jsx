import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { fetchUsers, deleteUser } from "../../api/userServices";
import { Link } from "react-router-dom";
import "./UsuarioDetalle.css";
import { set } from "mongoose";

const UsuarioDetalle = ({ allUsers, setAllUsers, deleteUserFromState }) => {
  const parametros = useParams();
  console.log(parametros);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const userDetails = allUsers.find((user) => user._id === parametros._id);
  if (!userDetails) {
    return <h2>Cargando...</h2>;
  }

  const eliminarUsuarioDelServidor = async () => {
    const response = await deleteUser(userDetails._id);

    setAllUsers(allUsers.filter((user) => user._id !== userDetails._id));
    console.log("Usuario eliminado con éxito");
    console.log("all users desde componente es:", allUsers);
    navigate("/mostrarUsuarios");
  };

  return (
    <div className="detalleCancion">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        <span style={{ fontWeight: "bold" }}>Nombre del Usuario: </span>
        <span>{userDetails.nombre}</span>
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Apellido: </span>
        <span>{userDetails.apellido}</span>
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Correo Electrónico: </span>
        <span>{userDetails.email}</span>
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Tipo de Usuario: </span>
        <span>{userDetails.tipo_usuario}</span>
      </p>
      <button className="botonEliminar" onClick={eliminarUsuarioDelServidor}>
        Eliminar Usuario
      </button>

      <Link to={`/songs/update/${userDetails._id}`}>
        <button className="botonActualizar">Editar Usuario</button>
      </Link>
    </div>
  );
};

export default UsuarioDetalle;
