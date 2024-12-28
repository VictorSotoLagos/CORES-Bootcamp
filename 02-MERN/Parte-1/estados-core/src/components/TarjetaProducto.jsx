import React from 'react';
import './TarjetaProducto.css';
import { useState } from 'react';

const TarjetaProducto = (props) => {
  const { nombreProducto, precio, descripcion, enStock, nStock} = props;
  const [stock, setStock] = useState(nStock);
  const [stockDisponible, setStockDisponible] = useState(enStock);

  const actualizarStock = () => {
    setStock((stockActual) => {
      const nuevoStock = stockActual - 1; // Restamos 1 al stock anterior
      if (nuevoStock < 1) {
        setStockDisponible(false); // Si el nuevo stock es 0 o menor, marcamos como no disponible
        return null; // Garantizamos que el stock no baje de 0
      }
      return nuevoStock;
    });
  };

  return (
    <div className="tarjeta">
      <h2>{nombreProducto}</h2>
      <h3>${precio}</h3>
      <p>{descripcion}</p>
      <h3 style={{ color: stockDisponible ? 'green' : 'red' }}>
  {stockDisponible? "En Stock:" : "Agotado"} {stock}</h3>
      <button onClick={actualizarStock}>Comprar</button>

  
    </div>
  );
};

export default TarjetaProducto;