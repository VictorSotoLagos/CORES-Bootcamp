import { Routes, Route, NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const obras = [
    { id: 1, nombre: "Fuera de este Mundo", ruta: "1" },
    { id: 2, nombre: "Pacientes Holográficos", ruta: "2" },
    { id: 3, nombre: "Lo Alto del Dinero", ruta: "3" },
    { id: 4, nombre: "Nada como la Privacidad en el Hogar", ruta: "4" },
    { id: 5, nombre: "Movernse en la Ciudad", ruta: "5" },
    { id: 6, nombre: "Diversión de Otro Planeta", ruta: "6" },
    { id: 7, nombre: "Espectáculo de la Galaxia", ruta: "7" },
    { id: 8, nombre: "Taxistas", ruta: "8" },
  ];

  return (
    <div className="inicio-contenedor">
      <h1>Bienvenido a la Galería de Arte Futurista</h1>
      <ul className="obras-lista">
        {obras.map((obra) => (
          <li key={obra.id}>
            <NavLink className="link" to={`/Art/${obra.ruta}`}>
              <h2>{obra.nombre}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
