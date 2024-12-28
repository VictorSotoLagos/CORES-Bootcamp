import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ListaUsuarios.css";

const ListaUsuarios = ({ allUsers }) => {
  const [input, setInput] = useState("");
  const [userFilter, setUserFilter] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  useEffect(() => {
    const lowerInput = input.toLowerCase();
    setUserFilter(
      allUsers.filter((user) => {
        const nombreCompleto = `${user.nombre.toLowerCase()} ${user.apellido.toLowerCase()}`;
        return (
          user.nombre.toLowerCase().includes(lowerInput) ||
          user.apellido.toLowerCase().includes(lowerInput) ||
          nombreCompleto.includes(lowerInput) ||
          user.email.toLowerCase().includes(lowerInput)
        );
      })
    );
  }, [input, allUsers]);

  useEffect(() => {
    console.log("all users desde componente es:", allUsers);
  }, [allUsers]);

  return (
    <>
      <div className="titulo-seccion">
        <h2>Lista de Usuarios</h2>
      </div>
      <div className="usuario-finder">
        <label htmlFor="input"> Buscar Usuario:</label>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Buscar usuario por nombre, apellido o email..."
        />
      </div>
      <div className="lista-usuarios">
        <ul>
          {allUsers ? (
            userFilter.map((user, index) => {
              return (
                <div className="listado-cancion" key={index}>
                  <li>
                    <div className="user-display">
                      <Link to={`/user/${user._id}`}>
                        Usuario: {user.nombre} {user.apellido}
                      </Link>
                      <span style={{ color: "purple" }}>
                        {" "}
                        Correo: {user.email}
                      </span>
                    </div>
                  </li>
                </div>
              );
            })
          ) : (
            <li>No hay usuarios disponibles</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default ListaUsuarios;
