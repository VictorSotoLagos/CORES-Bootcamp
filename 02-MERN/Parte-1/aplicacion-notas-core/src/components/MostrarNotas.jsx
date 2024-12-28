
import './MostrarNotas.css'
import { useState } from 'react'
const MostrarNotas = ({registroNotas, setRegistroNotas, registroNotasCopia, setRegistroNotasCopia}) => {



    const handleEliminar = (id) => {
        
        const notasNoEliminadas = registroNotasCopia.filter((filtro) => filtro.id !== id); // Filtramos en función del identificador único del objeto.
        setRegistroNotas(notasNoEliminadas); // Actualiza setRegistroNotas con la nueva lista de datos filtrados.
        setRegistroNotasCopia(notasNoEliminadas); // y También actualizamos la copia con la nueva lista de datos filtrados.
    };

    return (
    <>
        {registroNotas.map((nota) => (  
            <div key={nota.id} className="nota">
                {console.log("id es:", nota)}            
            <div className='contenido-nota'>{nota.color}{nota.contenido} - {nota.prioridad} </div>
            <div className='contenido-boton'>
                <button className="botonEliminar"onClick={() => handleEliminar(nota.id)}>Eliminar</button>
            </div>
            </div>
           ))}
    </>
    )
}
export default MostrarNotas