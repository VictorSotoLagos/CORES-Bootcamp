import App from "../App";
import './CrearNotas.css'
import { useState } from "react";

const CrearNotas = ({notas, setNotas, registroNotas, setRegistroNotas, registroNotasCopia, setRegistroNotasCopia}) => {
    
    const [nextId, setNextId] = useState(1); // Inicializa el ID con 1

    // Función para generar un nuevo ID y actualizar el estado de nextId
    const CreadorId = () => {
        const nuevoId = nextId;
        setNextId(nextId + 1); // Incrementa el ID para el próximo uso
        return nuevoId; // Retorna el ID actual
    };
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setNotas({...notas, [name]: value})
        //console.log("NOTAS:", notas);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const idGenerado = CreadorId();
    console.log("idGenerado es:", idGenerado);


        setRegistroNotas([...registroNotas, notas]);
        setRegistroNotasCopia([...registroNotas, notas]);
        setNotas({
            contenido: '',
            prioridad: 'alta',
            id: idGenerado,
        });
    
        console.log("La nueva nota objeto es:",notas);
    //const CreadorId = () => Math.floor(Math.random()*1000);

      
    }

    return (
        <>
        <div className="contenedor-formulario">            
            <form className="form" onSubmit={handleSubmit}>
                <h2>Crear Notas</h2>
                <label htmlFor="contenido" className="form-label">Escribe tu Nota</label>
                <input type="text" className="inputForm" id="contenido" placeholder="Escribe tu Nota" name="contenido" value={notas.contenido} onChange={handleChange} />
                <label htmlFor="prioridad" className="form-label">Ingresa prioridad:</label>
                <select name="prioridad" className="inputForm" id="prioridad" value={notas.prioridad} onChange={handleChange}>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                </select>
                <button className="botonSubmit" type="submit">Agregar Nota</button>
            </form>
        </div>
        </>
    )
}

export default CrearNotas