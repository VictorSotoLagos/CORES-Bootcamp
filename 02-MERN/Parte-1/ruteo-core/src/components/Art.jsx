import { useParams, useNavigate } from "react-router-dom";
import "./Art.css";

const datosObras = [
  { nombre: "Fuera de este Mundo", img: "/img/id-1.png" },
  { nombre: "Pacientes Holográficos", img: "/img/id-2.png" },
  { nombre: "Lo Alto del Dinero", img: "/img/id-3.png" },
  { nombre: "Nada como la Privacidad en el Hogar", img: "/img/id-4.png" },
  { nombre: "Movernse en la Ciudad", img: "/img/id-5.png" },
  { nombre: "Diversión de Otro Planeta", img: "/img/id-6.png" },
  { nombre: "Espectáculo de la Galaxia", img: "/img/id-7.png" },
  { nombre: "Taxistas", img: "/img/id-8.png" },
];

const Art = () => {
  const { idObra } = useParams();
  const obra = datosObras[idObra - 1];

  const navegar = useNavigate();

  if (!obra) {
    return (
      <div>
        <h2>Obra No Encontrada</h2>
        <button className="boton" onClick={() => navegar("/home")}>
          Volver al Inicio
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>{obra.nombre}</h1>
      <img src={obra.img} className="obra-img" alt={obra.nombre} />
      <div className="botones">
        <button
          className="boton"
          onClick={() => navegar(`/Art/${parseInt(idObra) - 1}`)}
        >
          Anterior
        </button>
        <button className="boton" onClick={() => navegar("/home")}>
          Inicio
        </button>
        <button
          className="boton"
          onClick={() => navegar(`/Art/${parseInt(idObra) + 1}`)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
export default Art;
