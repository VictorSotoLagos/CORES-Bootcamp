import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className = "main">
        <header className = "header">
        </header>
        <div className = "contenedor">
          <div className = "subcontenedor-izq">
           <div className="contenedor-azul">
              <div className="caja-azul"></div>
              <div className="caja-azul"></div>
              <div className="caja-azul"></div>
            </div>
            <div className = "caja-verde"></div>
          </div>
          <div className = "subcontenedor-der">
          </div>
        </div>
      </main>
    </>
  )
}

export default App
