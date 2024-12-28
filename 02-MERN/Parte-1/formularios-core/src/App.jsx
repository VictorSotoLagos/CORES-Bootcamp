import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioUsuario from './components/FormularioUsuario'
import batman from './img/batman.png';
import MostrarFormulario from './components/GuardarDatos'
import GuardarDatos from './components/GuardarDatos'

function App() {

const datosGuardados = false;

  return (
    <div className="contenedorPrincipal">
      <div className="contenedor col1">
      </div>
      <div className="contenedor col2">
        <h1>Bienvenido a la Liga de Registro de Superhéroes</h1>
        <h2>Registro de Superhéroes</h2>
      <FormularioUsuario /> 
      </div>
      <div className="contenedor col3">
        <img src={batman} className="batman" alt="batman" />
      </div>
    </div>
  )
}

export default App
