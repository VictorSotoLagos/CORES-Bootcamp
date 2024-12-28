import { Persona } from "../model/model.persona.js";

let personas = [
  { id: 1, nombre: "Ana", edad: 22, nacionalidad: "chilena", email:"ana@gmail.com" },
  { id: 2, nombre: "Luis", edad: 17, nacionalidad: "argentino", email:"luis@gmail.com" },
  { id: 3, nombre: "Marcos", edad: 80, nacionalidad: "colombiana", email:"marcos@gmail.com" },
  { id: 4, nombre: "Sofía", edad: 59, nacionalidad: "mexicana", email:"sofía@gmail.com" },
  { id: 5, nombre: "Pedro", edad: 90, nacionalidad: "peruana", email:"pedro@gmail.com" },
];

const password = process.env.PASSWORD || "1234";
  

//Listar Personas
  const getPersonas = async (req, res) => {
    const query = req.query; 
    console.log(query);
    try {
      const personasDB = await Persona.find();
      return res.status(200).json(personasDB);
    } catch (error) {
      return res.status(500).json({
        message: 'Error al obtener lista de personas',
        error: error.message,
      });
    }
  }

  /*
  const getPersonas = (req, res) => {
  // Siempre req (require) primero, después la res (respuesta).
  //200 todo esta bien, 400 error del cliente, 500 error del servidor
  return res.status(200).json(personas);
}
*/


//Buscar persona por ID BBDD
const getPersonaID = async (req, res) => {

  try{
    const personasDB = await Persona.findOne({ _id:req.params.id });
    return res.status(200).json(personasDB);

  } catch (error) {
      console.log(error);
    return res.status(500).json({
      message: 'Id incorrecto o no existe',  
      error: error.message,
    })
  }
}



//Buscar persona por ID Antiguo
/*
const getPersonaID = (req, res) => {
    
  const id = req.params.id;


const usuario = personas.find((usuario) => usuario.id == id);
if (!usuario) {
  return res.status(400).json({ error: 'No existe el usuario' });
}

res.json({
  usuario: usuario
});
}
*/

const postPersonas = async (req, res) => {
  const { nombre, edad, país, email } = req.body;

  try {
    // Verificar si ya existe una persona con alguno de los campos únicos
    const yaExiste = await Persona.findOne({
      $or: [
        { nombre },
        { email },
      ]
    });

    if (yaExiste) {
      const errorDuplicado = [];
      if (yaExiste.nombre === nombre) errorDuplicado.push('Ya existe el usuario con ese nombre');
      if (yaExiste.email === email) errorDuplicado.push('Ya existe el usuario con ese email');

      return res.status(400).json({ error: errorDuplicado });
    }
 
    // Crear la nueva persona si no existen conflictos
    const nuevaPersona = await Persona.create(req.body);
    return res.status(201).json({ mensaje: 'Usuario creado', cuerpo: nuevaPersona });

  } catch (error) {
    return res.status(500).json({
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
};
   

/*Agregar Persona (sinDB)
const postPersonas =  (req, res) => {
    const { id, nombre, edad, nacionalidad, email } = req.body;
      if (!id || !nombre || !edad || !nacionalidad || !email) {
        return res.status(400).json({ error: 'Faltan datos' });
  
      const nuevaPersona = { id, nombre, edad, nacionalidad,  email };
      personas.push(nuevaPersona);
      //return res.status(200).json(nuevaPersona); //Preguntar a Guillermo la dif. Necesario retornar?
      res.json({
        mensaje: 'Usuario creado',
        cuerpo: nuevaPersona
      })
    }

    */


//Actualizar persona DB
const putPersonas = async (req, res) => {
  const id = req.params.id;
  const cuerpo = req.body;

  try {
    const personaActualizada = await Persona.findByIdAndUpdate(id, cuerpo, { new: true });
    
    if (!personaActualizada) {
      return res.status(400).json({ error: 'No existe el usuario' });
    }
    
    return res.status(200).json({ mensaje: 'Usuario actualizado', cuerpo: personaActualizada });
    
  } catch (error) {
    return res.status(500).json({
      message: 'Error al actualizar el usuario',
      error: error.message,
    });
  }
}

//Actualizar persona ANTIGUO
/*
const putPersonas = (req, res) => {
    const id = req.params.id;
    const cuerpo = req.body;
    let detectado = false;

    personas.forEach((persona, i) => {
        if (persona.id == id) {
            personas[i] = cuerpo;
            detectado = true;
        } 
      });

      if (detectado)  { 
        res.status(200).json({ mensaje: 'Usuario actualizado', cuerpo }); 
      } else {
        res.status(400).json({ error: 'No existe el usuario' });
      }
}
*/

//Eliminar persona por ID usando BD real
const deletePersona = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Persona.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).json({ error: 'No existe el usuario' });
    }

    res.json({
      mensaje: 'Usuario eliminado',
      cuerpo: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar el usuario',
      error: error.message,
    });
  }
};


//Eliminar persona por ID ANTIGUO
/*
const deletePersona = (req, res) => {
    try {
      const id = req.params.id;
      const persona = personas.find((persona) => persona.id == id);
      if (!persona) {
        return res.status(400).json({ error: 'No existe el usuario' });
      }
      personas = personas.filter((persona) => persona.id != id);
      res.json({
        mensaje: 'Usuario eliminado',
        cuerpo: persona,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error al eliminar el usuario',
        error: error.message,
      });
    }
  };
*/

  /*
    const id = req.params.id;
    cuerpo = req.body;
    personas.forEach((persona, i) => {
          persona[i] = cuerpo;
    });

res.json({
    mensaje: "Todos los usuarios han sido eliminados",
    usuario: usuario
});
}
*/

//Eliminar TODAS las personas
const deleteAllPersona = async (req, res) => {
  try {
    await Persona.deleteMany({});    
    res.json({
      mensaje: "Todas las personas han sido eliminadas",
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar todas las personas',
      error: error.message,
    });
  }
}

export {
  getPersonas,
  getPersonaID,
  postPersonas,
  putPersonas,
  deletePersona,
  deleteAllPersona
}