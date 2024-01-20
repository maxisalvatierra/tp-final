import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import { CardImg } from 'react-bootstrap';

const ItemDetail = ({id, nombre, stock, precio, img}) => {
  const [agregarCantidad, setAgregarCantidad]  = useState(0);


  const {agregarAlCarrito} = useContext(CarritoContext);
  
  

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  
    return (
      <div className='contenedorItem'>
      <Card className="text-center">
        <Card.Header>{nombre}</Card.Header>
        <Card.Body>
        <div className='img'>
        <Card.Footer><CardImg src={img}/></Card.Footer>
        </div>
          <Card.Title> Precio:${precio}</Card.Title>
          <Card.Text>
            Stock {stock}
          </Card.Text>
          <Button variant="secondary"> {
          agregarCantidad > 0 ? (<Link className="btn" to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }</Button>
        </Card.Body>
       
      
    
  

      </Card>
      </div>
      )
}



export default ItemDetail