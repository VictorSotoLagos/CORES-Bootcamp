import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <h1>¡Bienvenido a Mi Aplicación de React!</h1>
      <h2>Lista de cosas por hacer:</h2>
      <ul className="App-list">
        <li>Aprender React</li>
        <li>Practicar con Vite</li>
        <li>Construir proyectos increíbles</li>
      </ul>
    </main>
  )
}

export default App
