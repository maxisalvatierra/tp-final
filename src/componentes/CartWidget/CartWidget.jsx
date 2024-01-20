import "./CartWidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);

    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
  return (
    <div className="cart">
      <Link to ="/cart">
        <img className="imgCarrito" src={imgCarrito} alt="Carrito de compras"/>
      </Link>
    <div className="numberCart">
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
    </div>
    </div>


  )
}

export default CartWidget