import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import "./MostrarRecursos.css";

const MostrarRecursos = () => {
  const { requestedResource } = useContext(DataContext);
  const { resource } = useContext(DataContext);

  const RenderDetallesRecurso = () => {
    switch (resource) {
      case "character":
        return (
          <>
            <h2>Nombre: {requestedResource.name}</h2>
            <h2>Estado: {requestedResource.status}</h2>
            <h2>Especie: {requestedResource.species}</h2>
            <h2>Género: {requestedResource.gender}</h2>
            <img src={requestedResource.image} alt={requestedResource.name} />
          </>
        );
      case "location":
        return (
          <>
            <h2>Nombre: {requestedResource.name}</h2>
            <h2>Tipo: {requestedResource.type}</h2>
            <h2>Dimensión: {requestedResource.dimension}</h2>
            <h2>Residentes: {requestedResource.residents?.length || 0}</h2>
          </>
        );
      case "episode":
        return (
          <>
            <h2>Título: {requestedResource.name}</h2>
            <h2>Fecha de emisión: {requestedResource.air_date}</h2>
            <h2>Episodio: {requestedResource.episode}</h2>
            <h2>Personajes: {requestedResource.characters?.length || 0}</h2>
          </>
        );
      default:
        return <p>No se encontró el recurso solicitado.</p>;
    }
  };

  return (
    <div>
      <h1>Consulta API de Rick & Morty</h1>
      <div className="card">
        {requestedResource.error ? (
          <h2 style={{ color: "red" }}>{requestedResource.error}</h2>
        ) : (
          <h2>Detalles del Recurso</h2>
        )}
        {RenderDetallesRecurso()}
      </div>
    </div>
  );
};

export default MostrarRecursos;
