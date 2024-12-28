import React, { useState } from "react";
import { validateUser } from "../../helpers/uservalidations";
import { addUser } from "../../api/userServices";
import "./NuevoUsuario.css";

const NuevoUsuario = ({ agregarUsuario }) => {
  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const [newUser, setNewUser] = useState(initialValues);

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const error = validateUser(newUser);
    if (error) {
      setErrorMessage(error);
      return;
    }

    const response = await addUser(newUser);

    if (response.error) {
      if (response.error.includes("email")) {
        setErrorMessage(
          `El correo "${newUser.email}" ya está registrado. Por favor, elige otro.`
        );
        return;
      } else {
        console.log("response.error es:", response.error);
        console.log("response.error message es:", response.error.message);
        return;
      }
    } else {
      agregarUsuario(newUser);
      setErrorMessage("El usuario ha sido creado");
      setNewUser(initialValues);
    }
  };

  return (
    <div className="nuevo-usuario">
      <h2>Crear Un Usuario</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form className="nuevo-usuario-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={newUser.nombre}
          onChange={handleInputChange}
        />
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          name="apellido"
          placeholder="Ingresa tu apellido"
          value={newUser.apellido}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={newUser.password}
          onChange={handleInputChange}
        />
        <label htmlFor="confirm_password">Confirmar Contraseña:</label>
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirmar Contraseña"
          value={newUser.confirm_password}
          onChange={handleInputChange}
        />
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
};

export default NuevoUsuario;
