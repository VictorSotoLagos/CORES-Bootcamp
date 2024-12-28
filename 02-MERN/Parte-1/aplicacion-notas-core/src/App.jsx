import { useState } from 'react'
import CrearNotas from './components/CrearNotas';
import MostrarNotas from './components/MostrarNotas';
import './app.css'
import FiltrarNotas from './components/FiltrarNotas';


function App() {



  const formularioNotasTipo = {
    contenido: '',
    prioridad: 'alta',
    id: 0,
    }

  const [notas, setNotas] = useState(formularioNotasTipo);
  const [registroNotas, setRegistroNotas] = useState([]);
  const [registroNotasCopia, setRegistroNotasCopia] = useState([]);


  return (
    <div className='contenedorPrincipal'>
      
      <CrearNotas notas={notas}
                  setNotas={setNotas} 
                  registroNotas={registroNotas} 
                  setRegistroNotas={setRegistroNotas} 
                  setRegistroNotasCopia={setRegistroNotasCopia}/>
      
      <FiltrarNotas registroNotas={registroNotas} 
                    setRegistroNotas={setRegistroNotas} 
                    registroNotasCopia={registroNotasCopia}
                    setRegistroNotasCopia={setRegistroNotasCopia}/>
      
      <MostrarNotas registroNotas={registroNotas} 
                    setRegistroNotas={setRegistroNotas} 
                    registroNotasCopia={registroNotasCopia}
                    setRegistroNotasCopia={setRegistroNotasCopia}/>
      

      
    </div>
  )
}

export default App
