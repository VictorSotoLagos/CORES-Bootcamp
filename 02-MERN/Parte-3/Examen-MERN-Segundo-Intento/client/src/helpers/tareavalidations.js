export const validateTarea = (nuevaTarea) => {
  const fechaLimite = new Date(nuevaTarea.fecha_limite);
  const fechaActual = new Date();

    if (nuevaTarea.descripcion_tarea.trim() === "") {
      return "Proporciona la descripción de la tarea";
    }

    if (nuevaTarea.tiempo_estimado === undefined || nuevaTarea.tiempo_estimado === null || nuevaTarea.tiempo_estimado <= 0) {
        return "Proporciona un tiempo estimado válido para la tarea";
      }
    if (!nuevaTarea.fecha_limite || isNaN(new Date(nuevaTarea.fecha_limite).getTime())) {
      return "Proporciona una fecha límite válida para la tarea";
    }
    if (fechaLimite < fechaActual) {
      return "La fecha límite no puede ser anterior a la fecha actual ni tampoco igual a ésta.";
    }
  


    return null;
  };