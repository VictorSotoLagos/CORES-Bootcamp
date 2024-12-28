import React, { useState, useRef, useEffect } from 'react';
import App from '../App';
import './FormularioUsuario.css';
import ControlEnvio from './ControlEnvio';
import ManejarEnvio from './ManejarEnvio';
import ManejarCambio from './ManejarCambio';
const FormularioUsuario = () => {

    const [formulario, setFormularioAnterior] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        repassword: '',
           
      });


 
      const [registros, setRegistros] = useState([]);


    const [errorFormulario, setErrorFormulario] = useState('');
    const [formularioEnviado, setFormularioEnviado] = useState(false); // Estado para controlar el estado de envío del formulario
     //Estado para ir guardando cada registro;
    // Ref para enfocar el campo de nombre cuando se monta el componente
    const nombreInputRef = useRef(null);
    const apellidoInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const repasswordInputRef = useRef(null);
  // Efecto para enfocar el campo de nombre cuando el componente se monta
  useEffect(() => {
    nombreInputRef.current.focus();
    apellidoInputRef.current.focus();
    emailInputRef.current.focus();
    passwordInputRef.current.focus();
    repasswordInputRef.current.focus();
  }, []);
 


  return (
    <div>
    <form className="form" onSubmit={(evento) => ManejarEnvio(evento, formulario, setFormularioAnterior, setFormularioEnviado, setErrorFormulario, registros, setRegistros)}>
        {/*<div>{ControlEnvio(formularioEnviado)}</div>*/}
        {ControlEnvio(formularioEnviado) && <p style={{ color: 'yellow', fontSize: '16px', fontWeight: 'bold' } }>{ControlEnvio(formularioEnviado)}</p>}
        {errorFormulario && <p style={{ color: 'red', fontSize: '12px', fontWeight: 'bold' } }>{errorFormulario}</p>}
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          placeholder='Ingresa tu nombre'
          value={formulario.nombre}
          onChange={(evento) =>ManejarCambio(evento, setFormularioEnviado, setFormularioAnterior)}
          ref={nombreInputRef}
        />
      </label>
      <label>
        Apellido:
        <input
          type="text"
          name="apellido"
          placeholder='Ingresa tu apellido'
          value={formulario.apellido}
          onChange={(evento) =>ManejarCambio(evento, setFormularioEnviado, setFormularioAnterior)}
          ref={apellidoInputRef}
        />
      </label>
      <label>
        Correo Electrónico:
        <input
          type="text"
          name="email"
          placeholder='Correo electrónico'
          value={formulario.email}
          onChange={(evento) =>ManejarCambio(evento, setFormularioEnviado, setFormularioAnterior)}
          ref={emailInputRef}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="text"
          name="password"
          placeholder='Contraseña'
          value={formulario.password}
          onChange={(evento) =>ManejarCambio(evento, setFormularioEnviado, setFormularioAnterior)}
          ref={passwordInputRef}
        />
      </label>

      <label>
        Confirmar Contraseña:
        <input
          type="text"
          name="repassword"
          placeholder='Confirmar Contraseña'
          value={formulario.repassword}
          onChange={(evento) =>ManejarCambio(evento, setFormularioEnviado, setFormularioAnterior)}
          ref={repasswordInputRef}
        />
      </label>

      <button className="formbutton" type="submit">Crear Superhéroe</button>
     
    </form>
    <div>
    <ul>      
      {registros.map((registro, index) => (              
        <li key={index}>
          <h3>Registro #{index + 1}</h3>
          <p>Nombre: {registro.nombre}</p>
          <p>Apellido: {registro.apellido}</p>
          <p>Correo Electrónico: {registro.email}</p>
        </li>
      ))}
    </ul>
    </div>
  </div> 
  );
}

export default FormularioUsuario;