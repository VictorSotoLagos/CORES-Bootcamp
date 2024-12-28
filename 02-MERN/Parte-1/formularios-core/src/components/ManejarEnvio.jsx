import React from "react";
import FormularioUsuario from "./FormularioUsuario";
import GuardarDatos from "./GuardarDatos";

const ManejarEnvio = (evento, formulario, setFormularioAnterior, setFormularioEnviado, setErrorFormulario, registros, setRegistros) => {
  evento.preventDefault();
    
    //Revisamos que los campos no esten vacíos:
    if (!formulario.nombre || !formulario.apellido || !formulario.email || !formulario.password) {
      setErrorFormulario('¡Debes llenar todos los campos!');
      return;
  }  
    if (formulario.nombre.length < 4) {
      
      setErrorFormulario('El nombre debe tener al menos 4 caracteres');
      return;
  }
    if (formulario.email.length < 9 || !formulario.email.includes('@')) {
    setErrorFormulario('El email debe tener al menos 10 caracteres y debe incluir un @');
    return;
}

    if (formulario.repassword !== formulario.password) {
    setErrorFormulario('Las contraseñas no coinciden');
    return;
  }


   // Aquí podríamos enviar los datos a un servidor
    // Guardamos los datos para que puedan ser desplegados en el DOM  
    setRegistros([...registros, formulario]);

  // Después de enviar, limpiamos el campo de nombre de setFormularioAnterior

  setFormularioEnviado(true);
  setFormularioAnterior({nombre: '', apellido: '', email: '', password: '', repassword: ''});
  setErrorFormulario('');
  console.log(registros);
  };

export default ManejarEnvio;


