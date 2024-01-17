import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, stock, precio, img }) => {
  return (
    <div className="tarjeta">
    <img src={img} alt={nombre} className="tarjeta-imagen" />
    <div className="tarjeta-contenido">
        <h2 className="tarjeta-titulo">{nombre}</h2>
        <p className="tarjeta-precio">${precio}</p>
        <p className="tarjeta-descripcion">Stock:{stock}</p>
        <p className="tarjeta-descripcion">ID: {id} </p>
       <button > <Link  className='btn' to={`/item/${id}`} >Ver detalles </Link> </button>
    </div>
</div>
  )
}

export default Item