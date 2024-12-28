import App from "../App"
import { useState } from 'react'
import './FiltrarNotas.css'
const FiltrarNotas = ({ registroNotas, setRegistroNotas, registroNotasCopia, setRegistroNotasCopia}) => {
//console.log("registroNotas es:", registroNotas);
//console.log("registroNotasCopia es:", registroNotasCopia);
    const handleFilter = (e) => {        
        if (e.target.value !== "todas") {
            const copiaFiltrada = registroNotasCopia.filter((filtro, i) => filtro.prioridad === e.target.value);
            setRegistroNotas(copiaFiltrada);
            return;
        } else  {
            setRegistroNotas(registroNotasCopia);
            return;
        }       
}

    return (
        <div className="contenedor-filtro">
        <p>Filtrar Por:</p>
        <select className="select" onChange={handleFilter}>
            <option value="todas">Todas</option>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
        </select>
       </div> 
    )

}

export default FiltrarNotas