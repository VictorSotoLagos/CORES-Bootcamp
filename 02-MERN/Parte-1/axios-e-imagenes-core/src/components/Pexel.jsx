import { useState } from "react";
import axios from "axios";
import { createClient } from "pexels";
import { useEffect } from "react";
import "./pexel.css";
const Pexel = () => {
  const ApiKey = "yxWjkpi85aD6DDJlhK9lvJMMSrJmr0P3rRGzVmvTmjcjAX1W1mXJitp0";
  const [fotoPexel, setFotoPexel] = useState("");
  const [cargando, setCargando] = useState(false);

  const obtenerFoto = async () => {
    setCargando(true);
    try {
      const respuesta = await axios.get(
        "https://api.pexels.com/v1/search?query=nature",
        {
          headers: {
            Authorization: ApiKey,
          },
        }
      );

      const fotoRandom = Math.floor(
        Math.random() * respuesta.data.photos.length
      );
      const urlFoto = respuesta.data.photos[fotoRandom].src.large;
      setFotoPexel(urlFoto); // Actualiza el estado con la URL de la foto
    } catch (error) {
      console.error("Error al obtener la foto:", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerFoto();
  }, []);

  return (
    <div className="api">
      <h1>API de Pexel</h1>
      <button
        onClick={obtenerFoto}
        disabled={cargando}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        {cargando ? "Cargando..." : "Obtener Imagen Random"}
      </button>
      {fotoPexel && (
        <img
          src={fotoPexel}
          alt="Foto API Pexel"
          style={{ marginTop: "10px", maxWidth: "100%", height: "auto" }}
        />
      )}
    </div>
  );
};

export default Pexel;
