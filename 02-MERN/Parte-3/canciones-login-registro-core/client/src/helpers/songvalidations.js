export const validateSong = (nuevaCancion) => {
    if (nuevaCancion.songTitle.trim() === "") {
      return "Debes incluir un título para la canción";
    }
    if (nuevaCancion.songTitle.length < 6) {
      return "El título de la canción debe tener al menos 6 caracteres";
    }
    if (nuevaCancion.artist.trim() === "") {
      return "Debes incluir un artista para la canción";
    }
    if (nuevaCancion.genre.trim() === "") {
      return "Debes incluir un género para la canción";
    }
    if (nuevaCancion.yearOfRelease.toString() === "") {
      return "Por favor indica el año de lanzamiento";
    }
    if (nuevaCancion.yearOfRelease.toString().length !== 4) {
      return "El año de lanzamiento debe tener 4 dígitos";
    }
    if (nuevaCancion.yearOfRelease < 2000) {
      return "El año de lanzamiento debe ser igual o mayor a 2000";
    }
    if (nuevaCancion.yearOfRelease > 2024) {
      return "El año de lanzamiento no puede ser mayor a 2024";
    }
    return null;
  };