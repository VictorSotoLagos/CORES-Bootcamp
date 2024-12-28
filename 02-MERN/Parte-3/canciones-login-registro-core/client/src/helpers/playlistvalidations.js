export const validatePlaylist = (playlistName, cancionesElegidas) => {
    if (playlistName.trim() === "") {
      return "Debes incluir un nombre para la playlist";
    }
    if (cancionesElegidas.length === 0) {
      return "Debes seleccionar al menos una canción para la playlist";
    }
    return null;
};