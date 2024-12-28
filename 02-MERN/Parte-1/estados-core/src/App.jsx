
import './App.css'
import TarjetaProducto from './components/TarjetaProducto';


function App() {

  return (
    <div className="contenedor">
      <h1>The Rope: Ropa & Prendas Unisex</h1>
      <div className="conjunto-tarjetas">
      <TarjetaProducto nombreProducto="Camisa Blanca" precio={4990} descripcion="Camisa algodón blanca, hombre, talla L, marca " enStock={true} nStock={10}/>
      <TarjetaProducto nombreProducto="Camisa Algodón" precio={12000} descripcion="Camisa algodón gruesa con diseño, hombre, talla M, marca AllVive" enStock={true} nStock={13}/>
      <TarjetaProducto nombreProducto="Jeans Levis Mujer" precio={24000} descripcion="Jeans mujer modelo 357, talla 35, marca Levis" enStock={true} nStock={11}/>
      <TarjetaProducto nombreProducto="Lentes de Sol RayBan" precio={48000} descripcion="Lentes de sol mujer, marca RayBan modelo Outrider" enStock={true} nStock={8}/>
      </div>
    </div>
  )
}

export default App
