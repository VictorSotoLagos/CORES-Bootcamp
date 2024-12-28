import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import FormularioTarea from "./components/FormularioTarea/FormularioTarea";
import ListaTareas from "./components/ListaTareas/ListaTareas";
import ActualizarTarea from "./components/ActualizarTarea/ActualizarTarea";
import NuevoUsuario from "./components/NuevoUsuario/NuevoUsuario";
import LoginUser from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import MenuLogin from "./components/MenuLogin/MenuLogin";
import PublicRoutes from "./components/PublicRoutes/PublicRoutes";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import { fetchTareas } from "./api/tareasServices";
import { fetchUsers } from "./api/userServices";
import { useContext } from "react";
import { UsuarioContext } from "./contexts/UsuarioContext";

const App = () => {
  const { usuario } = useContext(UsuarioContext);
  const [tareas, setTareas] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const datosTareas = async () => {
    const response = await fetchTareas(); // Con la implementación del profe sacamos el "try" y su correspondiente "catch".
    console.log("response.ok es:", response);
    console.log("tareas son:", response);
    setTareas(response);
  };
  const datosUsers = async () => {
    const response = await fetchUsers();
    console.log("Usuarios desde el servidor:", response);
    setAllUsers(response); // Actualiza el estado de AllUsers
  };

  useEffect(() => {
    datosTareas();
    datosUsers();
  }, []);

  //Funciones actualizadoras de estado
  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
    console.log("Tareas son:", tareas);
  };

  const eliminarTarea = (id) => {
    const indice = tareas.findIndex((tarea) => tarea._id === id);
    const nuevaListadeTareas = [...tareas];
    nuevaListadeTareas.splice(indice, 1);
    setTareas(nuevaListadeTareas);
  };

  const actualizarTareaEstado = (tareasActualizada) => {
    const indice = tareas.findIndex(
      (tarea) => tarea._id === tareasActualizada._id
    );
    const nuevaListaDeTareas = [...tareas];
    nuevaListaDeTareas[indice] = tareasActualizada;
    setTareas(nuevaListaDeTareas);
    console.log("Tareas son:", tareas);
  };

  const agregarUsuario = (newUser) => {
    setAllUsers([...allUsers, newUser]);
    console.log("New User es:", newUser);
  };

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <MenuLogin />
              <LoginUser />
            </PublicRoutes>
          }
        />
        <Route
          path="/newuser"
          element={
            <PublicRoutes>
              <MenuLogin />
              <NuevoUsuario agregarUsuario={agregarUsuario} />
            </PublicRoutes>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Menu />
              <h2 style={{ textAlign: "center" }}>
                ¡Bienvenido de vuelta, {usuario ? usuario.nombre : "Invitado"} !
              </h2>
            </PrivateRoutes>
          }
        />
        <Route
          path="/tareas"
          element={
            <PrivateRoutes>
              <Menu />
              <ListaTareas
                tareas={tareas}
                actualizarTareaEstado={actualizarTareaEstado}
                datosTareas={datosTareas}
              />
            </PrivateRoutes>
          }
        />
        <Route
          path="/tareas/agregarTarea"
          element={
            <PrivateRoutes>
              <Menu />
              <FormularioTarea agregarTarea={agregarTarea} />
            </PrivateRoutes>
          }
        />
        <Route
          path="/tareas/editarTarea/:_id"
          element={
            <PrivateRoutes>
              <Menu />
              <ActualizarTarea
                tareas={tareas}
                actualizarTareaEstado={actualizarTareaEstado}
                eliminarTarea={eliminarTarea}
              />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default App;
